/**
 * 隐私政策模板页：说明康析计划采用的数据处理原则，并突出上线前法律审核状态。
 */
import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "隐私政策",
  description: "泽康睿析及康析产品隐私政策模板。",
  alternates: { canonical: "/privacy/" },
};

export default function PrivacyPage() {
  return (
    <LegalPage title="隐私政策" description={`生效日期：${siteConfig.privacyEffectiveDate}`}>
      <section><h2>一、适用范围</h2><p>本模板适用于{siteConfig.companyFullName}官方网站及旗下康析产品。当前官网不处理真实健康数据，也未启用真实预约提交。</p></section>
      <section><h2>二、我们可能处理的信息</h2><p>产品正式上线后，可能在用户明确授权范围内处理账号信息、设备信息、智能穿戴健康数据、产品使用记录和用户主动提供的反馈。具体清单将随上线版本明确。</p></section>
      <section><h2>三、处理目的与原则</h2><ul><li>同步并展示用户主动授权的健康数据；</li><li>分析近期趋势并提供健康管理参考；</li><li>生成健康目标、提醒和报告；</li><li>遵循明确授权、最小必要、目的限定和用户可控原则。</li></ul></section>
      <section><h2>四、家庭成员与数据共享</h2><p>家庭成员使用独立账号。任何状态或数据共享均应以成员主动授权为前提，用户可以调整或撤回授权。未授权成员不能查看完整隐私数据。</p></section>
      <section><h2>五、数据安全与用户权利</h2><p>我们计划采用与数据敏感程度相匹配的传输、存储和访问控制措施。用户将可以查询、更正、撤回授权或申请删除其个人信息，具体路径将在正式版本中说明。</p></section>
      <section><h2>六、第三方与跨境处理</h2><p>如未来需要第三方技术服务，我们将在正式政策中说明服务类型、处理目的和数据范围，不向无关第三方出售个人健康数据。</p></section>
      <section><h2>七、联系我们</h2><p>隐私相关联系邮箱、电话与联系地址当前待公司补充，补充后将统一更新。</p></section>
    </LegalPage>
  );
}
