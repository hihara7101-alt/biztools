
"use client";

import { useMemo, useState } from "react";

import NumberInput from "@/components/NumberInput";
import ResultCard from "@/components/ResultCard";
import InsightCard from "@/components/InsightCard";
import MoneyValue from "@/components/MoneyValue";
import CalculatorContainer from "@/components/CalculatorContainer";
import SectionTitle from "@/components/SectionTitle";

import type { Currency } from "@/lib/currency";

type Props = {
  lang?: "en" | "ja";
};

type NumericInput = number | "";

type Period = "month" | "week" | "day";

const cardGridStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns:
    "repeat(auto-fit, minmax(min(100%, 210px), 1fr))",
  gap: "16px",
  marginTop: "20px",
};

const inputGridStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns:
    "repeat(auto-fit, minmax(min(100%, 200px), 1fr))",
  gap: "20px",
};

const panelStyle: React.CSSProperties = {
  marginTop: "28px",
  padding: "24px",
  background: "#F9FAFB",
  border: "1px solid #E5E7EB",
  borderRadius: "16px",
};

const descriptionStyle: React.CSSProperties = {
  color: "#6B7280",
  lineHeight: 1.8,
  fontSize: "14px",
  marginTop: "8px",
  marginBottom: "20px",
};

const headingStyle: React.CSSProperties = {
  fontSize: "19px",
  fontWeight: 700,
  color: "#111827",
  margin: 0,
};

function safeNumber(value: NumericInput): number {
  if (value === "") return 0;

  return Number.isFinite(value) ? value : 0;
}

function nonNegative(value: NumericInput): NumericInput {
  if (value === "") return "";

  return Number.isFinite(value)
    ? Math.max(0, value)
    : "";
}

function ceilUnits(value: number): number {
  if (!Number.isFinite(value) || value < 0) {
    return 0;
  }

  return Math.ceil(value);
}

function formatUnits(value: number): string {
  return Number.isFinite(value)
    ? value.toLocaleString()
    : "—";
}

export default function SalesTargetCalculator({
  lang = "en",
}: Props) {
  const isJa = lang === "ja";

  const currency: Currency = isJa ? "JPY" : "USD";

  const [targetProfit, setTargetProfit] =
    useState<NumericInput>("");

  const [sellingPrice, setSellingPrice] =
    useState<NumericInput>("");

  const [variableCost, setVariableCost] =
    useState<NumericInput>("");

  const [fixedCosts, setFixedCosts] =
    useState<NumericInput>("");

  const [period, setPeriod] = useState<Period>("month");

  const [periodCount, setPeriodCount] =
    useState<NumericInput>("");

  const [forecastUnits, setForecastUnits] =
    useState<NumericInput>("");

  const [alternativePrice, setAlternativePrice] =
    useState<NumericInput>("");

  const t = isJa
    ? {
        sectionTitle: "売上目標・利益計画シミュレーター",
        sectionSubtitle:
          "利益目標から必要販売数を逆算し、販売期間、売上予測、価格変更の影響まで確認できます。",

        basicHeading: "基本条件",
        basicDescription:
          "すべて同じ対象期間の数値を入力してください。販売価格と変動費は1単位あたり、固定費と目標利益は期間全体の金額です。",

        target: "目標利益",
        targetPlaceholder: "例：300000",

        price: "販売価格（1単位）",
        pricePlaceholder: "例：5000",

        variable: "変動費（1単位）",
        variablePlaceholder: "例：2000",

        fixed: "固定費（期間全体）",
        fixedPlaceholder: "例：600000",

        reset: "すべてリセット",

        readyTitle: "売上目標を計算しましょう",
        readyMessage:
          "販売価格と変動費を入力すると、必要販売数や売上目標を確認できます。",

        missingTitle: "基本条件を入力してください",
        missingMessage:
          "販売価格と変動費を入力してください。固定費と目標利益は未入力の場合、0として計算します。",

        invalidTitle: "販売価格と変動費を確認してください",
        invalidMessage:
          "販売価格が変動費以下の場合、販売数量を増やしても正の限界利益が生まれません。価格または変動費を見直してください。",

        successTitle: "売上目標を計算しました",
        successMessage:
          "必要販売数は整数に切り上げています。需要、販売能力、販売期間なども考慮して、達成可能性を確認してください。",

        resultsHeading: "目標達成に必要な売上",
        requiredUnits: "必要販売数",
        requiredRevenue: "必要売上高",
        contribution: "限界利益（1単位）",
        contributionRatio: "限界利益率",

        breakEvenHeading: "損益分岐点",
        breakEvenDescription:
          "固定費を回収し、利益が0以上になる最低販売数量を確認します。",

        breakEvenUnits: "損益分岐点販売数",
        breakEvenRevenue: "損益分岐点売上高",
        additionalUnits: "損益分岐点からの追加販売数",
        profitAtTarget: "必要販売数での見込利益",

        periodHeading: "販売期間別の目標",
        periodDescription:
          "目標達成までの期間数を入力すると、1期間あたりの必要販売数と売上高を計算します。",

        periodCount: "販売期間数",
        periodPlaceholder: "例：6",
        month: "月",
        week: "週",
        day: "日",
        unitsPerPeriod: "1期間あたりの必要販売数",
        revenuePerPeriod: "1期間あたりの必要売上高",
        periodNote:
          "期間ごとの販売数を整数に切り上げているため、各期間に同じ数量を販売すると、合計販売数が必要最低数を上回る場合があります。",

        forecastHeading: "販売予測と目標達成率",
        forecastDescription:
          "対象期間全体の予測販売数を入力して、利益目標との差を確認します。",

        forecastUnits: "予測販売数",
        forecastPlaceholder: "例：250",
        forecastRevenue: "予測売上高",
        forecastProfit: "予測利益",
        achievementRate: "販売数量ベースの目標達成率",
        unitsShort: "追加で必要な販売数",
        unitsAhead: "目標超過販売数",
        revenueGap: "目標売上との差額",
        profitGap: "目標利益との差額",
        achieved: "目標販売数を達成しています",
        notAchieved: "目標販売数まで追加販売が必要です",

        priceHeading: "価格変更シミュレーション",
        priceDescription:
          "販売価格だけを変更し、変動費、固定費、目標利益は同じ条件で比較します。",

        alternativePrice: "変更後の販売価格",
        alternativePlaceholder: "例：5500",
        alternativeUnits: "変更後の必要販売数",
        alternativeRevenue: "変更後の必要売上高",
        unitDifference: "必要販売数の変化",
        priceDifference: "販売単価の変化",
        alternativeInvalid:
          "変更後の販売価格が変動費以下のため、目標販売数を計算できません。",

        assumptionsHeading: "計算上の前提",
        assumptions:
          "販売価格と変動費は一定、すべての販売数量は販売可能、固定費は対象期間中一定と仮定しています。税金、返品、値引き、販売手数料、在庫制約などは入力数値に含まれていない限り考慮されません。期間別目標は均等配分の参考値です。",

        unitsSuffix: "単位",
        percentSuffix: "%",
        positivePrefix: "+",
      }
    : {
        sectionTitle: "Sales Target & Profit Planning",
        sectionSubtitle:
          "Work backward from a profit goal and evaluate sales periods, forecasts, and pricing scenarios.",

        basicHeading: "Business Assumptions",
        basicDescription:
          "Use the same overall planning horizon for all figures. Price and variable cost are per unit; fixed costs and target profit cover the entire horizon.",

        target: "Target Profit",
        targetPlaceholder: "e.g. 3000",

        price: "Selling Price per Unit",
        pricePlaceholder: "e.g. 50",

        variable: "Variable Cost per Unit",
        variablePlaceholder: "e.g. 20",

        fixed: "Fixed Costs for Planning Period",
        fixedPlaceholder: "e.g. 6000",

        reset: "Reset All",

        readyTitle: "Plan Your Sales Target",
        readyMessage:
          "Enter your selling price and variable cost to calculate the sales required to reach your profit goal.",

        missingTitle: "Enter the Basic Assumptions",
        missingMessage:
          "Enter selling price and variable cost. Blank fixed costs and target profit are treated as zero.",

        invalidTitle: "Check Selling Price and Variable Cost",
        invalidMessage:
          "If the selling price does not exceed variable cost, each unit generates no positive contribution margin. Review your pricing or costs.",

        successTitle: "Sales Target Calculated",
        successMessage:
          "Required units are rounded up to whole units. Compare the result with market demand, available capacity, and your planning horizon.",

        resultsHeading: "Sales Required to Reach Your Goal",
        requiredUnits: "Required Units",
        requiredRevenue: "Required Revenue",
        contribution: "Contribution per Unit",
        contributionRatio: "Contribution Margin Ratio",

        breakEvenHeading: "Break-Even Analysis",
        breakEvenDescription:
          "Calculate the minimum whole-unit sales needed to cover fixed costs.",

        breakEvenUnits: "Break-Even Units",
        breakEvenRevenue: "Break-Even Revenue",
        additionalUnits: "Units Above Break-Even",
        profitAtTarget: "Profit at Required Units",

        periodHeading: "Sales Targets by Period",
        periodDescription:
          "Choose a time unit and enter the number of periods to calculate an even sales target per period.",

        periodCount: "Number of Periods",
        periodPlaceholder: "e.g. 6",
        month: "Month",
        week: "Week",
        day: "Day",
        unitsPerPeriod: "Required Units per Period",
        revenuePerPeriod: "Required Revenue per Period",
        periodNote:
          "Per-period units are rounded up. Selling that amount in every period may produce more units than the overall minimum target.",

        forecastHeading: "Sales Forecast vs. Target",
        forecastDescription:
          "Enter expected unit sales for the full planning horizon to compare your forecast with the target.",

        forecastUnits: "Forecast Units",
        forecastPlaceholder: "e.g. 250",
        forecastRevenue: "Forecast Revenue",
        forecastProfit: "Forecast Profit",
        achievementRate: "Unit Target Achievement",
        unitsShort: "Additional Units Needed",
        unitsAhead: "Units Above Target",
        revenueGap: "Revenue Difference vs. Target",
        profitGap: "Profit Difference vs. Goal",
        achieved: "Your forecast meets the unit target",
        notAchieved: "Additional sales are needed to reach the unit target",

        priceHeading: "Alternative Pricing Scenario",
        priceDescription:
          "Change only the selling price while keeping variable cost, fixed costs, and target profit constant.",

        alternativePrice: "Alternative Selling Price",
        alternativePlaceholder: "e.g. 55",
        alternativeUnits: "Required Units at New Price",
        alternativeRevenue: "Required Revenue at New Price",
        unitDifference: "Change in Required Units",
        priceDifference: "Change in Selling Price",
        alternativeInvalid:
          "The alternative price does not exceed variable cost, so the required unit target cannot be calculated.",

        assumptionsHeading: "Calculation Assumptions",
        assumptions:
          "The model assumes constant unit prices and variable costs, unchanged fixed costs, and sufficient demand and capacity. Taxes, returns, discounts, transaction fees, and inventory constraints are excluded unless already reflected in the inputs. Period targets are evenly distributed planning estimates.",

        unitsSuffix: "units",
        percentSuffix: "%",
        positivePrefix: "+",
      };

  const price = safeNumber(sellingPrice);
  const variable = safeNumber(variableCost);
  const fixed = safeNumber(fixedCosts);
  const goal = safeNumber(targetProfit);

  const hasInput =
    targetProfit !== "" ||
    sellingPrice !== "" ||
    variableCost !== "" ||
    fixedCosts !== "";

  const hasBasicInputs =
    sellingPrice !== "" && variableCost !== "";

  const contribution = price - variable;

  const canCalculate =
    hasBasicInputs &&
    price > 0 &&
    contribution > 0;

  const calculation = useMemo(() => {
    if (!canCalculate) return null;

    const requiredUnits = ceilUnits(
      (fixed + goal) / contribution
    );

    const requiredRevenue = requiredUnits * price;

    const contributionRatio =
      (contribution / price) * 100;

    const breakEvenUnits = ceilUnits(
      fixed / contribution
    );

    const breakEvenRevenue =
      breakEvenUnits * price;

    const profitAtTarget =
      requiredUnits * contribution - fixed;

    return {
      requiredUnits,
      requiredRevenue,
      contributionRatio,
      breakEvenUnits,
      breakEvenRevenue,
      profitAtTarget,
      additionalUnits:
        requiredUnits - breakEvenUnits,
    };
  }, [
    canCalculate,
    fixed,
    goal,
    contribution,
    price,
  ]);

  const periods = safeNumber(periodCount);

  const periodResults =
    calculation &&
    periodCount !== "" &&
    Number.isInteger(periods) &&
    periods > 0
      ? {
          unitsPerPeriod: ceilUnits(
            calculation.requiredUnits / periods
          ),
          revenuePerPeriod:
            ceilUnits(
              calculation.requiredUnits / periods
            ) * price,
        }
      : null;

  const forecast = safeNumber(forecastUnits);

  const forecastResults =
    calculation &&
    forecastUnits !== "" &&
    Number.isInteger(forecast) &&
    forecast >= 0
      ? {
          revenue: forecast * price,
          profit: forecast * contribution - fixed,
          achievement:
            calculation.requiredUnits > 0
              ? (forecast /
                  calculation.requiredUnits) *
                100
              : forecast === 0
                ? 100
                : 100,
          unitsGap:
            forecast - calculation.requiredUnits,
          revenueGap:
            (forecast -
              calculation.requiredUnits) *
            price,
          profitGap:
            forecast * contribution - fixed - goal,
        }
      : null;

  const alternate = safeNumber(alternativePrice);

  const alternateContribution =
    alternate - variable;

  const alternateResults =
    calculation &&
    alternativePrice !== "" &&
    alternate > 0 &&
    alternateContribution > 0
      ? {
          units: ceilUnits(
            (fixed + goal) / alternateContribution
          ),
          priceDifference: alternate - price,
        }
      : null;

  const insight = !hasBasicInputs
    ? {
        title: t.missingTitle,
        icon: "🔵",
        color: "#2563EB",
        message: t.missingMessage,
      }
    : !canCalculate
      ? {
          title: t.invalidTitle,
          icon: "🔴",
          color: "#DC2626",
          message: t.invalidMessage,
        }
      : {
          title: t.successTitle,
          icon: "🔵",
          color: "#2563EB",
          message: t.successMessage,
        };

  function reset() {
    setTargetProfit("");
    setSellingPrice("");
    setVariableCost("");
    setFixedCosts("");
    setPeriod("month");
    setPeriodCount("");
    setForecastUnits("");
    setAlternativePrice("");
  }

  function money(value: number) {
    return (
      <MoneyValue
        value={value}
        currency={currency}
      />
    );
  }

  function units(value: number) {
    return `${formatUnits(value)} ${t.unitsSuffix}`;
  }

  function signedUnits(value: number) {
    return `${
      value > 0 ? "+" : ""
    }${formatUnits(value)} ${t.unitsSuffix}`;
  }

  function signedMoney(value: number) {
    return (
      <span>
        {value > 0 ? "+" : ""}
        {money(value)}
      </span>
    );
  }

  return (
    <>
      <CalculatorContainer>
        <SectionTitle
          title={t.sectionTitle}
          subtitle={t.sectionSubtitle}
        />

        <div style={{ marginTop: "24px" }}>
          <h3 style={headingStyle}>
            {t.basicHeading}
          </h3>

          <p style={descriptionStyle}>
            {t.basicDescription}
          </p>

          <div style={inputGridStyle}>
            <NumberInput
              label={t.target}
              placeholder={t.targetPlaceholder}
              value={targetProfit}
              onChange={(value) =>
                setTargetProfit(nonNegative(value))
              }
            />

            <NumberInput
              label={t.price}
              placeholder={t.pricePlaceholder}
              value={sellingPrice}
              onChange={(value) =>
                setSellingPrice(nonNegative(value))
              }
            />

            <NumberInput
              label={t.variable}
              placeholder={t.variablePlaceholder}
              value={variableCost}
              onChange={(value) =>
                setVariableCost(nonNegative(value))
              }
            />

            <NumberInput
              label={t.fixed}
              placeholder={t.fixedPlaceholder}
              value={fixedCosts}
              onChange={(value) =>
                setFixedCosts(nonNegative(value))
              }
            />
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              marginTop: "24px",
            }}
          >
            <button
              type="button"
              onClick={reset}
              style={{
                border: "1px solid #CBD5E1",
                borderRadius: "10px",
                padding: "11px 20px",
                background: "#FFFFFF",
                color: "#1E40AF",
                fontWeight: 700,
                cursor: "pointer",
              }}
            >
              {t.reset}
            </button>
          </div>
        </div>
      </CalculatorContainer>

      {!hasInput && (
        <div
          style={{
            ...panelStyle,
            textAlign: "center",
            padding: "38px 24px",
          }}
        >
          <div style={{ fontSize: "36px" }}>
            🎯
          </div>

          <h3
            style={{
              ...headingStyle,
              marginTop: "12px",
            }}
          >
            {t.readyTitle}
          </h3>

          <p style={descriptionStyle}>
            {t.readyMessage}
          </p>
        </div>
      )}

      {hasInput && (
        <div style={{ marginTop: "24px" }}>
          <InsightCard {...insight} />
        </div>
      )}

      {calculation && (
        <>
          <section style={panelStyle}>
            <h3 style={headingStyle}>
              {t.resultsHeading}
            </h3>

            <div style={cardGridStyle}>
              <ResultCard compact
                title={t.requiredUnits}
                value={units(
                  calculation.requiredUnits
                )}
              />

              <ResultCard compact
                title={t.requiredRevenue}
                value={money(
                  calculation.requiredRevenue
                )}
              />

              <ResultCard compact
                title={t.contribution}
                value={money(contribution)}
              />

              <ResultCard compact
                title={t.contributionRatio}
                value={`${calculation.contributionRatio.toFixed(
                  1
                )}%`}
              />
            </div>
          </section>

          <section style={panelStyle}>
            <h3 style={headingStyle}>
              {t.breakEvenHeading}
            </h3>

            <p style={descriptionStyle}>
              {t.breakEvenDescription}
            </p>

            <div style={cardGridStyle}>
              <ResultCard compact
                title={t.breakEvenUnits}
                value={units(
                  calculation.breakEvenUnits
                )}
              />

              <ResultCard compact
                title={t.breakEvenRevenue}
                value={money(
                  calculation.breakEvenRevenue
                )}
              />

              <ResultCard compact
                title={t.additionalUnits}
                value={units(
                  calculation.additionalUnits
                )}
              />

              <ResultCard compact
                title={t.profitAtTarget}
                value={money(
                  calculation.profitAtTarget
                )}
              />
            </div>
          </section>

          <section style={panelStyle}>
            <h3 style={headingStyle}>
              {t.periodHeading}
            </h3>

            <p style={descriptionStyle}>
              {t.periodDescription}
            </p>

            <div style={inputGridStyle}>
              <div>
                <label
                  htmlFor="sales-period-type"
                  style={{
                    display: "block",
                    marginBottom: "8px",
                    fontSize: "14px",
                    fontWeight: 700,
                  }}
                >
                  {isJa
                    ? "期間の単位"
                    : "Period Unit"}
                </label>

                <select
                  id="sales-period-type"
                  value={period}
                  onChange={(event) =>
                    setPeriod(
                      event.target.value as Period
                    )
                  }
                  style={{
                    width: "100%",
                    minHeight: "46px",
                    border: "1px solid #D1D5DB",
                    borderRadius: "10px",
                    padding: "10px",
                    background: "#FFFFFF",
                    color: "#111827",
                  }}
                >
                  <option value="month">
                    {t.month}
                  </option>
                  <option value="week">
                    {t.week}
                  </option>
                  <option value="day">
                    {t.day}
                  </option>
                </select>
              </div>

              <NumberInput
                label={t.periodCount}
                placeholder={t.periodPlaceholder}
                value={periodCount}
                onChange={(value) =>
                  setPeriodCount(
                    nonNegative(value)
                  )
                }
              />
            </div>

            {periodResults && (
              <>
                <div style={cardGridStyle}>
                  <ResultCard compact
                    title={`${t.unitsPerPeriod}（${period === "month" ? t.month : period === "week" ? t.week : t.day}）`}
                    value={units(
                      periodResults.unitsPerPeriod
                    )}
                  />

                  <ResultCard compact
                    title={`${t.revenuePerPeriod}（${period === "month" ? t.month : period === "week" ? t.week : t.day}）`}
                    value={money(
                      periodResults.revenuePerPeriod
                    )}
                  />
                </div>

                <p style={descriptionStyle}>
                  {t.periodNote}
                </p>
              </>
            )}
          </section>

          <section style={panelStyle}>
            <h3 style={headingStyle}>
              {t.forecastHeading}
            </h3>

            <p style={descriptionStyle}>
              {t.forecastDescription}
            </p>

            <div style={inputGridStyle}>
              <NumberInput
                label={t.forecastUnits}
                placeholder={t.forecastPlaceholder}
                value={forecastUnits}
                onChange={(value) =>
                  setForecastUnits(
                    nonNegative(value)
                  )
                }
              />
            </div>

            {forecastResults && (
              <>
                <div style={cardGridStyle}>
                  <ResultCard compact
                    title={t.forecastRevenue}
                    value={money(
                      forecastResults.revenue
                    )}
                  />

                  <ResultCard compact
                    title={t.forecastProfit}
                    value={money(
                      forecastResults.profit
                    )}
                  />

                  <ResultCard compact
                    title={t.achievementRate}
                    value={`${forecastResults.achievement.toFixed(
                      1
                    )}%`}
                  />

                  <ResultCard compact
                    title={
                      forecastResults.unitsGap >= 0
                        ? t.unitsAhead
                        : t.unitsShort
                    }
                    value={units(
                      Math.abs(
                        forecastResults.unitsGap
                      )
                    )}
                  />

                  <ResultCard compact
                    title={t.revenueGap}
                    value={signedMoney(
                      forecastResults.revenueGap
                    )}
                  />

                  <ResultCard compact
                    title={t.profitGap}
                    value={signedMoney(
                      forecastResults.profitGap
                    )}
                  />
                </div>

                <p
                  style={{
                    ...descriptionStyle,
                    fontWeight: 700,
                    color:
                      forecastResults.unitsGap >= 0
                        ? "#166534"
                        : "#B45309",
                  }}
                >
                  {forecastResults.unitsGap >= 0
                    ? t.achieved
                    : t.notAchieved}
                </p>
              </>
            )}
          </section>

          <section style={panelStyle}>
            <h3 style={headingStyle}>
              {t.priceHeading}
            </h3>

            <p style={descriptionStyle}>
              {t.priceDescription}
            </p>

            <div style={inputGridStyle}>
              <NumberInput
                label={t.alternativePrice}
                placeholder={
                  t.alternativePlaceholder
                }
                value={alternativePrice}
                onChange={(value) =>
                  setAlternativePrice(
                    nonNegative(value)
                  )
                }
              />
            </div>

            {alternativePrice !== "" &&
              !alternateResults && (
                <p
                  style={{
                    ...descriptionStyle,
                    color: "#B91C1C",
                  }}
                >
                  {t.alternativeInvalid}
                </p>
              )}

            {alternateResults && (
              <div style={cardGridStyle}>
                <ResultCard compact
                  title={t.alternativeUnits}
                  value={units(
                    alternateResults.units
                  )}
                />

                <ResultCard compact
                  title={t.alternativeRevenue}
                  value={money(
                    alternateResults.units *
                      alternate
                  )}
                />

                <ResultCard compact
                  title={t.unitDifference}
                  value={signedUnits(
                    alternateResults.units -
                      calculation.requiredUnits
                  )}
                />

                <ResultCard compact
                  title={t.priceDifference}
                  value={signedMoney(
                    alternateResults.priceDifference
                  )}
                />
              </div>
            )}
          </section>

          <section style={panelStyle}>
            <h3 style={headingStyle}>
              {t.assumptionsHeading}
            </h3>

            <p
              style={{
                ...descriptionStyle,
                marginBottom: 0,
              }}
            >
              {t.assumptions}
            </p>
          </section>
        </>
      )}
    </>
  );
}
