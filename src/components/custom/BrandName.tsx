"use client";

import { useLanguage } from '@/contexts/LanguageContext';

export default function BrandName() {
  const { language } = useLanguage();

  if (language === 'zh') {
    return (
      <>
        <span className="font-black text-accent">三重</span>
        <span className="font-normal text-accent">鼎</span>
      </>
    );
  }

  return (
    <>
      <span className="font-black text-accent">Suncheer</span>
      <span className="font-normal text-accent">Forex</span>
    </>
  );
}
