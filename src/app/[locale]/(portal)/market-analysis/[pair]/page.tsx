import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';
import MarketDetailClient from './MarketDetailClient';

interface AnalysisData {
  symbol: string;
  name: string;
  nameCn: string;
  timestamp: string;
  price: {
    close: string;
    high: string;
    low: string;
    open: string;
    change: string;
    datetime: string;
  };
  indicators: {
    rsi?: number;
    macd?: number;
    macd_signal?: number;
    sma20?: number;
  };
  analysis: {
    zh: {
      title: string;
      content: string;
    };
    en: {
      title: string;
      content: string;
    };
  };
}

async function getAnalysisData(pair: string): Promise<AnalysisData | null> {
  const analysisDir = path.join(process.cwd(), 'src/content/analysis');

  if (!fs.existsSync(analysisDir)) {
    return null;
  }

  const folders = fs.readdirSync(analysisDir)
    .filter(item => {
      const itemPath = path.join(analysisDir, item);
      return fs.statSync(itemPath).isDirectory();
    })
    .sort()
    .reverse();

  if (folders.length === 0) {
    return null;
  }

  const latestFolder = folders[0];
  const filePath = path.join(analysisDir, latestFolder, `${pair}.json`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContent = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(fileContent);
}

export default async function MarketDetailPage({
  params
}: {
  params: Promise<{ locale: string; pair: string }>
}) {
  const { locale, pair } = await params;
  const language = locale === 'en' ? 'en' : 'zh';

  const analysis = await getAnalysisData(pair);

  if (!analysis) {
    notFound();
  }

  return <MarketDetailClient analysis={analysis} language={language} />;
}
