/**
 * 全站页脚：从 siteConfig 读取公司主体与公开联系方式，
 * 并汇总产品、公司、法律页面和备案占位信息。
 */
import Link from "next/link";
import { healthDisclaimer, siteConfig } from "@/config/site";
import { BrandMark } from "./BrandMark";

const footerLinks = [
  { label: "公司介绍", href: "/about" },
  { label: "康析产品介绍", href: "/product/kangxi" },
  { label: "核心功能", href: "/#features" },
  { label: "会员权益", href: "/#plans" },
  { label: "联系我们", href: "/contact" },
  { label: "隐私政策", href: "/privacy" },
  { label: "用户协议", href: "/terms" },
  { label: "健康免责声明", href: "/health-disclaimer" },
] as const;

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main shell">
        <div className="footer-brand">
          <BrandMark />
          <p>{siteConfig.companyFullName}</p>
          <p className="muted">
            旗下智能健康管理产品：{siteConfig.productName}
          </p>
          <address className="footer-contact">
            <a href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a>
            <a href={`tel:${siteConfig.contactPhone}`}>{siteConfig.contactPhone}</a>
            <span>{siteConfig.companyAddress}</span>
          </address>
        </div>
        <nav className="footer-links" aria-label="页脚导航">
          {footerLinks.map((item) => (
            <Link href={item.href} key={item.label}>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="disclaimer-bar">
        <div className="shell">
          <strong>健康提示</strong>
          <p>{healthDisclaimer}</p>
        </div>
      </div>
      <div className="footer-meta shell">
        <span>
          © {new Date().getFullYear()} {siteConfig.companyFullName} 版权所有
        </span>
        <span>ICP备案号：{siteConfig.icpRecord}</span>
        <span>公安备案号：{siteConfig.policeRecord}</span>
      </div>
    </footer>
  );
}
