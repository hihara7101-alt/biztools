import Link from "next/link";

type Props = {
  icon: string;
  title: string;
  description: string;
  bestFor: string;
  href: string;
  popular?: boolean;
  lang?: "en" | "ja";
};

export default function CalculatorCard({
  icon,
  title,
  description,
  bestFor,
  href,
  popular = false,
  lang = "en",
}: Props) {
  const text =
    lang === "ja"
      ? {
          bestFor: "おすすめ",
          open: "計算ツールを開く →",
          popular: "人気",
        }
      : {
          bestFor: "Best For",
          open: "Open Calculator →",
          popular: "MOST POPULAR",
        };

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
          border: popular
            ? "2px solid #2563EB"
            : "1px solid #E5E7EB",
          borderRadius: "22px",
          padding: "32px",
          height: "100%",
          position: "relative",
          transition: "all .25s ease",
          boxShadow: "0 4px 14px rgba(0,0,0,.04)",
        }}
      >
        {popular && (
          <div
            style={{
              position: "absolute",
              top: "18px",
              right: "18px",
              background: "#2563EB",
              color: "#FFFFFF",
              padding: "6px 12px",
              borderRadius: "999px",
              fontSize: "12px",
              fontWeight: 700,
            }}
          >
            {text.popular}
          </div>
        )}

        <div
          style={{
            fontSize: "54px",
            marginBottom: "20px",
          }}
        >
          {icon}
        </div>

        <h3
          style={{
            fontSize: "28px",
            fontWeight: 700,
            color: "#111827",
            margin: 0,
          }}
        >
          {title}
        </h3>

        <p
          style={{
            marginTop: "18px",
            color: "#6B7280",
            lineHeight: 1.8,
            fontSize: "17px",
          }}
        >
          {description}
        </p>

        <div
          style={{
            marginTop: "28px",
          }}
        >
          <div
            style={{
              fontWeight: 700,
              color: "#111827",
              marginBottom: "12px",
            }}
          >
            {text.bestFor}
          </div>

          <div
            style={{
              color: "#4B5563",
              lineHeight: 2,
              whiteSpace: "pre-line",
            }}
          >
            {bestFor}
          </div>
        </div>

        <div
          style={{
            marginTop: "34px",
            color: "#2563EB",
            fontWeight: 700,
            fontSize: "17px",
          }}
        >
          {text.open}
        </div>
      </article>
    </Link>
  );
}