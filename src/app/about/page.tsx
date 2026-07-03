/**
 * 公司介绍页：说明泽康睿析的公司定位、业务方向与愿景，不呈现未经确认的工商信息。
 */
import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "关于泽康睿析",
  description: "了解厦门泽康睿析科技有限责任公司的定位、业务方向与产品愿景。",
  alternates: { canonical: "/about/" },
};

const directions = [
  ["01", "智能健康产品研发", "围绕个人与家庭的日常健康管理场景，打造清晰易用的数字化产品。"],
  ["02", "智能穿戴数据应用", "整理用户授权的穿戴设备数据，帮助理解连续变化而非孤立数字。"],
  ["03", "AI 健康分析", "探索人工智能在趋势解释、提醒、目标和报告整理中的辅助作用。"],
  ["04", "家庭健康管理", "在独立账号与明确授权基础上，帮助家庭成员关注彼此的健康变化。"],
  ["05", "健康数据可视化", "用清晰的信息层级、趋势图表和摘要降低健康数据的理解门槛。"],
  ["06", "隐私与用户控制", "坚持授权优先、最小必要和可撤回原则，尊重每位用户的数据边界。"],
] as const;

export default function AboutPage() {
  return (
    <main className="subpage-main" id="main-content">
      <section className="subpage-hero shell">
        <span className="eyebrow">About us</span>
        <h1>关于泽康睿析</h1>
        <p>{siteConfig.companyIntro}</p>
      </section>
      <section className="values-section">
        <div className="shell">
          <SectionHeading
            eyebrow="业务方向"
            title="连接技术、数据与日常健康管理"
            description="我们从用户真正需要理解和行动的场景出发，探索健康科技产品的长期价值。"
          />
          <div className="values-grid">
            {directions.map(([number, title, text]) => (
              <article key={title}>
                <span className="eyebrow">{number}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section shell split-layout">
        <div>
          <SectionHeading
            eyebrow="当前重点产品"
            title="康析，让日常健康变化更容易理解"
            description="康析是泽康睿析当前面向个人与家庭健康管理推出的重点产品；官网结构也为后续产品与业务方向保留了扩展空间。"
          />
          <div className="hero-actions">
            <Link className="button" href="/product/kangxi">了解康析</Link>
            <Link className="button button-secondary" href="/contact">联系我们</Link>
          </div>
        </div>
        <div className="goal-card">
          <span className="eyebrow">公司愿景</span>
          <h2 style={{ margin: "22px 0 14px", fontSize: "30px", lineHeight: 1.4 }}>
            让复杂的健康数据更容易被理解，让日常健康管理更加清晰。
          </h2>
          <p style={{ color: "#6a8093", fontSize: "13px", lineHeight: 1.9 }}>
            我们不编造医疗效果，也不让技术替代专业医疗判断；产品所提供的内容始终定位于健康管理与就医沟通参考。
          </p>
        </div>
      </section>
    </main>
  );
}
