import type { Metadata } from "next";

import ProfitCalculator from "./ProfitCalculator";
import ProfitGuide from "./ProfitGuide";

export const metadata: Metadata = {
  title: "Profit Calculator | BizTools",
  description:
    "Calculate gross profit, net profit, gross margin and net profit margin instantly. Free business calculator for entrepreneurs, freelancers and small business owners.",
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
          Calculate gross profit, net profit, gross margin and net
          profit margin in seconds. Perfect for entrepreneurs,
          freelancers, online sellers and small business owners.
        </p>
      </section>

      <ProfitCalculator />

      <ProfitGuide />
    </main>
  );
}