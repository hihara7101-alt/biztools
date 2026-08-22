import Link from "next/link";

export default function HeroJa() {
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
        <h1
          style={{
            fontSize: "60px",
            fontWeight: 800,
            color: "#111827",
            lineHeight: 1.2,
          }}
        >
          ビジネスを
          <br />
          数字で強くする
        </h1>

        <p
          style={{
            margin: "28px auto 0",
            maxWidth: "760px",
            fontSize: "22px",
            color: "#6B7280",
            lineHeight: 1.9,
          }}
        >
          利益・損益分岐点・価格設定・ROI・売上目標など、
          起業家・個人事業主・中小企業のための
          無料ビジネス計算ツールです。
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
            href="/calculators"
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
            計算ツールを見る →
          </Link>

          <Link
            href="/profit-calculator"
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
            利益計算を試す
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
          <span>✓ 完全無料</span>

          <span>✓ 登録不要</span>

          <span>✓ スマホ対応</span>

          <span>✓ ビジネス向け計算式</span>
        </div>
      </div>
    </section>
  );
}