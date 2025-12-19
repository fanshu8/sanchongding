export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  return children;
}

export async function generateStaticParams() {
  return [{ locale: 'zh' }, { locale: 'en' }];
}
