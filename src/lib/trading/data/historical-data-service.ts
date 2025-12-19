/**
 * Historical Data Service with IndexedDB Caching
 *
 * Fetches historical market data with intelligent caching
 * to avoid repeated downloads and improve performance
 */

import { cacheManager } from './cache-manager';
import type { Candle } from '../types';

export interface FetchOptions {
  symbol: string;
  interval: string;
  startDate: number;
  endDate: number;
  force?: boolean; // Force refresh, bypass cache
}

export class HistoricalDataService {
  /**
   * Fetch historical candles with caching
   */
  async fetchCandles(options: FetchOptions): Promise<Candle[]> {
    const { symbol, interval, startDate, endDate, force = false } = options;

    // Try to get from cache first (unless force refresh)
    if (!force) {
      try {
        const cached = await cacheManager.get(symbol, interval, startDate, endDate);
        if (cached) {
          return cached;
        }
      } catch (error) {
        console.warn('[Data Service] Cache read error:', error);
        // Continue to fetch from API
      }
    }

    // Fetch from API
    console.log(`[Data Service] Fetching from API: ${symbol} ${interval}`);
    const candles = await this.fetchFromAPI(symbol, interval, startDate, endDate);

    // Store in cache
    try {
      await cacheManager.set(symbol, interval, startDate, endDate, candles);
    } catch (error) {
      console.warn('[Data Service] Cache write error:', error);
      // Not critical, data is still available
    }

    return candles;
  }

  /**
   * Fetch from backend API
   */
  private async fetchFromAPI(
    symbol: string,
    interval: string,
    startDate: number,
    endDate: number
  ): Promise<Candle[]> {
    const response = await fetch('/api/trading/candles', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ symbol, interval, startDate, endDate }),
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch candles: ${response.statusText}`);
    }

    const data = await response.json();
    return data.candles;
  }

  /**
   * Clear cache for specific parameters
   */
  async clearCache(symbol: string, interval: string, startDate: number, endDate: number): Promise<void> {
    await cacheManager.delete(symbol, interval, startDate, endDate);
  }

  /**
   * Clear all expired cache entries
   */
  async clearExpiredCache(): Promise<number> {
    return await cacheManager.clearExpired();
  }

  /**
   * Get cache statistics
   */
  async getCacheStats() {
    return await cacheManager.getStats();
  }
}

// Export singleton instance
export const historicalDataService = new HistoricalDataService();
