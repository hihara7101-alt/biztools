import type { Metadata } from "next";

type SEOProps = {
  title: string;
  description: string;
  path: string;
  lang?: "en" | "ja";
};

const SITE_URL = "https://www.uttacca.com";

export function createMetadata({
  title,
  description,
  path,
  lang = "ja",
}: SEOProps): Metadata {
  const canonical =
    lang === "ja"
      ? `${SITE_URL}${path}`
      : `${SITE_URL}/en${path}`;

  return {
    title,
    description,

    alternates: {
      canonical,

      languages: {
        "ja-JP": `${SITE_URL}${path}`,
        "en-US": `${SITE_URL}/en${path}`,
        "x-default": `${SITE_URL}${path}`,
      },
    },

    openGraph: {
      title,
      description,
      url: canonical,
      siteName: "BizTools",
      locale: lang === "ja" ? "ja_JP" : "en_US",
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}