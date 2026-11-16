import type { Metadata } from "next";
import Link from "next/link";

import PageContainer from "@/components/PageContainer";

export const metadata: Metadata = {
  title: "プライバシーポリシー | BizTools",

  description:
    "BizToolsにおける個人情報、Cookie、Google Analytics、Google AdSenseなどの取り扱いについて説明します。",

  alternates: {
    canonical: "/privacy",

    languages: {
      "ja-JP": "/privacy",
      "en-US": "/en/privacy",
      "x-default": "/privacy",
    },
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPageJa() {
  return (
    <PageContainer title="プライバシーポリシー">
      <p>
        BizToolsでは、利用者のプライバシーを尊重し、
        当サイトで取り扱う情報を適切に管理することを重要と考えています。
      </p>

      <p style={{ marginTop: 24 }}>
        本プライバシーポリシーでは、BizToolsを利用した際に
        取得される可能性のある情報、その利用目的、
        Cookieや第三者サービスの利用について説明します。
      </p>

      <h2
        style={{
          marginTop: 50,
          fontSize: 30,
          fontWeight: 700,
          color: "#111827",
        }}
      >
        取得する情報
      </h2>

      <p style={{ marginTop: 20 }}>
        BizToolsの計算ツールを利用するために、
        氏名、住所、電話番号などの個人情報を登録する必要はありません。
      </p>

      <p style={{ marginTop: 20 }}>
        計算ツールに入力した数値は、ブラウザ上で計算結果を表示するために使用されます。
        当サイトがこれらの入力値を利用者個人と結びつけて保存することを
        目的としたものではありません。
      </p>

      <p style={{ marginTop: 20 }}>
        サイトの利用状況を把握するため、
        IPアドレス、ブラウザや端末の種類、閲覧ページ、
        アクセス日時、参照元などの情報がアクセス解析サービスによって
        取得される場合があります。
      </p>

      <h2
        style={{
          marginTop: 50,
          fontSize: 30,
          fontWeight: 700,
          color: "#111827",
        }}
      >
        お問い合わせ時の情報
      </h2>

      <p style={{ marginTop: 20 }}>
        メールでお問い合わせいただいた場合、
        メールアドレスやメッセージ内に記載された情報を受け取る場合があります。
      </p>

      <p style={{ marginTop: 20 }}>
        これらの情報は、お問い合わせへの対応や必要な連絡のために使用します。
      </p>

      <h2
        style={{
          marginTop: 50,
          fontSize: 30,
          fontWeight: 700,
          color: "#111827",
        }}
      >
        Cookieについて
      </h2>

      <p style={{ marginTop: 20 }}>
        BizToolsでは、サイトの機能提供、アクセス解析、
        広告配信などのためにCookieや類似技術を使用する場合があります。
      </p>

      <p style={{ marginTop: 20 }}>
        Cookieは、ウェブサイトがブラウザに保存する小さな情報です。
        Cookieの利用により、利用状況の分析や広告配信などが
        行われる場合があります。
      </p>

      <p style={{ marginTop: 20 }}>
        ブラウザの設定によってCookieを無効にすることもできますが、
        一部の機能が正常に動作しない場合があります。
      </p>

      <h2
        style={{
          marginTop: 50,
          fontSize: 30,
          fontWeight: 700,
          color: "#111827",
        }}
      >
        Google Analyticsについて
      </h2>

      <p style={{ marginTop: 20 }}>
        BizToolsでは、サイトの利用状況を把握し、
        コンテンツや使いやすさを改善するために
        Google Analyticsを利用する場合があります。
      </p>

      <p style={{ marginTop: 20 }}>
        Google Analyticsでは、Cookieなどを利用して
        アクセス状況に関する情報を収集する場合があります。
        これらの情報はGoogleの規定に基づいて取り扱われます。
      </p>

      <h2
        style={{
          marginTop: 50,
          fontSize: 30,
          fontWeight: 700,
          color: "#111827",
        }}
      >
        Google AdSenseおよび広告について
      </h2>

      <p style={{ marginTop: 20 }}>
        BizToolsでは、Google AdSenseなどの第三者広告サービスを
        利用する場合があります。
      </p>

      <p style={{ marginTop: 20 }}>
        Googleを含む第三者広告事業者は、広告の配信、
        広告効果の測定、不正利用の防止などのために、
        利用者のブラウザ上でCookieを保存または読み取ったり、
        その他の技術を利用したりする場合があります。
      </p>

      <p style={{ marginTop: 20 }}>
        広告の内容や表示方法は、利用者のアクセス情報や
        過去の閲覧状況などに基づいて調整される場合があります。
      </p>

      <h2
        style={{
          marginTop: 50,
          fontSize: 30,
          fontWeight: 700,
          color: "#111827",
        }}
      >
        同意管理について
      </h2>

      <p style={{ marginTop: 20 }}>
        地域によってCookieや広告目的の情報利用に関する
        同意が必要となる場合があります。
      </p>

      <p style={{ marginTop: 20 }}>
        BizToolsでは、必要に応じてGoogle認定の同意管理プラットフォーム
        （CMP）などを利用し、Cookieや広告に関する選択肢を
        表示する場合があります。
      </p>

      <h2
        style={{
          marginTop: 50,
          fontSize: 30,
          fontWeight: 700,
          color: "#111827",
        }}
      >
        第三者サービスについて
      </h2>

      <p style={{ marginTop: 20 }}>
        当サイトで利用する第三者サービスによる情報の取り扱いについては、
        各サービス提供者のプライバシーポリシーや利用規約が適用されます。
      </p>

      <p style={{ marginTop: 20 }}>
        Googleのサービスを利用するサイトから収集した情報の
        Googleによる使用方法については、Googleが公開している
        プライバシー関連情報をご確認ください。
      </p>

      <h2
        style={{
          marginTop: 50,
          fontSize: 30,
          fontWeight: 700,
          color: "#111827",
        }}
      >
        外部リンクについて
      </h2>

      <p style={{ marginTop: 20 }}>
        BizToolsには外部サイトへのリンクが含まれる場合があります。
        外部サイトでの情報の取り扱いについては、
        各サイトのプライバシーポリシーをご確認ください。
      </p>

      <h2
        style={{
          marginTop: 50,
          fontSize: 30,
          fontWeight: 700,
          color: "#111827",
        }}
      >
        プライバシーポリシーの変更
      </h2>

      <p style={{ marginTop: 20 }}>
        法令、サービス内容、利用する第三者サービスなどの変更に応じて、
        本プライバシーポリシーを変更する場合があります。
      </p>

      <p style={{ marginTop: 20 }}>
        重要な変更がある場合は、必要に応じて本ページでお知らせします。
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
        本プライバシーポリシーに関するお問い合わせは、
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