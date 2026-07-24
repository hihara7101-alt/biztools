import Link from "next/link";

export default function HomeCTA() {
  return (
    <section
      style={{
        marginTop: "100px",
        marginBottom: "40px",
      }}
    >
      <div
        style={{
          background: "#2563EB",
          borderRadius: "24px",
          padding: "60px 40px",
          textAlign: "center",
          color: "#FFFFFF",
        }}
      >
        <h2
          style={{
            fontSize: "42px",
            fontWeight: 800,
            lineHeight: 1.2,
          }}
        >
          Ready to make better business decisions?
        </h2>

        <p
          style={{
            marginTop: "20px",
            maxWidth: "720px",
            marginInline: "auto",
            fontSize: "20px",
            lineHeight: 1.8,
            opacity: 0.95,
          }}
        >
          Explore our free business calculators for profit, pricing,
          ROI, break-even analysis and sales planning.
        </p>

        <Link
          href="/calculators"
          style={{
            display: "inline-block",
            marginTop: "36px",
            background: "#FFFFFF",
            color: "#2563EB",
            textDecoration: "none",
            padding: "16px 36px",
            borderRadius: "12px",
            fontWeight: 700,
            fontSize: "18px",
          }}
        >
          Browse All Calculators →
        </Link>
      </div>
    </section>
  );
}