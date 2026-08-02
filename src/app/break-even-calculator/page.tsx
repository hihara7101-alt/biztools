import type { Metadata } from "next";

import BreakEvenCalculator from "./BreakEvenCalculator";

export const metadata: Metadata = {
  title: "損益分岐点計算ツール | BizTools",
  description:
    "固定費・変動費・販売価格から損益分岐点、必要販売数、必要売上高を無料で計算できます。起業家、個人事業主、中小企業向け。",

  keywords: [
    "損益分岐点",
    "損益分岐点計算",
    "損益分岐点計算ツール",
    "利益計算",
    "固定費",
    "変動費",
    "事業計画",
  ],

  alternates: {
    canonical: "/break-even-calculator",
    languages: {
      "ja-JP": "/break-even-calculator",
      "en-US": "/en/break-even-calculator",
      "x-default": "/break-even-calculator",
    },
  },

  openGraph: {
    title: "損益分岐点計算ツール | BizTools",
    description:
      "固定費・変動費・販売価格から損益分岐点を簡単に計算できる無料ツール。",
    url: "/break-even-calculator",
    siteName: "BizTools",
    locale: "ja_JP",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "損益分岐点計算ツール | BizTools",
    description:
      "固定費・変動費・販売価格から損益分岐点を簡単に計算できます。",
  },
};

export default function BreakEvenCalculatorPage() {
  return (
    <main
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "40px 20px 80px",
      }}
    >
      <section>
        <h1
          style={{
            fontSize: "42px",
            fontWeight: 900,
            lineHeight: 1.2,
            color: "#111827",
          }}
        >
          損益分岐点計算ツール
        </h1>

        <p
          style={{
            marginTop: "20px",
            fontSize: "20px",
            lineHeight: 1.8,
            color: "#4B5563",
            maxWidth: "850px",
          }}
        >
          固定費・変動費・販売価格から、
          利益が出るまでに必要な販売数と売上高を
          簡単に計算できます。
        </p>

        <p
          style={{
            marginTop: "14px",
            fontSize: "17px",
            lineHeight: 1.8,
            color: "#6B7280",
            maxWidth: "850px",
          }}
        >
          起業家、フリーランス、小規模事業者、
          EC販売者など、
          ビジネスの利益計画に役立つ無料ツールです。
        </p>
      </section>

      <BreakEvenCalculator lang="ja" />

      {/* Keep the remainder of your page exactly as it is */}
    </main>
  );
}