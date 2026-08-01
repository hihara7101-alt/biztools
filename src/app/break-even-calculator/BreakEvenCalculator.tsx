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
    useState<number | "">(100);

  const [variableCost, setVariableCost] =
    useState<number | "">(45);

  const [fixedCosts, setFixedCosts] =
    useState<number | "">(12000);

  const sellingPriceRef =
    useRef<HTMLInputElement>(null);

  const variableCostRef =
    useRef<HTMLInputElement>(null);

  const fixedCostsRef =
    useRef<HTMLInputElement>(null);

  const calculations = useMemo(() => {
    const price =
      sellingPrice === "" ? 0 : sellingPrice;

    const variable =
      variableCost === "" ? 0 : variableCost;

    const fixed =
      fixedCosts === "" ? 0 : fixedCosts;

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
  }, [
    sellingPrice,
    variableCost,
    fixedCosts,
  ]);

  const notPossible =
    lang === "ja"
      ? "計算できません"
      : "Not possible";

  return (
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
          {lang === "ja"
            ? "損益分岐点を計算"
            : "Calculate Your Break-even Point"}
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
          {lang === "ja"
            ? "販売価格、変動費、固定費を入力すると、黒字化に必要な販売数と売上高を計算できます。"
            : "Enter your selling price, variable cost, and fixed costs to calculate the sales volume and revenue required to become profitable."}
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
          {lang === "ja"
            ? "数値を入力"
            : "Enter Your Numbers"}
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
            label={
              lang === "ja"
                ? "販売価格（1個あたり）"
                : "Selling Price per Unit"
            }
            placeholder="100"
            value={sellingPrice}
            onChange={setSellingPrice}
            inputRef={sellingPriceRef}
            nextRef={variableCostRef}
          />

          <NumberInput
            label={
              lang === "ja"
                ? "変動費（1個あたり）"
                : "Variable Cost per Unit"
            }
            placeholder="45"
            value={variableCost}
            onChange={setVariableCost}
            inputRef={variableCostRef}
            nextRef={fixedCostsRef}
          />

          <NumberInput
            label={
              lang === "ja"
                ? "固定費合計"
                : "Total Fixed Costs"
            }
            placeholder="12000"
            value={fixedCosts}
            onChange={setFixedCosts}
            inputRef={fixedCostsRef}
          />
        </div>
      </section>

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
              "linear-gradient(135deg, #EFF6FF 0%, #FFFFFF 100%)",
            boxShadow:
              "0 10px 30px rgba(37, 99, 235, 0.10)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              color: "#1D4ED8",
              fontSize: "15px",
              fontWeight: 800,
            }}
          >
            <span aria-hidden="true">🎯</span>

            <span>
              {lang === "ja"
                ? "損益分岐販売数"
                : "Break-even Units"}
            </span>
          </div>

          <div
            style={{
              marginTop: "18px",
              fontSize: "38px",
              fontWeight: 900,
              lineHeight: 1.1,
              color: "#111827",
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
              : notPossible}
          </div>

          {Number.isFinite(
            calculations.breakEvenUnits
          ) && (
            <p
              style={{
                marginTop: "12px",
                marginBottom: 0,
                fontSize: "14px",
                lineHeight: 1.6,
                color: "#4B5563",
              }}
            >
              {lang === "ja"
                ? `正確な計算値: ${formatNumber(
                    calculations.breakEvenUnits,
                    lang,
                    2
                  )}個`
                : `Exact calculation: ${formatNumber(
                    calculations.breakEvenUnits,
                    lang,
                    2
                  )} units`}
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
              "linear-gradient(135deg, #ECFDF5 0%, #FFFFFF 100%)",
            boxShadow:
              "0 10px 30px rgba(5, 150, 105, 0.10)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              color: "#047857",
              fontSize: "15px",
              fontWeight: 800,
            }}
          >
            <span aria-hidden="true">💰</span>

            <span>
              {lang === "ja"
                ? "損益分岐売上高"
                : "Break-even Revenue"}
            </span>
          </div>

          <div
            style={{
              marginTop: "18px",
              fontSize: "38px",
              fontWeight: 900,
              lineHeight: 1.1,
              color: "#111827",
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
              notPossible
            )}
          </div>

          <p
            style={{
              marginTop: "12px",
              marginBottom: 0,
              fontSize: "14px",
              lineHeight: 1.6,
              color: "#4B5563",
            }}
          >
            {lang === "ja"
              ? "この売上高を超えると利益が発生します。"
              : "Revenue above this amount begins generating profit."}
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
          {lang === "ja"
            ? "主要指標"
            : "Key Metrics"}
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
            title={
              lang === "ja"
                ? "限界利益（1個あたり）"
                : "Contribution per Unit"
            }
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
            title={
              lang === "ja"
                ? "限界利益率"
                : "Contribution Margin"
            }
            value={formatPercent(
              calculations.contributionMarginRatio *
                100,
              lang
            )}
          />

          <ResultCard
            title={
              lang === "ja"
                ? "変動費率"
                : "Variable Cost Ratio"
            }
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
          {lang === "ja"
            ? "販売数量別の利益"
            : "Profit by Sales Volume"}
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
            title={
              lang === "ja"
                ? "100個販売"
                : "100 Units Sold"
            }
            message={`${symbol}${formatNumber(
              calculations.profitAt100Units,
              lang
            )}`}
            color="#2563EB"
            icon="📊"
          />

          <InsightCard
            title={
              lang === "ja"
                ? "250個販売"
                : "250 Units Sold"
            }
            message={`${symbol}${formatNumber(
              calculations.profitAt250Units,
              lang
            )}`}
            color="#059669"
            icon="📈"
          />

          <InsightCard
            title={
              lang === "ja"
                ? "500個販売"
                : "500 Units Sold"
            }
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
          {lang === "ja"
            ? "安全余裕売上"
            : "Safety Margin Revenue"}
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
          {lang === "ja"
            ? "損益分岐点を上回る売上目標の目安です。"
            : "Use these figures as practical revenue targets above your break-even point."}
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
            title={
              lang === "ja"
                ? "10%上"
                : "10% Above Break-even"
            }
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
                notPossible
              )
            }
          />

          <ResultCard
            title={
              lang === "ja"
                ? "20%上"
                : "20% Above Break-even"
            }
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
                notPossible
              )
            }
          />

          <ResultCard
            title={
              lang === "ja"
                ? "30%上"
                : "30% Above Break-even"
            }
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
                notPossible
              )
            }
          />
        </div>
      </section>
          </CalculatorContainer>
  );
}