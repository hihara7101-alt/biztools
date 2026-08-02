import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },

    sitemap: "https://uttacca.com/sitemap.xml",

    host: "https://uttacca.com",
  };
}