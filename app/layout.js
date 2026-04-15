import "./globals.css";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import { headers } from "next/headers";
import { getSiteConfig } from "@/config/getSiteConfig";

export async function generateMetadata() {
  const host = (await headers()).get("host") || "";
  const siteConfig = getSiteConfig(host);

  const isJonny = host.toLowerCase().startsWith("jonny.");
  const defaultDescription = isJonny
    ? "Experiential Designer with 20+ years across creative arts, brand design and web technology."
    : "Design-led product strategy and delivery for ambitious teams.";

  const title = isJonny
    ? { default: "Jonathan Le Coz — Experiential Designer", template: "%s | Jonathan Le Coz" }
    : { default: "Social Dynamix", template: "%s | Social Dynamix" };

  return {
    metadataBase: new URL(siteConfig.siteUrl),
    title,
    description: defaultDescription,
    robots: { index: true, follow: true },
    alternates: { canonical: "/" },
    openGraph: {
      type: "website",
      locale: "en_GB",
      url: "/",
      siteName: siteConfig.brand.logoText,
      title: title.default,
      description: defaultDescription,
      images: [{ url: "/img/digital_ronin.svg", alt: siteConfig.brand.logoText }],
    },
    twitter: {
      card: "summary_large_image",
      title: title.default,
      description: defaultDescription,
      images: ["/img/digital_ronin.svg"],
    },
  };
}

function jsonLdForSite(siteConfig, host) {
  const sameAs = Object.values(siteConfig.social).filter(
    (href) => typeof href === "string" && href.startsWith("http")
  );

  const isJonny = (host || "").toLowerCase().startsWith("jonny.");
  if (isJonny) {
    return {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Jonathan Le Coz",
      url: siteConfig.siteUrl,
      description: "Experiential Designer with 20+ years across creative arts, brand design and web technology.",
      email: siteConfig.contactEmail,
      ...(sameAs.length ? { sameAs } : {}),
    };
  }

  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.brand.logoText,
    url: siteConfig.siteUrl,
    email: siteConfig.contactEmail,
    ...(sameAs.length ? { sameAs } : {}),
  };
}

export default async function RootLayout({ children }) {
  const host = (await headers()).get("host") || "";
  const siteConfig = getSiteConfig(host);
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdForSite(siteConfig, host)) }}
        />
        <div className="page-shell">
          <SiteHeader config={siteConfig} />
          <main>{children}</main>
          <Footer config={siteConfig} />
        </div>
      </body>
    </html>
  );
}

function Footer({ config }) {
  const siteConfig = config;
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <img src="/img/digital_ronin.svg" alt="Jonathan Le Coz" className="footer-logo" />
          <strong>{siteConfig.brand.logoText}</strong>
          <p className="footer-tagline">{siteConfig.brand.tagline}</p>
          {siteConfig.contact?.location || siteConfig.contactEmail || siteConfig.contact?.phoneLabel ? (
            <p className="footer-contact">
              {siteConfig.contact?.location ? (
                <>
                  {siteConfig.contact.location} <span aria-hidden="true">&bull;</span>{" "}
                </>
              ) : null}
              {siteConfig.contact?.phoneLabel ? (
                <a href={siteConfig.contact?.phoneHref || "#"}>{siteConfig.contact.phoneLabel}</a>
              ) : null}
            </p>
          ) : null}
          <p className="footer-legal">
            &copy; {new Date().getFullYear()} Jonathan Le Coz. All rights reserved.
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
        JONATHAN LE COZ &bull; Experiential Designer
      </p>
    </footer>
  );
}
