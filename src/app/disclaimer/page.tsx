import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Disclaimer",
  description:
    "Read the disclaimer for BizTools and understand the limitations of the information and calculators provided on this website.",
  path: "/disclaimer",
  lang: "en",
});

export default function DisclaimerPage() {
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
        Disclaimer
      </h1>

      <p
        style={{
          marginTop: "24px",
          lineHeight: 1.9,
          color: "#4B5563",
        }}
      >
        The information and calculators provided on BizTools are for
        general informational and educational purposes only.
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
        Nothing on this website should be considered legal,
        accounting, tax, financial, or investment advice.
        You should consult an appropriate professional before
        making important business or financial decisions.
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
        While we strive to provide accurate calculations and
        up-to-date information, BizTools makes no warranties
        regarding the completeness, reliability, or accuracy of
        any information provided.
      </p>

      <h2
        style={{
          marginTop: "50px",
          fontSize: "30px",
          fontWeight: 700,
        }}
      >
        Limitation of Liability
      </h2>

      <p
        style={{
          marginTop: "18px",
          lineHeight: 1.9,
          color: "#4B5563",
        }}
      >
        BizTools shall not be liable for any direct, indirect,
        incidental, or consequential damages resulting from the
        use of this website or reliance on any information
        provided.
      </p>

      <h2
        style={{
          marginTop: "50px",
          fontSize: "30px",
          fontWeight: 700,
        }}
      >
        External Links
      </h2>

      <p
        style={{
          marginTop: "18px",
          lineHeight: 1.9,
          color: "#4B5563",
        }}
      >
        This website may contain links to third-party websites.
        We are not responsible for the content or privacy
        practices of those websites.
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
        If you have questions regarding this Disclaimer,
        please contact us through our Contact page.
      </p>
    </main>
  );
}