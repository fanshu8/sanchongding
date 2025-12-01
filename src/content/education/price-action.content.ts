import { EducationPageContent } from './forex-basics.content';

export const priceActionContent = {
  zh: {
    title: '价格行为交易策略 - Pin Bar、Inside Bar、供需区域完整指南 | Suncheer Forex',
    description: '深入讲解价格行为交易：Pin Bar、Inside Bar、Rejection Candle、供需区域（Supply/Demand）、裸K交易策略。掌握纯价格分析，无需指标。',
    keywords: '价格行为, Pin Bar, Inside Bar, 供需区域, 裸K交易, 价格拒绝, 纯价格分析',

    heroTitle: '价格行为交易策略',
    heroDescription: '摒弃指标噪音，回归价格本质，用最简单的方法交易',
    readingTime: '35分钟',
    difficulty: '中级',
    lastUpdated: '2024-01-23',

    tocTitle: '本文目录',
    tableOfContents: [
      { id: 'price-action-philosophy', title: '价格行为交易理念' },
      { id: 'core-patterns', title: '核心形态详解' },
      { id: 'supply-demand-zones', title: '供需区域识别' },
      { id: 'entry-exit-timing', title: '入场与出场时机' },
      { id: 'naked-chart-trading', title: '裸K图表交易' },
      { id: 'advanced-techniques', title: '进阶技巧' },
      { id: 'faq', title: '常见问题解答' },
    ],

    faqTitle: '常见问题解答',
    faqs: [
      {
        question: 'Q1: 价格行为交易真的可以不用任何指标吗？',
        answer: '可以，但需要经验积累。价格行为交易者认为"价格包含一切信息"，所有指标都是价格的衍生物，存在滞后性。纯裸K交易的优势：1) 图表清晰，无干扰；2) 实时反应，无滞后；3) 专注关键位置和形态。但新手建议：初期可保留1-2个简单MA（如20/50EMA）辅助判断趋势，等熟练后再完全移除指标。完全裸K需要3-6个月练习。'
      },
      {
        question: 'Q2: Pin Bar的胜率真的有那么高吗？',
        answer: 'Pin Bar本身胜率约55-60%，但满足以下条件可提升至75%+：1) 出现在关键支撑/阻力位（前高低、整数关口）；2) 针（影线）指向趋势相反方向（下降趋势中看涨Pin Bar，针向下）；3) 针长度至少是实体的2-3倍；4) 收盘价接近开盘价（针端被强力拒绝）；5) 顺应更大时间框架趋势；6) 下一根K线确认（看涨Pin Bar后收阳线）。记住：Pin Bar不是"必胜"，而是"高概率"信号。'
      },
      {
        question: 'Q3: 如何画供需区域？是不是越多越好？',
        answer: '供需区域应精简而非堆砌。识别方法：1) 找到价格快速离开（大阳线/大阴线）的区域；2) 该区域之前价格盘整或小幅波动（机构吸筹）；3) 离开后价格运行至少50-100点；4) 区域厚度15-30点。不是越多越好：只标记H4/D1级别的核心区域（5-8个足够），过多会导致混乱。供需区域有"新鲜度"（Fresh），首次回测最有效（胜率70%），多次触及后失效。'
      },
      {
        question: 'Q4: Inside Bar适合什么市场环境？',
        answer: 'Inside Bar（母子线）是趋势持续形态，最适合两种环境：1) 趋势中段的盘整（如上升趋势运行100点后出现Inside Bar，预示盘整后继续上涨）；2) 关键支撑/阻力位的决策时刻（突破方向即为交易方向）。不适合：横盘震荡市场（假突破多）、趋势末端（可能反转而非持续）。交易策略：Mother Candle（母线）高低点为边界，突破哪边就朝哪个方向交易，止损设在另一边。'
      },
      {
        question: 'Q5: 价格行为交易适合哪些时间框架？',
        answer: '价格行为交易在所有时间框架都有效，但推荐从H1/H4开始：1) H4图表：信号最可靠（噪音少），适合波段交易和兼职交易者，每周5-10个高质量信号；2) H1图表：平衡可靠性和频率，适合日内交易，每天2-5个信号；3) M15图表：信号频繁但噪音多，适合有经验的日内交易者。避免：M5及以下时间框架，价格行为信号在超短周期失效率高。建议：多时间框架分析（H4确认趋势，H1寻找价格行为信号入场）。'
      }
    ],

    relatedTitle: '相关学习资源',
    relatedResources: [
      {
        href: '/education/support-resistance',
        icon: '📏',
        title: '支撑阻力',
        description: '价格行为的关键位置基础'
      },
      {
        href: '/education/candlestick-patterns',
        icon: '📊',
        title: 'K线形态',
        description: '价格行为的基本语言'
      },
      {
        href: '/splan/join-us',
        icon: '🎓',
        title: '培训课程',
        description: '系统学习价格行为策略'
      }
    ],

    ctaTitle: '想要掌握价格行为交易的精髓？',
    ctaDescription: '加入Suncheer Forex专业培训，学习裸K交易和供需区域策略',
    ctaPrimaryButton: '了解培训计划',
    ctaSecondaryButton: '免费心理测评',

    footerPrevText: '← 支撑阻力',
    footerNextText: '风险管理 →',
    footerPrevHref: '/education/support-resistance',
    footerNextHref: '/education/risk-management',
  } as EducationPageContent,

  en: {
    title: 'Price Action Trading Strategy - Pin Bar, Inside Bar, Supply/Demand Zones Guide | Suncheer Forex',
    description: 'In-depth explanation of price action trading: Pin Bar, Inside Bar, Rejection Candle, Supply/Demand zones, naked chart trading strategies. Master pure price analysis without indicators.',
    keywords: 'price action, Pin Bar, Inside Bar, supply demand zones, naked trading, price rejection, pure price analysis',

    heroTitle: 'Price Action Trading Strategy',
    heroDescription: 'Eliminate indicator noise, return to price essence, trade with the simplest method',
    readingTime: '35 min',
    difficulty: 'Intermediate',
    lastUpdated: 'Jan 23, 2024',

    tocTitle: 'Table of Contents',
    tableOfContents: [
      { id: 'price-action-philosophy', title: 'Price Action Philosophy' },
      { id: 'core-patterns', title: 'Core Patterns Explained' },
      { id: 'supply-demand-zones', title: 'Supply/Demand Zone Identification' },
      { id: 'entry-exit-timing', title: 'Entry & Exit Timing' },
      { id: 'naked-chart-trading', title: 'Naked Chart Trading' },
      { id: 'advanced-techniques', title: 'Advanced Techniques' },
      { id: 'faq', title: 'Frequently Asked Questions' },
    ],

    faqTitle: 'Frequently Asked Questions',
    faqs: [
      {
        question: 'Q1: Can price action trading really use no indicators?',
        answer: 'Yes, but requires experience. Price action traders believe "price contains all information" - all indicators are derivatives of price, with lag. Pure naked trading advantages: 1) Clear charts, no distractions; 2) Real-time response, no lag; 3) Focus on key levels and patterns. But beginners: Initially keep 1-2 simple MAs (like 20/50 EMA) to help judge trend, remove indicators after proficiency. Full naked trading needs 3-6 months practice.'
      },
      {
        question: 'Q2: Is Pin Bar win rate really that high?',
        answer: 'Pin Bar itself ~55-60% win rate, but meeting these conditions can improve to 75%+: 1) At key support/resistance (previous highs/lows, round numbers); 2) Pin (wick) points opposite trend direction (in downtrend, bullish Pin Bar, pin points down); 3) Pin length at least 2-3x body; 4) Close near open (pin end strongly rejected); 5) Aligns with larger timeframe trend; 6) Next candle confirms (after bullish Pin Bar, bullish candle closes). Remember: Pin Bar is not "guaranteed win" but "high probability" signal.'
      },
      {
        question: 'Q3: How to draw supply/demand zones? Are more better?',
        answer: 'Supply/demand zones should be streamlined not cluttered. Identification method: 1) Find area where price quickly left (large bullish/bearish candle); 2) Before that area, price consolidated or small movement (institutional accumulation); 3) After leaving, price moves at least 50-100 points; 4) Zone thickness 15-30 points. Not more is better: Only mark H4/D1 core zones (5-8 enough), too many causes confusion. Supply/demand zones have "freshness" (Fresh), first retest most effective (70% win rate), loses effectiveness after multiple touches.'
      },
      {
        question: 'Q4: What market environment suits Inside Bar?',
        answer: 'Inside Bar (mother-child line) is trend continuation pattern, best suits two environments: 1) Mid-trend consolidation (e.g., after 100 point uptrend, Inside Bar appears, indicates consolidation then continues up); 2) Decision moment at key support/resistance (breakout direction is trading direction). Not suitable: Sideways ranging market (many false breakouts), trend end (may reverse not continue). Trading strategy: Mother Candle high/low points are boundaries, break whichever side trade that direction, stop on other side.'
      },
      {
        question: 'Q5: Which timeframes suit price action trading?',
        answer: 'Price action trading effective on all timeframes, but recommend starting with H1/H4: 1) H4 chart: Most reliable signals (less noise), suitable for swing trading and part-timers, 5-10 quality signals weekly; 2) H1 chart: Balances reliability and frequency, suitable for day trading, 2-5 signals daily; 3) M15 chart: Frequent signals but noisy, suitable for experienced day traders. Avoid: M5 and below timeframes, price action signals fail frequently on ultra-short periods. Recommendation: Multiple timeframe analysis (H4 confirm trend, H1 find price action signal for entry).'
      }
    ],

    relatedTitle: 'Related Learning Resources',
    relatedResources: [
      {
        href: '/education/support-resistance',
        icon: '📏',
        title: 'Support Resistance',
        description: 'Key level foundation for price action'
      },
      {
        href: '/education/candlestick-patterns',
        icon: '📊',
        title: 'Candlestick Patterns',
        description: 'Basic language of price action'
      },
      {
        href: '/splan/join-us',
        icon: '🎓',
        title: 'Training Course',
        description: 'Systematically learn price action'
      }
    ],

    ctaTitle: 'Want to Master the Essence of Price Action Trading?',
    ctaDescription: 'Join Suncheer Forex professional training to learn naked trading and supply/demand strategies',
    ctaPrimaryButton: 'Learn About Training',
    ctaSecondaryButton: 'Free Psychology Test',

    footerPrevText: '← Support Resistance',
    footerNextText: 'Risk Management →',
    footerPrevHref: '/education/support-resistance',
    footerNextHref: '/education/risk-management',
  } as EducationPageContent,
};
