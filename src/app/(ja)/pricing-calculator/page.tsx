import type { Metadata } from "next";

import PricingCalculator from "./PricingCalculator";
import PricingGuide from "./PricingGuide";

export const metadata: Metadata = {
  title: "価格設定ツール | BizTools",
  description:
    "原価・利益率・税込価格から最適な販売価格を計算できる無料ツール。個人事業主、中小企業、フリーランス、ネットショップ運営者向け。",

  alternates: {
    canonical: "/pricing-calculator",
    languages: {
      "ja-JP": "/pricing-calculator",
      "en-US": "/en/pricing-calculator",
      "x-default": "/pricing-calculator",
    },
  },

  openGraph: {
    title: "価格設定ツール | BizTools",
    description:
      "原価・希望利益率・税率から最適な販売価格を簡単に計算できる無料ツール。",
    url: "/pricing-calculator",
    siteName: "BizTools",
    locale: "ja_JP",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "価格設定ツール | BizTools",
    description:
      "原価・希望利益率・税率から最適な販売価格を簡単に計算できます。",
  },
};

export default function PricingCalculatorPage() {
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
            lineHeight: 1.15,
          }}
        >
          価格設定ツール
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
          原価・希望利益率・税率から最適な販売価格を数秒で計算できます。
          個人事業主、フリーランス、中小企業、ネットショップ運営者向けの
          無料ビジネス計算ツールです。
        </p>
      </section>

      <PricingCalculator lang="ja" />

      <PricingGuide lang="ja" />
    </main>
  );
}