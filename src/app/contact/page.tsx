import type { Metadata } from "next";
import Link from "next/link";

import PageContainer from "@/components/PageContainer";

export const metadata: Metadata = {
  title: "お問い合わせ | BizTools",

  description:
    "BizToolsへのお問い合わせ、ご意見、不具合のご報告はこちらから。",

  alternates: {
    canonical: "/contact",

    languages: {
      "ja-JP": "/contact",
      "en-US": "/en/contact",
      "x-default": "/contact",
    },
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function ContactPageJa() {
  return (
    <PageContainer title="お問い合わせ">
      <p>
        BizToolsをご利用いただきありがとうございます。
      </p>

      <p style={{ marginTop: 24 }}>
        サイトに関するご質問、ご意見、不具合のご報告などがございましたら、
        下記のメールアドレスまでご連絡ください。
      </p>

      <h2
        style={{
          marginTop: 50,
          fontSize: 30,
          fontWeight: 700,
          color: "#111827",
        }}
      >
        お問い合わせ内容
      </h2>

      <p style={{ marginTop: 20 }}>
        以下のような内容についてお問い合わせいただけます。
      </p>

      <ul
        style={{
          marginTop: 20,
          paddingLeft: 24,
          lineHeight: 2,
        }}
      >
        <li>計算ツールの不具合や表示に関するご報告</li>
        <li>計算内容やサイトの使い方に関するご質問</li>
        <li>サイトに関するご意見・ご要望</li>
        <li>その他、BizToolsに関するお問い合わせ</li>
      </ul>

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
            fontWeight: 700,
          }}
        >
          biztools.sites@gmail.com
        </a>
      </p>

      <p
        style={{
          marginTop: 16,
          color: "#6B7280",
        }}
      >
        お問い合わせの際は、該当するページや計算ツール、
        ご質問の内容などをできるだけ具体的にご記載ください。
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
        お問い合わせ内容を確認後、通常2〜3営業日以内の返信を目安としております。
        内容によっては返信までに時間がかかる場合や、
        個別に回答できない場合がありますのでご了承ください。
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
        お問い合わせの際にお送りいただいた情報は、
        お問い合わせへの対応や必要な連絡のために使用します。
      </p>

      <p style={{ marginTop: 20 }}>
        個人情報の取り扱いについては、
        BizToolsの
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
        計算結果に関するお問い合わせ
      </h2>

      <p style={{ marginTop: 20 }}>
        BizToolsでは計算方法やツールに関するご質問を受け付けていますが、
        個別の税務、法務、投資、会計などに関する専門的な助言は提供しておりません。
      </p>

      <p style={{ marginTop: 20 }}>
        サイトおよび計算結果の利用については、
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
        もあわせてご確認ください。
      </p>
    </PageContainer>
  );
}