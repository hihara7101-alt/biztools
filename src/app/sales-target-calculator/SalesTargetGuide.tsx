import ExampleTable from "@/components/ExampleTable";
import FormulaBox from "@/components/FormulaBox";
import FAQ from "@/components/FAQ";
import RelatedCalculators from "@/components/RelatedCalculators";

type Props = {
  lang?: "en" | "ja";
};

export default function SalesTargetGuide({
  lang = "en",
}: Props) {
  const text =
    lang === "ja"
      ? {
          title: "売上目標とは？",

          intro1:
            "売上目標を設定することで、利益目標を達成するために必要な販売数量や売上高を把握できます。感覚ではなく数字に基づいた経営判断ができるようになります。",

          intro2:
            "このツールでは、利益目標・販売価格・変動費・固定費から、目標達成に必要な販売数と売上高を自動で計算できます。",

          exampleTitle: "計算例",

          rows: [
            {
              label: "目標利益",
              value: "¥500,000",
            },
            {
              label: "販売価格",
              value: "¥10,000",
            },
            {
              label: "変動費",
              value: "¥4,000",
            },
            {
              label: "固定費",
              value: "¥300,000",
            },
            {
              label: "必要販売数",
              value: "133.3個",
            },
            {
              label: "必要売上高",
              value: "¥1,333,333",
            },
          ],

          formulaTitle: "売上目標の計算式",

          formula:
            "必要販売数 = (目標利益 + 固定費) ÷ 限界利益",

          formulaExplanation:
            "利益目標と固定費を限界利益で割ることで、必要な販売数量を求めます。",
        }
      : {
          title: "Understanding Sales Targets",

          intro1:
            "Setting a sales target helps you understand exactly how much you need to sell to achieve your desired profit. Instead of guessing, you can make business decisions based on real numbers.",

          intro2:
            "This calculator uses your target profit, selling price, variable costs and fixed costs to determine the sales volume required to achieve your business goals.",

          exampleTitle: "Example Calculation",

          rows: [
            {
              label: "Target Profit",
              value: "$5,000",
            },
            {
              label: "Selling Price",
              value: "$100",
            },
            {
              label: "Variable Cost",
              value: "$40",
            },
            {
              label: "Fixed Costs",
              value: "$3,000",
            },
            {
              label: "Units Required",
              value: "133.3",
            },
            {
              label: "Required Revenue",
              value: "$13,333",
            },
          ],

          formulaTitle: "Sales Target Formula",

          formula:
            "Units Required = (Target Profit + Fixed Costs) ÷ Contribution Margin",

          formulaExplanation:
            "Divide your desired profit plus fixed costs by the contribution margin per unit.",
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
          {lang === "ja"
            ? "売上目標が重要な理由"
            : "Why Sales Targets Matter"}
        </h2>

        <p
          style={{
            marginTop: "20px",
            color: "#6B7280",
            lineHeight: 1.9,
            fontSize: "17px",
          }}
        >
          {lang === "ja"
            ? "売上目標がなければ、事業がどの方向へ向かっているのか判断することは困難です。明確な数値目標を設定することで、営業活動やマーケティング施策の成果を測定でき、必要な改善も見つけやすくなります。"
            : "Without a sales target, it is difficult to know whether your business is moving in the right direction. A clear numerical goal allows you to measure sales performance, evaluate marketing efforts, and identify areas that need improvement."}
        </p>

        <p
          style={{
            marginTop: "20px",
            color: "#6B7280",
            lineHeight: 1.9,
            fontSize: "17px",
          }}
        >
          {lang === "ja"
            ? "利益目標から逆算して必要な販売数を計算することで、現実的な行動計画を立てることができます。価格変更やコスト削減が目標達成にどれだけ影響するかも簡単に比較できます。"
            : "Working backward from your desired profit helps you determine exactly how many units you need to sell. You can also see how pricing changes or cost reductions affect your business goals before making important decisions."}
        </p>
      </section>

      <FAQ
        items={
          lang === "ja"
            ? [
                {
                  question: "売上目標とは何ですか？",
                  answer:
                    "利益目標を達成するために必要な売上高または販売数量です。",
                },
                {
                  question: "必要販売数はどのように計算されますか？",
                  answer:
                    "（目標利益＋固定費）を限界利益で割って計算します。",
                },
                {
                  question: "限界利益とは何ですか？",
                  answer:
                    "販売価格から変動費を差し引いた、1商品あたりの利益です。",
                },
                                {
                  question: "販売価格を変更すると結果は変わりますか？",
                  answer:
                    "はい。販売価格が高くなるほど必要販売数は少なくなります。",
                },
                {
                  question: "サービス業でも利用できますか？",
                  answer:
                    "はい。商品販売だけでなくサービス料金の目標設定にも利用できます。",
                },
                {
                  question: "どのくらいの頻度で売上目標を見直すべきですか？",
                  answer:
                    "毎月または四半期ごとに見直す企業が多く、価格やコストが変わった場合にも再計算することをおすすめします。",
                },
              ]
            : [
                {
                  question: "What is a sales target?",
                  answer:
                    "A sales target is the amount of revenue or number of units you need to sell to achieve your desired profit.",
                },
                {
                  question: "How are the required units calculated?",
                  answer:
                    "They are calculated by dividing your target profit plus fixed costs by the contribution margin per unit.",
                },
                {
                  question: "What is contribution margin?",
                  answer:
                    "Contribution margin is the amount remaining after subtracting variable costs from your selling price.",
                },
                {
                  question: "Will changing my selling price affect the result?",
                  answer:
                    "Yes. Increasing your selling price generally reduces the number of units required to reach your target profit.",
                },
                {
                  question: "Can service businesses use this calculator?",
                  answer:
                    "Absolutely. It works for products, services, consultants, freelancers, and online businesses.",
                },
                {
                  question: "How often should I review my sales targets?",
                  answer:
                    "Review them monthly or whenever your pricing, costs, or business goals change.",
                },
              ]
        }
      /> 
            <RelatedCalculators
        calculators={
          lang === "ja"
            ? [
                {
                  title: "利益計算ツール",
                  href: "/ja/profit-calculator",
                },
                {
                  title: "損益分岐点計算",
                  href: "/ja/break-even-calculator",
                },
                {
                  title: "価格設定ツール",
                  href: "/ja/pricing-calculator",
                },
              ]
            : [
                {
                  title: "Profit Calculator",
                  href: "/profit-calculator",
                },
                {
                  title: "Break-even Calculator",
                  href: "/break-even-calculator",
                },
                {
                  title: "Pricing Calculator",
                  href: "/pricing-calculator",
                },
              ]
        }
      />
         </>
  );
} 