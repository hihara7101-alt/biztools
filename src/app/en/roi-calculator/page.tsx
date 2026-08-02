import type { Metadata } from "next";

import ROICalculator from "../../roi-calculator/ROICalculator";
import ROIGuide from "../../roi-calculator/ROIGuide";

export const metadata: Metadata = {
  title: "ROI Calculator | BizTools",
  description:
    "Calculate Return on Investment (ROI), net profit, total return and investment performance. Free calculator for entrepreneurs, freelancers, investors and small businesses.",
};

export default function ROICalculatorPage() {
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
          ROI Calculator
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
          Calculate Return on Investment (ROI), net profit and total return in
          seconds. Perfect for entrepreneurs, investors, freelancers and small
          business owners.
        </p>
      </section>

      <ROICalculator />

      <ROIGuide />
    </main>
  );
}