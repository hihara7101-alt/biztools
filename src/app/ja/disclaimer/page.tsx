import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "免責事項 | BizTools",
  description:
    "BizToolsの免責事項です。本サイトおよび計算ツールのご利用について説明しています。",
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
        最終更新日：2026年6月
      </p>

      <section style={{ marginTop: "60px" }}>
        <h2
          style={{
            fontSize: "30px",
            fontWeight: 700,
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
          BizToolsでは、無料のビジネス計算ツールおよび情報を提供しています。
          本サイトの内容は一般的な情報提供を目的としており、
          特定の状況に対する助言を行うものではありません。
        </p>
      </section>

      <section style={{ marginTop: "50px" }}>
        <h2
          style={{
            fontSize: "30px",
            fontWeight: 700,
          }}
        >
          専門的なアドバイスではありません
        </h2>

        <p
          style={{
            marginTop: "20px",
            color: "#6B7280",
            lineHeight: 1.9,
          }}
        >
          本サイトの情報は、会計・税務・法律・投資・経営に関する
          専門的なアドバイスではありません。
          重要な判断を行う際は、専門家へご相談ください。
        </p>
      </section>

      <section style={{ marginTop: "50px" }}>
        <h2
          style={{
            fontSize: "30px",
            fontWeight: 700,
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
          計算ツールは正確な結果を提供できるよう努めていますが、
          計算結果の完全性・正確性・適用性を保証するものではありません。
          必ずご自身でも内容をご確認ください。
        </p>
      </section>

      <section style={{ marginTop: "50px" }}>
        <h2
          style={{
            fontSize: "30px",
            fontWeight: 700,
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
          本サイトの情報または計算ツールを利用したことによって生じた
          いかなる損害・損失・逸失利益についても、
          BizToolsは責任を負いません。
          最終的な判断は利用者ご自身の責任でお願いいたします。
        </p>
      </section>

      <section style={{ marginTop: "50px" }}>
        <h2
          style={{
            fontSize: "30px",
            fontWeight: 700,
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
          当サイトには外部サイトへのリンクが含まれる場合があります。
          リンク先の内容やサービスについて、
          BizToolsは責任を負いません。
        </p>
      </section>
    </main>
  );
}