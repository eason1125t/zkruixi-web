/**
 * 官网关键流程测试：覆盖页面可达性、公司主体、CTA、移动菜单和 404，
 * 同时监听浏览器控制台错误，避免交付明显的运行时问题。
 */
import { expect, test } from "@playwright/test";

const companyName = "厦门泽康睿析科技有限责任公司";

test.beforeEach(async ({ page }) => {
  const errors: string[] = [];
  page.on("console", (message) => {
    if (message.type() === "error") errors.push(message.text());
  });
  page.on("pageerror", (error) => errors.push(error.message));
  (page as typeof page & { __errors?: string[] }).__errors = errors;
});

test.afterEach(async ({ page }) => {
  const errors = (page as typeof page & { __errors?: string[] }).__errors ?? [];
  expect(errors, `浏览器控制台错误：${errors.join("\n")}`).toEqual([]);
});

test("首页明确展示公司主体和康析产品关系", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "让每天的健康数据，变成看得懂的健康提醒",
  );
  await expect(page.getByText(companyName).first()).toBeVisible();
  await expect(page.getByText("泽康睿析旗下智能健康管理产品").first()).toBeVisible();
  await expect(page.locator('img[alt="康析 App Logo"]')).toHaveCount(2);
  await expect(page.getByText("家庭版").first()).toBeVisible();
  await expect(page.getByText("最多添加 5 名家庭成员").first()).toBeVisible();
});

test("首页 CTA 跳转到联系方式页面且不伪造提交成功", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("link", { name: "预约体验" }).first().click();
  await expect(page).toHaveURL(/\/contact\/?$/);
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("联系我们");
  await expect(page.getByText("预约功能将在正式上线前开放")).toBeVisible();
});

test("联系页展示可用的企业公开资料", async ({ page }) => {
  await page.goto("/contact");
  await expect(
    page.getByRole("link", { name: "kamsonsam7705@gmail.com" }).first(),
  ).toHaveAttribute("href", "mailto:kamsonsam7705@gmail.com");
  await expect(
    page.getByRole("link", { name: "18559663398" }).first(),
  ).toHaveAttribute("href", "tel:18559663398");
  await expect(
    page.getByText("厦门火炬高新区软件园三期诚毅北大街50号403室B0101").first(),
  ).toBeVisible();
});

test("关键独立页面可以访问", async ({ page }) => {
  const pages = [
    ["/about", "关于泽康睿析"],
    ["/product/kangxi", "让每天的健康数据，变成看得懂的健康提醒"],
    ["/privacy", "隐私政策"],
    ["/terms", "用户协议"],
    ["/health-disclaimer", "健康免责声明"],
  ] as const;
  for (const [url, heading] of pages) {
    await page.goto(url);
    await expect(page.getByRole("heading", { level: 1 })).toHaveText(heading);
  }
});

test("移动导航可打开、可关闭且状态正确", async ({ page, isMobile }) => {
  test.skip(!isMobile, "仅在移动设备项目中验证");
  await page.goto("/");
  const menuButton = page.locator('button[aria-controls="mobile-menu"]');
  await menuButton.click();
  await expect(menuButton).toHaveAttribute("aria-expanded", "true");
  await expect(page.locator("#mobile-menu")).toHaveClass(/is-open/);
  await page.keyboard.press("Escape");
  await expect(page.locator("#mobile-menu")).not.toHaveClass(/is-open/);
});

test("自定义 404 页面提供返回入口", async ({ page }) => {
  await page.goto("/not-a-real-page");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("没有找到这个页面");
  await expect(page.getByRole("link", { name: "返回官网首页" })).toBeVisible();
  // 访问不存在路由时，浏览器会按预期记录主文档 404；此处仅排除该已验证的网络状态。
  const errors = (page as typeof page & { __errors?: string[] }).__errors ?? [];
  const unexpectedErrors = errors.filter(
    (message) => !message.includes("server responded with a status of 404"),
  );
  errors.splice(0, errors.length, ...unexpectedErrors);
});
