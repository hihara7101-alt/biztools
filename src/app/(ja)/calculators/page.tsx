import type { Metadata } from "next";
import Link from "next/link";

import CalculatorCard from "@/components/CalculatorCard";

export const metadata: Metadata = {
  title: "ビジネス計算ツール一覧 | BizTools",

  description:
    "利益計算、損益分岐点、価格設定、ROI、売上目標を無料で計算できるビジネス計算ツール一覧。起業家、フリーランス、中小企業、EC運営者向け。",

  keywords: [
    "ビジネス計算ツール",
    "利益計算",
    "損益分岐点",
    "価格設定",
    "ROI",
    "売上目標",
    "起業",
    "フリーランス",
    "中小企業",
  ],

  alternates: {
    canonical: "/calculators",

    languages: {
      "ja-JP": "/calculators",
      "en-US": "/en/calculators",
      "x-default": "/calculators",
    },
  },

  robots: {
    index: true,
    follow: true,
  },
};

const calculators = [
  {
    icon: "📈",
    title: "利益計算ツール",
    description:
      "売上・変動費・固定費から、粗利益・純利益・利益率・限界利益を計算できます。",
    bestFor:
      "✓ 中小企業\n✓ フリーランス\n✓ ネットショップ",
    href: "/profit-calculator",
    popular: true,
  },

  {
    icon: "⚖️",
    title: "損益分岐点計算ツール",
    description:
      "販売価格・変動費・固定費から、黒字化に必要な販売数と売上高を計算します。",
    bestFor:
      "✓ スタートアップ\n✓ 小売業\n✓ 飲食店",
    href: "/break-even-calculator",
  },

  {
    icon: "🎯",
    title: "売上目標計算ツール",
    description:
      "目標利益を達成するために必要な販売数量と売上高を計算します。",
    bestFor:
      "✓ 事業計画\n✓ 売上予測",
    href: "/sales-target-calculator",
  },

  {
    icon: "💰",
    title: "価格設定ツール",
    description:
      "原価と希望利益率から、利益を確保するための販売価格を計算します。",
    bestFor:
      "✓ 商品販売\n✓ サービス業\n✓ ECサイト",
    href: "/pricing-calculator",
  },

  {
    icon: "📊",
    title: "ROI計算ツール",
    description:
      "投資額・回収額・追加費用から、ROI・純利益・投資倍率を計算できます。",
    bestFor:
      "✓ マーケティング\n✓ 設備投資\n✓ プロジェクト",
    href: "/roi-calculator",
  },
];

export default function CalculatorsPage() {
  return (
    <main
      style={{
        maxWidth: 1100,
        margin: "0 auto",
        padding: "60px 24px 100px",
      }}
    >
      <section>
        <h1
          style={{
            fontSize: "44px",
            fontWeight: 800,
            color: "#111827",
            lineHeight: 1.2,
          }}
        >
          ビジネス計算ツール
        </h1>

        <p
          style={{
            marginTop: "20px",
            fontSize: "19px",
            color: "#4B5563",
            lineHeight: 1.9,
            maxWidth: "800px",
          }}
        >
          利益、価格設定、損益分岐点、ROI、売上目標など、
          ビジネスでよく使う数字を簡単に確認できる無料計算ツールです。
        </p>

        <p
          style={{
            marginTop: "14px",
            fontSize: "17px",
            color: "#6B7280",
            lineHeight: 1.9,
            maxWidth: "800px",
          }}
        >
          起業家、フリーランス、中小企業、ネットショップ運営者などが、
          事業計画や日々の経営判断で必要になる基本的な数字を
          すばやく確認できるよう設計しています。
        </p>
      </section>

      {/* Calculator Cards */}

      <section
        style={{
          marginTop: "55px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(320px,1fr))",
            gap: "30px",
          }}
        >
          {calculators.map((calculator) => (
            <CalculatorCard
              key={calculator.title}
              icon={calculator.icon}
              title={calculator.title}
              description={calculator.description}
              bestFor={calculator.bestFor}
              href={calculator.href}
              popular={calculator.popular}
              lang="ja"
            />
          ))}
        </div>
      </section>

      {/* How to Choose */}

      <section
        style={{
          marginTop: "90px",
        }}
      >
        <h2
          style={{
            fontSize: "34px",
            fontWeight: 800,
            color: "#111827",
          }}
        >
          どの計算ツールを使えばよいですか？
        </h2>

        <p
          style={{
            marginTop: "18px",
            color: "#4B5563",
            lineHeight: 1.9,
            fontSize: "17px",
            maxWidth: "850px",
          }}
        >
          目的によって使用する計算ツールが異なります。
          現在の事業状況や確認したい数字に合わせて選んでください。
        </p>

        <div
          style={{
            display: "grid",
            gap: "20px",
            marginTop: "35px",
          }}
        >
          {[
            {
              title: "現在の利益を確認したい",
              text:
                "売上、変動費、固定費が分かっている場合は、利益計算ツールで純利益や利益率を確認できます。",
              href: "/profit-calculator",
              label: "利益計算ツール",
            },
            {
              title: "何個売れば黒字になるか知りたい",
              text:
                "販売価格、変動費、固定費から、赤字から黒字に変わる販売数量と売上高を確認できます。",
              href: "/break-even-calculator",
              label: "損益分岐点計算ツール",
            },
            {
              title: "商品の販売価格を決めたい",
              text:
                "原価と希望する利益率を入力すると、目標とする販売価格を計算できます。",
              href: "/pricing-calculator",
              label: "価格設定ツール",
            },
            {
              title: "目標利益に必要な売上を知りたい",
              text:
                "達成したい利益額から、必要な販売数量と売上高を逆算できます。",
              href: "/sales-target-calculator",
              label: "売上目標計算ツール",
            },
            {
              title: "投資の効果を確認したい",
              text:
                "広告費、設備投資、システム導入などへの投資がどの程度の利益を生んだかを確認できます。",
              href: "/roi-calculator",
              label: "ROI計算ツール",
            },
          ].map((item) => (
            <div
              key={item.title}
              style={{
                padding: "28px",
                border: "1px solid #E5E7EB",
                borderRadius: "18px",
                background: "#FFFFFF",
              }}
            >
              <h3
                style={{
                  margin: 0,
                  fontSize: "21px",
                  fontWeight: 700,
                  color: "#111827",
                }}
              >
                {item.title}
              </h3>

              <p
                style={{
                  marginTop: "12px",
                  marginBottom: 0,
                  fontSize: "16px",
                  lineHeight: 1.8,
                  color: "#4B5563",
                }}
              >
                {item.text}
              </p>

              <Link
                href={item.href}
                style={{
                  display: "inline-block",
                  marginTop: "14px",
                  color: "#2563EB",
                  fontWeight: 700,
                  textDecoration: "none",
                }}
              >
                {item.label}を使う →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Example Workflow */}

      <section
        style={{
          marginTop: "90px",
          background: "#F9FAFB",
          border: "1px solid #E5E7EB",
          borderRadius: "24px",
          padding: "48px",
        }}
      >
        <h2
          style={{
            fontSize: "32px",
            fontWeight: 800,
            color: "#111827",
          }}
        >
          計算ツールを組み合わせて使う
        </h2>

        <p
          style={{
            marginTop: "22px",
            color: "#4B5563",
            lineHeight: 1.9,
            fontSize: "17px",
          }}
        >
          例えば、新しい商品を販売する場合は、
          まず原価から販売価格を検討し、その価格で何個売れば
          損益分岐点に到達するかを確認できます。
        </p>

        <p
          style={{
            marginTop: "18px",
            color: "#4B5563",
            lineHeight: 1.9,
            fontSize: "17px",
          }}
        >
          その後、目標とする利益額を設定して必要売上を計算し、
          実際に販売した後は利益計算ツールで結果を確認できます。
          広告費などを使った場合はROI計算ツールで投資効果を確認できます。
        </p>

        <div
          style={{
            marginTop: "30px",
            display: "flex",
            gap: "14px",
            flexWrap: "wrap",
          }}
        >
          <Link
            href="/pricing-calculator"
            style={{
              padding: "12px 18px",
              borderRadius: "10px",
              background: "#FFFFFF",
              border: "1px solid #D1D5DB",
              textDecoration: "none",
              color: "#2563EB",
              fontWeight: 700,
            }}
          >
            価格設定
          </Link>

          <Link
            href="/break-even-calculator"
            style={{
              padding: "12px 18px",
              borderRadius: "10px",
              background: "#FFFFFF",
              border: "1px solid #D1D5DB",
              textDecoration: "none",
              color: "#2563EB",
              fontWeight: 700,
            }}
          >
            損益分岐点
          </Link>

          <Link
            href="/sales-target-calculator"
            style={{
              padding: "12px 18px",
              borderRadius: "10px",
              background: "#FFFFFF",
              border: "1px solid #D1D5DB",
              textDecoration: "none",
              color: "#2563EB",
              fontWeight: 700,
            }}
          >
            売上目標
          </Link>

          <Link
            href="/profit-calculator"
            style={{
              padding: "12px 18px",
              borderRadius: "10px",
              background: "#FFFFFF",
              border: "1px solid #D1D5DB",
              textDecoration: "none",
              color: "#2563EB",
              fontWeight: 700,
            }}
          >
            利益
          </Link>

          <Link
            href="/roi-calculator"
            style={{
              padding: "12px 18px",
              borderRadius: "10px",
              background: "#FFFFFF",
              border: "1px solid #D1D5DB",
              textDecoration: "none",
              color: "#2563EB",
              fontWeight: 700,
            }}
          >
            ROI
          </Link>
        </div>
      </section>

      {/* About BizTools */}

      <section
        style={{
          marginTop: "90px",
        }}
      >
        <h2
          style={{
            fontSize: "32px",
            fontWeight: 800,
            color: "#111827",
          }}
        >
          BizToolsとは？
        </h2>

        <p
          style={{
            marginTop: "22px",
            color: "#4B5563",
            lineHeight: 1.9,
            fontSize: "17px",
            maxWidth: "850px",
          }}
        >
          BizToolsは、ビジネスで必要となる基本的な計算を
          できるだけ簡単に確認できるようにした無料ツールサイトです。
        </p>

        <p
          style={{
            marginTop: "18px",
            color: "#4B5563",
            lineHeight: 1.9,
            fontSize: "17px",
            maxWidth: "850px",
          }}
        >
          Excelなどで毎回計算式を作成することなく、
          必要な数字を入力するだけで結果を確認できます。
          各計算ページでは、計算方法や具体例も紹介しています。
        </p>

        <p
          style={{
            marginTop: "18px",
            color: "#6B7280",
            lineHeight: 1.8,
            fontSize: "16px",
          }}
        >
          詳しくは{" "}
          <Link
            href="/about"
            style={{
              color: "#2563EB",
              fontWeight: 700,
              textDecoration: "none",
            }}
          >
            BizToolsについて
          </Link>
          をご覧ください。
        </p>
      </section>

      {/* Important Note */}

      <section
        style={{
          marginTop: "80px",
          padding: "30px",
          background: "#FFFBEB",
          border: "1px solid #FDE68A",
          borderRadius: "18px",
        }}
      >
        <h2
          style={{
            margin: 0,
            fontSize: "22px",
            fontWeight: 700,
            color: "#92400E",
          }}
        >
          計算結果について
        </h2>

        <p
          style={{
            marginTop: "14px",
            marginBottom: 0,
            fontSize: "16px",
            lineHeight: 1.8,
            color: "#78350F",
          }}
        >
          BizToolsの計算結果は、事業計画や比較検討の参考として
          ご利用ください。実際の経営判断では、税金、資金調達、
          市場環境、追加費用なども考慮する必要があります。
        </p>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "BizTools ビジネス計算ツール一覧",
            url: "https://uttacca.com/calculators",
            description:
              "利益、損益分岐点、価格設定、ROI、売上目標を計算できる無料ビジネス計算ツール一覧。",
            inLanguage: "ja-JP",
          }),
        }}
      />
    </main>
  );
}