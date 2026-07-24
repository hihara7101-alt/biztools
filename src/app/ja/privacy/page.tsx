import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "プライバシーポリシー",
  description:
    "BizToolsにおける個人情報の取り扱い、Cookie、Google Analytics、広告に関する方針をご説明します。",
  path: "/privacy",
  lang: "ja",
});

export default function PrivacyPage() {
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
        プライバシーポリシー
      </h1>

      <p
        style={{
          marginTop: "24px",
          lineHeight: 1.9,
          color: "#4B5563",
        }}
      >
        BizToolsは、お客様のプライバシーを尊重しています。
        このプライバシーポリシーでは、本ウェブサイトをご利用いただく際に
        取得される可能性のある情報と、その利用方法について説明します。
      </p>

      <h2
        style={{
          marginTop: "50px",
          fontSize: "30px",
          fontWeight: 700,
        }}
      >
        取得する情報
      </h2>

      <p
        style={{
          marginTop: "18px",
          lineHeight: 1.9,
          color: "#4B5563",
        }}
      >
        BizToolsでは、計算ツールをご利用いただくために
        アカウント登録や個人情報の入力は必要ありません。
        個人情報を取得するのは、お問い合わせなどで
        お客様が自発的にメールを送信された場合のみです。
      </p>

      <h2
        style={{
          marginTop: "50px",
          fontSize: "30px",
          fontWeight: 700,
        }}
      >
        Cookieについて
      </h2>

      <p
        style={{
          marginTop: "18px",
          lineHeight: 1.9,
          color: "#4B5563",
        }}
      >
        本サイトでは、ユーザー体験の向上、
        利用設定の保存、アクセス解析のために
        Cookieを使用する場合があります。
      </p>

      <h2
        style={{
          marginTop: "50px",
          fontSize: "30px",
          fontWeight: 700,
        }}
      >
        Google Analytics
      </h2>

      <p
        style={{
          marginTop: "18px",
          lineHeight: 1.9,
          color: "#4B5563",
        }}
      >
        BizToolsでは、サイトの利用状況を把握するために
        Google Analyticsを利用する場合があります。
        Google AnalyticsはCookieを利用して、
        匿名の利用データを収集することがあります。
      </p>

      <h2
        style={{
          marginTop: "50px",
          fontSize: "30px",
          fontWeight: 700,
        }}
      >
        広告について
      </h2>

      <p
        style={{
          marginTop: "18px",
          lineHeight: 1.9,
          color: "#4B5563",
        }}
      >
        BizToolsでは、Google AdSenseなどの広告配信サービスを
        利用する場合があります。
        これらのサービスでは、お客様の興味・関心に応じた広告を表示するために
        Cookieが使用されることがあります。
      </p>

      <h2
        style={{
          marginTop: "50px",
          fontSize: "30px",
          fontWeight: 700,
        }}
      >
        プライバシーポリシーの変更
      </h2>

      <p
        style={{
          marginTop: "18px",
          lineHeight: 1.9,
          color: "#4B5563",
        }}
      >
        本プライバシーポリシーは、
        必要に応じて更新される場合があります。
        変更内容はこのページに掲載いたします。
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
        本プライバシーポリシーに関するご質問がございましたら、
        お問い合わせページよりお気軽にご連絡ください。
      </p>
    </main>
  );
}