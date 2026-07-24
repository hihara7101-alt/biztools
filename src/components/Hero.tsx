import Link from "next/link";

type Props = {
  lang?: "en" | "ja";
};

export default function Hero({
  lang = "en",
}: Props) {
  const text =
    lang === "ja"
      ? {
          badge: "無料ビジネス計算ツール",

          title1: "ビジネスの数字を",

          title2: "もっとシンプルに",

          description:
            "利益計算・損益分岐点・価格設定・ROI・売上目標などを簡単に計算できる無料のビジネスツールです。",

          primaryButton: "計算ツールを見る →",

          secondaryButton: "利益計算を試す",

          primaryHref: "/ja/calculators",

          secondaryHref: "/ja/profit-calculator",

          features: [
            "✓ 完全無料",
            "✓ 登録不要",
            "✓ スマホ対応",
            "✓ 実務向け計算式",
          ],
        }
      : {
          badge: "Free Business Calculators",

          title1: "Business Tools",

          title2: "for Better Decisions",

          description:
            "Professional business tools that help entrepreneurs, freelancers and small business owners understand their numbers and make smarter business decisions.",

          primaryButton: "Browse Business Tools →",

          secondaryButton: "Try Profit Calculator",

          primaryHref: "/calculators",

          secondaryHref: "/profit-calculator",

          features: [
            "✓ Free Forever",
            "✓ No Registration",
            "✓ Mobile Friendly",
            "✓ Professional Business Formulas",
          ],
        };

  return (
    <section
      style={{
        padding: "90px 20px 70px",
        textAlign: "center",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "inline-block",
            padding: "8px 18px",
            borderRadius: "999px",
            background: "#DBEAFE",
            color: "#1D4ED8",
            fontWeight: 700,
            fontSize: "14px",
            marginBottom: "28px",
          }}
        >
          {text.badge}
        </div>

        <h1
          style={{
            fontSize: "64px",
            fontWeight: 800,
            color: "#111827",
            lineHeight: 1.1,
            margin: 0,
          }}
        >
          {text.title1}
          <br />
          {text.title2}
        </h1>

        <p
          style={{
            margin: "28px auto 0",
            maxWidth: "760px",
            fontSize: "22px",
            color: "#6B7280",
            lineHeight: 1.8,
          }}
        >
          {text.description}
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "18px",
            marginTop: "42px",
            flexWrap: "wrap",
          }}
        >
          <Link
            href={text.primaryHref}
            style={{
              background: "#2563EB",
              color: "#FFFFFF",
              textDecoration: "none",
              padding: "16px 36px",
              borderRadius: "12px",
              fontWeight: 700,
              fontSize: "17px",
            }}
          >
            {text.primaryButton}
          </Link>

          <Link
            href={text.secondaryHref}
            style={{
              background: "#FFFFFF",
              border: "1px solid #D1D5DB",
              color: "#111827",
              textDecoration: "none",
              padding: "16px 36px",
              borderRadius: "12px",
              fontWeight: 700,
              fontSize: "17px",
            }}
          >
            {text.secondaryButton}
          </Link>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "18px",
            marginTop: "46px",
            color: "#4B5563",
            fontSize: "15px",
            fontWeight: 600,
          }}
        >
          {text.features.map((feature) => (
            <span key={feature}>{feature}</span>
          ))}
        </div>
      </div>
    </section>
  );
}