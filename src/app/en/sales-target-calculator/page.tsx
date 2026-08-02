import type { Metadata } from "next";

import SalesTargetCalculator from "../../sales-target-calculator/SalesTargetCalculator";
import SalesTargetGuide from "../../sales-target-calculator/SalesTargetGuide";

export const metadata: Metadata = {
  title: "Sales Target Calculator | BizTools",
  description:
    "Calculate how many sales you need to reach your target profit. Free calculator for entrepreneurs, freelancers and small business owners.",
};

export default function SalesTargetCalculatorPage() {
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
          Sales Target Calculator
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
          Calculate the number of sales and revenue required to achieve
          your desired profit target. Perfect for business planning,
          budgeting and setting realistic sales goals.
        </p>
      </section>

      <SalesTargetCalculator />

      <SalesTargetGuide />
    </main>
  );
}