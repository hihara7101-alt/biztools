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

export default function BreakEvenCalculator({
  lang = "en",
}: Props) {
  const [price, setPrice] = useState<number | "">("");
  const [variableCost, setVariableCost] = useState<number | "">("");
  const [fixedCost, setFixedCost] = useState<number | "">("");

  const priceRef = useRef<HTMLInputElement>(null);
  const variableRef = useRef<HTMLInputElement>(null);
  const fixedRef = useRef<HTMLInputElement>(null);

  const priceValue = Number(price) || 0;
  const variableValue = Number(variableCost) || 0;
  const fixedValue = Number(fixedCost) || 0;

  const contributionMargin = priceValue - variableValue;

  const contributionMarginRatio =
    priceValue > 0
      ? (contributionMargin / priceValue) * 100
      : 0;

  const breakEvenUnits =
    contributionMargin > 0
      ? fixedValue / contributionMargin
      : 0;

  const breakEvenRevenue =
    breakEvenUnits * priceValue;

  const hasInput =
    price !== "" ||
    variableCost !== "" ||
    fixedCost !== "";

  const text =
    lang === "ja"
      ? {
          sectionTitle: "ビジネス情報",
          sectionSubtitle:
            "販売価格・変動費・固定費を入力してください。",

          price: "販売価格（1個あたり）",
          pricePlaceholder: "販売価格を入力",

          variable: "変動費（1個あたり）",
          variablePlaceholder: "変動費を入力",

          fixed: "固定費",
          fixedPlaceholder: "固定費を入力",

          reset: "リセット",

          ready: "損益分岐点を計算しましょう",

          readyDescription:
            "価格・変動費・固定費を入力すると、損益分岐点をすぐに計算できます。",

          units: "損益分岐点販売数",

          revenue: "損益分岐点売上",

          contribution: "限界利益",

          ratio: "限界利益率",

          impossibleTitle: "損益分岐点は計算できません",

          impossibleMessage:
            "販売価格が変動費以下のため、利益を出すことができません。価格設定またはコストを見直してください。",

          excellentTitle: "非常に良い損益分岐点",

          excellentMessage:
            "比較的少ない販売数で利益が出始めます。",

          healthyTitle: "健全なビジネスモデル",

          healthyMessage:
            "損益分岐点は一般的な範囲です。",

          highTitle: "固定費が高めです",

          highMessage:
            "固定費または変動費を見直すことで利益が出やすくなります。",
        }
      : {
          sectionTitle: "Business Numbers",
          sectionSubtitle:
            "Enter your selling price, variable cost and fixed costs.",

          price: "Selling Price per Unit",
          pricePlaceholder: "Enter selling price",

          variable: "Variable Cost per Unit",
          variablePlaceholder: "Enter variable cost",

          fixed: "Fixed Costs",
          fixedPlaceholder: "Enter fixed costs",

          reset: "Reset Calculator",

          ready: "Ready to calculate?",

          readyDescription:
            "Enter your business numbers above to calculate your break-even point instantly.",

          units: "Break-even Units",

          revenue: "Break-even Revenue",

          contribution: "Contribution Margin",

          ratio: "Contribution Margin Ratio",

          impossibleTitle: "Break-even is Impossible",

          impossibleMessage:
            "Your selling price is less than or equal to your variable cost. Increase your price or reduce costs.",

          excellentTitle: "Excellent Break-even Point",

          excellentMessage:
            "You can become profitable after selling relatively few units.",

          healthyTitle: "Healthy Business Model",

          healthyMessage:
            "Your break-even point appears reasonable.",

          highTitle: "High Break-even Point",

          highMessage:
            "Reducing fixed or variable costs could significantly improve profitability.",
        };
          const insight = useMemo(() => {
    if (priceValue <= variableValue && hasInput) {
      return {
        title: text.impossibleTitle,
        icon: "🔴",
        color: "#DC2626",
        message: text.impossibleMessage,
      };
    }

    if (breakEvenUnits <= 100) {
      return {
        title: text.excellentTitle,
        icon: "🟢",
        color: "#16A34A",
        message: text.excellentMessage,
      };
    }

    if (breakEvenUnits <= 500) {
      return {
        title: text.healthyTitle,
        icon: "🔵",
        color: "#2563EB",
        message: text.healthyMessage,
      };
    }

    return {
      title: text.highTitle,
      icon: "🟠",
      color: "#EA580C",
      message: text.highMessage,
    };
  }, [
    breakEvenUnits,
    hasInput,
    priceValue,
    variableValue,
    text,
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
            label={text.price}
            placeholder={text.pricePlaceholder}
            value={price}
            onChange={(value) =>
              setPrice(value === "" ? "" : Math.max(0, value))
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
            value={fixedCost}
            onChange={(value) =>
              setFixedCost(
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
                setPrice("");
                setVariableCost("");
                setFixedCost("");
                priceRef.current?.focus();
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
              value={breakEvenUnits.toFixed(1)}
            />

            <ResultCard
              title={text.revenue}
              value={<MoneyValue value={breakEvenRevenue} />}
            />

            <ResultCard
              title={text.contribution}
              value={<MoneyValue value={contributionMargin} />}
            />

            <ResultCard
              title={text.ratio}
              value={`${contributionMarginRatio.toFixed(1)}%`}
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