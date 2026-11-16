import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ビジネスガイド | BizTools",
  description:
    "利益率、損益分岐点、ROI、価格設定、売上目標など、ビジネスの数字を理解し経営判断に活かすための基礎知識をわかりやすく解説します。",

  alternates: {
    canonical: "/guides",
    languages: {
      "ja-JP": "/guides",
      "x-default": "/guides",
    },
  },

  openGraph: {
    title: "ビジネスガイド | BizTools",
    description:
      "利益率、損益分岐点、ROI、価格設定、売上目標など、ビジネスの数字をわかりやすく解説します。",
    url: "/guides",
    siteName: "BizTools",
    locale: "ja_JP",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

const guides = [
  {
    category: "利益・利益率",
    title: "利益率とは？計算方法と利益を改善する5つのポイント",
    description:
      "利益率の意味や計算方法、利益を改善するためのポイントを具体例とともに解説します。",
    href: "/guides/profit-margin",
    calculatorHref: "/profit-calculator",
    calculatorLabel: "利益計算ツール",
  },
  {
    category: "損益分岐点",
    title: "損益分岐点とは？計算方法と黒字化のポイント",
    description:
      "固定費と変動費の考え方から、黒字化に必要な販売数量や売上高の求め方まで解説します。",
    href: "/guides/break-even-point",
    calculatorHref: "/break-even-calculator",
    calculatorLabel: "損益分岐点計算ツール",
  },
  {
    category: "ROI・投資",
    title: "ROIとは？計算方法と投資判断に活かす5つのポイント",
    description:
      "ROIの基本的な意味と計算方法、投資効果を数字で判断するためのポイントを解説します。",
    href: "/guides/roi",
    calculatorHref: "/roi-calculator",
    calculatorLabel: "ROI計算ツール",
  },
  {
    category: "価格設定",
    title: "価格設定とは？利益を確保する価格の決め方と5つのポイント",
    description:
      "原価や利益率を踏まえて販売価格を決める考え方と、価格設定で確認したいポイントを解説します。",
    href: "/guides/pricing",
    calculatorHref: "/pricing-calculator",
    calculatorLabel: "価格設定ツール",
  },
  {
    category: "売上目標",
    title: "売上目標とは？必要売上と販売数量の決め方5つのポイント",
    description:
      "目標利益から必要な売上高や販売数量を考える方法と、現実的な売上目標の立て方を解説します。",
    href: "/guides/sales-target",
    calculatorHref: "/sales-target-calculator",
    calculatorLabel: "売上目標計算ツール",
  },
];

export default function GuidesPage() {
  return (
    <main
      style={{
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "70px 24px 100px",
      }}
    >
      <header
        style={{
          textAlign: "center",
          maxWidth: "820px",
          margin: "0 auto",
        }}
      >
        <p
          style={{
            margin: 0,
            color: "#2563EB",
            fontSize: "15px",
            fontWeight: 700,
          }}
        >
          BizTools ビジネスガイド
        </p>

        <h1
          style={{
            marginTop: "16px",
            marginBottom: 0,
            fontSize: "46px",
            lineHeight: 1.3,
            fontWeight: 800,
            color: "#111827",
          }}
        >
          ビジネスの数字を
          <br />
          わかりやすく理解する
        </h1>

        <p
          style={{
            marginTop: "24px",
            marginBottom: 0,
            fontSize: "19px",
            lineHeight: 1.9,
            color: "#6B7280",
          }}
        >
          利益、損益分岐点、価格、投資効果、売上目標など、
          事業を運営するときに必要になる数字の考え方を解説します。
          基本を理解した後は、無料の計算ツールで実際の数字を確認できます。
        </p>
      </header>

      <section
        style={{
          marginTop: "70px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "26px",
          }}
        >
          {guides.map((guide) => (
            <article
              key={guide.href}
              style={{
                padding: "30px",
                border: "1px solid #E5E7EB",
                borderRadius: "18px",
                backgroundColor: "#FFFFFF",
              }}
            >
              <div
                style={{
                  color: "#2563EB",
                  fontSize: "14px",
                  fontWeight: 700,
                }}
              >
                {guide.category}
              </div>

              <h2
                style={{
                  marginTop: "12px",
                  marginBottom: 0,
                  fontSize: "23px",
                  lineHeight: 1.55,
                  color: "#111827",
                }}
              >
                {guide.title}
              </h2>

              <p
                style={{
                  marginTop: "16px",
                  marginBottom: 0,
                  fontSize: "16px",
                  lineHeight: 1.9,
                  color: "#6B7280",
                }}
              >
                {guide.description}
              </p>

              <div
                style={{
                  marginTop: "24px",
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "18px",
                }}
              >
                <Link
                  href={guide.href}
                  style={{
                    color: "#2563EB",
                    fontWeight: 700,
                    textDecoration: "none",
                  }}
                >
                  ガイドを読む →
                </Link>

                <Link
                  href={guide.calculatorHref}
                  style={{
                    color: "#4B5563",
                    fontWeight: 600,
                    textDecoration: "none",
                  }}
                >
                  {guide.calculatorLabel} →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        style={{
          marginTop: "80px",
          padding: "40px",
          borderRadius: "20px",
          backgroundColor: "#F9FAFB",
          border: "1px solid #E5E7EB",
        }}
      >
        <h2
          style={{
            margin: 0,
            fontSize: "30px",
            color: "#111827",
          }}
        >
          ガイドと計算ツールを組み合わせて使う
        </h2>

        <p
          style={{
            marginTop: "18px",
            marginBottom: 0,
            fontSize: "17px",
            lineHeight: 1.9,
            color: "#4B5563",
          }}
        >
          ビジネスの数字は、計算結果だけを見るのではなく、
          その数字が何を意味するのかを理解することが重要です。
          各ガイドで基本的な考え方を確認した後、
          BizToolsの計算ツールに実際の売上、費用、価格などを入力することで、
          自分の事業に置き換えて検討できます。
        </p>

        <Link
          href="/calculators"
          style={{
            display: "inline-block",
            marginTop: "24px",
            padding: "14px 22px",
            borderRadius: "10px",
            backgroundColor: "#2563EB",
            color: "#FFFFFF",
            fontWeight: 700,
            textDecoration: "none",
          }}
        >
          計算ツール一覧を見る →
        </Link>
      </section>
    </main>
  );
}