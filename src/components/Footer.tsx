"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();

  const isJapanese = pathname.startsWith("/ja");

  const p = (en: string) =>
    isJapanese
      ? `/ja${en === "/" ? "" : en}`
      : en;

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
              {isJapanese
                ? "起業家・フリーランス・中小企業向けの無料ビジネス計算ツール。"
                : "Free business calculators for entrepreneurs, freelancers and small businesses."}
            </p>
          </div>

          <div>
            <h3>Calculators</h3>

            <div
              style={{
                marginTop: "20px",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              <Link href={p("/profit-calculator")}>Profit Calculator</Link>

              <Link href={p("/break-even-calculator")}>
                Break-even Calculator
              </Link>

              <Link href={p("/pricing-calculator")}>
                Pricing Calculator
              </Link>

              <Link href={p("/sales-target-calculator")}>
                Sales Target Calculator
              </Link>

              <Link href={p("/roi-calculator")}>
                ROI Calculator
              </Link>
            </div>
          </div>

          <div>
            <h3>
              {isJapanese ? "会社情報" : "Company"}
            </h3>

            <div
              style={{
                marginTop: "20px",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              <Link href={p("/about")}>About</Link>

              <Link href={p("/contact")}>Contact</Link>

              <Link href={p("/privacy")}>Privacy</Link>

              <Link href={p("/terms")}>Terms</Link>

              <Link href={p("/disclaimer")}>Disclaimer</Link>
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
            <Link href="/">English</Link>

            <Link href="/ja">日本語</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}