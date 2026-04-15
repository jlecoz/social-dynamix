import { siteConfig } from "@/config/siteConfig";

export default function sitemap() {
  const base = siteConfig.siteUrl;
  const now = new Date();
  return [
    { url: base, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
  ];
}
