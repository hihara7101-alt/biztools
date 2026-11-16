import type { Metadata } from "next";

import ROICalculator from "./ROICalculator";
import ROIGuide from "./ROIGuide";

export const metadata: Metadata = {
  title: "ROI計算ツール | BizTools",
  description:
    "ROI（投資利益率）、純利益、投資収益を簡単に計算できる無料ツール。起業家、投資家、フリーランス、中小企業向け。",

  alternates: {
    canonical: "/roi-calculator",
    languages: {
      "ja-JP": "/roi-calculator",
      "en-US": "/en/roi-calculator",
      "x-default": "/roi-calculator",
    },
  },

  openGraph: {
    title: "ROI計算ツール | BizTools",
    description:
      "ROI（投資利益率）、純利益、投資収益を簡単に計算できる無料ツール。",
    url: "/roi-calculator",
    siteName: "BizTools",
    locale: "ja_JP",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "ROI計算ツール | BizTools",
    description:
      "ROI（投資利益率）、純利益、投資収益を簡単に計算できます。",
  },
};

export default function ROICalculatorPage() {
  return (
    <main
      style={{
        maxWidth: 1000,
        margin: "0 auto",
        padding: "70px 24px",
      }}
    >
      <section>
        <h1
          style={{
            fontSize: "54px",
            fontWeight: 800,
            color: "#111827",
            lineHeight: 1.25,
            paddingTop: "6px",
          }}
        >
          ROI計算ツール
        </h1>

        <p
          style={{
            marginTop: "24px",
            fontSize: "20px",
            lineHeight: 1.8,
            color: "#6B7280",
            maxWidth: "760px",
          }}
        >
          ROI（投資利益率）、純利益、投資収益を数秒で計算できます。
          起業家、投資家、フリーランス、中小企業経営者向けの
          無料ビジネス計算ツールです。
        </p>
      </section>

      <ROICalculator lang="ja" />

      <ROIGuide lang="ja" />
    </main>
  );
}