import type { Metadata } from "next";
import PageContainer from "@/components/PageContainer";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  description: "BizToolsのプライバシーポリシー",
};

export default function PrivacyPageJa() {
  return (
    <PageContainer title="プライバシーポリシー">
      <p>
        BizToolsでは、お客様の個人情報保護を重要視しています。
        本ページでは、当サイトにおける情報の取り扱いについて説明します。
      </p>

      <h2 style={{ marginTop: 50, fontSize: 30, fontWeight: 700 }}>
        取得する情報
      </h2>

      <p style={{ marginTop: 20 }}>
        BizToolsは、計算ツールの利用にあたり個人情報の登録を必要としません。
      </p>

      <p style={{ marginTop: 20 }}>
        アクセス解析のため、ブラウザ情報や閲覧ページなどの匿名データを収集する場合があります。
      </p>

      <h2 style={{ marginTop: 50, fontSize: 30, fontWeight: 700 }}>
        Cookieについて
      </h2>

      <p style={{ marginTop: 20 }}>
        当サイトでは、利便性向上、アクセス解析、および広告配信のためCookieを利用する場合があります。
      </p>

      <h2 style={{ marginTop: 50, fontSize: 30, fontWeight: 700 }}>
        第三者サービス
      </h2>

      <p style={{ marginTop: 20 }}>
        Google AnalyticsやGoogle AdSenseなどの第三者サービスを利用する場合があります。
        これらのサービスは、それぞれのプライバシーポリシーに従って情報を取り扱います。
      </p>

      <h2 style={{ marginTop: 50, fontSize: 30, fontWeight: 700 }}>
        ポリシーの変更
      </h2>

      <p style={{ marginTop: 20 }}>
        本ポリシーは予告なく変更される場合があります。
      </p>

      <p style={{ marginTop: 40 }}>
        最終更新：2026年7月
      </p>
    </PageContainer>
  );
}