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
            "利益は、売上から事業にかかった費用を差し引いた後に残る金額です。売上が増えていても費用がそれ以上に増えていれば、事業の利益は減少する可能性があります。そのため、売上だけでなく利益を継続的に確認することが重要です。",

          intro2:
            "個人事業主、ネットショップ運営者、中小企業、フリーランスなど、さまざまな事業で利益を確認することで、価格設定、コスト管理、予算作成、将来の投資判断に役立てることができます。",

          exampleTitle: "利益計算の例",

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
              label: "純利益率",
              value: "40%",
            },
          ],

          formulaTitle: "純利益の計算式",

          formula:
            "純利益 = 売上 − 変動費 − 固定費",

          formulaExplanation:
            "売上から商品の仕入れや材料費などの変動費と、家賃や人件費などの固定費を差し引いた金額が純利益です。",

          differenceTitle:
            "粗利益と純利益の違い",

          difference1:
            "粗利益は、売上から商品やサービスを提供するために直接必要となる変動費を差し引いた金額です。商品そのものがどの程度利益を生み出しているかを確認する際に役立ちます。",

          difference2:
            "純利益は、粗利益からさらに固定費などを差し引いた最終的な利益です。事業全体として実際にどれだけ利益が残っているかを判断するために使います。",

          whyTitle: "利益を確認することが重要な理由",

          why1:
            "売上だけでは事業の成功を判断できません。売上が大きくても、仕入れ、人件費、家賃、広告費などの費用が大きければ、最終的な利益は少なくなります。",

          why2:
            "利益を定期的に確認することで、不要なコストの発見、価格設定の見直し、商品ごとの収益比較、事業が健全に成長しているかの確認に役立ちます。",

          improveTitle: "利益を改善する主な方法",

          improveItems: [
            {
              title: "販売価格を見直す",
              text:
                "価格を上げても販売数量を維持できる場合、1件あたりの利益を改善できます。",
            },
            {
              title: "変動費を削減する",
              text:
                "仕入価格、材料費、配送費などを見直すことで、販売1件あたりの利益を増やせます。",
            },
            {
              title: "固定費を見直す",
              text:
                "家賃、システム利用料、外注費などの継続的な費用を確認し、不要な支出を削減します。",
            },
            {
              title: "利益率の高い商品を増やす",
              text:
                "商品やサービスごとの利益率を比較し、収益性の高い商品に販売を集中させる方法もあります。",
            },
          ],

          interpretationTitle:
            "計算結果の見方",

          interpretation1:
            "利益がプラスであれば、入力した売上と費用の条件では黒字です。ただし、利益額だけでなく売上に対する利益率も確認することで、事業の収益性を比較しやすくなります。",

          interpretation2:
            "利益がマイナスの場合は、販売価格、販売数量、変動費、固定費のいずれかを見直す必要があります。損益分岐点計算ツールを併用すると、黒字化に必要な売上の目安も確認できます。",

          faq: [
            {
              question: "利益とは何ですか？",
              answer:
                "利益とは、売上から事業に必要な費用を差し引いた後に残る金額です。",
            },
            {
              question: "粗利益とは何ですか？",
              answer:
                "粗利益は、売上から商品の原価やサービス提供に直接かかる変動費を差し引いた利益です。",
            },
            {
              question: "純利益とは何ですか？",
              answer:
                "純利益は、売上から変動費と固定費などの事業費用を差し引いた後に残る最終的な利益です。",
            },
            {
              question: "利益率とは何ですか？",
              answer:
                "利益率は、売上に対してどの程度の利益が残っているかを割合で表した指標です。",
            },
            {
              question: "理想的な利益率はどのくらいですか？",
              answer:
                "適切な利益率は業種、事業規模、商品構成などによって異なるため、同じ業界や自社の過去の実績と比較することが重要です。",
            },
            {
              question: "フリーランスでも利用できますか？",
              answer:
                "はい。フリーランス、コンサルタント、ネットショップ運営者、中小企業など幅広く利用できます。",
            },
            {
              question: "どのくらいの頻度で利益を確認すべきですか？",
              answer:
                "月次で確認する方法が一般的ですが、売上や費用の変動が大きい事業では週次など、より短い期間で確認することも有効です。",
            },
          ],

          relatedCalculators: [
            {
              title: "価格設定ツール",
              href: "/pricing-calculator",
            },
            {
              title: "損益分岐点計算ツール",
              href: "/break-even-calculator",
            },
            {
              title: "売上目標計算ツール",
              href: "/sales-target-calculator",
            },
          ],
        }
      : {
          title: "Understanding Profit",

          intro1:
            "Profit is the amount of money remaining after the costs of running a business are deducted from revenue. Revenue can increase while profit falls if expenses grow even faster, which is why monitoring profit is just as important as monitoring sales.",

          intro2:
            "For freelancers, online sellers, small businesses and other operators, understanding profit can support better decisions about pricing, cost control, budgeting and future investment.",

          exampleTitle: "Profit Calculation Example",

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
              label: "Net Profit Margin",
              value: "40%",
            },
          ],

          formulaTitle: "Net Profit Formula",

          formula:
            "Net Profit = Revenue − Variable Costs − Fixed Costs",

          formulaExplanation:
            "Subtract variable costs such as materials or product costs and fixed costs such as rent or subscriptions from revenue. The amount remaining is net profit.",

          differenceTitle:
            "Gross Profit vs. Net Profit",

          difference1:
            "Gross profit is revenue minus the direct or variable costs associated with providing a product or service. It helps show how profitable the product or service itself is before fixed operating costs.",

          difference2:
            "Net profit goes further by subtracting fixed and operating costs as well. It provides a broader view of how much profit the entire business actually retains.",

          whyTitle: "Why Profit Matters",

          why1:
            "Revenue alone does not determine whether a business is successful. A company can generate significant sales and still produce little or no profit if purchasing costs, labor, rent, advertising and other expenses are too high.",

          why2:
            "Reviewing profit regularly can help identify unnecessary expenses, improve pricing decisions, compare the profitability of products or services and evaluate whether the business is growing sustainably.",

          improveTitle: "Ways to Improve Profit",

          improveItems: [
            {
              title: "Review Your Pricing",
              text:
                "If customers continue buying after a reasonable price increase, higher pricing can improve profit per sale.",
            },
            {
              title: "Reduce Variable Costs",
              text:
                "Review supplier prices, materials, shipping and other costs that increase with each sale.",
            },
            {
              title: "Review Fixed Costs",
              text:
                "Look at recurring expenses such as rent, subscriptions and outsourced services for potential savings.",
            },
            {
              title: "Focus on Higher-Margin Sales",
              text:
                "Compare products or services and consider prioritizing those that generate stronger margins.",
            },
          ],

          interpretationTitle:
            "How to Interpret Your Results",

          interpretation1:
            "A positive net profit means the business is profitable under the revenue and cost assumptions you entered. Reviewing the profit margin as well as the dollar amount makes it easier to compare performance across different periods or products.",

          interpretation2:
            "A negative result means costs exceed revenue. In that case, review pricing, sales volume, variable costs or fixed costs. The Break-even Calculator can also help estimate how much must be sold before the business becomes profitable.",

          faq: [
            {
              question: "What is profit?",
              answer:
                "Profit is the money remaining after business expenses have been deducted from revenue.",
            },
            {
              question: "What is gross profit?",
              answer:
                "Gross profit is revenue minus the direct or variable costs required to produce or deliver products or services.",
            },
            {
              question: "What is net profit?",
              answer:
                "Net profit is the amount remaining after variable costs, fixed costs and other operating expenses are deducted from revenue.",
            },
            {
              question: "What is profit margin?",
              answer:
                "Profit margin expresses profit as a percentage of revenue, making it easier to compare profitability.",
            },
            {
              question: "What is a good profit margin?",
              answer:
                "There is no single ideal margin for every business. Appropriate margins vary significantly by industry, business model and company size.",
            },
            {
              question: "Can freelancers use this calculator?",
              answer:
                "Yes. Freelancers, consultants, online sellers and small business owners can all use the calculator to estimate profitability.",
            },
            {
              question: "How often should I calculate profit?",
              answer:
                "Monthly reviews are common, but businesses with frequent changes in sales or costs may benefit from weekly or more frequent reviews.",
            },
          ],

          relatedCalculators: [
            {
              title: "Pricing Calculator",
              href: "/en/pricing-calculator",
            },
            {
              title: "Break-even Calculator",
              href: "/en/break-even-calculator",
            },
            {
              title: "Sales Target Calculator",
              href: "/en/sales-target-calculator",
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
          {text.differenceTitle}
        </h2>

        <p
          style={{
            marginTop: "20px",
            color: "#6B7280",
            lineHeight: 1.9,
            fontSize: "17px",
          }}
        >
          {text.difference1}
        </p>

        <p
          style={{
            marginTop: "20px",
            color: "#6B7280",
            lineHeight: 1.9,
            fontSize: "17px",
          }}
        >
          {text.difference2}
        </p>
      </section>

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
          {text.improveTitle}
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(230px, 1fr))",
            gap: "20px",
            marginTop: "28px",
          }}
        >
          {text.improveItems.map((item) => (
            <div
              key={item.title}
              style={{
                border: "1px solid #E5E7EB",
                borderRadius: "16px",
                padding: "24px",
                background: "#FFFFFF",
              }}
            >
              <h3
                style={{
                  margin: 0,
                  fontSize: "19px",
                  fontWeight: 700,
                  color: "#111827",
                }}
              >
                {item.title}
              </h3>

              <p
                style={{
                  marginTop: "12px",
                  marginBottom: 0,
                  color: "#6B7280",
                  lineHeight: 1.8,
                }}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

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
          {text.interpretationTitle}
        </h2>

        <p
          style={{
            marginTop: "20px",
            color: "#6B7280",
            lineHeight: 1.9,
            fontSize: "17px",
          }}
        >
          {text.interpretation1}
        </p>

        <p
          style={{
            marginTop: "20px",
            color: "#6B7280",
            lineHeight: 1.9,
            fontSize: "17px",
          }}
        >
          {text.interpretation2}
        </p>
      </section>

      <FAQ items={text.faq} />

      <RelatedCalculators
        calculators={text.relatedCalculators}
      />
    </>
  );
}