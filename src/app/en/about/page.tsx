import type { Metadata } from "next";
import Link from "next/link";

import PageContainer from "@/components/PageContainer";

export const metadata: Metadata = {
  title: "About BizTools",

  description:
    "Learn more about BizTools, a free business calculator site for profit, break-even analysis, pricing, ROI and sales targets.",

  alternates: {
    canonical: "/en/about",

    languages: {
      "ja-JP": "/about",
      "en-US": "/en/about",
      "x-default": "/about",
    },
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function AboutPage() {
  return (
    <PageContainer title="About BizTools">
      <p>
        BizTools is a free business calculator site designed for
        entrepreneurs, freelancers, small business owners and online
        sellers who want to understand important business numbers quickly.
      </p>

      <p style={{ marginTop: 24 }}>
        The site provides calculators for profit, break-even analysis,
        pricing, sales targets and return on investment (ROI), helping
        users make practical business calculations without creating
        complex spreadsheets.
      </p>

      <p style={{ marginTop: 24 }}>
        Our goal is to make common business calculations easier to
        understand and more accessible, especially when reviewing pricing,
        costs, profitability and planning decisions.
      </p>

      <h2
        style={{
          marginTop: 50,
          fontSize: 30,
          fontWeight: 700,
          color: "#111827",
        }}
      >
        Our Purpose
      </h2>

      <p style={{ marginTop: 20 }}>
        Business decisions often involve more than revenue alone. Profit,
        fixed costs, variable costs, pricing, sales volume and investment
        efficiency all affect overall performance.
      </p>

      <p style={{ marginTop: 20 }}>
        BizTools is designed to make these calculations easier to review so
        users can make decisions based on clearer financial information.
      </p>

      <h2
        style={{
          marginTop: 50,
          fontSize: 30,
          fontWeight: 700,
          color: "#111827",
        }}
      >
        Available Calculators
      </h2>

      <ul
        style={{
          marginTop: 20,
          paddingLeft: 24,
          lineHeight: 2,
        }}
      >
        <li>
          <Link
            href="/en/profit-calculator"
            style={{
              color: "#2563EB",
              fontWeight: 700,
              textDecoration: "none",
            }}
          >
            Profit Calculator
          </Link>
          : Calculate profit, profit margin and contribution.
        </li>

        <li>
          <Link
            href="/en/break-even-calculator"
            style={{
              color: "#2563EB",
              fontWeight: 700,
              textDecoration: "none",
            }}
          >
            Break-even Calculator
          </Link>
          : Estimate the sales volume and revenue required to cover costs.
        </li>

        <li>
          <Link
            href="/en/pricing-calculator"
            style={{
              color: "#2563EB",
              fontWeight: 700,
              textDecoration: "none",
            }}
          >
            Pricing Calculator
          </Link>
          : Estimate a selling price using cost and desired margin.
        </li>

        <li>
          <Link
            href="/en/sales-target-calculator"
            style={{
              color: "#2563EB",
              fontWeight: 700,
              textDecoration: "none",
            }}
          >
            Sales Target Calculator
          </Link>
          : Calculate the sales volume and revenue required to reach a
          target profit.
        </li>

        <li>
          <Link
            href="/en/roi-calculator"
            style={{
              color: "#2563EB",
              fontWeight: 700,
              textDecoration: "none",
            }}
          >
            ROI Calculator
          </Link>
          : Evaluate investment return, net profit and investment multiple.
        </li>
      </ul>

      <h2
        style={{
          marginTop: 50,
          fontSize: 30,
          fontWeight: 700,
          color: "#111827",
        }}
      >
        Why BizTools?
      </h2>

      <ul
        style={{
          marginTop: 20,
          paddingLeft: 24,
          lineHeight: 2,
        }}
      >
        <li>Free to use</li>
        <li>No registration or login required</li>
        <li>Designed for entrepreneurs, freelancers and small businesses</li>
        <li>Available in English and Japanese</li>
        <li>Works on desktop, tablet and mobile</li>
        <li>Includes explanations and examples for key calculations</li>
      </ul>

      <h2
        style={{
          marginTop: 50,
          fontSize: 30,
          fontWeight: 700,
          color: "#111827",
        }}
      >
        About the Results
      </h2>

      <p style={{ marginTop: 20 }}>
        BizTools calculations are intended to support planning,
        comparison and general business analysis.
      </p>

      <p style={{ marginTop: 20 }}>
        Actual business decisions may also need to consider taxes,
        financing, contractual terms, market conditions and other costs
        that are not included in a simple calculator.
      </p>

      <p style={{ marginTop: 20 }}>
        For important financial, tax, legal or investment decisions,
        consider seeking advice from an appropriate professional.
      </p>

      <h2
        style={{
          marginTop: 50,
          fontSize: 30,
          fontWeight: 700,
          color: "#111827",
        }}
      >
        Contact
      </h2>

      <p style={{ marginTop: 20 }}>
        If you have feedback, find an error or have a suggestion for the
        site, please use the contact page.
      </p>

      <p style={{ marginTop: 20 }}>
        <Link
          href="/en/contact"
          style={{
            color: "#2563EB",
            fontWeight: 700,
            textDecoration: "none",
          }}
        >
          Contact BizTools →
        </Link>
      </p>
    </PageContainer>
  );
}