import type { Metadata } from "next";

import PricingCalculator from "../../pricing-calculator/PricingCalculator";
import PricingGuide from "../../pricing-calculator/PricingGuide";

export const metadata: Metadata = {
  title: "Pricing Calculator | BizTools",
  description:
    "Calculate the best selling price based on your costs and desired profit margin. Free pricing calculator for entrepreneurs, freelancers and small businesses.",
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
          Pricing Calculator
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
          Calculate the ideal selling price based on your product cost,
          desired profit margin and tax rate. Perfect for online sellers,
          freelancers and small businesses.
        </p>
      </section>

      <PricingCalculator />

      <PricingGuide />
    </main>
  );
}