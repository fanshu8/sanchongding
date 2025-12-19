/**
 * 交易所选择指南页面内容配置（CEX 与 DEX 对比）
 * 字段与用途参见 breakout-trading.content.ts 头部注释
 */
export const brokerSelectionContent = {
  zh: {
    title: '交易所选择指南：CEX 与 DEX 全面对比',
    description:
      '从安全性、费用、流动性与使用体验四个维度对比主流中心化与去中心化交易所，帮助你做出正确选择。',
    keywords:
      '交易所选择, CEX, DEX, Binance, OKX, Coinbase, Uniswap, PancakeSwap, 安全性评估',
    heroTitle: '交易所选择指南：CEX 与 DEX 如何选？',
    heroDescription:
      '新手与大额交易优先合规 CEX，熟练后可在 DEX 体验去中心化的自由与透明。',
    readingTime: '≈10分钟',
    difficulty: '入门',
    lastUpdated: '2025-12-19',
    tocTitle: '目录',
    tableOfContents: [
      { id: 'cex-vs-dex', title: 'CEX 与 DEX：核心区别' },
      { id: 'major-cex', title: '主流 CEX 对比' },
      { id: 'major-dex', title: '主流 DEX 对比' },
      { id: 'security', title: '安全性评估与个人安全' },
    ],
    faqTitle: '常见问题',
    faqs: [
      {
        question: '资金如何分配在 CEX 与钱包？',
        answer:
          '仅在 CEX 保留交易所需资金，大额长期持有请转入冷钱包（Ledger/Trezor）。',
      },
      {
        question: '手续费差异会影响策略吗？',
        answer:
          '会。高频策略更敏感，建议选择手续费低、深度好的 CEX；在 DEX 需同时考虑 Gas 费与滑点。',
      },
    ],
    relatedTitle: '推荐阅读',
    relatedResources: [
      {
        href: '/education/trading-sessions-guide',
        icon: '🕒',
        title: '交易时段与流动性',
        description: '选择高流动性时段交易，降低滑点',
      },
      {
        href: '/education/risk-management',
        icon: '🛡️',
        title: '风险管理基础',
        description: '资金安全与风控优先级',
      },
    ],
    ctaTitle: '完成交易所选择后，标准化你的风险管理',
    ctaDescription:
      '使用仓位计算器与交易日志，统一风险基准、减少人为失误。',
    ctaPrimaryButton: '使用工具',
    ctaSecondaryButton: '了解培训详情',
    footerPrevText: '返回教育中心',
    footerPrevHref: '/education',
    footerNextText: '下一篇：交易时段指南',
    footerNextHref: '/education/trading-sessions-guide',
  },
  en: {
    title: 'Exchange Selection Guide: CEX vs DEX',
    description:
      'Compare major centralized and decentralized exchanges by security, fees, liquidity, and UX to make the right choice.',
    keywords:
      'exchange selection, CEX, DEX, Binance, OKX, Coinbase, Uniswap, PancakeSwap, security evaluation',
    heroTitle: 'How to Choose: CEX vs DEX',
    heroDescription:
      'Beginners and large trades should prioritize regulated CEX; later explore DEX for decentralization and transparency.',
    readingTime: '≈10 mins',
    difficulty: 'Beginner',
    lastUpdated: '2025-12-19',
    tocTitle: 'Table of Contents',
    tableOfContents: [
      { id: 'cex-vs-dex', title: 'CEX vs DEX: Core Differences' },
      { id: 'major-cex', title: 'Major CEX Comparison' },
      { id: 'major-dex', title: 'Major DEX Comparison' },
      { id: 'security', title: 'Security Evaluation & Personal Safety' },
    ],
    faqTitle: 'FAQs',
    faqs: [
      {
        question: 'How to split funds between CEX and wallets?',
        answer:
          'Keep only trading funds on CEX and store large amounts in cold wallets (Ledger/Trezor).',
      },
      {
        question: 'Do fee differences affect strategies?',
        answer:
          'Yes. High-frequency strategies are sensitive. Choose low-fee, deep CEX; on DEX also consider gas and slippage.',
      },
    ],
    relatedTitle: 'Related Resources',
    relatedResources: [
      {
        href: '/education/trading-sessions-guide',
        icon: '🕒',
        title: 'Trading Sessions & Liquidity',
        description: 'Trade during high-liquidity sessions to reduce slippage',
      },
      {
        href: '/education/risk-management',
        icon: '🛡️',
        title: 'Risk Management Basics',
        description: 'Capital safety and risk control priority',
      },
    ],
    ctaTitle: 'Standardize Your Risk After Choosing Exchanges',
    ctaDescription:
      'Use position calculator and trading journal to unify risk baseline and reduce human errors.',
    ctaPrimaryButton: 'Use Tools',
    ctaSecondaryButton: 'Learn Training Details',
    footerPrevText: 'Back to Education',
    footerPrevHref: '/education',
    footerNextText: 'Next: Trading Sessions Guide',
    footerNextHref: '/education/trading-sessions-guide',
  },
};

