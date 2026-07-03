/**
 * App Router 根布局：注入全站元数据、结构化数据、页头页脚与基础样式。
 */
import type { Metadata, Viewport } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { siteConfig } from "@/config/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: {
    default: "厦门泽康睿析科技有限责任公司｜康析智能健康管理",
    template: "%s｜泽康睿析",
  },
  description:
    "厦门泽康睿析科技有限责任公司专注于智能穿戴数据、人工智能与个人健康管理。旗下康析 App 提供健康趋势、提醒、目标建议、专业版健康报告和家庭健康守护。",
  alternates: { canonical: "/" },
  openGraph: {
    title: "厦门泽康睿析科技有限责任公司｜康析智能健康管理",
    description: "让每天的健康数据，变成看得懂的健康提醒。",
    url: "/",
    siteName: siteConfig.companyShortName,
    locale: "zh_CN",
    type: "website",
    images: [siteConfig.shareImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "泽康睿析｜康析智能健康管理",
    description: "让每天的健康数据，变成看得懂的健康提醒。",
    images: [siteConfig.shareImage],
  },
  icons: { icon: "/brand/favicon.svg" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#F5F9FC",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: siteConfig.companyFullName,
      alternateName: siteConfig.companyShortName,
      url: siteConfig.domain,
      description: siteConfig.companyIntro,
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: `${siteConfig.companyShortName}官方网站`,
      url: siteConfig.domain,
      inLanguage: "zh-CN",
      publisher: { "@type": "Organization", name: siteConfig.companyFullName },
    },
  ];

  return (
    <html data-scroll-behavior="smooth" lang="zh-CN">
      <body>
        <a className="skip-link" href="#main-content">
          跳到主要内容
        </a>
        <Header />
        {children}
        <Footer />
        <script
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
          type="application/ld+json"
        />
      </body>
    </html>
  );
}
