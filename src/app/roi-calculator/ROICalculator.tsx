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

export default function ROICalculator({
  lang = "en",
}: Props) {
  const [investment, setInvestment] = useState<number | "">("");
  const [returnAmount, setReturnAmount] = useState<number | "">("");
  const [additionalCosts, setAdditionalCosts] = useState<number | "">("");

  const investmentRef = useRef<HTMLInputElement>(null);
  const returnRef = useRef<HTMLInputElement>(null);
  const additionalRef = useRef<HTMLInputElement>(null);

  const investmentValue = Number(investment) || 0;
  const returnValue = Number(returnAmount) || 0;
  const additionalValue = Number(additionalCosts) || 0;

  const totalInvestment = investmentValue + additionalValue;

  const netProfit = returnValue - totalInvestment;

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
        }
      : {
          sectionTitle: "Investment Information",

          sectionSubtitle:
            "Enter your investment, return and additional costs.",

          investment: "Initial Investment",

          investmentPlaceholder:
            "Enter investment",

          returnAmount: "Return Amount",

          returnPlaceholder:
            "Enter return amount",

          additionalCosts: "Additional Costs",

          additionalPlaceholder:
            "Enter additional costs",

          reset: "Reset Calculator",

          ready: "Ready to calculate ROI?",

          readyDescription:
            "Enter your investment and return above to instantly calculate ROI, profit and investment performance.",

          roi: "ROI",

          netProfit: "Net Profit",

          totalInvestment: "Total Investment",

          multiple: "Investment Multiple",
        };
          const insight = useMemo(() => {
    if (netProfit < 0 && hasInput) {
      return {
        title:
          lang === "ja"
            ? "投資は赤字です"
            : "Investment is Losing Money",
        icon: "🔴",
        color: "#DC2626",
        message:
          lang === "ja"
            ? "投資額を回収できていません。収益を増やすかコストを見直しましょう。"
            : "Your investment has not yet been recovered. Increase returns or reduce costs.",
      };
    }

    if (roi >= 50) {
      return {
        title:
          lang === "ja"
            ? "非常に優れた投資"
            : "Excellent Investment",
        icon: "🟢",
        color: "#16A34A",
        message:
          lang === "ja"
            ? "ROIは非常に高く、優れた投資成果です。"
            : "Your ROI is excellent and indicates a very successful investment.",
      };
    }

    if (roi >= 20) {
      return {
        title:
          lang === "ja"
            ? "良好な投資"
            : "Healthy Investment",
        icon: "🔵",
        color: "#2563EB",
        message:
          lang === "ja"
            ? "十分な利益を生み出しています。"
            : "Your investment is producing a healthy return.",
      };
    }

    if (roi >= 0) {
      return {
        title:
          lang === "ja"
            ? "利益は出ています"
            : "Profitable Investment",
        icon: "🟡",
        color: "#D97706",
        message:
          lang === "ja"
            ? "利益は出ていますが、改善の余地があります。"
            : "Your investment is profitable but still has room for improvement.",
      };
    }

    return {
      title:
        lang === "ja"
          ? "投資効率が低い状態"
          : "Poor Investment Performance",
      icon: "🟠",
      color: "#EA580C",
      message:
        lang === "ja"
          ? "利益率が低いため、投資内容を見直すことをおすすめします。"
          : "The return is low compared to your investment. Consider reviewing this investment.",
    };
  }, [roi, netProfit, hasInput, lang]);

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
            placeholder={text.investmentPlaceholder}
            value={investment}
            onChange={(value) =>
              setInvestment(value === "" ? "" : Math.max(0, value))
            }
            inputRef={investmentRef}
            nextRef={returnRef}
          />

          <NumberInput
            label={text.returnAmount}
            placeholder={text.returnPlaceholder}
            value={returnAmount}
            onChange={(value) =>
              setReturnAmount(value === "" ? "" : Math.max(0, value))
            }
            inputRef={returnRef}
            nextRef={additionalRef}
          />

          <NumberInput
            label={text.additionalCosts}
            placeholder={text.additionalPlaceholder}
            value={additionalCosts}
            onChange={(value) =>
              setAdditionalCosts(value === "" ? "" : Math.max(0, value))
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
                "repeat(auto-fit,minmax(240px,1fr))",
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
              value={<MoneyValue value={netProfit} />}
            />

            <ResultCard
              title={text.totalInvestment}
              value={<MoneyValue value={totalInvestment} />}
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