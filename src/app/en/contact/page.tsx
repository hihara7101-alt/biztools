import type { Metadata } from "next";
import PageContainer from "@/components/PageContainer";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact BizTools with questions, feedback, feature requests, or bug reports.",
};

export default function ContactPage() {
  return (
    <PageContainer title="Contact">
      <p>Thank you for using BizTools.</p>

      <p style={{ marginTop: 24 }}>
        Please contact us with any questions, feedback, feature requests,
        bug reports, or suggestions for new calculators.
      </p>

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
            fontWeight: 600,
          }}
        >
          biztools.sites@gmail.com
        </a>
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
        We normally respond within 2–3 business days after reviewing your
        message.
      </p>

      <h2
        style={{
          marginTop: 50,
          fontSize: 30,
          fontWeight: 700,
          color: "#111827",
        }}
      >
        Suggestions
      </h2>

      <p style={{ marginTop: 20 }}>
        Suggestions for new business calculators are always welcome.
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
        Information submitted by email will only be used to respond to your
        inquiry.
      </p>
    </PageContainer>
  );
}