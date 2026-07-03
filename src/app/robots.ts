/**
 * SEO robots 入口：允许常规抓取并指向静态站点地图。
 */
import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${siteConfig.domain}/sitemap.xml`,
  };
}
