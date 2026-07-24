import Link from "next/link";

type Props = {
  icon: string;
  title: string;
  description: string;
  href: string;
  lang?: "en" | "ja";
};

export default function FeatureCard({
  icon,
  title,
  description,
  href,
  lang = "en",
}: Props) {
  return (
    <Link
      href={href}
      style={{
        textDecoration: "none",
        color: "inherit",
      }}
    >
      <article
        style={{
          background: "#FFFFFF",
          border: "1px solid #E5E7EB",
          borderRadius: "20px",
          padding: "28px",
          height: "100%",
          transition: "all .25s ease",
          boxShadow: "0 4px 12px rgba(0,0,0,.04)",
        }}
      >
        <div
          style={{
            fontSize: "48px",
            marginBottom: "18px",
          }}
        >
          {icon}
        </div>

        <h3
          style={{
            fontSize: "24px",
            fontWeight: 700,
            color: "#111827",
            margin: 0,
          }}
        >
          {title}
        </h3>

        <p
          style={{
            marginTop: "16px",
            color: "#6B7280",
            lineHeight: 1.8,
            fontSize: "16px",
          }}
        >
          {description}
        </p>

        <div
          style={{
            marginTop: "28px",
            color: "#2563EB",
            fontWeight: 700,
          }}
        >
          {lang === "ja"
            ? "詳しく見る →"
            : "Learn More →"}
        </div>
      </article>
    </Link>
  );
}