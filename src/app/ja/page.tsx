import type { Metadata } from "next";
import Link from "next/link";

import Hero from "@/components/Hero";
import CalculatorCard from "@/components/CalculatorCard";
import FeatureCard from "@/components/FeatureCard";
import UserCard from "@/components/UserCard";

export const metadata: Metadata = {
  title: "BizTools | 無料ビジネス計算ツール",
  description:
    "利益計算、損益分岐点、ROI、価格設定、売上目標などを簡単に計算できる無料ビジネスツール。",
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
            maxWidth: "700px",
            marginInline: "auto",
            color: "#6B7280",
            lineHeight: 1.8,
            fontSize: "18px",
          }}
        >
          起業家・フリーランス・中小企業経営者のために設計された
          無料ビジネス計算ツールです。
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
            description="利益・利益率・限界利益を簡単に計算できます。"
            bestFor={`• 中小企業
• フリーランス
• ネットショップ`}
            href="/ja/profit-calculator"
            popular
            lang="ja"
          />

          <CalculatorCard
            icon="⚖️"
            title="損益分岐点計算ツール"
            description="利益が出始める販売数量を計算します。"
            bestFor={`• スタートアップ
• 小売業
• 飲食店`}
            href="/ja/break-even-calculator"
            lang="ja"
          />

          <CalculatorCard
            icon="🎯"
            title="売上目標計算ツール"
            description="目標利益に必要な売上を計算します。"
            bestFor={`• 事業計画
• 売上予測`}
            href="/ja/sales-target-calculator"
            lang="ja"
          />

          <CalculatorCard
            icon="💰"
            title="価格設定ツール"
            description="利益率から最適な販売価格を計算します。"
            bestFor={`• 商品
• サービス`}
            href="/ja/pricing-calculator"
            lang="ja"
          />

          <CalculatorCard
            icon="📊"
            title="ROI計算ツール"
            description="投資利益率（ROI）を簡単に計算できます。"
            bestFor={`• 投資
• マーケティング`}
            href="/ja/roi-calculator"
            lang="ja"
          />
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
            description="ビジネスに必要な計算を数秒で実行できます。"
            href="/ja/about"
            lang="ja"
          />

          <FeatureCard
            icon="🎯"
            title="ビジネス向け"
            description="起業家・フリーランス・中小企業のために設計されています。"
            href="/ja/about"
            lang="ja"
          />

          <FeatureCard
            icon="📱"
            title="どこでも使える"
            description="スマートフォン・タブレット・PCに対応しています。"
            href="/ja/about"
            lang="ja"
          />

          <FeatureCard
            icon="✅"
            title="完全無料"
            description="登録不要・サブスク不要・すべて無料です。"
            href="/ja/about"
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
          BizToolsはビジネスに携わるすべての方のために作られています。
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
            description="利益予測や事業計画を数字で確認できます。"
          />

          <UserCard
            icon="💼"
            title="フリーランス"
            description="適切な価格設定や利益率を簡単に計算できます。"
          />

          <UserCard
            icon="🏪"
            title="中小企業"
            description="利益・売上・損益分岐点をすばやく分析できます。"
          />

          <UserCard
            icon="🎓"
            title="学生"
            description="ビジネスや会計を実践的に学べます。"
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
          利益・価格・ROI・売上目標をすばやく計算しましょう。
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
            href="/ja/calculators"
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
            ビジネスツールを見る →
          </Link>

          <Link
            href="/ja/profit-calculator"
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
          <div
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
              本当に無料ですか？
            </h3>

            <p
              style={{
                marginTop: "16px",
                color: "#6B7280",
                lineHeight: 1.8,
              }}
            >
              はい。BizToolsのすべてのビジネス計算ツールは無料でご利用いただけます。
            </p>
          </div>

          <div
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
              会員登録は必要ですか？
            </h3>

            <p
              style={{
                marginTop: "16px",
                color: "#6B7280",
                lineHeight: 1.8,
              }}
            >
              いいえ。登録不要ですぐにご利用いただけます。
            </p>
          </div>
                    <div
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
              どんな人におすすめですか？
            </h3>

            <p
              style={{
                marginTop: "16px",
                color: "#6B7280",
                lineHeight: 1.8,
              }}
            >
              起業家、フリーランス、中小企業経営者、ネットショップ運営者、
              学生など、ビジネスの数字を素早く確認したいすべての方におすすめです。
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}