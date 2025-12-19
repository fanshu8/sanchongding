"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '@/contexts/LanguageContext';
import BrandName from '@/components/custom/BrandName';
import LocaleLink from '@/components/navigation/LocaleLink';

export default function UnifiedNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const { language, toggleLanguage, t } = useLanguage();

  const navItems = [
    {
      name: t('nav.home'),
      link: "/",
    },
    {
      name: t('nav.training'),
      link: "/splan/join-us",
    },
    {
      name: language === 'zh' ? '教育' : 'Education',
      link: "/education",
      hasDropdown: true,
      dropdownItems: [
        { name: language === 'zh' ? '基础知识' : 'Basics', link: '/education#basics' },
        { name: language === 'zh' ? '技术分析' : 'Technical Analysis', link: '/education#technical' },
        { name: language === 'zh' ? '交易策略' : 'Trading Strategies', link: '/education#strategies' },
        { name: language === 'zh' ? '风险管理' : 'Risk Management', link: '/education#risk' },
      ]
    },
    {
      name: t('nav.tradingTools'),
      link: "/tools/position-calculator",
      hasDropdown: true,
      dropdownItems: [
        { name: language === 'zh' ? '仓位计算器' : 'Position Calculator', link: '/tools/position-calculator' },
        { name: language === 'zh' ? '风险回报计算器' : 'Risk/Reward Calculator', link: '/tools/risk-reward-calculator' },
      ]
    },
    {
      name: t('nav.psychology'),
      link: "/splan/psychology-test",
    },
    {
      name: t('nav.faq'),
      link: "/splan/faq",
    },
    {
      name: t('nav.membership'),
      link: "/splan/donate",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const isActive = (link: string) => {
    // Extract path without locale prefix for comparison
    const pathSegments = pathname.split('/').filter(Boolean);
    const currentLocale = pathSegments[0] === 'en' || pathSegments[0] === 'zh' ? pathSegments[0] : 'zh';
    const pathWithoutLocale = '/' + pathSegments.slice(currentLocale === pathSegments[0] ? 1 : 0).join('/');

    if (link === '/') {
      return pathWithoutLocale === '/' || pathWithoutLocale === '';
    }
    return pathWithoutLocale.startsWith(link);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-primary backdrop-blur-md shadow-lg`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <LocaleLink href="/" className="flex items-center group">
            <span className="text-2xl"><BrandName /></span>
          </LocaleLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <div
                key={index}
                className="relative"
                onMouseEnter={() => item.hasDropdown && setOpenDropdown(item.name)}
                onMouseLeave={() => item.hasDropdown && setOpenDropdown(null)}
              >
                <LocaleLink
                  href={item.link}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors group flex items-center gap-1 ${
                    isActive(item.link) && !item.hasDropdown ? 'border-b-2 border-secondary' : ''
                  }`}
                >
                  <span
                    className={`relative z-10 ${
                      isActive(item.link)
                        ? 'text-white font-bold'
                        : 'text-white'
                    }`}
                  >
                    {item.name}
                  </span>
                  {item.hasDropdown && (
                    <svg
                      className={`w-4 h-4 transition-transform ${
                        openDropdown === item.name ? 'rotate-180' : ''
                      } ${
                        isActive(item.link)
                          ? 'text-primary-foreground'
                          : 'text-primary-foreground/80 group-hover:text-primary-foreground'
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                  {/* underline handled via border on link when active */}
                </LocaleLink>

                {/* Dropdown Menu */}
                {item.hasDropdown && item.dropdownItems && (
                  <AnimatePresence>
                    {openDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-1 w-56 bg-primary border border-white/20 shadow-lg z-50"
                      >
                        {item.dropdownItems.map((dropdownItem, dropdownIndex) => (
                          <LocaleLink
                            key={dropdownIndex}
                            href={dropdownItem.link}
                            className="block px-4 py-3 text-sm text-white hover:bg-secondary/10 hover:text-white transition-colors border-b border-secondary/20 last:border-b-0"
                          >
                            {dropdownItem.name}
                          </LocaleLink>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          {/* Right Side Actions (Desktop) */}
          <div className="hidden md:flex items-center gap-3">
            {/* 亮度模式按钮已移除 */}

            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="px-3 py-2 border border-white/30 text-white hover:bg-white/10 transition-colors text-sm font-medium"
              title={language === 'zh' ? 'Switch to English' : '切换到中文'}
            >
              {language === 'zh' ? 'EN' : '中文'}
            </button>

            {/* Join Us Button */}
            <LocaleLink
              href="/splan/join-us"
              className="px-4 py-2 bg-accent text-accent-foreground text-sm font-semibold border border-accent hover:bg-accent/90 transition-colors"
            >
              {t('nav.join')}
            </LocaleLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 border border-white/30 text-white hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-secondary/30 bg-primary"
          >
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item, index) => (
                <div key={index}>
                  {item.hasDropdown ? (
                    <div>
                      <button
                        onClick={() => setOpenDropdown(openDropdown === item.name ? null : item.name)}
                        className={`w-full flex items-center justify-between px-4 py-3 text-sm font-medium transition-colors ${
                          isActive(item.link)
                            ? 'border-b-2 border-secondary text-white font-bold'
                            : 'text-white hover:bg-secondary/10'
                        }`}
                      >
                        <span>{item.name}</span>
                        <svg
                          className={`w-4 h-4 transition-transform ${
                            openDropdown === item.name ? 'rotate-180' : ''
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {openDropdown === item.name && item.dropdownItems && (
                        <div className="pl-4 mt-1 space-y-1">
                          {item.dropdownItems.map((dropdownItem, dropdownIndex) => (
                            <LocaleLink
                              key={dropdownIndex}
                              href={dropdownItem.link}
                              className="block px-4 py-2 text-sm text-white hover:bg-secondary/10 hover:text-white transition-colors"
                            >
                              {dropdownItem.name}
                            </LocaleLink>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <LocaleLink
                      href={item.link}
                      className={`block px-4 py-3 text-sm font-medium transition-colors ${
                        isActive(item.link)
                          ? 'border-b-2 border-secondary text-white font-bold'
                          : 'text-white hover:bg-secondary/10'
                      }`}
                    >
                      {item.name}
                    </LocaleLink>
                  )}
                </div>
              ))}

              {/* Mobile Language Toggle */}
              <div className="px-4 pt-2 space-y-2">
                {/* 亮度模式按钮已移除 */}
                {/* 已移除亮度模式切换按钮 */}

                {/* Language Toggle */}
                <button
                  onClick={toggleLanguage}
                  className="w-full px-4 py-3 border border-primary-foreground/30 text-primary-foreground hover:bg-primary/20 transition-colors text-sm font-medium"
                >
                  {language === 'zh' ? 'EN' : '中文'}
                </button>
              </div>

              <LocaleLink
                href="/splan/join-us"
                className="block px-4 py-3 bg-accent hover:bg-accent/90 text-white text-sm font-semibold text-center mt-4 border border-transparent"
              >
                {t('nav.join')}
              </LocaleLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
