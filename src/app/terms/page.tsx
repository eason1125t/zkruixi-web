/**
 * 用户协议模板页：界定产品用途、用户责任、演示状态和服务限制。
 */
import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "用户协议",
  description: "泽康睿析旗下康析产品用户协议模板。",
  alternates: { canonical: "/terms/" },
};

export default function TermsPage() {
  return (
    <LegalPage title="用户协议" description={`本协议模板由${siteConfig.companyFullName}提供，适用于康析产品筹备阶段的信息说明。`}>
      <section><h2>一、协议范围</h2><p>康析是一款智能穿戴健康管理应用，当前处于产品筹备阶段。具体功能、设备支持范围和会员权益以上线版本为准。</p></section>
      <section><h2>二、账号与授权</h2><p>用户应提供真实、合法的账号信息，并妥善保管访问凭证。连接穿戴设备和共享家庭状态均须由数据主体主动授权。</p></section>
      <section><h2>三、产品使用规则</h2><ul><li>不得利用产品从事违法、侵权或干扰服务正常运行的活动；</li><li>不得将演示数据或 AI 辅助内容冒充医学结论；</li><li>不得在未经成员授权时获取或传播其个人健康信息。</li></ul></section>
      <section><h2>四、健康内容边界</h2><p>康析提供的数据整理、趋势分析、提醒、目标和报告仅用于健康管理和就医沟通参考，不构成诊断、治疗或处方建议。</p></section>
      <section><h2>五、知识产权</h2><p>网站和产品中由泽康睿析依法享有权利的文字、界面、图形与软件内容受相关法律保护。第三方内容的权利归其合法权利人所有。</p></section>
      <section><h2>六、服务变更与终止</h2><p>产品正式上线后可能基于用户体验、合规要求和技术条件调整功能。影响用户权益的重大变化将通过合理方式告知。</p></section>
      <section><h2>七、联系我们</h2><p>正式联系渠道与争议处理条款将在上线前经公司和法律顾问审核后补充。</p></section>
    </LegalPage>
  );
}
