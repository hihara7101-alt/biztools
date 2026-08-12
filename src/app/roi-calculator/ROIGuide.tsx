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
            "ROI（Return on Investment：投資利益率）は、投資した金額に対してどれだけ利益を得られたかを示す指標です。広告費、設備投資、新商品開発、システム導入など、さまざまな投資の成果を比較する際に利用できます。",

          intro2:
            "ROIを確認することで、限られた予算をどの投資に配分すべきかを判断しやすくなります。ただし、ROIだけでなく投資期間やリスクも合わせて考えることが重要です。",

          exampleTitle: "ROI計算の例",

          rows: [
            {
              label: "初期投資額",
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
              label: "総投資額",
              value: "¥1,100,000",
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
            "総投資額は、初期投資額と追加費用の合計です。回収額から総投資額を差し引いて純利益を求め、その純利益を総投資額で割ってROIを計算します。",

          meaningTitle: "ROIの見方",

          meaning1:
            "ROIがプラスであれば、投資額を上回る利益を生み出している状態です。ROIが高いほど、同じ投資額に対してより多くの利益を得ていることを意味します。",

          meaning2:
            "ROIが0%の場合は、投資額と回収額が同じで利益が出ていない状態です。ROIがマイナスの場合は、投資額を十分に回収できていません。",

          whyTitle: "ROIが重要な理由",

          why1:
            "投資額だけでは、その投資が効率的だったか判断できません。ROIを使うことで、異なる金額の投資案件でも成果を割合で比較できます。",

          why2:
            "広告、設備、システム、新規プロジェクトなど複数の投資先がある場合、ROIを比較することで、より効率的に利益を生み出している投資を把握できます。",

          useCasesTitle: "ROIを活用できる場面",

          useCases: [
            {
              title: "広告・マーケティング",
              text:
                "広告費に対してどの程度の利益が生まれたかを確認できます。",
            },
            {
              title: "設備投資",
              text:
                "機械、PC、設備などへの投資が利益改善につながっているかを確認できます。",
            },
            {
              title: "新商品・新サービス",
              text:
                "開発費や販促費に対して、どの程度の利益が得られたかを評価できます。",
            },
            {
              title: "システム導入",
              text:
                "業務効率化ツールやシステムへの投資がコスト削減や利益増加につながったかを確認できます。",
            },
          ],

          limitationsTitle:
            "ROIだけでは判断できないこと",

          limitations1:
            "ROIは便利な指標ですが、投資期間を直接考慮していません。例えば、同じ30%のROIでも、3か月で達成した場合と3年かかった場合では意味が異なります。",

          limitations2:
            "また、投資リスク、資金回収のタイミング、将来の継続効果などもROIだけでは判断できません。重要な投資では、ROIを他の指標と組み合わせて確認することが必要です。",

          faq: [
            {
              question: "ROIとは何ですか？",
              answer:
                "ROI（投資利益率）は、投資金額に対してどれだけ利益を得られたかを割合で示す指標です。",
            },
            {
              question: "ROIはどのように計算されますか？",
              answer:
                "純利益を総投資額で割り、100を掛けて計算します。",
            },
            {
              question: "ROIが高いほど良いですか？",
              answer:
                "一般的には高いROIほど投資効率が良いことを示しますが、投資期間やリスクも考慮する必要があります。",
            },
            {
              question: "ROIがマイナスになることはありますか？",
              answer:
                "はい。回収額が総投資額を下回る場合、純利益がマイナスになり、ROIもマイナスになります。",
            },
            {
              question: "広告費の評価にも使えますか？",
              answer:
                "はい。広告費とその広告から得られた利益を使って、広告投資の効率を確認できます。",
            },
            {
              question: "追加費用も投資額に含めるべきですか？",
              answer:
                "はい。導入費、運用費、手数料など投資に直接関係する追加費用がある場合は、総投資額に含めるとより現実的なROIを計算できます。",
            },
            {
              question: "ROIはどのくらいの頻度で確認すべきですか？",
              answer:
                "投資の性質によって異なりますが、広告や継続的なプロジェクトでは定期的に確認し、設備投資などでは計画した期間ごとに見直す方法があります。",
            },
          ],

          relatedCalculators: [
            {
              title: "利益計算ツール",
              href: "/profit-calculator",
            },
            {
              title: "価格設定ツール",
              href: "/pricing-calculator",
            },
            {
              title: "損益分岐点計算ツール",
              href: "/break-even-calculator",
            },
          ],
        }
      : {
          title: "Understanding ROI",

          intro1:
            "Return on Investment (ROI) measures how much profit an investment generates relative to the amount invested. It can be used to evaluate advertising, equipment purchases, new products, software implementation and other business investments.",

          intro2:
            "ROI can make it easier to compare opportunities and decide where a limited budget may be used most effectively. However, ROI should also be considered together with investment risk and the time required to generate the return.",

          exampleTitle: "ROI Calculation Example",

          rows: [
            {
              label: "Initial Investment",
              value: "$10,000",
            },
            {
              label: "Additional Costs",
              value: "$1,000",
            },
            {
              label: "Return Amount",
              value: "$15,000",
            },
            {
              label: "Total Investment",
              value: "$11,000",
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
            "Total investment includes the initial investment plus related additional costs. Subtract total investment from the return amount to calculate net profit, then divide net profit by total investment and multiply by 100.",

          meaningTitle: "How to Interpret ROI",

          meaning1:
            "A positive ROI means the investment generated more value than it cost. A higher ROI generally indicates that more profit was produced for each dollar invested.",

          meaning2:
            "An ROI of 0% means the investment broke even. A negative ROI means the investment has not yet recovered its total cost.",

          whyTitle: "Why ROI Matters",

          why1:
            "The size of an investment alone does not show whether it was efficient. ROI expresses performance as a percentage, allowing investments of different sizes to be compared more easily.",

          why2:
            "When a business has several possible uses for its budget, such as advertising, equipment, software or new projects, ROI can help identify which investments are producing stronger financial results.",

          useCasesTitle: "Common Uses for ROI",

          useCases: [
            {
              title: "Marketing & Advertising",
              text:
                "Compare advertising spending with the profit generated from the campaign.",
            },
            {
              title: "Equipment Purchases",
              text:
                "Evaluate whether machinery, computers or other equipment is producing enough financial benefit.",
            },
            {
              title: "New Products or Services",
              text:
                "Compare development and launch costs with the profit generated after release.",
            },
            {
              title: "Software & Systems",
              text:
                "Assess whether technology investments are creating cost savings or additional profit.",
            },
          ],

          limitationsTitle:
            "What ROI Does Not Tell You",

          limitations1:
            "ROI does not directly account for time. A 30% ROI earned in three months is very different from the same 30% ROI earned over three years.",

          limitations2:
            "ROI also does not fully capture investment risk, cash-flow timing or long-term strategic benefits. Important investments should therefore be evaluated using ROI together with other financial and business considerations.",

          faq: [
            {
              question: "What is ROI?",
              answer:
                "ROI (Return on Investment) measures how much profit an investment generates relative to its total cost.",
            },
            {
              question: "How is ROI calculated?",
              answer:
                "Divide net profit by total investment and multiply the result by 100.",
            },
            {
              question: "Is a higher ROI always better?",
              answer:
                "A higher ROI generally indicates better financial efficiency, but investment risk and time horizon should also be considered.",
            },
            {
              question: "Can ROI be negative?",
              answer:
                "Yes. If the return is lower than the total amount invested, net profit and ROI will be negative.",
            },
            {
              question: "Can I use ROI for marketing campaigns?",
              answer:
                "Yes. ROI can be used to compare advertising costs with the profit generated by a campaign.",
            },
            {
              question: "Should additional costs be included?",
              answer:
                "Yes. Fees, setup costs, operating expenses and other costs directly connected to the investment should be included when possible.",
            },
            {
              question: "How often should ROI be reviewed?",
              answer:
                "The review period depends on the investment. Ongoing campaigns may be reviewed regularly, while equipment or long-term projects may be evaluated at planned milestones.",
            },
          ],

          relatedCalculators: [
            {
              title: "Profit Calculator",
              href: "/en/profit-calculator",
            },
            {
              title: "Pricing Calculator",
              href: "/en/pricing-calculator",
            },
            {
              title: "Break-even Calculator",
              href: "/en/break-even-calculator",
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
          {text.meaningTitle}
        </h2>

        <p
          style={{
            marginTop: "20px",
            color: "#6B7280",
            lineHeight: 1.9,
            fontSize: "17px",
          }}
        >
          {text.meaning1}
        </p>

        <p
          style={{
            marginTop: "20px",
            color: "#6B7280",
            lineHeight: 1.9,
            fontSize: "17px",
          }}
        >
          {text.meaning2}
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
          {text.useCasesTitle}
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
          {text.useCases.map((item) => (
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
          {text.limitationsTitle}
        </h2>

        <p
          style={{
            marginTop: "18px",
            color: "#78350F",
            lineHeight: 1.9,
            fontSize: "16px",
          }}
        >
          {text.limitations1}
        </p>

        <p
          style={{
            marginTop: "16px",
            marginBottom: 0,
            color: "#78350F",
            lineHeight: 1.9,
            fontSize: "16px",
          }}
        >
          {text.limitations2}
        </p>
      </section>

      <FAQ items={text.faq} />

      <RelatedCalculators
        calculators={text.relatedCalculators}
      />
    </>
  );
}