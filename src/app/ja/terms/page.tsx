import type { Metadata } from "next";
import PageContainer from "@/components/PageContainer";

export const metadata: Metadata = {
  title: "利用規約",
  description: "BizTools 利用規約",
};

export default function TermsPageJa() {
  return (
    <PageContainer title="利用規約">
      <p>
        BizToolsをご利用いただくことで、本利用規約に同意したものとみなします。
      </p>

      <h2 style={{ marginTop: 50, fontSize: 30, fontWeight: 700 }}>
        サービスについて
      </h2>

      <p style={{ marginTop: 20 }}>
        BizToolsは、無料のビジネス計算ツールおよび参考情報を提供しています。
      </p>

      <h2 style={{ marginTop: 50, fontSize: 30, fontWeight: 700 }}>
        専門的な助言ではありません
      </h2>

      <p style={{ marginTop: 20 }}>
        当サイトの内容は一般的な情報提供を目的としており、
        法律・税務・会計・投資等の専門的助言を提供するものではありません。
      </p>

      <h2 style={{ marginTop: 50, fontSize: 30, fontWeight: 700 }}>
        利用者の責任
      </h2>

      <p style={{ marginTop: 20 }}>
        計算結果を利用した意思決定については、利用者ご自身の責任でご判断ください。
      </p>

      <h2 style={{ marginTop: 50, fontSize: 30, fontWeight: 700 }}>
        規約の変更
      </h2>

      <p style={{ marginTop: 20 }}>
        本規約は予告なく変更される場合があります。
      </p>

      <p style={{ marginTop: 40 }}>
        最終更新：2026年7月
      </p>
    </PageContainer>
  );
}