
"use client";

import { useRef, useState } from "react";
import type { ReactNode } from "react";

import NumberInput from "@/components/NumberInput";
import MoneyValue from "@/components/MoneyValue";
import CalculatorContainer from "@/components/CalculatorContainer";

import type { Currency } from "@/lib/currency";

type Language = "en" | "ja";
type NumericInput = number | "";

type Props = {
  lang?: Language;
};

type InvestmentResults = {
  totalInvestment: number;
  estimatedProfit: number;
  roi: number;
  multiple: number;
};

function calculateInvestment(
  initial: number,
  additional: number,
  recovery: number
): InvestmentResults | null {
  const totalInvestment = initial + additional;

  if (totalInvestment <= 0) {
    return null;
  }

  const estimatedProfit = recovery - totalInvestment;

  return {
    totalInvestment,
    estimatedProfit,
    roi: (estimatedProfit / totalInvestment) * 100,
    multiple: recovery / totalInvestment,
  };
}

function formatNumber(
  value: number,
  lang: Language,
  maximumFractionDigits = 1
) {
  return new Intl.NumberFormat(
    lang === "ja" ? "ja-JP" : "en-US",
    {
      maximumFractionDigits,
    }
  ).format(value);
}

const gridStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns:
    "repeat(auto-fit, minmax(min(100%, 220px), 1fr))",
  gap: "16px",
};

function Section({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: ReactNode;
}) {
  return (
    <section
      style={{
        marginTop: "26px",
        padding: "24px",
        background: "#F9FAFB",
        border: "1px solid #E5E7EB",
        borderRadius: "18px",
      }}
    >
      <h3
        style={{
          margin: 0,
          color: "#111827",
          fontSize: "20px",
          fontWeight: 800,
        }}
      >
        {title}
      </h3>

      {description && (
        <p
          style={{
            marginTop: "10px",
            marginBottom: "20px",
            color: "#4B5563",
            fontSize: "14px",
            lineHeight: 1.8,
          }}
        >
          {description}
        </p>
      )}

      {children}
    </section>
  );
}

function ResultBox({
  title,
  children,
  description,
  accent = "#2563EB",
}: {
  title: string;
  children: ReactNode;
  description?: string;
  accent?: string;
}) {
  return (
    <div
      style={{
        minWidth: 0,
        padding: "20px",
        border: "1px solid #E5E7EB",
        borderTop: `4px solid ${accent}`,
        borderRadius: "14px",
        background: "#FFFFFF",
      }}
    >
      <div
        style={{
          fontSize: "13px",
          fontWeight: 800,
          color: "#374151",
        }}
      >
        {title}
      </div>

      <div
        style={{
          marginTop: "12px",
          color: "#111827",
          fontSize: "clamp(21px, 3vw, 29px)",
          fontWeight: 900,
          whiteSpace: "nowrap",
          overflowX: "auto",
          fontVariantNumeric: "tabular-nums",
        }}
      >
        {children}
      </div>

      {description && (
        <p
          style={{
            marginTop: "10px",
            marginBottom: 0,
            color: "#6B7280",
            fontSize: "12px",
            lineHeight: 1.7,
          }}
        >
          {description}
        </p>
      )}
    </div>
  );
}

export default function ROICalculator({
  lang = "en",
}: Props) {
  const currency: Currency =
    lang === "ja" ? "JPY" : "USD";

  const [investment, setInvestment] =
    useState<NumericInput>("");

  const [returnAmount, setReturnAmount] =
    useState<NumericInput>("");

  const [additionalCosts, setAdditionalCosts] =
    useState<NumericInput>("");

  const [targetRoi, setTargetRoi] =
    useState<NumericInput>("");

  const [periodicCashFlow, setPeriodicCashFlow] =
    useState<NumericInput>("");

  const [periodUnit, setPeriodUnit] =
    useState<"month" | "year">("month");

  const [compare, setCompare] = useState(false);

  const [alternativeInvestment, setAlternativeInvestment] =
    useState<NumericInput>("");

  const [alternativeCosts, setAlternativeCosts] =
    useState<NumericInput>("");

  const [alternativeReturn, setAlternativeReturn] =
    useState<NumericInput>("");

  const investmentRef = useRef<HTMLInputElement>(null);
  const returnRef = useRef<HTMLInputElement>(null);
  const additionalRef = useRef<HTMLInputElement>(null);

  const t =
    lang === "ja"
      ? {
          title: "ROI・投資回収シミュレーター",
          description:
            "投資利益率を計算し、目標ROI、必要回収額、回収期間、別の投資案との比較を確認できます。",
          inputTitle: "投資の基本条件",
          inputDescription:
            "回収額は、対象期間に投資から得られる累計の回収金額を入力してください。初期投資額と追加費用は重複しないようにしてください。",
          investment: "初期投資額",
          returnAmount: "累計回収額",
          additionalCosts: "追加費用",
          investmentPlaceholder: "例：1000000",
          returnPlaceholder: "例：1500000",
          additionalPlaceholder: "例：200000",
          reset: "すべてリセット",
          incomplete:
            "初期投資額または追加費用と、累計回収額を入力すると計算結果が表示されます。",
          invalidInvestment:
            "総投資額は0より大きい金額を入力してください。",
          resultsTitle: "投資収益の分析",
          resultsDescription:
            "総投資額と累計回収額を比較した、単純ROIの計算結果です。",
          roi: "ROI（投資利益率）",
          estimatedProfit: "投資による概算利益",
          totalInvestment: "総投資額",
          multiple: "回収倍率",
          breakEven: "損益ゼロに必要な累計回収額",
          remaining: "損益ゼロまでの不足額",
          surplus: "損益ゼロを上回る回収額",
          positive:
            "入力した回収額が総投資額を上回っています。",
          negative:
            "入力した回収額が総投資額を下回っています。",
          neutral:
            "回収額と総投資額が同額です。",
          targetTitle: "目標ROIから必要回収額を逆算",
          targetDescription:
            "目標ROIを達成するために必要な累計回収額と、現在の想定回収額との差を計算します。",
          targetRoi: "目標ROI（%）",
          targetPlaceholder: "例：30",
          requiredRecovery: "目標達成に必要な累計回収額",
          recoveryGap: "想定回収額との差",
          targetHint:
            "目標ROIを入力すると必要回収額を表示します。",
          targetInvalid:
            "目標ROIは−100%以上で入力してください。",
          paybackTitle: "投資回収期間の目安",
          paybackDescription:
            "毎月または毎年、同じ金額の正味キャッシュフローが得られると仮定した単純回収期間です。",
          cashFlow: "1期間あたりの正味キャッシュフロー",
          cashFlowPlaceholder: "例：100000",
          periodUnit: "期間の単位",
          monthly: "月",
          yearly: "年",
          payback: "概算回収期間",
          periods: "期間",
          paybackHint:
            "正味キャッシュフローを入力すると回収期間を表示します。",
          paybackInvalid:
            "回収期間を計算するには、正味キャッシュフローが0より大きい必要があります。",
          paybackNote:
            "この計算は初期投資額と追加費用の合計を、一定の正味キャッシュフローで回収するまでの期間です。キャッシュフローの変動、発生時期、割引率、資金調達費用などは考慮していません。",
          comparisonTitle: "別の投資案と比較する",
          comparisonDescription:
            "投資案Bの金額を入力し、ROIと概算利益を比較できます。",
          showComparison: "別の投資案と比較する ▼",
          hideComparison: "比較を閉じる ▲",
          copyValues: "投資案Aの数値をコピー",
          alternativeTitle: "投資案B",
          alternativeInvestment: "投資案B：初期投資額",
          alternativeCosts: "投資案B：追加費用",
          alternativeReturn: "投資案B：累計回収額",
          alternativeHint:
            "投資案Bの初期投資額または追加費用と、累計回収額を入力してください。",
          alternativeInvalid:
            "投資案Bの総投資額は0より大きい必要があります。",
          comparisonResults: "投資案の比較",
          optionA: "投資案A",
          optionB: "投資案B",
          roiDifference: "ROIの差（B − A）",
          profitDifference: "概算利益の差（B − A）",
          percentagePoints: "ポイント",
          comparisonNote:
            "ROIが高い投資案が、必ずしも概算利益額の大きい投資案とは限りません。投資期間やリスクも比較してください。",
          assumptionsTitle: "計算上の前提",
          assumptions:
            "単純ROI＝（累計回収額−総投資額）÷総投資額×100。総投資額＝初期投資額＋追加費用。累計回収額には、入力した投資費用を差し引く前の回収金額を入力してください。概算利益は会計上の純利益とは異なります。入力していない税金、金利、その他の費用、キャッシュフローの時期、貨幣の時間価値、投資リスクは反映していません。比較する投資案は同じ評価期間を使ってください。",
        }
      : {
          title: "ROI & Investment Recovery Simulator",
          description:
            "Calculate return on investment, plan a target ROI, estimate payback time, and compare investment scenarios.",
          inputTitle: "Investment Assumptions",
          inputDescription:
            "Enter the cumulative amount recovered from the investment over the evaluation period. Do not double-count initial investment and additional costs.",
          investment: "Initial Investment",
          returnAmount: "Cumulative Recovery",
          additionalCosts: "Additional Costs",
          investmentPlaceholder: "e.g. 10000",
          returnPlaceholder: "e.g. 15000",
          additionalPlaceholder: "e.g. 2000",
          reset: "Reset All",
          incomplete:
            "Enter an initial investment or additional costs, together with cumulative recovery, to see the results.",
          invalidInvestment:
            "Total investment must be greater than zero.",
          resultsTitle: "Investment Return Analysis",
          resultsDescription:
            "Simple ROI calculated from total investment and cumulative recovery.",
          roi: "Return on Investment (ROI)",
          estimatedProfit: "Estimated Investment Profit",
          totalInvestment: "Total Investment",
          multiple: "Recovery Multiple",
          breakEven: "Cumulative Recovery to Break Even",
          remaining: "Remaining Recovery to Break Even",
          surplus: "Recovery Above Break Even",
          positive:
            "The entered recovery exceeds total investment.",
          negative:
            "The entered recovery is below total investment.",
          neutral:
            "Cumulative recovery equals total investment.",
          targetTitle: "Plan Recovery From Target ROI",
          targetDescription:
            "Calculate the cumulative recovery needed for a target ROI and compare it with your current projection.",
          targetRoi: "Target ROI (%)",
          targetPlaceholder: "e.g. 30",
          requiredRecovery: "Required Cumulative Recovery",
          recoveryGap: "Difference From Projected Recovery",
          targetHint:
            "Enter a target ROI to calculate required recovery.",
          targetInvalid:
            "Target ROI must be at least −100%.",
          paybackTitle: "Simple Payback Period",
          paybackDescription:
            "Estimate payback assuming constant positive net cash flow each month or year.",
          cashFlow: "Net Cash Flow per Period",
          cashFlowPlaceholder: "e.g. 1000",
          periodUnit: "Period Unit",
          monthly: "Month",
          yearly: "Year",
          payback: "Estimated Payback Period",
          periods: "periods",
          paybackHint:
            "Enter net cash flow to calculate payback time.",
          paybackInvalid:
            "Net cash flow must be greater than zero to calculate payback.",
          paybackNote:
            "This divides total investment by constant net cash flow per period. It does not account for variable cash flows, timing, discount rates, financing costs, or risk.",
          comparisonTitle: "Compare Another Investment",
          comparisonDescription:
            "Enter the values for investment B to compare ROI and estimated profit.",
          showComparison: "Compare Another Investment ▼",
          hideComparison: "Close Comparison ▲",
          copyValues: "Copy Investment A Values",
          alternativeTitle: "Investment B",
          alternativeInvestment: "Investment B: Initial Investment",
          alternativeCosts: "Investment B: Additional Costs",
          alternativeReturn: "Investment B: Cumulative Recovery",
          alternativeHint:
            "Enter an initial investment or additional costs and cumulative recovery for investment B.",
          alternativeInvalid:
            "Investment B's total investment must be greater than zero.",
          comparisonResults: "Investment Comparison",
          optionA: "Investment A",
          optionB: "Investment B",
          roiDifference: "ROI Difference (B − A)",
          profitDifference: "Profit Difference (B − A)",
          percentagePoints: "percentage points",
          comparisonNote:
            "A higher ROI does not necessarily mean a larger absolute profit. Also compare investment duration and risk.",
          assumptionsTitle: "Calculation Assumptions",
          assumptions:
            "Simple ROI = (cumulative recovery − total investment) ÷ total investment × 100. Total investment = initial investment + additional costs. Enter recovery before deducting the investment costs already entered. Estimated profit is not formal accounting net income. Unentered taxes, interest, other expenses, cash-flow timing, time value of money, and investment risk are excluded. Use the same evaluation period when comparing investments.",
        };

  const investmentValue = Number(investment) || 0;
  const returnValue = Number(returnAmount) || 0;
  const additionalValue = Number(additionalCosts) || 0;

  const hasInvestmentInput =
    investment !== "" || additionalCosts !== "";

  const hasRequiredInputs =
    hasInvestmentInput && returnAmount !== "";

  const totalInvestment =
    investmentValue + additionalValue;

  const results = hasRequiredInputs
    ? calculateInvestment(
        investmentValue,
        additionalValue,
        returnValue
      )
    : null;

  const targetValue = Number(targetRoi) || 0;

  const targetValid =
    targetValue >= -100 && Number.isFinite(targetValue);

  const hasTarget = targetRoi !== "";

  const requiredRecovery =
    results && targetValid
      ? results.totalInvestment * (1 + targetValue / 100)
      : 0;

  const recoveryGap =
    requiredRecovery - returnValue;

  const cashFlowValue = Number(periodicCashFlow) || 0;

  const hasCashFlow = periodicCashFlow !== "";

  const paybackPeriods =
    results && cashFlowValue > 0
      ? results.totalInvestment / cashFlowValue
      : null;

  const alternativeInvestmentValue =
    Number(alternativeInvestment) || 0;

  const alternativeCostsValue =
    Number(alternativeCosts) || 0;

  const alternativeReturnValue =
    Number(alternativeReturn) || 0;

  const alternativeHasInputs =
    (alternativeInvestment !== "" ||
      alternativeCosts !== "") &&
    alternativeReturn !== "";

  const alternativeResults = alternativeHasInputs
    ? calculateInvestment(
        alternativeInvestmentValue,
        alternativeCostsValue,
        alternativeReturnValue
      )
    : null;

  const money = (value: number) => (
    <MoneyValue value={value} currency={currency} />
  );

  const signedMoney = (value: number) => (
    <>
      {value > 0 ? "+" : ""}
      {money(value)}
    </>
  );

  const reset = () => {
    setInvestment("");
    setReturnAmount("");
    setAdditionalCosts("");
    setTargetRoi("");
    setPeriodicCashFlow("");
    setPeriodUnit("month");
    setCompare(false);
    setAlternativeInvestment("");
    setAlternativeCosts("");
    setAlternativeReturn("");
    investmentRef.current?.focus();
  };

  const copyValues = () => {
    setAlternativeInvestment(investment);
    setAlternativeCosts(additionalCosts);
    setAlternativeReturn(returnAmount);
  };

  const toggleComparison = () => {
    if (!compare) {
      if (
        alternativeInvestment === "" &&
        alternativeCosts === "" &&
        alternativeReturn === ""
      ) {
        copyValues();
      }
    }

    setCompare(!compare);
  };

  const recoveryDifference =
    results
      ? returnValue - results.totalInvestment
      : 0;

  return (
    <CalculatorContainer>
      <div style={{ marginBottom: "26px" }}>
        <h2
          style={{
            margin: 0,
            fontSize: "30px",
            fontWeight: 800,
            color: "#111827",
          }}
        >
          {t.title}
        </h2>

        <p
          style={{
            marginTop: "12px",
            fontSize: "15px",
            lineHeight: 1.8,
            color: "#4B5563",
          }}
        >
          {t.description}
        </p>
      </div>

      <Section
        title={t.inputTitle}
        description={t.inputDescription}
      >
        <div style={gridStyle}>
          <NumberInput
            label={t.investment}
            placeholder={t.investmentPlaceholder}
            value={investment}
            onChange={(value) =>
              setInvestment(
                value === "" ? "" : Math.max(0, value)
              )
            }
            inputRef={investmentRef}
            nextRef={returnRef}
          />

          <NumberInput
            label={t.returnAmount}
            placeholder={t.returnPlaceholder}
            value={returnAmount}
            onChange={(value) =>
              setReturnAmount(
                value === "" ? "" : Math.max(0, value)
              )
            }
            inputRef={returnRef}
            nextRef={additionalRef}
          />

          <NumberInput
            label={t.additionalCosts}
            placeholder={t.additionalPlaceholder}
            value={additionalCosts}
            onChange={(value) =>
              setAdditionalCosts(
                value === "" ? "" : Math.max(0, value)
              )
            }
            inputRef={additionalRef}
          />
        </div>

        <button
          type="button"
          onClick={reset}
          style={{
            marginTop: "22px",
            padding: "12px 20px",
            background: "#FFFFFF",
            color: "#334155",
            border: "1px solid #CBD5E1",
            borderRadius: "10px",
            fontWeight: 700,
            cursor: "pointer",
          }}
        >
          {t.reset}
        </button>
      </Section>

      {!hasRequiredInputs && (
        <p
          style={{
            marginTop: "22px",
            padding: "18px",
            background: "#EFF6FF",
            color: "#1D4ED8",
            borderRadius: "12px",
            lineHeight: 1.8,
          }}
        >
          {t.incomplete}
        </p>
      )}

      {hasRequiredInputs && !results && (
        <p
          role="alert"
          style={{
            marginTop: "22px",
            padding: "18px",
            background: "#FEF2F2",
            color: "#991B1B",
            border: "1px solid #FECACA",
            borderRadius: "12px",
            lineHeight: 1.8,
          }}
        >
          {t.invalidInvestment}
        </p>
      )}

      {results && (
        <>
          <Section
            title={t.resultsTitle}
            description={t.resultsDescription}
          >
            <div style={gridStyle}>
              <ResultBox
                title={t.roi}
                accent={
                  results.roi >= 0
                    ? "#059669"
                    : "#DC2626"
                }
              >
                {formatNumber(results.roi, lang)}%
              </ResultBox>

              <ResultBox
                title={t.estimatedProfit}
                accent={
                  results.estimatedProfit >= 0
                    ? "#059669"
                    : "#DC2626"
                }
              >
                {money(results.estimatedProfit)}
              </ResultBox>

              <ResultBox title={t.totalInvestment}>
                {money(results.totalInvestment)}
              </ResultBox>

              <ResultBox title={t.multiple}>
                {formatNumber(results.multiple, lang, 2)}×
              </ResultBox>

              <ResultBox
                title={t.breakEven}
                accent="#059669"
              >
                {money(results.totalInvestment)}
              </ResultBox>

              <ResultBox
                title={
                  recoveryDifference >= 0
                    ? t.surplus
                    : t.remaining
                }
                accent={
                  recoveryDifference >= 0
                    ? "#059669"
                    : "#DC2626"
                }
              >
                {money(Math.abs(recoveryDifference))}
              </ResultBox>
            </div>

            <p
              style={{
                marginTop: "18px",
                fontWeight: 700,
                color:
                  recoveryDifference < 0
                    ? "#B91C1C"
                    : recoveryDifference > 0
                    ? "#047857"
                    : "#374151",
              }}
            >
              {recoveryDifference < 0
                ? t.negative
                : recoveryDifference > 0
                ? t.positive
                : t.neutral}
            </p>
          </Section>

          <Section
            title={t.targetTitle}
            description={t.targetDescription}
          >
            <NumberInput
              label={t.targetRoi}
              placeholder={t.targetPlaceholder}
              value={targetRoi}
              onChange={setTargetRoi}
            />

            {!hasTarget ? (
              <p
                style={{
                  marginTop: "18px",
                  color: "#6B7280",
                }}
              >
                {t.targetHint}
              </p>
            ) : !targetValid ? (
              <p
                role="alert"
                style={{
                  marginTop: "18px",
                  color: "#B91C1C",
                  fontWeight: 700,
                }}
              >
                {t.targetInvalid}
              </p>
            ) : (
              <div
                style={{
                  ...gridStyle,
                  marginTop: "20px",
                }}
              >
                <ResultBox
                  title={t.requiredRecovery}
                  accent="#059669"
                >
                  {money(requiredRecovery)}
                </ResultBox>

                <ResultBox title={t.recoveryGap}>
                  {signedMoney(recoveryGap)}
                </ResultBox>
              </div>
            )}
          </Section>

          <Section
            title={t.paybackTitle}
            description={t.paybackDescription}
          >
            <div style={gridStyle}>
              <NumberInput
                label={t.cashFlow}
                placeholder={t.cashFlowPlaceholder}
                value={periodicCashFlow}
                onChange={(value) =>
                  setPeriodicCashFlow(
                    value === ""
                      ? ""
                      : Math.max(0, value)
                  )
                }
              />

              <div>
                <label
                  htmlFor="roi-period-unit"
                  style={{
                    display: "block",
                    marginBottom: "10px",
                    fontSize: "14px",
                    fontWeight: 800,
                    color: "#374151",
                  }}
                >
                  {t.periodUnit}
                </label>

                <select
                  id="roi-period-unit"
                  value={periodUnit}
                  onChange={(event) =>
                    setPeriodUnit(
                      event.target.value as
                        | "month"
                        | "year"
                    )
                  }
                  style={{
                    width: "100%",
                    minHeight: "46px",
                    padding: "10px",
                    border: "1px solid #CBD5E1",
                    borderRadius: "10px",
                    background: "#FFFFFF",
                    color: "#111827",
                    fontSize: "15px",
                  }}
                >
                  <option value="month">{t.monthly}</option>
                  <option value="year">{t.yearly}</option>
                </select>
              </div>
            </div>

            {!hasCashFlow ? (
              <p
                style={{
                  marginTop: "18px",
                  color: "#6B7280",
                }}
              >
                {t.paybackHint}
              </p>
            ) : paybackPeriods === null ? (
              <p
                role="alert"
                style={{
                  marginTop: "18px",
                  color: "#B91C1C",
                  fontWeight: 700,
                }}
              >
                {t.paybackInvalid}
              </p>
            ) : (
              <div
                style={{
                  ...gridStyle,
                  marginTop: "20px",
                }}
              >
                <ResultBox title={t.payback} accent="#059669">
                  {formatNumber(paybackPeriods, lang, 2)}{" "}
                  {periodUnit === "month"
                    ? t.monthly
                    : t.yearly}
                </ResultBox>
              </div>
            )}

            <p
              style={{
                marginTop: "18px",
                color: "#6B7280",
                fontSize: "13px",
                lineHeight: 1.8,
              }}
            >
              {t.paybackNote}
            </p>
          </Section>

          <Section
            title={t.comparisonTitle}
            description={t.comparisonDescription}
          >
            <button
              type="button"
              onClick={toggleComparison}
              aria-expanded={compare}
              style={{
                width: "100%",
                padding: "16px 20px",
                background: "#2563EB",
                color: "#FFFFFF",
                border: "none",
                borderRadius: "10px",
                fontSize: "16px",
                fontWeight: 800,
                cursor: "pointer",
              }}
            >
              {compare
                ? t.hideComparison
                : t.showComparison}
            </button>

            {compare && (
              <div style={{ marginTop: "22px" }}>
                <h4
                  style={{
                    fontSize: "18px",
                    color: "#111827",
                    marginBottom: "16px",
                  }}
                >
                  {t.alternativeTitle}
                </h4>

                <div style={gridStyle}>
                 <NumberInput
  label={t.alternativeInvestment}
  placeholder={t.investmentPlaceholder}
  value={alternativeInvestment}
                    onChange={(value) =>
                      setAlternativeInvestment(
                        value === ""
                          ? ""
                          : Math.max(0, value)
                      )
                    }
                  />

                  <NumberInput
                    label={t.alternativeCosts}
                    placeholder={t.additionalPlaceholder}
                    value={alternativeCosts}
                    onChange={(value) =>
                      setAlternativeCosts(
                        value === ""
                          ? ""
                          : Math.max(0, value)
                      )
                    }
                  />

                  <NumberInput
                    label={t.alternativeReturn}
                    placeholder={t.returnPlaceholder}
                    value={alternativeReturn}
                    onChange={(value) =>
                      setAlternativeReturn(
                        value === ""
                          ? ""
                          : Math.max(0, value)
                      )
                    }
                  />
                </div>

                <button
                  type="button"
                  onClick={copyValues}
                  style={{
                    marginTop: "18px",
                    padding: "11px 16px",
                    background: "#FFFFFF",
                    border: "1px solid #CBD5E1",
                    borderRadius: "10px",
                    color: "#334155",
                    fontWeight: 700,
                    cursor: "pointer",
                  }}
                >
                  {t.copyValues}
                </button>

                {!alternativeHasInputs ? (
                  <p
                    style={{
                      marginTop: "18px",
                      color: "#6B7280",
                    }}
                  >
                    {t.alternativeHint}
                  </p>
                ) : !alternativeResults ? (
                  <p
                    role="alert"
                    style={{
                      marginTop: "18px",
                      color: "#B91C1C",
                    }}
                  >
                    {t.alternativeInvalid}
                  </p>
                ) : (
                  <>
                    <h4
                      style={{
                        marginTop: "26px",
                        marginBottom: "16px",
                        color: "#111827",
                        fontSize: "18px",
                      }}
                    >
                      {t.comparisonResults}
                    </h4>

                    <div style={gridStyle}>
                      <ResultBox title={`${t.optionA} ROI`}>
                        {formatNumber(results.roi, lang)}%
                      </ResultBox>

                      <ResultBox title={`${t.optionB} ROI`}>
                        {formatNumber(
                          alternativeResults.roi,
                          lang
                        )}
                        %
                      </ResultBox>

                      <ResultBox title={t.roiDifference}>
                        {alternativeResults.roi -
                          results.roi >
                        0
                          ? "+"
                          : ""}
                        {formatNumber(
                          alternativeResults.roi -
                            results.roi,
                          lang
                        )}{" "}
                        {t.percentagePoints}
                      </ResultBox>

                      <ResultBox
                        title={t.profitDifference}
                        accent={
                          alternativeResults.estimatedProfit -
                            results.estimatedProfit >=
                          0
                            ? "#059669"
                            : "#DC2626"
                        }
                      >
                        {signedMoney(
                          alternativeResults.estimatedProfit -
                            results.estimatedProfit
                        )}
                      </ResultBox>
                    </div>

                    <p
                      style={{
                        marginTop: "18px",
                        color: "#6B7280",
                        fontSize: "13px",
                        lineHeight: 1.8,
                      }}
                    >
                      {t.comparisonNote}
                    </p>
                  </>
                )}
              </div>
            )}
          </Section>

          <Section title={t.assumptionsTitle}>
            <p
              style={{
                margin: 0,
                color: "#4B5563",
                fontSize: "13px",
                lineHeight: 1.9,
              }}
            >
              {t.assumptions}
            </p>
          </Section>
        </>
      )}
    </CalculatorContainer>
  );
}
