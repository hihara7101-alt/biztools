import type { Metadata } from "next";
import Link from "next/link";

import PageContainer from "@/components/PageContainer";

export const metadata: Metadata = {
  title: "Terms of Use | BizTools",

  description:
    "Terms governing the use of BizTools, including calculator use, user responsibilities, prohibited activities, intellectual property, and disclaimers.",

  alternates: {
    canonical: "/en/terms",

    languages: {
      "ja-JP": "/terms",
      "en-US": "/en/terms",
      "x-default": "/terms",
    },
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsPage() {
  return (
    <PageContainer title="Terms of Use">
      <p>
        These Terms of Use govern your use of the BizTools website,
        calculators, and related content.
      </p>

      <p style={{ marginTop: 24 }}>
        By using BizTools, you agree to these Terms of Use.
      </p>

      <h2
        style={{
          marginTop: 50,
          fontSize: 30,
          fontWeight: 700,
          color: "#111827",
        }}
      >
        About the Service
      </h2>

      <p style={{ marginTop: 20 }}>
        BizTools provides business calculators and related informational
        content for calculations including profit, break-even analysis,
        pricing, sales targets, and return on investment (ROI).
      </p>

      <p style={{ marginTop: 20 }}>
        The basic calculators currently available on BizTools are generally
        provided free of charge.
      </p>

      <h2
        style={{
          marginTop: 50,
          fontSize: 30,
          fontWeight: 700,
          color: "#111827",
        }}
      >
        Calculator Results
      </h2>

      <p style={{ marginTop: 20 }}>
        BizTools aims to provide accurate calculations and useful information,
        but we do not guarantee that all calculations, results, or information
        will always be complete, accurate, or current.
      </p>

      <p style={{ marginTop: 20 }}>
        Actual results may differ depending on the information entered,
        rounding methods, tax rates, classification of costs, and other
        assumptions or circumstances.
      </p>

      <h2
        style={{
          marginTop: 50,
          fontSize: 30,
          fontWeight: 700,
          color: "#111827",
        }}
      >
        No Professional Advice
      </h2>

      <p style={{ marginTop: 20 }}>
        Calculations and information provided by BizTools are intended for
        general informational, planning, and educational purposes.
      </p>

      <p style={{ marginTop: 20 }}>
        Nothing on this website constitutes legal, tax, accounting, financial,
        investment, or other professional advice.
      </p>

      <p style={{ marginTop: 20 }}>
        For important decisions, you should consult an appropriate qualified
        professional, such as an accountant, tax professional, attorney, or
        financial adviser when necessary.
      </p>

      <h2
        style={{
          marginTop: 50,
          fontSize: 30,
          fontWeight: 700,
          color: "#111827",
        }}
      >
        User Responsibility
      </h2>

      <p style={{ marginTop: 20 }}>
        You are responsible for decisions and actions taken based on
        calculations or information provided through BizTools.
      </p>

      <p style={{ marginTop: 20 }}>
        Important transactions, contracts, investments, pricing decisions,
        tax matters, and similar decisions should be independently reviewed
        and verified before action is taken.
      </p>

      <h2
        style={{
          marginTop: 50,
          fontSize: 30,
          fontWeight: 700,
          color: "#111827",
        }}
      >
        Prohibited Activities
      </h2>

      <p style={{ marginTop: 20 }}>
        When using BizTools, you must not:
      </p>

      <ul
        style={{
          marginTop: 20,
          paddingLeft: 24,
          lineHeight: 2,
        }}
      >
        <li>Use the website in violation of applicable laws or regulations</li>
        <li>Interfere with or disrupt the operation of the website</li>
        <li>
          Attempt unauthorized access or place an unreasonable load on the
          website or its systems
        </li>
        <li>Infringe the rights of other users or third parties</li>
        <li>Use the website for fraudulent, abusive, or unlawful purposes</li>
      </ul>

      <h2
        style={{
          marginTop: 50,
          fontSize: 30,
          fontWeight: 700,
          color: "#111827",
        }}
      >
        Intellectual Property
      </h2>

      <p style={{ marginTop: 20 }}>
        Rights relating to original text, design, layout, branding, and other
        original content available through BizTools belong to BizTools or the
        applicable rights holders.
      </p>

      <p style={{ marginTop: 20 }}>
        Except where permitted by applicable law, you may not reproduce,
        republish, redistribute, or otherwise use protected content without
        permission from the applicable rights holder.
      </p>

      <h2
        style={{
          marginTop: 50,
          fontSize: 30,
          fontWeight: 700,
          color: "#111827",
        }}
      >
        Changes or Suspension of the Service
      </h2>

      <p style={{ marginTop: 20 }}>
        BizTools may add, modify, remove, or discontinue calculators,
        functionality, or content when necessary.
      </p>

      <p style={{ marginTop: 20 }}>
        The website may also become temporarily unavailable because of
        maintenance, technical problems, or other circumstances.
      </p>

      <h2
        style={{
          marginTop: 50,
          fontSize: 30,
          fontWeight: 700,
          color: "#111827",
        }}
      >
        Third-Party Services and External Links
      </h2>

      <p style={{ marginTop: 20 }}>
        BizTools may use services provided by third parties and may contain
        links to external websites.
      </p>

      <p style={{ marginTop: 20 }}>
        Third-party websites and services are governed by their own terms,
        policies, and practices. BizTools does not control the content or
        operation of external websites.
      </p>

      <h2
        style={{
          marginTop: 50,
          fontSize: 30,
          fontWeight: 700,
          color: "#111827",
        }}
      >
        Disclaimer
      </h2>

      <p style={{ marginTop: 20 }}>
        For additional information regarding limitations and the use of
        calculator results, please review our{" "}
        <Link
          href="/en/disclaimer"
          style={{
            color: "#2563EB",
            fontWeight: 700,
            textDecoration: "none",
          }}
        >
          Disclaimer
        </Link>
        .
      </p>

      <h2
        style={{
          marginTop: 50,
          fontSize: 30,
          fontWeight: 700,
          color: "#111827",
        }}
      >
        Privacy
      </h2>

      <p style={{ marginTop: 20 }}>
        Information about cookies, analytics, advertising services, and the
        handling of information is available in our{" "}
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

      <h2
        style={{
          marginTop: 50,
          fontSize: 30,
          fontWeight: 700,
          color: "#111827",
        }}
      >
        Changes to These Terms
      </h2>

      <p style={{ marginTop: 20 }}>
        BizTools may update these Terms of Use when necessary.
      </p>

      <p style={{ marginTop: 20 }}>
        Updated Terms of Use become effective when they are published on this
        page.
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
        If you have questions about these Terms of Use, please contact us
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

      <p
        style={{
          marginTop: 40,
          color: "#6B7280",
        }}
      >
        Last updated: August 2026
      </p>
    </PageContainer>
  );
}