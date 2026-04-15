export const siteConfig = {
  /** Production origin — used for canonical URLs, OG images, sitemap */
  siteUrl: "https://www.socialdynamix.co",
  brand: {
    logoText: "JONATHAN LE COZ",
  },
  theme: {
    // Light theme with dark-blue accessible text
    background: "#F7F9FF", // light canvas
    foreground: "#0B1F3A", // dark blue (primary text)
    accent: "#0B3A6A", // dark blue (links/CTAs)
    accentAlt: "#0E4A86", // hover/active
    surface: "#FFFFFF", // cards/surfaces
    surfaceBorder: "#D6E2F0", // borders/dividers
    // Secondary text tones (still accessible on light bg)
    grey: "#334B68",
    greyMid: "#5B738F",
    navy: "#0B1F3A",
    goldLight: "#1463FF", // highlight (used sparingly)
  },
  contactEmail: "jonathan.lecoz@gmail.com",
  nav: [
    { label: "Overview", href: "/#overview" },
    { label: "Experience", href: "/#experience" },
    { label: "Skills", href: "/#skills" },
    { label: "Education", href: "/#education" },
    { label: "Contact", href: "/contact" },
  ],
  social: {
    instagram: "#",
    linkedin: "#",
    x: "#",
    youtube: "#",
  },
};
