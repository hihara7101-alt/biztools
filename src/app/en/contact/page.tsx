import type { Metadata } from "next";
import Link from "next/link";

import PageContainer from "@/components/PageContainer";

export const metadata: Metadata = {
  title: "Contact | BizTools",

  description:
    "Contact BizTools with questions, feedback, bug reports, or other site-related inquiries.",

  alternates: {
    canonical: "/en/contact",

    languages: {
      "ja-JP": "/contact",
      "en-US": "/en/contact",
      "x-default": "/contact",
    },
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function ContactPage() {
  return (
    <PageContainer title="Contact">
      <p>Thank you for using BizTools.</p>

      <p style={{ marginTop: 24 }}>
        If you have a question, feedback, or discover a problem with the
        site, please contact us using the email address below.
      </p>

      <h2
        style={{
          marginTop: 50,
          fontSize: 30,
          fontWeight: 700,
          color: "#111827",
        }}
      >
        What You Can Contact Us About
      </h2>

      <p style={{ marginTop: 20 }}>
        You can contact us about:
      </p>

      <ul
        style={{
          marginTop: 20,
          paddingLeft: 24,
          lineHeight: 2,
        }}
      >
        <li>Calculator errors or display problems</li>
        <li>Questions about how the calculators work</li>
        <li>Feedback or suggestions about BizTools</li>
        <li>Other questions related to the site</li>
      </ul>

      <h2
        style={{
          marginTop: 50,
          fontSize: 30,
          fontWeight: 700,
          color: "#111827",
        }}
      >
        Email
      </h2>

      <p style={{ marginTop: 20 }}>
        <a
          href="mailto:biztools.sites@gmail.com"
          style={{
            color: "#2563EB",
            textDecoration: "none",
            fontWeight: 700,
          }}
        >
          biztools.sites@gmail.com
        </a>
      </p>

      <p
        style={{
          marginTop: 16,
          color: "#6B7280",
        }}
      >
        When reporting a problem, please include the page or calculator
        involved and describe what happened as clearly as possible.
      </p>

      <h2
        style={{
          marginTop: 50,
          fontSize: 30,
          fontWeight: 700,
          color: "#111827",
        }}
      >
        Response Time
      </h2>

      <p style={{ marginTop: 20 }}>
        We generally aim to respond within 2–3 business days after reviewing
        your message. Some inquiries may take longer, and we may not be able
        to respond individually to every message.
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
        Information submitted by email is used for responding to your inquiry
        and for any necessary follow-up communication.
      </p>

      <p style={{ marginTop: 20 }}>
        For more information about how information is handled, please review
        our{" "}
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
        Questions About Calculator Results
      </h2>

      <p style={{ marginTop: 20 }}>
        BizTools can answer questions about the calculators and how they work,
        but we do not provide individualized tax, legal, accounting,
        investment, or other professional advice.
      </p>

      <p style={{ marginTop: 20 }}>
        Please also review our{" "}
        <Link
          href="/en/disclaimer"
          style={{
            color: "#2563EB",
            fontWeight: 700,
            textDecoration: "none",
          }}
        >
          Disclaimer
        </Link>{" "}
        for information about use of the site and calculator results.
      </p>
    </PageContainer>
  );
}