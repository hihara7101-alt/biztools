"use client";

import { useMemo, useRef, useState } from "react";

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

export default function SalesTargetCalculator({
  lang = "en",
}: Props) {
  const currency: Currency =
    lang === "ja" ? "JPY" : "USD";

  const [targetProfit, setTargetProfit] =
    useState<number | "">("");

  const [sellingPrice, setSellingPrice] =
    useState<number | "">("");

  const [variableCost, setVariableCost] =
    useState<number | "">("");

  const [fixedCosts, setFixedCosts] =
    useState<number | "">("");

  const targetRef =
    useRef<HTMLInputElement>(null);

  const priceRef =
    useRef<HTMLInputElement>(null);

  const variableRef =
    useRef<HTMLInputElement>(null);

  const fixedRef =
    useRef<HTMLInputElement>(null);

  const targetValue =
    Number(targetProfit) || 0;

  const priceValue =
    Number(sellingPrice) || 0;

  const variableValue =
    Number(variableCost) || 0;

  const fixedValue =
    Number(fixedCosts) || 0;

  const contributionMargin =
    priceValue - variableValue;

  const exactUnitsNeeded =
    contributionMargin > 0
      ? (targetValue + fixedValue) /
        contributionMargin
      : 0;

  const unitsNeeded =
    contributionMargin > 0
      ? Math.ceil(exactUnitsNeeded)
      : 0;

  const requiredRevenue =
    unitsNeeded * priceValue;

  const contributionRatio =
    priceValue > 0
      ? (contributionMargin / priceValue) * 100
      : 0;

  const hasInput =
    targetProfit !== "" ||
    sellingPrice !== "" ||
    variableCost !== "" ||
    fixedCosts !== "";

  const canCalculate =
    contributionMargin > 0;

  const text =
    lang === "ja"
      ? {
          sectionTitle: "目標設定",

          sectionSubtitle:
            "利益目標・販売価格・変動費・固定費を入力してください。",

          target: "目標利益",

          targetPlaceholder:
            "目標利益を入力",

          price: "販売価格",

          pricePlaceholder:
            "販売価格を入力",

          variable: "変動費",

          variablePlaceholder:
            "変動費を入力",

          fixed: "固定費",

          fixedPlaceholder:
            "固定費を入力",

          reset: "リセット",

          ready:
            "売上目標を計算しましょう",

          readyDescription:
            "利益目標を達成するために必要な販売数と売上高を計算します。",

          units: "必要販売数",

          revenue: "必要売上高",

          contribution: "限界利益",

          ratio: "限界利益率",

          invalidTitle:
            "販売価格と変動費を確認してください",

          invalidMessage:
            "販売価格が変動費以下の場合、1件販売するごとに目標利益へ充当できる限界利益が生まれないため、必要販売数を計算できません。販売価格または変動費を見直してください。",

          calculatedTitle:
            "必要販売数を計算しました",

          calculatedMessage:
            "必要販売数は、目標利益を確実に達成できるよう1単位未満を切り上げています。実際の達成可能性は販売期間、市場規模、需要、販売能力などによって異なるため、事業計画とあわせて確認してください。",
        }
      : {
          sectionTitle:
            "Business Numbers",

          sectionSubtitle:
            "Enter your target profit, selling price, variable cost and fixed costs.",

          target:
            "Target Profit",

          targetPlaceholder:
            "Enter target profit",

          price:
            "Selling Price per Unit",

          pricePlaceholder:
            "Enter selling price",

          variable:
            "Variable Cost per Unit",

          variablePlaceholder:
            "Enter variable cost",

          fixed:
            "Fixed Costs",

          fixedPlaceholder:
            "Enter fixed costs",

          reset:
            "Reset Calculator",

          ready:
            "Ready to calculate?",

          readyDescription:
            "Enter your business numbers above to calculate how many sales you need to reach your target profit.",

          units:
            "Units Required",

          revenue:
            "Required Revenue",

          contribution:
            "Contribution Margin",

          ratio:
            "Contribution Margin Ratio",

          invalidTitle:
            "Check Price and Variable Cost",

          invalidMessage:
            "When the selling price is less than or equal to the variable cost, each sale produces no positive contribution margin toward the target profit, so the required number of units cannot be calculated. Review the selling price or variable cost.",

          calculatedTitle:
            "Required Units Calculated",

          calculatedMessage:
            "Required units are rounded up to the next whole unit so the calculated quantity is sufficient to reach the target profit. Actual feasibility depends on factors such as the sales period, market size, demand and sales capacity, so compare the result with your business plan.",
        };

  const insight = useMemo(() => {
    if (!canCalculate) {
      return {
        title: text.invalidTitle,
        icon: "🔴",
        color: "#DC2626",
        message: text.invalidMessage,
      };
    }

    return {
      title: text.calculatedTitle,
      icon: "🔵",
      color: "#2563EB",
      message: text.calculatedMessage,
    };
  }, [
    canCalculate,
    text,
  ]);

  return (
    <>
      <CalculatorContainer>
        <SectionTitle
          title={text.sectionTitle}
          subtitle={
            text.sectionSubtitle
          }
        />

        <div
          style={{
            display: "grid",
            gap: "24px",
          }}
        >
          <NumberInput
            label={text.target}
            placeholder={
              text.targetPlaceholder
            }
            value={targetProfit}
            onChange={(value) =>
              setTargetProfit(
                value === ""
                  ? ""
                  : Math.max(
                      0,
                      value
                    )
              )
            }
            inputRef={targetRef}
            nextRef={priceRef}
          />

          <NumberInput
            label={text.price}
            placeholder={
              text.pricePlaceholder
            }
            value={sellingPrice}
            onChange={(value) =>
              setSellingPrice(
                value === ""
                  ? ""
                  : Math.max(
                      0,
                      value
                    )
              )
            }
            inputRef={priceRef}
            nextRef={variableRef}
          />

          <NumberInput
            label={text.variable}
            placeholder={
              text.variablePlaceholder
            }
            value={variableCost}
            onChange={(value) =>
              setVariableCost(
                value === ""
                  ? ""
                  : Math.max(
                      0,
                      value
                    )
              )
            }
            inputRef={variableRef}
            nextRef={fixedRef}
          />

          <NumberInput
            label={text.fixed}
            placeholder={
              text.fixedPlaceholder
            }
            value={fixedCosts}
            onChange={(value) =>
              setFixedCosts(
                value === ""
                  ? ""
                  : Math.max(
                      0,
                      value
                    )
              )
            }
            inputRef={fixedRef}
          />

          <div
            style={{
              display: "flex",
              justifyContent:
                "flex-end",
              marginTop: "8px",
            }}
          >
            <button
              onClick={() => {
                setTargetProfit("");
                setSellingPrice("");
                setVariableCost("");
                setFixedCosts("");

                targetRef.current?.focus();
              }}
              style={{
                background:
                  "#2563EB",
                color: "#FFFFFF",
                border: "none",
                borderRadius:
                  "12px",
                padding:
                  "14px 28px",
                fontWeight: 700,
                cursor: "pointer",
              }}
            >
              {text.reset}
            </button>
          </div>
        </div>
      </CalculatorContainer>

      {!hasInput && (
        <div
          style={{
            marginTop: "40px",
            padding: "50px",
            borderRadius:
              "20px",
            background:
              "#F9FAFB",
            border:
              "1px solid #E5E7EB",
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontSize: "48px",
            }}
          >
            🎯
          </div>

          <h3
            style={{
              marginTop: "20px",
              fontSize: "26px",
              fontWeight: 700,
              color: "#111827",
            }}
          >
            {text.ready}
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
          {canCalculate && (
            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  "repeat(auto-fit, minmax(240px, 1fr))",
                gap: "20px",
                marginTop: "40px",
              }}
            >
              <ResultCard
                title={text.units}
                value={unitsNeeded.toLocaleString()}
              />

              <ResultCard
                title={text.revenue}
                value={
                  <MoneyValue
                    value={
                      requiredRevenue
                    }
                    currency={
                      currency
                    }
                  />
                }
              />

              <ResultCard
                title={
                  text.contribution
                }
                value={
                  <MoneyValue
                    value={
                      contributionMargin
                    }
                    currency={
                      currency
                    }
                  />
                }
              />

              <ResultCard
                title={text.ratio}
                value={`${contributionRatio.toFixed(
                  1
                )}%`}
              />
            </div>
          )}

          <div
            style={{
              marginTop: "30px",
            }}
          >
            <InsightCard
              {...insight}
            />
          </div>
        </>
      )}
    </>
  );
}