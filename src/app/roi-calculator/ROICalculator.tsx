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

export default function ROICalculator({
  lang = "en",
}: Props) {
  const currency: Currency =
    lang === "ja" ? "JPY" : "USD";

  const [investment, setInvestment] =
    useState<number | "">("");

  const [returnAmount, setReturnAmount] =
    useState<number | "">("");

  const [additionalCosts, setAdditionalCosts] =
    useState<number | "">("");

  const investmentRef =
    useRef<HTMLInputElement>(null);

  const returnRef =
    useRef<HTMLInputElement>(null);

  const additionalRef =
    useRef<HTMLInputElement>(null);

  const investmentValue =
    Number(investment) || 0;

  const returnValue =
    Number(returnAmount) || 0;

  const additionalValue =
    Number(additionalCosts) || 0;

  const totalInvestment =
    investmentValue + additionalValue;

  const netProfit =
    returnValue - totalInvestment;

  const roi =
    totalInvestment > 0
      ? (netProfit / totalInvestment) * 100
      : 0;

  const multiple =
    totalInvestment > 0
      ? returnValue / totalInvestment
      : 0;

  const hasInput =
    investment !== "" ||
    returnAmount !== "" ||
    additionalCosts !== "";

  const hasInvestment =
    totalInvestment > 0;

  const text =
    lang === "ja"
      ? {
          sectionTitle: "投資情報",

          sectionSubtitle:
            "投資額・回収額・追加費用を入力してください。",

          investment: "初期投資額",

          investmentPlaceholder:
            "初期投資額を入力",

          returnAmount: "回収額",

          returnPlaceholder:
            "回収額を入力",

          additionalCosts: "追加費用",

          additionalPlaceholder:
            "追加費用を入力",

          reset: "リセット",

          ready: "ROIを計算しましょう",

          readyDescription:
            "投資額と回収額を入力するとROI・利益・投資倍率をすぐに計算できます。",

          roi: "ROI",

          netProfit: "純利益",

          totalInvestment: "総投資額",

          multiple: "投資倍率",

          missingInvestmentTitle:
            "投資額を入力してください",

          missingInvestmentMessage:
            "ROIを計算するには、初期投資額または追加費用による総投資額が必要です。",

          negativeTitle:
            "純利益がマイナスです",

          negativeMessage:
            "現在の入力条件では回収額が総投資額を下回っています。ROIは投資期間やリスクなどを含まないため、結果は他の条件とあわせて確認してください。",

          breakEvenTitle:
            "投資額と回収額が同額です",

          breakEvenMessage:
            "現在の入力条件では純利益が0で、ROIは0%です。投資期間、リスク、資金回収のタイミングなどもあわせて検討してください。",

          positiveTitle:
            "純利益がプラスです",

          positiveMessage:
            "現在の入力条件では回収額が総投資額を上回っています。ROIの評価は投資期間、リスク、資金回収のタイミング、代替投資などによって異なるため、これらの条件とあわせて確認してください。",
        }
      : {
          sectionTitle:
            "Investment Information",

          sectionSubtitle:
            "Enter your investment, return and additional costs.",

          investment:
            "Initial Investment",

          investmentPlaceholder:
            "Enter investment",

          returnAmount:
            "Return Amount",

          returnPlaceholder:
            "Enter return amount",

          additionalCosts:
            "Additional Costs",

          additionalPlaceholder:
            "Enter additional costs",

          reset:
            "Reset Calculator",

          ready:
            "Ready to calculate ROI?",

          readyDescription:
            "Enter your investment and return above to calculate ROI, profit and investment multiple.",

          roi: "ROI",

          netProfit:
            "Net Profit",

          totalInvestment:
            "Total Investment",

          multiple:
            "Investment Multiple",

          missingInvestmentTitle:
            "Enter an Investment Amount",

          missingInvestmentMessage:
            "A total investment amount is required to calculate ROI. Enter an initial investment or additional costs.",

          negativeTitle:
            "Net Profit Is Negative",

          negativeMessage:
            "Under the current inputs, the return amount is below the total investment. ROI does not account for factors such as investment period or risk, so consider the result together with those factors.",

          breakEvenTitle:
            "Return Equals Investment",

          breakEvenMessage:
            "Under the current inputs, net profit is zero and ROI is 0%. Also consider investment period, risk and the timing of cash recovery.",

          positiveTitle:
            "Net Profit Is Positive",

          positiveMessage:
            "Under the current inputs, the return amount exceeds the total investment. How an ROI should be evaluated depends on factors such as investment period, risk, timing of cash recovery and alternative investments.",
        };

  const insight = useMemo(() => {
    if (!hasInvestment) {
      return {
        title:
          text.missingInvestmentTitle,
        icon: "🔵",
        color: "#2563EB",
        message:
          text.missingInvestmentMessage,
      };
    }

    if (netProfit < 0) {
      return {
        title: text.negativeTitle,
        icon: "🔴",
        color: "#DC2626",
        message:
          text.negativeMessage,
      };
    }

    if (netProfit === 0) {
      return {
        title: text.breakEvenTitle,
        icon: "🔵",
        color: "#2563EB",
        message:
          text.breakEvenMessage,
      };
    }

    return {
      title: text.positiveTitle,
      icon: "🟢",
      color: "#16A34A",
      message:
        text.positiveMessage,
    };
  }, [
    hasInvestment,
    netProfit,
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
            label={text.investment}
            placeholder={
              text.investmentPlaceholder
            }
            value={investment}
            onChange={(value) =>
              setInvestment(
                value === ""
                  ? ""
                  : Math.max(0, value)
              )
            }
            inputRef={investmentRef}
            nextRef={returnRef}
          />

          <NumberInput
            label={text.returnAmount}
            placeholder={
              text.returnPlaceholder
            }
            value={returnAmount}
            onChange={(value) =>
              setReturnAmount(
                value === ""
                  ? ""
                  : Math.max(0, value)
              )
            }
            inputRef={returnRef}
            nextRef={additionalRef}
          />

          <NumberInput
            label={text.additionalCosts}
            placeholder={
              text.additionalPlaceholder
            }
            value={additionalCosts}
            onChange={(value) =>
              setAdditionalCosts(
                value === ""
                  ? ""
                  : Math.max(0, value)
              )
            }
            inputRef={additionalRef}
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
                setInvestment("");
                setReturnAmount("");
                setAdditionalCosts("");

                investmentRef.current?.focus();
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
            📈
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
                "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "20px",
              marginTop: "40px",
            }}
          >
            <ResultCard
              title={text.roi}
              value={`${roi.toFixed(1)}%`}
            />

            <ResultCard
              title={text.netProfit}
              value={
                <MoneyValue
                  value={netProfit}
                  currency={currency}
                />
              }
            />

            <ResultCard
              title={text.totalInvestment}
              value={
                <MoneyValue
                  value={totalInvestment}
                  currency={currency}
                />
              }
            />

            <ResultCard
              title={text.multiple}
              value={`${multiple.toFixed(2)}×`}
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