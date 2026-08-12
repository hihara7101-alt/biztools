import type { Metadata } from "next";
import Link from "next/link";

import Hero from "@/components/Hero";
import CalculatorCard from "@/components/CalculatorCard";
import FeatureCard from "@/components/FeatureCard";
import UserCard from "@/components/UserCard";

export const metadata: Metadata = {
  title: "BizTools | 無料ビジネス計算ツール",

  description:
    "利益計算、損益分岐点、価格設定、ROI、売上目標を無料で計算。起業家、フリーランス、中小企業、EC運営者の数字による意思決定を支援するビジネス計算ツールです。",

  keywords: [
    "ビジネス計算ツール",
    "利益計算",
    "利益率計算",
    "損益分岐点",
    "価格設定",
    "ROI計算",
    "売上目標",
    "起業",
    "フリーランス",
    "中小企業",
  ],

  alternates: {
    canonical: "/",

    languages: {
      "ja-JP": "/",
      "en-US": "/en",
      "x-default": "/",
    },
  },

  openGraph: {
    title: "BizTools | 無料ビジネス計算ツール",

    description:
      "利益・損益分岐点・価格・ROI・売上目標を無料で計算できるビジネスツール。",

    url: "/",

    siteName: "BizTools",

    locale: "ja_JP",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "BizTools | 無料ビジネス計算ツール",

    description:
      "ビジネスの利益・価格・ROI・売上目標をすばやく確認できる無料計算ツール。",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function Home() {
  return (
    <main
      style={{
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "0 24px 100px",
      }}
    >
      <Hero lang="ja" />

      {/* 人気のビジネスツール */}

      <section
        style={{
          marginTop: "40px",
        }}
      >
        <h2
          style={{
            fontSize: "40px",
            fontWeight: 700,
            textAlign: "center",
            color: "#111827",
          }}
        >
          人気のビジネスツール
        </h2>

        <p
          style={{
            marginTop: "18px",
            textAlign: "center",
            maxWidth: "760px",
            marginInline: "auto",
            color: "#6B7280",
            lineHeight: 1.8,
            fontSize: "18px",
          }}
        >
          BizToolsは、起業家・フリーランス・中小企業経営者・
          EC運営者などが、事業に必要な数字をすばやく確認するための
          無料ビジネス計算ツールです。
        </p>

        <p
          style={{
            marginTop: "14px",
            textAlign: "center",
            maxWidth: "760px",
            marginInline: "auto",
            color: "#6B7280",
            lineHeight: 1.8,
            fontSize: "17px",
          }}
        >
          利益が出ているか、いくらで販売すべきか、
          何個売れば黒字になるかなど、
          日々のビジネス判断に必要な数字を簡単に確認できます。
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(300px,1fr))",
            gap: "28px",
            marginTop: "50px",
          }}
        >
          <CalculatorCard
            icon="📈"
            title="利益計算ツール"
            description="売上・変動費・固定費から、利益・利益率・限界利益を確認できます。"
            bestFor={`• 中小企業
• フリーランス
• ネットショップ`}
            href="/profit-calculator"
            popular
            lang="ja"
          />

          <CalculatorCard
            icon="⚖️"
            title="損益分岐点計算ツール"
            description="固定費と変動費を回収し、利益が出始める販売数量と売上高を計算します。"
            bestFor={`• スタートアップ
• 小売業
• 飲食店`}
            href="/break-even-calculator"
            lang="ja"
          />

          <CalculatorCard
            icon="🎯"
            title="売上目標計算ツール"
            description="目標利益を達成するために必要な販売数量と売上高を計算します。"
            bestFor={`• 事業計画
• 売上予測`}
            href="/sales-target-calculator"
            lang="ja"
          />

          <CalculatorCard
            icon="💰"
            title="価格設定ツール"
            description="原価と希望利益率から、目標とする販売価格を計算します。"
            bestFor={`• 商品
• サービス`}
            href="/pricing-calculator"
            lang="ja"
          />

          <CalculatorCard
            icon="📊"
            title="ROI計算ツール"
            description="投資額と回収額から、投資利益率・純利益・投資倍率を確認できます。"
            bestFor={`• 投資
• マーケティング`}
            href="/roi-calculator"
            lang="ja"
          />
        </div>
      </section>

      {/* BizToolsで確認できること */}

      <section
        style={{
          marginTop: "100px",
          padding: "50px",
          background: "#F9FAFB",
          border: "1px solid #E5E7EB",
          borderRadius: "24px",
        }}
      >
        <h2
          style={{
            margin: 0,
            fontSize: "36px",
            fontWeight: 800,
            color: "#111827",
            textAlign: "center",
          }}
        >
          BizToolsで確認できること
        </h2>

        <p
          style={{
            marginTop: "20px",
            maxWidth: "780px",
            marginInline: "auto",
            fontSize: "17px",
            lineHeight: 1.9,
            color: "#4B5563",
            textAlign: "center",
          }}
        >
          ビジネスでは、売上だけではなく、利益、コスト、
          販売数量、投資効率などを組み合わせて考える必要があります。
          BizToolsでは、これらの数字をそれぞれの計算ツールで確認できます。
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(230px,1fr))",
            gap: "22px",
            marginTop: "40px",
          }}
        >
          {[
            {
              title: "利益を確認",
              text: "売上から変動費と固定費を差し引き、実際にどれだけ利益が残るかを確認します。",
            },
            {
              title: "黒字化の条件を確認",
              text: "損益分岐点を計算し、最低限必要な販売数量や売上高を確認します。",
            },
            {
              title: "販売価格を検討",
              text: "原価と希望利益率から、利益を確保するための販売価格を検討します。",
            },
            {
              title: "投資効果を確認",
              text: "広告、設備、システムなどへの投資がどの程度の利益を生んだかを確認します。",
            },
          ].map((item) => (
            <div
              key={item.title}
              style={{
                background: "#FFFFFF",
                border: "1px solid #E5E7EB",
                borderRadius: "16px",
                padding: "26px",
              }}
            >
              <h3
                style={{
                  margin: 0,
                  fontSize: "20px",
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
                  lineHeight: 1.8,
                  color: "#6B7280",
                }}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ビジネス計算の流れ */}

      <section
        style={{
          marginTop: "100px",
        }}
      >
        <h2
          style={{
            fontSize: "40px",
            fontWeight: 700,
            textAlign: "center",
            color: "#111827",
          }}
        >
          ビジネス計算の基本的な流れ
        </h2>

        <p
          style={{
            marginTop: "18px",
            maxWidth: "780px",
            marginInline: "auto",
            textAlign: "center",
            fontSize: "18px",
            lineHeight: 1.8,
            color: "#6B7280",
          }}
        >
          それぞれの計算ツールは単独でも利用できますが、
          組み合わせることで、より具体的な事業計画を考えることができます。
        </p>

        <div
          style={{
            display: "grid",
            gap: "20px",
            marginTop: "45px",
          }}
        >
          {[
            {
              number: "1",
              title: "原価と販売価格を確認する",
              text: "まず原価を把握し、価格設定ツールで必要な利益率を確保できる販売価格を検討します。",
              href: "/pricing-calculator",
              linkText: "価格設定ツールを見る",
            },
            {
              number: "2",
              title: "損益分岐点を確認する",
              text: "販売価格とコストが決まったら、何個販売すれば固定費を回収できるかを確認します。",
              href: "/break-even-calculator",
              linkText: "損益分岐点を計算する",
            },
            {
              number: "3",
              title: "利益と売上目標を設定する",
              text: "目標とする利益から必要な販売数量と売上高を計算し、実際の目標に落とし込みます。",
              href: "/sales-target-calculator",
              linkText: "売上目標を計算する",
            },
            {
              number: "4",
              title: "結果と投資効果を確認する",
              text: "実際の売上と費用から利益を確認し、広告費や設備投資などのROIも評価します。",
              href: "/roi-calculator",
              linkText: "ROIを計算する",
            },
          ].map((item) => (
            <div
              key={item.number}
              style={{
                display: "grid",
                gridTemplateColumns: "60px 1fr",
                gap: "22px",
                alignItems: "start",
                padding: "28px",
                border: "1px solid #E5E7EB",
                borderRadius: "18px",
                background: "#FFFFFF",
              }}
            >
              <div
                style={{
                  width: "52px",
                  height: "52px",
                  borderRadius: "50%",
                  background: "#2563EB",
                  color: "#FFFFFF",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 800,
                  fontSize: "20px",
                }}
              >
                {item.number}
              </div>

              <div>
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
                  {item.linkText} →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 実例 */}

      <section
        style={{
          marginTop: "100px",
        }}
      >
        <h2
          style={{
            fontSize: "40px",
            fontWeight: 700,
            textAlign: "center",
            color: "#111827",
          }}
        >
          例えば、商品を販売する場合
        </h2>

        <p
          style={{
            marginTop: "18px",
            maxWidth: "780px",
            marginInline: "auto",
            textAlign: "center",
            color: "#6B7280",
            lineHeight: 1.8,
            fontSize: "18px",
          }}
        >
          1個3,000円の商品を販売する場合でも、
          売上だけを見ていては事業の状態は分かりません。
        </p>

        <div
          style={{
            marginTop: "40px",
            padding: "36px",
            border: "1px solid #E5E7EB",
            borderRadius: "20px",
            background: "#F9FAFB",
          }}
        >
          <p
            style={{
              margin: 0,
              fontSize: "17px",
              lineHeight: 1.9,
              color: "#374151",
            }}
          >
            例えば、販売価格3,000円、変動費1,200円、
            月間固定費180,000円の場合、1個販売するごとに
            1,800円の限界利益が残ります。この数字から損益分岐点を計算すると、
            固定費を回収するために必要な販売数量を確認できます。
          </p>

          <p
            style={{
              marginTop: "18px",
              marginBottom: 0,
              fontSize: "17px",
              lineHeight: 1.9,
              color: "#374151",
            }}
          >
            さらに、月間30万円の利益を目標とする場合は、
            売上目標計算ツールを使って必要な販売数量を確認できます。
            このように複数の計算を組み合わせることで、
            「いくらで売るか」「何個売るか」「どの程度利益が残るか」を
            数字で考えることができます。
          </p>
        </div>
      </section>

      {/* BizToolsが選ばれる理由 */}

      <section
        style={{
          marginTop: "100px",
        }}
      >
        <h2
          style={{
            fontSize: "40px",
            fontWeight: 700,
            textAlign: "center",
            color: "#111827",
          }}
        >
          BizToolsが選ばれる理由
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(240px,1fr))",
            gap: "24px",
            marginTop: "50px",
          }}
        >
          <FeatureCard
            icon="⚡"
            title="シンプルで高速"
            description="複雑な表計算を作らなくても、必要な数字を数秒で確認できます。"
            href="/about"
            lang="ja"
          />

          <FeatureCard
            icon="🎯"
            title="ビジネス向け"
            description="利益・価格・売上・投資など、実務で使う数字に絞って設計しています。"
            href="/about"
            lang="ja"
          />

          <FeatureCard
            icon="📱"
            title="どこでも使える"
            description="スマートフォン・タブレット・PCからすぐに利用できます。"
            href="/about"
            lang="ja"
          />

          <FeatureCard
            icon="✅"
            title="完全無料"
            description="会員登録やサブスクリプションなしで利用できます。"
            href="/about"
            lang="ja"
          />
        </div>
      </section>

      {/* こんな方におすすめ */}

      <section
        style={{
          marginTop: "100px",
        }}
      >
        <h2
          style={{
            fontSize: "40px",
            fontWeight: 700,
            textAlign: "center",
            color: "#111827",
          }}
        >
          こんな方におすすめ
        </h2>

        <p
          style={{
            marginTop: "18px",
            textAlign: "center",
            maxWidth: "700px",
            marginInline: "auto",
            color: "#6B7280",
            lineHeight: 1.8,
            fontSize: "18px",
          }}
        >
          BizToolsは、ビジネスの数字を自分で確認したい方のために作られています。
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(250px,1fr))",
            gap: "24px",
            marginTop: "50px",
          }}
        >
          <UserCard
            icon="🚀"
            title="起業家"
            description="価格設定、損益分岐点、必要売上などを確認し、事業計画の数字を整理できます。"
          />

          <UserCard
            icon="💼"
            title="フリーランス"
            description="サービス価格や必要売上、利益率を確認し、仕事の採算性を判断できます。"
          />

          <UserCard
            icon="🏪"
            title="中小企業"
            description="利益・売上・固定費・変動費を整理し、経営判断の参考にできます。"
          />

          <UserCard
            icon="🎓"
            title="学生"
            description="損益分岐点、利益率、ROIなどのビジネス計算を実例に近い形で学べます。"
          />
        </div>
      </section>

      {/* CTA */}

      <section
        style={{
          marginTop: "110px",
          background: "#2563EB",
          borderRadius: "28px",
          padding: "70px 40px",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "42px",
            fontWeight: 800,
            color: "#FFFFFF",
            margin: 0,
          }}
        >
          ビジネスの数字をもっと簡単に
        </h2>

        <p
          style={{
            marginTop: "24px",
            fontSize: "20px",
            lineHeight: 1.8,
            color: "#DBEAFE",
            maxWidth: "760px",
            marginInline: "auto",
          }}
        >
          無料のビジネス計算ツールで、
          利益・価格・損益分岐点・ROI・売上目標を
          すばやく確認しましょう。
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            flexWrap: "wrap",
            marginTop: "40px",
          }}
        >
          <Link
            href="/calculators"
            style={{
              background: "#FFFFFF",
              color: "#2563EB",
              textDecoration: "none",
              padding: "16px 34px",
              borderRadius: "12px",
              fontWeight: 700,
              fontSize: "17px",
            }}
          >
            計算ツール一覧 →
          </Link>

          <Link
            href="/profit-calculator"
            style={{
              border: "2px solid rgba(255,255,255,.4)",
              color: "#FFFFFF",
              textDecoration: "none",
              padding: "16px 34px",
              borderRadius: "12px",
              fontWeight: 700,
              fontSize: "17px",
            }}
          >
            利益計算ツールを試す
          </Link>
        </div>
      </section>

      {/* よくある質問 */}

      <section
        style={{
          marginTop: "110px",
        }}
      >
        <h2
          style={{
            fontSize: "40px",
            fontWeight: 700,
            textAlign: "center",
            color: "#111827",
          }}
        >
          よくある質問
        </h2>

        <div
          style={{
            marginTop: "50px",
            display: "grid",
            gap: "24px",
          }}
        >
          {[
            {
              question: "BizToolsは本当に無料ですか？",
              answer:
                "はい。現在公開しているすべてのビジネス計算ツールは無料でご利用いただけます。",
            },
            {
              question: "会員登録は必要ですか？",
              answer:
                "いいえ。会員登録やログインは必要ありません。各計算ツールのページを開いて、そのまま利用できます。",
            },
            {
              question: "どの計算ツールから使えばよいですか？",
              answer:
                "現在の利益を確認したい場合は利益計算ツール、黒字化に必要な販売数量を知りたい場合は損益分岐点計算ツールがおすすめです。目的に合わせて選んでください。",
            },
            {
              question: "計算結果は事業計画に使えますか？",
              answer:
                "計算結果は事業計画や検討の参考として利用できます。ただし、実際の事業では税金、市場環境、追加費用などの条件も考慮する必要があります。",
            },
            {
              question: "英語でも利用できますか？",
              answer:
                "はい。BizToolsには英語版もあり、英語ページでは金額を米ドル表示で確認できます。",
            },
          ].map((item) => (
            <div
              key={item.question}
              style={{
                background: "#FFFFFF",
                border: "1px solid #E5E7EB",
                borderRadius: "18px",
                padding: "28px",
              }}
            >
              <h3
                style={{
                  margin: 0,
                  fontSize: "22px",
                  color: "#111827",
                }}
              >
                {item.question}
              </h3>

              <p
                style={{
                  marginTop: "16px",
                  marginBottom: 0,
                  color: "#6B7280",
                  lineHeight: 1.8,
                }}
              >
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* サイト情報 */}

      <section
        style={{
          marginTop: "100px",
          padding: "36px",
          borderTop: "1px solid #E5E7EB",
        }}
      >
        <h2
          style={{
            fontSize: "28px",
            fontWeight: 700,
            color: "#111827",
          }}
        >
          BizToolsについて
        </h2>

        <p
          style={{
            marginTop: "18px",
            maxWidth: "850px",
            fontSize: "17px",
            lineHeight: 1.9,
            color: "#4B5563",
          }}
        >
          BizToolsは、ビジネスの基本的な数字を
          分かりやすく確認できる無料計算ツールサイトです。
          複雑な会計ソフトを使う前の簡易確認や、
          事業計画・価格検討・利益分析などの参考として利用できます。
        </p>

        <p
          style={{
            marginTop: "16px",
            fontSize: "16px",
            lineHeight: 1.8,
            color: "#6B7280",
          }}
        >
          詳細については{" "}
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

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "BizTools",
            url: "https://uttacca.com",
            description:
              "利益、損益分岐点、価格設定、ROI、売上目標を計算できる無料ビジネス計算ツールサイト。",
            inLanguage: "ja-JP",
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "BizToolsは本当に無料ですか？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "はい。現在公開しているすべてのビジネス計算ツールは無料で利用できます。",
                },
              },
              {
                "@type": "Question",
                name: "会員登録は必要ですか？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "いいえ。会員登録やログインは必要ありません。",
                },
              },
              {
                "@type": "Question",
                name: "計算結果は事業計画に使えますか？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "計算結果は事業計画や検討の参考として利用できますが、実際の事業では税金、市場環境、追加費用なども考慮する必要があります。",
                },
              },
            ],
          }),
        }}
      />
    </main>
  );
}