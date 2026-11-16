import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "損益分岐点とは？計算方法と経営に活かす5つのポイント",
  description:
    "損益分岐点の意味、計算方法、具体例、経営への活かし方をわかりやすく解説。固定費・変動費・限界利益の関係も紹介します。",

  alternates: {
    canonical: "/guides/break-even-point",
    languages: {
      "ja-JP": "/guides/break-even-point",
      "x-default": "/guides/break-even-point",
    },
  },

  openGraph: {
    title: "損益分岐点とは？計算方法と経営に活かす5つのポイント | BizTools",
    description:
      "損益分岐点の基本、計算方法、具体例、経営への活かし方をわかりやすく解説します。",
    url: "/guides/break-even-point",
    siteName: "BizTools",
    locale: "ja_JP",
    type: "article",
  },

  twitter: {
    card: "summary_large_image",
    title: "損益分岐点とは？計算方法と経営に活かす5つのポイント | BizTools",
    description:
      "損益分岐点の基本、計算方法、具体例、経営への活かし方をわかりやすく解説します。",
  },
};

export default function BreakEvenPointGuidePage() {
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
            損益分岐点とは？
            <br />
            計算方法と経営に活かす5つのポイント
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
            損益分岐点は、売上と費用が同じになり、利益がゼロになるポイントです。
            「最低でもどれくらい売れば赤字を避けられるのか」を確認するための
            重要な経営指標です。
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
            損益分岐点とは？
          </h2>

          <p>
            損益分岐点とは、売上高と費用の合計がちょうど同じになり、
            利益も損失も発生していない状態を指します。
          </p>

          <p style={{ marginTop: "18px" }}>
            損益分岐点を下回ると赤字になり、損益分岐点を超えると黒字になります。
            そのため、新しい商品やサービスを販売するときに
            「何個売れば固定費を回収できるか」を確認するために使われます。
          </p>

          <p style={{ marginTop: "18px" }}>
            売上目標を決める前に損益分岐点を把握しておくことで、
            現実的な販売計画を立てやすくなります。
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
            損益分岐点を計算するために必要な3つの数字
          </h2>

          <p>
            損益分岐点を計算するときは、
            主に「販売価格」「変動費」「固定費」の3つを確認します。
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
                title: "販売価格",
                text: "商品やサービスを1単位販売したときの価格です。",
              },
              {
                title: "変動費",
                text: "販売数量に応じて増減する費用です。材料費、仕入れ、販売手数料、配送費などが代表例です。",
              },
              {
                title: "固定費",
                text: "販売数量にかかわらず発生する費用です。家賃、人件費、システム利用料などが含まれます。",
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
            損益分岐点の計算方法
          </h2>

          <p>
            まず、1個販売したときに固定費の回収や利益に使える金額である
            「限界利益」を求めます。
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
            限界利益 ＝ 販売価格 − 変動費
          </div>

          <p style={{ marginTop: "24px" }}>
            次に、固定費を1個あたりの限界利益で割ります。
          </p>

          <div
            style={{
              marginTop: "20px",
              padding: "24px",
              backgroundColor: "#EFF6FF",
              borderRadius: "12px",
              fontSize: "20px",
              fontWeight: 700,
              color: "#111827",
            }}
          >
            損益分岐点数量 ＝ 固定費 ÷ 1個あたりの限界利益
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
            具体例：何個売れば黒字になる？
          </h2>

          <p>
            例えば、次の条件で商品を販売するとします。
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
            <p style={{ margin: 0 }}>販売価格：3,000円</p>
            <p style={{ marginTop: "10px", marginBottom: 0 }}>
              変動費：1,200円
            </p>
            <p style={{ marginTop: "10px", marginBottom: 0 }}>
              固定費：180,000円
            </p>
          </div>

          <p style={{ marginTop: "24px" }}>
            まず、1個あたりの限界利益を計算します。
          </p>

          <div
            style={{
              marginTop: "18px",
              padding: "20px",
              backgroundColor: "#EFF6FF",
              borderRadius: "12px",
            }}
          >
            3,000円 − 1,200円 ＝ 1,800円
          </div>

          <p style={{ marginTop: "24px" }}>
            次に固定費180,000円を限界利益1,800円で割ります。
          </p>

          <div
            style={{
              marginTop: "18px",
              padding: "20px",
              backgroundColor: "#EFF6FF",
              borderRadius: "12px",
            }}
          >
            180,000円 ÷ 1,800円 ＝ 100個
          </div>

          <p style={{ marginTop: "24px" }}>
            この場合、100個販売したところが損益分岐点です。
            101個目から利益が発生します。
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
            損益分岐点を経営に活かす5つのポイント
          </h2>

          <h3
            style={{
              fontSize: "24px",
              fontWeight: 700,
              color: "#111827",
            }}
          >
            1. 最低限必要な販売数量を把握する
          </h3>

          <p style={{ marginTop: "12px" }}>
            損益分岐点を知ることで、
            赤字を避けるために最低でも何個売る必要があるのかを確認できます。
            販売目標を立てるときの基準になります。
          </p>

          <h3
            style={{
              marginTop: "32px",
              fontSize: "24px",
              fontWeight: 700,
              color: "#111827",
            }}
          >
            2. 値下げの影響を確認する
          </h3>

          <p style={{ marginTop: "12px" }}>
            値下げをすると1個あたりの限界利益が減るため、
            損益分岐点となる販売数量は増えます。
            値下げによって販売数量がどれだけ増える必要があるかを確認することが重要です。
          </p>

          <h3
            style={{
              marginTop: "32px",
              fontSize: "24px",
              fontWeight: 700,
              color: "#111827",
            }}
          >
            3. コスト削減の効果を確認する
          </h3>

          <p style={{ marginTop: "12px" }}>
            変動費や固定費を削減すると、損益分岐点を下げることができます。
            例えば仕入れ価格を見直したり、不要な固定費を削減したりすることで、
            より少ない販売数量でも黒字化できるようになります。
          </p>

          <h3
            style={{
              marginTop: "32px",
              fontSize: "24px",
              fontWeight: 700,
              color: "#111827",
            }}
          >
            4. 新しい商品やサービスの採算性を確認する
          </h3>

          <p style={{ marginTop: "12px" }}>
            新商品を販売するときは、
            予想される販売価格、変動費、追加の固定費を使って
            損益分岐点を事前に計算できます。
          </p>

          <p style={{ marginTop: "12px" }}>
            必要な販売数量が現実的かどうかを確認することで、
            商品化やサービス開始の判断材料になります。
          </p>

          <h3
            style={{
              marginTop: "32px",
              fontSize: "24px",
              fontWeight: 700,
              color: "#111827",
            }}
          >
            5. 目標利益まで含めて考える
          </h3>

          <p style={{ marginTop: "12px" }}>
            損益分岐点は「利益ゼロ」のポイントです。
            実際の経営では、さらに必要な利益を上乗せして
            目標販売数量を設定する必要があります。
          </p>

          <p style={{ marginTop: "12px" }}>
            損益分岐点を基準にして、
            「黒字になるための数量」と「目標利益を達成する数量」を
            分けて考えると計画が立てやすくなります。
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
            損益分岐点を下げるには？
          </h2>

          <p>
            損益分岐点を下げる方法は、大きく分けて3つあります。
          </p>

          <div
            style={{
              marginTop: "24px",
              display: "grid",
              gap: "16px",
            }}
          >
            {[
              "販売価格を上げる",
              "変動費を下げる",
              "固定費を下げる",
            ].map((item) => (
              <div
                key={item}
                style={{
                  padding: "20px 22px",
                  border: "1px solid #E5E7EB",
                  borderRadius: "12px",
                  backgroundColor: "#FFFFFF",
                  fontWeight: 700,
                  color: "#111827",
                }}
              >
                {item}
              </div>
            ))}
          </div>

          <p style={{ marginTop: "24px" }}>
            ただし、価格を上げれば販売数量が下がる可能性があり、
            コスト削減によって品質が低下する場合もあります。
            数字だけではなく、顧客への影響も考えながら判断することが重要です。
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
            損益分岐点だけを見れば十分？
          </h2>

          <p>
            損益分岐点は重要な指標ですが、
            それだけで事業の状態を判断することはできません。
          </p>

          <p style={{ marginTop: "18px" }}>
            実際には、利益率、キャッシュフロー、販売数量、
            在庫、税金、追加費用なども考慮する必要があります。
          </p>

          <p style={{ marginTop: "18px" }}>
            損益分岐点は、
            「最低限必要な売上を確認するための基準」として使い、
            他の数字と組み合わせて判断することが大切です。
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
            実際の数字で損益分岐点を確認してみましょう
          </h2>

          <p
            style={{
              marginTop: "16px",
              fontSize: "18px",
              lineHeight: 1.8,
              color: "#4B5563",
            }}
          >
            BizToolsの損益分岐点計算ツールでは、
            販売価格、変動費、固定費を入力するだけで、
            損益分岐点となる販売数量や売上高を確認できます。
          </p>

          <div style={{ marginTop: "24px" }}>
            <Link
              href="/break-even-calculator"
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
              損益分岐点計算ツールを使う
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
            損益分岐点は、事業が赤字から黒字に変わる境目を示す重要な数字です。
          </p>

          <p style={{ marginTop: "18px" }}>
            販売価格、変動費、固定費を整理して損益分岐点を確認することで、
            必要な販売数量や売上目標を具体的に考えられるようになります。
          </p>

          <p style={{ marginTop: "18px" }}>
            値上げ、値下げ、コスト削減、新商品開発などの判断をするときも、
            損益分岐点の変化を確認しながら検討すると、
            より数字に基づいた経営判断ができます。
          </p>
        </section>
      </article>
    </main>
  );
}