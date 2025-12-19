import fs from 'fs';
import path from 'path';
import { getServerLanguage } from '@/lib/getServerLanguage';
import MarketAnalysisClient from './MarketAnalysisClient';

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

async function getLatestAnalysis(): Promise<AnalysisData[]> {
  const analysisDir = path.join(process.cwd(), 'src/content/analysis');

  if (!fs.existsSync(analysisDir)) {
    return [];
  }

  // 获取所有时间戳目录
  const folders = fs.readdirSync(analysisDir)
    .filter(item => {
      const itemPath = path.join(analysisDir, item);
      return fs.statSync(itemPath).isDirectory();
    })
    .sort()
    .reverse(); // 最新的在前

  if (folders.length === 0) {
    return [];
  }

  // 读取最新的一个目录
  const latestFolder = folders[0];
  const latestFolderPath = path.join(analysisDir, latestFolder);

  const analysisFiles = fs.readdirSync(latestFolderPath)
    .filter(file => file.endsWith('.json'));

  const analyses: AnalysisData[] = [];

  for (const file of analysisFiles) {
    const filePath = path.join(latestFolderPath, file);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const data: AnalysisData = JSON.parse(fileContent);
    analyses.push(data);
  }

  return analyses;
}

export default async function MarketAnalysisPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const language = locale === 'en' ? 'en' : 'zh';
  const analyses = await getLatestAnalysis();

  return <MarketAnalysisClient analyses={analyses} language={language} />;
}
