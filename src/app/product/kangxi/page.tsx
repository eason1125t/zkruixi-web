/**
 * 康析独立产品页：进一步说明产品定位、核心能力、数据边界和当前筹备状态。
 */
import type { Metadata } from "next";
import Link from "next/link";
import { ProductMockup } from "@/components/ProductMockup";
import { ProductLogo } from "@/components/ProductLogo";
import { SectionHeading } from "@/components/SectionHeading";
import { healthDisclaimer, siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "康析｜让每天的健康数据变成看得懂的健康提醒",
  description: "康析是泽康睿析旗下智能健康管理产品，提供健康趋势、AI 提醒、健康目标、专业版报告与家庭守护。",
  alternates: { canonical: "/product/kangxi/" },
};

const capabilities = [
  ["趋势理解", "整理睡眠、心率、血氧、压力等近期与历史变化。"],
  ["健康提醒", "将复杂趋势转化为更容易理解的建议关注事项。"],
  ["目标管理", "围绕睡眠、运动、体重、作息和压力建立行动计划。"],
  ["专业版报告", "至少积累一周数据，单份最多汇总一个月趋势。"],
  ["家庭守护", "在成员主动授权后同步需要关注的健康变化。"],
  ["数据边界", "指标范围由设备型号、系统和用户授权共同决定。"],
] as const;

export default function KangxiProductPage() {
  return (
    <main className="subpage-main" id="main-content">
      <section className="hero shell">
        <div className="hero-copy">
          <span className="product-label"><i />泽康睿析旗下智能健康管理产品</span>
          <div className="product-identity">
            <ProductLogo priority size="large" />
            <div>
              <small>泽康睿析旗下产品</small>
              <p className="product-name">{siteConfig.productName}</p>
            </div>
          </div>
          <h1>{siteConfig.productSubtitle}</h1>
          <p className="hero-lead">
            连接智能手表，持续整理日常健康数据，帮助你理解近期变化、获得管理提醒，
            并生成结构清晰的专业版健康报告。
          </p>
          <div className="hero-actions">
            <Link className="button" href="/contact">预约体验</Link>
            <Link className="button button-secondary" href="/#features">查看全部功能</Link>
          </div>
        </div>
        <ProductMockup />
      </section>
      <section className="values-section">
        <div className="shell">
          <SectionHeading center eyebrow="核心能力" title="从数据整理，到更清晰的健康管理参考" />
          <div className="values-grid">
            {capabilities.map(([title, text]) => (
              <article key={title}><h3>{title}</h3><p>{text}</p></article>
            ))}
          </div>
        </div>
      </section>
      <section className="section shell">
        <div className="goal-card">
          <span className="eyebrow">重要说明</span>
          <h2 style={{ margin: "20px 0 12px", fontSize: "28px" }}>健康管理辅助，不替代医疗服务</h2>
          <p style={{ margin: 0, color: "#60788c", lineHeight: 1.9 }}>{healthDisclaimer}</p>
          <div className="hero-actions">
            <Link className="button button-secondary" href="/health-disclaimer">查看完整免责声明</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
