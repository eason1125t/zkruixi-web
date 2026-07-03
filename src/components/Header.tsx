"use client";

/**
 * 全站响应式页头：读取统一导航配置，处理移动菜单状态和键盘可访问性。
 */
import Link from "next/link";
import { useEffect, useState } from "react";
import { navItems, siteConfig } from "@/config/site";
import { BrandMark } from "./BrandMark";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="company-strip">
        <span>{siteConfig.companyFullName}</span>
        <span className="company-strip-dot" aria-hidden="true" />
        <span>官方网站</span>
      </div>
      <nav className="nav-shell" aria-label="主导航">
        <Link href="/" aria-label="泽康睿析官网首页">
          <BrandMark />
        </Link>
        <div className="desktop-nav">
          {navItems.map((item) => (
            <Link href={item.href} key={item.label}>
              {item.label}
            </Link>
          ))}
        </div>
        <div className="nav-actions">
          <Link className="button button-sm" href="/contact">
            预约体验
          </Link>
          <button
            aria-controls="mobile-menu"
            aria-expanded={open}
            aria-label={open ? "关闭导航菜单" : "打开导航菜单"}
            className="menu-button"
            onClick={() => setOpen((value) => !value)}
            type="button"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>
      <div className={`mobile-menu ${open ? "is-open" : ""}`} id="mobile-menu">
        {navItems.map((item) => (
          <Link href={item.href} key={item.label} onClick={() => setOpen(false)}>
            {item.label}
          </Link>
        ))}
        <Link href="/product/kangxi" onClick={() => setOpen(false)}>
          康析产品介绍
        </Link>
        <Link href="/contact" onClick={() => setOpen(false)}>
          联系我们
        </Link>
      </div>
    </header>
  );
}
