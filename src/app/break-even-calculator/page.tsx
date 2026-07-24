import type { Metadata } from "next";

import BreakEvenCalculator from "./BreakEvenCalculator";
import BreakEvenGuide from "./BreakEvenGuide";

export const metadata: Metadata = {
  title: "Break-even Calculator | BizTools",
  description:
    "Calculate your break-even point, required sales, contribution margin and break-even revenue. Free calculator for entrepreneurs and small business owners.",
};

export default function BreakEvenCalculatorPage() {
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
          Break-even Calculator
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
          Calculate how many units you need to sell before your business
          becomes profitable. Instantly calculate break-even units,
          break-even revenue and contribution margin.
        </p>
      </section>

      <BreakEvenCalculator />

      <BreakEvenGuide />
    </main>
  );
}