/**
 * 法律模板页通用布局：为隐私政策、用户协议和免责声明提供一致结构与审核提示。
 */
import type { ReactNode } from "react";

export function LegalPage({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <main className="subpage-main">
      <section className="subpage-hero shell">
        <span className="eyebrow">泽康睿析 · 文件模板</span>
        <h1>{title}</h1>
        <p>{description}</p>
        <div className="legal-notice" role="note">
          正式上线前须由公司和法律顾问审核。本页面为产品阶段模板，不代表已完成法律审核。
        </div>
      </section>
      <article className="legal-content shell">{children}</article>
    </main>
  );
}
