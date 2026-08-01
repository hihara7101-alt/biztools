import type { Metadata } from "next";
import PageContainer from "@/components/PageContainer";

export const metadata: Metadata = {
  title: "BizToolsについて",
  description:
    "BizToolsについて。起業家・個人事業主・中小企業向けの無料ビジネス計算ツールを提供しています。",
};

export default function AboutPageJa() {
  return (
    <PageContainer title="BizToolsについて">
      <p>
        BizToolsは、起業家、個人事業主、フリーランス、中小企業の皆さまが、
        ビジネスに必要な計算を簡単かつ正確に行えるように作られた無料のビジネス計算サイトです。
      </p>

      <p style={{ marginTop: 24 }}>
        利益計算、損益分岐点、価格設定、売上目標、ROI（投資利益率）など、
        日々の経営判断に必要な計算を素早く行えるツールを提供しています。
      </p>

      <p style={{ marginTop: 24 }}>
        複雑なExcelや専門知識がなくても、誰でも簡単に数字を確認し、
        より良い意思決定ができることを目指しています。
      </p>

      <h2
        style={{
          marginTop: 50,
          fontSize: 30,
          fontWeight: 700,
          color: "#111827",
        }}
      >
        私たちのミッション
      </h2>

      <p style={{ marginTop: 20 }}>
        シンプルで信頼できる無料ツールを提供し、
        ビジネスオーナーが数字を理解し、自信を持って経営判断できるよう支援することです。
      </p>

      <h2
        style={{
          marginTop: 50,
          fontSize: 30,
          fontWeight: 700,
          color: "#111827",
        }}
      >
        BizToolsの特徴
      </h2>

      <ul
        style={{
          marginTop: 20,
          paddingLeft: 24,
          lineHeight: 2,
        }}
      >
        <li>完全無料で利用可能</li>
        <li>会員登録不要</li>
        <li>起業家・中小企業向けに設計</li>
        <li>日本語・英語に対応</li>
        <li>シンプルで使いやすい操作</li>
      </ul>

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
        ご意見・ご要望・新しい計算ツールのアイデアなどがございましたら、
        お気軽にお問い合わせください。
      </p>

      <p style={{ marginTop: 20 }}>
        詳細は「お問い合わせ」ページをご利用ください。
      </p>
    </PageContainer>
  );
}