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
        ご質問、ご意見、ご要望、不具合のご報告、
        新しい計算ツールのご提案などがございましたら、
        お気軽にご連絡ください。
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
        <a
          href="mailto:biztools.sites@gmail.com"
          style={{
            color: "#2563EB",
            textDecoration: "none",
            fontWeight: 600,
          }}
        >
          biztools.sites@gmail.com
        </a>
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
        お問い合わせ内容を確認後、
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

      <h2
        style={{
          marginTop: 50,
          fontSize: 30,
          fontWeight: 700,
          color: "#111827",
        }}
      >
        個人情報について
      </h2>

      <p style={{ marginTop: 20 }}>
        お問い合わせの際にいただいた情報は、
        お問い合わせへの返信以外の目的では使用いたしません。
      </p>
    </PageContainer>
  );
}