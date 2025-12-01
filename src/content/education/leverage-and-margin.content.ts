import { EducationPageContent } from './forex-basics.content';

export const leverageMarginContent = {
  zh: {
    title: '数字货三重杠杆与保证金完整指南 - 深度解析交易杠杆原理与风险 | Suncheer Forex',
    description: '全面讲解数字货三重杠杆和保证金机制：杠杆比例选择、保证金计算、强制平仓规则、爆仓风险管理。帮助交易者理性使用杠杆，避免过度交易，实现稳健盈利。',
    keywords: '数字货三重杠杆, 杠杆交易, 杠杆比例, 强制平仓, 爆仓, 保证金计算, 杠杆风险, 数字货三重风险管理',

    heroTitle: '杠杆与保证金详解',
    heroDescription: '深入理解杠杆机制，掌握保证金管理的核心原则',
    readingTime: '20分钟',
    difficulty: '初级',
    lastUpdated: '2024-01-15',

    tocTitle: '本文目录',
    tableOfContents: [
      { id: 'what-is-leverage', title: '什么是杠杆交易？' },
      { id: 'margin-explained', title: '保证金机制详解' },
      { id: 'leverage-ratios', title: '杠杆比例选择：1:100 vs 1:500？' },
      { id: 'margin-call', title: '追加保证金与强制平仓' },
      { id: 'risk-management', title: '杠杆风险管理策略' },
      { id: 'practical-examples', title: '实战案例分析' },
      { id: 'faq', title: '常见问题解答' },
    ],

    faqTitle: '常见问题解答',
    faqs: [
      {
        question: 'Q1: 杠杆越高越好吗？',
        answer: '绝对不是！高杠杆是双鼎剑。虽然高杠杆可以用更少资金开仓，但同时也放大了风险。1:500杠杆下，市场波动0.2%就可能导致爆仓。建议：新手使用1:50-1:100杠杆，有经验者可用1:100-1:200。真正的专业交易员往往使用较低杠杆，通过严格风险管理实现稳定盈利。'
      },
      {
        question: 'Q2: 如何计算需要的保证金？',
        answer: '保证金 = (手数 × 合约大小 × 开仓价格) ÷ 杠杆。例如：交易1标准交易量BTC/USDT (1.1000)，杠杆1:100，需要保证金 = (1 × 100,000 × 1.1000) ÷ 100 = $1,100。使用我们的仓位计算器可以快速计算。'
      },
      {
        question: 'Q3: 什么时候会被强制平仓？',
        answer: '当净值(Equity)低于保证金要求的一定比例时（通常是50%-20%，称为止损水平Stop Out Level），交易所会自动平仓。例如：账户$1000，开仓占用保证金$500，如果亏损到净值低于$250（50%止损水平），就会被强平。避免强平的关键：控制仓位，设置止损，保持充足的可用保证金。'
      },
      {
        question: 'Q4: 杠杆是如何放大风险的？',
        answer: '杠杆放大的是相对账户的盈亏比例，而非市场波动本身。例如：$1000账户，1:100杠杆交易1标准交易量BTC/USDT，市场波动100点(1%)，你的盈亏是$1000（100%账户）。而不用杠杆交易，同样波动只影响1%。这就是为什么严格的仓位控制至关重要。'
      },
      {
        question: 'Q5: 杠杆交易和股票融资融券有什么区别？',
        answer: '主要区别：1) 杠杆比例：数字货三重可达1:500，股票通常1:2-1:5；2) 交易时间：数字货三重24小时，股票有固定交易时段；3) 利息成本：数字货三重只有隔夜持仓利息，股票融资有持续利息；4) 双向交易：数字货三重天然支持做空，股票融券较复杂。但核心风险原理相同：都是借钱交易，都会放大盈亏。'
      }
    ],

    relatedTitle: '相关学习资源',
    relatedResources: [
      {
        href: '/tools/position-calculator',
        icon: '🧮',
        title: '仓位计算器',
        description: '根据账户和风险计算最佳交易手数和保证金'
      },
      {
        href: '/education#risk',
        icon: '🛡️',
        title: '风险管理课程',
        description: '学习专业的风险管理和资金管理策略'
      },
      {
        href: '/education/fees-and-commissions',
        icon: '💰',
        title: '手续费与佣金',
        description: '了解交易成本的其他重要组成部分'
      }
    ],

    ctaTitle: '想要学习专业的杠杆管理策略？',
    ctaDescription: '加入 Suncheer Forex 培训，掌握职业交易员的风险控制技巧',
    ctaPrimaryButton: '了解培训计划',
    ctaSecondaryButton: '免费心理测评',

    footerPrevText: '← 手续费与佣金',
    footerNextText: '技术分析基础 →',
    footerPrevHref: '/education/fees-and-commissions',
    footerNextHref: '/education/bollinger-bands',
  } as EducationPageContent,

  en: {
    title: 'Complete Guide to Cryptocurrency Leverage and Margin - Deep Dive into Trading Mechanisms | Suncheer Forex',
    description: 'Comprehensive explanation of cryptocurrency leverage and margin: leverage ratio selection, margin calculation, margin call rules, liquidation risk management. Learn to use leverage rationally for stable profitability.',
    keywords: 'cryptocurrency leverage, leverage trading, leverage ratio, margin call, liquidation, margin calculation, leverage risk, cryptocurrency risk management',

    heroTitle: 'Leverage and Margin Explained',
    heroDescription: 'Master leverage mechanisms and core principles of margin management',
    readingTime: '20 min',
    difficulty: 'Beginner',
    lastUpdated: 'Jan 15, 2024',

    tocTitle: 'Table of Contents',
    tableOfContents: [
      { id: 'what-is-leverage', title: 'What is Leveraged Trading?' },
      { id: 'margin-explained', title: 'Understanding Margin Mechanics' },
      { id: 'leverage-ratios', title: 'Choosing Leverage: 1:100 vs 1:500?' },
      { id: 'margin-call', title: 'Margin Call and Forced Liquidation' },
      { id: 'risk-management', title: 'Leverage Risk Management Strategies' },
      { id: 'practical-examples', title: 'Practical Case Analysis' },
      { id: 'faq', title: 'Frequently Asked Questions' },
    ],

    faqTitle: 'Frequently Asked Questions',
    faqs: [
      {
        question: 'Q1: Is higher leverage better?',
        answer: 'Absolutely not! High leverage is a double-edged sword. While it allows opening positions with less capital, it also amplifies risk. At 1:500 leverage, a 0.2% market move can cause liquidation. Recommendation: Beginners use 1:50-1:100, experienced traders 1:100-1:200. Professional traders often use lower leverage, achieving stable profits through strict risk management.'
      },
      {
        question: 'Q2: How do I calculate required margin?',
        answer: 'Margin = (Lots × Contract size × Opening price) ÷ Leverage. Example: Trading 1 standard lot BTC/USDT (1.1000) with 1:100 leverage requires margin = (1 × 100,000 × 1.1000) ÷ 100 = $1,100. Use our position calculator for quick calculations.'
      },
      {
        question: 'Q3: When does forced liquidation occur?',
        answer: 'When equity falls below a certain percentage of margin requirement (typically 50%-20%, called Stop Out Level), exchanges automatically close positions. Example: $1000 account, $500 margin used, if losses bring equity below $250 (50% stop out), liquidation occurs. Keys to avoid: control position size, set stop losses, maintain sufficient free margin.'
      },
      {
        question: 'Q4: How does leverage amplify risk?',
        answer: 'Leverage amplifies profit/loss relative to your account, not market movement itself. Example: $1000 account, 1:100 leverage trading 1 standard lot BTC/USDT, 100-point market move (1%) creates $1000 profit/loss (100% of account). Without leverage, same move affects only 1%. This is why strict position sizing is crucial.'
      },
      {
        question: 'Q5: How does leverage trading differ from stock margin?',
        answer: 'Key differences: 1) Leverage ratios: Cryptocurrency up to 1:500, stocks typically 1:2-1:5; 2) Trading hours: Cryptocurrency 24-hour, stocks fixed sessions; 3) Interest costs: Cryptocurrency only overnight swap, stocks continuous financing interest; 4) Short selling: Cryptocurrency naturally supports shorting, stock shorting more complex. But core risk principle is same: borrowing to trade amplifies gains and losses.'
      }
    ],

    relatedTitle: 'Related Learning Resources',
    relatedResources: [
      {
        href: '/tools/position-calculator',
        icon: '🧮',
        title: 'Position Calculator',
        description: 'Calculate optimal lot size and margin based on account and risk'
      },
      {
        href: '/education#risk',
        icon: '🛡️',
        title: 'Risk Management',
        description: 'Learn professional risk and money management strategies'
      },
      {
        href: '/education/fees-and-commissions',
        icon: '💰',
        title: 'Fees & Commissions',
        description: 'Understand other important components of trading costs'
      }
    ],

    ctaTitle: 'Want to Master Professional Leverage Management?',
    ctaDescription: 'Join Suncheer Forex training to learn professional risk control techniques',
    ctaPrimaryButton: 'Learn About Training',
    ctaSecondaryButton: 'Free Psychology Test',

    footerPrevText: '← Fees & Commissions',
    footerNextText: 'Technical Analysis Basics →',
    footerPrevHref: '/education/fees-and-commissions',
    footerNextHref: '/education/bollinger-bands',
  } as EducationPageContent,
};
