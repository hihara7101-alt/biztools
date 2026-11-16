import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Disclaimer | BizTools",

  description:
    "BizTools disclaimer covering calculator results, professional advice, accuracy, liability, external links, and use of the website.",

  alternates: {
    canonical: "/en/disclaimer",

    languages: {
      "ja-JP": "/disclaimer",
      "en-US": "/en/disclaimer",
      "x-default": "/disclaimer",
    },
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function DisclaimerPage() {
  return (
    <main
      style={{
        maxWidth: 900,
        margin: "0 auto",
        padding: "70px 24px",
      }}
    >
      <h1
        style={{
          fontSize: "54px",
          fontWeight: 800,
          color: "#111827",
          lineHeight: 1.15,
        }}
      >
        Disclaimer
      </h1>

      <p
        style={{
          marginTop: "24px",
          color: "#6B7280",
          fontSize: "17px",
          lineHeight: 1.9,
        }}
      >
        Last updated: August 2026
      </p>

      <section style={{ marginTop: "60px" }}>
        <h2
          style={{
            fontSize: "30px",
            fontWeight: 700,
            color: "#111827",
          }}
        >
          General Information
        </h2>

        <p
          style={{
            marginTop: "20px",
            color: "#6B7280",
            lineHeight: 1.9,
          }}
        >
          BizTools provides free business calculators and related
          informational content for calculations such as profit, break-even
          analysis, pricing, sales targets, and return on investment.
        </p>

        <p
          style={{
            marginTop: "20px",
            color: "#6B7280",
            lineHeight: 1.9,
          }}
        >
          The content on this website is intended for general information,
          education, planning, and comparison purposes.
        </p>
      </section>

      <section style={{ marginTop: "50px" }}>
        <h2
          style={{
            fontSize: "30px",
            fontWeight: 700,
            color: "#111827",
          }}
        >
          No Professional Advice
        </h2>

        <p
          style={{
            marginTop: "20px",
            color: "#6B7280",
            lineHeight: 1.9,
          }}
        >
          Information and calculator results provided by BizTools do not
          constitute legal, tax, accounting, financial, investment, or other
          professional advice.
        </p>

        <p
          style={{
            marginTop: "20px",
            color: "#6B7280",
            lineHeight: 1.9,
          }}
        >
          For important transactions, contracts, tax matters, investments, or
          other significant decisions, consider consulting an appropriate
          qualified professional such as an accountant, tax adviser, attorney,
          or financial adviser.
        </p>
      </section>

      <section style={{ marginTop: "50px" }}>
        <h2
          style={{
            fontSize: "30px",
            fontWeight: 700,
            color: "#111827",
          }}
        >
          Calculator Results
        </h2>

        <p
          style={{
            marginTop: "20px",
            color: "#6B7280",
            lineHeight: 1.9,
          }}
        >
          BizTools aims to provide accurate calculations, but we do not
          guarantee the completeness, accuracy, timeliness, or suitability of
          every result for every situation.
        </p>

        <p
          style={{
            marginTop: "20px",
            color: "#6B7280",
            lineHeight: 1.9,
          }}
        >
          Actual results may differ depending on entered values, rounding
          methods, tax rates, cost classifications, and other assumptions or
          circumstances.
        </p>

        <p
          style={{
            marginTop: "20px",
            color: "#6B7280",
            lineHeight: 1.9,
          }}
        >
          Before relying on a calculation for an important decision, you
          should independently review and verify the relevant information.
        </p>
      </section>

      <section style={{ marginTop: "50px" }}>
        <h2
          style={{
            fontSize: "30px",
            fontWeight: 700,
            color: "#111827",
          }}
        >
          No Guarantee of Future Results
        </h2>

        <p
          style={{
            marginTop: "20px",
            color: "#6B7280",
            lineHeight: 1.9,
          }}
        >
          Profit, revenue, ROI, sales volume, and other results shown by the
          calculators are based on the assumptions and values entered by the
          user.
        </p>

        <p
          style={{
            marginTop: "20px",
            color: "#6B7280",
            lineHeight: 1.9,
          }}
        >
          Actual business outcomes may change because of market conditions,
          competition, demand, costs, taxes, currency movements, advertising
          performance, and many other factors.
        </p>

        <p
          style={{
            marginTop: "20px",
            color: "#6B7280",
            lineHeight: 1.9,
          }}
        >
          BizTools does not guarantee future profits, performance, investment
          returns, or other business results.
        </p>
      </section>

      <section style={{ marginTop: "50px" }}>
        <h2
          style={{
            fontSize: "30px",
            fontWeight: 700,
            color: "#111827",
          }}
        >
          User Responsibility
        </h2>

        <p
          style={{
            marginTop: "20px",
            color: "#6B7280",
            lineHeight: 1.9,
          }}
        >
          Decisions, transactions, investments, pricing choices, and other
          actions taken using information or calculator results from BizTools
          are the responsibility of the user.
        </p>

        <p
          style={{
            marginTop: "20px",
            color: "#6B7280",
            lineHeight: 1.9,
          }}
        >
          You should consider any additional information relevant to your
          circumstances before making a final decision.
        </p>
      </section>

      <section style={{ marginTop: "50px" }}>
        <h2
          style={{
            fontSize: "30px",
            fontWeight: 700,
            color: "#111827",
          }}
        >
          Limitation of Liability
        </h2>

        <p
          style={{
            marginTop: "20px",
            color: "#6B7280",
            lineHeight: 1.9,
          }}
        >
          To the extent permitted by applicable law, BizTools will not be
          liable for losses, damages, lost profits, or other adverse outcomes
          arising from or related to use of the website, inability to use the
          website, calculator results, or information provided on the site.
        </p>
      </section>

      <section style={{ marginTop: "50px" }}>
        <h2
          style={{
            fontSize: "30px",
            fontWeight: 700,
            color: "#111827",
          }}
        >
          External Links
        </h2>

        <p
          style={{
            marginTop: "20px",
            color: "#6B7280",
            lineHeight: 1.9,
          }}
        >
          BizTools may contain links to websites operated by third parties.
        </p>

        <p
          style={{
            marginTop: "20px",
            color: "#6B7280",
            lineHeight: 1.9,
          }}
        >
          External websites are responsible for their own content, services,
          accuracy, privacy practices, and other policies.
        </p>
      </section>

      <section style={{ marginTop: "50px" }}>
        <h2
          style={{
            fontSize: "30px",
            fontWeight: 700,
            color: "#111827",
          }}
        >
          Changes or Availability of the Service
        </h2>

        <p
          style={{
            marginTop: "20px",
            color: "#6B7280",
            lineHeight: 1.9,
          }}
        >
          BizTools may add, change, temporarily suspend, or discontinue
          calculators, content, or website functionality when necessary.
        </p>

        <p
          style={{
            marginTop: "20px",
            color: "#6B7280",
            lineHeight: 1.9,
          }}
        >
          The website may also become temporarily unavailable because of
          maintenance, technical problems, or other circumstances.
        </p>
      </section>

      <section style={{ marginTop: "50px" }}>
        <h2
          style={{
            fontSize: "30px",
            fontWeight: 700,
            color: "#111827",
          }}
        >
          Related Policies
        </h2>

        <p
          style={{
            marginTop: "20px",
            color: "#6B7280",
            lineHeight: 1.9,
          }}
        >
          For the conditions governing use of BizTools, please review our{" "}
          <Link
            href="/en/terms"
            style={{
              color: "#2563EB",
              fontWeight: 700,
              textDecoration: "none",
            }}
          >
            Terms of Use
          </Link>
          .
        </p>

        <p
          style={{
            marginTop: "20px",
            color: "#6B7280",
            lineHeight: 1.9,
          }}
        >
          For information about cookies, analytics, advertising services, and
          information handling, please review our{" "}
          <Link
            href="/en/privacy"
            style={{
              color: "#2563EB",
              fontWeight: 700,
              textDecoration: "none",
            }}
          >
            Privacy Policy
          </Link>
          .
        </p>
      </section>

      <section style={{ marginTop: "50px" }}>
        <h2
          style={{
            fontSize: "30px",
            fontWeight: 700,
            color: "#111827",
          }}
        >
          Contact
        </h2>

        <p
          style={{
            marginTop: "20px",
            color: "#6B7280",
            lineHeight: 1.9,
          }}
        >
          If you have questions about this Disclaimer, please contact us
          through the{" "}
          <Link
            href="/en/contact"
            style={{
              color: "#2563EB",
              fontWeight: 700,
              textDecoration: "none",
            }}
          >
            Contact page
          </Link>
          .
        </p>
      </section>
    </main>
  );
}