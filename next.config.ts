/**
 * Next.js 构建配置：将官网导出为静态文件，便于后续部署到 ECS/Nginx。
 */
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  turbopack: { root: process.cwd() },
  allowedDevOrigins: ["127.0.0.1"],
  devIndicators: false,
};

export default nextConfig;
