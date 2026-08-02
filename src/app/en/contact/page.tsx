import type { Metadata } from "next";
import PageContainer from "@/components/PageContainer";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact BizTools with questions, suggestions, feedback, or calculator requests.",
};

export default function ContactPage() {
  return (
    <PageContainer title="Contact">
      <p>
        We'd love to hear from you.
      </p>

      <p style={{ marginTop: 24 }}>
        Whether you have a question, found an error, want to suggest a new
        calculator, or simply have feedback about BizTools, feel free to get
        in touch.
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
        contact@biztools.site
      </p>

      <p style={{ marginTop: 20 }}>
        <strong>Note:</strong> This email address is temporary and will be
        updated after the official BizTools email is created.
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
        We aim to respond to all enquiries within 2–3 business days.
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
        We're continually improving BizTools. If there's a business calculator
        you'd like to see added, we'd be happy to hear your ideas.
      </p>
    </PageContainer>
  );
}