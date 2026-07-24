import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "利用規約",
  description:
    "BizToolsの利用規約です。本ウェブサイトおよび無料ビジネス計算ツールをご利用いただく際の条件について説明しています。",
  path: "/terms",
  lang: "ja",
});

export default function TermsPage() {
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
        利用規約
      </h1>

      <p
        style={{
          marginTop: "24px",
          lineHeight: 1.9,
          color: "#4B5563",
        }}
      >
        BizToolsへようこそ。本ウェブサイトをご利用いただくことで、
        本利用規約に同意したものとみなされます。
        本規約に同意いただけない場合は、本サイトのご利用をお控えください。
      </p>

      <h2
        style={{
          marginTop: "50px",
          fontSize: "30px",
          fontWeight: 700,
        }}
      >
        ウェブサイトの利用
      </h2>

      <p
        style={{
          marginTop: "18px",
          lineHeight: 1.9,
          color: "#4B5563",
        }}
      >
        BizToolsでは、無料のビジネス計算ツールおよび
        ビジネスに関する情報を提供しています。
        本サイトは、合法的な個人利用または事業利用の目的でご利用ください。
      </p>

      <h2
        style={{
          marginTop: "50px",
          fontSize: "30px",
          fontWeight: 700,
        }}
      >
        専門的なアドバイスではありません
      </h2>

      <p
        style={{
          marginTop: "18px",
          lineHeight: 1.9,
          color: "#4B5563",
        }}
      >
        BizToolsで提供する計算結果および情報は、
        一般的な情報提供のみを目的としています。
        法律、税務、会計、投資、またはその他の専門的な助言を
        提供するものではありません。
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
        当サイトでは正確な計算結果および情報の提供に努めていますが、
        その完全性、正確性、最新性を保証するものではありません。
        ご利用の際は、ご自身の判断と責任でご活用ください。
      </p>

      <h2
        style={{
          marginTop: "50px",
          fontSize: "30px",
          fontWeight: 700,
        }}
      >
        知的財産権
      </h2>

      <p
        style={{
          marginTop: "18px",
          lineHeight: 1.9,
          color: "#4B5563",
        }}
      >
        BizToolsに掲載されている文章、デザイン、ロゴ、
        計算ツールなどのコンテンツは、
        特別な記載がない限り著作権その他の知的財産権により保護されています。
      </p>

      <h2
        style={{
          marginTop: "50px",
          fontSize: "30px",
          fontWeight: 700,
        }}
      >
        規約の変更
      </h2>

      <p
        style={{
          marginTop: "18px",
          lineHeight: 1.9,
          color: "#4B5563",
        }}
      >
        当サイトは、必要に応じて本利用規約を予告なく変更する場合があります。
        変更後も継続して本サイトをご利用いただいた場合、
        変更後の利用規約に同意したものとみなされます。
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
        本利用規約に関するご質問は、
        お問い合わせページよりお気軽にご連絡ください。
      </p>
    </main>
  );
}