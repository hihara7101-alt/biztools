import ExampleTable from "@/components/ExampleTable";
import FormulaBox from "@/components/FormulaBox";
import FAQ from "@/components/FAQ";
import RelatedCalculators from "@/components/RelatedCalculators";

type Props = {
  lang?: "en" | "ja";
};

export default function ProfitGuide({
  lang = "en",
}: Props) {
   const text =
    lang === "ja"
      ? {
          title: "利益とは？",

          intro1:
            "利益は、事業において最も重要な指標の一つです。売上から事業にかかった費用を差し引いた後に残る金額を表します。個人事業主、ネットショップ運営者、中小企業、フリーランスなど、あらゆるビジネスにおいて利益を理解することは、価格設定や予算管理、将来の投資判断に役立ちます。",

          intro2:
            "粗利益と純利益の両方を継続的に確認することで、事業効率の改善、コスト増加の把握、価格設定の妥当性、そして今後の成長に十分な利益を確保できているかを判断できます。",

          exampleTitle: "計算例",

          rows: [
            {
              label: "売上高",
              value: "¥1,000,000",
            },
            {
              label: "変動費",
              value: "¥400,000",
            },
            {
              label: "固定費",
              value: "¥200,000",
            },
            {
              label: "粗利益",
              value: "¥600,000",
            },
            {
              label: "純利益",
              value: "¥400,000",
            },
            {
              label: "利益率",
              value: "40%",
            },
          ],

          formulaTitle: "利益の計算式",

          formula:
            "純利益 = 売上 − 変動費 − 固定費",

          formulaExplanation:
            "売上から変動費と固定費を差し引いた金額が純利益です。",

          whyTitle: "利益が重要な理由",

          why1:
            "売上だけでは事業の成功は判断できません。売上が大きくても、費用がそれ以上に増えていれば利益は残りません。利益を確認することで、本当の経営状況を把握できます。",

          why2:
            "利益を定期的に確認することで、不要なコストの発見、価格設定の改善、商品ごとの収益比較、そして事業が健全に成長しているかを判断できます。",

          faq: [
            {
              question: "利益とは何ですか？",
              answer:
                "利益とは、売上からすべての費用を差し引いた後に残る金額です。",
            },
            {
              question: "粗利益とは？",
              answer:
                "粗利益は、売上から商品の原価やサービス提供に直接かかる費用を差し引いた利益です。",
            },
            {
              question: "純利益とは？",
              answer:
                "純利益は、変動費だけでなく固定費や営業費用も差し引いた最終的な利益です。",
            },
            {
              question: "理想的な利益率は？",
              answer:
                "業種によって異なりますが、多くの企業では10〜20%以上を目標としています。",
            },
            {
              question: "フリーランスでも利用できますか？",
              answer:
                "はい。フリーランス、コンサルタント、ネットショップ運営者、中小企業など幅広く利用できます。",
            },
            {
              question: "どのくらいの頻度で利益を計算すべきですか？",
              answer:
                "毎月確認する企業が多いですが、売上件数が多い場合は毎週または毎日確認することもあります。",
            },
          ],

          relatedCalculators: [
            {
              title: "価格設定ツール",
              href: "/ja/pricing-calculator",
            },
            {
              title: "損益分岐点計算",
              href: "/ja/break-even-calculator",
            },
            {
              title: "売上目標計算",
              href: "/ja/sales-target-calculator",
            },
          ],
        }
      : {
                title: "Understanding Profit",

        intro1:
          "Profit is one of the most important financial measurements for any business. It represents the money remaining after paying the costs of operating your business. Whether you run a small company, sell products online, or work as a freelancer, understanding your profit helps you make better pricing, budgeting, and investment decisions.",

        intro2:
          "By monitoring both gross profit and net profit, you can quickly see whether your business is becoming more efficient, whether your costs are increasing, and whether your pricing strategy is generating enough profit to support future growth.",

        exampleTitle: "Example Calculation",

        rows: [
          {
            label: "Revenue",
            value: "$10,000",
          },
          {
            label: "Variable Costs",
            value: "$4,000",
          },
          {
            label: "Fixed Costs",
            value: "$2,000",
          },
          {
            label: "Gross Profit",
            value: "$6,000",
          },
          {
            label: "Net Profit",
            value: "$4,000",
          },
          {
            label: "Net Margin",
            value: "40%",
          },
        ],

        formulaTitle: "Profit Formula",

        formula:
          "Net Profit = Revenue − Variable Costs − Fixed Costs",

        formulaExplanation:
          "Subtract your variable costs and fixed costs from your total revenue. The remaining amount is your net profit.",

        whyTitle: "Why Profit Matters",

        why1:
          "Many businesses focus only on sales revenue, but revenue alone does not indicate financial success. A company can generate high sales while still losing money if expenses grow too quickly. Tracking profit allows you to understand the true financial performance of your business.",

        why2:
          "Regularly reviewing your profit can help you identify unnecessary expenses, improve pricing decisions, compare different products, and determine whether your business is growing sustainably over time.",

        faq: [
          {
            question: "What is profit?",
            answer:
              "Profit is the money remaining after all business expenses have been deducted from revenue.",
          },
          {
            question: "What is gross profit?",
            answer:
              "Gross profit is revenue minus the direct costs required to produce or deliver your products or services.",
          },
          {
            question: "What is net profit?",
            answer:
              "Net profit is the final amount remaining after subtracting both direct costs and operating expenses.",
          },
          {
            question: "What is a good profit margin?",
            answer:
              "It varies by industry, but many businesses aim for a net profit margin of 10% to 20% or higher.",
          },
          {
            question: "Can freelancers use this calculator?",
            answer:
              "Yes. Freelancers, consultants, online sellers, and small business owners can all use this calculator to estimate profitability.",
          },
          {
            question: "How often should I calculate profit?",
            answer:
              "Many businesses calculate profit monthly, while others review it weekly or even daily depending on sales volume.",
          },
        ],

        relatedCalculators: [
          {
            title: "Pricing Calculator",
            href: "/pricing-calculator",
          },
          {
            title: "Break-even Calculator",
            href: "/break-even-calculator",
          },
          {
            title: "Sales Target Calculator",
            href: "/sales-target-calculator",
          },
        ],
      };
      return (
  <>
    <section
      style={{
        marginTop: "70px",
      }}
    >
      <h2
        style={{
          fontSize: "34px",
          fontWeight: 800,
          color: "#111827",
        }}
      >
        {text.title}
      </h2>

      <p
        style={{
          marginTop: "20px",
          color: "#6B7280",
          lineHeight: 1.9,
          fontSize: "17px",
        }}
      >
        {text.intro1}
      </p>

      <p
        style={{
          marginTop: "20px",
          color: "#6B7280",
          lineHeight: 1.9,
          fontSize: "17px",
        }}
      >
        {text.intro2}
      </p>
    </section>

    <ExampleTable
      title={text.exampleTitle}
      rows={text.rows}
    />

    <FormulaBox
      title={text.formulaTitle}
      formula={text.formula}
      explanation={text.formulaExplanation}
    />

    <section
      style={{
        marginTop: "60px",
      }}
    >
      <h2
        style={{
          fontSize: "30px",
          fontWeight: 700,
          color: "#111827",
        }}
      >
        {text.whyTitle}
      </h2>

      <p
        style={{
          marginTop: "20px",
          color: "#6B7280",
          lineHeight: 1.9,
          fontSize: "17px",
        }}
      >
        {text.why1}
      </p>

      <p
        style={{
          marginTop: "20px",
          color: "#6B7280",
          lineHeight: 1.9,
          fontSize: "17px",
        }}
      >
        {text.why2}
      </p>
    </section>

    <FAQ
      items={text.faq}
    />

    <RelatedCalculators
      calculators={text.relatedCalculators}
    />
  </>
);
}