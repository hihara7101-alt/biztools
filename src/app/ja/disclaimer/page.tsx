import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "免責事項",
  description:
    "BizToolsで提供する情報および計算ツールに関する免責事項をご確認ください。",
  path: "/disclaimer",
  lang: "ja",
});

export default function DisclaimerPage() {
  return (
    <main
      style={{
        maxWidth: "900px",
        margin: "60px auto",
        padding: "0 24px",
      }}
    >
      <h1
        style={{
          fontSize: "44px",
          fontWeight: 800,
          color: "#111827",
        }}
      >
        免責事項
      </h1>

      <p
        style={{
          marginTop: "24px",
          lineHeight: 1.9,
          color: "#4B5563",
        }}
      >
        BizToolsで提供する情報および計算ツールは、
        一般的な情報提供および学習目的のために提供されています。
      </p>

      <h2
        style={{
          marginTop: "50px",
          fontSize: "30px",
          fontWeight: 700,
        }}
      >
        専門的な助言ではありません
      </h2>

      <p
        style={{
          marginTop: "18px",
          lineHeight: 1.9,
          color: "#4B5563",
        }}
      >
        本サイトの内容は、
        法律、税務、会計、投資、金融などの専門的な助言を
        提供するものではありません。
        重要な判断を行う際は、
        必要に応じて専門家へご相談ください。
      </p>

      <h2
        style={{
          marginTop: "50px",
          fontSize: "30px",
          fontWeight: 700,
        }}
      >
        情報の正確性
      </h2>

      <p
        style={{
          marginTop: "18px",
          lineHeight: 1.9,
          color: "#4B5563",
        }}
      >
        BizToolsでは、
        正確で最新の情報を提供するよう努めていますが、
        情報の完全性、正確性、
        信頼性について保証するものではありません。
      </p>

      <h2
        style={{
          marginTop: "50px",
          fontSize: "30px",
          fontWeight: 700,
        }}
      >
        責任の制限
      </h2>

      <p
        style={{
          marginTop: "18px",
          lineHeight: 1.9,
          color: "#4B5563",
        }}
      >
        本サイトの利用または掲載情報を利用したことにより
        生じたいかなる損害についても、
        BizToolsは責任を負いません。
      </p>

      <h2
        style={{
          marginTop: "50px",
          fontSize: "30px",
          fontWeight: 700,
        }}
      >
        外部サイトへのリンク
      </h2>

      <p
        style={{
          marginTop: "18px",
          lineHeight: 1.9,
          color: "#4B5563",
        }}
      >
        本サイトには第三者のウェブサイトへのリンクが
        含まれる場合があります。
        それらのサイトの内容や
        プライバシー保護について、
        当サイトは責任を負いません。
      </p>

      <h2
        style={{
          marginTop: "50px",
          fontSize: "30px",
          fontWeight: 700,
        }}
      >
        お問い合わせ
      </h2>

      <p
        style={{
          marginTop: "18px",
          lineHeight: 1.9,
          color: "#4B5563",
        }}
      >
        本免責事項についてご質問がございましたら、
        お問い合わせページよりご連絡ください。
      </p>
    </main>
  );
}