import { EducationPageContent } from './forex-basics.content';

export const emaMovingAveragesContent = {
  zh: {
    title: 'EMA指数移动平均线完整指南 - EMA交易策略与实战技巧 | Suncheer Forex',
    description: '深入讲解EMA指数移动平均线：计算公式、与SMA的区别、常用周期(8, 21, 55, 200)。掌握EMA均线交叉策略、动态支撑阻力和多周期共振分析。',
    keywords: 'EMA均线, 指数移动平均线, EMA策略, 均线交叉, SMA vs EMA, 技术分析指标, 趋势指标',

    heroTitle: 'EMA指数移动平均线完整指南',
    heroDescription: '掌握最敏感的趋势跟踪指标，精准识别市场方向',
    readingTime: '20分钟',
    difficulty: '初级-中级',
    lastUpdated: '2024-01-15',

    tocTitle: '本文目录',
    tableOfContents: [
      { id: 'what-is-ema', title: '什么是EMA？' },
      { id: 'ema-vs-sma', title: 'EMA与SMA的区别' },
      { id: 'calculation', title: 'EMA的计算与参数设置' },
      { id: 'trading-strategies', title: '经典EMA交易策略' },
      { id: 'advanced-techniques', title: '进阶技巧与组合应用' },
      { id: 'common-mistakes', title: '常见错误与规避方法' },
      { id: 'faq', title: '常见问题解答' },
    ],

    faqTitle: '常见问题解答',
    faqs: [
      {
        question: 'Q1: EMA和SMA到底应该选哪个？',
        answer: 'EMA和SMA各有优势，选择取决于交易风格。EMA优势：对最新价格更敏感，信号更快，适合短线和趋势跟踪；SMA优势：更平滑，噪音更少，适合长线和判断整体趋势。实战建议：短线交易（日内、波段）使用EMA；长线交易（周线、月线）使用SMA；或同时使用两者对比，如EMA(20)和SMA(50)配合。多数职业数字货币交易员偏好EMA，因为数字货币市场波动快。'
      },
      {
        question: 'Q2: 哪些EMA周期最实用？',
        answer: '常用EMA周期及用途：8EMA - 超短线趋势，适合5分钟/15分钟图；21EMA - 短期趋势，日内交易核心；55EMA - 中期趋势，波段交易参考；200EMA - 长期趋势，牛熊分水岭。经典组合：1) 8/21交叉系统（短线）；2) 21/55交叉系统（波段）；3) 50/100/200三均线系统（趋势判断）。建议：新手从21/55组合开始，等熟练后再探索其他周期。'
      },
      {
        question: 'Q3: EMA金叉死叉可靠吗？如何提高准确率？',
        answer: 'EMA交叉信号的可靠性取决于使用方法。提高准确率的技巧：1) 多周期共振 - 日线金叉+4小时金叉比单一周期可靠；2) 趋势确认 - 只在趋势方向交易，上升趋势只做金叉多单；3) 价格确认 - 等待收盘价确认突破，而非盘中暂时交叉；4) 成交量配合 - 交叉伴随放量更可靠；5) 关键位置 - 支撑阻力附近的交叉信号质量更高。单独使用胜率约50-60%，多重过滤后可提升至65-75%。'
      },
      {
        question: 'Q4: 如何用EMA设置动态止损？',
        answer: 'EMA动态止损策略：1) 快线止损法 - 做多时，止损设在21EMA下方10-20点，随EMA上移而上移；2) 慢线止损法 - 使用55EMA或200EMA，给予更大空间，适合波段交易；3) 双线止损法 - 价格跌破快线减仓50%，跌破慢线全部平仓；4) 收盘价原则 - 只有收盘价跌破EMA才执行止损，避免短期波动。优势：止损位会随趋势自动调整，锁定利润；劣势：趋势突然反转时可能回吐较多利润。'
      },
      {
        question: 'Q5: 200EMA有什么特殊意义？',
        answer: '200EMA是全球交易员最关注的均线，被称为"牛熊分水岭"。特殊意义：1) 长期趋势判断 - 价格在200EMA上方=牛市，下方=熊市；2) 强支撑阻力 - 大量机构和算法交易围绕200EMA设置订单；3) 心理价位 - 市场共识使其成为自我实现的预言；4) 周期共振 - 日线/周线200EMA同时支撑/阻力，反转概率极高。实战建议：将200EMA作为趋势背景参考，但不要作为唯一入场依据。价格首次触及200EMA往往反弹/回落，二次测试突破概率增加。'
      }
    ],

    relatedTitle: '相关学习资源',
    relatedResources: [
      {
        href: '/education/macd-indicator',
        icon: '📊',
        title: 'MACD指标',
        description: 'MACD基于EMA计算，两者配合效果更佳'
      },
      {
        href: '/education#technical',
        icon: '📈',
        title: '价格行为分析',
        description: '结合EMA进行价格形态识别'
      },
      {
        href: '/tools/position-calculator',
        icon: '🧮',
        title: '仓位计算器',
        description: '根据EMA距离调整仓位风险'
      }
    ],

    ctaTitle: '想要系统学习技术分析？',
    ctaDescription: '加入 Suncheer Forex 培训计划，掌握更多实战技术指标应用',
    ctaPrimaryButton: '了解培训计划',
    ctaSecondaryButton: '免费心理测评',

    footerPrevText: '← MACD指标',
    footerNextText: 'RSI指标 →',
    footerPrevHref: '/education/macd-indicator',
    footerNextHref: '/education/rsi-indicator',
  } as EducationPageContent,

  en: {
    title: 'Complete EMA Guide - Exponential Moving Average Strategies and Techniques | Suncheer Forex',
    description: 'In-depth explanation of Exponential Moving Average: calculation formulas, differences from SMA, common periods (8, 21, 55, 200). Master EMA crossover strategies, dynamic support/resistance, and multi-timeframe analysis.',
    keywords: 'EMA, exponential moving average, EMA strategy, moving average crossover, SMA vs EMA, technical analysis, trend indicator',

    heroTitle: 'Complete EMA Guide',
    heroDescription: 'Master the most responsive trend-following indicator for precise market direction',
    readingTime: '20 min',
    difficulty: 'Beginner-Intermediate',
    lastUpdated: 'Jan 15, 2024',

    tocTitle: 'Table of Contents',
    tableOfContents: [
      { id: 'what-is-ema', title: 'What is EMA?' },
      { id: 'ema-vs-sma', title: 'EMA vs SMA Differences' },
      { id: 'calculation', title: 'EMA Calculation and Parameters' },
      { id: 'trading-strategies', title: 'Classic EMA Trading Strategies' },
      { id: 'advanced-techniques', title: 'Advanced Techniques and Combinations' },
      { id: 'common-mistakes', title: 'Common Mistakes and Solutions' },
      { id: 'faq', title: 'Frequently Asked Questions' },
    ],

    faqTitle: 'Frequently Asked Questions',
    faqs: [
      {
        question: 'Q1: Should I choose EMA or SMA?',
        answer: 'Both have advantages, choice depends on trading style. EMA advantages: more sensitive to recent prices, faster signals, suitable for short-term and trend following; SMA advantages: smoother, less noise, suitable for long-term and overall trend judgment. Practical advice: short-term trading (intraday, swing) use EMA; long-term trading (weekly, monthly) use SMA; or use both for comparison, like EMA(20) with SMA(50). Most professional cryptocurrency traders prefer EMA due to fast market volatility.'
      },
      {
        question: 'Q2: Which EMA periods are most practical?',
        answer: 'Common EMA periods and uses: 8EMA - ultra-short trend, suitable for 5min/15min charts; 21EMA - short-term trend, intraday trading core; 55EMA - medium-term trend, swing trading reference; 200EMA - long-term trend, bull/bear dividing line. Classic combinations: 1) 8/21 crossover system (short-term); 2) 21/55 crossover system (swing); 3) 50/100/200 triple MA system (trend judgment). Recommendation: beginners start with 21/55 combination, explore other periods after proficiency.'
      },
      {
        question: 'Q3: Are EMA crosses reliable? How to improve accuracy?',
        answer: 'EMA crossover signal reliability depends on usage. Techniques to improve accuracy: 1) Multi-timeframe confluence - daily golden cross + 4H golden cross more reliable than single timeframe; 2) Trend confirmation - only trade in trend direction, uptrend only long on golden cross; 3) Price confirmation - wait for closing price confirmation, not intraday temporary cross; 4) Volume confirmation - crosses with volume increase more reliable; 5) Key levels - crosses near support/resistance higher quality. Standalone win rate ~50-60%, with multiple filters can improve to 65-75%.'
      },
      {
        question: 'Q4: How to use EMA for dynamic stop loss?',
        answer: 'EMA dynamic stop loss strategies: 1) Fast line method - for longs, stop 10-20 points below 21EMA, moves up with EMA; 2) Slow line method - use 55EMA or 200EMA, more room, suitable for swing trading; 3) Dual line method - close 50% below fast line, close all below slow line; 4) Closing price rule - only execute stop if closing price breaks EMA, avoid short-term volatility. Advantages: stop adjusts automatically with trend, locks in profits; Disadvantages: sudden reversals may give back significant profits.'
      },
      {
        question: 'Q5: What is special about 200EMA?',
        answer: '200EMA is the most watched MA globally, called "bull/bear dividing line." Special significance: 1) Long-term trend judgment - price above 200EMA = bull market, below = bear market; 2) Strong support/resistance - many institutions and algos set orders around 200EMA; 3) Psychological level - market consensus makes it self-fulfilling; 4) Timeframe confluence - daily/weekly 200EMA both supporting/resisting = high reversal probability. Practical advice: use 200EMA as trend background, not sole entry criteria. First touch of 200EMA often bounces/retraces, second test has higher breakout probability.'
      }
    ],

    relatedTitle: 'Related Learning Resources',
    relatedResources: [
      {
        href: '/education/macd-indicator',
        icon: '📊',
        title: 'MACD Indicator',
        description: 'MACD calculated from EMA, work better together'
      },
      {
        href: '/education#technical',
        icon: '📈',
        title: 'Price Action Analysis',
        description: 'Combine EMA for price pattern recognition'
      },
      {
        href: '/tools/position-calculator',
        icon: '🧮',
        title: 'Position Calculator',
        description: 'Adjust position risk based on EMA distance'
      }
    ],

    ctaTitle: 'Want to Systematically Learn Technical Analysis?',
    ctaDescription: 'Join Suncheer Forex training to master more practical technical indicator applications',
    ctaPrimaryButton: 'Learn About Training',
    ctaSecondaryButton: 'Free Psychology Test',

    footerPrevText: '← MACD Indicator',
    footerNextText: 'RSI Indicator →',
    footerPrevHref: '/education/macd-indicator',
    footerNextHref: '/education/rsi-indicator',
  } as EducationPageContent,
};
