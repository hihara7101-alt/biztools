
"use client";

import { useMemo, useRef, useState } from "react";

import CalculatorContainer from "@/components/CalculatorContainer";
import MoneyValue from "@/components/MoneyValue";
import NumberInput from "@/components/NumberInput";

type Language = "en" | "ja";
type Currency = "USD" | "JPY";
type NumericInput = number | "";

type Props = {
  lang?: Language;
};

function formatNumber(
  value: number,
  lang: Language,
  maximumFractionDigits = 2
) {
  return new Intl.NumberFormat(
    lang === "ja" ? "ja-JP" : "en-US",
    {
      maximumFractionDigits,
    }
  ).format(value);
}

function formatPercent(value: number, lang: Language) {
  return `${formatNumber(value, lang, 1)}%`;
}

function ResultBox({
  title,
  children,
  description,
  accent = "#2563EB",
}: {
  title: string;
  children: React.ReactNode;
  description?: string;
  accent?: string;
}) {
  return (
    <div
      style={{
        minWidth: 0,
        padding: "24px",
        border: "1px solid #E5E7EB",
        borderTop: `4px solid ${accent}`,
        borderRadius: "16px",
        background: "#FFFFFF",
      }}
    >
      <div
        style={{
          fontSize: "14px",
          fontWeight: 800,
          color: "#374151",
        }}
      >
        {title}
      </div>

      <div
        style={{
          marginTop: "14px",
          fontSize: "clamp(22px, 3vw, 32px)",
          fontWeight: 900,
          color: "#111827",
          overflowX: "auto",
          whiteSpace: "nowrap",
          fontVariantNumeric: "tabular-nums",
        }}
      >
        {children}
      </div>

      {description && (
        <p
          style={{
            marginTop: "12px",
            marginBottom: 0,
            fontSize: "13px",
            lineHeight: 1.7,
            color: "#6B7280",
          }}
        >
          {description}
        </p>
      )}
    </div>
  );
}

function Section({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      style={{
        marginTop: "30px",
        padding: "26px",
        border: "1px solid #E5E7EB",
        borderRadius: "18px",
        background: "#F9FAFB",
      }}
    >
      <h3
        style={{
          margin: 0,
          fontSize: "21px",
          fontWeight: 800,
          color: "#111827",
        }}
      >
        {title}
      </h3>

      {description && (
        <p
          style={{
            marginTop: "10px",
            marginBottom: "22px",
            color: "#4B5563",
            fontSize: "15px",
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

const resultGridStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns:
    "repeat(auto-fit, minmax(min(100%, 220px), 1fr))",
  gap: "16px",
};

export default function BreakEvenCalculator({
  lang = "en",
}: Props) {
  const currency: Currency = lang === "ja" ? "JPY" : "USD";

  const [sellingPrice, setSellingPrice] =
    useState<NumericInput>("");
  const [variableCost, setVariableCost] =
    useState<NumericInput>("");
  const [fixedCosts, setFixedCosts] =
    useState<NumericInput>("");

  const [targetProfit, setTargetProfit] =
    useState<NumericInput>("");
  const [forecastUnits, setForecastUnits] =
    useState<NumericInput>("");

  const sellingPriceRef = useRef<HTMLInputElement>(null);
  const variableCostRef = useRef<HTMLInputElement>(null);
  const fixedCostsRef = useRef<HTMLInputElement>(null);

  const t =
    lang === "ja"
      ? {
          title: "損益分岐点を計算",
          description:
            "販売価格、変動費、固定費から、黒字化に必要な販売数を計算します。さらに、目標利益の達成に必要な販売数や、販売予測に基づく利益・安全余裕率も確認できます。",
          inputTitle: "基本条件",
          price: "販売価格（1個あたり）",
          variable: "変動費（1個あたり）",
          fixed: "固定費合計",
          pricePlaceholder: "販売価格を入力",
          variablePlaceholder: "変動費を入力",
          fixedPlaceholder: "固定費を入力",
          reset: "すべてリセット",
          incomplete:
            "販売価格・変動費・固定費の3項目を入力すると、計算結果が表示されます。",
          invalidPrice:
            "販売価格は0より大きい金額を入力してください。",
          invalidContribution:
            "変動費が販売価格以上のため、販売数量を増やしても固定費を回収できません。販売価格または変動費を見直してください。",
          breakEvenTitle: "損益分岐点",
          breakEvenDescription:
            "固定費を回収するために必要な最低販売数量と、その数量に対応する売上高です。",
          units: "損益分岐販売数",
          revenue: "必要売上高",
          exact: "端数処理前",
          roundingNote:
            "販売数は整数に切り上げています。",
          metrics: "収益構造",
          contribution: "限界利益（1個あたり）",
          contributionRate: "限界利益率",
          variableRate: "変動費率",
          targetTitle: "目標利益から必要販売数を逆算",
          targetDescription:
            "達成したい利益を入力すると、必要な販売数と売上高を計算します。利益は固定費控除後・その他未入力費用控除前の概算値です。",
          targetInput: "目標利益",
          targetPlaceholder: "例：300000",
          targetUnits: "必要販売数",
          targetRevenue: "必要売上高",
          targetEmpty:
            "目標利益を入力すると必要販売数を表示します。",
          forecastTitle: "販売予測と安全余裕率",
          forecastDescription:
            "予測販売数を入力すると、利益・損失と、損益分岐点までの余裕を確認できます。",
          forecastInput: "予測販売数（個）",
          forecastPlaceholder: "例：500",
          forecastRevenue: "予測売上高",
          forecastProfit: "予測利益・損失",
          safetyUnits: "損益分岐点との差",
          safetyRate: "安全余裕率",
          forecastEmpty:
            "予測販売数を入力すると利益と安全余裕率を表示します。",
          above: "損益分岐点を上回っています。",
          below: "損益分岐点に達していません。",
          at: "損益分岐点に達しています。",
          unitSuffix: "個",
          notesTitle: "計算上の前提",
          notes:
            "販売価格と1個あたり変動費は一定、固定費は対象期間内で一定と仮定しています。税金、金利、減価償却費など、入力していない費用は含みません。売上高は実際に必要な整数販売数に基づいて表示します。",
          zeroFixed:
            "固定費が0の場合、損益分岐販売数は0個です。",
        }
      : {
          title: "Calculate Your Break-even Point",
          description:
            "Calculate the sales volume needed to cover your costs. Then plan a target profit, forecast earnings, and assess your margin of safety.",
          inputTitle: "Basic Assumptions",
          price: "Selling Price per Unit",
          variable: "Variable Cost per Unit",
          fixed: "Total Fixed Costs",
          pricePlaceholder: "Enter selling price",
          variablePlaceholder: "Enter variable cost",
          fixedPlaceholder: "Enter fixed costs",
          reset: "Reset All",
          incomplete:
            "Enter the selling price, variable cost, and fixed costs to see your results.",
          invalidPrice:
            "Selling price must be greater than zero.",
          invalidContribution:
            "Variable cost is equal to or greater than selling price. Selling more units cannot recover fixed costs under these assumptions. Review your pricing or variable costs.",
          breakEvenTitle: "Break-even Point",
          breakEvenDescription:
            "The minimum whole-unit sales volume needed to cover fixed costs, and the revenue generated at that volume.",
          units: "Break-even Units",
          revenue: "Required Revenue",
          exact: "Before rounding",
          roundingNote:
            "Required units are rounded up to the next whole unit.",
          metrics: "Unit Economics",
          contribution: "Contribution per Unit",
          contributionRate: "Contribution Margin Ratio",
          variableRate: "Variable Cost Ratio",
          targetTitle: "Target Profit Planning",
          targetDescription:
            "Enter your desired profit to calculate the required units and revenue. Profit is an estimate after fixed costs, before other unentered expenses.",
          targetInput: "Target Profit",
          targetPlaceholder: "e.g. 3000",
          targetUnits: "Required Units",
          targetRevenue: "Required Revenue",
          targetEmpty:
            "Enter a target profit to calculate required sales.",
          forecastTitle: "Sales Forecast and Margin of Safety",
          forecastDescription:
            "Enter expected unit sales to estimate profit or loss and measure how far your forecast is above or below break-even.",
          forecastInput: "Forecast Units",
          forecastPlaceholder: "e.g. 500",
          forecastRevenue: "Forecast Revenue",
          forecastProfit: "Forecast Profit or Loss",
          safetyUnits: "Units Above/Below Break-even",
          safetyRate: "Margin of Safety",
          forecastEmpty:
            "Enter forecast units to see your profit and margin of safety.",
          above: "Your forecast is above break-even.",
          below: "Your forecast is below break-even.",
          at: "Your forecast is at break-even.",
          unitSuffix: "units",
          notesTitle: "Calculation Assumptions",
          notes:
            "Selling price and variable cost per unit are assumed constant, and fixed costs are assumed unchanged during the period. Taxes, interest, depreciation, and other unentered expenses are excluded. Revenue targets use the required whole-unit sales volume.",
          zeroFixed:
            "When fixed costs are zero, break-even units are zero.",
        };

  const isComplete =
    sellingPrice !== "" &&
    variableCost !== "" &&
    fixedCosts !== "";

  const price = Number(sellingPrice) || 0;
  const variable = Number(variableCost) || 0;
  const fixed = Number(fixedCosts) || 0;

  const validPrice = price > 0;
  const validContribution = price > variable;

  const canCalculate =
    isComplete && validPrice && validContribution;

  const calculations = useMemo(() => {
    const contribution = price - variable;
    const contributionRate =
      price > 0 ? (contribution / price) * 100 : 0;
    const variableRate =
      price > 0 ? (variable / price) * 100 : 0;

    const exactBreakEven =
      contribution > 0 ? fixed / contribution : 0;

    const breakEvenUnits = Math.ceil(exactBreakEven);
    const breakEvenRevenue = breakEvenUnits * price;

    const target = Number(targetProfit) || 0;
    const requiredTargetUnits =
      contribution > 0
        ? Math.ceil((fixed + target) / contribution)
        : 0;

    const targetRevenue = requiredTargetUnits * price;

    const forecast = Number(forecastUnits) || 0;
    const forecastRevenue = forecast * price;
    const forecastProfit = forecast * contribution - fixed;

    const safetyUnits = forecast - breakEvenUnits;
    const safetyRate =
      forecast > 0
        ? (safetyUnits / forecast) * 100
        : null;

    return {
      contribution,
      contributionRate,
      variableRate,
      exactBreakEven,
      breakEvenUnits,
      breakEvenRevenue,
      requiredTargetUnits,
      targetRevenue,
      forecastRevenue,
      forecastProfit,
      safetyUnits,
      safetyRate,
    };
  }, [
    price,
    variable,
    fixed,
    targetProfit,
    forecastUnits,
  ]);

  const reset = () => {
    setSellingPrice("");
    setVariableCost("");
    setFixedCosts("");
    setTargetProfit("");
    setForecastUnits("");
    sellingPriceRef.current?.focus();
  };

  const money = (value: number) => (
    <MoneyValue value={value} currency={currency} />
  );

  return (
    <CalculatorContainer>
      <div style={{ marginBottom: "28px" }}>
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
            color: "#4B5563",
            fontSize: "16px",
            lineHeight: 1.8,
          }}
        >
          {t.description}
        </p>
      </div>

      <Section title={t.inputTitle}>
        <div style={resultGridStyle}>
          <NumberInput
            label={t.price}
            placeholder={t.pricePlaceholder}
            value={sellingPrice}
            onChange={(value) =>
              setSellingPrice(
                value === "" ? "" : Math.max(0, value)
              )
            }
            inputRef={sellingPriceRef}
            nextRef={variableCostRef}
          />

          <NumberInput
            label={t.variable}
            placeholder={t.variablePlaceholder}
            value={variableCost}
            onChange={(value) =>
              setVariableCost(
                value === "" ? "" : Math.max(0, value)
              )
            }
            inputRef={variableCostRef}
            nextRef={fixedCostsRef}
          />

          <NumberInput
            label={t.fixed}
            placeholder={t.fixedPlaceholder}
            value={fixedCosts}
            onChange={(value) =>
              setFixedCosts(
                value === "" ? "" : Math.max(0, value)
              )
            }
            inputRef={fixedCostsRef}
          />
        </div>

        <div style={{ marginTop: "22px" }}>
          <button
            type="button"
            onClick={reset}
            style={{
              padding: "12px 20px",
              border: "1px solid #CBD5E1",
              borderRadius: "10px",
              background: "#FFFFFF",
              color: "#334155",
              fontWeight: 700,
              cursor: "pointer",
            }}
          >
            {t.reset}
          </button>
        </div>
      </Section>

      {!isComplete && (
        <p
          style={{
            marginTop: "22px",
            padding: "20px",
            borderRadius: "12px",
            background: "#EFF6FF",
            color: "#1E40AF",
            lineHeight: 1.8,
          }}
        >
          {t.incomplete}
        </p>
      )}

      {isComplete && !canCalculate && (
        <p
          role="alert"
          style={{
            marginTop: "22px",
            padding: "20px",
            borderRadius: "12px",
            background: "#FEF2F2",
            border: "1px solid #FECACA",
            color: "#991B1B",
            lineHeight: 1.8,
          }}
        >
          {!validPrice
            ? t.invalidPrice
            : t.invalidContribution}
        </p>
      )}

      {canCalculate && (
        <>
          <Section
            title={t.breakEvenTitle}
            description={t.breakEvenDescription}
          >
            <div style={resultGridStyle}>
              <ResultBox
                title={t.units}
                description={t.roundingNote}
                accent="#2563EB"
              >
                {formatNumber(
                  calculations.breakEvenUnits,
                  lang,
                  0
                )}{" "}
                <span style={{ fontSize: "16px" }}>
                  {t.unitSuffix}
                </span>
              </ResultBox>

              <ResultBox
                title={t.revenue}
                accent="#059669"
              >
                {money(calculations.breakEvenRevenue)}
              </ResultBox>
            </div>

            <p
              style={{
                marginTop: "16px",
                marginBottom: 0,
                fontSize: "13px",
                color: "#6B7280",
              }}
            >
              {t.exact}:{" "}
              {formatNumber(
                calculations.exactBreakEven,
                lang
              )}{" "}
              {t.unitSuffix}
              {fixed === 0 ? ` — ${t.zeroFixed}` : ""}
            </p>
          </Section>

          <Section title={t.metrics}>
            <div style={resultGridStyle}>
              <ResultBox title={t.contribution}>
                {money(calculations.contribution)}
              </ResultBox>

              <ResultBox title={t.contributionRate}>
                {formatPercent(
                  calculations.contributionRate,
                  lang
                )}
              </ResultBox>

              <ResultBox title={t.variableRate}>
                {formatPercent(
                  calculations.variableRate,
                  lang
                )}
              </ResultBox>
            </div>
          </Section>

          <Section
            title={t.targetTitle}
            description={t.targetDescription}
          >
            <NumberInput
              label={t.targetInput}
              placeholder={t.targetPlaceholder}
              value={targetProfit}
              onChange={(value) =>
                setTargetProfit(
                  value === "" ? "" : Math.max(0, value)
                )
              }
            />

            {targetProfit === "" ? (
              <p
                style={{
                  marginTop: "18px",
                  color: "#6B7280",
                }}
              >
                {t.targetEmpty}
              </p>
            ) : (
              <div
                style={{
                  ...resultGridStyle,
                  marginTop: "20px",
                }}
              >
                <ResultBox title={t.targetUnits}>
                  {formatNumber(
                    calculations.requiredTargetUnits,
                    lang,
                    0
                  )}{" "}
                  <span style={{ fontSize: "16px" }}>
                    {t.unitSuffix}
                  </span>
                </ResultBox>

                <ResultBox
                  title={t.targetRevenue}
                  accent="#059669"
                >
                  {money(calculations.targetRevenue)}
                </ResultBox>
              </div>
            )}
          </Section>

          <Section
            title={t.forecastTitle}
            description={t.forecastDescription}
          >
            <NumberInput
              label={t.forecastInput}
              placeholder={t.forecastPlaceholder}
              value={forecastUnits}
              onChange={(value) =>
                setForecastUnits(
                  value === ""
                    ? ""
                    : Math.max(0, Math.floor(value))
                )
              }
            />

            {forecastUnits === "" ? (
              <p
                style={{
                  marginTop: "18px",
                  color: "#6B7280",
                }}
              >
                {t.forecastEmpty}
              </p>
            ) : (
              <>
                <div
                  style={{
                    ...resultGridStyle,
                    marginTop: "20px",
                  }}
                >
                  <ResultBox title={t.forecastRevenue}>
                    {money(calculations.forecastRevenue)}
                  </ResultBox>

                  <ResultBox
                    title={t.forecastProfit}
                    accent={
                      calculations.forecastProfit >= 0
                        ? "#059669"
                        : "#DC2626"
                    }
                  >
                    {money(calculations.forecastProfit)}
                  </ResultBox>

                  <ResultBox title={t.safetyUnits}>
                    {calculations.safetyUnits > 0
                      ? "+"
                      : ""}
                    {formatNumber(
                      calculations.safetyUnits,
                      lang,
                      0
                    )}{" "}
                    <span style={{ fontSize: "16px" }}>
                      {t.unitSuffix}
                    </span>
                  </ResultBox>

                  <ResultBox title={t.safetyRate}>
                    {calculations.safetyRate === null
                      ? "—"
                      : formatPercent(
                          calculations.safetyRate,
                          lang
                        )}
                  </ResultBox>
                </div>

                <p
                  style={{
                    marginTop: "18px",
                    marginBottom: 0,
                    fontWeight: 700,
                    color:
                      calculations.forecastProfit >= 0
                        ? "#047857"
                        : "#B91C1C",
                  }}
                >
                  {calculations.forecastProfit > 0
                    ? t.above
                    : calculations.forecastProfit < 0
                      ? t.below
                      : t.at}
                </p>
              </>
            )}
          </Section>

          <Section title={t.notesTitle}>
            <p
              style={{
                margin: 0,
                color: "#4B5563",
                fontSize: "14px",
                lineHeight: 1.9,
              }}
            >
              {t.notes}
            </p>
          </Section>
        </>
      )}
    </CalculatorContainer>
  );
}
