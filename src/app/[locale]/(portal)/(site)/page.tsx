"use client";
import { Code, Flex, Text } from "@radix-ui/themes";
import { LinkPreview } from "@/components/ui/link-preview";
import { SparklesCore } from "@/components/ui/sparkles";
import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import EmailContactModal from '@/components/custom/EmailContactModal';
import BrandName from '@/components/custom/BrandName';
import BrandSlogans from '@/components/custom/BrandSlogans';
import { FadeInSlide, ScaleFadeIn, HoverCard, PulseButton, FloatingBadge, StaggeredFadeIn } from '@/components/custom/AnimatedSection';
import InterviewCTA from '@/components/custom/InterviewCTA';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import ShineButton from '@/components/custom/ShineButton';
import { motion } from 'framer-motion';
import { Brain, Shield, TrendingUp } from 'lucide-react';
import SplitText from '@/components/custom/SplitText';
import TargetCursor from '@/components/effects/TargetCursor';
 

/**
 * BannerThreeCards
 * 三栏关键词卡片（顶智/聚稳/循进），用于首页顶部 Banner 的核心视觉展示
 * @returns 三张卡片的栅格布局（移动端单列，PC 端三列）
 */
const BannerThreeCards: React.FC<{ language: 'zh' | 'en' }> = ({ language }) => {
  if (language !== 'zh') return null;
  const cards = [
    {
      key: 'dingzhi',
      title: '鼎智',
      subtitle: '鼎级智慧・洞察本质',
      Icon: Brain,
      bg: 'from-teal-800 to-teal-900',
      accent: 'text-teal-300',
    },
    {
      key: 'juwen',
      title: '聚稳',
      subtitle: '聚合力量・风控为基',
      Icon: Shield,
      bg: 'from-amber-600 to-amber-700',
      accent: 'text-amber-200',
    },
    {
      key: 'xunjin',
      title: '循进',
      subtitle: '循道而行・稳步进阶',
      Icon: TrendingUp,
      bg: 'from-emerald-800 to-emerald-900',
      accent: 'text-emerald-200',
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
      {cards.map(({ key, title, subtitle, Icon, bg, accent }) => (
        <div
          key={key}
          className={`relative group overflow-hidden rounded-2xl p-6 border border-white/10 shadow-xl bg-gradient-to-br ${bg} text-white`}
        >
          {/* 背景“鼎”抽象元素 */}
          <div className="absolute -right-6 -bottom-8 text-white/5 text-[180px] leading-none select-none pointer-events-none">
            鼎
          </div>
          {/* 轻微光影与动态线条 */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute -inset-1 rounded-2xl border-2 border-white/10 blur-sm" />
          </div>
          {/* 内容 */}
          <div className="relative z-10 flex items-center gap-4">
            <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center border border-white/20">
              <Icon className="w-7 h-7 text-white" />
            </div>
            <div className="text-left">
              <p className="text-2xl font-black tracking-tight">{title}</p>
              <p className={`mt-1 text-sm md:text-base font-semibold ${accent}`}>{subtitle}</p>
            </div>
          </div>
          {/* hover 放大 */}
          <div className="absolute inset-0 scale-100 group-hover:scale-105 transition-transform duration-300" />
        </div>
      ))}
    </div>
  );
};

/**
 * CoreValuesSection
 * 首页核心价值区（“总-分”结构）：大标题 + 三列图文卡片
 * @returns 核心价值说明区域（仅中文展示）
 */
const CoreValuesSection: React.FC<{ language: 'zh' | 'en' }> = ({ language }) => {
  if (language !== 'zh') return null;
  const items = [
    {
      Icon: Brain,
      title: '顶智',
      core: '萃取投资规律与传统文化智慧，提供可落地的顶尖策略',
      benefit: '帮你避开盲目交易的坑',
      color: 'from-teal-800 to-teal-900',
      border: 'border-teal-400/40',
      line: 'from-teal-400/0 via-teal-400/30 to-teal-400/0',
    },
    {
      Icon: Shield,
      title: '聚稳',
      core: '聚合团队力量，筑牢风控防线，用标准化流程守护本金安全',
      benefit: '让盈利更稳',
      color: 'from-amber-600 to-amber-700',
      border: 'border-amber-300/40',
      line: 'from-amber-300/0 via-amber-300/30 to-amber-300/0',
    },
    {
      Icon: TrendingUp,
      title: '循进',
      core: '遵循市场规律与成长节奏，从新手到资深阶梯式提升交易能力',
      benefit: '稳步进阶，提升人生认知',
      color: 'from-emerald-800 to-emerald-900',
      border: 'border-emerald-300/40',
      line: 'from-emerald-300/0 via-emerald-300/30 to-emerald-300/0',
    },
  ];
  return (
    <section className="py-16 bg-background border-y-2 border-gray-200 cursor-target">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black mb-12 text-primary tracking-wide">
          三重鼎・三大核心 —— 以顶智破局，以聚稳立身，以循进致远
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, idx) => (
            <div
              key={idx}
              className={`relative rounded-2xl p-6 bg-gradient-to-br ${item.color} text-white border ${item.border} shadow-lg`}
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center border border-white/20">
                  <item.Icon className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-xl font-black">{item.title}</p>
                  <p className="mt-2 text-sm">
                    <span className="font-semibold">核心释义：</span>
                    {item.core}
                  </p>
                  <p className="mt-1 text-sm">
                    <span className="font-semibold">用户利益：</span>
                    {item.benefit}
                  </p>
                </div>
              </div>
              {/* 与 Banner 同色系渐变线条 */}
              <div className={`absolute left-6 right-6 bottom-6 h-1 bg-gradient-to-r ${item.line}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/**
 * DummyContent
 * 首页主内容与动态互动元素容器，包含英雄区、对比模块与滚动展示。
 */
const DummyContent = () => {
  const router = useRouter();
  const { t, language } = useLanguage();
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // 收益图片列表 (1-12)
  const profitImages = [
    '/profits/1.png',
    '/profits/2.png',
    '/profits/3.png',
    '/profits/4.png',
    '/profits/5.png',
    '/profits/6.png',
    '/profits/7.png',
    '/profits/8.png',
    '/profits/9.png',
    '/profits/10.png',
    '/profits/11.png',
    '/profits/12.jpg',
  ];

  // 学员感言数据（简化版）
  const testimonials = [
    { name: "张同学", role: "职业交易员", content: "在三重鼎学习的30天是我人生的转折点。从完全不懂交易到通过考核，整个过程非常系统和专业。现在我每个月都能稳定盈利，真正实现了财务自由。" },
    { name: "李同学", role: "独立交易员", content: "之前在其他平台学了很久都没有成果，来到三重鼎后才发现什么是真正的交易培训。规则清晰，考核标准明确，老师耐心指导。通过考核后拿到资金，现在已经盈利20%+。" },
    { name: "王同学", role: "基金经理", content: "三重鼎最大的优势是实战性强。不是教你理论，而是直接教你怎么在市场上赚钱。我用了25个工作日通过考核，现在管理着6位数的资金，分成比例高达80%。" },
    { name: "陈同学", role: "职业交易员", content: "起初我也怀疑过这个模式，但实际体验后发现确实是在培养真正的交易员。考核标准严格但合理，通过后的支持也很到位。现在每天只需要盯盘几小时，收入却比以前上班高多了。" },
    { name: "刘同学", role: "独立交易员", content: "作为一个90后，我在三重鼎找到了真正适合自己的职业。30天的培训虽然辛苦，但收获巨大。现在我可以在世界任何地方工作，时间和地点完全自由。" },
    { name: "赵同学", role: "职业交易员", content: "三重鼎的筛选机制很严格，但正因如此，通过的人都是真正有潜力的。我很庆幸自己坚持下来了。现在回头看，那45天的投入是我做过最值得的决定。" },
    { name: "杨同学", role: "职业交易员", content: "我是从传统金融行业转行过来的。在三重鼎学到的实战技能比我在银行5年学到的还多。这里没有废话，只有干货和结果导向的培训。" },
    { name: "周同学", role: "独立交易员", content: "最让我感动的是团队长的耐心指导。每次交易失误都会详细分析原因，帮我建立正确的交易思维。30天培训结束后，我完全掌握了盈利的方法。" },
    { name: "吴同学", role: "职业交易员", content: "三重鼎给了我第二次职业生涯的机会。之前在互联网公司996，现在做交易时间自由，收入还翻倍了。最重要的是找到了真正热爱的事业。" },
    { name: "郑同学", role: "基金经理", content: "心理测评环节非常关键，它帮我认清了自己的优劣势。培训过程针对性很强，通过考核后我管理着7位数资金，月收入稳定在5位数以上。" },
    { name: "孙同学", role: "独立交易员", content: "从面试到培训到考核，每个环节都能看出三重鼎的专业性。这不是培训班，而是真正的交易员孵化器。我用20个工作日通过考核，现在每月稳定盈利。" },
    { name: "钱同学", role: "职业交易员", content: "最大的收获是学会了风险管理和资金管理。以前总是重仓梭哈，现在懂得了稳健盈利的重要性。通过考核后拿到资金支持，压力小了很多。" },
  ];

  const testimonialsEn = [
    { name: "Zhang", role: "Professional Trader", content: "The 30 days at Suncheer were a turning point. Systematic, professional, and now I achieve stable monthly profits." },
    { name: "Li", role: "Independent Trader", content: "Other platforms brought no results. Clear rules and strict assessment here. After passing and receiving capital, I achieved 20%+ profit." },
    { name: "Wang", role: "Fund Manager", content: "Highly practical training. I passed in 25 working days and now manage six-figure capital with profit share up to 80%." },
    { name: "Chen", role: "Professional Trader", content: "Strict yet reasonable standards; strong post-pass support. Fewer screen hours, higher income." },
    { name: "Liu", role: "Independent Trader", content: "Found the right career. The 30-day training was tough but rewarding. I can work anywhere with full freedom." },
    { name: "Zhao", role: "Professional Trader", content: "Strict selection ensures true potential. The 45-day investment was the best decision I made." },
    { name: "Yang", role: "Professional Trader", content: "Transitioned from traditional finance. Practical skills here exceed five years at the bank." },
    { name: "Zhou", role: "Independent Trader", content: "Mentors patiently dissect mistakes and build correct thinking. After 30 days, I mastered a profitable method." },
    { name: "Wu", role: "Professional Trader", content: "From 996 to flexible trading hours, with doubled income and renewed passion." },
    { name: "Zheng", role: "Fund Manager", content: "Psychological assessment revealed my strengths. I now manage seven-figure capital with stable five-figure monthly income." },
    { name: "Sun", role: "Independent Trader", content: "Professional process from interview to training to assessment. Passed in 20 working days, now profit steadily." },
    { name: "Qian", role: "Professional Trader", content: "Biggest gain: risk and fund management. No more overleveraging—steady profits with capital support." },
  ];

  const testimonialsData = language === 'zh' ? testimonials : testimonialsEn;

  // 横向自动滚动
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    const scrollWidth = scrollContainer.scrollWidth;
    const clientWidth = scrollContainer.clientWidth;
    let scrollPosition = 0;

    const autoScroll = () => {
      scrollPosition += 1;

      // Reset to start when reaching the end
      if (scrollPosition >= scrollWidth - clientWidth) {
        scrollPosition = 0;
      }

      scrollContainer.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
    };

    const interval = setInterval(autoScroll, 30); // Scroll every 30ms for smooth animation

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full -mt-20">
      <TargetCursor spinDuration={2} hideDefaultCursor={true} parallaxOn={true} />
      {/* Hero Section - Full Width K-line Background */}
      <div className="relative overflow-hidden h-screen">

        {/* Gradient Overlay - from left (opaque) to right (transparent) */}
        <div
          className="absolute inset-0 w-full h-full pointer-events-none bg-gradient-to-r from-primary to-primary/80 opacity-95"
        />
        <div className="absolute inset-0 w-full h-full pointer-events-none hidden" />

        

        {/* Content Overlay - Centered in viewport */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="max-w-7xl mx-auto px-6 w-full cursor-target">
            <div className="flex flex-col space-y-10 items-center text-center">
            {/* Brand Slogan */}
            <ScaleFadeIn delay={0.2}>
              <h1 className="text-4xl md:text-6xl lg:text-8xl font-black tracking-tight leading-tight text-accent">
                {language === 'zh' ? <BrandName /> : t('hero.title')}
              </h1>
            </ScaleFadeIn>

            {/* Main Banner Text */}
            <FadeInSlide direction="right" delay={0.4}>
              {language === 'zh' ? (
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-white text-center">
                  <SplitText
                    text="鼎智"
                    className="inline-block border-b-4 border-accent pb-1"
                    delay={100}
                    duration={0.6}
                    ease="power3.out"
                    splitType="chars"
                    from={{ opacity: 0, y: 40 }}
                    to={{ opacity: 1, y: 0 }}
                    threshold={0.1}
                    rootMargin="-100px"
                  />
                  <span className="mx-2">·</span>
                  <SplitText
                    text="聚稳"
                    className="inline-block border-b-4 border-accent pb-1"
                    delay={100}
                    duration={0.6}
                    ease="power3.out"
                    splitType="chars"
                    from={{ opacity: 0, y: 40 }}
                    to={{ opacity: 1, y: 0 }}
                    threshold={0.1}
                    rootMargin="-100px"
                  />
                  <span className="mx-2">·</span>
                  <SplitText
                    text="循进"
                    className="inline-block border-b-4 border-accent pb-1"
                    delay={100}
                    duration={0.6}
                    ease="power3.out"
                    splitType="chars"
                    from={{ opacity: 0, y: 40 }}
                    to={{ opacity: 1, y: 0 }}
                    threshold={0.1}
                    rootMargin="-100px"
                  />
                </div>
              ) : null}
            </FadeInSlide>

            {/* Sub Banner Text */}
            <FadeInSlide direction="right" delay={0.5}>
              <p className="text-xl md:text-2xl leading-relaxed text-primary-foreground/80">
                {language === 'zh'
                  ? '交易员孵化：以严谨筛选，育稳健人才'
                  : t('hero.tagline')}
              </p>
            </FadeInSlide>

            {/* CTAs */}
            <FadeInSlide direction="right" delay={0.6}>
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex flex-col gap-2">
                  <PulseButton>
                    <ShineButton
                      onClick={() => router.push(`/${language}/splan/join-us`)}
                      className="px-12 py-6 bg-accent text-accent-foreground text-xl font-black border-2 border-accent hover:scale-110 transition-transform shadow-lg"
                    >
                      {language === 'zh' ? '了解培训详情' : t('hero.cta.learn')}
                    </ShineButton>
                  </PulseButton>
                </div>
              </div>
            </FadeInSlide>
            </div>
            {/* Bottom bouncing arrow */}
            <motion.div
              className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white opacity-50"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 1.2, repeat: Infinity }}
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </motion.div>
          </div>
        </div>
      </div>

      {/* 核心价值区（总-分） */}
      <CoreValuesSection language={language} />

      {/* 风险保障说明模块（已移除） */}

      {/* 优势对比模块 */}
      <div className="py-20 w-full border-y-2 border-secondary/30 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary">
            {language === 'zh' ? '优势对比' : t('comparison.vs')}
          </h2>

          {/* 对比表格 */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-background rounded-md overflow-hidden">
              <thead>
                <tr className="bg-primary text-primary-foreground">
                  <th className="p-4 text-left font-bold text-sm">{language === 'zh' ? '对比项目' : 'Comparison Items'}</th>
                  <th className="p-4 text-center font-bold text-sm">{language === 'zh' ? '我们公司' : 'Our Company'}</th>
                  <th className="p-4 text-center font-bold text-sm">{language === 'zh' ? '自营机构' : 'Proprietary Firms'}</th>
                  <th className="p-4 text-center font-bold text-sm">{language === 'zh' ? '传统机构' : 'Traditional Institutions'}</th>
                  <th className="p-4 text-center font-bold text-sm">{language === 'zh' ? '类指标' : 'Indicator-Based'}</th>
                  <th className="p-4 text-center font-bold text-sm">{language === 'zh' ? '个人工作室' : 'Personal Studio'}</th>
                </tr>
              </thead>
              <tbody>
                {/* 第1行 - 培训费用 */}
                <tr className="border-b border-secondary/20 hover:bg-secondary/5">
                  <td className="p-4" style={{ fontSize: '14px', lineHeight: '1.5', color: '#333' }}>{language === 'zh' ? '培训费用' : 'Training Fees'}</td>
                  <td className="p-4 text-center bg-accent/10">
                    <span className="font-bold text-accent text-sm">{language === 'zh' ? '完全免费' : 'Completely Free'}</span>
                    <div className="text-sm text-text-primary">{language === 'zh' ? '无学费' : 'No Tuition'}</div>
                  </td>
                  <td className="p-4 text-center" style={{ fontSize: '14px', lineHeight: '1.5', color: '#333' }}>{language === 'zh' ? '考核费' : 'Assessment Fee'}</td>
                  <td className="p-4 text-center" style={{ fontSize: '14px', lineHeight: '1.5', color: '#333' }}>{language === 'zh' ? '高额学费' : 'High Tuition'}</td>
                  <td className="p-4 text-center" style={{ fontSize: '14px', lineHeight: '1.5', color: '#333' }}>{language === 'zh' ? '购买费' : 'Purchase Fee'}</td>
                  <td className="p-4 text-center" style={{ fontSize: '14px', lineHeight: '1.5', color: '#333' }}>{language === 'zh' ? '加盟费' : 'Membership Fee'}</td>
                </tr>

                {/* 第2行 - 培养模式 */}
                <tr className="border-b border-secondary/20 hover:bg-secondary/5">
                  <td className="p-4" style={{ fontSize: '14px', lineHeight: '1.5', color: '#333' }}>{language === 'zh' ? '培养模式' : 'Training Model'}</td>
                  <td className="p-4 text-center bg-accent/10">
                    <span className="font-bold text-accent text-sm">{language === 'zh' ? '小团队孵化' : 'Small-Team Incubation'}</span>
                  </td>
                  <td className="p-4 text-center" style={{ fontSize: '14px', lineHeight: '1.5', color: '#333' }}>{language === 'zh' ? '无培训' : 'No Training'}</td>
                  <td className="p-4 text-center" style={{ fontSize: '14px', lineHeight: '1.5', color: '#333' }}>{language === 'zh' ? '大班课' : 'Large Class'}</td>
                  <td className="p-4 text-center" style={{ fontSize: '14px', lineHeight: '1.5', color: '#333' }}>{language === 'zh' ? '无指导' : 'No Guidance'}</td>
                  <td className="p-4 text-center" style={{ fontSize: '14px', lineHeight: '1.5', color: '#333' }}>{language === 'zh' ? '师徒制' : 'Mentorship'}</td>
                </tr>

                {/* 第3行 - 社群支持 */}
                <tr className="border-b border-secondary/20 hover:bg-secondary/5">
                  <td className="p-4" style={{ fontSize: '14px', lineHeight: '1.5', color: '#333' }}>{language === 'zh' ? '社群支持' : 'Community Support'}</td>
                  <td className="p-4 text-center bg-accent/10">
                    <span className="font-bold text-accent text-sm">24/7</span>
                  </td>
                  <td className="p-4 text-center" style={{ fontSize: '14px', lineHeight: '1.5', color: '#333' }}>{language === 'zh' ? '论坛' : 'Forum'}</td>
                  <td className="p-4 text-center" style={{ fontSize: '14px', lineHeight: '1.5', color: '#333' }}>{language === 'zh' ? '有限时段' : 'Limited Hours'}</td>
                  <td className="p-4 text-center"><div className="text-red-600 text-lg">✗</div></td>
                  <td className="p-4 text-center" style={{ fontSize: '14px', lineHeight: '1.5', color: '#333' }}>{language === 'zh' ? '小群组' : 'Small Groups'}</td>
                </tr>

                {/* 第4行 - 利润分成 */}
                <tr className="border-b border-secondary/20 hover:bg-secondary/5">
                  <td className="p-4" style={{ fontSize: '14px', lineHeight: '1.5', color: '#333' }}>{language === 'zh' ? '利润分成' : 'Profit Share'}</td>
                  <td className="p-4 text-center bg-accent/10">
                    <span className="font-bold text-accent text-sm">60-90%</span>
                  </td>
                  <td className="p-4 text-center" style={{ fontSize: '14px', lineHeight: '1.5', color: '#333' }}>60-90%</td>
                  <td className="p-4 text-center"><div className="text-red-600 text-lg">✗</div></td>
                  <td className="p-4 text-center"><div className="text-red-600 text-lg">✗</div></td>
                  <td className="p-4 text-center" style={{ fontSize: '14px', lineHeight: '1.5', color: '#333' }}>按协议</td>
                </tr>

                {/* 第5行 - 资金规模 */}
                <tr className="border-b border-secondary/20 hover:bg-secondary/5">
                  <td className="p-4" style={{ fontSize: '14px', lineHeight: '1.5', color: '#333' }}>{language === 'zh' ? '资金规模' : 'Funding Size'}</td>
                  <td className="p-4 text-center bg-accent/10">
                    <span className="font-bold text-accent text-sm">$100K-$2M</span>
                    <div className="text-green-600 text-lg">✓</div>
                  </td>
                  <td className="p-4 text-center">
                    <div style={{ fontSize: '14px', lineHeight: '1.5', color: '#333' }}>$10K-$200K</div>
                    <div className="text-green-600 text-lg">✓</div>
                  </td>
                  <td className="p-4 text-center">
                    <div className="text-red-600 text-lg">✗</div>
                  </td>
                  <td className="p-4 text-center">
                    <div className="text-red-600 text-lg">✗</div>
                  </td>
                  <td className="p-4 text-center" style={{ fontSize: '14px', lineHeight: '1.5', color: '#333' }}>{language === 'zh' ? '看情况' : 'Depends'}</td>
                </tr>

                {/* 第6行 - 培养周期 */}
                <tr className="border-b border-secondary/20 hover:bg-secondary/5">
                  <td className="p-4" style={{ fontSize: '14px', lineHeight: '1.5', color: '#333' }}>{language === 'zh' ? '培养周期' : 'Training Duration'}</td>
                  <td className="p-4 text-center bg-accent/10">
                    <span className="font-bold text-accent text-sm">{language === 'zh' ? '30-60天' : '30–60 Days'}</span>
                    <div style={{ fontSize: '14px', lineHeight: '1.5', color: '#333' }}>{language === 'zh' ? '5阶段' : '5 Stages'}</div>
                  </td>
                  <td className="p-4 text-center" style={{ fontSize: '14px', lineHeight: '1.5', color: '#333' }}>{language === 'zh' ? '1-3月' : '1–3 Months'}</td>
                  <td className="p-4 text-center" style={{ fontSize: '14px', lineHeight: '1.5', color: '#333' }}>{language === 'zh' ? '6-12月' : '6–12 Months'}</td>
                  <td className="p-4 text-center"><div className="text-red-600 text-lg">✗</div></td>
                  <td className="p-4 text-center" style={{ fontSize: '14px', lineHeight: '1.5', color: '#333' }}>{language === 'zh' ? '不确定' : 'Uncertain'}</td>
                </tr>

                {/* 第7行 - 考核标准 */}
                <tr className="border-b border-secondary/20 hover:bg-secondary/5">
                  <td className="p-4" style={{ fontSize: '14px', lineHeight: '1.5', color: '#333' }}>{language === 'zh' ? '考核标准' : 'Assessment Standard'}</td>
                  <td className="p-4 text-center bg-accent/10">
                    <span className="font-bold text-accent text-sm">{language === 'zh' ? '稳定盈利' : 'Stable Profitability'}</span>
                  </td>
                  <td className="p-4 text-center" style={{ fontSize: '14px', lineHeight: '1.5', color: '#333' }}>{language === 'zh' ? '严格规则' : 'Strict Rules'}</td>
                  <td className="p-4 text-center"><div className="text-red-600 text-lg">✗</div></td>
                  <td className="p-4 text-center"><div className="text-red-600 text-lg">✗</div></td>
                  <td className="p-4 text-center" style={{ fontSize: '14px', lineHeight: '1.5', color: '#333' }}>{language === 'zh' ? '自定义' : 'Custom'}</td>
                </tr>

                {/* 第8行 - 实盘经验 */}
                <tr className="border-b border-secondary/20 hover:bg-secondary/5">
                  <td className="p-4" style={{ fontSize: '14px', lineHeight: '1.5', color: '#333' }}>{language === 'zh' ? '实盘经验' : 'Live Trading Experience'}</td>
                  <td className="p-4 text-center bg-accent/10">
                    <div className="text-green-600 text-lg">✓</div>
                    <span className="font-bold text-accent text-sm">{language === 'zh' ? '100%实战' : '100% Practical'}</span>
                  </td>
                  <td className="p-4 text-center"><div className="text-red-600 text-lg">✗</div></td>
                  <td className="p-4 text-center">
                    <div className="text-red-600 text-lg">✗</div>
                  </td>
                  <td className="p-4 text-center">
                    <div className="text-red-600 text-lg">✗</div>
                  </td>
                  <td className="p-4 text-center" style={{ fontSize: '14px', lineHeight: '1.5', color: '#333' }}>{language === 'zh' ? '看水平' : 'Depends on Skill'}</td>
                </tr>

                {/* 第9行 - 收入潜力 */}
                <tr className="border-b border-secondary/20 hover:bg-secondary/5">
                  <td className="p-4" style={{ fontSize: '14px', lineHeight: '1.5', color: '#333' }}>{language === 'zh' ? '收入潜力' : 'Income Potential'}</td>
                  <td className="p-4 text-center bg-accent/10">
                    <span className="font-bold text-accent text-sm">{language === 'zh' ? '无上限' : 'No Cap'}</span>
                  </td>
                  <td className="p-4 text-center" style={{ fontSize: '14px', lineHeight: '1.5', color: '#333' }}>{language === 'zh' ? '有上限' : 'Capped'}</td>
                  <td className="p-4 text-center" style={{ fontSize: '14px', lineHeight: '1.5', color: '#333' }}>{language === 'zh' ? '有限' : 'Limited'}</td>
                  <td className="p-4 text-center" style={{ fontSize: '14px', lineHeight: '1.5', color: '#333' }}>{language === 'zh' ? '靠运气' : 'Luck-Based'}</td>
                  <td className="p-4 text-center" style={{ fontSize: '14px', lineHeight: '1.5', color: '#333' }}>{language === 'zh' ? '不稳定' : 'Unstable'}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* 职业发展路径 - 横向排列（暖色统一） */}
      <div className="bg-gradient-to-b from-amber-50 to-orange-50 dark:from-[#1a1208] dark:to-black py-20 border-y-2 border-amber-200 dark:border-[#3b2a16]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4 text-black dark:text-white border-b-4 border-amber-600 dark:border-amber-400 inline-block pb-2 w-full">
            {t('career.title')}
          </h2>
          <p className="text-center text-amber-700 dark:text-amber-200/80 mb-16 text-lg">
            {t('career.subtitle')}
          </p>

          {/* 发展阶梯 - 横向排列 */}
          <div className="flex flex-col md:flex-row gap-6 mb-12">
            {/* 阶段 1 - 多空练习 暖色 */}
            <div className="relative flex-1">
              <div className="bg-background border-2 border-primary p-6 h-full transition-transform duration-200 hover:scale-105 hover:border-secondary">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-secondary border-2 border-secondary flex items-center justify-center">
                  <span className="text-white font-black text-2xl">1</span>
                </div>
                <div className="mt-4">
                  <div className="inline-block px-3 py-1 bg-secondary text-white text-xs font-bold mb-3">
                    {t('career.stage1.days')}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-primary">{t('career.stage1.title')}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    {t('career.stage1.desc')}
                  </p>
                  <div className="bg-background p-3 border-l-2 border-secondary">
                    <p className="text-xs text-gray-700 dark:text-gray-300">
                      {t('career.stage1.warning')}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 阶段 2 - 多空练习 暖色 */}
            <div className="relative flex-1">
              <div className="bg-background border-2 border-primary p-6 h-full transition-transform duration-200 hover:scale-105 hover:border-secondary">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-secondary border-2 border-secondary flex items-center justify-center">
                  <span className="text-white font-black text-2xl">2</span>
                </div>
                <div className="mt-4">
                  <div className="inline-block px-3 py-1 bg-secondary text-white text-xs font-bold mb-3">
                    {t('career.stage2.days')}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-primary">{t('career.stage2.title')}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    {t('career.stage2.desc')}
                  </p>
                  <div className="bg-background p-3 border-l-2 border-secondary">
                    <p className="text-xs text-gray-700 dark:text-gray-300">
                      {t('career.stage2.tip')}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 阶段 3 - 多空练习 暖色 */}
            <div className="relative flex-1">
              <div className="bg-background border-2 border-primary p-6 h-full transition-transform duration-200 hover:scale-105 hover:border-secondary">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-secondary border-2 border-secondary flex items-center justify-center">
                  <span className="text-white font-black text-2xl">3</span>
                </div>
                <div className="mt-4">
                  <div className="inline-block px-3 py-1 bg-secondary text-white text-xs font-bold mb-3">
                    {t('career.stage3.days')}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-primary">{t('career.stage3.title')}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    {t('career.stage3.desc')}
                  </p>
                  <div className="bg-background p-3 border-l-2 border-secondary">
                    <p className="text-xs text-gray-700 dark:text-gray-300">
                      {t('career.stage3.success')}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 阶段 4 - 实盘 暖色 */}
            <div className="relative flex-1">
              <div className="bg-background border-2 border-primary p-6 h-full transition-transform duration-200 hover:scale-105 hover:border-secondary">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-secondary border-2 border-secondary flex items-center justify-center">
                  <span className="text-white font-black text-2xl">4</span>
                </div>
                <div className="mt-4">
                  <div className="inline-block px-3 py-1 bg-secondary text-white text-xs font-bold mb-3">
                    {t('career.stage4.path')}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-primary">{t('career.stage4.title')}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    {t('career.stage4.desc')}
                  </p>
                  <div className="bg-background p-3 border-l-2 border-secondary">
                    <p className="text-xs text-gray-700 dark:text-gray-300">
                      {t('career.stage4.goal')}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 阶段 5 - 实盘 暖色 */}
            <div className="relative flex-1">
              <div className="bg-background border-2 border-primary p-6 h-full transition-transform duration-200 hover:scale-105 hover:border-secondary">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-secondary border-2 border-secondary flex items-center justify-center">
                  <span className="text-white font-black text-2xl">★</span>
                </div>
                <div className="mt-4">
                  <div className="inline-block px-3 py-1 bg-secondary text-white text-xs font-bold mb-3">
                    {t('career.stage5.path')}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-primary">{t('career.stage5.title')}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    {t('career.stage5.desc')}
                  </p>
                  <div className="bg-background p-3 border-l-2 border-secondary">
                    <p className="text-xs text-gray-700 dark:text-gray-300 font-semibold">
                      {t('career.stage5.goal')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* 学员展示 - 实盘看板 */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* 标题 */}
        <h2 className="text-4xl font-bold text-center mb-12 text-primary">
          {language === 'zh' ? '学员实盘收益展示' : t('showcase.title')}
        </h2>

        {/* 学员实盘收益 + 感言横向滚动 */}
        <div className="bg-background py-8 rounded-lg">
          <div className="relative">
            <div ref={scrollContainerRef} className="overflow-x-auto pb-4 scrollbar-hide">
              <div className="flex gap-6 px-6" style={{ width: 'max-content' }}>
                {profitImages.map((image, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: index * 0.05 }}
                    className="bg-white dark:bg-gray-900 border-2 border-primary p-0 hover:shadow-lg hover:border-secondary transition-shadow"
                    style={{ width: '380px', minWidth: '380px' }}
                  >
                    {/* 收益截图 */}
                    <div className="relative h-64 overflow-hidden bg-gray-100 dark:bg-gray-800">
                      <img
                        src={image}
                        alt={language === 'zh' ? `学员收益 ${index + 1}` : `Student Profit ${index + 1}`}
                        className="w-full h-full object-contain p-2"
                      />
                    </div>

                    {/* 学员感言 */}
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-secondary flex items-center justify-center text-white font-bold text-lg">
                          {testimonialsData[index].name[0]}
                        </div>
                        <div>
                          <h4 className="font-bold text-black dark:text-white">
                            {testimonialsData[index].name}
                          </h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {testimonialsData[index].role}
                          </p>
                        </div>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        {testimonialsData[index].content}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <style jsx global>{`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          .line-clamp-4 {
            display: -webkit-box;
            -webkit-line-clamp: 4;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
        `}</style>
      </div>

      {/* Email Contact Modal */}
      {/* 纪律提醒模块 — 视觉与分组改造 */}
      {/**
       * DisciplineReminders
       * - 按照设计方案将纪律提醒模块改为暖橙色背景 + 橙色细边框
       * - 标题行带半透明橙色条和放大的灯泡图标
       * - 内容按分组（态度/执行力/稳健/准备）展示，每条左侧使用橙色圆点标记，结论句作为右侧高亮标签
       */}
      <div className="w-full px-6 py-12 cursor-target">
        <div
          className="mx-auto max-w-5xl rounded-lg p-6"
          style={{
            backgroundColor: '#FFF3E6',
            border: '2px solid #FF9966',
            borderRadius: 12,
          }}
        >
          {/* 标题行 */}
          <div
            className="rounded-md p-4 mb-6 flex items-center"
            style={{ backgroundColor: 'rgba(255,153,102,0.2)' }}
          >
            <div
              className="flex items-center justify-center mr-4"
              style={{ transform: 'scale(1.2)', color: '#FF9966', fontSize: 22 }}
            >
              💡
            </div>
            <h3
              className="font-bold"
              style={{ fontFamily: 'Microsoft YaHei, "微软雅黑", sans-serif', fontSize: '18px', color: '#333' }}
            >
              {language === 'zh' ? '纪律提醒：这些行为会被淘汰/警告' : 'Discipline Reminders: These behaviors lead to elimination/warnings'}
            </h3>
          </div>

          {/* 分组内容 */}
          <div className="space-y-6 text-[#333]" style={{ lineHeight: 1.7 }}>
            {/* 态度类 */}
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-lg">✅/❌</span>
                <strong className="text-lg">{language === 'zh' ? '态度类' : 'Attitude'}</strong>
              </div>

              <div className="space-y-3">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <div
                      style={{
                        width: 18,
                        height: 18,
                        backgroundColor: '#FF9966',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#fff',
                        fontWeight: 700,
                      }}
                    >
                      ・
                    </div>
                    <div>
                      <span style={{ color: '#FF9966', fontWeight: 700 }}>19 位</span>
                      <span className="ml-1">{language === 'zh' ? '学员因首次未通过培训被淘汰' : 'trainees eliminated for failing initial training'}</span>
                    </div>
                  </div>
                  <div>
                    <span
                      style={{
                        backgroundColor: '#FFE0C8',
                        color: '#FF9966',
                        padding: '6px 10px',
                        borderRadius: 8,
                        fontWeight: 700,
                        fontSize: 14,
                      }}
                    >
                      {language === 'zh' ? '态度端正，认真学习才值得培养' : 'Proper attitude and diligent learning are required'}
                    </span>
                  </div>
                </div>

                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <div
                      style={{
                        width: 18,
                        height: 18,
                        backgroundColor: '#FF9966',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#fff',
                        fontWeight: 700,
                      }}
                    >
                      ・
                    </div>
                    <div>
                      <span style={{ color: '#FF9966', fontWeight: 700 }}>15 位</span>
                      <span className="ml-1">{language === 'zh' ? '学员因长时间不回复消息被淘汰' : 'trainees eliminated for not responding to messages'}</span>
                    </div>
                  </div>
                  <div>
                    <span
                      style={{
                        backgroundColor: '#FFE0C8',
                        color: '#FF9966',
                        padding: '6px 10px',
                        borderRadius: 8,
                        fontWeight: 700,
                        fontSize: 14,
                      }}
                    >
                      {language === 'zh' ? '态度端正，认真学习才值得培养' : 'Proper attitude and diligent learning are required'}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* 执行力类 */}
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-lg">📌</span>
                <strong className="text-lg">{language === 'zh' ? '执行力类' : 'Execution'}</strong>
              </div>

              <div className="space-y-3">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <div
                      style={{
                        width: 18,
                        height: 18,
                        backgroundColor: '#FF9966',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#fff',
                        fontWeight: 700,
                      }}
                    >
                      ・
                    </div>
                    <div>
                      <span style={{ color: '#FF9966', fontWeight: 700 }}>11 位</span>
                      <span className="ml-1">{language === 'zh' ? '学员因多次不拉止损/违规进出被淘汰' : 'trainees eliminated for repeatedly not setting stop-loss or rule violations'}</span>
                    </div>
                  </div>
                  <div>
                    <span
                      style={{
                        backgroundColor: '#FFE0C8',
                        color: '#FF9966',
                        padding: '6px 10px',
                        borderRadius: 8,
                        fontWeight: 700,
                        fontSize: 14,
                      }}
                    >
                      {language === 'zh' ? '交易的底线是执行力' : 'Execution is the bottom line'}
                    </span>
                  </div>
                </div>

                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <div
                      style={{
                        width: 18,
                        height: 18,
                        backgroundColor: '#FF9966',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#fff',
                        fontWeight: 700,
                      }}
                    >
                      ・
                    </div>
                    <div>
                      <span style={{ color: '#FF9966', fontWeight: 700 }}>{language === 'zh' ? '多位' : 'Several'}</span>
                      <span className="ml-1">{language === 'zh' ? '学员因初次错单被警告' : 'trainees warned for initial trading mistakes'}</span>
                    </div>
                  </div>
                  <div>
                    <span
                      style={{
                        backgroundColor: '#FFE0C8',
                        color: '#FF9966',
                        padding: '6px 10px',
                        borderRadius: 8,
                        fontWeight: 700,
                        fontSize: 14,
                      }}
                    >
                      {language === 'zh' ? '交易的底线是执行力' : 'Execution is the bottom line'}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* 稳健类 */}
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-lg">📉</span>
                <strong className="text-lg">{language === 'zh' ? '稳健类' : 'Robustness'}</strong>
              </div>

              <div className="space-y-3">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <div
                      style={{
                        width: 18,
                        height: 18,
                        backgroundColor: '#FF9966',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#fff',
                        fontWeight: 700,
                      }}
                    >
                      ・
                    </div>
                    <div>
                      <span style={{ color: '#FF9966', fontWeight: 700 }}>3 位</span>
                      <span className="ml-1">{language === 'zh' ? '学员小额实盘回撤超30%需继续模拟练习' : 'trainees with drawdown >30% required to continue demo practice'}</span>
                    </div>
                  </div>
                  <div>
                    <span
                      style={{
                        backgroundColor: '#FFE0C8',
                        color: '#FF9966',
                        padding: '6px 10px',
                        borderRadius: 8,
                        fontWeight: 700,
                        fontSize: 14,
                      }}
                    >
                      {language === 'zh' ? '稳健是长期赚钱的关键' : 'Robustness is key to long-term profits'}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* 准备类 */}
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-lg">🔔</span>
                <strong className="text-lg">{language === 'zh' ? '准备类' : 'Preparation'}</strong>
              </div>
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-3">
                  <div
                    style={{
                      width: 18,
                      height: 18,
                      backgroundColor: '#FF9966',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#fff',
                      fontWeight: 700,
                    }}
                  >
                    ・
                  </div>
                  <div>
                    <span style={{ color: '#FF9966', fontWeight: 700 }}>2 位</span>
                    <span className="ml-1">{language === 'zh' ? '学员多空测试单量不足15单被警告' : 'trainees warned for fewer than 15 orders'}</span>
                  </div>
                </div>
                <div>
                  <span
                    style={{
                      backgroundColor: '#FFE0C8',
                      color: '#FF9966',
                      padding: '6px 10px',
                      borderRadius: 8,
                      fontWeight: 700,
                      fontSize: 14,
                    }}
                  >
                    {language === 'zh' ? '认真准备才配得上机会' : 'Thorough preparation earns opportunities'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      

      {/* Interview CTA */}
      <InterviewCTA />

      <EmailContactModal
        isOpen={isEmailModalOpen}
        onClose={() => setIsEmailModalOpen(false)}
        title={language === 'zh' ? '职业交易员面试' : 'Professional Trader Interview'}
      />
    </div>
  );
};

/**
 * Home
 * 应用入口首页组件，封装 DummyContent 并提供移动端容器。
 */
export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();

  return (
    <div className="w-full">
      <DummyContent />
    </div>
  );
}
