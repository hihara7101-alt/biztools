import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "免責事項 | BizTools",

  description:
    "BizToolsの免責事項です。計算結果、情報の正確性、専門的助言、外部リンク、サービス利用に関する注意事項を説明しています。",

  alternates: {
    canonical: "/disclaimer",

    languages: {
      "ja-JP": "/disclaimer",
      "en-US": "/en/disclaimer",
      "x-default": "/disclaimer",
    },
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function DisclaimerPageJa() {
  return (
    <main
      style={{
        maxWidth: 900,
        margin: "0 auto",
        padding: "70px 24px",
      }}
    >
      <h1
        style={{
          fontSize: "54px",
          fontWeight: 800,
          color: "#111827",
          lineHeight: 1.15,
        }}
      >
        免責事項
      </h1>

      <p
        style={{
          marginTop: "24px",
          color: "#6B7280",
          fontSize: "17px",
          lineHeight: 1.9,
        }}
      >
        最終更新日：2026年8月
      </p>

      <section style={{ marginTop: "60px" }}>
        <h2
          style={{
            fontSize: "30px",
            fontWeight: 700,
            color: "#111827",
          }}
        >
          一般的な情報について
        </h2>

        <p
          style={{
            marginTop: "20px",
            color: "#6B7280",
            lineHeight: 1.9,
          }}
        >
          BizToolsでは、利益計算、損益分岐点、価格設定、
          売上目標、ROIなどの無料ビジネス計算ツールおよび
          関連する参考情報を提供しています。
        </p>

        <p
          style={{
            marginTop: "20px",
            color: "#6B7280",
            lineHeight: 1.9,
          }}
        >
          当サイトの内容は、一般的な情報提供、
          学習、事業計画、比較検討などの参考を目的としています。
        </p>
      </section>

      <section style={{ marginTop: "50px" }}>
        <h2
          style={{
            fontSize: "30px",
            fontWeight: 700,
            color: "#111827",
          }}
        >
          専門的な助言ではありません
        </h2>

        <p
          style={{
            marginTop: "20px",
            color: "#6B7280",
            lineHeight: 1.9,
          }}
        >
          BizToolsで提供する情報や計算結果は、
          法律、税務、会計、金融、投資、経営などに関する
          専門的な助言を提供するものではありません。
        </p>

        <p
          style={{
            marginTop: "20px",
            color: "#6B7280",
            lineHeight: 1.9,
          }}
        >
          重要な取引、契約、税務処理、投資その他の判断を行う場合は、
          必要に応じて税理士、会計士、弁護士、
          ファイナンシャルアドバイザーなどの
          適切な専門家にご相談ください。
        </p>
      </section>

      <section style={{ marginTop: "50px" }}>
        <h2
          style={{
            fontSize: "30px",
            fontWeight: 700,
            color: "#111827",
          }}
        >
          計算結果について
        </h2>

        <p
          style={{
            marginTop: "20px",
            color: "#6B7280",
            lineHeight: 1.9,
          }}
        >
          BizToolsでは、可能な限り正確な計算結果を提供するよう努めていますが、
          計算結果の完全性、正確性、最新性、
          特定の目的への適合性を保証するものではありません。
        </p>

        <p
          style={{
            marginTop: "20px",
            color: "#6B7280",
            lineHeight: 1.9,
          }}
        >
          入力値、端数処理、税率、費用区分、
          その他の前提条件によって、
          実際の結果と異なる場合があります。
        </p>

        <p
          style={{
            marginTop: "20px",
            color: "#6B7280",
            lineHeight: 1.9,
          }}
        >
          重要な判断を行う場合は、
          計算結果を利用する前にご自身でも内容をご確認ください。
        </p>
      </section>

      <section style={{ marginTop: "50px" }}>
        <h2
          style={{
            fontSize: "30px",
            fontWeight: 700,
            color: "#111827",
          }}
        >
          将来の結果を保証するものではありません
        </h2>

        <p
          style={{
            marginTop: "20px",
            color: "#6B7280",
            lineHeight: 1.9,
          }}
        >
          計算ツールによって表示される利益、売上、
          ROI、販売数量その他の結果は、
          入力された条件に基づく計算結果です。
        </p>

        <p
          style={{
            marginTop: "20px",
            color: "#6B7280",
            lineHeight: 1.9,
          }}
        >
          実際の事業結果は、市場環境、競争、需要、
          原価、税金、為替、広告効果など、
          さまざまな要因によって変化する可能性があります。
        </p>

        <p
          style={{
            marginTop: "20px",
            color: "#6B7280",
            lineHeight: 1.9,
          }}
        >
          BizToolsの計算結果は、
          将来の利益や事業成果を保証するものではありません。
        </p>
      </section>

      <section style={{ marginTop: "50px" }}>
        <h2
          style={{
            fontSize: "30px",
            fontWeight: 700,
            color: "#111827",
          }}
        >
          利用者の責任
        </h2>

        <p
          style={{
            marginTop: "20px",
            color: "#6B7280",
            lineHeight: 1.9,
          }}
        >
          BizToolsの情報や計算結果を利用して行う判断、
          取引、投資、価格設定、その他の行動については、
          利用者ご自身の責任で行ってください。
        </p>

        <p
          style={{
            marginTop: "20px",
            color: "#6B7280",
            lineHeight: 1.9,
          }}
        >
          利用目的に応じて必要な情報を追加で確認し、
          ご自身の状況に適した判断を行ってください。
        </p>
      </section>

      <section style={{ marginTop: "50px" }}>
        <h2
          style={{
            fontSize: "30px",
            fontWeight: 700,
            color: "#111827",
          }}
        >
          責任の制限
        </h2>

        <p
          style={{
            marginTop: "20px",
            color: "#6B7280",
            lineHeight: 1.9,
          }}
        >
          法令で認められる範囲において、
          BizToolsの利用、利用不能、計算結果、
          掲載情報などに関連して発生した損害、
          損失、逸失利益その他の不利益について、
          BizToolsは責任を負わないものとします。
        </p>
      </section>

      <section style={{ marginTop: "50px" }}>
        <h2
          style={{
            fontSize: "30px",
            fontWeight: 700,
            color: "#111827",
          }}
        >
          外部リンクについて
        </h2>

        <p
          style={{
            marginTop: "20px",
            color: "#6B7280",
            lineHeight: 1.9,
          }}
        >
          BizToolsには、第三者が運営する外部ウェブサイトへの
          リンクが含まれる場合があります。
        </p>

        <p
          style={{
            marginTop: "20px",
            color: "#6B7280",
            lineHeight: 1.9,
          }}
        >
          外部サイトの内容、サービス、情報の正確性、
          プライバシーその他の取り扱いについては、
          各外部サイトの運営者が責任を負います。
        </p>
      </section>

      <section style={{ marginTop: "50px" }}>
        <h2
          style={{
            fontSize: "30px",
            fontWeight: 700,
            color: "#111827",
          }}
        >
          サービスの変更・停止
        </h2>

        <p
          style={{
            marginTop: "20px",
            color: "#6B7280",
            lineHeight: 1.9,
          }}
        >
          BizToolsは、必要に応じて計算ツール、
          コンテンツ、機能などを追加、変更、
          一時停止または終了する場合があります。
        </p>

        <p
          style={{
            marginTop: "20px",
            color: "#6B7280",
            lineHeight: 1.9,
          }}
        >
          メンテナンスや技術的な問題などにより、
          一時的にサービスを利用できない場合があります。
        </p>
      </section>

      <section style={{ marginTop: "50px" }}>
        <h2
          style={{
            fontSize: "30px",
            fontWeight: 700,
            color: "#111827",
          }}
        >
          関連ページ
        </h2>

        <p
          style={{
            marginTop: "20px",
            color: "#6B7280",
            lineHeight: 1.9,
          }}
        >
          当サイトの利用条件については、
          {" "}
          <Link
            href="/terms"
            style={{
              color: "#2563EB",
              fontWeight: 700,
              textDecoration: "none",
            }}
          >
            利用規約
          </Link>
          をご確認ください。
        </p>

        <p
          style={{
            marginTop: "20px",
            color: "#6B7280",
            lineHeight: 1.9,
          }}
        >
          Cookie、アクセス解析、広告サービス、
          個人情報の取り扱いについては、
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
      </section>

      <section style={{ marginTop: "50px" }}>
        <h2
          style={{
            fontSize: "30px",
            fontWeight: 700,
            color: "#111827",
          }}
        >
          お問い合わせ
        </h2>

        <p
          style={{
            marginTop: "20px",
            color: "#6B7280",
            lineHeight: 1.9,
          }}
        >
          本免責事項に関するお問い合わせは、
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
      </section>
    </main>
  );
}