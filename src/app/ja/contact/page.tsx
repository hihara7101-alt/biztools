import type { Metadata } from "next";
import PageContainer from "@/components/PageContainer";

export const metadata: Metadata = {
  title: "お問い合わせ",
  description:
    "BizToolsへのお問い合わせ、ご意見、ご要望はこちらから。",
};

export default function ContactPageJa() {
  return (
    <PageContainer title="お問い合わせ">
      <p>
        BizToolsをご利用いただきありがとうございます。
      </p>

      <p style={{ marginTop: 24 }}>
        ご質問、ご意見、ご要望、不具合のご報告、新しい計算ツールの
        アイデアなどがございましたら、お気軽にご連絡ください。
      </p>

      <h2
        style={{
          marginTop: 50,
          fontSize: 30,
          fontWeight: 700,
          color: "#111827",
        }}
      >
        メールアドレス
      </h2>

      <p style={{ marginTop: 20 }}>
        contact@biztools.site
      </p>

      <p style={{ marginTop: 20 }}>
        ※現在は仮のメールアドレスです。正式公開時に変更予定です。
      </p>

      <h2
        style={{
          marginTop: 50,
          fontSize: 30,
          fontWeight: 700,
          color: "#111827",
        }}
      >
        ご返信について
      </h2>

      <p style={{ marginTop: 20 }}>
        通常2〜3営業日以内にご返信いたします。
      </p>

      <h2
        style={{
          marginTop: 50,
          fontSize: 30,
          fontWeight: 700,
          color: "#111827",
        }}
      >
        ご要望
      </h2>

      <p style={{ marginTop: 20 }}>
        「こんな計算ツールが欲しい」というご要望も歓迎しております。
      </p>
    </PageContainer>
  );
}