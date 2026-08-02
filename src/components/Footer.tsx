"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();

  const isEnglish =
    pathname === "/en" || pathname.startsWith("/en/");

  const p = (path: string) =>
    isEnglish
      ? `/en${path === "/" ? "" : path}`
      : path;

  return (
    <footer
      style={{
        marginTop: "120px",
        borderTop: "1px solid #E5E7EB",
        background: "#F9FAFB",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "60px 24px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr",
            gap: "50px",
          }}
        >
          <div>
            <h2
              style={{
                fontSize: "28px",
                fontWeight: 800,
              }}
            >
              BizTools
            </h2>

            <p
              style={{
                marginTop: "20px",
                color: "#6B7280",
                lineHeight: 1.8,
              }}
            >
              {isEnglish
                ? "Free business calculators for entrepreneurs, freelancers and small businesses."
                : "起業家・フリーランス・中小企業向けの無料ビジネス計算ツール。"}
            </p>
          </div>

          <div>
            <h3>
              {isEnglish ? "Calculators" : "計算ツール"}
            </h3>

            <div
              style={{
                marginTop: "20px",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              <Link href={p("/profit-calculator")}>
                {isEnglish ? "Profit Calculator" : "利益計算ツール"}
              </Link>

              <Link href={p("/break-even-calculator")}>
                {isEnglish
                  ? "Break-even Calculator"
                  : "損益分岐点計算ツール"}
              </Link>

              <Link href={p("/pricing-calculator")}>
                {isEnglish ? "Pricing Calculator" : "価格設定ツール"}
              </Link>

              <Link href={p("/sales-target-calculator")}>
                {isEnglish
                  ? "Sales Target Calculator"
                  : "売上目標計算ツール"}
              </Link>

              <Link href={p("/roi-calculator")}>
                {isEnglish ? "ROI Calculator" : "ROI計算ツール"}
              </Link>
            </div>
          </div>

          <div>
            <h3>
              {isEnglish ? "Company" : "会社情報"}
            </h3>

            <div
              style={{
                marginTop: "20px",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              <Link href={p("/about")}>
                {isEnglish ? "About" : "BizToolsについて"}
              </Link>

              <Link href={p("/contact")}>
                {isEnglish ? "Contact" : "お問い合わせ"}
              </Link>

              <Link href={p("/privacy")}>
                {isEnglish ? "Privacy" : "プライバシーポリシー"}
              </Link>

              <Link href={p("/terms")}>
                {isEnglish ? "Terms" : "利用規約"}
              </Link>

              <Link href={p("/disclaimer")}>
                {isEnglish ? "Disclaimer" : "免責事項"}
              </Link>
            </div>
          </div>
        </div>

        <div
          style={{
            marginTop: "50px",
            paddingTop: "25px",
            borderTop: "1px solid #E5E7EB",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <span>© 2026 BizTools</span>

          <div
            style={{
              display: "flex",
              gap: "18px",
            }}
          >
            <Link href={isEnglish ? "/en" : "/"}>
              {isEnglish ? "English" : "日本語"}
            </Link>

            <Link href={isEnglish ? "/" : "/en"}>
              {isEnglish ? "日本語" : "English"}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}