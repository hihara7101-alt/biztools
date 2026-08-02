import type { Metadata } from "next";
import PageContainer from "@/components/PageContainer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for BizTools.",
};

export default function PrivacyPage() {
  return (
    <PageContainer title="Privacy Policy">
      <p>
        Your privacy is important to us. This Privacy Policy explains how
        BizTools collects, uses, and protects information when you use our
        website.
      </p>

      <h2 style={{ marginTop: 50, fontSize: 30, fontWeight: 700 }}>
        Information We Collect
      </h2>

      <p style={{ marginTop: 20 }}>
        BizTools does not require users to create an account or provide personal
        information to use our calculators.
      </p>

      <p style={{ marginTop: 20 }}>
        Like most websites, we may collect anonymous usage data such as browser
        type, device information, and pages visited through analytics services.
      </p>

      <h2 style={{ marginTop: 50, fontSize: 30, fontWeight: 700 }}>
        Cookies
      </h2>

      <p style={{ marginTop: 20 }}>
        This website may use cookies to improve user experience, analyze traffic,
        and support advertising services such as Google AdSense.
      </p>

      <h2 style={{ marginTop: 50, fontSize: 30, fontWeight: 700 }}>
        Third-Party Services
      </h2>

      <p style={{ marginTop: 20 }}>
        BizTools may use third-party services including Google Analytics and
        Google AdSense. These services may collect information according to
        their own privacy policies.
      </p>

      <h2 style={{ marginTop: 50, fontSize: 30, fontWeight: 700 }}>
        Changes
      </h2>

      <p style={{ marginTop: 20 }}>
        This Privacy Policy may be updated from time to time without prior
        notice.
      </p>

      <p style={{ marginTop: 40 }}>
        Last updated: July 2026
      </p>
    </PageContainer>
  );
}