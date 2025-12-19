/**
 * 突破交易页面内容配置
 * 为 EducationPageTemplate 提供文案与结构化数据（中/英双语）
 * 字段说明：
 * - zh/en：分别为中文与英文内容块
 * - title/description/keywords：用于页面 SEO 元信息
 * - heroTitle/heroDescription：页面顶部主标题与描述
 * - readingTime/difficulty/lastUpdated：阅读时长、难度、更新时间
 * - tocTitle/tableOfContents：目录标题与目录项（id 必须与页面 section id 对应）
 * - faqTitle/faqs：FAQ 标题与问答列表
 * - relatedTitle/relatedResources：相关推荐链接
 * - ctaTitle/ctaDescription/ctaPrimaryButton/ctaSecondaryButton：底部 CTA 文案
 * - footerPrevText/footerPrevHref/footerNextText/footerNextHref：页脚导航
 */
export const breakoutTradingContent = {
  /** 中文内容块 */
  zh: {
    /** SEO 标题 */
    title: '突破交易（Breakout Trading）完整指南',
    /** SEO 描述 */
    description:
      '系统讲解突破交易的核心概念、类型识别、入场时机、案例分析与假突破规避方法，适合新手到中级交易者。',
    /** SEO 关键词（英文逗号分隔字符串） */
    keywords:
      '突破交易, 假突破, 回测确认, 区间突破, 趋势线突破, 交易入场时机',
    /** 页面主标题 */
    heroTitle: '突破交易：从信号到执行的完整路线',
    /** 页面描述 */
    heroDescription:
      '通过高质量盘整与关键位的突破抓住趋势启动，结合回测确认与严格风控，提高胜率与盈亏比。',
    /** 阅读时长 */
    readingTime: '≈12分钟',
    /** 难度 */
    difficulty: '中级',
    /** 更新时间 */
    lastUpdated: '2025-12-19',
    /** 目录标题 */
    tocTitle: '目录',
    /** 目录项（需与页面 section id 一致） */
    tableOfContents: [
      { id: 'what-is-breakout', title: '什么是突破交易' },
      { id: 'breakout-types', title: '突破类型与识别' },
      { id: 'entry-timing', title: '入场时机与策略' },
      { id: 'case-studies', title: '实战案例' },
      { id: 'common-mistakes', title: '常见错误与规避' },
      { id: 'false-breakout', title: '假突破识别要点' },
    ],
    /** FAQ 标题 */
    faqTitle: '常见问题',
    /** FAQ 列表 */
    faqs: [
      {
        question: '突破后不回测怎么办？',
        answer:
          '可采用分批建仓策略：突破收盘后入场部分仓位，若随后回测成功再补仓；若无回测，则仅持有第一笔。',
      },
      {
        question: '如何降低假突破概率？',
        answer:
          '只交易高质量盘整（时间≥1小时/H4≥1天、区间≥30-50点）、选择高流动性时段、等待收盘与下一根K线确认。',
      },
    ],
    /** 相关推荐标题 */
    relatedTitle: '推荐阅读',
    /** 相关推荐列表 */
    relatedResources: [
      {
        href: '/education/candlestick-patterns',
        icon: '🕯️',
        title: 'K线形态与确认',
        description: '用吞没、Pin Bar 等提升突破信号质量',
      },
      {
        href: '/education/support-resistance',
        icon: '📐',
        title: '支撑阻力与关键位',
        description: '找到最有价值的突破位置',
      },
      {
        href: '/tools/position-calculator',
        icon: '🧮',
        title: '仓位计算器',
        description: '严格风控，统一风险基准',
      },
    ],
    /** CTA 主标题 */
    ctaTitle: '进一步提升突破交易的执行质量',
    /** CTA 描述 */
    ctaDescription:
      '加入我们的培训与工具体系，建立高质量突破的识别流程与标准化风控。',
    /** CTA 主按钮 */
    ctaPrimaryButton: '了解培训详情',
    /** CTA 次按钮 */
    ctaSecondaryButton: '使用工具',
    /** 页脚上一页文案 */
    footerPrevText: '返回教育中心',
    /** 页脚上一页链接 */
    footerPrevHref: '/education',
    /** 页脚下一页文案 */
    footerNextText: '下一篇：K线形态',
    /** 页脚下一页链接 */
    footerNextHref: '/education/candlestick-patterns',
  },
  /** 英文内容块 */
  en: {
    title: 'Breakout Trading: Complete Guide',
    description:
      'A complete guide to breakout trading covering concepts, types, entries, case studies, and false-breakout avoidance.',
    keywords:
      'breakout trading, false breakout, retest, range breakout, trendline breakout, entry timing',
    heroTitle: 'Breakout Trading: From Signal to Execution',
    heroDescription:
      'Capture trend initiation at key levels with quality consolidation, retest confirmation, and strict risk control.',
    readingTime: '≈12 mins',
    difficulty: 'Intermediate',
    lastUpdated: '2025-12-19',
    tocTitle: 'Table of Contents',
    tableOfContents: [
      { id: 'what-is-breakout', title: 'What is Breakout Trading' },
      { id: 'breakout-types', title: 'Breakout Types & Identification' },
      { id: 'entry-timing', title: 'Entry Timing & Strategies' },
      { id: 'case-studies', title: 'Real-World Case Studies' },
      { id: 'common-mistakes', title: 'Common Mistakes & Solutions' },
      { id: 'false-breakout', title: 'False Breakout Essentials' },
    ],
    faqTitle: 'FAQs',
    faqs: [
      {
        question: 'What if price doesn’t retest after breakout?',
        answer:
          'Use scale-in: enter partial after breakout close; add on successful retest. If no retest, hold the first entry only.',
      },
      {
        question: 'How to reduce false breakouts?',
        answer:
          'Trade only quality consolidations, choose high-liquidity sessions, wait for close and next-candle confirmation.',
      },
    ],
    relatedTitle: 'Related Resources',
    relatedResources: [
      {
        href: '/education/candlestick-patterns',
        icon: '🕯️',
        title: 'Candlestick Patterns',
        description: 'Use engulfing, pin bar to improve signal quality',
      },
      {
        href: '/education/support-resistance',
        icon: '📐',
        title: 'Support & Resistance',
        description: 'Find high-value breakout locations',
      },
      {
        href: '/tools/position-calculator',
        icon: '🧮',
        title: 'Position Calculator',
        description: 'Unified risk baseline and strict control',
      },
    ],
    ctaTitle: 'Improve Breakout Execution Quality',
    ctaDescription:
      'Join our training and tooling to standardize high-quality breakout identification and risk control.',
    ctaPrimaryButton: 'Learn Training Details',
    ctaSecondaryButton: 'Use Tools',
    footerPrevText: 'Back to Education',
    footerPrevHref: '/education',
    footerNextText: 'Next: Candlestick Patterns',
    footerNextHref: '/education/candlestick-patterns',
  },
};

