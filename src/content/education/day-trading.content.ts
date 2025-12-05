import { EducationPageContent } from './forex-basics.content';

export const dayTradingContent = {
  zh: {
    title: '日内交易完整指南 - Day Trading策略与风险管理实战技巧 | Suncheer Forex',
    description: '深入讲解日内交易（Day Trading）：时间框架选择、入场出场策略、仓位控制、止损设置、交易时段分析。结合实战案例，掌握M5、M15、H1图表的短线交易技巧。',
    keywords: '日内交易, Day Trading, 短线交易, M5交易, M15交易, H1交易, 日内策略, 数字货币日内交易',

    heroTitle: '日内交易完整指南',
    heroDescription: '掌握短线交易精髓，实现日内稳定盈利',
    readingTime: '25分钟',
    difficulty: '初级-中级',
    lastUpdated: '2024-01-15',

    tocTitle: '本文目录',
    tableOfContents: [
      { id: 'what-is-day-trading', title: '什么是日内交易？' },
      { id: 'timeframes', title: '日内交易时间框架选择' },
      { id: 'entry-exit', title: '入场与出场策略' },
      { id: 'case-studies', title: '实战案例分析' },
      { id: 'common-mistakes', title: '常见错误与规避' },
      { id: 'risk-management', title: '风险管理要点' },
      { id: 'faq', title: '常见问题解答' },
    ],

    faqTitle: '常见问题解答',
    faqs: [
      {
        question: 'Q1: 日内交易需要盯盘多久？',
        answer: '取决于交易风格和时间框架。使用M5-M15图表的激进日内交易者可能需要盯盘2-4小时；使用H1图表的保守交易者只需每小时检查一次，设置价格提醒即可。建议新手从较长时间框架（H1）开始，逐步过渡到更短周期。'
      },
      {
        question: 'Q2: 日内交易最佳交易时段是什么时候？',
        answer: '欧洲时段（北京时间15:00-24:00）和美洲时段（北京时间20:00-次日4:00）重叠期（20:00-24:00）波动最大，流动性最好，是日内交易的黄金时段。亚洲时段（北京时间8:00-16:00）波动较小，适合震荡策略。避免在重大新闻发布前后30分钟交易。'
      },
      {
        question: 'Q3: 日内交易止损应该设置多少点？',
        answer: '止损大小取决于时间框架和交易对波动性。M5图表：10-20点；M15图表：20-30点；H1图表：30-50点。止损应设置在关键支撑阻力位下方/上方，而非固定点数。建议使用ATR指标动态调整止损，通常设置为1-1.5倍ATR值。'
      },
      {
        question: 'Q4: 日内交易适合新手吗？',
        answer: '有一定挑战。日内交易需要快速决策、严格纪律和情绪控制。新手建议先从模拟账户开始，使用较长时间框架（H1或H4），每天限制交易次数（1-3次），使用小仓位（账户1-2%风险）。积累3-6个月经验后，再考虑缩短时间框架或增加仓位。'
      },
      {
        question: 'Q5: 日内交易能持仓过夜吗？',
        answer: '严格意义上的日内交易不持仓过夜，所有仓位必须在收盘前平仓，避免隔夜跳空风险和隔夜利息成本。如果持仓过夜，那就属于短线波段交易。不过，如果交易进入大幅盈利且趋势强劲，部分交易者会选择持仓过夜并调整止损至盈亏平衡点或更高。'
      }
    ],

    relatedTitle: '相关学习资源',
    relatedResources: [
      {
        href: '/education/swing-trading',
        icon: '📈',
        title: '波段交易',
        description: '学习更长周期的交易策略'
      },
      {
        href: '/education/scalping',
        icon: '⚡',
        title: '剥头皮交易',
        description: '更快速的超短线交易技巧'
      },
      {
        href: '/tools/position-calculator',
        icon: '🧮',
        title: '仓位计算器',
        description: '计算日内交易的最佳仓位大小'
      }
    ],

    ctaTitle: '想要系统学习日内交易？',
    ctaDescription: '加入 Suncheer Forex 培训计划，获取专业日内交易策略和实时交易指导',
    ctaPrimaryButton: '了解培训计划',
    ctaSecondaryButton: '免费心理测评',

    footerPrevText: '← 数字货币基础',
    footerNextText: '波段交易 →',
    footerPrevHref: '/education/forex-basics',
    footerNextHref: '/education/swing-trading',
  } as EducationPageContent,

  en: {
    title: 'Complete Day Trading Guide - Strategies and Risk Management Techniques | Suncheer Forex',
    description: 'In-depth explanation of Day Trading: timeframe selection, entry/exit strategies, position sizing, stop-loss setting, trading session analysis. Master intraday trading on M5, M15, H1 charts with real cases.',
    keywords: 'day trading, intraday trading, M5 trading, M15 trading, H1 trading, day trading strategy, cryptocurrency day trading',

    heroTitle: 'Complete Day Trading Guide',
    heroDescription: 'Master intraday trading essentials for consistent daily profits',
    readingTime: '25 min',
    difficulty: 'Beginner-Intermediate',
    lastUpdated: 'Jan 15, 2024',

    tocTitle: 'Table of Contents',
    tableOfContents: [
      { id: 'what-is-day-trading', title: 'What is Day Trading?' },
      { id: 'timeframes', title: 'Day Trading Timeframe Selection' },
      { id: 'entry-exit', title: 'Entry and Exit Strategies' },
      { id: 'case-studies', title: 'Real-World Case Studies' },
      { id: 'common-mistakes', title: 'Common Mistakes and Solutions' },
      { id: 'risk-management', title: 'Risk Management Essentials' },
      { id: 'faq', title: 'Frequently Asked Questions' },
    ],

    faqTitle: 'Frequently Asked Questions',
    faqs: [
      {
        question: 'Q1: How long do I need to watch charts for day trading?',
        answer: 'Depends on trading style and timeframe. Aggressive traders using M5-M15 charts may need 2-4 hours screen time; conservative traders using H1 charts only need to check hourly with price alerts. Recommend beginners start with longer timeframes (H1) and gradually transition to shorter periods.'
      },
      {
        question: 'Q2: What are the best trading sessions for day trading?',
        answer: 'European session (15:00-24:00 Beijing time) and American session (20:00-04:00 Beijing time) overlap (20:00-24:00) has highest volatility and best liquidity - the golden period for day trading. Asian session (08:00-16:00 Beijing time) has lower volatility, suitable for range strategies. Avoid trading 30 minutes before/after major news releases.'
      },
      {
        question: 'Q3: How many points should I set for stop-loss in day trading?',
        answer: 'Stop size depends on timeframe and pair volatility. M5 chart: 10-20 points; M15 chart: 20-30 points; H1 chart: 30-50 points. Stops should be set below/above key support/resistance, not fixed point amounts. Recommend using ATR indicator for dynamic stops, typically 1-1.5x ATR value.'
      },
      {
        question: 'Q4: Is day trading suitable for beginners?',
        answer: 'Somewhat challenging. Day trading requires quick decisions, strict discipline, and emotional control. Beginners should start with demo accounts, use longer timeframes (H1 or H4), limit daily trades (1-3), use small positions (1-2% account risk). After 3-6 months experience, consider shorter timeframes or larger positions.'
      },
      {
        question: 'Q5: Can day traders hold positions overnight?',
        answer: 'Strictly speaking, day trading does not hold overnight - all positions must close before market close to avoid overnight gap risk and swap charges. Holding overnight makes it short-term swing trading. However, if trade is in significant profit with strong trend, some traders choose to hold overnight and adjust stop to breakeven or higher.'
      }
    ],

    relatedTitle: 'Related Learning Resources',
    relatedResources: [
      {
        href: '/education/swing-trading',
        icon: '📈',
        title: 'Swing Trading',
        description: 'Learn longer-term trading strategies'
      },
      {
        href: '/education/scalping',
        icon: '⚡',
        title: 'Scalping',
        description: 'Ultra-short-term trading techniques'
      },
      {
        href: '/tools/position-calculator',
        icon: '🧮',
        title: 'Position Calculator',
        description: 'Calculate optimal position size for day trading'
      }
    ],

    ctaTitle: 'Want to Systematically Learn Day Trading?',
    ctaDescription: 'Join Suncheer Forex training for professional day trading strategies and live trading guidance',
    ctaPrimaryButton: 'Learn About Training',
    ctaSecondaryButton: 'Free Psychology Test',

    footerPrevText: '← Cryptocurrency Basics',
    footerNextText: 'Swing Trading →',
    footerPrevHref: '/education/forex-basics',
    footerNextHref: '/education/swing-trading',
  } as EducationPageContent,
};
