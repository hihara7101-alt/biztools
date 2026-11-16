import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "利益率とは？計算方法と利益を改善する5つのポイント",
  description:
    "利益率の意味、計算方法、目安、改善方法をわかりやすく解説。具体例を使って、利益率を上げるための5つのポイントを紹介します。",

  alternates: {
    canonical: "/guides/profit-margin",
    languages: {
      "ja-JP": "/guides/profit-margin",
      "x-default": "/guides/profit-margin",
    },
  },

  openGraph: {
    title: "利益率とは？計算方法と利益を改善する5つのポイント | BizTools",
    description:
      "利益率の基本から計算方法、改善方法まで具体例付きでわかりやすく解説します。",
    url: "/guides/profit-margin",
    siteName: "BizTools",
    locale: "ja_JP",
    type: "article",
  },

  twitter: {
    card: "summary_large_image",
    title: "利益率とは？計算方法と利益を改善する5つのポイント | BizTools",
    description:
      "利益率の基本から計算方法、改善方法まで具体例付きでわかりやすく解説します。",
  },
};

export default function ProfitMarginGuidePage() {
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
            利益率とは？
            <br />
            計算方法と利益を改善する5つのポイント
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
            売上が伸びていても、利益率が低ければ十分な利益が残らないことがあります。
            利益率は、事業がどれだけ効率よく利益を生み出しているかを確認するための
            重要な指標です。
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
            利益率とは？
          </h2>

          <p>
            利益率とは、売上に対してどれくらいの利益が残っているかを割合で示したものです。
            売上金額だけでは、事業が本当に利益を生み出しているかは判断できません。
          </p>

          <p style={{ marginTop: "18px" }}>
            例えば、売上が100万円あっても、経費が95万円かかっていれば利益は5万円です。
            一方、売上が80万円でも経費が60万円であれば利益は20万円残ります。
          </p>

          <p style={{ marginTop: "18px" }}>
            そのため、売上だけではなく「どれくらい効率よく利益を残せているか」を見ることが
            経営判断では重要です。
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
            利益率の計算方法
          </h2>

          <p>基本的な利益率は、次の式で計算できます。</p>

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
            利益率 ＝ 利益 ÷ 売上 × 100
          </div>

          <p style={{ marginTop: "24px" }}>
            例えば、売上が100万円、利益が20万円の場合は次のようになります。
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
            20万円 ÷ 100万円 × 100 ＝ 20%
          </div>

          <p style={{ marginTop: "20px" }}>
            この場合、利益率は20%です。
            売上100円につき20円の利益が残っていると考えることもできます。
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
            利益と利益率の違い
          </h2>

          <p>
            利益は金額で表され、利益率は割合で表されます。
            両方を確認することで、事業の状態をより正確に判断できます。
          </p>

          <div
            style={{
              marginTop: "24px",
              overflowX: "auto",
            }}
          >
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                fontSize: "17px",
              }}
            >
              <thead>
                <tr>
                  <th
                    style={{
                      textAlign: "left",
                      padding: "14px",
                      borderBottom: "2px solid #E5E7EB",
                    }}
                  >
                    指標
                  </th>
                  <th
                    style={{
                      textAlign: "left",
                      padding: "14px",
                      borderBottom: "2px solid #E5E7EB",
                    }}
                  >
                    意味
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td
                    style={{
                      padding: "14px",
                      borderBottom: "1px solid #E5E7EB",
                      fontWeight: 600,
                    }}
                  >
                    利益
                  </td>
                  <td
                    style={{
                      padding: "14px",
                      borderBottom: "1px solid #E5E7EB",
                    }}
                  >
                    売上から費用を差し引いた金額
                  </td>
                </tr>
                <tr>
                  <td
                    style={{
                      padding: "14px",
                      borderBottom: "1px solid #E5E7EB",
                      fontWeight: 600,
                    }}
                  >
                    利益率
                  </td>
                  <td
                    style={{
                      padding: "14px",
                      borderBottom: "1px solid #E5E7EB",
                    }}
                  >
                    売上に対して利益が占める割合
                  </td>
                </tr>
              </tbody>
            </table>
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
            利益率は何％あれば良い？
          </h2>

          <p>
            「利益率は何％あれば良いのか」という疑問はよくありますが、
            適正な利益率は業種やビジネスモデルによって大きく異なります。
          </p>

          <p style={{ marginTop: "18px" }}>
            在庫を多く持つ小売業と、固定費が比較的少ないコンサルティング業では、
            同じ利益率を基準にすることはできません。
          </p>

          <p style={{ marginTop: "18px" }}>
            そのため、他社との比較だけではなく、
            自社の過去の利益率や目標値と比較して改善しているかを見ることが重要です。
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
            利益率を改善する5つのポイント
          </h2>

          <h3
            style={{
              fontSize: "24px",
              fontWeight: 700,
              color: "#111827",
            }}
          >
            1. 販売価格を見直す
          </h3>

          <p style={{ marginTop: "12px" }}>
            原材料費や人件費が上昇しているにもかかわらず、
            販売価格を長期間変更していない場合、利益率が低下している可能性があります。
            市場価格や顧客への提供価値を確認しながら価格設定を見直します。
          </p>

          <h3
            style={{
              marginTop: "32px",
              fontSize: "24px",
              fontWeight: 700,
              color: "#111827",
            }}
          >
            2. 変動費を確認する
          </h3>

          <p style={{ marginTop: "12px" }}>
            商品の仕入れ、材料費、販売手数料、配送費など、
            売上に連動して増える費用を確認します。
            小さなコスト削減でも販売数量が多ければ大きな改善につながります。
          </p>

          <h3
            style={{
              marginTop: "32px",
              fontSize: "24px",
              fontWeight: 700,
              color: "#111827",
            }}
          >
            3. 固定費を定期的に見直す
          </h3>

          <p style={{ marginTop: "12px" }}>
            オフィス費用、ソフトウェア、サブスクリプション、
            外注費などを定期的に確認します。
            利用していないサービスや重複している費用がないか確認することが重要です。
          </p>

          <h3
            style={{
              marginTop: "32px",
              fontSize: "24px",
              fontWeight: 700,
              color: "#111827",
            }}
          >
            4. 利益率の高い商品やサービスを把握する
          </h3>

          <p style={{ marginTop: "12px" }}>
            売上が大きい商品が必ずしも最も利益を生み出しているとは限りません。
            商品ごとに利益額と利益率を確認することで、
            どの商品に注力すべきか判断しやすくなります。
          </p>

          <h3
            style={{
              marginTop: "32px",
              fontSize: "24px",
              fontWeight: 700,
              color: "#111827",
            }}
          >
            5. 売上ではなく利益を基準に判断する
          </h3>

          <p style={{ marginTop: "12px" }}>
            売上を増やすために大幅な値引きをすると、
            売上は伸びても利益率が悪化することがあります。
            販売数量だけではなく、最終的にどれくらい利益が残るのかを確認しましょう。
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
            具体例：値上げで利益率はどう変わる？
          </h2>

          <p>
            ある商品を1個1,000円で販売し、1個あたりの変動費が600円だとします。
            この場合、1個販売したときに残る金額は400円です。
          </p>

          <p style={{ marginTop: "18px" }}>
            販売価格を1,100円に変更し、変動費が600円のままであれば、
            1個あたり500円が残ります。
          </p>

          <p style={{ marginTop: "18px" }}>
            わずか100円の価格変更でも、販売数量が1,000個なら
            利益への影響は10万円になります。
          </p>

          <p style={{ marginTop: "18px" }}>
            このように、価格、変動費、販売数量を組み合わせて考えることで、
            利益改善の効果を具体的に確認できます。
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
            実際の数字で利益率を確認してみましょう
          </h2>

          <p
            style={{
              marginTop: "16px",
              fontSize: "18px",
              lineHeight: 1.8,
              color: "#4B5563",
            }}
          >
            BizToolsの利益計算ツールでは、売上、固定費、変動費を入力するだけで、
            利益や利益率などを簡単に確認できます。
          </p>

          <div style={{ marginTop: "24px" }}>
            <Link
              href="/profit-calculator"
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
              利益計算ツールを使う
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
            利益率は、売上の大きさだけではわからない事業の収益性を確認するための
            重要な指標です。
          </p>

          <p style={{ marginTop: "18px" }}>
            定期的に利益率を確認し、価格、変動費、固定費、商品構成を見直すことで、
            売上を大きく増やさなくても利益を改善できる場合があります。
          </p>

          <p style={{ marginTop: "18px" }}>
            数字を感覚だけで判断せず、実際に計算しながら改善ポイントを探すことが
            安定した事業運営につながります。
          </p>
        </section>
      </article>
    </main>
  );
}
