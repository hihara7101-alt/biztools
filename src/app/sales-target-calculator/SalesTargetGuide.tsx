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
            "売上目標は、目標とする利益を達成するために必要な販売数量や売上高を具体的な数字で示したものです。感覚だけで売上を考えるのではなく、利益目標から逆算することで、より現実的な計画を立てやすくなります。",

          intro2:
            "この売上目標計算ツールでは、目標利益、販売価格、変動費、固定費を入力すると、目標達成に必要な販売数量と売上高を自動で計算できます。",

          exampleTitle: "売上目標の計算例",

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
              label: "1個あたりの限界利益",
              value: "¥6,000",
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

          formulaTitle: "必要販売数の計算式",

          formula:
            "必要販売数 = (目標利益 + 固定費) ÷ 1個あたりの限界利益",

          formulaExplanation:
            "1個あたりの限界利益は、販売価格から1個あたりの変動費を差し引いた金額です。目標利益と固定費の合計を限界利益で割ることで、必要な販売数量を計算できます。",

          meaningTitle: "計算結果の見方",

          meaning1:
            "必要販売数は、入力した条件で目標利益を達成するために必要な販売数量です。実際の販売では端数の商品を販売できないため、必要に応じて切り上げて目標を設定します。",

          meaning2:
            "必要売上高は、その販売数量を達成した場合の売上金額です。売上だけでなく、販売数量も同時に確認することで、より具体的な営業計画を立てやすくなります。",

          whyTitle: "売上目標が重要な理由",

          why1:
            "売上目標が明確であれば、営業活動やマーケティング施策が目標に対して十分かどうかを確認できます。例えば、月間150件の販売が必要であれば、週単位や日単位の目標に分けることもできます。",

          why2:
            "利益目標から逆算して売上を考えることで、単に売上を増やすだけではなく、必要な利益を残すための販売計画を作ることができます。",

          impactTitle:
            "販売価格やコストが目標に与える影響",

          impactItems: [
            {
              title: "販売価格を上げる",
              text:
                "変動費が同じ場合、1件あたりの限界利益が増えるため、目標達成に必要な販売数量は少なくなります。",
            },
            {
              title: "変動費を下げる",
              text:
                "仕入価格や材料費を削減すると限界利益が増え、必要販売数量を減らせます。",
            },
            {
              title: "固定費が増える",
              text:
                "家賃、人件費、システム費用などの固定費が増えると、目標達成に必要な売上も増加します。",
            },
            {
              title: "目標利益を上げる",
              text:
                "より高い利益を目指すほど、必要となる販売数量と売上高も増加します。",
            },
          ],

          planningTitle: "売上目標を実際の計画に落とし込む",

          planning1:
            "月間の必要販売数が分かったら、週単位や日単位に分けて営業目標を設定できます。例えば月間120件が必要であれば、4週間で考えると週30件が一つの目安になります。",

          planning2:
            "さらに、平均成約率が分かっている場合は、必要な見込み客数や問い合わせ数まで逆算できます。売上目標を具体的な行動目標に変えることで、日々の営業活動に活用しやすくなります。",

          cautionTitle:
            "計算結果を使うときの注意点",

          caution1:
            "この計算では、販売価格や変動費が一定であることを前提としています。実際には値引き、返品、送料、決済手数料などによって利益が変わる場合があります。",

          caution2:
            "季節変動、在庫制限、人員、広告費なども販売数量に影響するため、計算結果は目標設定や比較検討の目安として利用してください。",

          faq: [
            {
              question: "売上目標とは何ですか？",
              answer:
                "目標利益を達成するために必要な売上高または販売数量です。",
            },
            {
              question: "必要販売数はどのように計算されますか？",
              answer:
                "目標利益と固定費の合計を、1個あたりの限界利益で割って計算します。",
            },
            {
              question: "限界利益とは何ですか？",
              answer:
                "販売価格から変動費を差し引いた、1件または1商品あたりの利益貢献額です。",
            },
            {
              question: "販売価格を変更すると結果は変わりますか？",
              answer:
                "はい。変動費が同じ場合、販売価格が高くなるほど1件あたりの限界利益が増えるため、必要販売数は少なくなります。",
            },
            {
              question: "固定費が増えるとどうなりますか？",
              answer:
                "固定費が増えると、目標利益を達成するために必要な販売数量と売上高も増加します。",
            },
            {
              question: "サービス業でも利用できますか？",
              answer:
                "はい。商品販売だけでなく、コンサルティング、制作業、フリーランスなどのサービス価格にも利用できます。",
            },
            {
              question: "売上目標はどのくらいの頻度で見直すべきですか？",
              answer:
                "月次や四半期ごとに見直すほか、販売価格、コスト、利益目標が変わった場合にも再計算することをおすすめします。",
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
              title: "価格設定ツール",
              href: "/pricing-calculator",
            },
          ],
        }
      : {
          title: "Understanding Sales Targets",

          intro1:
            "A sales target defines the amount of revenue or number of sales required to reach a specific profit goal. Instead of relying on guesswork, you can work backward from the profit you want to earn and create a more practical sales plan.",

          intro2:
            "This Sales Target Calculator uses your target profit, selling price, variable cost and fixed costs to estimate the sales volume and revenue required to reach your goal.",

          exampleTitle: "Sales Target Example",

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
              label: "Contribution per Unit",
              value: "$60",
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
            "Units Required = (Target Profit + Fixed Costs) ÷ Contribution per Unit",

          formulaExplanation:
            "Contribution per unit is the selling price minus variable cost. Add your desired profit to fixed costs and divide by contribution per unit to estimate the number of sales required.",

          meaningTitle: "How to Interpret the Result",

          meaning1:
            "Units required shows the estimated number of sales needed to reach your target profit under the assumptions entered. If the result includes a fraction, you may need to round up when selling whole units.",

          meaning2:
            "Required revenue shows the amount of sales revenue associated with that volume. Reviewing both units and revenue makes it easier to create a practical sales plan.",

          whyTitle: "Why Sales Targets Matter",

          why1:
            "A clear sales target gives your sales and marketing activity a measurable objective. For example, if 150 monthly sales are required, the target can be divided into weekly or daily goals.",

          why2:
            "Working backward from profit helps ensure that the target is connected to profitability rather than simply trying to increase revenue without understanding the financial result.",

          impactTitle:
            "How Pricing and Costs Affect Your Target",

          impactItems: [
            {
              title: "Increase Selling Price",
              text:
                "If variable cost remains unchanged, a higher selling price increases contribution per unit and reduces the number of sales required.",
            },
            {
              title: "Reduce Variable Cost",
              text:
                "Lower supplier, material or delivery costs can increase contribution per sale and reduce the required sales volume.",
            },
            {
              title: "Increase Fixed Costs",
              text:
                "Higher rent, payroll, subscriptions or other fixed costs increase the sales required to reach the same profit target.",
            },
            {
              title: "Increase Target Profit",
              text:
                "A larger profit goal requires more sales or higher contribution per sale.",
            },
          ],

          planningTitle: "Turn the Sales Target into an Action Plan",

          planning1:
            "Once you know the monthly sales requirement, divide it into weekly or daily goals. For example, a target of 120 monthly sales is approximately 30 sales per week over four weeks.",

          planning2:
            "If you know your average conversion rate, you can work backward again to estimate the number of leads, inquiries or opportunities required to generate those sales.",

          cautionTitle: "Limitations of the Calculation",

          caution1:
            "The calculation assumes selling price and variable cost remain consistent. Discounts, refunds, payment fees, shipping costs and other changes can affect actual profit.",

          caution2:
            "Seasonality, inventory constraints, staffing and marketing performance can also affect whether the sales target is achievable. Use the result as a planning estimate rather than a guarantee.",

          faq: [
            {
              question: "What is a sales target?",
              answer:
                "A sales target is the revenue or number of sales required to reach a desired business goal or profit level.",
            },
            {
              question: "How are the required units calculated?",
              answer:
                "Add target profit to fixed costs, then divide the total by contribution per unit.",
            },
            {
              question: "What is contribution per unit?",
              answer:
                "Contribution per unit is the selling price minus the variable cost associated with one sale.",
            },
            {
              question: "Will changing my selling price affect the result?",
              answer:
                "Yes. If variable cost stays the same, a higher selling price increases contribution per unit and usually reduces the number of sales required.",
            },
            {
              question: "What happens if fixed costs increase?",
              answer:
                "Higher fixed costs increase the sales volume and revenue required to reach the same target profit.",
            },
            {
              question: "Can service businesses use this calculator?",
              answer:
                "Yes. It can be used by freelancers, consultants, agencies and other service businesses as well as product businesses.",
            },
            {
              question: "How often should I review sales targets?",
              answer:
                "Review targets monthly, quarterly or whenever pricing, costs or profit goals change significantly.",
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
              title: "Pricing Calculator",
              href: "/en/pricing-calculator",
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
          {text.impactTitle}
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
          {text.impactItems.map((item) => (
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
          {text.planningTitle}
        </h2>

        <p
          style={{
            marginTop: "20px",
            color: "#6B7280",
            lineHeight: 1.9,
            fontSize: "17px",
          }}
        >
          {text.planning1}
        </p>

        <p
          style={{
            marginTop: "20px",
            color: "#6B7280",
            lineHeight: 1.9,
            fontSize: "17px",
          }}
        >
          {text.planning2}
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
          {text.cautionTitle}
        </h2>

        <p
          style={{
            marginTop: "18px",
            color: "#78350F",
            lineHeight: 1.9,
            fontSize: "16px",
          }}
        >
          {text.caution1}
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
          {text.caution2}
        </p>
      </section>

      <FAQ items={text.faq} />

      <RelatedCalculators
        calculators={text.relatedCalculators}
      />
    </>
  );
}