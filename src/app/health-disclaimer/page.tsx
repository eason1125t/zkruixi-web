/**
 * 健康免责声明页：详细解释设备误差、AI 局限和必须寻求专业医疗帮助的情形。
 */
import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { healthDisclaimer } from "@/config/site";

export const metadata: Metadata = {
  title: "健康免责声明",
  description: "康析健康数据、趋势分析与健康管理内容的重要使用边界。",
  alternates: { canonical: "/health-disclaimer/" },
};

export default function HealthDisclaimerPage() {
  return (
    <LegalPage title="健康免责声明" description={healthDisclaimer}>
      <section><h2>一、数据来源与设备误差</h2><p>康析展示的数据可能来自用户授权的智能穿戴设备。设备传感器、佩戴方式、环境、设备算法和同步状态都可能导致误差或缺失。</p></section>
      <section><h2>二、可用数据范围</h2><p>实际可同步的数据类型取决于设备型号、设备系统、设备厂商能力和用户授权。并非所有设备都支持心率、血压、血氧、ECG、体温、睡眠和压力等全部指标。</p></section>
      <section><h2>三、AI 分析局限</h2><p>AI 分析基于可用数据识别趋势与变化，可能受到数据质量、连续性、算法适用范围等因素限制。提示结果不保证完整、准确或适用于每一位用户。</p></section>
      <section><h2>四、不替代专业医疗</h2><p>任何趋势、提醒、目标、建议或报告均不能替代医生问诊、体格检查、实验室检查或其他专业医疗判断。请勿仅根据网站演示或产品提示自行停药、调整药量或改变治疗方案。</p></section>
      <section><h2>五、异常和紧急情况</h2><p>如出现明显不适、持续异常或对健康状况有疑问，请及时咨询专业医务人员。出现胸痛、呼吸困难、意识障碍等紧急情况时，应立即联系当地医疗急救服务。</p></section>
      <section><h2>六、演示内容</h2><p>网站出现的姓名、数值、图表、报告和成员状态均为产品功能演示，不代表真实用户、真实患者或医学结论。</p></section>
    </LegalPage>
  );
}
