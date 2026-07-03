/**
 * 项目 ESLint 配置：复用 Next.js 的 Core Web Vitals 与 TypeScript 规则。
 */
import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";

export default defineConfig([
  ...nextVitals,
  ...nextTypescript,
  globalIgnores([".next/**", "out/**", "playwright-report/**", "test-results/**"]),
]);
