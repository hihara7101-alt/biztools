import type { Metadata } from "next";
import PageContainer from "@/components/PageContainer";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms of Use for BizTools.",
};

export default function TermsPage() {
  return (
    <PageContainer title="Terms of Use">
      <p>
        By using BizTools, you agree to these Terms of Use.
      </p>

      <h2 style={{ marginTop: 50, fontSize: 30, fontWeight: 700 }}>
        Purpose
      </h2>

      <p style={{ marginTop: 20 }}>
        BizTools provides free business calculators and educational
        information to help users perform financial and business
        calculations.
      </p>

      <h2 style={{ marginTop: 50, fontSize: 30, fontWeight: 700 }}>
        No Professional Advice
      </h2>

      <p style={{ marginTop: 20 }}>
        The information provided on this website is for general
        informational purposes only. It should not be considered legal,
        tax, accounting, financial, or professional advice.
      </p>

      <h2 style={{ marginTop: 50, fontSize: 30, fontWeight: 700 }}>
        User Responsibility
      </h2>

      <p style={{ marginTop: 20 }}>
        Users are responsible for verifying any calculations before
        making financial or business decisions.
      </p>

      <h2 style={{ marginTop: 50, fontSize: 30, fontWeight: 700 }}>
        Changes
      </h2>

      <p style={{ marginTop: 20 }}>
        BizTools reserves the right to modify these Terms of Use at any
        time without prior notice.
      </p>

      <p style={{ marginTop: 40 }}>
        Last updated: July 2026
      </p>
    </PageContainer>
  );
}