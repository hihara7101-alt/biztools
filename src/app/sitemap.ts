import type { MetadataRoute } from "next";

const baseUrl = "https://biztools.com";

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

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority:
      page === "" || page === "/ja"
        ? 1
        : page.includes("calculator")
        ? 0.9
        : 0.7,
  }));
}