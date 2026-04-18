import { headers } from "next/headers";
import { getSiteConfig } from "@/config/getSiteConfig";

export default async function sitemap() {
  const host = (await headers()).get("host") || "";
  const siteConfig = getSiteConfig(host);
  const base = siteConfig.siteUrl;
  const now = new Date();

  const isJonny = host.toLowerCase().startsWith("jonny.");
  const urls = isJonny
    ? [
        base,
        `${base}/#overview`,
        `${base}/#experience`,
        `${base}/#skills`,
        `${base}/#education`,
        `${base}/#recommendations`,
        `${base}/#languages`,
        `${base}/contact`,
      ]
    : [base, `${base}/#services`, `${base}/#work`, `${base}/contact`];

  return urls.map((url, i) => ({
    url,
    lastModified: now,
    changeFrequency: "monthly",
    priority: i === 0 ? 1 : 0.7,
  }));
}
