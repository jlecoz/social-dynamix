"use client";

import Link from "next/link";
import { useState } from "react";
import { siteConfig } from "@/config/siteConfig";

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <Link href="/" className="logo-link" aria-label="Tridium Creative Lab, home">
        <img src="/img/logo.png" alt="" className="logo-mark" aria-hidden="true" />
        <div className="logo-text">
          <strong>{siteConfig.brand.logoText}</strong>
        </div>
      </Link>

      <button
        className="menu-toggle"
        aria-label="Toggle menu"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span />
        <span />
        <span />
      </button>

      <nav
        className={`main-nav ${menuOpen ? "open" : ""}`}
        aria-label="Main navigation"
      >
        {siteConfig.nav.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={
              item.href === "/contact" ? "button button-gold nav-cta" : undefined
            }
            onClick={() => setMenuOpen(false)}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
