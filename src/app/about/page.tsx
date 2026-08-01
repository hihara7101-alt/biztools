import type { Metadata } from "next";
import PageContainer from "@/components/PageContainer";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn more about BizTools and our mission to provide free business calculators for entrepreneurs, freelancers, and small business owners.",
};

export default function AboutPage() {
  return (
    <PageContainer title="About BizTools">
      <p>
        BizTools was created to make business calculations simple, accurate,
        and accessible for everyone.
      </p>

      <p style={{ marginTop: 24 }}>
        Whether you're launching your first business, running a small company,
        freelancing, or managing an online store, understanding your numbers is
        one of the most important parts of making better decisions.
      </p>

      <p style={{ marginTop: 24 }}>
        Our calculators are designed to help you quickly calculate profits,
        break-even points, pricing, sales targets, return on investment (ROI),
        and other essential business metrics without needing complicated
        spreadsheets.
      </p>

      <h2
        style={{
          marginTop: 50,
          fontSize: 30,
          fontWeight: 700,
          color: "#111827",
        }}
      >
        Our Mission
      </h2>

      <p style={{ marginTop: 20 }}>
        Our mission is simple:
      </p>

      <p style={{ marginTop: 20 }}>
        To provide free, reliable, and easy-to-use business calculators that
        help entrepreneurs make smarter financial decisions.
      </p>

      <h2
        style={{
          marginTop: 50,
          fontSize: 30,
          fontWeight: 700,
          color: "#111827",
        }}
      >
        Why BizTools?
      </h2>

      <ul
        style={{
          marginTop: 20,
          paddingLeft: 24,
          lineHeight: 2,
        }}
      >
        <li>Free to use</li>
        <li>No registration required</li>
        <li>Designed for entrepreneurs and small businesses</li>
        <li>Available in English and Japanese</li>
        <li>Simple, fast, and accurate calculations</li>
      </ul>

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
        If you have suggestions, discover an error, or would like to recommend
        a new calculator, we'd love to hear from you.
      </p>

      <p style={{ marginTop: 20 }}>
        A dedicated contact page is available from the navigation menu.
      </p>
    </PageContainer>
  );
}