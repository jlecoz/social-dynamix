import "./globals.css";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import { siteConfig } from "@/config/siteConfig";

const defaultDescription =
  "We build immersive experiences for the world's boldest brands. AR, 3D, creative production, and custom hardware.";

export const metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: "Tridium Creative Lab — Where Technology Meets Artistry",
    template: "%s | Tridium Creative Lab",
  },
  description: defaultDescription,
  keywords: [
    "creative studio",
    "immersive experiences",
    "AR",
    "3D",
    "spatial technology",
    "creative production",
    "Tridium",
    "Tridium Creative Lab",
    "UK",
  ],
  authors: [{ name: "Tridium Creative Lab" }],
  creator: "Tridium Creative Lab",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "/",
    siteName: "Tridium Creative Lab",
    title: "Tridium Creative Lab — Where Technology Meets Artistry",
    description: defaultDescription,
    images: [{ url: "/img/tridium-labs.png", alt: "Tridium Creative Lab" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tridium Creative Lab — Where Technology Meets Artistry",
    description: defaultDescription,
    images: ["/img/tridium-labs.png"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
};

function organizationJsonLd() {
  const sameAs = Object.values(siteConfig.social).filter(
    (href) => typeof href === "string" && href.startsWith("http")
  );
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Tridium Creative Lab",
    url: siteConfig.siteUrl,
    logo: `${siteConfig.siteUrl}/img/logo.png`,
    description: defaultDescription,
    email: siteConfig.contactEmail,
    ...(sameAs.length ? { sameAs } : {}),
  };
}

export default function RootLayout({ children }) {
  const themeVars = {
    "--color-bg": siteConfig.theme.background,
    "--color-fg": siteConfig.theme.foreground,
    "--color-accent": siteConfig.theme.accent,
    "--color-accent-hover": siteConfig.theme.accentAlt,
    "--color-surface": siteConfig.theme.surface,
    "--color-border": siteConfig.theme.surfaceBorder,
    "--color-grey": siteConfig.theme.grey,
    "--color-grey-mid": siteConfig.theme.greyMid,
    "--color-navy": siteConfig.theme.navy,
    "--color-gold-light": siteConfig.theme.goldLight,
  };

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/img/favicon-192.png" type="image/png" sizes="192x192" />
        <link rel="apple-touch-icon" href="/img/favicon-180.png" />
        <link rel="preconnect" href="https://use.typekit.net" />
        <link rel="preconnect" href="https://p.typekit.net" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://use.typekit.net/ejw0fwc.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={themeVars}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd()) }}
        />
        <div className="page-shell">
          <SiteHeader />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <img src="/img/logo.png" alt="Tridium Creative Lab" className="footer-logo" />
          <strong>TRIDIUM CREATIVE LAB</strong>
          <p className="footer-tagline">Where Technology Meets Artistry</p>
          <p className="footer-legal">
            &copy; {new Date().getFullYear()} Tridium Creative Lab. All rights reserved.
          </p>
        </div>

        <nav className="footer-nav">
          <span className="footer-col-title">Navigation</span>
          {siteConfig.nav.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="footer-social">
          <span className="footer-col-title">Social</span>
          <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
          <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href={siteConfig.social.x} target="_blank" rel="noopener noreferrer">
            X
          </a>
          <a href={siteConfig.social.youtube} target="_blank" rel="noopener noreferrer">
            YouTube
          </a>
        </div>
      </div>

      <p className="footer-copy">
        TRIDIUM CREATIVE LAB &bull; Where Technology Meets Artistry
      </p>
    </footer>
  );
}
