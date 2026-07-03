/**
 * SEO 站点地图：集中列出官网当前全部公开页面。
 */
import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/product/kangxi", "/contact", "/privacy", "/terms", "/health-disclaimer"];
  return routes.map((route) => ({
    url: `${siteConfig.domain}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
