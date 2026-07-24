import type { Metadata } from "next";

import ProfitCalculator from "../../profit-calculator/ProfitCalculator";
import ProfitGuide from "../../profit-calculator/ProfitGuide";

export const metadata: Metadata = {
  title: "利益計算ツール | BizTools",
  description:
    "利益・利益率・限界利益を無料で計算できます。起業家・フリーランス・中小企業向けのビジネス計算ツールです。",
};

export default function ProfitCalculatorPage() {
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
          利益計算ツール
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
          売上・原価・固定費から利益・利益率・限界利益を簡単に計算できます。
          起業家・フリーランス・ネットショップ運営者・中小企業におすすめです。
        </p>
      </section>

      <ProfitCalculator lang="ja" />

      <ProfitGuide lang="ja" />
    </main>
  );
}