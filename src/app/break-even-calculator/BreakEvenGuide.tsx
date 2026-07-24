import ExampleTable from "@/components/ExampleTable";
import FormulaBox from "@/components/FormulaBox";
import FAQ from "@/components/FAQ";
import RelatedCalculators from "@/components/RelatedCalculators";

type Props = {
  lang?: "en" | "ja";
};

export default function BreakEvenGuide({
  lang = "en",
}: Props) {
  const text =
    lang === "ja"
      ? {
          title: "損益分岐点とは？",

          intro1:
            "損益分岐点とは、利益も損失も発生しない売上や販売数量のことです。このポイントを超えると利益が生まれ、それ以下では赤字になります。",

          intro2:
            "損益分岐点を把握することで、販売目標の設定、価格戦略、コスト削減、事業計画などの重要な経営判断を行いやすくなります。",

          exampleTitle: "計算例",

          rows: [
            {
              label: "販売価格",
              value: "¥5,000",
            },
            {
              label: "変動費",
              value: "¥2,000",
            },
            {
              label: "固定費",
              value: "¥300,000",
            },
            {
              label: "限界利益",
              value: "¥3,000",
            },
            {
              label: "損益分岐点販売数",
              value: "100個",
            },
            {
              label: "損益分岐点売上",
              value: "¥500,000",
            },
          ],

          formulaTitle: "損益分岐点の計算式",

          formula:
            "損益分岐点販売数 = 固定費 ÷ (販売価格 − 変動費)",

          formulaExplanation:
            "販売価格から変動費を差し引いた限界利益で固定費を回収するために必要な販売数量を計算します。",

          whyTitle: "なぜ損益分岐点が重要なのか",

          why1:
            "損益分岐点を知ることで、利益を出すために最低限必要な販売数や売上高を把握できます。",

          why2:
            "価格設定やコスト削減の効果を比較し、利益改善のシミュレーションにも役立ちます。",

          faq: [
            {
              question: "損益分岐点とは？",
              answer:
                "利益も損失も発生しない販売数量または売上高です。",
            },
            {
              question: "限界利益とは？",
              answer:
                "販売価格から変動費を差し引いた利益です。",
            },
            {
              question: "固定費には何が含まれますか？",
              answer:
                "家賃、人件費、保険料など売上に関係なく発生する費用です。",
            },
            {
              question: "価格を上げるとどうなりますか？",
              answer:
                "限界利益が増え、損益分岐点は低くなります。",
            },
            {
              question: "フリーランスでも利用できますか？",
              answer:
                "はい。個人事業主やフリーランスでも活用できます。",
            },
            {
              question: "毎月計算するべきですか？",
              answer:
                "固定費や価格が変わるたびに確認することをおすすめします。",
            },
          ],

          relatedCalculators: [
            {
              title: "利益計算ツール",
              href: "/ja/profit-calculator",
            },
            {
              title: "価格設定ツール",
              href: "/ja/pricing-calculator",
            },
            {
              title: "売上目標計算",
              href: "/ja/sales-target-calculator",
            },
          ],
        }
      : {
          title: "Understanding Break-even",
                  intro1:
          "The break-even point is the point where your business covers all of its costs without making a profit or a loss. Once you sell beyond this point, every additional sale contributes to profit.",

        intro2:
          "Knowing your break-even point helps you set realistic sales targets, evaluate pricing strategies, reduce costs, and make smarter business decisions.",

        exampleTitle: "Example Calculation",

        rows: [
          {
            label: "Selling Price",
            value: "$50",
          },
          {
            label: "Variable Cost",
            value: "$20",
          },
          {
            label: "Fixed Costs",
            value: "$3,000",
          },
          {
            label: "Contribution Margin",
            value: "$30",
          },
          {
            label: "Break-even Units",
            value: "100",
          },
          {
            label: "Break-even Revenue",
            value: "$5,000",
          },
        ],

        formulaTitle: "Break-even Formula",

        formula:
          "Break-even Units = Fixed Costs ÷ (Selling Price − Variable Cost)",

        formulaExplanation:
          "Divide your fixed costs by your contribution margin (selling price minus variable cost). The result is the number of units you must sell before making a profit.",

        whyTitle: "Why Break-even Matters",

        why1:
          "Knowing your break-even point tells you the minimum sales volume required to avoid losing money. It provides a clear sales target for your business.",

        why2:
          "It also helps you compare different pricing strategies, understand the impact of reducing costs, and evaluate whether a business idea is financially viable.",

        faq: [
          {
            question: "What is a break-even point?",
            answer:
              "It is the point where total revenue equals total costs, meaning there is no profit and no loss.",
          },
          {
            question: "What is contribution margin?",
            answer:
              "Contribution margin is your selling price minus your variable cost per unit.",
          },
          {
            question: "What are fixed costs?",
            answer:
              "Fixed costs are expenses that do not change with sales volume, such as rent, salaries, and insurance.",
          },
          {
            question: "What happens if I increase my selling price?",
            answer:
              "A higher selling price increases contribution margin and lowers your break-even point.",
          },
          {
            question: "Can freelancers use this calculator?",
            answer:
              "Yes. It works well for freelancers, consultants, online sellers, and small businesses.",
          },
          {
            question: "How often should I calculate break-even?",
            answer:
              "Review it whenever your prices, costs, or business model change.",
          },
        ],

        relatedCalculators: [
          {
            title: "Profit Calculator",
            href: "/profit-calculator",
          },
          {
            title: "Pricing Calculator",
            href: "/pricing-calculator",
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