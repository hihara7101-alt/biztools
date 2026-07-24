import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Terms & Conditions",
  description:
    "Read the Terms & Conditions governing your use of BizTools and its free business calculators.",
  path: "/terms",
  lang: "en",
});

export default function TermsPage() {
  return (
    <main
      style={{
        maxWidth: "900px",
        margin: "60px auto",
        padding: "0 24px",
      }}
    >
      <h1
        style={{
          fontSize: "44px",
          fontWeight: 800,
          color: "#111827",
        }}
      >
        Terms & Conditions
      </h1>

      <p
        style={{
          marginTop: "24px",
          lineHeight: 1.9,
          color: "#4B5563",
        }}
      >
        Welcome to BizTools. By accessing and using this website, you
        agree to these Terms & Conditions. If you do not agree with
        these terms, please do not use this website.
      </p>

      <h2
        style={{
          marginTop: "50px",
          fontSize: "30px",
          fontWeight: 700,
        }}
      >
        Use of the Website
      </h2>

      <p
        style={{
          marginTop: "18px",
          lineHeight: 1.9,
          color: "#4B5563",
        }}
      >
        BizTools provides free online business calculators and
        educational information. You may use this website for lawful
        personal or business purposes only.
      </p>

      <h2
        style={{
          marginTop: "50px",
          fontSize: "30px",
          fontWeight: 700,
        }}
      >
        No Professional Advice
      </h2>

      <p
        style={{
          marginTop: "18px",
          lineHeight: 1.9,
          color: "#4B5563",
        }}
      >
        The calculators and information provided on BizTools are for
        informational purposes only and should not be considered legal,
        accounting, tax, financial, or investment advice.
      </p>

      <h2
        style={{
          marginTop: "50px",
          fontSize: "30px",
          fontWeight: 700,
        }}
      >
        Accuracy
      </h2>

      <p
        style={{
          marginTop: "18px",
          lineHeight: 1.9,
          color: "#4B5563",
        }}
      >
        We strive to provide accurate calculations and information,
        but we cannot guarantee that all calculations are free of
        errors or suitable for every situation.
      </p>

      <h2
        style={{
          marginTop: "50px",
          fontSize: "30px",
          fontWeight: 700,
        }}
      >
        Intellectual Property
      </h2>

      <p
        style={{
          marginTop: "18px",
          lineHeight: 1.9,
          color: "#4B5563",
        }}
      >
        All content on BizTools, including text, design, graphics,
        logos, and calculators, is protected by applicable copyright
        and intellectual property laws unless otherwise stated.
      </p>

      <h2
        style={{
          marginTop: "50px",
          fontSize: "30px",
          fontWeight: 700,
        }}
      >
        Changes
      </h2>

      <p
        style={{
          marginTop: "18px",
          lineHeight: 1.9,
          color: "#4B5563",
        }}
      >
        We may update these Terms & Conditions at any time without
        prior notice. Continued use of the website constitutes
        acceptance of the updated terms.
      </p>

      <h2
        style={{
          marginTop: "50px",
          fontSize: "30px",
          fontWeight: 700,
        }}
      >
        Contact
      </h2>

      <p
        style={{
          marginTop: "18px",
          lineHeight: 1.9,
          color: "#4B5563",
        }}
      >
        If you have any questions regarding these Terms &
        Conditions, please contact us through the Contact page.
      </p>
    </main>
  );
}