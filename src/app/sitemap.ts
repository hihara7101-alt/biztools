import { MetadataRoute } from "next";

const BASE_URL = "https://biztools.site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    "",
    "/about",
    "/contact",
    "/privacy",
    "/terms",
    "/disclaimer",

    "/profit-calculator",
    "/break-even-calculator",
    "/pricing-calculator",
    "/sales-target-calculator",
    "/roi-calculator",

    "/ja",
    "/ja/about",
    "/ja/contact",
    "/ja/privacy",
    "/ja/terms",
    "/ja/disclaimer",

    "/ja/profit-calculator",
    "/ja/break-even-calculator",
    "/ja/pricing-calculator",
    "/ja/sales-target-calculator",
    "/ja/roi-calculator",
  ];

  return pages.map((page) => ({
    url: `${BASE_URL}${page}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: page === "" || page === "/ja" ? 1.0 : 0.8,
  }));
}