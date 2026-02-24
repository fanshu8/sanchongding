"use client";

import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function FloatingContactForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const { language } = useLanguage();
  const isZh = language === 'zh';

  const emailAddress = "3421185040@qq.com";
  const siteUrl = "https://sanchongding.com";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const form = e.target as HTMLFormElement;
      const response = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setSubmitStatus('success');
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      {/* Floating Email Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed right-8 bottom-24 z-40 bg-black dark:bg-white text-white dark:text-black p-4 border-2 border-black dark:border-white shadow-2xl hover:scale-110 transition-transform"
        aria-label={isZh ? '联系我们' : 'Contact Us'}
        title={isZh ? '快速联系我们' : 'Quick Contact'}
      >
        <svg
          className="w-6 h-6"
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
      </button>

      {/* Contact Form Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="bg-white dark:bg-gray-900 border-2 border-black dark:border-white max-w-md w-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-black via-gray-800 to-black dark:from-white dark:via-gray-200 dark:to-white px-6 py-4 border-b-2 border-gray-700 dark:border-gray-300">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white dark:bg-black flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-black dark:text-white"
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
                    <h3 className="text-xl font-black text-white dark:text-black">
                      {isZh ? '快速联系我们' : 'Quick Contact'}
                    </h3>
                    <p className="text-xs text-gray-300 dark:text-gray-700">
                      {isZh ? '我们将尽快回复您' : 'We will reply ASAP'}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-white/10 dark:hover:bg-black/10 transition-colors rounded text-white dark:text-black"
                  aria-label={isZh ? '关闭' : 'Close'}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Form */}
            <div className="p-6">
              {submitStatus === 'success' ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-10 h-10 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-black dark:text-white mb-2">
                    {isZh ? '发送成功！' : 'Sent Successfully!'}
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    {isZh ? '我们已收到您的消息，将尽快与您联系。' : 'We have received your message and will contact you soon.'}
                  </p>
                  <button
                    onClick={() => {
                      setIsOpen(false);
                      setSubmitStatus('idle');
                      setFormData({ name: '', email: '', phone: '', message: '' });
                    }}
                    className="px-6 py-2 bg-black dark:bg-white text-white dark:text-black font-bold border-2 border-black dark:border-white hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white transition-colors"
                  >
                    {isZh ? '关闭' : 'Close'}
                  </button>
                </div>
              ) : submitStatus === 'error' ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-10 h-10 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-black dark:text-white mb-2">
                    {isZh ? '发送失败' : 'Send Failed'}
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    {isZh ? '请稍后重试或直接发送邮件至 3421185040@qq.com' : 'Please try again later or email us directly at 3421185040@qq.com'}
                  </p>
                  <button
                    onClick={() => setSubmitStatus('idle')}
                    className="px-6 py-2 bg-black dark:bg-white text-white dark:text-black font-bold border-2 border-black dark:border-white hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white transition-colors"
                  >
                    {isZh ? '重试' : 'Retry'}
                  </button>
                </div>
              ) : (
                <form
                  action={`https://formsubmit.co/${emailAddress}`}
                  method="POST"
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >
                  <input type="hidden" name="_next" value={`${siteUrl}/${language}/thank-you`} />
                  <input
                    type="hidden"
                    name="_subject"
                    value={isZh ? '快速联系 - Suncheer Forex' : 'Quick Contact - Suncheer Forex'}
                  />
                  <input type="hidden" name="_captcha" value="false" />

                  {/* Name Field */}
                  <div>
                    <label htmlFor="float-name" className="block text-sm font-bold mb-2 text-black dark:text-white">
                      {isZh ? '姓名 *' : 'Name *'}
                    </label>
                    <input
                      type="text"
                      id="float-name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border-2 border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-black dark:text-white focus:border-black dark:focus:border-white outline-none transition-colors"
                      placeholder={isZh ? '请输入您的姓名' : 'Enter your name'}
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <label htmlFor="float-email" className="block text-sm font-bold mb-2 text-black dark:text-white">
                      {isZh ? '邮箱 *' : 'Email *'}
                    </label>
                    <input
                      type="email"
                      id="float-email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border-2 border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-black dark:text-white focus:border-black dark:focus:border-white outline-none transition-colors"
                      placeholder={isZh ? '请输入您的邮箱' : 'Enter your email'}
                    />
                  </div>

                  {/* Phone Field */}
                  <div>
                    <label htmlFor="float-phone" className="block text-sm font-bold mb-2 text-black dark:text-white">
                      {isZh ? '电话' : 'Phone'}
                    </label>
                    <input
                      type="tel"
                      id="float-phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border-2 border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-black dark:text-white focus:border-black dark:focus:border-white outline-none transition-colors"
                      placeholder={isZh ? '请输入您的电话（可选）' : 'Enter your phone (optional)'}
                    />
                  </div>

                  {/* Message Field */}
                  <div>
                    <label htmlFor="float-message" className="block text-sm font-bold mb-2 text-black dark:text-white">
                      {isZh ? '留言 *' : 'Message *'}
                    </label>
                    <textarea
                      id="float-message"
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border-2 border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-black dark:text-white focus:border-black dark:focus:border-white outline-none transition-colors resize-none"
                      placeholder={isZh ? '请输入您的留言...' : 'Enter your message...'}
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-6 py-3 bg-black dark:bg-white text-white dark:text-black font-bold border-2 border-black dark:border-white hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting
                      ? isZh
                        ? '发送中...'
                        : 'Sending...'
                      : isZh
                      ? '发送消息'
                      : 'Send Message'}
                  </button>
                </form>
              )}
            </div>

            {/* Footer */}
            <div className="px-6 py-4 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
              <p className="text-xs text-gray-600 dark:text-gray-400 text-center">
                {isZh
                  ? '我们重视您的隐私，不会分享您的信息。'
                  : 'We value your privacy and will not share your information.'}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
