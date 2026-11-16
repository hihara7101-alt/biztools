import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "価格設定とは？利益を確保する価格の決め方と5つのポイント",
  description:
    "価格設定の基本、利益を確保する販売価格の考え方、原価・利益率・市場価格との関係を具体例付きでわかりやすく解説します。",

  alternates: {
    canonical: "/guides/pricing",
    languages: {
      "ja-JP": "/guides/pricing",
      "x-default": "/guides/pricing",
    },
  },

  openGraph: {
    title: "価格設定とは？利益を確保する価格の決め方と5つのポイント | BizTools",
    description:
      "価格設定の基本、利益を確保する販売価格の決め方、原価や利益率との関係を具体例付きで解説します。",
    url: "/guides/pricing",
    siteName: "BizTools",
    locale: "ja_JP",
    type: "article",
  },

  twitter: {
    card: "summary_large_image",
    title: "価格設定とは？利益を確保する価格の決め方と5つのポイント | BizTools",
    description:
      "価格設定の基本、利益を確保する販売価格の決め方、原価や利益率との関係を具体例付きで解説します。",
  },
};

export default function PricingGuidePage() {
  return (
    <main
      style={{
        maxWidth: 1000,
        margin: "0 auto",
        padding: "70px 24px",
      }}
    >
      <article>
        <header>
          <p
            style={{
              fontSize: "15px",
              fontWeight: 600,
              color: "#2563EB",
              marginBottom: "16px",
            }}
          >
            ビジネスガイド
          </p>

          <h1
            style={{
              fontSize: "46px",
              fontWeight: 800,
              color: "#111827",
              lineHeight: 1.3,
            }}
          >
            価格設定とは？
            <br />
            利益を確保する価格の決め方と5つのポイント
          </h1>

          <p
            style={{
              marginTop: "24px",
              fontSize: "20px",
              lineHeight: 1.9,
              color: "#6B7280",
              maxWidth: "820px",
            }}
          >
            価格設定は、売上だけでなく利益にも大きく影響する重要な経営判断です。
            原価だけを基準に価格を決めるのではなく、
            利益率、市場価格、顧客への価値なども考える必要があります。
          </p>
        </header>

        <section
          style={{
            marginTop: "56px",
            lineHeight: 1.9,
            fontSize: "18px",
            color: "#374151",
          }}
        >
          <h2
            style={{
              fontSize: "32px",
              fontWeight: 700,
              color: "#111827",
              marginBottom: "20px",
            }}
          >
            価格設定とは？
          </h2>

          <p>
            価格設定とは、商品やサービスをいくらで販売するかを決めることです。
          </p>

          <p style={{ marginTop: "18px" }}>
            単純に「原価に少し利益を上乗せする」だけでは、
            十分な利益が残らないことがあります。
          </p>

          <p style={{ marginTop: "18px" }}>
            価格は、売上、利益率、販売数量、顧客の購買判断などに
            直接影響するため、事業全体に関わる重要な要素です。
          </p>
        </section>

        <section
          style={{
            marginTop: "56px",
            lineHeight: 1.9,
            fontSize: "18px",
            color: "#374151",
          }}
        >
          <h2
            style={{
              fontSize: "32px",
              fontWeight: 700,
              color: "#111827",
              marginBottom: "20px",
            }}
          >
            価格を決める前に確認したい3つの数字
          </h2>

          <p>
            価格を考えるときは、まず次の3つの数字を整理します。
          </p>

          <div
            style={{
              marginTop: "28px",
              display: "grid",
              gap: "20px",
            }}
          >
            {[
              {
                title: "原価",
                text: "商品やサービスを提供するために直接かかる費用です。仕入れ、材料費、外注費などが含まれます。",
              },
              {
                title: "必要な利益",
                text: "1件の販売でどれくらいの利益を残したいかを考えます。",
              },
              {
                title: "市場価格",
                text: "競合商品や類似サービスがどの価格帯で販売されているかを確認します。",
              },
            ].map((item) => (
              <div
                key={item.title}
                style={{
                  padding: "24px",
                  border: "1px solid #E5E7EB",
                  borderRadius: "14px",
                  backgroundColor: "#FFFFFF",
                }}
              >
                <h3
                  style={{
                    margin: 0,
                    fontSize: "22px",
                    fontWeight: 700,
                    color: "#111827",
                  }}
                >
                  {item.title}
                </h3>

                <p
                  style={{
                    marginTop: "10px",
                    marginBottom: 0,
                  }}
                >
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section
          style={{
            marginTop: "56px",
            lineHeight: 1.9,
            fontSize: "18px",
            color: "#374151",
          }}
        >
          <h2
            style={{
              fontSize: "32px",
              fontWeight: 700,
              color: "#111827",
              marginBottom: "20px",
            }}
          >
            利益率から販売価格を計算する方法
          </h2>

          <p>
            希望する利益率から販売価格を決める場合は、
            原価をもとに次のように考えることができます。
          </p>

          <div
            style={{
              marginTop: "24px",
              padding: "24px",
              backgroundColor: "#F9FAFB",
              borderRadius: "12px",
              border: "1px solid #E5E7EB",
              fontSize: "20px",
              fontWeight: 700,
              color: "#111827",
            }}
          >
            販売価格 ＝ 原価 ÷ （1 − 利益率）
          </div>

          <p style={{ marginTop: "24px" }}>
            例えば、原価が6,000円で、利益率を40%確保したい場合は、
            次のようになります。
          </p>

          <div
            style={{
              marginTop: "20px",
              padding: "24px",
              backgroundColor: "#EFF6FF",
              borderRadius: "12px",
              fontSize: "18px",
            }}
          >
            6,000円 ÷ （1 − 0.4）＝ 10,000円
          </div>

          <p style={{ marginTop: "20px" }}>
            この場合、販売価格を10,000円にすると、
            利益額は4,000円、利益率は40%になります。
          </p>
        </section>

        <section
          style={{
            marginTop: "56px",
            lineHeight: 1.9,
            fontSize: "18px",
            color: "#374151",
          }}
        >
          <h2
            style={{
              fontSize: "32px",
              fontWeight: 700,
              color: "#111827",
              marginBottom: "20px",
            }}
          >
            原価に利益率を掛けるだけでは同じ結果にならない
          </h2>

          <p>
            価格設定でよくある間違いのひとつが、
            原価に希望利益率をそのまま掛けて価格を決めることです。
          </p>

          <p style={{ marginTop: "18px" }}>
            例えば、原価6,000円に40%を上乗せすると、
            価格は8,400円になります。
          </p>

          <p style={{ marginTop: "18px" }}>
            しかし、この場合の利益額は2,400円で、
            販売価格8,400円に対する利益率は約28.6%です。
          </p>

          <p style={{ marginTop: "18px" }}>
            「原価に何％上乗せするか」と
            「販売価格に対して何％利益を残すか」は異なるため、
            混同しないことが重要です。
          </p>
        </section>

        <section
          style={{
            marginTop: "56px",
            lineHeight: 1.9,
            fontSize: "18px",
            color: "#374151",
          }}
        >
          <h2
            style={{
              fontSize: "32px",
              fontWeight: 700,
              color: "#111827",
              marginBottom: "24px",
            }}
          >
            価格設定で確認したい5つのポイント
          </h2>

          <h3
            style={{
              fontSize: "24px",
              fontWeight: 700,
              color: "#111827",
            }}
          >
            1. 原価を正確に把握する
          </h3>

          <p style={{ marginTop: "12px" }}>
            原材料や仕入れ価格だけではなく、
            梱包費、販売手数料、決済手数料、配送費なども確認します。
          </p>

          <p style={{ marginTop: "12px" }}>
            見落としている費用があると、
            想定より利益が少なくなる可能性があります。
          </p>

          <h3
            style={{
              marginTop: "32px",
              fontSize: "24px",
              fontWeight: 700,
              color: "#111827",
            }}
          >
            2. 必要な利益率を決める
          </h3>

          <p style={{ marginTop: "12px" }}>
            商品を売ること自体が目的ではなく、
            最終的に十分な利益を残すことが重要です。
          </p>

          <p style={{ marginTop: "12px" }}>
            固定費や事業に必要な利益を考えながら、
            どれくらいの利益率を確保する必要があるかを検討します。
          </p>

          <h3
            style={{
              marginTop: "32px",
              fontSize: "24px",
              fontWeight: 700,
              color: "#111827",
            }}
          >
            3. 競合価格を確認する
          </h3>

          <p style={{ marginTop: "12px" }}>
            自社だけの計算で価格を決めるのではなく、
            類似商品や競合サービスの価格も確認します。
          </p>

          <p style={{ marginTop: "12px" }}>
            市場価格から大きく離れている場合は、
            価格差を説明できる価値があるかを考える必要があります。
          </p>

          <h3
            style={{
              marginTop: "32px",
              fontSize: "24px",
              fontWeight: 700,
              color: "#111827",
            }}
          >
            4. 値下げした場合の利益を確認する
          </h3>

          <p style={{ marginTop: "12px" }}>
            セールや割引をすると売上数量が増える可能性がありますが、
            1件あたりの利益は減少します。
          </p>

          <p style={{ marginTop: "12px" }}>
            値下げ前後で利益額と利益率がどう変わるかを計算し、
            必要な販売数量が現実的かを確認します。
          </p>

          <h3
            style={{
              marginTop: "32px",
              fontSize: "24px",
              fontWeight: 700,
              color: "#111827",
            }}
          >
            5. 定期的に価格を見直す
          </h3>

          <p style={{ marginTop: "12px" }}>
            原材料費、人件費、物流費、為替などは時間とともに変化します。
          </p>

          <p style={{ marginTop: "12px" }}>
            コストが上昇しているのに販売価格を変えなければ、
            利益率が少しずつ低下する可能性があります。
          </p>

          <p style={{ marginTop: "12px" }}>
            定期的に原価と利益率を確認し、
            必要に応じて価格を見直すことが大切です。
          </p>
        </section>

        <section
          style={{
            marginTop: "56px",
            lineHeight: 1.9,
            fontSize: "18px",
            color: "#374151",
          }}
        >
          <h2
            style={{
              fontSize: "32px",
              fontWeight: 700,
              color: "#111827",
              marginBottom: "20px",
            }}
          >
            具体例：値下げすると何個多く売る必要がある？
          </h2>

          <p>
            原価6,000円の商品を10,000円で販売している場合、
            1個あたり4,000円の利益があります。
          </p>

          <p style={{ marginTop: "18px" }}>
            これを8,000円に値下げすると、
            1個あたりの利益は2,000円になります。
          </p>

          <div
            style={{
              marginTop: "24px",
              padding: "28px",
              border: "1px solid #E5E7EB",
              borderRadius: "16px",
              backgroundColor: "#F9FAFB",
            }}
          >
            <p style={{ margin: 0 }}>
              10,000円で販売 → 1個あたり利益4,000円
            </p>
            <p style={{ marginTop: "10px", marginBottom: 0 }}>
              8,000円で販売 → 1個あたり利益2,000円
            </p>
          </div>

          <p style={{ marginTop: "24px" }}>
            同じ利益額を確保するためには、
            値下げ後は約2倍の数量を販売する必要があります。
          </p>

          <p style={{ marginTop: "18px" }}>
            値下げをするときは、
            「売れそうか」だけではなく、
            必要な販売数量まで計算して判断することが重要です。
          </p>
        </section>

        <section
          style={{
            marginTop: "56px",
            lineHeight: 1.9,
            fontSize: "18px",
            color: "#374151",
          }}
        >
          <h2
            style={{
              fontSize: "32px",
              fontWeight: 700,
              color: "#111827",
              marginBottom: "20px",
            }}
          >
            高く売ることだけが正解ではない
          </h2>

          <p>
            利益率だけを考えると高い価格が有利に見えますが、
            価格が高すぎると販売数量が減る可能性があります。
          </p>

          <p style={{ marginTop: "18px" }}>
            反対に価格を下げすぎると、
            多く売れても十分な利益が残らないことがあります。
          </p>

          <p style={{ marginTop: "18px" }}>
            価格設定では、利益率と販売数量のバランスを考えることが重要です。
          </p>
        </section>

        <section
          style={{
            marginTop: "56px",
            lineHeight: 1.9,
            fontSize: "18px",
            color: "#374151",
          }}
        >
          <h2
            style={{
              fontSize: "32px",
              fontWeight: 700,
              color: "#111827",
              marginBottom: "20px",
            }}
          >
            価格以外の価値も考える
          </h2>

          <p>
            顧客は必ずしも最も安い商品だけを選ぶわけではありません。
          </p>

          <p style={{ marginTop: "18px" }}>
            品質、サポート、納期、使いやすさ、ブランド、保証など、
            商品やサービス全体の価値を見て判断します。
          </p>

          <p style={{ marginTop: "18px" }}>
            競合より高い価格を設定する場合でも、
            顧客が価格差以上の価値を感じられれば選ばれる可能性があります。
          </p>
        </section>

        <section
          style={{
            marginTop: "56px",
            padding: "32px",
            backgroundColor: "#F9FAFB",
            borderRadius: "16px",
            border: "1px solid #E5E7EB",
          }}
        >
          <h2
            style={{
              fontSize: "28px",
              fontWeight: 700,
              color: "#111827",
            }}
          >
            実際の数字で販売価格を確認してみましょう
          </h2>

          <p
            style={{
              marginTop: "16px",
              fontSize: "18px",
              lineHeight: 1.8,
              color: "#4B5563",
            }}
          >
            BizToolsの価格設定ツールでは、
            原価と希望利益率を入力するだけで、
            目標となる販売価格や利益額を簡単に確認できます。
          </p>

          <div style={{ marginTop: "24px" }}>
            <Link
              href="/pricing-calculator"
              style={{
                display: "inline-block",
                padding: "14px 22px",
                borderRadius: "10px",
                backgroundColor: "#2563EB",
                color: "#FFFFFF",
                textDecoration: "none",
                fontWeight: 700,
              }}
            >
              価格設定ツールを使う
            </Link>
          </div>
        </section>

        <section
          style={{
            marginTop: "56px",
            lineHeight: 1.9,
            fontSize: "18px",
            color: "#374151",
          }}
        >
          <h2
            style={{
              fontSize: "32px",
              fontWeight: 700,
              color: "#111827",
              marginBottom: "20px",
            }}
          >
            まとめ
          </h2>

          <p>
            価格設定は、売上と利益の両方に影響する重要な経営判断です。
          </p>

          <p style={{ marginTop: "18px" }}>
            原価、市場価格、希望利益率、販売数量などを整理したうえで
            価格を決めることで、感覚だけに頼らない判断ができます。
          </p>

          <p style={{ marginTop: "18px" }}>
            また、一度決めた価格を固定するのではなく、
            コストや市場環境の変化に合わせて定期的に見直すことが
            安定した利益を確保するために重要です。
          </p>
        </section>
      </article>
    </main>
  );
}