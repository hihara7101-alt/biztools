import ExampleTable from "@/components/ExampleTable";
import FormulaBox from "@/components/FormulaBox";
import FAQ from "@/components/FAQ";
import RelatedCalculators from "@/components/RelatedCalculators";

type Props = {
  lang?: "en" | "ja";
};

export default function PricingGuide({
  lang = "en",
}: Props) {
  const text =
    lang === "ja"
      ? {
          title: "価格設定とは？",

          intro1:
            "適切な価格設定は利益を左右する最も重要な要素の一つです。価格が低すぎると利益が減少し、高すぎると販売数量が減少する可能性があります。",

          intro2:
            "この価格設定ツールでは、原価と希望利益率から適切な販売価格を計算できます。利益・原価利益率・税込価格も同時に確認できます。",

          exampleTitle: "計算例",

          rows: [
            {
              label: "原価",
              value: "¥5,000",
            },
            {
              label: "利益率",
              value: "30%",
            },
            {
              label: "販売価格",
              value: "¥7,143",
            },
            {
              label: "利益",
              value: "¥2,143",
            },
            {
              label: "原価利益率",
              value: "42.9%",
            },
            {
              label: "税込価格",
              value: "¥7,857",
            },
          ],

          formulaTitle: "価格計算式",

          formula:
            "販売価格 = 原価 ÷ (1 − 利益率)",

          formulaExplanation:
            "希望する利益率を維持するために必要な販売価格を計算します。",

          whyTitle: "価格設定が重要な理由",

          why1:
            "価格設定は売上だけでなく利益にも直接影響します。適切な価格を設定することで、十分な利益を確保しながら競争力も維持できます。",

          why2:
            "価格を変更する前に利益率や原価利益率を確認することで、より合理的な経営判断ができます。",

          faq: [
            {
              question: "利益率とは？",
              answer:
                "販売価格に対する利益の割合です。",
            },
            {
              question: "原価利益率とは？",
              answer:
                "原価利益率とは、原価に対してどれだけ利益を上乗せしているかを示す割合です。",
            },
            {
              question: "利益率と原価利益率の違いは？",
              answer:
                "利益率は販売価格に対する利益の割合です。一方、原価利益率は原価に対してどれだけ利益を上乗せしているかを示します。計算方法が異なるため、数値も異なります。",
            },
            {
              question: "税込価格も計算できますか？",
              answer:
                "はい。税率を入力すると税込価格も表示されます。",
            },
            {
              question: "サービス業でも利用できますか？",
              answer:
                "はい。商品販売だけでなくサービス価格にも利用できます。",
            },
            {
              question: "価格はどのくらい見直すべきですか？",
              answer:
                "原価や市場環境が変化したタイミングで見直すことをおすすめします。",
            },
          ],

          relatedCalculators: [
            {
              title: "利益計算ツール",
              href: "/ja/profit-calculator",
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
          title: "Understanding Pricing",

          intro1:
            "Setting the right selling price is one of the most important decisions for any business. If your price is too low, your profits suffer. If it is too high, customers may buy from competitors.",

          intro2:
            "This calculator helps you determine the selling price needed to achieve your desired profit margin while also showing your profit, markup, and final price including tax.",

          exampleTitle: "Example Calculation",

          rows: [
            {
              label: "Cost",
              value: "$50",
            },
            {
              label: "Desired Margin",
              value: "30%",
            },
            {
              label: "Selling Price",
              value: "$71.43",
            },
            {
              label: "Profit",
              value: "$21.43",
            },
            {
              label: "Markup",
              value: "42.9%",
            },
            {
              label: "Price Including Tax",
              value: "$78.57",
            },
          ],

          formulaTitle: "Pricing Formula",

          formula:
            "Selling Price = Cost ÷ (1 − Desired Margin)",

          formulaExplanation:
            "Divide your product cost by one minus your desired profit margin to calculate the correct selling price.",

          whyTitle: "Why Pricing Matters",

          why1:
            "Pricing affects both sales volume and profitability. A well-priced product helps maximize long-term business growth while remaining competitive.",

          why2:
            "Understanding your margin, markup, and tax-inclusive price helps you make confident pricing decisions and avoid underpricing your products or services.",

          faq: [
            {
              question: "What is profit margin?",
              answer:
                "Profit margin is the percentage of your selling price that becomes profit.",
            },
            {
              question: "What is markup?",
              answer:
                "Markup measures how much you increase your selling price above your product cost.",
            },
            {
              question: "Are margin and markup the same?",
              answer:
                "No. They are calculated differently and will usually produce different percentages.",
            },
            {
              question: "Can I include tax?",
              answer:
                "Yes. Enter your sales tax rate to calculate the final selling price including tax.",
            },
            {
              question: "Can service businesses use this calculator?",
              answer:
                "Absolutely. It works for products, services, freelancers, consultants, and online businesses.",
            },
            {
              question: "How often should I review pricing?",
              answer:
                "Review your prices whenever costs, competitors, or market conditions change.",
            },
          ],

          relatedCalculators: [
            {
              title: "Profit Calculator",
              href: "/profit-calculator",
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

      <FAQ items={text.faq} />

      <RelatedCalculators
        calculators={text.relatedCalculators}
      />
    </>
  );
}