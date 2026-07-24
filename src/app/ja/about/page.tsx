import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | BizTools",
  description:
    "Learn about BizTools and our mission to provide free business calculators for entrepreneurs, freelancers, and small businesses.",
};

export default function AboutPage() {
  return (
    <main
      style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "70px 24px",
      }}
    >
      <h1
        style={{
          fontSize: "52px",
          fontWeight: 800,
          color: "#111827",
        }}
      >
        About BizTools
      </h1>

      <p
        style={{
          marginTop: "30px",
          fontSize: "20px",
          lineHeight: 1.8,
          color: "#6B7280",
        }}
      >
        BizTools is a collection of free business calculators designed to help
        entrepreneurs, freelancers, online sellers, and small business owners
        make smarter financial decisions.
      </p>

      <section style={{ marginTop: "60px" }}>
        <h2
          style={{
            fontSize: "32px",
            fontWeight: 700,
            color: "#111827",
          }}
        >
          Our Mission
        </h2>

        <p
          style={{
            marginTop: "20px",
            fontSize: "17px",
            lineHeight: 1.9,
            color: "#6B7280",
          }}
        >
          Running a business requires making decisions based on numbers. Our
          mission is to make financial calculations simple, fast, and accessible
          to everyone without requiring spreadsheets or expensive software.
        </p>
      </section>

      <section style={{ marginTop: "60px" }}>
        <h2
          style={{
            fontSize: "32px",
            fontWeight: 700,
            color: "#111827",
          }}
        >
          Who BizTools Is For
        </h2>

        <ul
          style={{
            marginTop: "20px",
            paddingLeft: "22px",
            lineHeight: 2,
            color: "#6B7280",
            fontSize: "17px",
          }}
        >
          <li>Entrepreneurs</li>
          <li>Freelancers</li>
          <li>Small business owners</li>
          <li>Online sellers</li>
          <li>Consultants</li>
          <li>Students learning business and finance</li>
        </ul>
      </section>

      <section style={{ marginTop: "60px" }}>
        <h2
          style={{
            fontSize: "32px",
            fontWeight: 700,
            color: "#111827",
          }}
        >
          Why Use BizTools?
        </h2>

        <ul
          style={{
            marginTop: "20px",
            paddingLeft: "22px",
            lineHeight: 2,
            color: "#6B7280",
            fontSize: "17px",
          }}
        >
          <li>100% free</li>
          <li>No registration required</li>
          <li>Instant calculations</li>
          <li>Mobile friendly</li>
          <li>English and Japanese support</li>
          <li>Designed specifically for business decisions</li>
        </ul>
      </section>
    </main>
  );
}