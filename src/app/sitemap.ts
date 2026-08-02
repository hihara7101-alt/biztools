import type { MetadataRoute } from "next";

const baseUrl = "https://uttacca.com";

const japanesePages = [
  "",
  "/about",
  "/contact",
  "/privacy",
  "/terms",
  "/disclaimer",
  "/calculators",
  "/profit-calculator",
  "/break-even-calculator",
  "/pricing-calculator",
  "/sales-target-calculator",
  "/roi-calculator",
];

const englishPages = [
  "/en",
  "/en/about",
  "/en/contact",
  "/en/privacy",
  "/en/terms",
  "/en/disclaimer",
  "/en/calculators",
  "/en/profit-calculator",
  "/en/break-even-calculator",
  "/en/pricing-calculator",
  "/en/sales-target-calculator",
  "/en/roi-calculator",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [...japanesePages, ...englishPages];

  return pages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority:
      page === "" || page === "/en"
        ? 1
        : page.includes("calculator")
        ? 0.9
        : 0.7,
  }));
}