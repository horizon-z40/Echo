import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: {
    default: "Echo — 探索你内心的回响",
    template: "%s | Echo",
  },
  description: "Echo 是一个现代、简约的在线性格测试平台，提供 MBTI、大五人格、职业倾向等多种科学测试，帮助你深入了解自己。",
  keywords: ["性格测试", "MBTI", "人格测试", "大五人格", "职业测试", "心理测试", "Echo"],
  authors: [{ name: "Echo" }],
  creator: "Echo",
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: "https://echo-test.vercel.app",
    title: "Echo — 探索你内心的回响",
    description: "发现真实的自我，聆听内心深处的回声",
    siteName: "Echo",
  },
  twitter: {
    card: "summary_large_image",
    title: "Echo — 探索你内心的回响",
    description: "发现真实的自我，聆听内心深处的回声",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body className="min-h-screen antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
