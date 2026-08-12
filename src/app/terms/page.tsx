import type { Metadata } from "next";
import Link from "next/link";

import PageContainer from "@/components/PageContainer";

export const metadata: Metadata = {
  title: "利用規約 | BizTools",

  description:
    "BizToolsの利用条件、計算ツールの利用、禁止事項、知的財産権、免責事項などについて定めた利用規約です。",

  alternates: {
    canonical: "/terms",

    languages: {
      "ja-JP": "/terms",
      "en-US": "/en/terms",
      "x-default": "/terms",
    },
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsPageJa() {
  return (
    <PageContainer title="利用規約">
      <p>
        本利用規約（以下「本規約」といいます）は、
        BizToolsが提供するウェブサイトおよび計算ツールの
        利用条件を定めるものです。
      </p>

      <p style={{ marginTop: 24 }}>
        BizToolsをご利用いただくことで、
        本規約に同意いただいたものとみなします。
      </p>

      <h2
        style={{
          marginTop: 50,
          fontSize: 30,
          fontWeight: 700,
          color: "#111827",
        }}
      >
        サービスについて
      </h2>

      <p style={{ marginTop: 20 }}>
        BizToolsは、利益計算、損益分岐点、価格設定、
        売上目標、ROIなどのビジネス計算ツールおよび
        関連する参考情報を提供しています。
      </p>

      <p style={{ marginTop: 20 }}>
        現在提供している基本的な計算ツールは、
        原則として無料で利用できます。
      </p>

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
        BizToolsでは、可能な限り正確な計算結果と情報を提供するよう努めていますが、
        すべての結果について完全性、正確性、最新性を保証するものではありません。
      </p>

      <p style={{ marginTop: 20 }}>
        入力内容、端数処理、税率、費用の分類、
        その他の条件によって、実際の結果と異なる場合があります。
      </p>

      <h2
        style={{
          marginTop: 50,
          fontSize: 30,
          fontWeight: 700,
          color: "#111827",
        }}
      >
        専門的な助言について
      </h2>

      <p style={{ marginTop: 20 }}>
        BizToolsで提供する計算結果や情報は、
        一般的な情報提供および事業計画の参考を目的としています。
      </p>

      <p style={{ marginTop: 20 }}>
        当サイトは、法律、税務、会計、金融、投資その他の
        専門的な助言を提供するものではありません。
      </p>

      <p style={{ marginTop: 20 }}>
        重要な判断を行う場合は、必要に応じて税理士、会計士、
        弁護士、ファイナンシャルアドバイザーなどの
        適切な専門家にご相談ください。
      </p>

      <h2
        style={{
          marginTop: 50,
          fontSize: 30,
          fontWeight: 700,
          color: "#111827",
        }}
      >
        利用者の責任
      </h2>

      <p style={{ marginTop: 20 }}>
        BizToolsの計算結果や情報を利用して行う判断および行動については、
        利用者ご自身の責任で行ってください。
      </p>

      <p style={{ marginTop: 20 }}>
        特に重要な取引、契約、投資、価格設定、税務処理などについては、
        必要な情報を別途確認したうえで判断してください。
      </p>

      <h2
        style={{
          marginTop: 50,
          fontSize: 30,
          fontWeight: 700,
          color: "#111827",
        }}
      >
        禁止事項
      </h2>

      <p style={{ marginTop: 20 }}>
        BizToolsの利用にあたり、以下の行為を禁止します。
      </p>

      <ul
        style={{
          marginTop: 20,
          paddingLeft: 24,
          lineHeight: 2,
        }}
      >
        <li>法令または公序良俗に反する行為</li>
        <li>当サイトの運営を妨害する行為</li>
        <li>不正アクセスまたはシステムに過度な負荷を与える行為</li>
        <li>他の利用者または第三者の権利を侵害する行為</li>
        <li>当サイトを不正または違法な目的で利用する行為</li>
      </ul>

      <h2
        style={{
          marginTop: 50,
          fontSize: 30,
          fontWeight: 700,
          color: "#111827",
        }}
      >
        知的財産権
      </h2>

      <p style={{ marginTop: 20 }}>
        BizTools上の文章、デザイン、構成、ロゴ、
        独自のコンテンツその他の著作物に関する権利は、
        当サイトまたは正当な権利者に帰属します。
      </p>

      <p style={{ marginTop: 20 }}>
        法令で認められている場合を除き、
        権利者の許可なくコンテンツを複製、転載、
        再配布することはできません。
      </p>

      <h2
        style={{
          marginTop: 50,
          fontSize: 30,
          fontWeight: 700,
          color: "#111827",
        }}
      >
        サービスの変更・停止
      </h2>

      <p style={{ marginTop: 20 }}>
        BizToolsは、必要に応じて計算ツール、機能、
        コンテンツなどを追加、変更または停止する場合があります。
      </p>

      <p style={{ marginTop: 20 }}>
        メンテナンス、技術的問題その他の事情により、
        一時的にサイトを利用できない場合があります。
      </p>

      <h2
        style={{
          marginTop: 50,
          fontSize: 30,
          fontWeight: 700,
          color: "#111827",
        }}
      >
        外部サービス・リンク
      </h2>

      <p style={{ marginTop: 20 }}>
        BizToolsでは、第三者が提供するサービスを利用したり、
        外部ウェブサイトへのリンクを掲載したりする場合があります。
      </p>

      <p style={{ marginTop: 20 }}>
        外部サービスやウェブサイトの内容、利用条件、
        プライバシーに関する取り扱いについては、
        各提供者が定める規約やポリシーをご確認ください。
      </p>

      <h2
        style={{
          marginTop: 50,
          fontSize: 30,
          fontWeight: 700,
          color: "#111827",
        }}
      >
        免責事項
      </h2>

      <p style={{ marginTop: 20 }}>
        BizToolsの利用に関する詳細な免責事項については、
        {" "}
        <Link
          href="/disclaimer"
          style={{
            color: "#2563EB",
            fontWeight: 700,
            textDecoration: "none",
          }}
        >
          免責事項
        </Link>
        をご確認ください。
      </p>

      <h2
        style={{
          marginTop: 50,
          fontSize: 30,
          fontWeight: 700,
          color: "#111827",
        }}
      >
        プライバシー
      </h2>

      <p style={{ marginTop: 20 }}>
        個人情報、Cookie、アクセス解析、広告サービスなどの
        取り扱いについては、
        {" "}
        <Link
          href="/privacy"
          style={{
            color: "#2563EB",
            fontWeight: 700,
            textDecoration: "none",
          }}
        >
          プライバシーポリシー
        </Link>
        をご確認ください。
      </p>

      <h2
        style={{
          marginTop: 50,
          fontSize: 30,
          fontWeight: 700,
          color: "#111827",
        }}
      >
        本規約の変更
      </h2>

      <p style={{ marginTop: 20 }}>
        BizToolsは、必要に応じて本規約を変更する場合があります。
      </p>

      <p style={{ marginTop: 20 }}>
        変更後の規約は、本ページに掲載された時点から適用されます。
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
        本規約に関するお問い合わせは、
        {" "}
        <Link
          href="/contact"
          style={{
            color: "#2563EB",
            fontWeight: 700,
            textDecoration: "none",
          }}
        >
          お問い合わせページ
        </Link>
        よりご連絡ください。
      </p>

      <p
        style={{
          marginTop: 40,
          color: "#6B7280",
        }}
      >
        最終更新：2026年8月
      </p>
    </PageContainer>
  );
}