export interface EducationPageContent {
  // Metadata
  title: string;
  description: string;
  keywords: string;

  // Hero section
  heroTitle: string;
  heroDescription: string;
  readingTime: string;
  difficulty: string;
  lastUpdated: string;

  // Table of contents
  tocTitle: string;
  tableOfContents: { id: string; title: string }[];

  // Content sections (you can structure this as needed)
  sections: {
    id: string;
    title: string;
    content: string; // HTML string or JSX
  }[];

  // FAQ
  faqTitle: string;
  faqs: { question: string; answer: string }[];

  // Related resources
  relatedTitle: string;
  relatedResources: {
    href: string;
    icon: string;
    title: string;
    description: string;
  }[];

  // CTA
  ctaTitle: string;
  ctaDescription: string;
  ctaPrimaryButton: string;
  ctaSecondaryButton: string;

  // Footer navigation
  footerPrevText: string;
  footerNextText: string;
  footerPrevHref?: string;
  footerNextHref?: string;
}

export const forexBasicsContent = {
  zh: {
    title: '数字货币交易基础知识完整指南 - 从零开始学习数字货币交易 | Suncheer Forex',
    description: '完整的数字货币交易入门教程，涵盖数字货币市场基础、交易术语、技术分析、风险管理等核心知识。适合零基础新手，由职业交易员编写，助你快速掌握数字货币交易essentials。',
    keywords: '数字货币交易基础, 数字货币入门, 数字货币教程, 数字货币市场, 数字货币交易知识, 新手学数字货币, 数字货币交易教程',

    heroTitle: '数字货币交易基础知识',
    heroDescription: '完整的数字货币交易入门指南，从零开始掌握数字货币市场核心概念',
    readingTime: '15分钟',
    difficulty: '初级',
    lastUpdated: '2024-01-15',

    tocTitle: '本文目录',
    tableOfContents: [
      { id: 'what-is-cryptocurrency', title: '什么是数字货币交易？' },
      { id: 'how-it-works', title: '数字货币市场的运作机制' },
      { id: 'currency-pairs', title: '交易对：交易的基础单位' },
      { id: 'terminology', title: '核心交易术语解析' },
      { id: 'how-to-trade', title: '数字货币交易如何进行？' },
      { id: 'practical-tips', title: '新手实战技巧' },
      { id: 'faq', title: '常见问题解答' },
    ],

    faqTitle: '常见问题解答',
    faqs: [
      {
        question: 'Q1: 数字货币交易需要多少资金才能开始？',
        answer: '理论上，100USDT即可开始交易小额交易。但从风险管理角度，我们建议至少准备1000-2000USDT，这样可以更好地承受市场波动，设置合理的止损，并有足够的资金进行多次交易学习。'
      },
      {
        question: 'Q2: 数字货币交易合法吗？风险大吗？',
        answer: '数字货币交易在中国是合法的，但需要选择受监管的国际交易所。风险确实存在，因为使用了杠杆。但通过严格的风险管理（设置止损、控制仓位、使用合理杠杆），风险是可控的。'
      },
      {
        question: 'Q3: 什么时间交易数字货币最好？',
        answer: '最佳交易时段是全球交易高峰时段（数字货币市场24小时运行），市场全天候运行，流动性持续活跃。但不同交易对有不同的活跃时间，需要根据交易品种选择。'
      },
      {
        question: 'Q4: 技术分析和基本面分析哪个更重要？',
        answer: '两者都重要，但用途不同。技术分析帮助你寻找入场时机，基本面分析帮助你判断长期趋势。最佳实践：用基本面分析确定交易方向，用技术分析寻找具体入场时机。'
      },
      {
        question: 'Q5: 新手最常犯的错误是什么？',
        answer: '1) 过度交易；2) 不设止损；3) 仓位过重；4) 情绪化交易；5) 缺乏交易计划。避免这些错误的关键是制定严格的交易计划并坚持执行。'
      }
    ],

    relatedTitle: '相关学习资源',
    relatedResources: [
      {
        href: '/education#technical',
        icon: '📊',
        title: '技术分析课程',
        description: '学习K线图、技术指标和图表形态分析方法'
      },
      {
        href: '/tools/position-calculator',
        icon: '🧮',
        title: '仓位计算器',
        description: '免费在线工具，计算最佳交易手数和风险'
      },
      {
        href: '/education#risk',
        icon: '🛡️',
        title: '风险管理课程',
        description: '掌握止损、仓位控制和资金管理的核心技巧'
      }
    ],

    ctaTitle: '准备开始你的数字货币交易之旅？',
    ctaDescription: '加入 Suncheer Forex 30天系统化培训，从零基础到职业交易员',
    ctaPrimaryButton: '了解培训计划',
    ctaSecondaryButton: '免费心理测评',

    footerPrevText: '← 教育中心首页',
    footerNextText: '浏览所有课程 →',
    footerPrevHref: '/education',
    footerNextHref: '/education',
  } as EducationPageContent,

  en: {
    title: 'Complete Guide to Cryptocurrency Trading Basics - Learn Cryptocurrency from Scratch | Suncheer Forex',
    description: 'Comprehensive cryptocurrency trading tutorial covering market basics, trading terminology, technical analysis, and risk management. Perfect for beginners, written by professional traders.',
    keywords: 'cryptocurrency trading basics, cryptocurrency tutorial, cryptocurrency for beginners, currency trading, Crypto trading guide, learn cryptocurrency',

    heroTitle: 'Cryptocurrency Trading Basics',
    heroDescription: 'Complete beginner\'s guide to cryptocurrency trading, master core concepts from scratch',
    readingTime: '15 min',
    difficulty: 'Beginner',
    lastUpdated: 'Jan 15, 2024',

    tocTitle: 'Table of Contents',
    tableOfContents: [
      { id: 'what-is-cryptocurrency', title: 'What is Cryptocurrency Trading?' },
      { id: 'how-it-works', title: 'How the Cryptocurrency Market Works' },
      { id: 'currency-pairs', title: 'Trading Pairs: Trading Units' },
      { id: 'terminology', title: 'Core Trading Terms' },
      { id: 'how-to-trade', title: 'How to Trade Cryptocurrency?' },
      { id: 'practical-tips', title: 'Practical Tips for Beginners' },
      { id: 'faq', title: 'Frequently Asked Questions' },
    ],

    faqTitle: 'Frequently Asked Questions',
    faqs: [
      {
        question: 'Q1: How much capital do I need to start cryptocurrency trading?',
        answer: 'Technically, you can start with $100 for micro lots. However, from a risk management perspective, we recommend at least $1000-2000 to better handle market volatility, set reasonable stop losses, and have enough capital for multiple learning trades.'
      },
      {
        question: 'Q2: Is cryptocurrency trading legal? Is it risky?',
        answer: 'Cryptocurrency trading is legal and requires choosing regulated international exchanges. Risk exists due to leverage, but through strict risk management (stop losses, position control, reasonable leverage), risk is manageable.'
      },
      {
        question: 'Q3: When is the best time to trade cryptocurrency?',
        answer: 'The best trading session is the London-New York overlap (20:00-24:00 Beijing time), when market liquidity is strongest and fees are tightest. However, different trading pairs have different active times.'
      },
      {
        question: 'Q4: Which is more important: technical or fundamental analysis?',
        answer: 'Both are important with different purposes. Technical analysis helps find entry timing, fundamental analysis helps determine long-term trends. Best practice: use fundamentals for direction, technicals for timing.'
      },
      {
        question: 'Q5: What are the most common beginner mistakes?',
        answer: '1) Overtrading; 2) Not setting stop losses; 3) Excessive position sizes; 4) Emotional trading; 5) Lack of trading plan. The key to avoiding these is creating and sticking to a strict trading plan.'
      }
    ],

    relatedTitle: 'Related Learning Resources',
    relatedResources: [
      {
        href: '/education#technical',
        icon: '📊',
        title: 'Technical Analysis',
        description: 'Learn candlestick charts, indicators and pattern analysis'
      },
      {
        href: '/tools/position-calculator',
        icon: '🧮',
        title: 'Position Calculator',
        description: 'Free online tool to calculate optimal lot size and risk'
      },
      {
        href: '/education#risk',
        icon: '🛡️',
        title: 'Risk Management',
        description: 'Master stop loss, position control and money management'
      }
    ],

    ctaTitle: 'Ready to Start Your Cryptocurrency Trading Journey?',
    ctaDescription: 'Join Suncheer Forex 30-day systematic training, from beginner to professional trader',
    ctaPrimaryButton: 'Learn About Training',
    ctaSecondaryButton: 'Free Psychology Test',

    footerPrevText: '← Education Center',
    footerNextText: 'Browse All Courses →',
    footerPrevHref: '/education',
    footerNextHref: '/education',
  } as EducationPageContent,
};
