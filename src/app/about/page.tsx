import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "BizToolsについて",
  description:
    "BizToolsは起業家、フリーランス、中小企業向けの無料ビジネス計算ツールを提供しています。",
  path: "/about",
  lang: "ja",
});

export default function AboutPage() {
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
        BizToolsについて
      </h1>

      <p
        style={{
          marginTop: "24px",
          lineHeight: 1.9,
          color: "#4B5563",
          fontSize: "18px",
        }}
      >
        BizToolsは、起業家、フリーランス、スタートアップ、中小企業経営者、
        学生の皆さまが、より良いビジネス判断を行えるよう支援する
        無料のビジネス計算ツール集です。
      </p>

      <h2
        style={{
          marginTop: "50px",
          fontSize: "30px",
          fontWeight: 700,
          color: "#111827",
        }}
      >
        私たちのミッション
      </h2>

      <p
        style={{
          marginTop: "18px",
          lineHeight: 1.9,
          color: "#4B5563",
        }}
      >
        ビジネスでは、数字に基づいた意思決定が成功への鍵となります。
        利益の計算、価格設定、売上目標の計画、投資効果の分析など、
        数字を正しく理解することは経営に欠かせません。
      </p>

      <p
        style={{
          marginTop: "18px",
          lineHeight: 1.9,
          color: "#4B5563",
        }}
      >
        私たちの使命は、これらの計算を誰でも簡単に利用できる
        オンラインツールとして提供し、
        正確で分かりやすいビジネス支援を行うことです。
      </p>

      <h2
        style={{
          marginTop: "50px",
          fontSize: "30px",
          fontWeight: 700,
          color: "#111827",
        }}
      >
        提供しているツール
      </h2>

      <ul
        style={{
          marginTop: "20px",
          lineHeight: 2,
          color: "#4B5563",
        }}
      >
        <li>✓ 利益計算ツール</li>
        <li>✓ 損益分岐点計算ツール</li>
        <li>✓ 価格設定ツール</li>
        <li>✓ 売上目標計算ツール</li>
        <li>✓ ROI（投資利益率）計算ツール</li>
      </ul>

      <h2
        style={{
          marginTop: "50px",
          fontSize: "30px",
          fontWeight: 700,
          color: "#111827",
        }}
      >
        私たちの取り組み
      </h2>

      <p
        style={{
          marginTop: "18px",
          lineHeight: 1.9,
          color: "#4B5563",
        }}
      >
        BizToolsのすべての計算ツールは無料でご利用いただけます。
        私たちは、世界中の事業者や個人が安心して利用できるよう、
        正確で信頼性の高い計算ツールを継続的に改善しています。
      </p>
    </main>
  );
}