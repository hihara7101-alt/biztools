import Link from "next/link";

export default function NotFound() {
  return (
    <main
      style={{
        maxWidth: "800px",
        margin: "0 auto",
        padding: "120px 24px",
        textAlign: "center",
      }}
    >
      <div
        style={{
          fontSize: "72px",
        }}
      >
        🔍
      </div>

      <h1
        style={{
          marginTop: "24px",
          fontSize: "52px",
          fontWeight: 800,
          color: "#111827",
        }}
      >
        404
      </h1>

      <h2
        style={{
          marginTop: "12px",
          fontSize: "32px",
          fontWeight: 700,
          color: "#111827",
        }}
      >
        Page Not Found
      </h2>

      <p
        style={{
          marginTop: "24px",
          color: "#6B7280",
          lineHeight: 1.8,
          fontSize: "18px",
          maxWidth: "600px",
          marginInline: "auto",
        }}
      >
        Sorry, the page you're looking for doesn't exist or may have
        been moved.
      </p>

      <Link
        href="/"
        style={{
          display: "inline-block",
          marginTop: "40px",
          background: "#2563EB",
          color: "#FFFFFF",
          padding: "16px 32px",
          borderRadius: "12px",
          textDecoration: "none",
          fontWeight: 700,
          fontSize: "17px",
        }}
      >
        ← Back to Home
      </Link>
    </main>
  );
}