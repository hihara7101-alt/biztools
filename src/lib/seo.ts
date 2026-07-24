import type { Metadata } from "next";

type SEOProps = {
  title: string;
  description: string;
  path: string;
  lang?: "en" | "ja";
};

const SITE_URL = "https://biztools.site";

export function createMetadata({
  title,
  description,
  path,
  lang = "en",
}: SEOProps): Metadata {
  const canonical =
    lang === "ja"
      ? `${SITE_URL}/ja${path}`
      : `${SITE_URL}${path}`;

  return {
    title,
    description,

    alternates: {
      canonical,

      languages: {
        en: `${SITE_URL}${path}`,
        ja: `${SITE_URL}/ja${path}`,
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