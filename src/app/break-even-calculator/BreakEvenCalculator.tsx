"use client";

import { useMemo, useRef, useState } from "react";

import CalculatorContainer from "@/components/CalculatorContainer";
import InsightCard from "@/components/InsightCard";
import MoneyValue from "@/components/MoneyValue";
import NumberInput from "@/components/NumberInput";
import ResultCard from "@/components/ResultCard";

type Language = "en" | "ja";
type Currency = "USD" | "JPY";

type BreakEvenCalculatorProps = {
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
      minimumFractionDigits: 0,
      maximumFractionDigits,
    }
  ).format(value);
}

function formatPercent(
  value: number,
  lang: Language
) {
  return `${formatNumber(value, lang, 2)}%`;
}

export default function BreakEvenCalculator({
  lang = "en",
}: BreakEvenCalculatorProps) {
  const currency: Currency =
    lang === "ja" ? "JPY" : "USD";

  const symbol =
    lang === "ja" ? "¥" : "$";

  const [sellingPrice, setSellingPrice] =
    useState<number | "">("");

  const [variableCost, setVariableCost] =
    useState<number | "">("");

  const [fixedCosts, setFixedCosts] =
    useState<number | "">("");

  const sellingPriceRef =
    useRef<HTMLInputElement>(null);

  const variableCostRef =
    useRef<HTMLInputElement>(null);

  const fixedCostsRef =
    useRef<HTMLInputElement>(null);

  const price =
    sellingPrice === "" ? 0 : sellingPrice;

  const variable =
    variableCost === "" ? 0 : variableCost;

  const fixed =
    fixedCosts === "" ? 0 : fixedCosts;

  const hasInput =
    sellingPrice !== "" ||
    variableCost !== "" ||
    fixedCosts !== "";

  const calculations = useMemo(() => {
    const contributionPerUnit =
      price - variable;

    const contributionMarginRatio =
      price > 0
        ? contributionPerUnit / price
        : 0;

    const variableCostRatio =
      price > 0
        ? variable / price
        : 0;

    const canCalculateBreakEven =
      price > 0 &&
      contributionPerUnit > 0 &&
      fixed >= 0;

    const breakEvenUnits =
      canCalculateBreakEven
        ? fixed / contributionPerUnit
        : Infinity;

    const breakEvenRevenue =
      canCalculateBreakEven
        ? breakEvenUnits * price
        : Infinity;

    const roundedBreakEvenUnits =
      Number.isFinite(breakEvenUnits)
        ? Math.ceil(breakEvenUnits)
        : Infinity;

    const profitAt100Units =
      contributionPerUnit * 100 - fixed;

    const profitAt250Units =
      contributionPerUnit * 250 - fixed;

    const profitAt500Units =
      contributionPerUnit * 500 - fixed;

    const safetyRevenue10 =
      Number.isFinite(breakEvenRevenue)
        ? breakEvenRevenue * 1.1
        : Infinity;

    const safetyRevenue20 =
      Number.isFinite(breakEvenRevenue)
        ? breakEvenRevenue * 1.2
        : Infinity;

    const safetyRevenue30 =
      Number.isFinite(breakEvenRevenue)
        ? breakEvenRevenue * 1.3
        : Infinity;

    return {
      contributionPerUnit,
      contributionMarginRatio,
      variableCostRatio,
      breakEvenUnits,
      roundedBreakEvenUnits,
      breakEvenRevenue,
      profitAt100Units,
      profitAt250Units,
      profitAt500Units,
      safetyRevenue10,
      safetyRevenue20,
      safetyRevenue30,
    };
  }, [price, variable, fixed]);

  const text =
    lang === "ja"
      ? {
          title: "損益分岐点を計算",

          description:
            "販売価格、変動費、固定費を入力すると、黒字化に必要な販売数と売上高を計算できます。",

          inputTitle: "数値を入力",

          sellingPrice:
            "販売価格（1個あたり）",

          sellingPricePlaceholder:
            "販売価格を入力",

          variableCost:
            "変動費（1個あたり）",

          variableCostPlaceholder:
            "変動費を入力",

          fixedCosts: "固定費合計",

          fixedCostsPlaceholder:
            "固定費を入力",

          reset: "リセット",

          readyTitle:
            "計算を始めましょう",

          readyDescription:
            "販売価格、変動費、固定費を入力すると、損益分岐点をすぐに確認できます。",

          notPossible:
            "計算できません",

          breakEvenUnits:
            "損益分岐販売数",

          exactCalculation:
            "正確な計算値",

          breakEvenRevenue:
            "損益分岐売上高",

          revenueDescription:
            "この売上高を超えると利益が発生します。",

          keyMetrics: "主要指標",

          contributionPerUnit:
            "限界利益（1個あたり）",

          contributionMargin:
            "限界利益率",

          variableCostRatio:
            "変動費率",

          profitByVolume:
            "販売数量別の利益",

          units100: "100個販売",

          units250: "250個販売",

          units500: "500個販売",

          safetyMarginRevenue:
            "安全余裕売上",

          safetyDescription:
            "損益分岐点を上回る売上目標の目安です。",

          above10: "10%上",

          above20: "20%上",

          above30: "30%上",
        }
      : {
          title:
            "Calculate Your Break-even Point",

          description:
            "Enter your selling price, variable cost, and fixed costs to calculate the sales volume and revenue required to become profitable.",

          inputTitle:
            "Enter Your Numbers",

          sellingPrice:
            "Selling Price per Unit",

          sellingPricePlaceholder:
            "Enter selling price",

          variableCost:
            "Variable Cost per Unit",

          variableCostPlaceholder:
            "Enter variable cost",

          fixedCosts:
            "Total Fixed Costs",

          fixedCostsPlaceholder:
            "Enter fixed costs",

          reset:
            "Reset Calculator",

          readyTitle:
            "Ready to calculate?",

          readyDescription:
            "Enter your selling price, variable cost, and fixed costs to calculate your break-even point.",

          notPossible:
            "Not possible",

          breakEvenUnits:
            "Break-even Units",

          exactCalculation:
            "Exact calculation",

          breakEvenRevenue:
            "Break-even Revenue",

          revenueDescription:
            "Revenue above this amount begins generating profit.",

          keyMetrics:
            "Key Metrics",

          contributionPerUnit:
            "Contribution per Unit",

          contributionMargin:
            "Contribution Margin",

          variableCostRatio:
            "Variable Cost Ratio",

          profitByVolume:
            "Profit by Sales Volume",

          units100:
            "100 Units Sold",

          units250:
            "250 Units Sold",

          units500:
            "500 Units Sold",

          safetyMarginRevenue:
            "Safety Margin Revenue",

          safetyDescription:
            "Use these figures as practical revenue targets above your break-even point.",

          above10:
            "10% Above Break-even",

          above20:
            "20% Above Break-even",

          above30:
            "30% Above Break-even",
        };

  return (
    <>
      <CalculatorContainer>
        <div
          style={{
            marginBottom: "32px",
          }}
        >
          <h2
            style={{
              margin: 0,
              fontSize: "30px",
              fontWeight: 800,
              lineHeight: 1.3,
              color: "#111827",
            }}
          >
            {text.title}
          </h2>

          <p
            style={{
              marginTop: "12px",
              marginBottom: 0,
              maxWidth: "760px",
              fontSize: "17px",
              lineHeight: 1.7,
              color: "#4B5563",
            }}
          >
            {text.description}
          </p>
        </div>
             <section
        style={{
          padding: "28px",
          border: "1px solid #E5E7EB",
          borderRadius: "18px",
          background: "#F9FAFB",
        }}
      >
        <h3
          style={{
            marginTop: 0,
            marginBottom: "24px",
            fontSize: "20px",
            fontWeight: 800,
            color: "#111827",
          }}
        >
          {text.inputTitle}
        </h3>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "20px",
          }}
        >
          <NumberInput
            label={text.sellingPrice}
            placeholder={
              text.sellingPricePlaceholder
            }
            value={sellingPrice}
            onChange={(value) =>
              setSellingPrice(
                value === ""
                  ? ""
                  : Math.max(0, value)
              )
            }
            inputRef={sellingPriceRef}
            nextRef={variableCostRef}
          />

          <NumberInput
            label={text.variableCost}
            placeholder={
              text.variableCostPlaceholder
            }
            value={variableCost}
            onChange={(value) =>
              setVariableCost(
                value === ""
                  ? ""
                  : Math.max(0, value)
              )
            }
            inputRef={variableCostRef}
            nextRef={fixedCostsRef}
          />

          <NumberInput
            label={text.fixedCosts}
            placeholder={
              text.fixedCostsPlaceholder
            }
            value={fixedCosts}
            onChange={(value) =>
              setFixedCosts(
                value === ""
                  ? ""
                  : Math.max(0, value)
              )
            }
            inputRef={fixedCostsRef}
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
            onClick={() => {
              setSellingPrice("");
              setVariableCost("");
              setFixedCosts("");

              sellingPriceRef.current?.focus();
            }}
            style={{
              background: "#2563EB",
              color: "#FFFFFF",
              border: "none",
              borderRadius: "12px",
              padding: "14px 28px",
              fontWeight: 700,
              cursor: "pointer",
            }}
          >
            {text.reset}
          </button>
        </div>
      </section>

      {!hasInput && (
        <div
          style={{
            marginTop: "40px",
            padding: "50px",
            borderRadius: "20px",
            background: "#F9FAFB",
            border: "1px solid #E5E7EB",
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontSize: "48px",
            }}
          >
            📊
          </div>

          <h3
            style={{
              marginTop: "20px",
              fontSize: "26px",
              fontWeight: 700,
              color: "#111827",
            }}
          >
            {text.readyTitle}
          </h3>

          <p
            style={{
              marginTop: "14px",
              color: "#6B7280",
              lineHeight: 1.8,
              maxWidth: "600px",
              marginInline: "auto",
            }}
          >
            {text.readyDescription}
          </p>
        </div>
      )}

      {hasInput && (
        <>
          <section
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "20px",
              marginTop: "28px",
            }}
          >
            <div
              style={{
                minHeight: "170px",
                padding: "28px",
                border: "2px solid #2563EB",
                borderRadius: "20px",
                background:
                  "linear-gradient(135deg,#EFF6FF 0%,#FFFFFF 100%)",
              }}
            >
              <div
                style={{
                  fontSize: "15px",
                  fontWeight: 800,
                  color: "#1D4ED8",
                }}
              >
                🎯 {text.breakEvenUnits}
              </div>

              <div
                style={{
                  marginTop: "18px",
                  fontSize: "38px",
                  fontWeight: 900,
                }}
              >
                {Number.isFinite(
                  calculations.roundedBreakEvenUnits
                )
                  ? formatNumber(
                      calculations.roundedBreakEvenUnits,
                      lang,
                      0
                    )
                  : text.notPossible}
              </div>

              {Number.isFinite(
                calculations.breakEvenUnits
              ) && (
                <p
                  style={{
                    marginTop: "12px",
                    color: "#4B5563",
                  }}
                >
                  {text.exactCalculation}:{" "}
                  {formatNumber(
                    calculations.breakEvenUnits,
                    lang
                  )}
                </p>
              )}
            </div>

            <div
              style={{
                minHeight: "170px",
                padding: "28px",
                border: "2px solid #059669",
                borderRadius: "20px",
                background:
                  "linear-gradient(135deg,#ECFDF5 0%,#FFFFFF 100%)",
              }}
            >
              <div
                style={{
                  fontSize: "15px",
                  fontWeight: 800,
                  color: "#047857",
                }}
              >
                💰 {text.breakEvenRevenue}
              </div>

              <div
                style={{
                  marginTop: "18px",
                  fontSize: "38px",
                  fontWeight: 900,
                }}
              >
                {Number.isFinite(
                  calculations.breakEvenRevenue
                ) ? (
                  <MoneyValue
                    value={
                      calculations.breakEvenRevenue
                    }
                    currency={currency}
                  />
                ) : (
                  text.notPossible
                )}
              </div>

              <p
                style={{
                  marginTop: "12px",
                  color: "#4B5563",
                }}
              >
                {text.revenueDescription}
              </p>
            </div>
          </section>
                    <section
            style={{
              marginTop: "28px",
            }}
          >
            <h3
              style={{
                marginTop: 0,
                marginBottom: "18px",
                fontSize: "20px",
                fontWeight: 800,
                color: "#111827",
              }}
            >
              {text.keyMetrics}
            </h3>

            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  "repeat(auto-fit, minmax(210px, 1fr))",
                gap: "20px",
              }}
            >
              <ResultCard
                title={text.contributionPerUnit}
                value={
                  <MoneyValue
                    value={
                      calculations.contributionPerUnit
                    }
                    currency={currency}
                  />
                }
              />

              <ResultCard
                title={text.contributionMargin}
                value={formatPercent(
                  calculations.contributionMarginRatio *
                    100,
                  lang
                )}
              />

              <ResultCard
                title={text.variableCostRatio}
                value={formatPercent(
                  calculations.variableCostRatio * 100,
                  lang
                )}
              />
            </div>
          </section>

          <section
            style={{
              marginTop: "28px",
              padding: "28px",
              border: "1px solid #E5E7EB",
              borderRadius: "18px",
              background: "#FFFFFF",
            }}
          >
            <h3
              style={{
                marginTop: 0,
                marginBottom: "20px",
                fontSize: "20px",
                fontWeight: 800,
                color: "#111827",
              }}
            >
              {text.profitByVolume}
            </h3>

            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  "repeat(auto-fit, minmax(220px, 1fr))",
                gap: "20px",
              }}
            >
              <InsightCard
                title={text.units100}
                message={`${symbol}${formatNumber(
                  calculations.profitAt100Units,
                  lang
                )}`}
                color="#2563EB"
                icon="📊"
              />

              <InsightCard
                title={text.units250}
                message={`${symbol}${formatNumber(
                  calculations.profitAt250Units,
                  lang
                )}`}
                color="#059669"
                icon="📈"
              />

              <InsightCard
                title={text.units500}
                message={`${symbol}${formatNumber(
                  calculations.profitAt500Units,
                  lang
                )}`}
                color="#7C3AED"
                icon="🚀"
              />
            </div>
          </section>

          <section
            style={{
              marginTop: "28px",
              padding: "28px",
              border: "1px solid #E5E7EB",
              borderRadius: "18px",
              background: "#FFFFFF",
            }}
          >
            <h3
              style={{
                marginTop: 0,
                marginBottom: "20px",
                fontSize: "20px",
                fontWeight: 800,
                color: "#111827",
              }}
            >
              {text.safetyMarginRevenue}
            </h3>

            <p
              style={{
                marginTop: 0,
                marginBottom: "20px",
                fontSize: "15px",
                lineHeight: 1.7,
                color: "#6B7280",
              }}
            >
              {text.safetyDescription}
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  "repeat(auto-fit, minmax(220px, 1fr))",
                gap: "20px",
              }}
            >
              <ResultCard
                title={text.above10}
                value={
                  Number.isFinite(
                    calculations.safetyRevenue10
                  ) ? (
                    <MoneyValue
                      value={
                        calculations.safetyRevenue10
                      }
                      currency={currency}
                    />
                  ) : (
                    text.notPossible
                  )
                }
              />

              <ResultCard
                title={text.above20}
                value={
                  Number.isFinite(
                    calculations.safetyRevenue20
                  ) ? (
                    <MoneyValue
                      value={
                        calculations.safetyRevenue20
                      }
                      currency={currency}
                    />
                  ) : (
                    text.notPossible
                  )
                }
              />

              <ResultCard
                title={text.above30}
                value={
                  Number.isFinite(
                    calculations.safetyRevenue30
                  ) ? (
                    <MoneyValue
                      value={
                        calculations.safetyRevenue30
                      }
                      currency={currency}
                    />
                  ) : (
                    text.notPossible
                  )
                }
              />
            </div>
          </section>
        </>
      )}
      </CalculatorContainer>
    </>
  );
} 