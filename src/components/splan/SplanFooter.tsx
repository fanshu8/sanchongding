"use client";

import React from 'react';
import LocaleLink from '@/components/navigation/LocaleLink';
import { useLanguage } from '@/contexts/LanguageContext';
import { ShineLinkButton } from '@/components/custom/ShineButton';
import EmailContactModal from '@/components/custom/EmailContactModal';

export default function SplanFooter() {
  const { t, language } = useLanguage();
  const [showWechatModal, setShowWechatModal] = React.useState(false);
  const [isEmailModalOpen, setIsEmailModalOpen] = React.useState(false);

  return (
    <footer className="bg-primary dark:bg-gray-900 text-white py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <div className="flex items-center mb-4">
              <span className="text-xl font-black text-white">
                {language === 'zh' ? '三重' : 'Suncheer'}
              </span>
              <span className="text-xl font-normal text-gray-300 ml-1">
                {language === 'zh' ? '鼎' : 'Forex'}
              </span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              {t('footer.about')}
            </p>
            {/* Social Media Icons */}
            <div className="flex items-center gap-4">
              {/* WeChat */}
              <button
                onClick={() => setShowWechatModal(true)}
                className="text-gray-300 hover:text-white transition-colors cursor-pointer"
                title="WeChat: QianBiXiaoFang"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 6.025-1.31-.452-3.79-4.214-6.876-8.768-6.876zm-2.924 5.232a.72.72 0 0 1 .717-.72.72.72 0 0 1 .718.72.72.72 0 0 1-.718.72.72.72 0 0 1-.717-.72zm5.674 0a.72.72 0 0 1 .717-.72.72.72 0 0 1 .717.72.72.72 0 0 1-.717.72.72.72 0 0 1-.717-.72zm7.735 4.55c0-3.564-3.51-6.446-7.835-6.446-4.325 0-7.835 2.882-7.835 6.446 0 1.948 1.03 3.703 2.646 4.895a.52.52 0 0 1 .188.586l-.344 1.304a.488.488 0 0 0-.042.188c0 .144.115.26.255.26a.289.289 0 0 0 .148-.047l1.677-.982a.762.762 0 0 1 .632-.086c.784.19 1.61.295 2.475.295 4.325 0 7.835-2.882 7.835-6.446zm-9.606-1.31a.635.635 0 0 1-.633-.634c0-.35.283-.633.633-.633.35 0 .634.283.634.633a.635.635 0 0 1-.634.633zm3.81 0a.635.635 0 0 1-.633-.634c0-.35.283-.633.633-.633.35 0 .634.283.634.633a.635.635 0 0 1-.634.633z"/>
                </svg>
              </button>

              {/* Email */}
              <button
                onClick={() => setIsEmailModalOpen(true)}
                className="text-gray-300 hover:text-white transition-colors cursor-pointer"
                title={language === 'zh' ? '邮件联系' : 'Email Contact'}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Quick Links - Navigation */}
          <div>
            <h4 className="font-bold mb-4">{t('footer.nav.title')}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <LocaleLink href="/" className="text-gray-300 hover:text-white transition-colors">
                  {t('nav.home')}
                </LocaleLink>
              </li>
              <li>
                <LocaleLink href="/splan/join-us" className="text-gray-300 hover:text-white transition-colors">
                  {t('nav.training')}
                </LocaleLink>
              </li>
              <li>
                <LocaleLink href="/education" className="text-gray-300 hover:text-white transition-colors">
                  {language === 'zh' ? '教育中心' : 'Education'}
                </LocaleLink>
              </li>
              <li>
                <LocaleLink href="/splan/blog" className="text-gray-300 hover:text-white transition-colors">
                  {t('nav.blog')}
                </LocaleLink>
              </li>
              <li>
                <LocaleLink href="/splan/psychology-test" className="text-gray-300 hover:text-white transition-colors">
                  {t('nav.psychology')}
                </LocaleLink>
              </li>
              <li>
                <LocaleLink href="/dashboard" className="text-gray-300 hover:text-white transition-colors">
                  {t('nav.dashboard')}
                </LocaleLink>
              </li>
              <li>
                <LocaleLink href="/splan/faq" className="text-gray-300 hover:text-white transition-colors">
                  {t('nav.faq')}
                </LocaleLink>
              </li>
              <li>
                <LocaleLink href="/splan/donate" className="text-gray-300 hover:text-white transition-colors">
                  {t('nav.membership')}
                </LocaleLink>
              </li>
            </ul>
          </div>

          {/* Tools & Resources */}
          <div>
            <h4 className="font-bold mb-4">{language === 'zh' ? '交易工具' : 'Trading Tools'}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <LocaleLink href="/tools/position-calculator" className="text-gray-300 hover:text-white transition-colors">
                  {language === 'zh' ? '仓位计算器' : 'Position Calculator'}
                </LocaleLink>
              </li>
              <li>
                <LocaleLink href="/tools/risk-reward-calculator" className="text-gray-300 hover:text-white transition-colors">
                  {language === 'zh' ? '风险回报计算器' : 'Risk/Reward Calculator'}
                </LocaleLink>
              </li>
            </ul>

            <h4 className="font-bold mb-4 mt-6">{language === 'zh' ? '其他资源' : 'Resources'}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <LocaleLink href="/privacy" className="text-gray-300 hover:text-white transition-colors">
                  {language === 'zh' ? '隐私政策' : 'Privacy Policy'}
                </LocaleLink>
              </li>
              <li>
                <a href="https://www.bilibili.com/video/BV19a411X7eY" target="_blank" rel="noopener noreferrer"
                   className="text-gray-300 hover:text-white transition-colors">
                  {t('video.doc1.title')}
                </a>
              </li>
              <li>
                <a href="https://www.bilibili.com/video/BV1FZ4y1o734" target="_blank" rel="noopener noreferrer"
                   className="text-gray-300 hover:text-white transition-colors">
                  {t('video.doc2.title')}
                </a>
              </li>
            </ul>
          </div>

          {/* Partners - Brokers */}
          <div>
            <h4 className="font-bold mb-4">{t('footer.partners.brokers')}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://www.binance.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Binance (币安)
                </a>
              </li>
              <li>
                <a
                  href="https://www.okx.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  OKX (欧易)
                </a>
              </li>
            </ul>

            <h4 className="font-bold mb-4 mt-6">{t('footer.partners.propfirms')}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://ftmo.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  FTMO
                </a>
              </li>
              <li>
                <a
                  href="https://fundednext.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  FundedNext
                </a>
              </li>
            </ul>

            <h4 className="font-bold mb-4 mt-6">{t('footer.partners.platforms')}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://www.tradingview.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  TradingView
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-300">
          <p>2024-2025 {t('footer.copyright')}</p>
          <p className="mt-2 text-xs">
            {t('footer.disclaimer')}
          </p>
        </div>
      </div>

      {/* WeChat Modal */}
      {showWechatModal && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          onClick={() => setShowWechatModal(false)}
        >
          <div
            className="bg-white dark:bg-gray-900 p-8 border-2 border-black dark:border-white max-w-sm w-full mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-2xl font-bold text-black dark:text-white">
                {language === 'zh' ? '微信联系方式' : 'WeChat Contact'}
              </h3>
              <button
                onClick={() => setShowWechatModal(false)}
                className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="text-center">
              <div className="bg-green-50 dark:bg-green-900/20 border-2 border-green-500 p-6 mb-4">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  {language === 'zh' ? '微信号' : 'WeChat ID'}
                </p>
                <p className="text-3xl font-bold text-black dark:text-white mb-4">
                  QianBiXiaoFang
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-500">
                  {language === 'zh' ? '复制微信号，在微信中添加好友' : 'Copy WeChat ID and add as friend in WeChat'}
                </p>
              </div>

              <button
                onClick={() => {
                  navigator.clipboard.writeText('QianBiXiaoFang');
                  alert(language === 'zh' ? '微信号已复制！' : 'WeChat ID copied!');
                }}
                className="w-full px-6 py-3 bg-black dark:bg-white text-white dark:text-black font-bold hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
              >
                {language === 'zh' ? '复制微信号' : 'Copy WeChat ID'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Email Contact Modal */}
      <EmailContactModal
        isOpen={isEmailModalOpen}
        onClose={() => setIsEmailModalOpen(false)}
        title={language === 'zh' ? '职业交易员面试预约' : 'Professional Trader Interview Booking'}
      />
    </footer>
  );
}
