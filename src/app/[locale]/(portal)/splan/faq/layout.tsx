import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "常见问题 - 数字货币交易员培训FAQ",
  description: "Suncheer Forex 数字货币交易员培训常见问题解答：培训是否免费、基础条件要求、考核标准、收入分配、交易铁律、时间安排等。全面了解数字货币交易员培训的各个方面，解答您的疑问。",
  keywords: ["数字货币交易FAQ", "培训问题", "考核要求", "收入分配", "交易纪律", "培训条件", "数字货币交易员问答"],
  openGraph: {
    title: "常见问题 - 数字货币交易员培训FAQ",
    description: "全面解答数字货币交易员培训的各类问题：培训免费、考核标准、收入分配、交易纪律等。",
    url: "https://fxkiller.com/splan/faq",
    type: "website",
  },
  alternates: {
    canonical: "https://fxkiller.com/splan/faq",
  },
};

export default function FAQLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
