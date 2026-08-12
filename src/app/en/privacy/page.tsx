import type { Metadata } from "next";
import Link from "next/link";

import PageContainer from "@/components/PageContainer";

export const metadata: Metadata = {
  title: "Privacy Policy | BizTools",

  description:
    "Learn how BizTools handles information, cookies, Google Analytics, Google AdSense, and other third-party services.",

  alternates: {
    canonical: "/en/privacy",

    languages: {
      "ja-JP": "/privacy",
      "en-US": "/en/privacy",
      "x-default": "/privacy",
    },
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPage() {
  return (
    <PageContainer title="Privacy Policy">
      <p>
        BizTools respects the privacy of its users and considers the
        appropriate handling of information an important part of operating
        this website.
      </p>

      <p style={{ marginTop: 24 }}>
        This Privacy Policy explains the types of information that may be
        collected when you use BizTools, how that information may be used,
        and how cookies and third-party services may be involved.
      </p>

      <h2
        style={{
          marginTop: 50,
          fontSize: 30,
          fontWeight: 700,
          color: "#111827",
        }}
      >
        Information We Collect
      </h2>

      <p style={{ marginTop: 20 }}>
        You do not need to create an account or provide your name, address,
        phone number, or other personal information to use the BizTools
        calculators.
      </p>

      <p style={{ marginTop: 20 }}>
        Values entered into the calculators are used to generate calculation
        results in your browser. The calculators are not designed to associate
        these values with your personal identity or store them for that
        purpose.
      </p>

      <p style={{ marginTop: 20 }}>
        To understand how the website is used, analytics services may collect
        information such as your IP address, browser or device type, pages
        visited, date and time of access, and referring source.
      </p>

      <h2
        style={{
          marginTop: 50,
          fontSize: 30,
          fontWeight: 700,
          color: "#111827",
        }}
      >
        Information Provided When Contacting Us
      </h2>

      <p style={{ marginTop: 20 }}>
        If you contact BizTools by email, we may receive your email address and
        any information you include in your message.
      </p>

      <p style={{ marginTop: 20 }}>
        This information may be used to respond to your inquiry and for
        necessary follow-up communication.
      </p>

      <h2
        style={{
          marginTop: 50,
          fontSize: 30,
          fontWeight: 700,
          color: "#111827",
        }}
      >
        Cookies
      </h2>

      <p style={{ marginTop: 20 }}>
        BizTools may use cookies and similar technologies for website
        functionality, analytics, advertising, and related purposes.
      </p>

      <p style={{ marginTop: 20 }}>
        Cookies are small pieces of information stored by websites in your
        browser. They may be used to understand website usage, support
        advertising, and provide related functionality.
      </p>

      <p style={{ marginTop: 20 }}>
        You can control or disable cookies through your browser settings.
        Disabling certain cookies may affect the functionality of some
        websites or services.
      </p>

      <h2
        style={{
          marginTop: 50,
          fontSize: 30,
          fontWeight: 700,
          color: "#111827",
        }}
      >
        Google Analytics
      </h2>

      <p style={{ marginTop: 20 }}>
        BizTools may use Google Analytics to understand how visitors use the
        website and to help improve its content and usability.
      </p>

      <p style={{ marginTop: 20 }}>
        Google Analytics may use cookies and similar technologies to collect
        information about website usage. Information collected through Google
        Analytics is handled according to Google's applicable policies.
      </p>

      <h2
        style={{
          marginTop: 50,
          fontSize: 30,
          fontWeight: 700,
          color: "#111827",
        }}
      >
        Google AdSense and Advertising
      </h2>

      <p style={{ marginTop: 20 }}>
        BizTools may use third-party advertising services such as Google
        AdSense.
      </p>

      <p style={{ marginTop: 20 }}>
        Third-party vendors, including Google, may place or read cookies in
        your browser or use other technologies for purposes such as serving
        advertisements, measuring advertising performance, and preventing
        fraud or abuse.
      </p>

      <p style={{ marginTop: 20 }}>
        Advertising may be adjusted based on information such as website
        activity or previous browsing activity, where permitted and
        applicable.
      </p>

      <h2
        style={{
          marginTop: 50,
          fontSize: 30,
          fontWeight: 700,
          color: "#111827",
        }}
      >
        Consent Management
      </h2>

      <p style={{ marginTop: 20 }}>
        Depending on your location, consent may be required before certain
        cookies or advertising-related technologies can be used.
      </p>

      <p style={{ marginTop: 20 }}>
        Where required, BizTools may use a Google-certified consent management
        platform (CMP) or similar consent mechanism to provide choices
        regarding cookies and advertising.
      </p>

      <h2
        style={{
          marginTop: 50,
          fontSize: 30,
          fontWeight: 700,
          color: "#111827",
        }}
      >
        Third-Party Services
      </h2>

      <p style={{ marginTop: 20 }}>
        Third-party services used by BizTools may process information according
        to their own privacy policies and terms.
      </p>

      <p style={{ marginTop: 20 }}>
        For information about how Google uses information from websites and
        applications that use its services, please refer to Google's published
        privacy information.
      </p>

      <h2
        style={{
          marginTop: 50,
          fontSize: 30,
          fontWeight: 700,
          color: "#111827",
        }}
      >
        External Links
      </h2>

      <p style={{ marginTop: 20 }}>
        BizTools may contain links to external websites. We are not responsible
        for the privacy practices of external websites. Please review the
        privacy policies of those sites when visiting them.
      </p>

      <h2
        style={{
          marginTop: 50,
          fontSize: 30,
          fontWeight: 700,
          color: "#111827",
        }}
      >
        Changes to This Privacy Policy
      </h2>

      <p style={{ marginTop: 20 }}>
        This Privacy Policy may be updated when necessary to reflect changes
        in laws, website functionality, or third-party services used by
        BizTools.
      </p>

      <p style={{ marginTop: 20 }}>
        Material changes may be communicated through this page when
        appropriate.
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
        If you have questions about this Privacy Policy, please contact us
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