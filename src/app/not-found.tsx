import Link from "next/link";

export default function NotFound() {
  return (
    <main
      style={{
        maxWidth: 900,
        margin: "0 auto",
        padding: "100px 24px",
        textAlign: "center",
      }}
    >
      <h1
        style={{
          fontSize: "96px",
          fontWeight: 800,
          color: "#2563EB",
          marginBottom: "20px",
        }}
      >
        404
      </h1>

      <h2
        style={{
          fontSize: "42px",
          fontWeight: 800,
          color: "#111827",
        }}
      >
        Page Not Found
      </h2>

      <p
        style={{
          marginTop: "24px",
          color: "#6B7280",
          fontSize: "18px",
          lineHeight: 1.8,
          maxWidth: "620px",
          marginInline: "auto",
        }}
      >
        Sorry, the page you're looking for doesn't exist or may have been
        moved.
      </p>

      <div
        style={{
          marginTop: "50px",
          display: "flex",
          justifyContent: "center",
          gap: "18px",
          flexWrap: "wrap",
        }}
      >
        <Link
          href="/"
          style={{
            background: "#2563EB",
            color: "#fff",
            padding: "14px 28px",
            borderRadius: "12px",
            textDecoration: "none",
            fontWeight: 700,
          }}
        >
          Home
        </Link>

        <Link
          href="/profit-calculator"
          style={{
            background: "#F3F4F6",
            color: "#111827",
            padding: "14px 28px",
            borderRadius: "12px",
            textDecoration: "none",
            fontWeight: 700,
          }}
        >
          Profit Calculator
        </Link>

        <Link
          href="/break-even-calculator"
          style={{
            background: "#F3F4F6",
            color: "#111827",
            padding: "14px 28px",
            borderRadius: "12px",
            textDecoration: "none",
            fontWeight: 700,
          }}
        >
          Break-even Calculator
        </Link>
      </div>
    </main>
  );
}