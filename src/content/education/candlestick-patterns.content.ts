/**
 * K线形态页面内容配置
 * 字段与用途参见 breakout-trading.content.ts 头部注释
 */
export const candlestickPatternsContent = {
  zh: {
    title: 'K线形态：反转与延续的系统识别',
    description:
      '从基础结构到反转/延续形态、可靠性评估与假信号规避，完整构建 K 形态交易框架。',
    keywords:
      'K线形态, 吞没, Pin Bar, 晨星, 夜星, 三白兵, 三黑鸦, 假信号',
    heroTitle: 'K线形态：结构、位置与确认',
    heroDescription:
      '形态本身只是信息，位置与趋势才是胜率关键。结合确认与多时间框架提升可靠性。',
    readingTime: '≈14分钟',
    difficulty: '中级',
    lastUpdated: '2025-12-19',
    tocTitle: '目录',
    tableOfContents: [
      { id: 'candlestick-basics', title: 'K线基础与解读' },
      { id: 'reversal-patterns', title: '反转形态深度分析' },
      { id: 'continuation-patterns', title: '持续形态识别' },
      { id: 'pattern-reliability', title: '形态可靠性评估' },
      { id: 'false-signals', title: '假信号识别与规避' },
      { id: 'practical-cases', title: '实战案例分析' },
    ],
    faqTitle: '常见问题',
    faqs: [
      {
        question: '单根完美形态能直接入场吗？',
        answer:
          '不建议。需满足位置（关键位）、趋势（顺势）与确认（下一根K线/突破形态高低点）三要素。',
      },
      {
        question: '小时间框架的形态是否可靠？',
        answer:
          'M5/M15 噪音大，建议以 H1/H4/D1 为主；小周期仅作辅助触发。',
      },
    ],
    relatedTitle: '推荐阅读',
    relatedResources: [
      {
        href: '/education/support-resistance',
        icon: '📐',
        title: '支撑阻力与关键位',
        description: '形态胜率的核心：正确的位置',
      },
      {
        href: '/education/price-action',
        icon: '📊',
        title: '价格行为框架',
        description: '以逻辑整合形态、结构与趋势',
      },
    ],
    ctaTitle: '把形态融入完整交易系统',
    ctaDescription:
      '建立“位置-趋势-确认-风控”四要素的标准化流程，提升执行力与长期稳定性。',
    ctaPrimaryButton: '了解培训详情',
    ctaSecondaryButton: '使用工具',
    footerPrevText: '返回教育中心',
    footerPrevHref: '/education',
    footerNextText: '下一篇：支撑阻力',
    footerNextHref: '/education/support-resistance',
  },
  en: {
    title: 'Candlestick Patterns: Systematic Recognition',
    description:
      'From basics to reversal/continuation, reliability assessment and false-signal avoidance, build a complete pattern framework.',
    keywords:
      'candlestick patterns, engulfing, pin bar, morning star, evening star, soldiers, crows, false signal',
    heroTitle: 'Candlestick Patterns: Structure, Location & Confirmation',
    heroDescription:
      'Patterns are signals; location and trend decide win rate. Combine confirmation and multi-timeframe alignment.',
    readingTime: '≈14 mins',
    difficulty: 'Intermediate',
    lastUpdated: '2025-12-19',
    tocTitle: 'Table of Contents',
    tableOfContents: [
      { id: 'candlestick-basics', title: 'Candlestick Basics & Reading' },
      { id: 'reversal-patterns', title: 'Reversal Patterns Analysis' },
      { id: 'continuation-patterns', title: 'Continuation Pattern Recognition' },
      { id: 'pattern-reliability', title: 'Pattern Reliability Assessment' },
      { id: 'false-signals', title: 'False Signal Identification' },
      { id: 'practical-cases', title: 'Practical Case Studies' },
    ],
    faqTitle: 'FAQs',
    faqs: [
      {
        question: 'Can a perfect single pattern be traded directly?',
        answer:
          'Not recommended. Require location (key level), trend alignment, and confirmation (next candle/break of highs/lows).',
      },
      {
        question: 'Are lower timeframe patterns reliable?',
        answer:
          'M5/M15 are noisy. Prefer H1/H4/D1; use lower timeframes only as trigger support.',
      },
    ],
    relatedTitle: 'Related Resources',
    relatedResources: [
      {
        href: '/education/support-resistance',
        icon: '📐',
        title: 'Support & Resistance',
        description: 'Core of pattern win rate: right location',
      },
      {
        href: '/education/price-action',
        icon: '📊',
        title: 'Price Action Framework',
        description: 'Integrate patterns, structure and trend logically',
      },
    ],
    ctaTitle: 'Integrate Patterns into a Complete System',
    ctaDescription:
      'Standardize the four pillars: location, trend, confirmation and risk control.',
    ctaPrimaryButton: 'Learn Training Details',
    ctaSecondaryButton: 'Use Tools',
    footerPrevText: 'Back to Education',
    footerPrevHref: '/education',
    footerNextText: 'Next: Support & Resistance',
    footerNextHref: '/education/support-resistance',
  },
};

