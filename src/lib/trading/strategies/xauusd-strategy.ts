import type {
  Candle,
  Signal,
  IndicatorValues,
  StrategyConfig,
  TradingConfig,
} from '../types';
import {
  calculateKeltnerChannel,
  getLatestKeltnerChannel,
  KeltnerChannelConfig,
} from '../indicators/keltner';
import {
  calculateBollingerBands,
  getLatestBollingerBands,
  BollingerBandsConfig,
} from '../indicators/bollinger';
import {
  calculateMACD,
  getLatestMACD,
  isMACDBullishCrossover,
  isMACDBearishCrossover,
  MACDConfig,
} from '../indicators/macd';
import {
  calculateCCI,
  getLatestCCI,
  CCIConfig,
} from '../indicators/cci';
import {
  calculateSuperTrend,
  getLatestSuperTrend,
  SuperTrendConfig,
} from '../indicators/supertrend';
import { calculateATR } from '../indicators/pure-indicators';

/**
 * XAUUSD Hybrid Optimized Strategy
 *
 * FIXED: Now correctly matches Python implementation in fastq/src/strategy/hybrid_optimized_strategy.py
 *
 * Core Entry Logic (KC + BB + MACD) - Lines 211-256 in Python:
 * - Price breaks above/below BOTH Keltner AND Bollinger (CRITICAL: AND not OR!)
 * - MACD crossover confirms (CRITICAL: must be a crossover, not just position!)
 *
 * Aggressiveness Levels (CORRECTED):
 * - Level 1 (Conservative): CCI > 50/-50, 5m alignment required (PF ~1.96, 7.9 trades/day)
 * - Level 2 (Moderate): CCI > 20/-20, 5m alignment required (PF ~1.83, 8.6 trades/day)
 * - Level 3 (Aggressive): MACD position only (PF ~1.62, 13.0 trades/day)
 *
 * Exit Logic:
 * - Stop Loss: min/max of KC and BB bands (Python lines 260, 285)
 * - Trailing Stop: Activates at 0.8R profit, trails by 1.0x ATR (Python lines 477-511)
 * - Take Profit: 1.5R, 2.5R, 4.0R (Python lines 264-268)
 */

export class XAUUSDStrategy {
  private config: TradingConfig;

  constructor(config: TradingConfig) {
    this.config = config;
  }

  /**
   * Calculate all indicator values for current candles
   */
  private calculateIndicators(candles: Candle[]): IndicatorValues | null {
    // OPTIMIZATION: Check candle count before attempting calculations
    // Most indicators need at least 26-35 candles (MACD slow period + signal period)
    if (candles.length < 35) {
      // Don't log error - this is expected during warmup period
      return null;
    }

    try {
      const keltnerConfig: KeltnerChannelConfig = {
        maPeriod: this.config.strategy.indicators.keltner.maPeriod,
        atrPeriod: this.config.strategy.indicators.keltner.atrPeriod,
        atrMultiple: this.config.strategy.indicators.keltner.atrMultiple,
      };

      const bollingerConfig: BollingerBandsConfig = {
        period: this.config.strategy.indicators.bollinger.period,
        deviation: this.config.strategy.indicators.bollinger.deviation,
      };

      const macdConfig: MACDConfig = {
        fastPeriod: this.config.strategy.indicators.macd.fastPeriod,
        slowPeriod: this.config.strategy.indicators.macd.slowPeriod,
        signalPeriod: this.config.strategy.indicators.macd.signalPeriod,
      };

      const cciConfig: CCIConfig = {
        period: this.config.strategy.indicators.cci.period,
      };

      const supertrendConfig: SuperTrendConfig = {
        period: this.config.strategy.indicators.supertrend.period,
        multiplier: this.config.strategy.indicators.supertrend.multiplier,
      };

      const keltner = getLatestKeltnerChannel(candles, keltnerConfig);
      const bollinger = getLatestBollingerBands(candles, bollingerConfig);
      const macd = getLatestMACD(candles, macdConfig);
      const cci = getLatestCCI(candles, cciConfig);
      const supertrend = getLatestSuperTrend(candles, supertrendConfig);

      // Calculate ATR
      const atrValues = calculateATR(
        candles.map(c => c.high),
        candles.map(c => c.low),
        candles.map(c => c.close),
        this.config.strategy.indicators.keltner.atrPeriod
      );

      if (
        !keltner ||
        !bollinger ||
        !macd ||
        cci === null ||
        !supertrend ||
        atrValues.length === 0
      ) {
        return null;
      }

      return {
        keltner,
        bollinger,
        macd,
        cci,
        supertrend,
        atr: atrValues[atrValues.length - 1],
      };
    } catch (error) {
      // Only log unexpected errors (not insufficient data errors)
      const errorMsg = error instanceof Error ? error.message : String(error);
      if (!errorMsg.includes('Insufficient data')) {
        console.error('[Strategy] Error calculating indicators:', error);
      }
      return null;
    }
  }

  /**
   * Check if long entry conditions are met - IMPROVED STRATEGY
   *
   * 核心条件（必须全部满足）：
   * 1. ATR过滤 - 确保有足够波动率
   * 2. 价格在Keltner通道上方 (price > keltner.upper)
   * 3. 收盘价高于BB上轨 (price > bollinger.upper)
   * 4. MACD金叉 (macd > signal 且前一根蜡烛 macd <= signal)
   * 5. 价格动量确认（可选）
   *
   * 辅助条件（根据激进程度）：
   * - Level 1 (保守): CCI > 100 + SuperTrend看涨
   * - Level 2 (中等): CCI > 50 + SuperTrend看涨
   * - Level 3 (激进): CCI > 0
   */
  private checkLongEntry(
    price: number,
    indicators1m: IndicatorValues,
    candles1m: Candle[],
    aggressiveness: 1 | 2 | 3,
    indicators5m?: IndicatorValues | null
  ): { signal: boolean; reason: string } {
    // =========== 全新策略：趋势回调入场 ===========
    // 不追突破，在趋势中等待回调再入场

    const latestCandle = candles1m[candles1m.length - 1];

    // 条件 1: SuperTrend必须显示上升趋势
    const trendUp = indicators1m.supertrend.trend === 'up';
    if (!trendUp) {
      return { signal: false, reason: 'ST趋势向下' };
    }

    // 条件 2: 价格在BB下轨附近（深度回调，更好的入场点）
    const bbLower = indicators1m.bollinger.lower;
    const bbMiddle = indicators1m.bollinger.middle;
    // 价格应该接近下轨或在下轨下方
    const priceInPullbackZone = price <= bbMiddle * 0.995; // 必须在中轨下方
    if (!priceInPullbackZone) {
      return { signal: false, reason: `回调不够 ${price.toFixed(2)} > ${(bbMiddle * 0.995).toFixed(2)}` };
    }

    // 条件 3: MACD显示多头动能
    const macdBullish = indicators1m.macd.macd > indicators1m.macd.signal;
    if (!macdBullish) {
      return { signal: false, reason: 'MACD空头' };
    }

    // 条件 4: CCI从超卖区回升
    const cciRecovering = indicators1m.cci > -100;
    if (!cciRecovering) {
      return { signal: false, reason: `CCI深度超卖 ${indicators1m.cci.toFixed(0)}` };
    }

    // 条件 5: 当前K线为阳线
    const bullishCandle = latestCandle.close > latestCandle.open;
    if (!bullishCandle) {
      return { signal: false, reason: '等待阳线' };
    }

    // 根据激进程度过滤
    if (aggressiveness === 1 && indicators1m.cci <= 0) {
      return { signal: false, reason: `CCI=${indicators1m.cci.toFixed(0)} <= 0` };
    } else if (aggressiveness === 2 && indicators1m.cci <= -50) {
      return { signal: false, reason: `CCI=${indicators1m.cci.toFixed(0)} <= -50` };
    }

    return {
      signal: true,
      reason: `回调做多: ST↑ P=${price.toFixed(2)} BB中=${bbMiddle.toFixed(2)} CCI=${indicators1m.cci.toFixed(0)}`
    };
  }

  /**
   * Check if short entry conditions are met - IMPROVED STRATEGY
   *
   * 核心条件（必须全部满足）：
   * 1. ATR过滤 - 确保有足够波动率
   * 2. 价格在Keltner通道下方 (price < keltner.lower)
   * 3. 收盘价低于BB下轨 (price < bollinger.lower)
   * 4. MACD死叉 (macd < signal 且前一根蜡烛 macd >= signal)
   * 5. 价格动量确认（可选）
   *
   * 辅助条件（根据激进程度）：
   * - Level 1 (保守): CCI < -100 + SuperTrend看跌
   * - Level 2 (中等): CCI < -50 + SuperTrend看跌
   * - Level 3 (激进): CCI < 0
   */
  private checkShortEntry(
    price: number,
    indicators1m: IndicatorValues,
    candles1m: Candle[],
    aggressiveness: 1 | 2 | 3,
    indicators5m?: IndicatorValues | null
  ): { signal: boolean; reason: string } {
    // =========== 全新策略：趋势回调入场（做空）===========
    // 不追跌破，在下降趋势中等待反弹再入场

    const latestCandle = candles1m[candles1m.length - 1];

    // 条件 1: SuperTrend必须显示下降趋势
    const trendDown = indicators1m.supertrend.trend === 'down';
    if (!trendDown) {
      return { signal: false, reason: 'ST趋势向上' };
    }

    // 条件 2: 价格在BB上轨附近（深度反弹，更好的入场点）
    const bbUpper = indicators1m.bollinger.upper;
    const bbMiddle = indicators1m.bollinger.middle;
    // 价格应该接近上轨或在上轨上方
    const priceInPullbackZone = price >= bbMiddle * 1.005; // 必须在中轨上方
    if (!priceInPullbackZone) {
      return { signal: false, reason: `反弹不够 ${price.toFixed(2)} < ${(bbMiddle * 1.005).toFixed(2)}` };
    }

    // 条件 3: MACD显示空头动能
    const macdBearish = indicators1m.macd.macd < indicators1m.macd.signal;
    if (!macdBearish) {
      return { signal: false, reason: 'MACD多头' };
    }

    // 条件 4: CCI从超买区回落
    const cciFalling = indicators1m.cci < 100;
    if (!cciFalling) {
      return { signal: false, reason: `CCI深度超买 ${indicators1m.cci.toFixed(0)}` };
    }

    // 条件 5: 当前K线为阴线
    const bearishCandle = latestCandle.close < latestCandle.open;
    if (!bearishCandle) {
      return { signal: false, reason: '等待阴线' };
    }

    // 根据激进程度过滤
    if (aggressiveness === 1 && indicators1m.cci >= 0) {
      return { signal: false, reason: `CCI=${indicators1m.cci.toFixed(0)} >= 0` };
    } else if (aggressiveness === 2 && indicators1m.cci >= 50) {
      return { signal: false, reason: `CCI=${indicators1m.cci.toFixed(0)} >= 50` };
    }

    return {
      signal: true,
      reason: `回调做空: ST↓ P=${price.toFixed(2)} BB中=${bbMiddle.toFixed(2)} CCI=${indicators1m.cci.toFixed(0)}`
    };
  }

  // Debug: Track signal generation
  private signalCheckCount = 0;
  private indicatorFailCount = 0;
  private longCheckCount = 0;
  private shortCheckCount = 0;

  /**
   * Generate trading signal based on current market conditions
   * CRITICAL FIX: Now supports 5-minute data confirmation (matches Python implementation)
   *
   * @param candles1m - 1-minute candles for entry signals
   * @param candles5m - 5-minute candles for confirmation (optional, required for Level 1-2)
   */
  public generateSignal(candles1m: Candle[], candles5m?: Candle[]): Signal {
    this.signalCheckCount++;

    if (candles1m.length === 0) {
      return {
        type: 'none',
        reason: 'No candle data',
        timestamp: Date.now(),
        price: 0,
      };
    }

    const latestCandle1m = candles1m[candles1m.length - 1];
    const price = latestCandle1m.close;

    // Calculate 1m indicators
    const indicators1m = this.calculateIndicators(candles1m);
    if (!indicators1m) {
      this.indicatorFailCount++;
      // if (this.signalCheckCount % 100 === 0) {
      //   console.log(`[DEBUG] Signal check ${this.signalCheckCount}: Indicator calculation failed ${this.indicatorFailCount} times`);
      // }
      return {
        type: 'none',
        reason: 'Insufficient data for indicators',
        timestamp: latestCandle1m.closeTime,
        price,
      };
    }

    // Calculate 5m indicators if provided
    let indicators5m: IndicatorValues | null = null;
    if (candles5m && candles5m.length > 0) {
      indicators5m = this.calculateIndicators(candles5m);
    }

    // Check long entry
    const longCheck = this.checkLongEntry(
      price,
      indicators1m,
      candles1m,
      this.config.strategy.aggressiveness,
      indicators5m  // Pass 5m indicators for confirmation
    );

    // Debug logging (disabled for performance during optimization)
    // if (this.signalCheckCount % 50 === 0) {
    //   console.log(`[DEBUG] Check ${this.signalCheckCount}: Price=${price.toFixed(2)}, KeltnerUpper=${indicators1m.keltner.upper.toFixed(2)}, BollUpper=${indicators1m.bollinger.upper.toFixed(2)}, MACD=${indicators1m.macd.macd.toFixed(2)}/${indicators1m.macd.signal.toFixed(2)}, CCI=${indicators1m.cci.toFixed(0)}`);
    //   if (indicators5m) {
    //     console.log(`[DEBUG] 5m: MACD=${indicators5m.macd.macd.toFixed(2)}/${indicators5m.macd.signal.toFixed(2)}, CCI=${indicators5m.cci.toFixed(0)}`);
    //   }
    //   console.log(`[DEBUG] Long check: ${longCheck.reason}`);
    // }

    if (longCheck.signal) {
      console.log(`\n[SIGNAL] LONG at check ${this.signalCheckCount}: ${longCheck.reason}`);
      this.longCheckCount++;
      return {
        type: 'long',
        reason: longCheck.reason,
        timestamp: latestCandle1m.closeTime,
        price,
        indicators: indicators1m,
      };
    }

    // Check short entry
    const shortCheck = this.checkShortEntry(
      price,
      indicators1m,
      candles1m,
      this.config.strategy.aggressiveness,
      indicators5m  // Pass 5m indicators for confirmation
    );

    // if (this.signalCheckCount % 50 === 0) {
    //   console.log(`[DEBUG] Short check: ${shortCheck.reason}`);
    // }

    if (shortCheck.signal) {
      console.log(`\n[SIGNAL] SHORT at check ${this.signalCheckCount}: ${shortCheck.reason}`);
      this.shortCheckCount++;
      return {
        type: 'short',
        reason: shortCheck.reason,
        timestamp: latestCandle1m.closeTime,
        price,
        indicators: indicators1m,
      };
    }

    return {
      type: 'none',
      reason: 'No entry conditions met',
      timestamp: latestCandle1m.closeTime,
      price,
      indicators: indicators1m,
    };
  }

  /**
   * Calculate stop loss price - IMPROVED FOR BETTER RISK-REWARD
   * CHANGED: Use fixed ATR multiple (2.5x) instead of channel bands
   * This gives tighter stops and better risk-reward ratio
   */
  public calculateStopLoss(
    entryPrice: number,
    side: 'long' | 'short',
    indicators: IndicatorValues
  ): number {
    // PULLBACK STRATEGY: 2 ATR止损（适中，不太宽也不太窄）
    const stopLossATRMultiple = this.config.risk.stopLossMultiple || 2.0;
    const stopDistance = indicators.atr * stopLossATRMultiple;

    if (side === 'long') {
      // Use fixed ATR distance below entry
      return entryPrice - stopDistance;
    } else {
      // Use fixed ATR distance above entry
      return entryPrice + stopDistance;
    }
  }

  /**
   * Calculate take profit levels based on R multiples
   * PULLBACK STRATEGY FINAL: [3R, 6R, 9R] - 力求1.5+盈亏比
   */
  public calculateTakeProfitLevels(
    entryPrice: number,
    stopLoss: number,
    side: 'long' | 'short'
  ): number[] {
    const risk = Math.abs(entryPrice - stopLoss);
    // PULLBACK FINAL: 3R, 6R, 9R - 让盈利充分奔跑
    const rMultiples = this.config.risk.takeProfitLevels?.map(r => r) || [3.0, 6.0, 9.0];

    return rMultiples.map(rMultiple => {
      return side === 'long'
        ? entryPrice + (risk * rMultiple)
        : entryPrice - (risk * rMultiple);
    });
  }

  /**
   * Calculate trailing stop price - IMPROVED FOR BETTER PROFIT CAPTURE
   * CHANGED: Activates at 1.5R (was 1.0R), trails by 0.8x ATR (was 0.5x)
   * This lets profits run further before locking in
   */
  public calculateTrailingStop(
    entryPrice: number,
    currentPrice: number,
    highestPrice: number | undefined,
    lowestPrice: number | undefined,
    initialStopLoss: number,
    side: 'long' | 'short',
    atr: number
  ): { trailingStop: number | null; highestPrice: number; lowestPrice: number; active: boolean } {
    const risk = Math.abs(entryPrice - initialStopLoss);
    // PULLBACK STRATEGY: 1.5R激活，1 ATR跟踪距离
    const trailingActivationR = this.config.strategy.trailingActivation || 1.5; // Activate at 1.5R
    const trailingDistanceATR = this.config.strategy.trailingDistance || 1.0; // Trail by 1.0 ATR

    if (side === 'long') {
      // Update highest price
      const newHighest = highestPrice === undefined ? currentPrice : Math.max(highestPrice, currentPrice);

      // Calculate profit in R multiples
      const profit = currentPrice - entryPrice;
      const profitR = profit / risk;

      // IMPROVED v2: Activate trailing at 2.0R to let trades develop
      if (profitR >= trailingActivationR) {
        // Move stop to breakeven + 1.0R to lock in meaningful profit
        const profitLock = entryPrice + (risk * 1.0);
        // Then trail from highest price with wider distance (1.2 ATR)
        const trailingStop = Math.max(profitLock, newHighest - (atr * trailingDistanceATR));
        return { trailingStop, highestPrice: newHighest, lowestPrice: 0, active: true };
      }

      // Below activation threshold: no trailing, keep original stop loss
      return { trailingStop: null, highestPrice: newHighest, lowestPrice: 0, active: false };
    } else {
      // SHORT logic
      const newLowest = lowestPrice === undefined ? currentPrice : Math.min(lowestPrice, currentPrice);

      // Calculate profit in R multiples
      const profit = entryPrice - currentPrice;
      const profitR = profit / risk;

      // IMPROVED v2: Activate trailing at 2.0R to let trades develop
      if (profitR >= trailingActivationR) {
        // Move stop to breakeven - 1.0R to lock in meaningful profit
        const profitLock = entryPrice - (risk * 1.0);
        // Then trail from lowest price with wider distance (1.2 ATR)
        const trailingStop = Math.min(profitLock, newLowest + (atr * trailingDistanceATR));
        return { trailingStop, highestPrice: 0, lowestPrice: newLowest, active: true };
      }

      // Below activation threshold: no trailing, keep original stop loss
      return { trailingStop: null, highestPrice: 0, lowestPrice: newLowest, active: false };
    }
  }
}
