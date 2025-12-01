"use client";

import { useState, useEffect, useRef, useImperativeHandle, forwardRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '@/contexts/LanguageContext';

type ModalState = 'closed' | 'expanded' | 'minimized';

export interface WelcomeModalHandle {
  open: () => void;
  close: () => void;
  minimize: () => void;
}

const WelcomeModal = forwardRef<WelcomeModalHandle>((props, ref) => {
  const [modalState, setModalState] = useState<ModalState>('closed');
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const { language } = useLanguage();
  const isZh = language === 'zh';

  const emailAddress = "bikiller.com@gmail.com";
  const siteUrl = "https://bikiller.com";
  // B站视频嵌入地址（中英文都使用B站视频）
  const bilibiliEmbedUrl = "//player.bilibili.com/player.html?isOutside=true&aid=258136585&bvid=BV19a411X7eY&cid=767139112&p=1";

  // 统一使用B站视频
  const videoEmbedUrl = bilibiliEmbedUrl;

  // 暂停视频
  const pauseVideo = () => {
    if (iframeRef.current) {
      // 通过重新设置 src 来停止视频播放
      const currentSrc = iframeRef.current.src;
      iframeRef.current.src = '';
      iframeRef.current.src = currentSrc;
    }
  };

  const handleClose = () => {
    pauseVideo();
    setModalState('closed');
  };

  const handleMinimize = () => {
    setModalState('minimized');
  };

  const handleExpand = () => {
    setModalState('expanded');
  };

  const handleEmailSubmit = async (e: React.FormEvent) => {
    // FormSubmit.co will handle the submission
    // No need to prevent default
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // 暴露方法给父组件
  useImperativeHandle(ref, () => ({
    open: () => setModalState('expanded'),
    close: handleClose,
    minimize: handleMinimize,
  }));

  useEffect(() => {
    // 检查是否是首次访问
    const hasVisited = localStorage.getItem('bikiller_welcome_shown');
    if (!hasVisited) {
      // 延迟 1 秒显示，让页面先加载
      setTimeout(() => {
        setModalState('expanded');
      }, 1000);
      localStorage.setItem('bikiller_welcome_shown', 'true');
    }
  }, []);

  // 已关闭，不渲染任何内容
  if (modalState === 'closed') {
    return null;
  }

  const isMinimized = modalState === 'minimized';
  const isExpanded = modalState === 'expanded';

  const containerVariants = {
    expanded: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      x: '-50%',
      y: '-50%',
      width: 'calc(100% - 2rem)',
      maxWidth: '56rem',
      maxHeight: '90vh',
      transition: {
        type: 'spring' as const,
        damping: 25,
        stiffness: 300,
      },
    },
    minimized: {
      top: 'auto',
      left: 'auto',
      right: '2rem',
      bottom: '10rem',
      x: 0,
      y: 0,
      width: '20rem',
      maxWidth: '20rem',
      maxHeight: 'auto',
      transition: {
        type: 'spring' as const,
        damping: 25,
        stiffness: 300,
      },
    },
  };

  return (
    <>
      {/* 大弹窗背景遮罩 - 只在展开时显示 */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={(e) => {
              // 点击背景关闭
              if (e.target === e.currentTarget) {
                handleClose();
              }
            }}
          />
        )}
      </AnimatePresence>

      {/* 统一的视频容器 - 通过 variants 控制位置和大小 */}
      <motion.div
        initial="expanded"
        animate={isExpanded ? 'expanded' : 'minimized'}
        variants={containerVariants}
        className="fixed z-50 bg-white dark:bg-gray-900 border-2 border-black dark:border-white shadow-2xl overflow-hidden flex flex-col"
      >
        {/* 标题栏 - 根据状态显示不同内容 */}
        <div
          className={`text-white dark:text-black px-4 py-2 flex items-center justify-between ${
            isMinimized
              ? 'bg-black dark:bg-white'
              : 'bg-gradient-to-r from-black via-gray-800 to-black dark:from-white dark:via-gray-200 dark:to-white px-6 py-4 border-b-2 border-gray-700 dark:border-gray-300'
          }`}
        >
          <div className="flex items-center gap-3">
            {isExpanded && (
              <div className="w-10 h-10 bg-white dark:bg-black flex items-center justify-center">
                <span className="text-2xl">🎓</span>
              </div>
            )}
            <div>
              <h2 className={isMinimized ? 'text-sm font-bold' : 'text-xl font-black'}>
                {isMinimized
                  ? isZh
                    ? '职业交易员介绍'
                    : 'Professional Trader Intro'
                  : isZh
                  ? '欢迎来到 三重鼎'
                  : 'Welcome to Suncheer Forex'}
              </h2>
              {isExpanded && (
                <p className="text-xs text-gray-300 dark:text-gray-700">
                  {isZh ? '了解职业交易员职位，开启你的交易生涯' : 'Learn about professional trading careers'}
                </p>
              )}
            </div>
          </div>
          <div className="flex items-center gap-2">
            {isMinimized && (
              <button
                onClick={handleExpand}
                className="hover:scale-110 transition-transform"
                aria-label={isZh ? '展开' : 'Expand'}
                title={isZh ? '展开' : 'Expand'}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                  />
                </svg>
              </button>
            )}
            {isExpanded && (
              <button
                onClick={handleMinimize}
                className="p-2 hover:bg-white/10 dark:hover:bg-black/10 transition-colors rounded"
                aria-label={isZh ? '最小化' : 'Minimize'}
                title={isZh ? '最小化' : 'Minimize'}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                </svg>
              </button>
            )}
            <button
              onClick={handleClose}
              className={
                isMinimized
                  ? 'hover:scale-110 transition-transform'
                  : 'p-2 hover:bg-white/10 dark:hover:bg-black/10 transition-colors rounded'
              }
              aria-label={isZh ? '关闭' : 'Close'}
            >
              <svg className={isMinimized ? 'w-4 h-4' : 'w-5 h-5'} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* 视频容器 - 始终存在，不会重新挂载 */}
        <div className="relative w-full aspect-video bg-black">
          <iframe
            ref={iframeRef}
            src={videoEmbedUrl}
            scrolling="no"
            frameBorder="0"
            className="w-full h-full border-0"
            allowFullScreen
          />
        </div>

        {/* 小窗口底部提示 */}
        {isMinimized && (
          <div className="p-3 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
            <p className="text-xs text-gray-600 dark:text-gray-400 text-center">
              {isZh ? '点击展开查看完整内容' : 'Click expand to view full content'}
            </p>
          </div>
        )}

        {/* 大弹窗内容 - 只在展开时显示 */}
        {isExpanded && (
          <div className="flex-1 overflow-y-auto">
            {/* 视频描述 */}
            <div className="p-6 bg-gray-50 dark:bg-gray-800">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-black dark:bg-white flex items-center justify-center">
                  <span className="text-2xl">💰</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-black dark:text-white mb-2">
                    {isZh ? '百万美金交易员的真实故事' : 'Million Dollar Trader - True Story'}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {isZh
                      ? '观看这部纪录片，了解普通人如何通过专业培训，成为年收入百万的职业交易员。我们的培训体系正是基于这样的成功模式。'
                      : 'Watch this documentary to see how ordinary people become professional traders earning millions through systematic training. Our program is based on this proven success model.'}
                  </p>
                </div>
              </div>

              {/* CTA 按钮 */}
              {!showEmailForm ? (
                <div className="text-center">
                  <button
                    onClick={() => setShowEmailForm(true)}
                    className="inline-flex items-center gap-3 px-8 py-4 bg-black dark:bg-white text-white dark:text-black text-lg font-bold border-2 border-black dark:border-white hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white transition-all shadow-lg hover:shadow-xl hover:scale-105"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                    <span>{isZh ? '免费领取交易资料礼包' : 'Get Free Trading Resources'}</span>
                  </button>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-3">
                    {isZh
                      ? '包含：交易策略手册、风险管理指南、心理素质测试'
                      : 'Includes: Strategy Manual, Risk Management Guide, Psychology Test'}
                  </p>
                </div>
              ) : (
                // 邮箱提交表单
                <div className="bg-white dark:bg-gray-900 border-2 border-black dark:border-white p-6">
                  {!submitted ? (
                    <>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-black dark:bg-white flex items-center justify-center">
                          <svg
                            className="w-6 h-6 text-white dark:text-black"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-black dark:text-white">
                            {isZh ? '填写邮箱，立即获取资料' : 'Enter Email to Get Resources'}
                          </h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {isZh ? '我们将把资料发送到您的邮箱' : 'We will send resources to your email'}
                          </p>
                        </div>
                      </div>

                      <form
                        action={`https://formsubmit.co/${emailAddress}`}
                        method="POST"
                        onSubmit={handleEmailSubmit}
                        className="space-y-4"
                      >
                        <input type="hidden" name="_next" value={`${siteUrl}/${language}/thank-you`} />
                        <input
                          type="hidden"
                          name="_subject"
                          value={isZh ? '交易资料领取 - 欢迎弹窗' : 'Trading Resources Request - Welcome Modal'}
                        />
                        <input type="hidden" name="_captcha" value="false" />

                        {/* 姓名字段 */}
                        <div>
                          <label htmlFor="welcome-name" className="block text-sm font-bold mb-2 text-black dark:text-white">
                            {isZh ? '姓名 *' : 'Name *'}
                          </label>
                          <input
                            type="text"
                            id="welcome-name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border-2 border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-black dark:text-white focus:border-black dark:focus:border-white outline-none transition-colors"
                            placeholder={isZh ? '请输入您的姓名' : 'Enter your name'}
                          />
                        </div>

                        {/* 邮箱字段 */}
                        <div>
                          <label htmlFor="welcome-email" className="block text-sm font-bold mb-2 text-black dark:text-white">
                            {isZh ? '邮箱 *' : 'Email *'}
                          </label>
                          <input
                            type="email"
                            id="welcome-email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border-2 border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-black dark:text-white focus:border-black dark:focus:border-white outline-none transition-colors"
                            placeholder={isZh ? '请输入您的邮箱' : 'Enter your email'}
                          />
                        </div>

                        {/* 电话字段 */}
                        <div>
                          <label htmlFor="welcome-phone" className="block text-sm font-bold mb-2 text-black dark:text-white">
                            {isZh ? '电话' : 'Phone'}
                          </label>
                          <input
                            type="tel"
                            id="welcome-phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border-2 border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-black dark:text-white focus:border-black dark:focus:border-white outline-none transition-colors"
                            placeholder={isZh ? '请输入您的电话（可选）' : 'Enter your phone (optional)'}
                          />
                        </div>

                        {/* 留言字段 */}
                        <div>
                          <label htmlFor="welcome-message" className="block text-sm font-bold mb-2 text-black dark:text-white">
                            {isZh ? '留言' : 'Message'}
                          </label>
                          <textarea
                            id="welcome-message"
                            name="message"
                            rows={3}
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border-2 border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-black dark:text-white focus:border-black dark:focus:border-white outline-none transition-colors resize-none"
                            placeholder={isZh ? '想了解什么内容...' : 'What would you like to know...'}
                          />
                        </div>

                        <button
                          type="submit"
                          className="w-full px-6 py-3 bg-black dark:bg-white text-white dark:text-black font-bold border-2 border-black dark:border-white hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white transition-colors"
                        >
                          {isZh ? '立即领取资料' : 'Get Resources Now'}
                        </button>
                      </form>

                      <p className="text-xs text-gray-600 dark:text-gray-400 text-center mt-4">
                        {isZh
                          ? '我们重视您的隐私，不会分享您的信息。'
                          : 'We value your privacy and will not share your information.'}
                      </p>
                    </>
                  ) : (
                    // 提交成功
                    <div className="text-center py-8">
                      <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-10 h-10 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h4 className="text-xl font-bold text-black dark:text-white mb-2">{isZh ? '提交成功！' : 'Success!'}</h4>
                      <p className="text-gray-700 dark:text-gray-300">
                        {isZh ? '资料已发送到您的邮箱，请查收。' : 'Resources have been sent to your email.'}
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* 底部提示 */}
            <div className="px-6 py-4 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 border-t border-gray-300 dark:border-gray-700">
              <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                {isZh
                  ? '💡 提示：您可以随时点击最小化按钮，将窗口缩小到右下角继续观看'
                  : '💡 Tip: Click minimize to shrink the window to the bottom-right corner'}
              </p>
            </div>
          </div>
        )}
      </motion.div>
    </>
  );
});

WelcomeModal.displayName = 'WelcomeModal';

export default WelcomeModal;
