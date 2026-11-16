import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "売上目標とは？必要売上と販売数量の決め方5つのポイント",
  description:
    "売上目標の考え方、目標利益から必要売上や販売数量を逆算する方法、具体例、目標設定で確認したいポイントをわかりやすく解説します。",

  alternates: {
    canonical: "/guides/sales-target",
    languages: {
      "ja-JP": "/guides/sales-target",
      "x-default": "/guides/sales-target",
    },
  },

  openGraph: {
    title: "売上目標とは？必要売上と販売数量の決め方5つのポイント | BizTools",
    description:
      "目標利益から必要売上や販売数量を逆算する方法を具体例付きでわかりやすく解説します。",
    url: "/guides/sales-target",
    siteName: "BizTools",
    locale: "ja_JP",
    type: "article",
  },

  twitter: {
    card: "summary_large_image",
    title: "売上目標とは？必要売上と販売数量の決め方5つのポイント | BizTools",
    description:
      "目標利益から必要売上や販売数量を逆算する方法を具体例付きでわかりやすく解説します。",
  },
};

export default function SalesTargetGuidePage() {
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
            売上目標とは？
            <br />
            必要売上と販売数量の決め方5つのポイント
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
            売上目標は、単に「前年より売上を増やす」というだけではなく、
            必要な利益やコストから逆算して設定することが重要です。
            目標利益から必要売上や販売数量を計算することで、
            より具体的な営業・販売計画を立てやすくなります。
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
            売上目標とは？
          </h2>

          <p>
            売上目標とは、一定期間内に達成したい売上金額や販売数量を
            具体的な数字で設定したものです。
          </p>

          <p style={{ marginTop: "18px" }}>
            月間売上、年間売上、商品別売上、営業担当者別売上など、
            目的に応じてさまざまな単位で設定できます。
          </p>

          <p style={{ marginTop: "18px" }}>
            ただし、売上だけを増やしても、
            コストが大きければ十分な利益が残らない場合があります。
          </p>

          <p style={{ marginTop: "18px" }}>
            そのため、売上目標は利益目標とセットで考えることが重要です。
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
            売上目標を決めるために必要な4つの数字
          </h2>

          <p>
            目標利益から必要売上や販売数量を逆算するときは、
            主に次の4つを確認します。
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
                title: "目標利益",
                text: "一定期間でどれくらいの利益を残したいかを設定します。",
              },
              {
                title: "販売価格",
                text: "商品やサービスを1単位販売したときの価格です。",
              },
              {
                title: "変動費",
                text: "商品1個、サービス1件を販売するごとに増える費用です。",
              },
              {
                title: "固定費",
                text: "家賃、人件費、システム利用料など、販売数量にかかわらず発生する費用です。",
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
            目標利益から必要販売数量を計算する方法
          </h2>

          <p>
            まず、1個販売したときに固定費や利益に使える金額である
            「限界利益」を計算します。
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
            1個あたり限界利益 ＝ 販売価格 − 変動費
          </div>

          <p style={{ marginTop: "24px" }}>
            次に、固定費と目標利益を合計し、
            1個あたりの限界利益で割ります。
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
            必要販売数量 ＝ （固定費 ＋ 目標利益）÷ 1個あたり限界利益
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
            具体例：月30万円の利益を出すには何個売る？
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
            <p style={{ marginTop: "10px", marginBottom: 0 }}>
              目標利益：300,000円
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
            次に、固定費と目標利益を合計します。
          </p>

          <div
            style={{
              marginTop: "18px",
              padding: "20px",
              backgroundColor: "#EFF6FF",
              borderRadius: "12px",
            }}
          >
            180,000円 ＋ 300,000円 ＝ 480,000円
          </div>

          <p style={{ marginTop: "24px" }}>
            これを1個あたりの限界利益1,800円で割ります。
          </p>

          <div
            style={{
              marginTop: "18px",
              padding: "20px",
              backgroundColor: "#EFF6FF",
              borderRadius: "12px",
            }}
          >
            480,000円 ÷ 1,800円 ＝ 約267個
          </div>

          <p style={{ marginTop: "24px" }}>
            この場合、月30万円の利益を確保するためには、
            約267個の販売が必要です。
          </p>

          <p style={{ marginTop: "18px" }}>
            売上金額では約801,000円になります。
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
            売上目標を決める5つのポイント
          </h2>

          <h3
            style={{
              fontSize: "24px",
              fontWeight: 700,
              color: "#111827",
            }}
          >
            1. 売上ではなく利益から考える
          </h3>

          <p style={{ marginTop: "12px" }}>
            売上だけを目標にすると、
            値引きや高コストの商品販売によって
            十分な利益が残らないことがあります。
          </p>

          <p style={{ marginTop: "12px" }}>
            まず必要な利益を決め、
            そこから必要売上や販売数量を逆算すると、
            より経営に直結した目標になります。
          </p>

          <h3
            style={{
              marginTop: "32px",
              fontSize: "24px",
              fontWeight: 700,
              color: "#111827",
            }}
          >
            2. 損益分岐点を確認する
          </h3>

          <p style={{ marginTop: "12px" }}>
            目標売上を考える前に、
            最低限どこまで売れば赤字を避けられるかを確認します。
          </p>

          <p style={{ marginTop: "12px" }}>
            損益分岐点を基準にし、
            そこからどれだけ上積みすれば目標利益に届くのかを考えると
            計画が立てやすくなります。
          </p>

          <h3
            style={{
              marginTop: "32px",
              fontSize: "24px",
              fontWeight: 700,
              color: "#111827",
            }}
          >
            3. 販売数量まで落とし込む
          </h3>

          <p style={{ marginTop: "12px" }}>
            「月100万円売る」という目標だけでは、
            実際に何をすればよいか分かりにくい場合があります。
          </p>

          <p style={{ marginTop: "12px" }}>
            「1日10個」「週50件」など、
            販売数量まで具体化すると行動計画につなげやすくなります。
          </p>

          <h3
            style={{
              marginTop: "32px",
              fontSize: "24px",
              fontWeight: 700,
              color: "#111827",
            }}
          >
            4. 現実的に達成できるか確認する
          </h3>

          <p style={{ marginTop: "12px" }}>
            計算上必要な販売数量が出ても、
            市場規模や営業体制、生産能力によっては
            実現が難しい場合があります。
          </p>

          <p style={{ marginTop: "12px" }}>
            過去の実績や販売能力と比較し、
            現実的に達成可能な目標かを確認します。
          </p>

          <h3
            style={{
              marginTop: "32px",
              fontSize: "24px",
              fontWeight: 700,
              color: "#111827",
            }}
          >
            5. 定期的に進捗を確認する
          </h3>

          <p style={{ marginTop: "12px" }}>
            月末だけに結果を見るのではなく、
            週次や日次で実績を確認すると早めに対策できます。
          </p>

          <p style={{ marginTop: "12px" }}>
            販売数量、売上、利益を定期的に確認し、
            必要に応じて営業活動や価格、販促方法を調整します。
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
            売上目標が高すぎるとどうなる？
          </h2>

          <p>
            高い目標を設定すること自体が悪いわけではありませんが、
            達成可能性を無視した目標は問題になることがあります。
          </p>

          <p style={{ marginTop: "18px" }}>
            無理な値引き、過剰な広告費、在庫の積み増しなどによって、
            売上は増えても利益やキャッシュフローが悪化する可能性があります。
          </p>

          <p style={{ marginTop: "18px" }}>
            売上目標は、利益と実行可能性の両方を確認しながら設定することが重要です。
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
            売上目標を月・週・日に分ける
          </h2>

          <p>
            大きな売上目標は、短い期間に分けると管理しやすくなります。
          </p>

          <p style={{ marginTop: "18px" }}>
            例えば月間300個を目標にする場合、
            営業日が20日なら1日あたり15個が目安になります。
          </p>

          <div
            style={{
              marginTop: "24px",
              padding: "24px",
              backgroundColor: "#F9FAFB",
              borderRadius: "12px",
              border: "1px solid #E5E7EB",
            }}
          >
            月間300個 ÷ 20営業日 ＝ 1日15個
          </div>

          <p style={{ marginTop: "24px" }}>
            このように目標を細分化すると、
            進捗が遅れているかどうかを早めに判断できます。
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
            売上目標だけで判断しない
          </h2>

          <p>
            売上は事業を管理するうえで重要な数字ですが、
            売上だけで業績を判断することはできません。
          </p>

          <p style={{ marginTop: "18px" }}>
            利益率、損益分岐点、固定費、変動費、キャッシュフローなども
            合わせて確認することが重要です。
          </p>

          <p style={{ marginTop: "18px" }}>
            「どれだけ売れたか」だけでなく、
            「どれだけ利益が残ったか」まで確認することで、
            より正確に事業の状態を判断できます。
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
            実際の数字で売上目標を確認してみましょう
          </h2>

          <p
            style={{
              marginTop: "16px",
              fontSize: "18px",
              lineHeight: 1.8,
              color: "#4B5563",
            }}
          >
            BizToolsの売上目標計算ツールでは、
            目標利益、販売価格、変動費、固定費を入力するだけで、
            必要な販売数量と売上高を確認できます。
          </p>

          <div style={{ marginTop: "24px" }}>
            <Link
              href="/sales-target-calculator"
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
              売上目標計算ツールを使う
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
            売上目標は、事業の方向性を具体的な数字にするための重要な指標です。
          </p>

          <p style={{ marginTop: "18px" }}>
            目標利益、販売価格、変動費、固定費から必要売上や販売数量を逆算することで、
            より現実的な目標を設定できます。
          </p>

          <p style={{ marginTop: "18px" }}>
            また、設定した目標を月・週・日に分けて進捗を確認し、
            必要に応じて販売活動を調整することで、
            数字に基づいた事業運営につながります。
          </p>
        </section>
      </article>
    </main>
  );
}