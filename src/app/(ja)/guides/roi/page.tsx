import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ROIとは？計算方法と投資判断に活かす5つのポイント",
  description:
    "ROI（投資利益率）の意味、計算方法、具体例、投資判断への活かし方をわかりやすく解説。広告費、設備投資、システム導入などの評価方法も紹介します。",

  alternates: {
    canonical: "/guides/roi",
    languages: {
      "ja-JP": "/guides/roi",
      "x-default": "/guides/roi",
    },
  },

  openGraph: {
    title: "ROIとは？計算方法と投資判断に活かす5つのポイント | BizTools",
    description:
      "ROIの基本、計算方法、具体例、投資判断への活かし方をわかりやすく解説します。",
    url: "/guides/roi",
    siteName: "BizTools",
    locale: "ja_JP",
    type: "article",
  },

  twitter: {
    card: "summary_large_image",
    title: "ROIとは？計算方法と投資判断に活かす5つのポイント | BizTools",
    description:
      "ROIの基本、計算方法、具体例、投資判断への活かし方をわかりやすく解説します。",
  },
};

export default function RoiGuidePage() {
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
            ROIとは？
            <br />
            計算方法と投資判断に活かす5つのポイント
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
            ROIは、投資した金額に対してどれくらいの利益が得られたかを
            確認するための指標です。
            広告、設備、システム、人材採用などの投資効果を比較するときに役立ちます。
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
            ROIとは？
          </h2>

          <p>
            ROIは「Return on Investment」の略で、日本語では
            「投資利益率」と呼ばれます。
          </p>

          <p style={{ marginTop: "18px" }}>
            投資した金額に対して、どれくらいの利益を生み出したかを
            パーセントで表します。
          </p>

          <p style={{ marginTop: "18px" }}>
            例えば、100万円を投資して20万円の利益が得られた場合、
            ROIは20%です。
          </p>

          <p style={{ marginTop: "18px" }}>
            ROIを確認することで、複数の投資候補の中から
            どの投資がより効率的かを比較しやすくなります。
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
            ROIの計算方法
          </h2>

          <p>
            ROIは、投資によって得られた利益を投資額で割って計算します。
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
            ROI ＝ 利益 ÷ 投資額 × 100
          </div>

          <p style={{ marginTop: "24px" }}>
            利益を計算するときは、投資によって得られた収益から
            投資にかかった費用を差し引きます。
          </p>

          <div
            style={{
              marginTop: "20px",
              padding: "24px",
              backgroundColor: "#EFF6FF",
              borderRadius: "12px",
              fontSize: "18px",
              fontWeight: 700,
              color: "#111827",
            }}
          >
            利益 ＝ 投資による収益 − 投資費用
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
            具体例：広告投資のROIを計算する
          </h2>

          <p>
            例えば、オンライン広告に50万円を使い、
            その広告によって80万円の利益が生まれたとします。
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
            <p style={{ margin: 0 }}>投資額：500,000円</p>
            <p style={{ marginTop: "10px", marginBottom: 0 }}>
              投資による利益：800,000円
            </p>
          </div>

          <p style={{ marginTop: "24px" }}>
            この場合のROIは次のようになります。
          </p>

          <div
            style={{
              marginTop: "18px",
              padding: "20px",
              backgroundColor: "#EFF6FF",
              borderRadius: "12px",
            }}
          >
            800,000円 ÷ 500,000円 × 100 ＝ 160%
          </div>

          <p style={{ marginTop: "24px" }}>
            ROIは160%です。
            投資額に対して1.6倍の利益が得られたと見ることができます。
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
            ROIは何％なら良い？
          </h2>

          <p>
            ROIは高いほど投資効率が良いと考えられますが、
            「何％なら良い」という基準は一律ではありません。
          </p>

          <p style={{ marginTop: "18px" }}>
            広告投資、設備投資、ITシステム、人材採用では、
            投資額や回収期間、リスクが大きく異なります。
          </p>

          <p style={{ marginTop: "18px" }}>
            そのため、ROIだけを見るのではなく、
            過去の投資結果や他の投資候補と比較することが重要です。
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
            ROIを投資判断に活かす5つのポイント
          </h2>

          <h3
            style={{
              fontSize: "24px",
              fontWeight: 700,
              color: "#111827",
            }}
          >
            1. 投資前に目標ROIを決める
          </h3>

          <p style={{ marginTop: "12px" }}>
            投資を実行する前に、
            どれくらいのリターンを期待するのかを決めておくと、
            投資後の評価がしやすくなります。
          </p>

          <p style={{ marginTop: "12px" }}>
            例えば「ROIが30%以上なら継続する」など、
            判断基準をあらかじめ設定します。
          </p>

          <h3
            style={{
              marginTop: "32px",
              fontSize: "24px",
              fontWeight: 700,
              color: "#111827",
            }}
          >
            2. 投資に関連する費用を漏れなく含める
          </h3>

          <p style={{ marginTop: "12px" }}>
            広告費や設備購入費だけでなく、
            導入費用、外注費、人件費、保守費用なども含めて考える必要があります。
          </p>

          <p style={{ marginTop: "12px" }}>
            一部の費用を除外すると、
            実際よりもROIが高く見える可能性があります。
          </p>

          <h3
            style={{
              marginTop: "32px",
              fontSize: "24px",
              fontWeight: 700,
              color: "#111827",
            }}
          >
            3. 複数の投資案を同じ基準で比較する
          </h3>

          <p style={{ marginTop: "12px" }}>
            ROIは、投資額が異なる複数の案を比較するときに役立ちます。
          </p>

          <p style={{ marginTop: "12px" }}>
            例えば、広告Aと広告B、設備Aと設備Bなどを
            同じ計算方法で比較することで、
            どちらが効率的かを判断しやすくなります。
          </p>

          <h3
            style={{
              marginTop: "32px",
              fontSize: "24px",
              fontWeight: 700,
              color: "#111827",
            }}
          >
            4. 回収期間も確認する
          </h3>

          <p style={{ marginTop: "12px" }}>
            ROIが高くても、利益が出るまでに長い時間がかかる投資もあります。
          </p>

          <p style={{ marginTop: "12px" }}>
            短期間で回収できる投資と、
            長期間かけて利益を生む投資では、
            資金繰りへの影響が異なります。
          </p>

          <p style={{ marginTop: "12px" }}>
            ROIと合わせて投資回収期間も確認すると、
            より現実的な判断ができます。
          </p>

          <h3
            style={{
              marginTop: "32px",
              fontSize: "24px",
              fontWeight: 700,
              color: "#111827",
            }}
          >
            5. 投資後も定期的にROIを確認する
          </h3>

          <p style={{ marginTop: "12px" }}>
            投資した時点で終わりではなく、
            実際の結果を定期的に確認することが重要です。
          </p>

          <p style={{ marginTop: "12px" }}>
            広告費、売上、利益などの実績を更新しながらROIを確認すると、
            継続、拡大、縮小、停止といった判断につなげられます。
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
            ROIが高ければ必ず良い投資？
          </h2>

          <p>
            ROIが高い投資は魅力的ですが、
            ROIだけで投資を決めるのは危険です。
          </p>

          <p style={{ marginTop: "18px" }}>
            投資額、回収期間、リスク、キャッシュフロー、
            将来性なども考える必要があります。
          </p>

          <p style={{ marginTop: "18px" }}>
            例えば、小額投資でROIが非常に高くても、
            得られる利益額そのものは小さい場合があります。
          </p>

          <p style={{ marginTop: "18px" }}>
            反対に、ROIは低くても、
            長期的に大きな利益を生む設備投資やシステム投資もあります。
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
            ROIを使いやすい投資の例
          </h2>

          <p>
            ROIはさまざまな投資の評価に利用できます。
          </p>

          <div
            style={{
              marginTop: "24px",
              display: "grid",
              gap: "16px",
            }}
          >
            {[
              "広告・マーケティング費用",
              "設備投資",
              "ITシステム・ソフトウェア導入",
              "新商品・新サービス開発",
              "業務改善や自動化への投資",
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
            ROIだけでなく利益額も確認する
          </h2>

          <p>
            ROIは投資効率を比較するために便利ですが、
            実際にいくら利益が残るのかも重要です。
          </p>

          <p style={{ marginTop: "18px" }}>
            例えば、10万円を投資して5万円の利益が出ればROIは50%です。
            一方、1,000万円を投資して300万円の利益が出ればROIは30%です。
          </p>

          <p style={{ marginTop: "18px" }}>
            ROIだけを見ると前者の方が高いですが、
            利益額は後者の方が大きくなります。
          </p>

          <p style={{ marginTop: "18px" }}>
            投資判断では、ROIと利益額の両方を見ることが大切です。
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
            実際の数字でROIを確認してみましょう
          </h2>

          <p
            style={{
              marginTop: "16px",
              fontSize: "18px",
              lineHeight: 1.8,
              color: "#4B5563",
            }}
          >
            BizToolsのROI計算ツールでは、
            投資額、回収額、追加費用を入力するだけで、
            ROI、純利益、総投資額などを確認できます。
          </p>

          <div style={{ marginTop: "24px" }}>
            <Link
              href="/roi-calculator"
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
              ROI計算ツールを使う
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
            ROIは、投資額に対してどれくらいの利益を得られたかを
            確認するための重要な指標です。
          </p>

          <p style={{ marginTop: "18px" }}>
            広告、設備、システムなどの投資を比較するときにROIを使うことで、
            投資効率を数字で確認できます。
          </p>

          <p style={{ marginTop: "18px" }}>
            ただし、ROIだけではなく、
            利益額、回収期間、リスク、資金繰りなども合わせて確認することで、
            より現実的な投資判断につながります。
          </p>
        </section>
      </article>
    </main>
  );
}