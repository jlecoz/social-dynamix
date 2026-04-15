import { headers } from "next/headers";
import { getSiteConfig } from "@/config/getSiteConfig";

export default async function robots() {
  const host = (await headers()).get("host") || "";
  const siteConfig = getSiteConfig(host);

  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${siteConfig.siteUrl}/sitemap.xml`,
    host: siteConfig.siteUrl.replace(/^https?:\/\//, ""),
  };
}
