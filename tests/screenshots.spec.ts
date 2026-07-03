/**
 * 验收截图生成：使用项目自身的 Playwright 环境捕获首页、产品首屏、
 * 会员、报告和公司页面，产物写入 artifacts/screenshots 供交付复核。
 */
import { mkdir } from "node:fs/promises";
import path from "node:path";
import { test } from "@playwright/test";

const screenshotDir = path.resolve("artifacts/screenshots");

test("生成桌面端与移动端验收截图", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "chromium", "截图仅需由 Chromium 桌面项目生成一次");
  await mkdir(screenshotDir, { recursive: true });

  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto("/");
  await page.screenshot({ path: path.join(screenshotDir, "home-desktop.png"), fullPage: true });
  await page.locator(".hero").screenshot({ path: path.join(screenshotDir, "kangxi-hero-desktop.png") });
  await page.locator("#report").screenshot({ path: path.join(screenshotDir, "professional-report-desktop.png") });
  await page.locator("#plans").screenshot({ path: path.join(screenshotDir, "membership-plans-desktop.png") });

  await page.goto("/about");
  await page.screenshot({ path: path.join(screenshotDir, "about-desktop.png"), fullPage: true });

  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  await page.screenshot({ path: path.join(screenshotDir, "home-mobile.png"), fullPage: true });
});
