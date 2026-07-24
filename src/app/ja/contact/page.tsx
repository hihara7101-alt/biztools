import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "お問い合わせ",
  description:
    "BizToolsへのお問い合わせはこちらから。ご質問・ご提案・不具合のご報告を受け付けています。",
  path: "/contact",
  lang: "ja",
});

export default function ContactPage() {
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
        お問い合わせ
      </h1>

      <p
        style={{
          marginTop: "24px",
          lineHeight: 1.9,
          color: "#4B5563",
          fontSize: "18px",
        }}
      >
        BizToolsをご利用いただきありがとうございます。
      </p>

      <p
        style={{
          marginTop: "18px",
          lineHeight: 1.9,
          color: "#4B5563",
          fontSize: "18px",
        }}
      >
        ご質問、ご意見、ご要望、不具合のご報告などがございましたら、
        下記のメールアドレスまでお気軽にお問い合わせください。
      </p>

      <p
        style={{
          marginTop: "32px",
          fontWeight: 700,
          fontSize: "22px",
          color: "#111827",
        }}
      >
        contact@biztools.com
      </p>

      <p
        style={{
          marginTop: "24px",
          lineHeight: 1.9,
          color: "#6B7280",
        }}
      >
        内容を確認後、できる限り早く返信いたします。
        お問い合わせ内容によっては、回答まで数日いただく場合がありますので、
        あらかじめご了承ください。
      </p>
    </main>
  );
}