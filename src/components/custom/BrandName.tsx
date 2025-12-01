"use client";

import { useLanguage } from '@/contexts/LanguageContext';

export default function BrandName() {
  const { language } = useLanguage();

  if (language === 'zh') {
    return (
      <>
        <span className="font-black text-black dark:text-white">三重</span>
        <span className="font-normal text-gray-600 dark:text-gray-400">鼎</span>
      </>
    );
  }

  return (
    <>
      <span className="font-black text-black dark:text-white">Suncheer</span>
      <span className="font-normal text-gray-600 dark:text-gray-400">Forex</span>
    </>
  );
}
