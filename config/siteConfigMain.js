export const siteConfigMain = {
  /** Production origin — used for canonical URLs, OG images, sitemap */
  siteUrl: "https://www.socialdynamix.co",

  /** @see siteConfigJonny.adobeFontsKitIds */
  adobeFontsKitIds: ["ejw0fwc"],
  brand: {
    logoText: "SOCIAL DYNAMIX",
    tagline: "Design-led product strategy & delivery",
  },
  theme: {
    // Brand palette — main domain (Void primary BG)
    background: "#0A0B0C", // Void — Primary BG
    foreground: "#F2F8FA", // White — Light Surface as primary text
    accent: "#4AC8E8", // Cyan Strike — Accent / CTA
    accentAlt: "#24A89E", // Bright Teal — Active / Hover
    surface: "#0D3D3A", // Deep Teal — Surface / Shadow
    surfaceBorder: "#1A7A73", // Core Teal — panel edges on dark
    grey: "#B8D4D8", // Steel — Body text
    greyMid: "#D6E8EC", // Fog — Subdued
    navy: "#0A0B0C", // Void
    goldLight: "#7DDFF2", // Cyan Light — Highlight
    coreTeal: "#1A7A73",
    pixelBlue: "#2D8EBF",
    void: "#0A0B0C",
    deepTeal: "#0D3D3A",
    brightTeal: "#24A89E",
    cyanStrike: "#4AC8E8",
    cyanLight: "#7DDFF2",
    steel: "#B8D4D8",
    fog: "#D6E8EC",
    white: "#F2F8FA",
    offWhite: "#F5F5F5",
    lightGray: "#E5E5E5",
  },
  contactEmail: "hello@socialdynamix.co",
  nav: [
    { label: "Home", href: "/" },
    { label: "What we do", href: "/#services" },
    { label: "Work", href: "/#work" },
    { label: "Jonny", href: "https://jonny.socialdynamix.co" },
    { label: "Contact", href: "/contact" },
  ],
  social: {
    instagram: "#",
    linkedin: "#",
    x: "#",
    youtube: "#",
  },
};

