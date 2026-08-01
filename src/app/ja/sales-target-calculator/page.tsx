import type { Metadata } from "next";

import SalesTargetCalculator from "../../sales-target-calculator/SalesTargetCalculator";
import SalesTargetGuide from "../../sales-target-calculator/SalesTargetGuide";

export const metadata: Metadata = {
  title: "売上目標計算ツール | BizTools",
  description:
    "目標利益を達成するために必要な売上高・販売数量を計算できる無料ツール。起業家、フリーランス、中小企業向け。",
};

export default function SalesTargetCalculatorPageJa() {
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
          売上目標計算ツール
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
          目標利益を達成するために必要な売上高や販売数量を数秒で計算できます。
          事業計画、予算管理、売上目標の設定に役立つ
          無料ビジネス計算ツールです。
        </p>
      </section>

      <SalesTargetCalculator lang="ja" />

      <SalesTargetGuide lang="ja" />
    </main>
  );
}