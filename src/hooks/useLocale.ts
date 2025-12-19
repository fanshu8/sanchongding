'use client';

import { usePathname } from 'next/navigation';

export type Locale = 'zh' | 'en';

/**
 * Hook to get current locale from URL
 */
export function useLocale(): Locale {
  const pathname = usePathname();
  const locale = pathname.split('/')[1];

  return locale === 'en' ? 'en' : 'zh';
}

/**
 * Hook to get locale-prefixed path
 */
export function useLocalePath() {
  const locale = useLocale();

  return (path: string) => {
    // Handle external URLs
    if (path.startsWith('http') || path.startsWith('//')) {
      return path;
    }

    // Handle already prefixed paths
    if (path.startsWith('/zh/') || path.startsWith('/en/')) {
      return path;
    }

    // Add locale prefix
    return `/${locale}${path.startsWith('/') ? path : `/${path}`}`;
  };
}
