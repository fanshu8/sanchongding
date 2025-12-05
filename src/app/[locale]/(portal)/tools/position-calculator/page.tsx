"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

interface ExchangeRates {
  [key: string]: number;
}

interface CryptoPrice {
  symbol: string;
  price: string;
}

interface CryptoPrices {
  [key: string]: number;
}

export default function PositionCalculatorPage() {
  const { language } = useLanguage();
  const isZh = language === 'zh';

  // Input states
  const [accountBalance, setAccountBalance] = useState<string>('10000');
  const [riskPercentage, setRiskPercentage] = useState<string>('2');
  const [stopLossPips, setStopLossPips] = useState<string>('50');
  const [currencyPair, setCurrencyPair] = useState<string>('BTCUSDT');
  const [accountCurrency, setAccountCurrency] = useState<string>('USDT');
  const [takeProfitPips, setTakeProfitPips] = useState<string>('100');
  const [leverage, setLeverage] = useState<string>('100');

  // Exchange rates state
  const [exchangeRates, setExchangeRates] = useState<ExchangeRates>({});
  const [cryptoPrices, setCryptoPrices] = useState<CryptoPrices>({});
  const [ratesLoading, setRatesLoading] = useState<boolean>(true);
  const [ratesError, setRatesError] = useState<string>('');

  // Calculated results
  const [results, setResults] = useState({
    lotSize: 0,
    riskAmount: 0,
    pipValue: 0,
    potentialProfit: 0,
    riskRewardRatio: 0,
    marginRequired: 0,
    currentPrice: 0,
  });

  // Fetch real-time cryptocurrency prices and exchange rates
  useEffect(() => {
    const fetchRates = async () => {
      try {
        setRatesLoading(true);
        setRatesError('');

        // Fetch cryptocurrency prices from Binance public API (no key required)
        const cryptoSymbols = ['BTCUSDT', 'ETHUSDT', 'BNBUSDT', 'SOLUSDT', 'ADAUSDT', 'DOGEUSDT', 'XRPUSDT', 'DOTUSDT'];
        const cryptoResponse = await fetch(`https://api.binance.com/api/v3/ticker/price`);

        if (!cryptoResponse.ok) {
          throw new Error('Failed to fetch crypto prices');
        }

        const cryptoData: CryptoPrice[] = await cryptoResponse.json();
        const cryptoPricesMap: CryptoPrices = {};

        cryptoData.forEach((item: CryptoPrice) => {
          if (cryptoSymbols.includes(item.symbol)) {
            cryptoPricesMap[item.symbol] = parseFloat(item.price);
          }
        });

        setCryptoPrices(cryptoPricesMap);

        // Fetch fiat exchange rates for account currency conversion
        const forexResponse = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
        if (!forexResponse.ok) {
          throw new Error('Failed to fetch forex rates');
        }

        const forexData = await forexResponse.json();
        setExchangeRates(forexData.rates);

        setRatesLoading(false);
      } catch {
        setRatesError(isZh ? '无法获取实时价格，使用默认值' : 'Cannot fetch real-time prices, using defaults');
        setRatesLoading(false);

        // Fallback to approximate crypto prices
        setCryptoPrices({
          BTCUSDT: 95000,
          ETHUSDT: 3400,
          BNBUSDT: 650,
          SOLUSDT: 180,
          ADAUSDT: 0.95,
          DOGEUSDT: 0.35,
          XRPUSDT: 2.20,
          DOTUSDT: 7.50,
        });

        // Fallback exchange rates
        setExchangeRates({
          EUR: 0.92,
          GBP: 0.79,
          CNY: 7.24,
        });
      }
    };

    fetchRates();
    // Refresh prices every 30 seconds for crypto (more frequent than forex)
    const interval = setInterval(fetchRates, 30 * 1000);
    return () => clearInterval(interval);
  }, [isZh]);

  // Get current price for cryptocurrency pair
  const getCurrentPrice = useCallback((pair: string): number => {
    // Check if it's a crypto pair (exists in cryptoPrices)
    if (cryptoPrices[pair]) {
      return cryptoPrices[pair];
    }

    // For non-crypto pairs or if crypto price not available, return 0
    return 0;
  }, [cryptoPrices]);

  // Calculate price movement value for cryptocurrency pairs
  const calculatePipValue = useCallback((pair: string, lotSize: number, accountCurr: string): number => {
    // For cryptocurrency, we calculate value per $1 price movement
    // Since crypto trading typically uses different lot sizes

    // Standard crypto lot conventions:
    // BTC: 1 lot = 1 BTC
    // ETH: 1 lot = 1 ETH
    // etc.

    // Value of $1 movement = lot size × 1
    let pipValueInUSDT = lotSize * 1;

    // Convert from USDT to account currency if needed
    if (accountCurr === 'USDT' || accountCurr === 'USD' || accountCurr === 'BUSD') {
      return pipValueInUSDT;
    } else {
      // Convert to other fiat currencies
      const usdToAccount = exchangeRates[accountCurr] || 1;
      return pipValueInUSDT * usdToAccount;
    }
  }, [exchangeRates]);

  // Calculate position with useCallback to avoid dependency issues
  const calculatePosition = useCallback(() => {
    const balance = parseFloat(accountBalance) || 0;
    const risk = parseFloat(riskPercentage) || 0;
    const slPips = parseFloat(stopLossPips) || 0;
    const tpPips = parseFloat(takeProfitPips) || 0;
    const lev = parseFloat(leverage) || 1;

    if (balance <= 0 || risk <= 0 || slPips <= 0 || lev <= 0) {
      setResults({
        lotSize: 0,
        riskAmount: 0,
        pipValue: 0,
        potentialProfit: 0,
        riskRewardRatio: 0,
        marginRequired: 0,
        currentPrice: 0,
      });
      return;
    }

    const riskAmount = balance * (risk / 100);
    const currentPrice = getCurrentPrice(currencyPair);

    // Step 1: Calculate pip value for 1 standard lot
    const pipValuePerLot = calculatePipValue(currencyPair, 1, accountCurrency);

    // Step 2: Calculate required lot size based on risk
    // Formula: Lot Size = Risk Amount / (Stop Loss Pips × Pip Value per Lot)
    const lotSize = riskAmount / (slPips * pipValuePerLot);

    // Step 3: Calculate actual pip value for the calculated lot size
    const actualPipValue = calculatePipValue(currencyPair, lotSize, accountCurrency);

    // Step 4: Calculate potential profit
    const potentialProfit = actualPipValue * tpPips;

    // Step 5: Calculate risk/reward ratio
    const riskRewardRatio = tpPips / slPips;

    // Step 6: Calculate margin required for cryptocurrency
    // For crypto: position value = lot size × current price
    // (lot size represents amount of crypto, not contract size)
    const positionValue = lotSize * currentPrice;
    const marginRequired = positionValue / lev;

    setResults({
      lotSize: Math.round(lotSize * 100) / 100,
      riskAmount: Math.round(riskAmount * 100) / 100,
      pipValue: Math.round(actualPipValue * 100) / 100,
      potentialProfit: Math.round(potentialProfit * 100) / 100,
      riskRewardRatio: Math.round(riskRewardRatio * 100) / 100,
      marginRequired: Math.round(marginRequired * 100) / 100,
      currentPrice: Math.round(currentPrice * 100000) / 100000,
    });
  }, [accountBalance, riskPercentage, stopLossPips, currencyPair, takeProfitPips, leverage, accountCurrency, getCurrentPrice, calculatePipValue]);

  // Real-time calculation
  useEffect(() => {
    if (!ratesLoading && Object.keys(cryptoPrices).length > 0) {
      calculatePosition();
    }
  }, [calculatePosition, ratesLoading, cryptoPrices]);

  // Check if enough margin
  const hasEnoughMargin = parseFloat(accountBalance) >= results.marginRequired;

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black dark:text-white mb-4">
            {isZh ? '数字货币仓位计算器' : 'Cryptocurrency Position Size Calculator'}
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {isZh
              ? '基于实时价格，精确计算推荐的交易数量、保证金需求和风险收益比'
              : 'Calculate recommended position size, margin requirement, and risk/reward ratio based on real-time prices'}
          </p>

          {/* Exchange Rate Status */}
          <div className="mt-4 text-sm">
            {ratesLoading ? (
              <span className="text-gray-500 dark:text-gray-500">
                {isZh ? '正在获取实时价格...' : 'Fetching real-time prices...'}
              </span>
            ) : ratesError ? (
              <span className="text-yellow-600 dark:text-yellow-500">⚠ {ratesError}</span>
            ) : (
              <span className="text-green-600 dark:text-green-500">
                ✓ {isZh ? '实时价格已更新' : 'Real-time prices updated'}
              </span>
            )}
          </div>
        </div>

        {/* Main Calculator */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Input Section */}
          <div className="bg-white dark:bg-gray-800 p-8 border-2 border-black dark:border-white">
            <h2 className="text-2xl font-bold text-black dark:text-white mb-6 pb-3 border-b-2 border-black dark:border-white">
              {isZh ? '输入参数' : 'Input Parameters'}
            </h2>

            <div className="space-y-6">
              {/* Account Balance */}
              <div>
                <label className="block text-sm font-bold text-black dark:text-white mb-2">
                  {isZh ? '账户余额' : 'Account Balance'} ({accountCurrency})
                </label>
                <input
                  type="number"
                  value={accountBalance}
                  onChange={(e) => setAccountBalance(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-black dark:text-white focus:border-black dark:focus:border-white outline-none"
                  placeholder="10000"
                />
              </div>

              {/* Risk Percentage */}
              <div>
                <label className="block text-sm font-bold text-black dark:text-white mb-2">
                  {isZh ? '风险百分比 (%)' : 'Risk Percentage (%)'}
                </label>
                <input
                  type="number"
                  value={riskPercentage}
                  onChange={(e) => setRiskPercentage(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-black dark:text-white focus:border-black dark:focus:border-white outline-none"
                  placeholder="2"
                  step="0.1"
                />
                <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                  {isZh ? '推荐：1-2%' : 'Recommended: 1-2%'}
                </p>
              </div>

              {/* Leverage */}
              <div>
                <label className="block text-sm font-bold text-black dark:text-white mb-2">
                  {isZh ? '杠杆倍数' : 'Leverage'}
                </label>
                <select
                  value={leverage}
                  onChange={(e) => setLeverage(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-black dark:text-white focus:border-black dark:focus:border-white outline-none"
                >
                  <option value="1">1:1</option>
                  <option value="10">1:10</option>
                  <option value="20">1:20</option>
                  <option value="50">1:50</option>
                  <option value="100">1:100</option>
                  <option value="200">1:200</option>
                  <option value="400">1:400</option>
                  <option value="500">1:500</option>
                  <option value="1000">1:1000</option>
                </select>
                <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                  {isZh ? '杠杆越高，所需保证金越低' : 'Higher leverage requires less margin'}
                </p>
              </div>

              {/* Stop Loss Pips */}
              <div>
                <label className="block text-sm font-bold text-black dark:text-white mb-2">
                  {isZh ? '止损价格点数 (Price Points)' : 'Stop Loss (Price Points)'}
                </label>
                <input
                  type="number"
                  value={stopLossPips}
                  onChange={(e) => setStopLossPips(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-black dark:text-white focus:border-black dark:focus:border-white outline-none"
                  placeholder="50"
                />
              </div>

              {/* Take Profit Pips */}
              <div>
                <label className="block text-sm font-bold text-black dark:text-white mb-2">
                  {isZh ? '目标价格点数 (Price Points)' : 'Take Profit (Price Points)'}
                </label>
                <input
                  type="number"
                  value={takeProfitPips}
                  onChange={(e) => setTakeProfitPips(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-black dark:text-white focus:border-black dark:focus:border-white outline-none"
                  placeholder="100"
                />
              </div>

              {/* Currency Pair */}
              <div>
                <label className="block text-sm font-bold text-black dark:text-white mb-2">
                  {isZh ? '交易对' : 'Trading Pair'}
                </label>
                <select
                  value={currencyPair}
                  onChange={(e) => setCurrencyPair(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-black dark:text-white focus:border-black dark:focus:border-white outline-none"
                >
                  <option value="BTCUSDT">BTC/USDT</option>
                  <option value="ETHUSDT">ETH/USDT</option>
                  <option value="BNBUSDT">BNB/USDT</option>
                  <option value="SOLUSDT">SOL/USDT</option>
                  <option value="ADAUSDT">ADA/USDT</option>
                  <option value="DOGEUSDT">DOGE/USDT</option>
                  <option value="XRPUSDT">XRP/USDT</option>
                  <option value="DOTUSDT">DOT/USDT</option>
                </select>
                {results.currentPrice > 0 && (
                  <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                    {isZh ? '当前价格' : 'Current Price'}: ${results.currentPrice.toFixed(2)}
                  </p>
                )}
              </div>

              {/* Account Currency */}
              <div>
                <label className="block text-sm font-bold text-black dark:text-white mb-2">
                  {isZh ? '账户货币' : 'Account Currency'}
                </label>
                <select
                  value={accountCurrency}
                  onChange={(e) => setAccountCurrency(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-black dark:text-white focus:border-black dark:focus:border-white outline-none"
                >
                  <option value="USDT">USDT</option>
                  <option value="USD">USD</option>
                  <option value="BUSD">BUSD</option>
                </select>
              </div>
            </div>
          </div>

          {/* Results Section */}
          <div className="bg-black dark:bg-white p-8 border-2 border-black dark:border-white">
            <h2 className="text-2xl font-bold text-white dark:text-black mb-6 pb-3 border-b-2 border-white dark:border-black">
              {isZh ? '计算结果' : 'Calculation Results'}
            </h2>

            <div className="space-y-6">
              {/* Lot Size */}
              <div className="bg-white dark:bg-gray-900 p-4 border-2 border-white dark:border-gray-700">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                  {isZh ? '推荐数量' : 'Recommended Amount'}
                </p>
                <p className="text-3xl font-bold text-black dark:text-white">
                  {results.lotSize.toFixed(4)}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                  {currencyPair.replace('USDT', '')}
                </p>
              </div>

              {/* Margin Required */}
              <div className={`bg-white dark:bg-gray-900 p-4 border-2 ${
                hasEnoughMargin
                  ? 'border-green-500 dark:border-green-500'
                  : 'border-red-500 dark:border-red-500'
              }`}>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                  {isZh ? '所需保证金' : 'Margin Required'}
                </p>
                <p className={`text-3xl font-bold ${
                  hasEnoughMargin
                    ? 'text-green-600 dark:text-green-500'
                    : 'text-red-600 dark:text-red-500'
                }`}>
                  ${results.marginRequired.toFixed(2)}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                  {hasEnoughMargin
                    ? (isZh ? '✓ 保证金充足' : '✓ Sufficient margin')
                    : (isZh ? '✗ 保证金不足' : '✗ Insufficient margin')
                  }
                </p>
              </div>

              {/* Risk Amount */}
              <div className="bg-white dark:bg-gray-900 p-4 border-2 border-white dark:border-gray-700">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                  {isZh ? '风险金额' : 'Risk Amount'}
                </p>
                <p className="text-3xl font-bold text-black dark:text-white">
                  ${results.riskAmount.toFixed(2)}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                  {riskPercentage}% {isZh ? '的账户余额' : 'of account balance'}
                </p>
              </div>

              {/* Potential Profit */}
              <div className="bg-white dark:bg-gray-900 p-4 border-2 border-white dark:border-gray-700">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                  {isZh ? '潜在盈利' : 'Potential Profit'}
                </p>
                <p className="text-3xl font-bold text-green-600 dark:text-green-500">
                  ${results.potentialProfit.toFixed(2)}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                  {isZh ? '如果达到止盈' : 'If take profit is hit'}
                </p>
              </div>

              {/* Risk Reward Ratio */}
              <div className="bg-white dark:bg-gray-900 p-4 border-2 border-white dark:border-gray-700">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                  {isZh ? '盈亏比' : 'Risk/Reward Ratio'}
                </p>
                <p className="text-3xl font-bold text-black dark:text-white">
                  1:{results.riskRewardRatio.toFixed(2)}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                  {results.riskRewardRatio >= 2
                    ? (isZh ? '✓ 优秀' : '✓ Excellent')
                    : results.riskRewardRatio >= 1.5
                    ? (isZh ? '⚠ 可接受' : '⚠ Acceptable')
                    : (isZh ? '✗ 过低' : '✗ Too Low')
                  }
                </p>
              </div>

              <div className="bg-white dark:bg-gray-900 p-4 border-2 border-white dark:border-gray-700">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                  {isZh ? '每点价值' : 'Per Point Value'}
                </p>
                <p className="text-2xl font-bold text-black dark:text-white">
                  ${results.pipValue.toFixed(4)}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                  {isZh ? '基于实时价格' : 'Based on real-time prices'}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Usage Guide */}
        <div className="bg-gray-50 dark:bg-gray-800 p-8 border-2 border-gray-200 dark:border-gray-700 mb-8">
          <h2 className="text-2xl font-bold text-black dark:text-white mb-6 pb-3 border-b-2 border-black dark:border-white">
            {isZh ? '使用说明' : 'How to Use'}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-bold text-black dark:text-white mb-3">
                {isZh ? '📝 计算公式' : '📝 Formula'}
              </h3>
              <div className="bg-white dark:bg-gray-900 p-4 border border-gray-300 dark:border-gray-700">
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2 font-mono">
                  {isZh
                    ? '数量 = 风险金额 ÷ (止损价格点数 × 每点价值)'
                    : 'Amount = Risk Amount ÷ (SL Points × Point Value)'}
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2 font-mono">
                  {isZh
                    ? '保证金 = 数量 × 价格 ÷ 杠杆'
                    : 'Margin = Amount × Price ÷ Leverage'}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-500 mt-3">
                  {isZh
                    ? '现货交易：1倍杠杆；合约交易：最高125倍杠杆'
                    : 'Spot: 1x leverage; Futures: Up to 125x leverage'}
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-black dark:text-white mb-3">
                {isZh ? '⚠️ 重要提示' : '⚠️ Important Notes'}
              </h3>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-black dark:text-white font-bold">•</span>
                  <span>{isZh ? '确保账户有足够保证金' : 'Ensure sufficient margin in account'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-black dark:text-white font-bold">•</span>
                  <span>{isZh ? '建议单笔风险不超过2%' : 'Recommended risk per trade: max 2%'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-black dark:text-white font-bold">•</span>
                  <span>{isZh ? '盈亏比建议至少1:2' : 'Risk/Reward ratio: minimum 1:2'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-black dark:text-white font-bold">•</span>
                  <span>{isZh ? '高杠杆增加风险，谨慎使用' : 'High leverage increases risk, use cautiously'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-black dark:text-white font-bold">•</span>
                  <span>{isZh ? '价格每5分钟自动更新' : 'Prices auto-update every 5 minutes'}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Example */}
        <div className="bg-white dark:bg-gray-800 p-8 border-2 border-black dark:border-white">
          <h2 className="text-2xl font-bold text-black dark:text-white mb-6 pb-3 border-b-2 border-black dark:border-white">
            {isZh ? '实战案例' : 'Real Example'}
          </h2>

          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <p className="font-bold text-black dark:text-white">
              {isZh ? '场景：' : 'Scenario:'}
            </p>
            <ul className="space-y-2 ml-4">
              <li className="flex items-start gap-2">
                <span className="text-black dark:text-white font-bold">•</span>
                <span>{isZh ? '账户余额：$10,000（USDT）' : 'Account Balance: $10,000 (USDT)'}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-black dark:text-white font-bold">•</span>
                <span>{isZh ? '风险百分比：2%' : 'Risk Percentage: 2%'}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-black dark:text-white font-bold">•</span>
                <span>{isZh ? '杠杆：10倍（合约）' : 'Leverage: 10x (Futures)'}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-black dark:text-white font-bold">•</span>
                <span>{isZh ? '止损：500价格点（$500）' : 'Stop Loss: 500 price points ($500)'}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-black dark:text-white font-bold">•</span>
                <span>{isZh ? '止盈：1000点（$1000）' : 'Take Profit: 1000 points ($1000)'}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-black dark:text-white font-bold">•</span>
                <span>{isZh ? '交易对：BTC/USDT @ $50,000' : 'Trading Pair: BTC/USDT @ $50,000'}</span>
              </li>
            </ul>

            <p className="font-bold text-black dark:text-white mt-6">
              {isZh ? '计算过程：' : 'Calculation:'}
            </p>
            <ul className="space-y-2 ml-4">
              <li className="flex items-start gap-2">
                <span className="text-black dark:text-white font-bold">1.</span>
                <span>{isZh ? '风险金额 = $10,000 × 2% = $200' : 'Risk Amount = $10,000 × 2% = $200'}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-black dark:text-white font-bold">2.</span>
                <span>{isZh ? '每点价值 = $1（BTC/USDT标准）' : 'Point Value = $1 (BTC/USDT standard)'}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-black dark:text-white font-bold">3.</span>
                <span>{isZh ? '数量 = $200 ÷ (500 × $1) = 0.4 BTC' : 'Amount = $200 ÷ (500 × $1) = 0.4 BTC'}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-black dark:text-white font-bold">4.</span>
                <span>{isZh ? '保证金 = (0.4 × $50,000) ÷ 10 = $2,000' : 'Margin = (0.4 × $50,000) ÷ 10 = $2,000'}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-black dark:text-white font-bold">5.</span>
                <span>{isZh ? '潜在盈利 = 0.4 × 1000 × $1 = $400' : 'Potential Profit = 0.4 × 1000 × $1 = $400'}</span>
              </li>
            </ul>

            <div className="bg-black dark:bg-white text-white dark:text-black p-4 mt-6 border-2 border-black dark:border-white">
              <p className="font-bold mb-2">
                {isZh ? '💡 关键洞察：' : '💡 Key Insight:'}
              </p>
              <p className="text-sm">
                {isZh
                  ? '正确的仓位计算确保：风险固定在$200（2%），盈亏比1:2，保证金占用$2,000（20%），合理控制风险的同时实现稳定收益。'
                  : 'Correct position sizing ensures: Fixed risk at $200 (2%), 1:2 risk/reward ratio, margin usage $2,000 (20%), achieving stable returns while controlling risk properly.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
