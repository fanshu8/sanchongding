const axios = require('axios');
const fs = require('fs');
const path = require('path');
const dayjs = require('dayjs');

const TD_API_KEY = process.env.TD_KEY;
const TD_BASE_URL = 'https://api.twelvedata.com';
const OPENAI_API_KEY = process.env.SKEY;
const OPENAI_BASE_URL = 'https://api.oneabc.org';
const ANALYSIS_DIR = path.join(__dirname, '../src/content/analysis');

// 主要外汇品种配置
const FOREX_PAIRS = [
  { symbol: 'EUR/USD', name: 'Euro vs US Dollar', nameCn: '欧元/美元' },
  { symbol: 'GBP/USD', name: 'British Pound vs US Dollar', nameCn: '英镑/美元' },
  { symbol: 'USD/JPY', name: 'US Dollar vs Japanese Yen', nameCn: '美元/日元' },
  { symbol: 'AUD/USD', name: 'Australian Dollar vs US Dollar', nameCn: '澳元/美元' },
  { symbol: 'USD/CAD', name: 'US Dollar vs Canadian Dollar', nameCn: '美元/加元' },
  { symbol: 'NZD/USD', name: 'New Zealand Dollar vs US Dollar', nameCn: '纽元/美元' },
  { symbol: 'USD/CHF', name: 'US Dollar vs Swiss Franc', nameCn: '美元/瑞郎' },
  { symbol: 'XAU/USD', name: 'Gold vs US Dollar', nameCn: '黄金/美元' }
];

// 从 Twelve Data 获取价格数据
async function fetchPriceData(symbol, interval = '1h', outputsize = 24) {
  try {
    const response = await axios.get(`${TD_BASE_URL}/time_series`, {
      params: {
        symbol: symbol,
        interval: interval,
        outputsize: outputsize,
        apikey: TD_API_KEY
      },
      timeout: 15000
    });

    if (response.data.status === 'error') {
      throw new Error(response.data.message);
    }

    return response.data;
  } catch (error) {
    console.error(`❌ 获取 ${symbol} 价格数据失败:`, error.message);
    throw error;
  }
}

// 从 Twelve Data 获取技术指标
async function fetchIndicator(symbol, indicator, params = {}) {
  try {
    const response = await axios.get(`${TD_BASE_URL}/${indicator}`, {
      params: {
        symbol: symbol,
        interval: '1h',
        outputsize: 30,
        apikey: TD_API_KEY,
        ...params
      },
      timeout: 15000
    });

    if (response.data.status === 'error') {
      throw new Error(response.data.message);
    }

    return response.data;
  } catch (error) {
    console.error(`❌ 获取 ${symbol} ${indicator} 指标失败:`, error.message);
    return null;
  }
}

// 使用 OpenAI 生成分析（中文）
async function generateAnalysisZh(pairInfo, marketData) {
  if (!OPENAI_API_KEY) {
    throw new Error('缺少 OPENAI API KEY');
  }

  const { symbol, nameCn } = pairInfo;
  const { price, rsi, macd, sma } = marketData;

  const prompt = `你是专业的外汇交易分析师。请对 ${nameCn}(${symbol}) 进行技术分析。

当前市场数据：
- 最新价格: ${price.close}
- 24小时变化: ${price.change}%
- 高点/低点: ${price.high} / ${price.low}
- RSI(14): ${rsi?.value || 'N/A'}
- MACD: ${macd?.macd || 'N/A'}, Signal: ${macd?.signal || 'N/A'}
- SMA(20): ${sma?.sma20 || 'N/A'}

要求：
1. 第一行：完整的中文标题，格式："${nameCn}技术分析：[趋势描述]"
2. 然后空一行
3. 正文3-4段，每段60-80字，总共250-300字
4. 包含：趋势判断、技术指标解读、支撑/阻力位、交易建议
5. 使用专业术语但易于理解
6. 不要添加任何标签或额外说明

立即开始（第一行就是标题）：`;

  try {
    const response = await axios.post(
      `${OPENAI_BASE_URL}/v1/chat/completions`,
      {
        model: 'gpt-4o-mini',
        messages: [{ role: 'user', content: prompt }],
        temperature: 0.7,
        max_tokens: 600
      },
      {
        headers: {
          'Authorization': `Bearer ${OPENAI_API_KEY}`,
          'Content-Type': 'application/json'
        },
        timeout: 30000
      }
    );

    return response.data.choices[0].message.content.trim();
  } catch (error) {
    console.error('❌ OpenAI API 错误（中文）:', error.message);
    throw error;
  }
}

// 使用 OpenAI 生成分析（英文）
async function generateAnalysisEn(pairInfo, marketData) {
  if (!OPENAI_API_KEY) {
    throw new Error('Missing OPENAI API KEY');
  }

  const { symbol, name } = pairInfo;
  const { price, rsi, macd, sma } = marketData;

  const prompt = `You are a professional forex analyst. Provide technical analysis for ${name} (${symbol}).

Current Market Data:
- Latest Price: ${price.close}
- 24h Change: ${price.change}%
- High/Low: ${price.high} / ${price.low}
- RSI(14): ${rsi?.value || 'N/A'}
- MACD: ${macd?.macd || 'N/A'}, Signal: ${macd?.signal || 'N/A'}
- SMA(20): ${sma?.sma20 || 'N/A'}

Requirements:
1. Write 3-4 paragraphs, 60-80 words each, total 250-300 words
2. Include: trend analysis, indicator interpretation, support/resistance levels, trading suggestions
3. Use professional but accessible language
4. No labels, no meta-commentary
5. Start immediately with the content (no title needed)

Begin:`;

  try {
    const response = await axios.post(
      `${OPENAI_BASE_URL}/v1/chat/completions`,
      {
        model: 'gpt-4o-mini',
        messages: [{ role: 'user', content: prompt }],
        temperature: 0.7,
        max_tokens: 600
      },
      {
        headers: {
          'Authorization': `Bearer ${OPENAI_API_KEY}`,
          'Content-Type': 'application/json'
        },
        timeout: 30000
      }
    );

    return response.data.choices[0].message.content.trim();
  } catch (error) {
    console.error('❌ OpenAI API Error (English):', error.message);
    throw error;
  }
}

// 生成 slug
function slugify(symbol) {
  return symbol.toLowerCase().replace(/\//g, '');
}

// 主函数
async function generateMarketAnalysis() {
  if (!TD_API_KEY) {
    console.error('❌ 缺少 Twelve Data API Key');
    process.exit(1);
  }

  if (!fs.existsSync(ANALYSIS_DIR)) {
    fs.mkdirSync(ANALYSIS_DIR, { recursive: true });
  }

  const timestamp = dayjs().format('YYYY-MM-DD-HH');
  const timestampDir = path.join(ANALYSIS_DIR, timestamp);

  if (!fs.existsSync(timestampDir)) {
    fs.mkdirSync(timestampDir, { recursive: true });
  }

  let totalGenerated = 0;
  let totalFailed = 0;

  console.log(`\n📊 开始生成市场分析 - ${dayjs().format('YYYY-MM-DD HH:mm')}\n`);

  for (const pair of FOREX_PAIRS) {
    console.log(`\n🔍 分析 ${pair.symbol} (${pair.nameCn})...`);

    try {
      // 获取价格数据
      console.log(`  📈 获取价格数据...`);
      const priceData = await fetchPriceData(pair.symbol);

      if (!priceData.values || priceData.values.length === 0) {
        throw new Error('价格数据为空');
      }

      const latestPrice = priceData.values[0];
      const previousPrice = priceData.values[1];
      const change = ((parseFloat(latestPrice.close) - parseFloat(previousPrice.close)) / parseFloat(previousPrice.close) * 100).toFixed(2);

      // 延迟避免速率限制 - Twelve Data 限制: 8 请求/分钟
      await sleep(8000); // 8秒延迟确保在限制内

      // 获取 RSI
      console.log(`  📊 获取技术指标...`);
      const rsiData = await fetchIndicator(pair.symbol, 'rsi', { time_period: 14 });
      await sleep(8000);

      // 获取 MACD
      const macdData = await fetchIndicator(pair.symbol, 'macd');
      await sleep(8000);

      // 获取 SMA
      const smaData = await fetchIndicator(pair.symbol, 'sma', { time_period: 20 });
      await sleep(8000);

      const marketData = {
        price: {
          close: latestPrice.close,
          high: latestPrice.high,
          low: latestPrice.low,
          open: latestPrice.open,
          change: change,
          datetime: latestPrice.datetime
        },
        rsi: rsiData?.values?.[0],
        macd: macdData?.values?.[0],
        sma: { sma20: smaData?.values?.[0]?.sma }
      };

      console.log(`  🤖 生成 AI 分析...`);

      // 生成中英文分析
      const [contentZh, contentEn] = await Promise.all([
        generateAnalysisZh(pair, marketData),
        generateAnalysisEn(pair, marketData)
      ]);

      // 从中文内容提取标题
      const zhLines = contentZh.split('\n');
      const zhTitle = zhLines[0].trim();
      const zhBody = zhLines.slice(1).filter(line => line.trim()).join('\n\n');

      // 生成文件
      const slug = slugify(pair.symbol);
      const filePath = path.join(timestampDir, `${slug}.json`);

      const analysisData = {
        symbol: pair.symbol,
        name: pair.name,
        nameCn: pair.nameCn,
        timestamp: dayjs().toISOString(),
        price: marketData.price,
        indicators: {
          rsi: marketData.rsi?.rsi ? parseFloat(marketData.rsi.rsi) : undefined,
          macd: marketData.macd?.macd ? parseFloat(marketData.macd.macd) : undefined,
          macd_signal: marketData.macd?.macd_signal ? parseFloat(marketData.macd.macd_signal) : undefined,
          sma20: marketData.sma?.sma20 ? parseFloat(marketData.sma.sma20) : undefined
        },
        analysis: {
          zh: {
            title: zhTitle,
            content: zhBody
          },
          en: {
            title: `${pair.name} Technical Analysis`,
            content: contentEn
          }
        }
      };

      fs.writeFileSync(filePath, JSON.stringify(analysisData, null, 2), 'utf8');

      console.log(`  ✅ 生成完成: ${slug}.json`);
      totalGenerated++;

      // 控制速度
      await sleep(2000);

    } catch (error) {
      console.error(`  ❌ 失败: ${error.message}`);
      totalFailed++;
    }
  }

  console.log(`\n📊 统计:`);
  console.log(`  ✅ 成功: ${totalGenerated} 个货币对`);
  console.log(`  ❌ 失败: ${totalFailed} 个货币对`);
  console.log(`\n✨ 完成！`);
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// 运行
generateMarketAnalysis()
  .then(() => process.exit(0))
  .catch(error => {
    console.error('\n💥 致命错误:', error);
    process.exit(1);
  });
