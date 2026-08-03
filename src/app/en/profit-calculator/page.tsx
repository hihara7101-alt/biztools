import type { Metadata } from "next";

import ProfitCalculator from "../../profit-calculator/ProfitCalculator";
import ProfitGuide from "../../profit-calculator/ProfitGuide";

export const metadata: Metadata = {
  title: "Profit Calculator | BizTools",

  description:
    "Free Profit Calculator for entrepreneurs and small businesses. Calculate profit, gross margin, net margin, contribution margin and profitability instantly.",

  keywords: [
    "profit calculator",
    "gross profit calculator",
    "net profit calculator",
    "profit margin calculator",
    "business profit calculator",
    "contribution margin calculator",
    "small business calculator",
  ],

  alternates: {
    canonical: "https://www.uttacca.com/en/profit-calculator",

    languages: {
      "en-US": "https://www.uttacca.com/en/profit-calculator",
      "ja-JP": "https://www.uttacca.com/profit-calculator",
      "x-default": "https://www.uttacca.com/profit-calculator",
    },
  },

  openGraph: {
    title: "Profit Calculator | BizTools",

    description:
      "Calculate profit, gross margin, net margin and contribution margin instantly.",

    url: "https://www.uttacca.com/en/profit-calculator",

    siteName: "BizTools",

    locale: "en_US",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Profit Calculator | BizTools",

    description:
      "Free business profit calculator for entrepreneurs and small businesses.",
  },
};

export default function ProfitCalculatorPage() {
  return (
    <main
      style={{
        maxWidth: 1000,
        margin: "0 auto",
        padding: "50px 24px 80px",
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
          Profit Calculator
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
          Calculate profit, gross margin, net margin, and contribution margin
          in seconds. Built for entrepreneurs, freelancers, online sellers,
          and small business owners.
        </p>
      </section>

      <ProfitCalculator lang="en" />

      <ProfitGuide lang="en" />
    </main>
  );
}