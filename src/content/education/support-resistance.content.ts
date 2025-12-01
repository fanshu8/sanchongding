import { EducationPageContent } from './forex-basics.content';

export const supportResistanceContent = {
  zh: {
    title: '支撑阻力与趋势线完整指南 - 水平位、动态位与突破交易策略 | Suncheer Forex',
    description: '深入讲解支撑阻力位：水平支撑阻力、动态支撑阻力（MA）、趋势线画法、通道交易、突破与假突破识别。掌握关键位置交易技巧。',
    keywords: '支撑阻力, 趋势线, 水平支撑, 动态支撑, 突破交易, 假突破, 通道交易',

    heroTitle: '支撑阻力与趋势线',
    heroDescription: '掌握关键价格位置，找到最佳入场和出场点',
    readingTime: '30分钟',
    difficulty: '初级-中级',
    lastUpdated: '2024-01-22',

    tocTitle: '本文目录',
    tableOfContents: [
      { id: 'support-resistance-fundamentals', title: '支撑阻力基本概念' },
      { id: 'identification-methods', title: '识别方法与技巧' },
      { id: 'trendline-drawing', title: '趋势线的正确画法' },
      { id: 'dynamic-support-resistance', title: '动态支撑阻力（MA）' },
      { id: 'breakout-strategies', title: '突破交易策略' },
      { id: 'false-breakout', title: '假突破识别与应对' },
      { id: 'faq', title: '常见问题解答' },
    ],

    faqTitle: '常见问题解答',
    faqs: [
      {
        question: 'Q1: 如何判断支撑阻力位的强弱？',
        answer: '强支撑阻力特征：1) 被触及次数多（3次以上）；2) 历史悠久（几周或几个月前形成）；3) 在更大时间框架显著（如D1级别前高）；4) 整数关口（如1.1000、1.2000）；5) 出现明显的价格拒绝（长上影线/下影线）。弱支撑阻力：只被触及1-2次、最近才形成、仅在小时间框架显著。强支撑阻力更可靠，突破后动能更大。'
      },
      {
        question: 'Q2: 支撑阻力位应该画成线还是区域？',
        answer: '应该画成区域（Support/Resistance Zone）而非精确的线。原因：1) 价格很少完美触及某个点位；2) 不同交易者看到的位置略有差异；3) 手续费和滑点导致实际触及位置有偏差。建议：将支撑阻力画成15-30点的区域。例如，前高1.1050，支撑区域设为1.1030-1.1050。在区域内出现反转信号即可入场，无需等待精确触及。'
      },
      {
        question: 'Q3: 如何区分突破和假突破？',
        answer: '真突破特征：1) 大阳线/大阴线突破，收盘价明确突破阻力；2) 成交量放大（如有数据）；3) 突破后不回测或小幅回测后继续；4) 多个时间框架同时突破（M15和H1都突破）。假突破特征：1) 带长上影线的K线，收盘价未能站稳；2) 无成交量配合；3) 突破后快速回落至支撑阻力内；4) 仅在小时间框架突破。避免假突破：等待突破K线收盘确认，或等待回测突破点后再入场。'
      },
      {
        question: 'Q4: 趋势线应该连接实体还是影线？',
        answer: '优先连接K线实体（收盘价），其次是影线。原因：实体代表买卖双方的最终共识（收盘价），更有意义；影线代表极端价格，可能是噪音。实践中：上升趋势线连接低点实体下沿，如果无法连接实体再考虑影线；下降趋势线连接高点实体上沿。允许小幅偏差（1-2根K线略微穿透趋势线），不必过分追求完美。记住：趋势线是工具而非铁律。'
      },
      {
        question: 'Q5: 支撑被跌破后会变成阻力吗？',
        answer: '是的，这是"角色互换"（Role Reversal）原理。原因：1) 前期在支撑位买入的交易者（现在被套），价格反弹至该位置时会解套离场（卖出），形成阻力；2) 在支撑位下方做空的交易者，价格反弹至该位置时会止盈（买入平仓），也形成阻力；3) 市场记忆（该位置曾是关键位）。应用：支撑跌破后，等待价格反弹至该位置（现在是阻力）再做空，胜率高。同理，阻力突破后变成支撑，回测时做多。'
      }
    ],

    relatedTitle: '相关学习资源',
    relatedResources: [
      {
        href: '/education/candlestick-patterns',
        icon: '📊',
        title: 'K线形态',
        description: '在关键位置结合K线信号'
      },
      {
        href: '/education/price-action',
        icon: '📈',
        title: '价格行为交易',
        description: '基于支撑阻力的裸K策略'
      },
      {
        href: '/splan/join-us',
        icon: '🎓',
        title: '培训课程',
        description: '系统学习支撑阻力交易'
      }
    ],

    ctaTitle: '想要精通支撑阻力交易？',
    ctaDescription: '加入Suncheer Forex培训，学习专业支撑阻力识别与突破交易策略',
    ctaPrimaryButton: '了解培训计划',
    ctaSecondaryButton: '免费技术分析工具',

    footerPrevText: '← K线形态',
    footerNextText: '价格行为 →',
    footerPrevHref: '/education/candlestick-patterns',
    footerNextHref: '/education/price-action',
  } as EducationPageContent,

  en: {
    title: 'Support Resistance & Trendlines Guide - Horizontal, Dynamic Levels & Breakout Strategies | Suncheer Forex',
    description: 'In-depth explanation of support and resistance: horizontal S/R, dynamic S/R (MA), trendline drawing, channel trading, breakout and false breakout identification. Master key level trading techniques.',
    keywords: 'support resistance, trendlines, horizontal support, dynamic support, breakout trading, false breakout, channel trading',

    heroTitle: 'Support Resistance & Trendlines',
    heroDescription: 'Master key price levels to find optimal entry and exit points',
    readingTime: '30 min',
    difficulty: 'Beginner-Intermediate',
    lastUpdated: 'Jan 22, 2024',

    tocTitle: 'Table of Contents',
    tableOfContents: [
      { id: 'support-resistance-fundamentals', title: 'S/R Fundamental Concepts' },
      { id: 'identification-methods', title: 'Identification Methods & Tips' },
      { id: 'trendline-drawing', title: 'Correct Trendline Drawing' },
      { id: 'dynamic-support-resistance', title: 'Dynamic S/R (Moving Averages)' },
      { id: 'breakout-strategies', title: 'Breakout Trading Strategies' },
      { id: 'false-breakout', title: 'False Breakout Identification' },
      { id: 'faq', title: 'Frequently Asked Questions' },
    ],

    faqTitle: 'Frequently Asked Questions',
    faqs: [
      {
        question: 'Q1: How to judge the strength of support/resistance levels?',
        answer: 'Strong S/R characteristics: 1) Touched many times (3+ times); 2) Historical significance (formed weeks or months ago); 3) Significant on larger timeframe (like D1 previous high); 4) Round numbers (like 1.1000, 1.2000); 5) Obvious price rejection (long upper/lower shadows). Weak S/R: Only touched 1-2 times, recently formed, only significant on small timeframe. Strong S/R more reliable, breakout has greater momentum.'
      },
      {
        question: 'Q2: Should S/R be drawn as lines or zones?',
        answer: 'Should be drawn as zones not exact lines. Reasons: 1) Price rarely touches exact point perfectly; 2) Different traders see slightly different levels; 3) Fee and slippage cause actual touch to deviate. Recommendation: Draw S/R as 15-30 point zones. E.g., previous high 1.1050, support zone set as 1.1030-1.1050. When reversal signal appears within zone, enter - no need to wait for exact touch.'
      },
      {
        question: 'Q3: How to distinguish breakout from false breakout?',
        answer: 'True breakout characteristics: 1) Large bullish/bearish candle breaks, close clearly above resistance; 2) Volume increases (if data available); 3) After breakout doesn\'t retest or small retest then continues; 4) Multiple timeframes break simultaneously (M15 and H1 both break). False breakout characteristics: 1) Candle with long upper shadow, close fails to hold; 2) No volume confirmation; 3) After breakout quickly falls back within S/R; 4) Only breaks on small timeframe. Avoid false breakouts: Wait for breakout candle close confirmation, or wait for retest before entry.'
      },
      {
        question: 'Q4: Should trendlines connect bodies or wicks?',
        answer: 'Priority connect candle bodies (close prices), then wicks. Reasons: Bodies represent final consensus between buyers/sellers (close price), more meaningful; wicks represent extreme prices, possibly noise. In practice: Uptrend line connects low point body bottoms, if can\'t connect bodies then consider wicks; downtrend line connects high point body tops. Allow small deviations (1-2 candles slightly penetrate trendline), don\'t pursue perfection excessively. Remember: Trendlines are tools not iron laws.'
      },
      {
        question: 'Q5: Does support become resistance after breaking?',
        answer: 'Yes, this is "Role Reversal" principle. Reasons: 1) Traders who bought at support (now trapped), when price bounces back to that level will exit (sell), forming resistance; 2) Traders who shorted below support, when price bounces to that level will take profit (buy to close), also forming resistance; 3) Market memory (that level was key). Application: After support breaks, wait for price to bounce back to that level (now resistance) then short, high win rate. Similarly, after resistance breaks becomes support, long on retest.'
      }
    ],

    relatedTitle: 'Related Learning Resources',
    relatedResources: [
      {
        href: '/education/candlestick-patterns',
        icon: '📊',
        title: 'Candlestick Patterns',
        description: 'Combine candle signals at key levels'
      },
      {
        href: '/education/price-action',
        icon: '📈',
        title: 'Price Action Trading',
        description: 'Naked trading based on S/R'
      },
      {
        href: '/splan/join-us',
        icon: '🎓',
        title: 'Training Course',
        description: 'Systematically learn S/R trading'
      }
    ],

    ctaTitle: 'Want to Master Support Resistance Trading?',
    ctaDescription: 'Join Suncheer Forex training to learn professional S/R identification and breakout strategies',
    ctaPrimaryButton: 'Learn About Training',
    ctaSecondaryButton: 'Free Technical Analysis Tools',

    footerPrevText: '← Candlestick Patterns',
    footerNextText: 'Price Action →',
    footerPrevHref: '/education/candlestick-patterns',
    footerNextHref: '/education/price-action',
  } as EducationPageContent,
};
