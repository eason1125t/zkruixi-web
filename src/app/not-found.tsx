/**
 * 自定义 404 页面：为无效路由提供清晰说明和返回官网首页的行动入口。
 */
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found" id="main-content">
      <div>
        <strong>404</strong>
        <h1>没有找到这个页面</h1>
        <p>页面可能已移动，或链接地址有误。</p>
        <Link className="button" href="/">返回官网首页</Link>
      </div>
    </main>
  );
}
