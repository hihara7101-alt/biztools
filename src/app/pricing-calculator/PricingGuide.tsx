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
            "価格設定は、商品やサービスの利益を左右する重要な経営判断です。価格が低すぎると販売しても十分な利益が残らず、高すぎると購入されにくくなる可能性があります。",

          intro2:
            "この価格設定ツールでは、原価と希望利益率から販売価格を計算し、1件あたりの利益、原価利益率、税込価格も同時に確認できます。",

          exampleTitle: "価格計算の例",

          rows: [
            {
              label: "原価",
              value: "¥5,000",
            },
            {
              label: "希望利益率",
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

          formulaTitle: "販売価格の計算式",

          formula:
            "販売価格 = 原価 ÷ (1 − 希望利益率)",

          formulaExplanation:
            "希望する利益率を販売価格に対して確保するために必要な販売価格を計算します。",

          marginTitle:
            "利益率と原価利益率の違い",

          margin1:
            "利益率は、販売価格に対して利益がどの程度残るかを示す割合です。例えば、販売価格10,000円に対して利益が3,000円の場合、利益率は30%です。",

          margin2:
            "原価利益率は、原価に対してどの程度利益を上乗せしているかを示す割合です。同じ取引でも利益率と原価利益率では計算方法が異なるため、数値も異なります。",

          whyTitle: "価格設定が重要な理由",

          why1:
            "価格設定は売上だけでなく、利益率、販売数量、顧客の購入判断にも影響します。適切な価格を設定することで、必要な利益を確保しながら事業を継続しやすくなります。",

          why2:
            "原価が上昇した場合に価格を据え置くと利益率が低下します。仕入価格、材料費、配送費、人件費などが変化したときは、販売価格も定期的に見直すことが重要です。",

          reviewTitle:
            "価格を見直すときのポイント",

          reviewItems: [
            {
              title: "原価の変化を確認する",
              text:
                "仕入れ、材料、配送などの費用が増えていないか確認します。",
            },
            {
              title: "利益率を確認する",
              text:
                "現在の販売価格で必要な利益率を維持できているか確認します。",
            },
            {
              title: "競合価格と比較する",
              text:
                "市場価格との差を確認し、価格だけでなく品質やサービス内容も含めて検討します。",
            },
            {
              title: "販売数量への影響を考える",
              text:
                "価格変更によって販売数量がどの程度変化する可能性があるかも検討します。",
            },
          ],

          interpretationTitle:
            "計算結果の見方",

          interpretation1:
            "計算された販売価格は、入力した原価と希望利益率に基づく目安です。実際の販売価格を決める際には、競合価格、顧客が感じる価値、市場環境なども考慮する必要があります。",

          interpretation2:
            "希望利益率を高く設定すると販売価格も高くなります。販売価格が市場に対して高すぎる場合は、原価削減や利益率の見直しも検討できます。",

          mistakesTitle:
            "よくある価格設定のミス",

          mistakesItems: [
            "原価だけを見て、固定費やその他の経費を考慮しない",
            "競合価格だけを基準にして自社の利益を確認しない",
            "原価が上昇しても販売価格を長期間見直さない",
            "利益率と原価利益率を同じものとして扱う",
          ],

          faq: [
            {
              question: "利益率とは何ですか？",
              answer:
                "利益率は、販売価格に対してどの程度の利益が残るかを示す割合です。",
            },
            {
              question: "原価利益率とは何ですか？",
              answer:
                "原価利益率は、原価に対してどれだけ利益を上乗せしているかを示す割合です。",
            },
            {
              question: "利益率と原価利益率は同じですか？",
              answer:
                "いいえ。利益率は販売価格を基準にし、原価利益率は原価を基準にするため、同じ取引でも数値は異なります。",
            },
            {
              question: "税込価格も計算できますか？",
              answer:
                "はい。税率を入力すると、計算した販売価格に税率を加えた税込価格も表示されます。",
            },
            {
              question: "サービス業でも利用できますか？",
              answer:
                "はい。商品の販売だけでなく、フリーランス、コンサルティング、各種サービスの価格検討にも利用できます。",
            },
            {
              question: "どのくらいの頻度で価格を見直すべきですか？",
              answer:
                "原価、競合、市場環境、需要などに大きな変化があった場合は、販売価格を見直すことをおすすめします。",
            },
            {
              question: "計算された価格をそのまま使うべきですか？",
              answer:
                "計算結果は利益率を基準にした目安です。実際の価格は市場価格、顧客価値、競合、税金なども考慮して決定してください。",
            },
          ],

          relatedCalculators: [
            {
              title: "利益計算ツール",
              href: "/profit-calculator",
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
          title: "Understanding Pricing",

          intro1:
            "Pricing is one of the most important decisions in a business. A price that is too low may generate sales without producing enough profit, while a price that is too high may reduce demand.",

          intro2:
            "This Pricing Calculator uses your cost and desired profit margin to estimate a selling price. It also shows profit per unit, markup and the final price including tax.",

          exampleTitle: "Pricing Example",

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
              label: "Profit per Unit",
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

          formulaTitle: "Selling Price Formula",

          formula:
            "Selling Price = Cost ÷ (1 − Desired Margin)",

          formulaExplanation:
            "This formula calculates the selling price required to preserve your desired margin as a percentage of the selling price.",

          marginTitle:
            "Profit Margin vs. Markup",

          margin1:
            "Profit margin measures profit as a percentage of the selling price. For example, if a product sells for $100 and generates $30 in profit, the profit margin is 30%.",

          margin2:
            "Markup measures profit relative to cost. Because margin uses selling price and markup uses cost as the base, the two percentages are not the same.",

          whyTitle: "Why Pricing Matters",

          why1:
            "Pricing affects revenue, profitability, sales volume and customer purchasing decisions. A sustainable price needs to cover costs while leaving enough profit to support the business.",

          why2:
            "If costs rise while prices remain unchanged, margins shrink. Reviewing pricing when supplier costs, materials, shipping or labor expenses change can help protect profitability.",

          reviewTitle:
            "What to Review Before Changing a Price",

          reviewItems: [
            {
              title: "Check Your Costs",
              text:
                "Review purchasing, materials, shipping and other costs that affect each sale.",
            },
            {
              title: "Check Your Margin",
              text:
                "Confirm whether the current selling price still provides the level of profit you need.",
            },
            {
              title: "Compare the Market",
              text:
                "Review competitor prices while also considering differences in quality, service and positioning.",
            },
            {
              title: "Consider Sales Volume",
              text:
                "Think about how a price increase or decrease could affect the number of customers willing to buy.",
            },
          ],

          interpretationTitle:
            "How to Interpret the Result",

          interpretation1:
            "The calculated selling price is an estimate based on the cost and desired margin you entered. Actual pricing decisions may also need to consider competitors, customer value and market conditions.",

          interpretation2:
            "A higher desired margin produces a higher selling price. If the result appears too high for the market, consider whether costs can be reduced or whether a lower margin is more realistic.",

          mistakesTitle:
            "Common Pricing Mistakes",

          mistakesItems: [
            "Setting prices based only on cost without considering fixed or operating expenses",
            "Copying competitor prices without checking your own profitability",
            "Failing to review prices when costs increase",
            "Confusing profit margin with markup",
          ],

          faq: [
            {
              question: "What is profit margin?",
              answer:
                "Profit margin is the percentage of the selling price that remains as profit.",
            },
            {
              question: "What is markup?",
              answer:
                "Markup measures the amount of profit added to cost as a percentage of that cost.",
            },
            {
              question: "Are margin and markup the same?",
              answer:
                "No. Margin is based on selling price, while markup is based on cost, so the percentages are different.",
            },
            {
              question: "Can I include tax?",
              answer:
                "Yes. Enter a tax rate and the calculator will also display the estimated price including tax.",
            },
            {
              question: "Can service businesses use this calculator?",
              answer:
                "Yes. The calculator can also be used by freelancers, consultants and service businesses when evaluating pricing.",
            },
            {
              question: "How often should I review pricing?",
              answer:
                "Review pricing when costs, competitors, demand or other market conditions change significantly.",
            },
            {
              question: "Should I use the calculated price exactly?",
              answer:
                "The result is a margin-based estimate. Final pricing should also consider competition, customer value, market conditions and relevant taxes.",
            },
          ],

          relatedCalculators: [
            {
              title: "Profit Calculator",
              href: "/en/profit-calculator",
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
          {text.marginTitle}
        </h2>

        <p
          style={{
            marginTop: "20px",
            color: "#6B7280",
            lineHeight: 1.9,
            fontSize: "17px",
          }}
        >
          {text.margin1}
        </p>

        <p
          style={{
            marginTop: "20px",
            color: "#6B7280",
            lineHeight: 1.9,
            fontSize: "17px",
          }}
        >
          {text.margin2}
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
          {text.reviewTitle}
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
          {text.reviewItems.map((item) => (
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
          padding: "28px",
          border: "1px solid #FDE68A",
          borderRadius: "18px",
          background: "#FFFBEB",
        }}
      >
        <h2
          style={{
            margin: 0,
            fontSize: "26px",
            fontWeight: 700,
            color: "#92400E",
          }}
        >
          {text.mistakesTitle}
        </h2>

        <ul
          style={{
            marginTop: "18px",
            marginBottom: 0,
            paddingLeft: "24px",
            color: "#78350F",
            lineHeight: 2,
          }}
        >
          {text.mistakesItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <FAQ items={text.faq} />

      <RelatedCalculators
        calculators={text.relatedCalculators}
      />
    </>
  );
}