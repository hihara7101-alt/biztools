import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer | BizTools",
  description:
    "Read the BizTools disclaimer regarding the use of our calculators and business information.",
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
        Last updated: June 2026
      </p>

      <section style={{ marginTop: "60px" }}>
        <h2 style={{ fontSize: "30px", fontWeight: 700 }}>
          General Information
        </h2>

        <p
          style={{
            marginTop: "20px",
            color: "#6B7280",
            lineHeight: 1.9,
          }}
        >
          BizTools provides free business calculators and educational
          information for general informational purposes only.
        </p>
      </section>

      <section style={{ marginTop: "50px" }}>
        <h2 style={{ fontSize: "30px", fontWeight: 700 }}>
          No Professional Advice
        </h2>

        <p
          style={{
            marginTop: "20px",
            color: "#6B7280",
            lineHeight: 1.9,
          }}
        >
          The information provided on this website should not be considered
          financial, legal, accounting, tax, or investment advice.
          Always consult a qualified professional before making important
          business or financial decisions.
        </p>
      </section>

      <section style={{ marginTop: "50px" }}>
        <h2 style={{ fontSize: "30px", fontWeight: 700 }}>
          Calculator Accuracy
        </h2>

        <p
          style={{
            marginTop: "20px",
            color: "#6B7280",
            lineHeight: 1.9,
          }}
        >
          Although we strive to ensure our calculators produce accurate
          results, we do not guarantee that all calculations are free from
          errors or suitable for every business situation.
        </p>
      </section>

      <section style={{ marginTop: "50px" }}>
        <h2 style={{ fontSize: "30px", fontWeight: 700 }}>
          Limitation of Liability
        </h2>

        <p
          style={{
            marginTop: "20px",
            color: "#6B7280",
            lineHeight: 1.9,
          }}
        >
          BizTools shall not be liable for any loss, damages, or business
          decisions resulting from the use of this website or its
          calculators.
        </p>
      </section>

      <section style={{ marginTop: "50px" }}>
        <h2 style={{ fontSize: "30px", fontWeight: 700 }}>
          External Links
        </h2>

        <p
          style={{
            marginTop: "20px",
            color: "#6B7280",
            lineHeight: 1.9,
          }}
        >
          This website may contain links to third-party websites. We are not
          responsible for the content, accuracy, or privacy practices of
          those websites.
        </p>
      </section>
    </main>
  );
}