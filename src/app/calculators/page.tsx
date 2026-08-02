import CalculatorCard from "@/components/CalculatorCard";

const calculators = [
  {
    icon: "📈",
    title: "利益計算ツール",
    description:
      "利益、利益率、限界利益を簡単に計算できます。",
    bestFor:
      "✓ 中小企業\n✓ フリーランス\n✓ ネットショップ",
    href: "/profit-calculator",
    popular: true,
  },

  {
    icon: "⚖️",
    title: "損益分岐点計算ツール",
    description:
      "利益が出始める売上・販売数を計算します。",
    bestFor:
      "✓ スタートアップ\n✓ 小売業\n✓ 飲食店",
    href: "/break-even-calculator",
  },

  {
    icon: "🎯",
    title: "売上目標計算ツール",
    description:
      "目標利益を達成するために必要な売上を計算します。",
    bestFor:
      "✓ 事業計画\n✓ 売上予測",
    href: "/sales-target-calculator",
  },

  {
    icon: "💰",
    title: "価格設定ツール",
    description:
      "希望利益率から最適な販売価格を計算します。",
    bestFor:
      "✓ 商品販売\n✓ サービス業\n✓ ECサイト",
    href: "/pricing-calculator",
  },

  {
    icon: "📊",
    title: "ROI計算ツール",
    description:
      "投資利益率（ROI）を簡単に計算できます。",
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
        padding: "60px 24px",
      }}
    >
      <h1
        style={{
          fontSize: "44px",
          fontWeight: 700,
          color: "#111827",
        }}
      >
        ビジネス計算ツール
      </h1>

      <p
        style={{
          marginTop: "20px",
          fontSize: "18px",
          color: "#6B7280",
          lineHeight: 1.8,
          maxWidth: "720px",
        }}
      >
        起業家、フリーランス、中小企業経営者のための
        無料ビジネス計算ツールです。
        利益、価格設定、損益分岐点、ROI、売上目標などを
        すばやく正確に計算できます。
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(320px,1fr))",
          gap: "30px",
          marginTop: "50px",
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
            fontWeight: 700,
            color: "#111827",
          }}
        >
          BizToolsとは？
        </h2>

        <p
          style={{
            marginTop: "22px",
            color: "#6B7280",
            lineHeight: 1.9,
            fontSize: "17px",
          }}
        >
          ビジネスを成功させるためには、数字を正しく理解することが重要です。
          BizToolsでは、利益計算、価格設定、損益分岐点、ROI、
          売上目標などを簡単に計算できる無料ツールを提供しています。
        </p>

        <p
          style={{
            marginTop: "20px",
            color: "#6B7280",
            lineHeight: 1.9,
            fontSize: "17px",
          }}
        >
          新しく事業を始める方から、既にビジネスを運営している方まで、
          より良い経営判断ができるようサポートします。
        </p>
      </section>
    </main>
  );
}