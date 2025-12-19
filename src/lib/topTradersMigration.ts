import type { TopTrader as MockTrader } from '@/types/top-traders';
import type { TopTrader as DbTrader } from '@/lib/supabase';

/**
 * Convert mock trader data to database format
 */
export function convertTopTrader(mockTrader: MockTrader): Omit<DbTrader, 'id' | 'created_at' | 'updated_at'> {
  return {
    rank: mockTrader.rank,
    trader_id: mockTrader.traderId,
    nickname: mockTrader.nickname,
    avatar: mockTrader.avatar,
    country: mockTrader.country,
    country_code: mockTrader.countryCode,
    monthly_return: mockTrader.monthlyReturn,
    total_return: mockTrader.totalReturn,
    win_rate: mockTrader.winRate,
    total_trades: mockTrader.totalTrades,
    profit_factor: mockTrader.profitFactor,
    max_drawdown: mockTrader.maxDrawdown,
    sharpe_ratio: mockTrader.sharpeRatio,
    trading_days: mockTrader.tradingDays,
    account_size: mockTrader.accountSize,
    current_position: mockTrader.currentPosition,
    in_matrix: mockTrader.inMatrix,
    update_time: mockTrader.updateTime,
  };
}

/**
 * Migrate multiple traders
 */
export async function migrateTopTraders(mockTraders: MockTrader[]): Promise<Array<{ success: boolean; trader: MockTrader; error?: string }>> {
  const results = [];

  for (const trader of mockTraders) {
    try {
      const convertedTrader = convertTopTrader(trader);
      const response = await fetch('/api/top-traders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(convertedTrader),
      });

      if (response.ok) {
        results.push({ success: true, trader });
      } else {
        const errorData = await response.json();
        results.push({ success: false, trader, error: errorData.error || 'Unknown error' });
      }
    } catch (error) {
      results.push({
        success: false,
        trader,
        error: error instanceof Error ? error.message : 'Unknown error',
      });
    }
  }

  return results;
}

/**
 * Convert database trader back to display format
 */
export function convertDbTraderToDisplay(dbTrader: DbTrader): MockTrader {
  return {
    rank: dbTrader.rank,
    traderId: dbTrader.trader_id,
    nickname: dbTrader.nickname,
    avatar: dbTrader.avatar,
    country: dbTrader.country,
    countryCode: dbTrader.country_code,
    monthlyReturn: dbTrader.monthly_return,
    totalReturn: dbTrader.total_return,
    winRate: dbTrader.win_rate,
    totalTrades: dbTrader.total_trades,
    profitFactor: dbTrader.profit_factor,
    maxDrawdown: dbTrader.max_drawdown,
    sharpeRatio: dbTrader.sharpe_ratio,
    tradingDays: dbTrader.trading_days,
    accountSize: dbTrader.account_size,
    currentPosition: dbTrader.current_position,
    inMatrix: dbTrader.in_matrix,
    updateTime: dbTrader.update_time,
  };
}
