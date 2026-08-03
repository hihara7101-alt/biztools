import type { Metadata } from "next";

import BreakEvenCalculator from "./BreakEvenCalculator";

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

  alternates: {
    canonical: "/break-even-calculator",

    languages: {
      "ja-JP": "/break-even-calculator",
      "en-US": "/en/break-even-calculator",
      "x-default": "/break-even-calculator",
    },
  },

  openGraph: {
    title: "損益分岐点計算ツール | BizTools",

    description:
      "固定費・変動費・販売価格から損益分岐点を簡単に計算できる無料ツール。",

    url: "/break-even-calculator",

    siteName: "BizTools",

    locale: "ja_JP",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "損益分岐点計算ツール | BizTools",

    description:
      "固定費・変動費・販売価格から損益分岐点を簡単に計算できます。",
  },
};

export default function BreakEvenCalculatorPage() {
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
          固定費・変動費・販売価格から、利益が出るまでに必要な販売数と
          売上高を簡単に計算できます。
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
          起業家、フリーランス、小規模事業者、EC販売者など、
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
          損益分岐点とは、売上高と総費用が同じになり、利益も損失も
          発生していない状態を指します。
        </p>

        <p
          style={{
            marginTop: "16px",
            fontSize: "17px",
            lineHeight: 1.9,
            color: "#374151",
          }}
        >
          この基準を把握することで、最低限必要な販売数や売上目標を
          明確にし、価格設定、広告費、固定費、事業拡大などの判断に
          活用できます。
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
          損益分岐点の計算方法
        </h2>

        <p
          style={{
            marginTop: "20px",
            fontSize: "17px",
            lineHeight: 1.8,
            color: "#374151",
          }}
        >
          損益分岐販売数は、固定費を1個あたりの限界利益で割ることで
          計算できます。
        </p>

        <div
          style={{
            marginTop: "30px",
            background: "#F9FAFB",
            border: "1px solid #E5E7EB",
            borderRadius: "16px",
            padding: "30px",
          }}
        >
          <p
            style={{
              fontSize: "22px",
              fontWeight: 700,
              color: "#111827",
            }}
          >
            損益分岐販売数
          </p>

          <p
            style={{
              marginTop: "10px",
              fontSize: "22px",
              fontWeight: 700,
              color: "#2563EB",
            }}
          >
            固定費 ÷ 1個あたりの限界利益
          </p>
        </div>

        <p
          style={{
            marginTop: "25px",
            fontSize: "17px",
            lineHeight: 1.8,
            color: "#374151",
          }}
        >
          1個あたりの限界利益は、販売価格から1個あたりの変動費を
          差し引いた金額です。
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
          計算例
        </h2>

        <p
          style={{
            marginTop: "20px",
            fontSize: "17px",
            lineHeight: 1.9,
            color: "#374151",
          }}
        >
          例えば、商品を1個10,000円で販売し、1個あたりの変動費が
          4,000円、毎月の固定費が600,000円の場合を考えます。
        </p>

        <div
          style={{
            marginTop: "30px",
            background: "#FFFFFF",
            border: "1px solid #E5E7EB",
            borderRadius: "16px",
            padding: "30px",
          }}
        >
          <ul
            style={{
              paddingLeft: "22px",
              fontSize: "17px",
              lineHeight: 2,
              color: "#374151",
            }}
          >
            <li>販売価格：10,000円</li>
            <li>変動費：4,000円</li>
            <li>1個あたりの限界利益：6,000円</li>
            <li>固定費：600,000円</li>
            <li>損益分岐販売数：100個</li>
          </ul>
        </div>

        <p
          style={{
            marginTop: "25px",
            fontSize: "17px",
            lineHeight: 1.9,
            color: "#374151",
          }}
        >
          この場合、毎月100個を販売すると売上と費用が同額になり、
          101個目以降の販売から利益が発生します。
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
          損益分岐点を確認するメリット
        </h2>

        <p
          style={{
            marginTop: "20px",
            fontSize: "17px",
            lineHeight: 1.9,
            color: "#374151",
          }}
        >
          損益分岐点を把握することで、事業が利益を生み出すために必要な
          条件を具体的に確認できます。
        </p>

        <div
          style={{
            display: "grid",
            gap: "20px",
            marginTop: "30px",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(250px, 1fr))",
          }}
        >
          <div
            style={{
              background: "#F9FAFB",
              borderRadius: "16px",
              padding: "25px",
            }}
          >
            <h3
              style={{
                fontSize: "20px",
                fontWeight: 700,
                color: "#111827",
              }}
            >
              価格設定の確認
            </h3>

            <p
              style={{
                marginTop: "12px",
                lineHeight: 1.8,
                color: "#4B5563",
              }}
            >
              現在の販売価格で固定費と変動費を回収できるかを確認できます。
            </p>
          </div>

          <div
            style={{
              background: "#F9FAFB",
              borderRadius: "16px",
              padding: "25px",
            }}
          >
            <h3
              style={{
                fontSize: "20px",
                fontWeight: 700,
                color: "#111827",
              }}
            >
              売上目標の設定
            </h3>

            <p
              style={{
                marginTop: "12px",
                lineHeight: 1.8,
                color: "#4B5563",
              }}
            >
              黒字化に必要な最低販売数を基準に、現実的な売上目標を設定できます。
            </p>
          </div>

          <div
            style={{
              background: "#F9FAFB",
              borderRadius: "16px",
              padding: "25px",
            }}
          >
            <h3
              style={{
                fontSize: "20px",
                fontWeight: 700,
                color: "#111827",
              }}
            >
              事業リスクの把握
            </h3>

            <p
              style={{
                marginTop: "12px",
                lineHeight: 1.8,
                color: "#4B5563",
              }}
            >
              販売数が損益分岐点を下回った場合の赤字リスクを事前に把握できます。
            </p>
          </div>
        </div>
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
          この計算ツールを活用できる方
        </h2>

        <p
          style={{
            marginTop: "20px",
            fontSize: "17px",
            lineHeight: 1.9,
            color: "#374151",
          }}
        >
          損益分岐点の計算は、さまざまな事業や利益計画に活用できます。
        </p>

        <ul
          style={{
            marginTop: "25px",
            paddingLeft: "25px",
            fontSize: "17px",
            lineHeight: 2,
            color: "#374151",
          }}
        >
          <li>新しい事業を検討している起業家</li>
          <li>必要な顧客数を確認したいフリーランス</li>
          <li>商品の販売目標を設定したいEC販売者</li>
          <li>利益状況を見直したい中小企業</li>
          <li>経営や会計を学習している学生</li>
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
            gap: "30px",
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
              損益分岐点とは、売上高と総費用が同じになり、
              利益も損失も発生していない状態です。
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
              損益分岐点を超えるとどうなりますか？
            </h3>

            <p
              style={{
                marginTop: "10px",
                fontSize: "17px",
                lineHeight: 1.8,
                color: "#374151",
              }}
            >
              損益分岐点を超えた分の売上は、固定費を回収した後の
              利益に貢献します。
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
              損益分岐点を下げるにはどうすればよいですか？
            </h3>

            <p
              style={{
                marginTop: "10px",
                fontSize: "17px",
                lineHeight: 1.8,
                color: "#374151",
              }}
            >
              販売価格を上げる、変動費を下げる、固定費を削減するなどの
              方法があります。
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
              小規模事業でも損益分岐点の計算は必要ですか？
            </h3>

            <p
              style={{
                marginTop: "10px",
                fontSize: "17px",
                lineHeight: 1.8,
                color: "#374151",
              }}
            >
              はい。小規模事業やフリーランスでも、価格設定、必要顧客数、
              売上目標を考える際に有効です。
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
                  text:
                    "損益分岐点とは、売上高と総費用が同じになり、利益も損失も発生していない状態です。",
                },
              },
              {
                "@type": "Question",
                name: "損益分岐点を超えるとどうなりますか？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "損益分岐点を超えた分の売上は、固定費を回収した後の利益に貢献します。",
                },
              },
              {
                "@type": "Question",
                name: "損益分岐点を下げるにはどうすればよいですか？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "販売価格を上げる、変動費を下げる、固定費を削減するなどの方法があります。",
                },
              },
              {
                "@type": "Question",
                name: "小規模事業でも損益分岐点の計算は必要ですか？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "小規模事業やフリーランスでも、価格設定、必要顧客数、売上目標を考える際に有効です。",
                },
              },
            ],
          }),
        }}
      />
    </main>
  );
} 