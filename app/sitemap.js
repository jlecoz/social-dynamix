import { headers } from "next/headers";
import { getSiteConfig } from "@/config/getSiteConfig";
import { worksProjects } from "@/config/worksProjects";

export default async function sitemap() {
  const host = (await headers()).get("host") || "";
  const siteConfig = getSiteConfig(host);
  const base = siteConfig.siteUrl;
  const now = new Date();

  const workUrls = worksProjects.map((w) => `${base}/works/${w.slug}`);

  const isJonny = host.toLowerCase().startsWith("jonny.");
  const urls = isJonny
    ? [
        base,
        ...workUrls,
        `${base}/education`,
        `${base}/skills`,
        `${base}/#recommendations`,
      ]
    : [base, ...workUrls, `${base}/#services`, `${base}/#work`, `${base}/contact`];

  return urls.map((url, i) => ({
    url,
    lastModified: now,
    changeFrequency: "monthly",
    priority: i === 0 ? 1 : 0.7,
  }));
}
