import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "博客 - Suncheer Forex 数字货币交易员培训",
  description: "Suncheer Forex 专业数字货币交易员培训平台官方博客 - 分享交易知识、市场分析和学习资源。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
