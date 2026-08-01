import type { Metadata } from "next";

import BreakEvenCalculator from "../../break-even-calculator/BreakEvenCalculator";

export const metadata: Metadata = {
  title: "損益分岐点計算ツール | BizTools",
  description:
    "固定費・変動費・販売価格から損益分岐点、必要販売数、必要売上高を無料で計算できます。起業家、個人事業主、中小企業向け。",
  keywords: [
    "損益分岐点",
    "損益分岐点計算",
    "損益分岐点計算ツール",
    "利益計算",
    "固定費",
    "変動費",
    "事業計画",
  ],
};

export default function BreakEvenCalculatorJaPage() {
  return (
    <main
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "40px 20px 80px",
      }}
    >
      <section>
        <h1
          style={{
            fontSize: "42px",
            fontWeight: 900,
            lineHeight: 1.2,
            color: "#111827",
          }}
        >
          損益分岐点計算ツール
        </h1>

        <p
          style={{
            marginTop: "20px",
            fontSize: "20px",
            lineHeight: 1.8,
            color: "#4B5563",
            maxWidth: "850px",
          }}
        >
          固定費・変動費・販売価格から、
          利益が出るまでに必要な販売数と売上高を
          簡単に計算できます。
        </p>

        <p
          style={{
            marginTop: "14px",
            fontSize: "17px",
            lineHeight: 1.8,
            color: "#6B7280",
            maxWidth: "850px",
          }}
        >
          起業家、フリーランス、小規模事業者、
          EC販売者など、
          ビジネスの利益計画に役立つ無料ツールです。
        </p>
      </section>

      <BreakEvenCalculator lang="ja" />
            <section
        style={{
          marginTop: "70px",
        }}
      >
        <h2
          style={{
            fontSize: "32px",
            fontWeight: 800,
            color: "#111827",
          }}
        >
          損益分岐点とは？
        </h2>

        <p
          style={{
            marginTop: "20px",
            fontSize: "17px",
            lineHeight: 1.9,
            color: "#374151",
          }}
        >
          損益分岐点とは、売上と総費用がちょうど等しくなる
          ポイントです。この時点では利益も損失も発生しておらず、
          ここを超えた売上から利益が生まれます。
        </p>

        <p
          style={{
            marginTop: "16px",
            fontSize: "17px",
            lineHeight: 1.9,
            color: "#374151",
          }}
        >
          損益分岐点を把握することで、
          価格設定、コスト管理、販売目標、
          事業計画などをより正確に立てられます。
        </p>
      </section>

      <section
        style={{
          marginTop: "70px",
        }}
      >
        <h2
          style={{
            fontSize: "32px",
            fontWeight: 800,
            color: "#111827",
          }}
        >
          計算式
        </h2>

        <div
          style={{
            marginTop: "25px",
            background: "#F9FAFB",
            border: "1px solid #E5E7EB",
            borderRadius: "16px",
            padding: "30px",
          }}
        >
          <p
            style={{
              fontSize: "24px",
              fontWeight: 700,
              color: "#2563EB",
            }}
          >
            損益分岐点販売数 =
            固定費 ÷（販売価格 − 変動費）
          </p>
        </div>

        <p
          style={{
            marginTop: "25px",
            fontSize: "17px",
            lineHeight: 1.9,
            color: "#374151",
          }}
        >
          1商品あたりの限界利益（販売価格−変動費）が
          固定費をどれだけ早く回収できるかを決めます。
        </p>
      </section>

      <section
        style={{
          marginTop: "70px",
        }}
      >
        <h2
          style={{
            fontSize: "32px",
            fontWeight: 800,
            color: "#111827",
          }}
        >
          このツールがおすすめの方
        </h2>

        <ul
          style={{
            marginTop: "25px",
            paddingLeft: "24px",
            fontSize: "17px",
            lineHeight: 2,
            color: "#374151",
          }}
        >
          <li>起業を検討している方</li>
          <li>個人事業主・フリーランス</li>
          <li>ネットショップ運営者</li>
          <li>中小企業経営者</li>
          <li>経営や会計を学ぶ学生</li>
        </ul>
      </section>

      <section
        style={{
          marginTop: "70px",
        }}
      >
        <h2
          style={{
            fontSize: "32px",
            fontWeight: 800,
            color: "#111827",
          }}
        >
          よくある質問
        </h2>

        <div
          style={{
            marginTop: "30px",
            display: "flex",
            flexDirection: "column",
            gap: "28px",
          }}
        >
          <div>
            <h3
              style={{
                fontSize: "20px",
                fontWeight: 700,
                color: "#111827",
              }}
            >
              損益分岐点とは何ですか？
            </h3>

            <p
              style={{
                marginTop: "10px",
                fontSize: "17px",
                lineHeight: 1.8,
                color: "#374151",
              }}
            >
              売上と総費用が等しくなり、
              利益も損失も発生しない売上水準です。
            </p>
          </div>

          <div>
            <h3
              style={{
                fontSize: "20px",
                fontWeight: 700,
                color: "#111827",
              }}
            >
              損益分岐点を下げるには？
            </h3>

            <p
              style={{
                marginTop: "10px",
                fontSize: "17px",
                lineHeight: 1.8,
                color: "#374151",
              }}
            >
              販売価格を上げる、
              変動費を下げる、
              固定費を削減するなどの方法があります。
            </p>
          </div>

          <div>
            <h3
              style={{
                fontSize: "20px",
                fontWeight: 700,
                color: "#111827",
              }}
            >
              この計算機は無料ですか？
            </h3>

            <p
              style={{
                marginTop: "10px",
                fontSize: "17px",
                lineHeight: 1.8,
                color: "#374151",
              }}
            >
              はい。BizToolsのすべての計算ツールは無料で利用できます。
            </p>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "損益分岐点とは何ですか？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "売上と総費用が等しくなるポイントです。",
                },
              },
              {
                "@type": "Question",
                name: "損益分岐点を下げるには？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "価格を上げる、変動費を下げる、固定費を削減する方法があります。",
                },
              },
            ],
          }),
        }}
      />

    </main>
  );
}