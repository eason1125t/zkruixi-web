/**
 * 联系页面：从集中配置读取全部公司联系方式，并明确预约功能当前未启用真实提交。
 */
import type { Metadata } from "next";
import { siteConfig, statusCopy } from "@/config/site";

export const metadata: Metadata = {
  title: "联系我们",
  description: "联系厦门泽康睿析科技有限责任公司，咨询康析产品体验或商务合作。",
  alternates: { canonical: "/contact/" },
};

const displayValue = (value: string) => value || "待补充";

export default function ContactPage() {
  return (
    <main className="subpage-main" id="main-content">
      <section className="subpage-hero shell">
        <span className="eyebrow">Contact</span>
        <h1>联系我们</h1>
        <p>
          如需了解康析产品体验、商务合作或公司信息，可通过下列渠道联系
          {siteConfig.companyShortName}。正式联系方式确认后将在此更新。
        </p>
      </section>
      <section className="contact-grid shell">
        <article className="contact-panel">
          <h2>公司信息</h2>
          <dl className="contact-list">
            <div><dt>公司全称</dt><dd>{siteConfig.companyFullName}</dd></div>
            <div><dt>公司简称</dt><dd>{siteConfig.companyShortName}</dd></div>
            <div><dt>联系邮箱</dt><dd>{displayValue(siteConfig.contactEmail)}</dd></div>
            <div><dt>联系电话</dt><dd>{displayValue(siteConfig.contactPhone)}</dd></div>
            <div><dt>公司地址</dt><dd>{displayValue(siteConfig.companyAddress)}</dd></div>
            <div><dt>微信二维码</dt><dd>{displayValue(siteConfig.wechatQrPath)}</dd></div>
          </dl>
        </article>
        <article className="contact-panel">
          <div className="empty-state">
            <div>
              <span className="product-label"><i />{statusCopy.app}</span>
              <h2>预约功能将在正式上线前开放</h2>
              <p>
                当前页面不启用真实表单提交，也不收集身份证、病历、检查报告、健康指标或医疗历史。
                公司正式邮箱或电话补充后，可用于产品体验咨询与商务合作。
              </p>
              <p><strong>体验咨询 / 商务合作：</strong>联系方式待补充</p>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
}
