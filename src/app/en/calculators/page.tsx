import type { Metadata } from "next";
import Link from "next/link";

import CalculatorCard from "@/components/CalculatorCard";

export const metadata: Metadata = {
  title: "Business Calculators | BizTools",

  description:
    "Free business calculators for profit, break-even analysis, pricing, ROI and sales targets. Built for entrepreneurs, freelancers, small businesses and online sellers.",

  keywords: [
    "business calculators",
    "profit calculator",
    "break even calculator",
    "pricing calculator",
    "ROI calculator",
    "sales target calculator",
    "small business tools",
    "entrepreneur tools",
    "freelancer tools",
  ],

  alternates: {
    canonical: "/en/calculators",

    languages: {
      "ja-JP": "/calculators",
      "en-US": "/en/calculators",
      "x-default": "/calculators",
    },
  },

  robots: {
    index: true,
    follow: true,
  },
};

const calculators = [
  {
    icon: "📈",
    title: "Profit Calculator",
    description:
      "Use revenue, variable costs and fixed costs to calculate profit, profit margin and contribution margin.",
    bestFor:
      "✓ Small Business\n✓ Freelancers\n✓ Online Sellers",
    href: "/en/profit-calculator",
    popular: true,
  },

  {
    icon: "⚖️",
    title: "Break-even Calculator",
    description:
      "Calculate the sales volume and revenue required to cover your fixed and variable costs.",
    bestFor:
      "✓ Startups\n✓ Retail\n✓ Restaurants",
    href: "/en/break-even-calculator",
  },

  {
    icon: "🎯",
    title: "Sales Target Calculator",
    description:
      "Calculate the units and revenue required to reach a specific profit target.",
    bestFor:
      "✓ Business Planning\n✓ Forecasting",
    href: "/en/sales-target-calculator",
  },

  {
    icon: "💰",
    title: "Pricing Calculator",
    description:
      "Use your cost and desired margin to calculate a target selling price.",
    bestFor:
      "✓ Products\n✓ Services\n✓ Ecommerce",
    href: "/en/pricing-calculator",
  },

  {
    icon: "📊",
    title: "ROI Calculator",
    description:
      "Calculate ROI, net profit and investment multiple using your investment and return.",
    bestFor:
      "✓ Marketing\n✓ Equipment\n✓ Projects",
    href: "/en/roi-calculator",
  },
];

export default function CalculatorsPage() {
  return (
    <main
      style={{
        maxWidth: 1100,
        margin: "0 auto",
        padding: "60px 24px 100px",
      }}
    >
      <section>
        <h1
          style={{
            fontSize: "44px",
            fontWeight: 800,
            color: "#111827",
            lineHeight: 1.2,
          }}
        >
          Business Calculators
        </h1>

        <p
          style={{
            marginTop: "20px",
            fontSize: "19px",
            color: "#4B5563",
            lineHeight: 1.9,
            maxWidth: "800px",
          }}
        >
          Free calculators for profit, pricing, break-even analysis, ROI and
          sales targets.
        </p>

        <p
          style={{
            marginTop: "14px",
            fontSize: "17px",
            color: "#6B7280",
            lineHeight: 1.9,
            maxWidth: "800px",
          }}
        >
          BizTools is designed for entrepreneurs, freelancers, small
          businesses and online sellers who need quick access to practical
          business calculations without building spreadsheets from scratch.
        </p>
      </section>

      <section
        style={{
          marginTop: "55px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(320px,1fr))",
            gap: "30px",
          }}
        >
          {calculators.map((calculator) => (
            <CalculatorCard
              key={calculator.title}
              icon={calculator.icon}
              title={calculator.title}
              description={calculator.description}
              bestFor={calculator.bestFor}
              href={calculator.href}
              popular={calculator.popular}
              lang="en"
            />
          ))}
        </div>
      </section>

      {/* How to Choose */}

      <section
        style={{
          marginTop: "90px",
        }}
      >
        <h2
          style={{
            fontSize: "34px",
            fontWeight: 800,
            color: "#111827",
          }}
        >
          Which Calculator Should You Use?
        </h2>

        <p
          style={{
            marginTop: "18px",
            color: "#4B5563",
            lineHeight: 1.9,
            fontSize: "17px",
            maxWidth: "850px",
          }}
        >
          The best calculator depends on the business question you are trying
          to answer. Use the examples below to choose the right starting
          point.
        </p>

        <div
          style={{
            display: "grid",
            gap: "20px",
            marginTop: "35px",
          }}
        >
          {[
            {
              title: "I want to understand my current profit",
              text:
                "If you know your revenue, variable costs and fixed costs, use the Profit Calculator to estimate profit and margins.",
              href: "/en/profit-calculator",
              label: "Profit Calculator",
            },
            {
              title: "I want to know how many sales I need to break even",
              text:
                "Use your selling price, variable cost and fixed costs to estimate the point where the business begins generating profit.",
              href: "/en/break-even-calculator",
              label: "Break-even Calculator",
            },
            {
              title: "I need to decide on a selling price",
              text:
                "Use product or service cost together with your desired margin to estimate a target selling price.",
              href: "/en/pricing-calculator",
              label: "Pricing Calculator",
            },
            {
              title: "I want to reach a specific profit goal",
              text:
                "Start with your desired profit and calculate the sales volume and revenue required to reach it.",
              href: "/en/sales-target-calculator",
              label: "Sales Target Calculator",
            },
            {
              title: "I want to evaluate an investment",
              text:
                "Use the ROI Calculator to compare an investment with its return and estimate net profit and return on investment.",
              href: "/en/roi-calculator",
              label: "ROI Calculator",
            },
          ].map((item) => (
            <div
              key={item.title}
              style={{
                padding: "28px",
                border: "1px solid #E5E7EB",
                borderRadius: "18px",
                background: "#FFFFFF",
              }}
            >
              <h3
                style={{
                  margin: 0,
                  fontSize: "21px",
                  fontWeight: 700,
                  color: "#111827",
                }}
              >
                {item.title}
              </h3>

              <p
                style={{
                  marginTop: "12px",
                  marginBottom: 0,
                  fontSize: "16px",
                  lineHeight: 1.8,
                  color: "#4B5563",
                }}
              >
                {item.text}
              </p>

              <Link
                href={item.href}
                style={{
                  display: "inline-block",
                  marginTop: "14px",
                  color: "#2563EB",
                  fontWeight: 700,
                  textDecoration: "none",
                }}
              >
                Open {item.label} →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Workflow */}

      <section
        style={{
          marginTop: "90px",
          background: "#F9FAFB",
          border: "1px solid #E5E7EB",
          borderRadius: "24px",
          padding: "48px",
        }}
      >
        <h2
          style={{
            fontSize: "32px",
            fontWeight: 800,
            color: "#111827",
          }}
        >
          Use the Calculators Together
        </h2>

        <p
          style={{
            marginTop: "22px",
            color: "#4B5563",
            lineHeight: 1.9,
            fontSize: "17px",
          }}
        >
          For example, if you are planning to sell a new product, you can
          first estimate a selling price based on cost and margin. Then use
          the Break-even Calculator to see how many units must be sold before
          fixed costs are covered.
        </p>

        <p
          style={{
            marginTop: "18px",
            color: "#4B5563",
            lineHeight: 1.9,
            fontSize: "17px",
          }}
        >
          After setting a profit goal, the Sales Target Calculator can
          estimate the required sales volume. Once the business is operating,
          use the Profit Calculator to review actual results and the ROI
          Calculator to evaluate spending on marketing, equipment or other
          projects.
        </p>

        <div
          style={{
            marginTop: "30px",
            display: "flex",
            gap: "14px",
            flexWrap: "wrap",
          }}
        >
          {[
            ["Pricing", "/en/pricing-calculator"],
            ["Break-even", "/en/break-even-calculator"],
            ["Sales Target", "/en/sales-target-calculator"],
            ["Profit", "/en/profit-calculator"],
            ["ROI", "/en/roi-calculator"],
          ].map(([label, href]) => (
            <Link
              key={label}
              href={href}
              style={{
                padding: "12px 18px",
                borderRadius: "10px",
                background: "#FFFFFF",
                border: "1px solid #D1D5DB",
                textDecoration: "none",
                color: "#2563EB",
                fontWeight: 700,
              }}
            >
              {label}
            </Link>
          ))}
        </div>
      </section>

      {/* About */}

      <section
        style={{
          marginTop: "90px",
        }}
      >
        <h2
          style={{
            fontSize: "32px",
            fontWeight: 800,
            color: "#111827",
          }}
        >
          What Is BizTools?
        </h2>

        <p
          style={{
            marginTop: "22px",
            color: "#4B5563",
            lineHeight: 1.9,
            fontSize: "17px",
            maxWidth: "850px",
          }}
        >
          BizTools is a collection of free calculators for common business
          questions involving profit, pricing, sales planning, break-even
          analysis and investment performance.
        </p>

        <p
          style={{
            marginTop: "18px",
            color: "#4B5563",
            lineHeight: 1.9,
            fontSize: "17px",
            maxWidth: "850px",
          }}
        >
          The goal is to make useful calculations easier to access without
          requiring users to create formulas or complex spreadsheets. Each
          calculator page also includes explanations and examples to help
          users understand the results.
        </p>

        <p
          style={{
            marginTop: "18px",
            color: "#6B7280",
            lineHeight: 1.8,
            fontSize: "16px",
          }}
        >
          Learn more on the{" "}
          <Link
            href="/en/about"
            style={{
              color: "#2563EB",
              fontWeight: 700,
              textDecoration: "none",
            }}
          >
            About BizTools
          </Link>{" "}
          page.
        </p>
      </section>

      {/* Note */}

      <section
        style={{
          marginTop: "80px",
          padding: "30px",
          background: "#FFFBEB",
          border: "1px solid #FDE68A",
          borderRadius: "18px",
        }}
      >
        <h2
          style={{
            margin: 0,
            fontSize: "22px",
            fontWeight: 700,
            color: "#92400E",
          }}
        >
          About the Results
        </h2>

        <p
          style={{
            marginTop: "14px",
            marginBottom: 0,
            fontSize: "16px",
            lineHeight: 1.8,
            color: "#78350F",
          }}
        >
          BizTools calculations are intended as practical estimates for
          planning and comparison. Actual business decisions may also need to
          consider taxes, financing, market conditions and additional costs.
        </p>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "BizTools Business Calculators",
            url: "https://uttacca.com/en/calculators",
            description:
              "Free business calculators for profit, break-even analysis, pricing, ROI and sales targets.",
            inLanguage: "en-US",
          }),
        }}
      />
    </main>
  );
}