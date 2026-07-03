/**
 * 康析 App 产品 Logo 组件：复用用户提供的正式产品素材，
 * 与公司 BrandMark 明确区分，供首页和康析产品页使用。
 */
import Image from "next/image";
import { siteConfig } from "@/config/site";

export function ProductLogo({
  size = "medium",
  priority = false,
}: {
  size?: "small" | "medium" | "large";
  priority?: boolean;
}) {
  const displaySize = size === "large" ? "66px" : size === "small" ? "48px" : "58px";

  return (
    <span className={`product-logo product-logo-${size}`}>
      <Image
        alt={`${siteConfig.productName} App Logo`}
        height={550}
        priority={priority}
        sizes={displaySize}
        src={siteConfig.productLogoPath}
        width={693}
      />
    </span>
  );
}
