# 厦门泽康睿析科技有限责任公司官方网站

本项目是厦门泽康睿析科技有限责任公司官方网站，当前重点介绍公司旗下智能健康管理产品“康析”。网站采用 Next.js App Router、TypeScript 与 Tailwind CSS 构建，支持静态导出。

## 本地运行

环境要求：Node.js 20.9 或更高版本、npm。

```bash
npm install
npm run dev
```

访问 `http://localhost:3000`。

## 质量检查

```bash
npm run lint
npm run typecheck
npm run test
npm run build
npm run check
```

`npm run check` 会依次执行 lint、类型检查、Playwright 测试和生产构建。首次运行 Playwright 如缺少浏览器，可执行 `npx playwright install chromium`。

## 目录说明

- `src/app/`：页面、SEO 路由与全局样式；
- `src/components/`：共享页头、页脚、品牌和产品演示组件；
- `src/config/site.ts`：公司、产品、联系方式和状态的唯一配置源；
- `public/brand/`：临时原创品牌标识与分享图；
- `tests/`：关键页面和交互测试；
- `artifacts/screenshots/`：桌面及移动端验收截图；
- `docs/`：后续部署说明。

## 内容维护

公司邮箱、电话、地址、微信二维码、正式域名、备案号、下载链接和产品状态均在 `src/config/site.ts` 集中维护。未确认内容当前保留为空值或“待补充”，请勿在组件内直接编造。

## 品牌素材说明

仓库未提供正式公司 Logo。当前 `BrandMark` 和 `public/brand/` 中使用的是临时原创标识，仅用于官网开发与本地验收；正式品牌素材获得确认后应整体替换。网站未使用腾讯、腾讯云、ACA 或其他第三方 Logo。

## 部署边界

当前阶段只完成本地设计、开发、测试与静态构建，没有连接服务器或执行部署。后续阿里云 ECS 部署将在网站验收后单独进行，见 `docs/FUTURE-ALIYUN-DEPLOYMENT.md`。
