/**
 * IndexedDB Cache Manager for Historical Market Data
 *
 * Caches downloaded historical data to avoid repeated API calls
 * Supports multiple symbols and intervals with automatic expiration
 */

interface CachedData {
  symbol: string;
  interval: string;
  startDate: number;
  endDate: number;
  data: any[];
  cachedAt: number;
  expiresAt: number;
}

const DB_NAME = 'fx-killer-market-data';
const DB_VERSION = 1;
const STORE_NAME = 'historical-data';
const DEFAULT_TTL = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

export class CacheManager {
  private db: IDBDatabase | null = null;

  /**
   * Initialize IndexedDB connection
   */
  async init(): Promise<void> {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(DB_NAME, DB_VERSION);

      request.onerror = () => reject(request.error);
      request.onsuccess = () => {
        this.db = request.result;
        resolve();
      };

      request.onupgradeneeded = (event) => {
        const db = (event.target as IDBOpenDBRequest).result;

        // Create object store if it doesn't exist
        if (!db.objectStoreNames.contains(STORE_NAME)) {
          const store = db.createObjectStore(STORE_NAME, { keyPath: 'key' });

          // Create indexes for efficient querying
          store.createIndex('symbol', 'symbol', { unique: false });
          store.createIndex('interval', 'interval', { unique: false });
          store.createIndex('expiresAt', 'expiresAt', { unique: false });
        }
      };
    });
  }

  /**
   * Generate cache key from parameters
   */
  private getCacheKey(symbol: string, interval: string, startDate: number, endDate: number): string {
    return `${symbol}_${interval}_${startDate}_${endDate}`;
  }

  /**
   * Get cached data if available and not expired
   */
  async get(
    symbol: string,
    interval: string,
    startDate: number,
    endDate: number
  ): Promise<any[] | null> {
    if (!this.db) await this.init();

    return new Promise((resolve, reject) => {
      const transaction = this.db!.transaction([STORE_NAME], 'readonly');
      const store = transaction.objectStore(STORE_NAME);
      const key = this.getCacheKey(symbol, interval, startDate, endDate);

      const request = store.get(key);

      request.onerror = () => reject(request.error);
      request.onsuccess = () => {
        const cached: CachedData | undefined = request.result;

        if (!cached) {
          console.log(`[Cache] MISS: ${symbol} ${interval} ${new Date(startDate).toISOString()} - ${new Date(endDate).toISOString()}`);
          resolve(null);
          return;
        }

        // Check if expired
        if (Date.now() > cached.expiresAt) {
          console.log(`[Cache] EXPIRED: ${symbol} ${interval}`);
          // Delete expired entry
          this.delete(symbol, interval, startDate, endDate);
          resolve(null);
          return;
        }

        console.log(`[Cache] HIT: ${symbol} ${interval} (${cached.data.length} candles, cached ${Math.floor((Date.now() - cached.cachedAt) / 60000)} minutes ago)`);
        resolve(cached.data);
      };
    });
  }

  /**
   * Store data in cache
   */
  async set(
    symbol: string,
    interval: string,
    startDate: number,
    endDate: number,
    data: any[],
    ttl: number = DEFAULT_TTL
  ): Promise<void> {
    if (!this.db) await this.init();

    const now = Date.now();
    const cacheEntry: CachedData = {
      symbol,
      interval,
      startDate,
      endDate,
      data,
      cachedAt: now,
      expiresAt: now + ttl,
    };

    return new Promise((resolve, reject) => {
      const transaction = this.db!.transaction([STORE_NAME], 'readwrite');
      const store = transaction.objectStore(STORE_NAME);
      const key = this.getCacheKey(symbol, interval, startDate, endDate);

      const request = store.put({ ...cacheEntry, key });

      request.onerror = () => reject(request.error);
      request.onsuccess = () => {
        console.log(`[Cache] STORED: ${symbol} ${interval} (${data.length} candles, TTL: ${ttl / 3600000}h)`);
        resolve();
      };
    });
  }

  /**
   * Delete specific cached entry
   */
  async delete(
    symbol: string,
    interval: string,
    startDate: number,
    endDate: number
  ): Promise<void> {
    if (!this.db) await this.init();

    return new Promise((resolve, reject) => {
      const transaction = this.db!.transaction([STORE_NAME], 'readwrite');
      const store = transaction.objectStore(STORE_NAME);
      const key = this.getCacheKey(symbol, interval, startDate, endDate);

      const request = store.delete(key);

      request.onerror = () => reject(request.error);
      request.onsuccess = () => {
        console.log(`[Cache] DELETED: ${symbol} ${interval}`);
        resolve();
      };
    });
  }

  /**
   * Clear all expired entries
   */
  async clearExpired(): Promise<number> {
    if (!this.db) await this.init();

    return new Promise((resolve, reject) => {
      const transaction = this.db!.transaction([STORE_NAME], 'readwrite');
      const store = transaction.objectStore(STORE_NAME);
      const index = store.index('expiresAt');

      const now = Date.now();
      const range = IDBKeyRange.upperBound(now);
      const request = index.openCursor(range);

      let deletedCount = 0;

      request.onerror = () => reject(request.error);
      request.onsuccess = (event) => {
        const cursor = (event.target as IDBRequest).result;
        if (cursor) {
          cursor.delete();
          deletedCount++;
          cursor.continue();
        } else {
          if (deletedCount > 0) {
            console.log(`[Cache] Cleared ${deletedCount} expired entries`);
          }
          resolve(deletedCount);
        }
      };
    });
  }

  /**
   * Clear all cached data
   */
  async clearAll(): Promise<void> {
    if (!this.db) await this.init();

    return new Promise((resolve, reject) => {
      const transaction = this.db!.transaction([STORE_NAME], 'readwrite');
      const store = transaction.objectStore(STORE_NAME);

      const request = store.clear();

      request.onerror = () => reject(request.error);
      request.onsuccess = () => {
        console.log('[Cache] All data cleared');
        resolve();
      };
    });
  }

  /**
   * Get cache statistics
   */
  async getStats(): Promise<{
    totalEntries: number;
    totalSize: number;
    expiredEntries: number;
  }> {
    if (!this.db) await this.init();

    return new Promise((resolve, reject) => {
      const transaction = this.db!.transaction([STORE_NAME], 'readonly');
      const store = transaction.objectStore(STORE_NAME);

      const request = store.getAll();

      request.onerror = () => reject(request.error);
      request.onsuccess = () => {
        const entries: (CachedData & { key: string })[] = request.result;
        const now = Date.now();

        const totalEntries = entries.length;
        const expiredEntries = entries.filter(e => e.expiresAt < now).length;
        const totalSize = entries.reduce((sum, e) => sum + e.data.length, 0);

        resolve({ totalEntries, totalSize, expiredEntries });
      };
    });
  }

  /**
   * Close database connection
   */
  close(): void {
    if (this.db) {
      this.db.close();
      this.db = null;
    }
  }
}

// Export singleton instance
export const cacheManager = new CacheManager();
