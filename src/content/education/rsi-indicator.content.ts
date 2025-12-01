import { EducationPageContent } from './forex-basics.content';

export const rsiIndicatorContent = {
  zh: {
    title: 'RSI相对强弱指标完整指南 - RSI交易策略与实战技巧 | Suncheer Forex',
    description: '深入讲解RSI相对强弱指标：计算公式、超买超卖区域(70/30)、RSI背离形态。掌握RSI在数字货三重交易中的应用，配合布林带等指标提升交易胜率。',
    keywords: 'RSI指标, 相对强弱指标, RSI策略, RSI背离, 超买超卖, 技术分析指标, 动能指标',

    heroTitle: 'RSI相对强弱指标完整指南',
    heroDescription: '掌握最实用的动能指标，精准识别超买超卖机会',
    readingTime: '20分钟',
    difficulty: '初级-中级',
    lastUpdated: '2024-01-15',

    tocTitle: '本文目录',
    tableOfContents: [
      { id: 'what-is-rsi', title: '什么是RSI指标？' },
      { id: 'calculation', title: 'RSI的计算与参数设置' },
      { id: 'interpretation', title: '如何解读RSI信号' },
      { id: 'trading-strategies', title: '经典RSI交易策略' },
      { id: 'advanced-techniques', title: '进阶技巧与组合应用' },
      { id: 'common-mistakes', title: '常见错误与规避方法' },
      { id: 'faq', title: '常见问题解答' },
    ],

    faqTitle: '常见问题解答',
    faqs: [
      {
        question: 'Q1: RSI超过70就应该做空吗？',
        answer: '不一定！这是新手最常犯的错误。在强趋势中，RSI可能长期处于超买（>70）或超卖（<30）区域。正确做法：1) 判断整体趋势 - 上升趋势中RSI超买是正常的，不要逆势做空；2) 寻找背离信号 - RSI超买+顶背离才是可靠的做空信号；3) 等待确认 - RSI从超买区回落至70以下才考虑入场；4) 结合其他指标 - 如价格触及布林带上轨+RSI超买，信号更强。记住：趋势中的超买/超卖不是反转信号，是趋势强劲的标志。'
      },
      {
        question: 'Q2: RSI参数14是最佳设置吗？',
        answer: '14是Wilder创建RSI时的原始参数，广泛使用但不一定最佳。不同周期的应用：短线交易：RSI(7-9)更敏感，信号更多但假信号也多；标准交易：RSI(14)平衡性好，适合大多数情况；长线交易：RSI(21-25)更平滑，信号更可靠但更慢。超买超卖线也可调整：激进型70/30；标准型80/20（减少假信号）；保守型85/15（信号极少但质量高）。建议在历史数据上回测找到适合自己交易风格的参数。'
      },
      {
        question: 'Q3: 什么是RSI背离？如何交易？',
        answer: 'RSI背离是最强的反转信号之一。类型：1) 常规背离 - 顶背离：价格新高，RSI未新高，预示反转下跌；底背离：价格新低，RSI未新低，预示反转上涨。2) 隐藏背离 - 趋势延续信号，高级技巧。交易方法：1) 识别至少2个明显的高低点；2) 确认价格和RSI走势相反；3) 等待确认信号（如K线反转形态、RSI跌破/突破50）；4) 在背离形成后的第一个回调/反弹入场；5) 止损设在背离点外侧。注意：周期越大，背离信号越可靠，日线背离强于1小时背离。'
      },
      {
        question: 'Q4: RSI的50中线有什么意义？',
        answer: 'RSI的50线常被忽视，但实际非常重要。意义：1) 趋势判断 - RSI>50=上升趋势，RSI<50=下降趋势；2) 支撑阻力 - 强趋势中，RSI回调至50附近往往反弹，可作为加仓点；3) 突破信号 - RSI突破50线确认趋势转变；4) 震荡标志 - RSI反复穿越50线=无明确趋势，避免交易。实战策略："50线回踩法"：上升趋势中，等RSI回落至50-55区域做多；下降趋势中，等RSI反弹至45-50区域做空。这种方法胜率高于等待超买超卖。'
      },
      {
        question: 'Q5: 如何组合RSI与布林带？',
        answer: 'RSI+布林带是黄金组合，互补性极强。组合策略：1) 双重确认 - 价格触及BB上轨+RSI超买(>70)=强做空信号；价格触及BB下轨+RSI超卖(<30)=强做多信号；2) BB挤压+RSI突破50 - BB收窄后，RSI突破50确定突破方向；3) BB反转+RSI背离 - 价格从BB极端位置反转+RSI背离=高胜率机会；4) 动态调整 - BB宽度大时，RSI阈值可调至75/25；BB宽度小时用70/30。实战案例：价格跌破BB下轨但RSI未超卖=假突破，是做多机会而非做空。这个组合可将胜率从单一指标的50-60%提升至70%+。'
      }
    ],

    relatedTitle: '相关学习资源',
    relatedResources: [
      {
        href: '/education/bollinger-bands',
        icon: '📊',
        title: '布林带指标',
        description: '与RSI组合使用，提升交易胜率'
      },
      {
        href: '/education/macd-indicator',
        icon: '📈',
        title: 'MACD指标',
        description: '配合MACD确认趋势和动能'
      },
      {
        href: '/tools/position-calculator',
        icon: '🧮',
        title: '仓位计算器',
        description: '根据RSI信号调整仓位大小'
      }
    ],

    ctaTitle: '想要系统学习技术分析？',
    ctaDescription: '加入 Suncheer Forex 培训计划，掌握更多实战技术指标应用',
    ctaPrimaryButton: '了解培训计划',
    ctaSecondaryButton: '免费心理测评',

    footerPrevText: '← EMA均线',
    footerNextText: '浏览所有课程 →',
    footerPrevHref: '/education/ema-moving-averages',
    footerNextHref: '/education',
  } as EducationPageContent,

  en: {
    title: 'Complete RSI Guide - Relative Strength Index Strategies and Techniques | Suncheer Forex',
    description: 'In-depth explanation of RSI indicator: calculation formulas, overbought/oversold zones (70/30), RSI divergence patterns. Master RSI application in cryptocurrency trading, combine with Bollinger Bands to improve win rate.',
    keywords: 'RSI indicator, relative strength index, RSI strategy, RSI divergence, overbought oversold, technical analysis, momentum indicator',

    heroTitle: 'Complete RSI Indicator Guide',
    heroDescription: 'Master the most practical momentum indicator for precise overbought/oversold opportunities',
    readingTime: '20 min',
    difficulty: 'Beginner-Intermediate',
    lastUpdated: 'Jan 15, 2024',

    tocTitle: 'Table of Contents',
    tableOfContents: [
      { id: 'what-is-rsi', title: 'What is RSI Indicator?' },
      { id: 'calculation', title: 'RSI Calculation and Parameters' },
      { id: 'interpretation', title: 'How to Interpret RSI Signals' },
      { id: 'trading-strategies', title: 'Classic RSI Trading Strategies' },
      { id: 'advanced-techniques', title: 'Advanced Techniques and Combinations' },
      { id: 'common-mistakes', title: 'Common Mistakes and Solutions' },
      { id: 'faq', title: 'Frequently Asked Questions' },
    ],

    faqTitle: 'Frequently Asked Questions',
    faqs: [
      {
        question: 'Q1: Should I short when RSI exceeds 70?',
        answer: 'Not necessarily! This is the most common beginner mistake. In strong trends, RSI can stay overbought (>70) or oversold (<30) for extended periods. Correct approach: 1) Judge overall trend - in uptrend, RSI overbought is normal, don\'t counter-trend short; 2) Look for divergence - RSI overbought + bearish divergence is reliable short signal; 3) Wait for confirmation - consider entry after RSI falls below 70 from overbought; 4) Combine with other indicators - like price at BB upper band + RSI overbought = stronger signal. Remember: overbought/oversold in trends isn\'t reversal signal, it\'s sign of strong trend.'
      },
      {
        question: 'Q2: Is RSI parameter 14 the best setting?',
        answer: '14 is Wilder\'s original parameter when creating RSI, widely used but not necessarily best. Different period applications: Short-term: RSI(7-9) more sensitive, more signals but also more false signals; Standard: RSI(14) well-balanced, suitable for most situations; Long-term: RSI(21-25) smoother, more reliable but slower signals. Overbought/oversold lines also adjustable: Aggressive 70/30; Standard 80/20 (reduce false signals); Conservative 85/15 (very few but high-quality signals). Recommend backtesting to find parameters matching your trading style.'
      },
      {
        question: 'Q3: What is RSI divergence? How to trade it?',
        answer: 'RSI divergence is one of the strongest reversal signals. Types: 1) Regular divergence - Bearish: price new high, RSI doesn\'t, signals reversal down; Bullish: price new low, RSI doesn\'t, signals reversal up. 2) Hidden divergence - trend continuation signal, advanced technique. Trading method: 1) Identify at least 2 clear peaks/troughs; 2) Confirm price and RSI move opposite; 3) Wait for confirmation (candlestick reversal, RSI breaking/crossing 50); 4) Enter on first pullback/bounce after divergence forms; 5) Stop loss beyond divergence point. Note: larger timeframes = more reliable divergence, daily divergence stronger than 1-hour.'
      },
      {
        question: 'Q4: What is the significance of RSI 50 midline?',
        answer: 'RSI 50 line often overlooked but actually very important. Significance: 1) Trend judgment - RSI>50 = uptrend, RSI<50 = downtrend; 2) Support/resistance - in strong trends, RSI pullback to ~50 often bounces, can be add-on point; 3) Breakout signal - RSI breaking 50 confirms trend change; 4) Range marker - RSI repeatedly crossing 50 = no clear trend, avoid trading. Practical strategy: "50-line pullback method": In uptrend, wait for RSI pullback to 50-55 zone to long; in downtrend, wait for RSI bounce to 45-50 zone to short. This method has higher win rate than waiting for overbought/oversold.'
      },
      {
        question: 'Q5: How to combine RSI with Bollinger Bands?',
        answer: 'RSI + Bollinger Bands is golden combination, highly complementary. Combination strategies: 1) Double confirmation - price at BB upper band + RSI overbought (>70) = strong short signal; price at BB lower band + RSI oversold (<30) = strong long signal; 2) BB squeeze + RSI breaking 50 - after BB narrows, RSI breaking 50 determines breakout direction; 3) BB reversal + RSI divergence - price reversal from BB extreme + RSI divergence = high win-rate opportunity; 4) Dynamic adjustment - when BB wide, RSI thresholds can adjust to 75/25; when BB narrow use 70/30. Real case: price breaks below BB lower band but RSI not oversold = false breakout, long opportunity not short. This combination can boost win rate from 50-60% (single indicator) to 70%+.'
      }
    ],

    relatedTitle: 'Related Learning Resources',
    relatedResources: [
      {
        href: '/education/bollinger-bands',
        icon: '📊',
        title: 'Bollinger Bands',
        description: 'Combine with RSI to improve trading win rate'
      },
      {
        href: '/education/macd-indicator',
        icon: '📈',
        title: 'MACD Indicator',
        description: 'Use with MACD to confirm trend and momentum'
      },
      {
        href: '/tools/position-calculator',
        icon: '🧮',
        title: 'Position Calculator',
        description: 'Adjust position size based on RSI signals'
      }
    ],

    ctaTitle: 'Want to Systematically Learn Technical Analysis?',
    ctaDescription: 'Join Suncheer Forex training to master more practical technical indicator applications',
    ctaPrimaryButton: 'Learn About Training',
    ctaSecondaryButton: 'Free Psychology Test',

    footerPrevText: '← EMA Moving Averages',
    footerNextText: 'Browse All Courses →',
    footerPrevHref: '/education/ema-moving-averages',
    footerNextHref: '/education',
  } as EducationPageContent,
};
