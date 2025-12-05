import { EducationPageContent } from './forex-basics.content';

export const keltnerChannelsContent = {
  zh: {
    title: '肯特纳通道指标完整指南 - Keltner Channels交易策略与实战技巧 | Suncheer Forex',
    description: '深入讲解肯特纳通道（Keltner Channels）指标：计算公式、参数设置、与布林带的区别。结合实战案例，掌握KC指标在数字货币交易中的突破策略和趋势跟踪应用。',
    keywords: '肯特纳通道, Keltner Channels, KC指标, 肯特纳通道策略, ATR通道, 技术分析指标, 波动性指标',

    heroTitle: '肯特纳通道指标完整指南',
    heroDescription: '掌握基于ATR的波动性指标，提升趋势交易精准度',
    readingTime: '20分钟',
    difficulty: '初级-中级',
    lastUpdated: '2024-01-15',

    tocTitle: '本文目录',
    tableOfContents: [
      { id: 'what-is-kc', title: '什么是肯特纳通道？' },
      { id: 'calculation', title: 'KC的计算与参数设置' },
      { id: 'vs-bollinger', title: 'KC与布林带的区别' },
      { id: 'trading-strategies', title: '经典KC交易策略' },
      { id: 'advanced-techniques', title: '进阶技巧与组合应用' },
      { id: 'common-mistakes', title: '常见错误与规避方法' },
      { id: 'faq', title: '常见问题解答' },
    ],

    faqTitle: '常见问题解答',
    faqs: [
      {
        question: 'Q1: 肯特纳通道和布林带应该选哪个？',
        answer: '两者各有优势。布林带基于标准差，对价格波动更敏感，适合震荡市；肯特纳通道基于ATR，对真实波动性的反映更稳定，适合趋势市。建议同时使用：KC确定趋势方向，BB寻找精确入场点。许多职业交易员会在图表上叠加两者进行对比分析。'
      },
      {
        question: 'Q2: KC参数(20, 2)是最佳设置吗？',
        answer: '(20, 2)是经典设置，适合大多数情况。但最佳参数取决于交易周期：日内交易可使用(10, 1.5)获取更多信号；波段交易可使用(20, 2.5)减少噪音；长线交易可使用(50, 3)。ATR倍数越大，通道越宽，信号越少但质量越高。建议在历史数据上回测优化。'
      },
      {
        question: 'Q3: 价格突破KC通道后一定会形成趋势吗？',
        answer: '不一定。假突破在数字货币市场很常见。有效突破需要满足：1) 收盘价突破，而非影线；2) 伴随成交量放大；3) 突破后价格在通道外持续至少2-3根K线；4) 配合其他指标确认（如MACD金叉、RSI走强）。建议等待突破回踩确认后再入场，虽然错过部分利润，但大幅降低假突破风险。'
      },
      {
        question: 'Q4: 如何使用KC设置止损和止盈？',
        answer: '止损设置：突破做多时，止损放在下轨下方10-20点；突破做空时，止损放在上轨上方10-20点。止盈设置：使用通道宽度的倍数，例如通道宽度100点，目标设为200-300点（2-3倍通道宽度）。或使用动态止盈：价格回落至中轨时减仓50%，触及对侧通道时全部平仓。'
      },
      {
        question: 'Q5: KC通道收窄后应该如何操作？',
        answer: 'KC通道收窄（挤压）表明市场处于低波动盘整期，通常预示即将出现方向性突破。操作策略：1) 不要在收窄期间交易，等待突破；2) 在上下轨各设置挂单，突破方向成交，反向单取消；3) 配合价格形态（如三角形、旗形）判断突破方向；4) 突破初期使用小仓位试单，确认后加仓。记住：方向不确定，耐心等待是关键。'
      }
    ],

    relatedTitle: '相关学习资源',
    relatedResources: [
      {
        href: '/education/bollinger-bands',
        icon: '📊',
        title: '布林带指标',
        description: '学习基于标准差的波动性指标'
      },
      {
        href: '/education#technical',
        icon: '📈',
        title: 'ATR指标详解',
        description: '理解肯特纳通道的核心计算基础'
      },
      {
        href: '/tools/position-calculator',
        icon: '🧮',
        title: '仓位计算器',
        description: '根据KC通道宽度调整仓位大小'
      }
    ],

    ctaTitle: '想要系统学习技术分析？',
    ctaDescription: '加入 Suncheer Forex 培训计划，掌握更多实战技术指标应用',
    ctaPrimaryButton: '了解培训计划',
    ctaSecondaryButton: '免费心理测评',

    footerPrevText: '← 布林带指标',
    footerNextText: 'MACD指标 →',
    footerPrevHref: '/education/bollinger-bands',
    footerNextHref: '/education/macd-indicator',
  } as EducationPageContent,

  en: {
    title: 'Complete Keltner Channels Guide - KC Trading Strategies and Practical Techniques | Suncheer Forex',
    description: 'In-depth explanation of Keltner Channels indicator: calculation formulas, parameter settings, differences from Bollinger Bands. Master KC breakout strategies and trend following in cryptocurrency trading.',
    keywords: 'Keltner Channels, KC indicator, KC strategy, ATR channels, technical analysis, volatility indicator',

    heroTitle: 'Complete Keltner Channels Guide',
    heroDescription: 'Master ATR-based volatility indicator to improve trend trading precision',
    readingTime: '20 min',
    difficulty: 'Beginner-Intermediate',
    lastUpdated: 'Jan 15, 2024',

    tocTitle: 'Table of Contents',
    tableOfContents: [
      { id: 'what-is-kc', title: 'What is Keltner Channels?' },
      { id: 'calculation', title: 'KC Calculation and Parameters' },
      { id: 'vs-bollinger', title: 'KC vs Bollinger Bands' },
      { id: 'trading-strategies', title: 'Classic KC Trading Strategies' },
      { id: 'advanced-techniques', title: 'Advanced Techniques and Combinations' },
      { id: 'common-mistakes', title: 'Common Mistakes and Solutions' },
      { id: 'faq', title: 'Frequently Asked Questions' },
    ],

    faqTitle: 'Frequently Asked Questions',
    faqs: [
      {
        question: 'Q1: Should I choose Keltner Channels or Bollinger Bands?',
        answer: 'Both have advantages. BB uses standard deviation, more sensitive to price volatility, suitable for ranging markets; KC uses ATR, reflects true volatility more stably, suitable for trending markets. Recommend using both: KC determines trend direction, BB finds precise entries. Many professional traders overlay both for comparative analysis.'
      },
      {
        question: 'Q2: Is (20, 2) the best KC parameter setting?',
        answer: '(20, 2) is the classic setting, suitable for most situations. But optimal parameters depend on trading timeframe: day trading can use (10, 1.5) for more signals; swing trading can use (20, 2.5) to reduce noise; position trading can use (50, 3). Larger ATR multiplier = wider channels, fewer but higher-quality signals. Recommend backtesting optimization.'
      },
      {
        question: 'Q3: Does KC breakout always form a trend?',
        answer: 'Not always. False breakouts are common in cryptocurrency. Valid breakouts require: 1) Close beyond channel, not just wicks; 2) Accompanied by volume increase; 3) Price stays outside channel for at least 2-3 candles; 4) Confirmation from other indicators (MACD cross, RSI strength). Recommend waiting for pullback confirmation, sacrificing some profit but greatly reducing false breakout risk.'
      },
      {
        question: 'Q4: How to set stop loss and take profit with KC?',
        answer: 'Stop loss: For long breakouts, place stop 10-20 points below lower band; for short breakouts, place stop 10-20 points above upper band. Take profit: Use multiples of channel width, e.g., 100-point channel width, target 200-300 points (2-3x channel width). Or dynamic TP: reduce 50% at middle line, close all at opposite channel.'
      },
      {
        question: 'Q5: How to trade when KC channels narrow?',
        answer: 'KC squeeze indicates low volatility consolidation, typically preceding directional breakout. Strategy: 1) Don\'t trade during squeeze, wait for breakout; 2) Set pending orders at upper/lower bands, cancel unfilled order after breakout; 3) Combine with price patterns (triangles, flags) to anticipate direction; 4) Start with small positions, add after confirmation. Remember: direction uncertain, patience is key.'
      }
    ],

    relatedTitle: 'Related Learning Resources',
    relatedResources: [
      {
        href: '/education/bollinger-bands',
        icon: '📊',
        title: 'Bollinger Bands',
        description: 'Learn standard deviation-based volatility indicator'
      },
      {
        href: '/education#technical',
        icon: '📈',
        title: 'ATR Indicator',
        description: 'Understand the core calculation basis of KC'
      },
      {
        href: '/tools/position-calculator',
        icon: '🧮',
        title: 'Position Calculator',
        description: 'Adjust position size based on KC channel width'
      }
    ],

    ctaTitle: 'Want to Systematically Learn Technical Analysis?',
    ctaDescription: 'Join Suncheer Forex training to master more practical technical indicator applications',
    ctaPrimaryButton: 'Learn About Training',
    ctaSecondaryButton: 'Free Psychology Test',

    footerPrevText: '← Bollinger Bands',
    footerNextText: 'MACD Indicator →',
    footerPrevHref: '/education/bollinger-bands',
    footerNextHref: '/education/macd-indicator',
  } as EducationPageContent,
};
