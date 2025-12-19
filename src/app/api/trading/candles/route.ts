import { NextRequest, NextResponse } from 'next/server';
import type { Candle } from '@/lib/trading/types';

/**
 * Fetch with retry logic
 */
async function fetchWithRetry(url: string, retries = 2, timeout = 10000): Promise<Response> {
  for (let i = 0; i < retries; i++) {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), timeout);

      const response = await fetch(url, {
        signal: controller.signal,
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        },
      });

      clearTimeout(timeoutId);
      return response;
    } catch (error: any) {
      if (i === retries - 1) throw error;
      console.log(`Fetch attempt ${i + 1} failed, retrying...`);
      await new Promise(resolve => setTimeout(resolve, 1000 * (i + 1)));
    }
  }

  throw new Error('All retry attempts failed');
}

/**
 * Fetch historical candles from Binance public API
 */
async function fetchBinanceCandles(
  symbol: string,
  interval: string,
  startTime: number,
  endTime: number
): Promise<Candle[]> {
  const endpoints = [
    'https://fapi.binance.com',
    'https://fapi1.binance.com',
    'https://fapi2.binance.com',
  ];

  const limit = 1500;
  const allCandles: Candle[] = [];
  let currentStart = startTime;

  while (currentStart < endTime && allCandles.length < 20000) {
    let success = false;

    for (const baseUrl of endpoints) {
      try {
        const url = `${baseUrl}/fapi/v1/klines?symbol=${symbol}&interval=${interval}&startTime=${currentStart}&endTime=${endTime}&limit=${limit}`;
        const response = await fetchWithRetry(url, 2, 10000);

        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`);
        }

        const data = await response.json();

        if (!data || data.length === 0) {
          success = true;
          break;
        }

        // Convert Binance format to Candle format
        const candles: Candle[] = data.map((k: any[]) => ({
          openTime: k[0],
          open: parseFloat(k[1]),
          high: parseFloat(k[2]),
          low: parseFloat(k[3]),
          close: parseFloat(k[4]),
          volume: parseFloat(k[5]),
          closeTime: k[6],
          quoteVolume: parseFloat(k[7]),
          trades: k[8],
          takerBuyBaseVolume: parseFloat(k[9]),
          takerBuyQuoteVolume: parseFloat(k[10]),
        }));

        allCandles.push(...candles);

        if (candles.length < limit) {
          success = true;
          break;
        }

        currentStart = candles[candles.length - 1].closeTime + 1;
        success = true;
        break;
      } catch (error: any) {
        console.error(`Error fetching from ${baseUrl}:`, error.message);
        continue;
      }
    }

    if (!success) {
      throw new Error('Failed to fetch from all endpoints');
    }
  }

  return allCandles;
}

/**
 * POST /api/trading/candles
 * Fetch historical candle data
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { symbol, interval, startDate, endDate } = body;

    if (!symbol || !interval || !startDate || !endDate) {
      return NextResponse.json(
        { error: 'Missing required parameters' },
        { status: 400 }
      );
    }

    console.log(`[Candles API] Fetching ${symbol} ${interval} from ${new Date(startDate).toISOString()} to ${new Date(endDate).toISOString()}`);

    const candles = await fetchBinanceCandles(symbol, interval, startDate, endDate);

    console.log(`[Candles API] Fetched ${candles.length} candles`);

    return NextResponse.json({
      success: true,
      candles,
      count: candles.length,
    });
  } catch (error: any) {
    console.error('[Candles API] Error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to fetch candles' },
      { status: 500 }
    );
  }
}
