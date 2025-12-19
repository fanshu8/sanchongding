import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';

export default async function RootPage() {
  // Get language preference from cookie, default to 'zh'
  const cookieStore = await cookies();
  const language = cookieStore.get('language')?.value || 'zh';

  // Redirect to locale-specific home page
  // For 'zh', redirect to root (no prefix)
  // For 'en', redirect to /en
  if (language === 'en') {
    redirect('/en');
  } else {
    redirect('/zh');
  }
}
