import type { Metadata } from "next";

import ProfitCalculator from "../../profit-calculator/ProfitCalculator";
import ProfitGuide from "../../profit-calculator/ProfitGuide";

export const metadata: Metadata = {
  title: "利益計算ツール | BizTools",
  description:
    "利益、粗利益、利益率、粗利益率を簡単に計算できる無料ツール。個人事業主、中小企業、フリーランス、ネットショップ運営者向け。",
};

export default function ProfitCalculatorPageJa() {
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
          利益、粗利益、利益率、粗利益率を数秒で計算できます。
          起業家、個人事業主、フリーランス、中小企業、
          ネットショップ運営者のための無料ビジネス計算ツールです。
        </p>
      </section>

      <ProfitCalculator lang="ja" />

      <ProfitGuide lang="ja" />
    </main>
  );
}