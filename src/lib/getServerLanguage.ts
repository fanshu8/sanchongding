export type Language = 'zh' | 'en';

/**
 * Get language from locale param (for Server Components with [locale] routing)
 * @param locale - The locale from URL params
 * @returns Language type
 */
export function getLanguageFromLocale(locale: string): Language {
  return locale === 'en' ? 'en' : 'zh';
}

/**
 * Legacy function for backward compatibility
 * Now just returns 'zh' as default since we use URL-based routing
 * @deprecated Use getLanguageFromLocale with params instead
 */
export async function getServerLanguage(): Promise<Language> {
  return 'zh';
}

/**
 * Generate metadata for both languages
 */
export function generateBilingualMetadata(
  zhTitle: string,
  enTitle: string,
  zhDescription: string,
  enDescription: string,
  zhKeywords: string,
  enKeywords: string,
  language: Language
) {
  const title = language === 'zh' ? zhTitle : enTitle;
  const description = language === 'zh' ? zhDescription : enDescription;
  const keywords = language === 'zh' ? zhKeywords : enKeywords;

  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      type: 'website' as const,
      locale: language === 'zh' ? 'zh_CN' : 'en_US',
    },
    twitter: {
      card: 'summary_large_image' as const,
      title,
      description,
    },
  };
}
