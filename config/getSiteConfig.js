import { siteConfigJonny } from "@/config/siteConfigJonny";
import { siteConfigMain } from "@/config/siteConfigMain";

export function getSiteConfig(hostname) {
  const host = (hostname || "").toLowerCase();

  if (host.startsWith("jonny.")) return siteConfigJonny;
  return siteConfigMain;
}

