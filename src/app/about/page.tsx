import type { Metadata } from "next";
import Link from "next/link";

import PageContainer from "@/components/PageContainer";

export const metadata: Metadata = {
  title: "このサイトについて | BizTools",

  description:
    "BizToolsは、利益計算、損益分岐点、価格設定、ROI、売上目標などを簡単に確認できる無料ビジネス計算ツールサイトです。",

  alternates: {
    canonical: "/about",

    languages: {
      "ja-JP": "/about",
      "en-US": "/en/about",
      "x-default": "/about",
    },
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function AboutPageJa() {
  return (
    <PageContainer title="このサイトについて">
      <p>
        BizToolsは、起業家、個人事業主、フリーランス、中小企業、
        ネットショップ運営者などが、ビジネスに必要な数字を
        簡単に確認できるように作られた無料のビジネス計算ツールサイトです。
      </p>

      <p style={{ marginTop: 24 }}>
        利益計算、損益分岐点、価格設定、売上目標、
        ROI（投資利益率）など、事業計画や日々の経営判断で
        よく使われる計算をすばやく確認できるツールを提供しています。
      </p>

      <p style={{ marginTop: 24 }}>
        複雑なExcelの計算式を作成したり、
        専門的な会計ソフトを準備したりしなくても、
        必要な数字を入力するだけで結果を確認できることを目指しています。
      </p>

      <h2
        style={{
          marginTop: 50,
          fontSize: 30,
          fontWeight: 700,
          color: "#111827",
        }}
      >
        BizToolsの目的
      </h2>

      <p style={{ marginTop: 20 }}>
        ビジネスでは、売上だけではなく、利益、固定費、変動費、
        販売価格、販売数量、投資効率など、
        複数の数字を組み合わせて考える必要があります。
      </p>

      <p style={{ marginTop: 20 }}>
        BizToolsでは、これらの基本的な計算をできるだけ分かりやすくし、
        数字を使った意思決定を行うための参考情報を提供することを目的としています。
      </p>

      <h2
        style={{
          marginTop: 50,
          fontSize: 30,
          fontWeight: 700,
          color: "#111827",
        }}
      >
        利用できる計算ツール
      </h2>

      <ul
        style={{
          marginTop: 20,
          paddingLeft: 24,
          lineHeight: 2,
        }}
      >
        <li>
          <Link
            href="/profit-calculator"
            style={{
              color: "#2563EB",
              fontWeight: 700,
              textDecoration: "none",
            }}
          >
            利益計算ツール
          </Link>
          ：売上と費用から利益や利益率を確認できます。
        </li>

        <li>
          <Link
            href="/break-even-calculator"
            style={{
              color: "#2563EB",
              fontWeight: 700,
              textDecoration: "none",
            }}
          >
            損益分岐点計算ツール
          </Link>
          ：黒字化に必要な販売数量や売上高を確認できます。
        </li>

        <li>
          <Link
            href="/pricing-calculator"
            style={{
              color: "#2563EB",
              fontWeight: 700,
              textDecoration: "none",
            }}
          >
            価格設定ツール
          </Link>
          ：原価と希望利益率から販売価格を計算できます。
        </li>

        <li>
          <Link
            href="/sales-target-calculator"
            style={{
              color: "#2563EB",
              fontWeight: 700,
              textDecoration: "none",
            }}
          >
            売上目標計算ツール
          </Link>
          ：目標利益に必要な販売数量と売上高を確認できます。
        </li>

        <li>
          <Link
            href="/roi-calculator"
            style={{
              color: "#2563EB",
              fontWeight: 700,
              textDecoration: "none",
            }}
          >
            ROI計算ツール
          </Link>
          ：投資額と回収額から投資効率を確認できます。
        </li>
      </ul>

      <h2
        style={{
          marginTop: 50,
          fontSize: 30,
          fontWeight: 700,
          color: "#111827",
        }}
      >
        BizToolsの特徴
      </h2>

      <ul
        style={{
          marginTop: 20,
          paddingLeft: 24,
          lineHeight: 2,
        }}
      >
        <li>無料で利用可能</li>
        <li>会員登録・ログイン不要</li>
        <li>起業家・フリーランス・中小企業向け</li>
        <li>日本語・英語に対応</li>
        <li>スマートフォン・タブレット・PCに対応</li>
        <li>計算方法や具体例も確認可能</li>
      </ul>

      <h2
        style={{
          marginTop: 50,
          fontSize: 30,
          fontWeight: 700,
          color: "#111827",
        }}
      >
        計算結果について
      </h2>

      <p style={{ marginTop: 20 }}>
        BizToolsの計算結果は、事業計画、価格検討、
        利益分析などを行う際の参考として利用することを目的としています。
      </p>

      <p style={{ marginTop: 20 }}>
        実際の事業では、税金、資金調達、契約条件、
        市場環境、追加費用など、計算ツールだけでは
        反映できない要素が存在する場合があります。
      </p>

      <p style={{ marginTop: 20 }}>
        重要な経営・税務・法務・投資判断については、
        必要に応じて専門家へご相談ください。
      </p>

      <h2
        style={{
          marginTop: 50,
          fontSize: 30,
          fontWeight: 700,
          color: "#111827",
        }}
      >
        お問い合わせ
      </h2>

      <p style={{ marginTop: 20 }}>
        サイトに関するご意見、ご要望、不具合のご報告などがございましたら、
        お問い合わせページよりご連絡ください。
      </p>

      <p style={{ marginTop: 20 }}>
        <Link
          href="/contact"
          style={{
            color: "#2563EB",
            fontWeight: 700,
            textDecoration: "none",
          }}
        >
          お問い合わせページ →
        </Link>
      </p>
    </PageContainer>
  );
}