
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
              label: "限界利益",
              value: "¥600,000",
            },
            {
              label: "限界利益率",
              value: "60%",
            },
            {
              label: "概算利益",
              value: "¥400,000",
            },
            {
              label: "概算利益率",
              value: "40%",
            },
          ],

          formulaTitle: "概算利益の計算式",

          formula:
            "概算利益 = 売上高 − 変動費 − 固定費",

          formulaExplanation:
            "売上高から変動費を差し引くと限界利益が求められます。さらに固定費を差し引くことで、入力した条件に基づく概算利益を計算できます。税金、金利、減価償却費など、入力していない費用は含まれないため、会計上の純利益とは異なる場合があります。",

          differenceTitle:
            "限界利益と概算利益の違い",

          difference1:
            "限界利益は、売上高から変動費を差し引いた金額です。売上の増減に伴って変わる費用を除いた後、固定費の回収や利益の確保にどの程度貢献できるかを示します。",

          difference2:
            "概算利益は、限界利益から入力した固定費を差し引いた金額です。事業の収益性を簡易的に確認できますが、会計上の営業利益や当期純利益をそのまま示すものではありません。",

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
                "仕入価格、材料費、配送費などを見直すことで、販売1件あたりの限界利益を増やせます。",
            },
            {
              title: "固定費を見直す",
              text:
                "家賃、システム利用料、外注費などの継続的な費用を確認し、不要な支出を削減します。",
            },
            {
              title: "利益率の高い商品を増やす",
              text:
                "商品やサービスごとの限界利益率を比較し、収益性の高い商品に販売を集中させる方法もあります。",
            },
          ],

          interpretationTitle:
            "計算結果の見方",

          interpretation1:
            "概算利益がプラスであれば、入力した売上高・変動費・固定費の条件では黒字です。ただし、入力していない費用がある場合は、実際の利益と異なります。利益額だけでなく概算利益率も確認すると、異なる期間や条件の収益性を比較しやすくなります。",

          interpretation2:
            "概算利益がマイナスの場合は、売上高、販売価格、販売数量、変動費、固定費を見直すことが考えられます。損益分岐点計算ツールを併用すると、黒字化に必要な売上高の目安も確認できます。",

          comparisonTitle:
            "シナリオ比較の使い方",

          comparison1:
            "「別の条件と比較する」を開くと、現在の事業数値と比較案を並べて確認できます。「現在の数値をコピー」を使えば、売上高・変動費・固定費を引き継いだうえで、変更したい項目だけを調整できます。",

          comparison2:
            "例えば、現在の売上高が100万円、変動費が40万円、固定費が20万円の場合、概算利益は40万円です。比較案として売上高120万円、変動費45万円、固定費22万円を入力すると、概算利益は53万円となり、現在より13万円増加します。",

          comparison3:
            "この比較は入力条件に基づく試算です。実際には販売数量の変化、追加費用、税金なども考慮する必要があります。比較するときは同じ期間と同じ費用区分を使用してください。",

          faq: [
            {
              question: "利益とは何ですか？",
              answer:
                "利益とは、売上から事業に必要な費用を差し引いた後に残る金額です。",
            },
            {
              question: "限界利益とは何ですか？",
              answer:
                "限界利益は、売上高から変動費を差し引いた金額です。固定費の回収と利益の確保にどの程度貢献するかを示します。",
            },
            {
              question: "概算利益とは何ですか？",
              answer:
                "このツールでは、売上高から入力した変動費と固定費を差し引いた金額を概算利益としています。会計上の純利益とは異なる場合があります。",
            },
            {
              question: "利益率とは何ですか？",
              answer:
                "利益率は、売上高に対してどの程度の利益が残っているかを割合で表した指標です。このツールでは限界利益率と概算利益率を確認できます。",
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
            {
              question: "シナリオ比較では何を確認できますか？",
              answer:
                "売上高・変動費・固定費を変更した場合の概算利益と概算利益率を比較できます。価格変更やコスト削減の検討に役立ちます。",
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
              label: "Contribution Margin",
              value: "$6,000",
            },
            {
              label: "Contribution Margin Ratio",
              value: "60%",
            },
            {
              label: "Estimated Profit",
              value: "$4,000",
            },
            {
              label: "Estimated Profit Margin",
              value: "40%",
            },
          ],

          formulaTitle: "Estimated Profit Formula",

          formula:
            "Estimated Profit = Revenue − Variable Costs − Fixed Costs",

          formulaExplanation:
            "Subtract variable costs from revenue to calculate contribution margin. Then subtract the fixed costs entered to calculate estimated profit. Because other expenses, taxes, interest or depreciation may not be included, this result should not be treated as accounting net income.",

          differenceTitle:
            "Contribution Margin vs. Estimated Profit",

          difference1:
            "Contribution margin is revenue minus variable costs. It indicates how much remains to cover fixed costs and contribute to profit.",

          difference2:
            "Estimated profit subtracts the entered fixed costs from contribution margin. It provides a simplified view of profitability, but it is not necessarily the same as operating income or net income reported in financial statements.",

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
                "Compare contribution margins across products or services and consider prioritizing sales with stronger margins.",
            },
          ],

          interpretationTitle:
            "How to Interpret Your Results",

          interpretation1:
            "A positive estimated profit means revenue exceeds the variable and fixed costs entered. However, omitted expenses may change the actual result. Reviewing estimated profit margin as well as the amount helps compare performance across different periods or scenarios.",

          interpretation2:
            "A negative result means the entered costs exceed revenue. Review pricing, sales volume, variable costs or fixed costs. The Break-even Calculator can help estimate the revenue needed to cover costs.",

          comparisonTitle:
            "How to Use Scenario Comparison",

          comparison1:
            "Select Compare Another Scenario to compare your current figures with an alternative. Use Copy Current Figures to carry over your revenue, variable costs and fixed costs, then adjust only the assumptions you want to test.",

          comparison2:
            "For example, current revenue of $10,000, variable costs of $4,000 and fixed costs of $2,000 produce estimated profit of $4,000. If alternative revenue is $12,000, variable costs are $4,500 and fixed costs are $2,200, estimated profit becomes $5,300, an increase of $1,300.",

          comparison3:
            "These results are estimates based on the figures entered. Actual outcomes may differ due to changes in sales volume, additional expenses or taxes. Use consistent time periods and cost categories when comparing scenarios.",

          faq: [
            {
              question: "What is profit?",
              answer:
                "Profit is the money remaining after business expenses have been deducted from revenue.",
            },
            {
              question: "What is contribution margin?",
              answer:
                "Contribution margin is revenue minus variable costs. It represents the amount available to cover fixed costs and contribute to profit.",
            },
            {
              question: "What is estimated profit?",
              answer:
                "This calculator defines estimated profit as revenue minus the variable and fixed costs entered. It may differ from accounting net income.",
            },
            {
              question: "What is profit margin?",
              answer:
                "Profit margin expresses profit as a percentage of revenue. This calculator displays both contribution margin ratio and estimated profit margin.",
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
            {
              question: "What does scenario comparison show?",
              answer:
                "It compares estimated profit and estimated profit margin between current and alternative revenue and cost assumptions.",
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
          {text.comparisonTitle}
        </h2>

        <p
          style={{
            marginTop: "20px",
            color: "#6B7280",
            lineHeight: 1.9,
            fontSize: "17px",
          }}
        >
          {text.comparison1}
        </p>

        <p
          style={{
            marginTop: "20px",
            color: "#6B7280",
            lineHeight: 1.9,
            fontSize: "17px",
          }}
        >
          {text.comparison2}
        </p>

        <p
          style={{
            marginTop: "20px",
            color: "#6B7280",
            lineHeight: 1.9,
            fontSize: "17px",
          }}
        >
          {text.comparison3}
        </p>
      </section>

      <FAQ items={text.faq} />

      <RelatedCalculators
        calculators={text.relatedCalculators}
      />
    </>
  );
}
