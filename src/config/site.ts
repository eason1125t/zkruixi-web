/**
 * 官网唯一内容配置源：品牌、联系方式、产品状态和可变文案均由页面组件读取。
 * 后续补充正式公司资料、下载链接或新产品时，应优先修改本文件。
 */
export type AppStatus = "prelaunch" | "beta" | "released";
export type AcaStatus = "planned" | "integrating" | "integrated";

export const siteConfig = {
  companyFullName: "厦门泽康睿析科技有限责任公司",
  companyShortName: "泽康睿析",
  companyEnglishName: "",
  productName: "康析",
  productLogoPath: "/product/kangxi-app-logo.png",
  productSubtitle: "让每天的健康数据，变成看得懂的健康提醒",
  domain: "https://www.example.com",
  contactEmail: "kamsonsam7705@gmail.com",
  contactPhone: "18559663398",
  wechatQrPath: "",
  companyAddress: "厦门火炬高新区软件园三期诚毅北大街50号403室B0101",
  companyIntro:
    "厦门泽康睿析科技有限责任公司专注于智能穿戴数据与人工智能技术的应用，通过清晰、易理解的数字化产品，帮助个人与家庭持续了解健康变化。",
  appStatus: "prelaunch" as AppStatus,
  acaStatus: "planned" as AcaStatus,
  iosDownloadUrl: "",
  androidDownloadUrl: "",
  harmonyDownloadUrl: "",
  icpRecord: "待补充",
  policeRecord: "待补充",
  showDownloadButtons: false,
  showExperienceButton: true,
  showAcaDescription: true,
  showTencentLogo: false,
  privacyEffectiveDate: "正式上线前待确认",
  currentProduct: "康析",
  futureProducts: [] as string[],
  shareImage: "/brand/og-image.svg",
} as const;

export const statusCopy = {
  app:
    siteConfig.appStatus === "prelaunch"
      ? "产品筹备中"
      : siteConfig.appStatus === "beta"
        ? "产品测试中"
        : "产品已上线",
  aca: {
    planned:
      "康析正在构建基于专业医疗 AI 能力的健康数据分析体系，计划进一步提升健康趋势解释、风险提示和报告生成能力。",
    integrating:
      "康析正在推进专业医疗 AI 能力集成，以提升健康数据解释与报告生成能力。",
    integrated:
      "基于专业医疗 AI 相关能力，增强健康数据分析与报告生成。",
  }[siteConfig.acaStatus],
} as const;

export const navItems = [
  { label: "首页", href: "/" },
  { label: "核心功能", href: "/#features" },
  { label: "健康报告", href: "/#report" },
  { label: "家庭守护", href: "/#family" },
  { label: "会员权益", href: "/#plans" },
  { label: "关于我们", href: "/about" },
] as const;

export const healthDisclaimer =
  "康析基于智能穿戴设备数据提供健康趋势分析，相关内容仅供健康管理和就医沟通参考，不构成医学诊断、治疗或处方建议。如出现明显不适或持续异常，请及时咨询专业医务人员。";
