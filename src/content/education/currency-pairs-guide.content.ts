/**
 * 加密货币交易对指南页面内容配置
 * 字段与用途参见 breakout-trading.content.ts 头部注释
 */
export const currencyPairsGuideContent = {
  zh: {
    title: '加密货币交易对指南：BTC/USDT、ETH/USDT 等分类与选择',
    description:
      '理解交易对表示法、主流分类（BTC/USDT/ETH 本位）、选择方法与常见误区，构建更清晰的交易框架。',
    keywords:
      '交易对, BTC/USDT, ETH/USDT, BTC 本位, USDT 本位, 选择交易对, 流动性',
    heroTitle: '加密货币交易对：分类、选择与策略匹配',
    heroDescription:
      '根据目标、市场阶段与流动性挑选合适交易对，新手优先主流 USDT 交易对。',
    readingTime: '≈9分钟',
    difficulty: '入门',
    lastUpdated: '2025-12-19',
    tocTitle: '目录',
    tableOfContents: [
      { id: 'what-are-pairs', title: '什么是交易对' },
      { id: 'major-pairs', title: '主流交易对分类' },
      { id: 'how-to-choose', title: '如何选择交易对' },
      { id: 'common-mistakes', title: '常见错误避免' },
    ],
    faqTitle: '常见问题',
    faqs: [
      {
        question: '新手应该交易哪些交易对？',
        answer:
          '建议前 6 个月优先 BTC/USDT 与 ETH/USDT，价格直观、流动性好、滑点小。',
      },
      {
        question: 'BTC 本位交易对有什么用途？',
        answer:
          '用于衡量山寨币相对 BTC 的强弱，帮助识别资金轮动与相对表现。',
      },
    ],
    relatedTitle: '推荐阅读',
    relatedResources: [
      {
        href: '/education/trading-sessions-guide',
        icon: '🕒',
        title: '交易时段与流动性',
        description: '在高流动性时段交易，降低滑点与费用',
      },
      {
        href: '/education/spreads-and-commissions',
        icon: '💸',
        title: '点差与手续费',
        description: '评估总成本，优化交易效率',
      },
    ],
    ctaTitle: '选择好交易对后，做好风险与执行',
    ctaDescription:
      '使用工具与规则统一执行标准，在不同交易对保持一致的风险基准。',
    ctaPrimaryButton: '使用工具',
    ctaSecondaryButton: '了解培训详情',
    footerPrevText: '返回教育中心',
    footerPrevHref: '/education',
    footerNextText: '下一篇：交易时段指南',
    footerNextHref: '/education/trading-sessions-guide',
  },
  en: {
    title: 'Crypto Trading Pairs Guide: Categories & Selection',
    description:
      'Understand notation, major categories (BTC/USDT/ETH), selection methods and pitfalls to build a clearer trading framework.',
    keywords:
      'trading pairs, BTC/USDT, ETH/USDT, BTC-denominated, USDT-denominated, choose pairs, liquidity',
    heroTitle: 'Crypto Trading Pairs: Categories, Selection & Strategy Fit',
    heroDescription:
      'Choose pairs based on goals, market phase and liquidity. Beginners should prioritize major USDT pairs.',
    readingTime: '≈9 mins',
    difficulty: 'Beginner',
    lastUpdated: '2025-12-19',
    tocTitle: 'Table of Contents',
    tableOfContents: [
      { id: 'what-are-pairs', title: 'What Are Trading Pairs' },
      { id: 'major-pairs', title: 'Major Pair Categories' },
      { id: 'how-to-choose', title: 'How to Choose Pairs' },
      { id: 'common-mistakes', title: 'Common Mistakes to Avoid' },
    ],
    faqTitle: 'FAQs',
    faqs: [
      {
        question: 'Which pairs should beginners trade?',
        answer:
          'Focus on BTC/USDT and ETH/USDT in the first 6 months: intuitive pricing, high liquidity, low slippage.',
      },
      {
        question: 'What are BTC-denominated pairs useful for?',
        answer:
          'Measure altcoin relative strength vs BTC to identify rotation and relative performance.',
      },
    ],
    relatedTitle: 'Related Resources',
    relatedResources: [
      {
        href: '/education/trading-sessions-guide',
        icon: '🕒',
        title: 'Trading Sessions & Liquidity',
        description: 'Trade in high-liquidity sessions to reduce slippage and fees',
      },
      {
        href: '/education/spreads-and-commissions',
        icon: '💸',
        title: 'Spreads & Commissions',
        description: 'Evaluate total cost and improve trading efficiency',
      },
    ],
    ctaTitle: 'After Choosing Pairs, Standardize Risk & Execution',
    ctaDescription:
      'Use tools and rules to unify execution and keep consistent risk baseline across pairs.',
    ctaPrimaryButton: 'Use Tools',
    ctaSecondaryButton: 'Learn Training Details',
    footerPrevText: 'Back to Education',
    footerPrevHref: '/education',
    footerNextText: 'Next: Trading Sessions Guide',
    footerNextHref: '/education/trading-sessions-guide',
  },
};

