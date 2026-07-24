"use client";

import { useMemo, useRef, useState } from "react";

import NumberInput from "@/components/NumberInput";
import ResultCard from "@/components/ResultCard";
import InsightCard from "@/components/InsightCard";
import MoneyValue from "@/components/MoneyValue";
import CalculatorContainer from "@/components/CalculatorContainer";
import SectionTitle from "@/components/SectionTitle";

type Props = {
  lang?: "en" | "ja";
};

export default function SalesTargetCalculator({
  lang = "en",
}: Props) {
  const [targetProfit, setTargetProfit] = useState<number | "">("");
  const [sellingPrice, setSellingPrice] = useState<number | "">("");
  const [variableCost, setVariableCost] = useState<number | "">("");
  const [fixedCosts, setFixedCosts] = useState<number | "">("");

  const targetRef = useRef<HTMLInputElement>(null);
  const priceRef = useRef<HTMLInputElement>(null);
  const variableRef = useRef<HTMLInputElement>(null);
  const fixedRef = useRef<HTMLInputElement>(null);

  const targetValue = Number(targetProfit) || 0;
  const priceValue = Number(sellingPrice) || 0;
  const variableValue = Number(variableCost) || 0;
  const fixedValue = Number(fixedCosts) || 0;

  const contributionMargin = priceValue - variableValue;

  const unitsNeeded =
    contributionMargin > 0
      ? (targetValue + fixedValue) / contributionMargin
      : 0;

  const requiredRevenue = unitsNeeded * priceValue;

  const contributionRatio =
    priceValue > 0
      ? (contributionMargin / priceValue) * 100
      : 0;

  const hasInput =
    targetProfit !== "" ||
    sellingPrice !== "" ||
    variableCost !== "" ||
    fixedCosts !== "";

  const text =
    lang === "ja"
      ? {
          sectionTitle: "目標設定",

          sectionSubtitle:
            "利益目標・販売価格・変動費・固定費を入力してください。",

          target: "目標利益",

          targetPlaceholder: "目標利益を入力",

          price: "販売価格",

          pricePlaceholder: "販売価格を入力",

          variable: "変動費",

          variablePlaceholder: "変動費を入力",

          fixed: "固定費",

          fixedPlaceholder: "固定費を入力",

          reset: "リセット",

          ready: "売上目標を計算しましょう",

          readyDescription:
            "利益目標を達成するために必要な販売数と売上高を計算します。",

          units: "必要販売数",

          revenue: "必要売上高",

          contribution: "限界利益",

          ratio: "限界利益率",
                  }
      : {
          sectionTitle: "Business Numbers",

          sectionSubtitle:
            "Enter your target profit, selling price, variable cost and fixed costs.",

          target: "Target Profit",

          targetPlaceholder: "Enter target profit",

          price: "Selling Price per Unit",

          pricePlaceholder: "Enter selling price",

          variable: "Variable Cost per Unit",

          variablePlaceholder: "Enter variable cost",

          fixed: "Fixed Costs",

          fixedPlaceholder: "Enter fixed costs",

          reset: "Reset Calculator",

          ready: "Ready to calculate?",

          readyDescription:
            "Enter your business numbers above to calculate how many sales you need to reach your target profit.",

          units: "Units Required",

          revenue: "Required Revenue",

          contribution: "Contribution Margin",

          ratio: "Contribution Margin Ratio",
        };

  const insight = useMemo(() => {
    if (priceValue <= variableValue && hasInput) {
      return {
        title:
          lang === "ja"
            ? "利益を出せません"
            : "No Profit Possible",
        icon: "🔴",
        color: "#DC2626",
        message:
          lang === "ja"
            ? "販売価格が変動費以下のため利益を生み出せません。価格またはコストを見直してください。"
            : "Your selling price is lower than or equal to your variable cost. Increase your price or reduce costs.",
      };
    }

    if (unitsNeeded <= 100) {
      return {
        title:
          lang === "ja"
            ? "達成しやすい目標です"
            : "Achievable Target",
        icon: "🟢",
        color: "#16A34A",
        message:
          lang === "ja"
            ? "比較的少ない販売数で目標利益を達成できます。"
            : "You can reach your target profit with relatively few sales.",
      };
    }

    if (unitsNeeded <= 500) {
      return {
        title:
          lang === "ja"
            ? "現実的な目標です"
            : "Realistic Goal",
        icon: "🔵",
        color: "#2563EB",
        message:
          lang === "ja"
            ? "十分達成可能な販売目標です。"
            : "Your target appears realistic based on your pricing.",
      };
    }

    return {
      title:
        lang === "ja"
          ? "目標が高めです"
          : "Ambitious Target",
      icon: "🟠",
      color: "#EA580C",
      message:
        lang === "ja"
          ? "販売価格やコスト改善も検討すると達成しやすくなります。"
          : "Consider increasing your selling price or reducing costs to reach your goal faster.",
    };
  }, [
    hasInput,
    lang,
    priceValue,
    variableValue,
    unitsNeeded,
  ]);
   return (
    <>
      <CalculatorContainer>
        <SectionTitle
          title={text.sectionTitle}
          subtitle={text.sectionSubtitle}
        />

        <div
          style={{
            display: "grid",
            gap: "24px",
          }}
        >
          <NumberInput
            label={text.target}
            placeholder={text.targetPlaceholder}
            value={targetProfit}
            onChange={(value) =>
              setTargetProfit(
                value === "" ? "" : Math.max(0, value)
              )
            }
            inputRef={targetRef}
            nextRef={priceRef}
          />

          <NumberInput
            label={text.price}
            placeholder={text.pricePlaceholder}
            value={sellingPrice}
            onChange={(value) =>
              setSellingPrice(
                value === "" ? "" : Math.max(0, value)
              )
            }
            inputRef={priceRef}
            nextRef={variableRef}
          />

          <NumberInput
            label={text.variable}
            placeholder={text.variablePlaceholder}
            value={variableCost}
            onChange={(value) =>
              setVariableCost(
                value === "" ? "" : Math.max(0, value)
              )
            }
            inputRef={variableRef}
            nextRef={fixedRef}
          />

          <NumberInput
            label={text.fixed}
            placeholder={text.fixedPlaceholder}
            value={fixedCosts}
            onChange={(value) =>
              setFixedCosts(
                value === "" ? "" : Math.max(0, value)
              )
            }
            inputRef={fixedRef}
          />

          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
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
        </div>
      </CalculatorContainer>
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
          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit,minmax(240px,1fr))",
              gap: "20px",
              marginTop: "40px",
            }}
          >
            <ResultCard
              title={text.units}
              value={unitsNeeded.toFixed(1)}
            />

            <ResultCard
              title={text.revenue}
              value={<MoneyValue value={requiredRevenue} />}
            />

            <ResultCard
              title={text.contribution}
              value={<MoneyValue value={contributionMargin} />}
            />

            <ResultCard
              title={text.ratio}
              value={`${contributionRatio.toFixed(1)}%`}
            />
          </div>

          <div
            style={{
              marginTop: "30px",
            }}
          >
            <InsightCard {...insight} />
          </div>
        </>
      )}
           </>
  );
}