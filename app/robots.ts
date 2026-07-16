import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://seaintintelligence.com/sitemap.xml",
    host: "https://seaintintelligence.com",
  };
}
