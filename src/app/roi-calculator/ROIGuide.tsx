import ExampleTable from "@/components/ExampleTable";
import FormulaBox from "@/components/FormulaBox";
import FAQ from "@/components/FAQ";
import RelatedCalculators from "@/components/RelatedCalculators";

type Props = {
  lang?: "en" | "ja";
};

export default function ROIGuide({
  lang = "en",
}: Props) {
  const text =
    lang === "ja"
      ? {
          title: "ROIとは？",

          intro1:
            "ROI（Return on Investment：投資利益率）は、投資に対してどれだけ利益を得られたかを示す重要な指標です。設備投資、広告費、新規事業、株式投資など、さまざまな投資の成果を比較できます。",

          intro2:
            "ROIを把握することで、どの投資が最も効率よく利益を生み出しているかを判断し、より良い経営判断につなげることができます。",

          exampleTitle: "計算例",

          rows: [
            {
              label: "投資額",
              value: "¥1,000,000",
            },
            {
              label: "追加費用",
              value: "¥100,000",
            },
            {
              label: "回収額",
              value: "¥1,500,000",
            },
            {
              label: "純利益",
              value: "¥400,000",
            },
            {
              label: "ROI",
              value: "36.4%",
            },
            {
              label: "投資倍率",
              value: "1.36×",
            },
          ],

          formulaTitle: "ROIの計算式",

          formula:
            "ROI = (純利益 ÷ 総投資額) × 100",

          formulaExplanation:
            "純利益を総投資額で割り、100を掛けることでROIを計算します。",
        }
      : {
          title: "Understanding ROI",

          intro1:
            "Return on Investment (ROI) measures how much profit an investment generates relative to its total cost. It is widely used to evaluate marketing campaigns, equipment purchases, business projects, and financial investments.",

          intro2:
            "By comparing ROI across different opportunities, businesses can prioritize investments that generate the highest returns.",

          exampleTitle: "Example Calculation",

          rows: [
            {
              label: "Investment",
              value: "$10,000",
            },
            {
              label: "Additional Costs",
              value: "$1,000",
            },
            {
              label: "Return",
              value: "$15,000",
            },
            {
              label: "Net Profit",
              value: "$4,000",
            },
            {
              label: "ROI",
              value: "36.4%",
            },
            {
              label: "Investment Multiple",
              value: "1.36×",
            },
          ],

          formulaTitle: "ROI Formula",

          formula:
            "ROI = (Net Profit ÷ Total Investment) × 100",

          formulaExplanation:
            "Divide your net profit by your total investment and multiply by 100 to calculate ROI.",
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
            ? "ROIが重要な理由"
            : "Why ROI Matters"}
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
            ? "ROIは、投資したお金がどれだけ効率よく利益を生み出しているかを数値で確認できる指標です。同じ予算でもROIを比較することで、より収益性の高い投資先を選ぶことができます。"
            : "ROI shows how efficiently your investment generates profit. Comparing ROI across different projects helps you allocate your budget to the opportunities that deliver the greatest return."}
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
            ? "広告費、設備投資、新商品開発など、あらゆる投資の成果を定量的に評価できるため、経営判断に欠かせない指標となっています。"
            : "Whether you're evaluating marketing campaigns, equipment purchases, or new business projects, ROI provides an objective way to measure investment performance and support smarter business decisions."}
        </p>
      </section>
           <FAQ
        items={
          lang === "ja"
            ? [
                {
                  question: "ROIとは何ですか？",
                  answer:
                    "ROI（投資利益率）は、投資に対してどれだけ利益を得られたかを示す指標です。",
                },
                {
                  question: "ROIはどのように計算されますか？",
                  answer:
                    "純利益を総投資額で割り、100を掛けて計算します。",
                },
                {
                  question: "ROIが高いほど良いですか？",
                  answer:
                    "一般的には高いROIほど投資効率が良いことを意味します。ただし、リスクや投資期間も考慮する必要があります。",
                },
                {
                  question: "ROIがマイナスになることはありますか？",
                  answer:
                    "はい。投資額を回収できなかった場合、ROIはマイナスになります。",
                },
                {
                  question: "広告費の評価にも使えますか？",
                  answer:
                    "はい。広告、設備投資、新規事業、株式投資など幅広く利用できます。",
                },
                {
                  question: "ROIはどのくらいの頻度で確認すべきですか？",
                  answer:
                    "投資案件ごとに定期的に確認し、予算配分や経営判断に活用することをおすすめします。",
                },
              ]
            : [
                {
                  question: "What is ROI?",
                  answer:
                    "ROI (Return on Investment) measures how much profit an investment generates relative to its cost.",
                },
                {
                  question: "How is ROI calculated?",
                  answer:
                    "ROI is calculated by dividing net profit by total investment and multiplying by 100.",
                },
                {
                  question: "Is a higher ROI always better?",
                  answer:
                    "Generally yes, although investment risk and time horizon should also be considered.",
                },
                {
                  question: "Can ROI be negative?",
                  answer:
                    "Yes. If your investment loses money, your ROI will be negative.",
                },
                {
                  question: "Can I use this for marketing campaigns?",
                  answer:
                    "Absolutely. It works for advertising, equipment purchases, business projects, and financial investments.",
                },
                {
                  question: "How often should ROI be reviewed?",
                  answer:
                    "Review ROI regularly whenever evaluating investments or making budgeting decisions.",
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
                  title: "価格設定ツール",
                  href: "/ja/pricing-calculator",
                },
                {
                  title: "損益分岐点計算",
                  href: "/ja/break-even-calculator",
                },
              ]
            : [
                {
                  title: "Profit Calculator",
                  href: "/profit-calculator",
                },
                {
                  title: "Pricing Calculator",
                  href: "/pricing-calculator",
                },
                {
                  title: "Break-even Calculator",
                  href: "/break-even-calculator",
                },
              ]
        }
      />
           </>
  );
}