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

export default function ProfitCalculator({
  lang = "en",
}: Props) {
  const [revenue, setRevenue] = useState<number | "">("");
  const [variableCosts, setVariableCosts] = useState<number | "">("");
  const [fixedCosts, setFixedCosts] = useState<number | "">("");

  const revenueRef = useRef<HTMLInputElement>(null);
  const variableRef = useRef<HTMLInputElement>(null);
  const fixedRef = useRef<HTMLInputElement>(null);

  const revenueValue = Number(revenue) || 0;
  const variableValue = Number(variableCosts) || 0;
  const fixedValue = Number(fixedCosts) || 0;

  // -----------------------
  // Calculations
  // -----------------------

  const grossProfit = revenueValue - variableValue;

  const contributionMargin = revenueValue - variableValue;

  const netProfit =
    revenueValue - variableValue - fixedValue;

  const grossMargin =
    revenueValue > 0
      ? (grossProfit / revenueValue) * 100
      : 0;

  const contributionMarginRatio =
    revenueValue > 0
      ? (contributionMargin / revenueValue) * 100
      : 0;

  const netMargin =
    revenueValue > 0
      ? (netProfit / revenueValue) * 100
      : 0;

  const canCalculate = revenue !== "";

  const formatPercent = (value: number) =>
    value.toLocaleString(undefined, {
      minimumFractionDigits: 1,
      maximumFractionDigits: 1,
    }) + "%";

  const text =
    lang === "ja"
      ? {
          sectionTitle: "ビジネス情報",

          sectionSubtitle:
            "売上・変動費・固定費を入力してください。結果はリアルタイムで更新されます。",

          revenue: "売上高",

          revenuePlaceholder: "売上高を入力",

          variableCosts: "変動費（売上原価）",

          variablePlaceholder: "変動費を入力",

          fixedCosts: "固定費",

          fixedPlaceholder: "固定費を入力",

          reset: "↺ リセット",

          ready: "計算を始めましょう",

          readyDescription:
            "売上・変動費・固定費を入力すると、利益・利益率・限界利益をすぐに計算できます。",

          grossProfit: "粗利益",

          grossMargin: "粗利益率",

          contributionMargin: "限界利益",

          contributionMarginRatio: "限界利益率",

          netProfit: "純利益",

          netMargin: "純利益率",

          losingTitle: "赤字です",

          losingMessage:
            "費用が売上を上回っています。価格設定、コスト削減、販売数量を見直しましょう。",

          excellentTitle: "非常に高い利益率",

          excellentMessage:
            "利益率は非常に良好です。このままコスト管理を続けながら事業を拡大しましょう。",

          healthyTitle: "健全な利益率",

          healthyMessage:
            "利益率は健全です。効率改善や売上拡大でさらに利益を伸ばせます。",

          moderateTitle: "平均的な利益率",

          moderateMessage:
            "利益は出ていますが、価格設定やコスト改善でさらに利益率を高められます。",

          lowTitle: "利益率が低い状態",

          lowMessage:
            "利益は出ていますが余裕が少なく、コスト増加で赤字になる可能性があります。",
        }
      : {
          sectionTitle: "Business Numbers",

          sectionSubtitle:
            "Enter your revenue and business costs below. Results update instantly as you type.",

          revenue: "Revenue",

          revenuePlaceholder: "Enter revenue",

          variableCosts: "Variable Costs (COGS)",

          variablePlaceholder: "Enter variable costs",

          fixedCosts: "Fixed Costs",

          fixedPlaceholder: "Enter fixed costs",

          reset: "↺ Reset Calculator",

          ready: "Ready to calculate?",

          readyDescription:
            "Enter your revenue and business costs to calculate profit, margins and contribution margin instantly.",

          grossProfit: "Gross Profit",

          grossMargin: "Gross Margin",

          contributionMargin: "Contribution Margin",

          contributionMarginRatio:
            "Contribution Margin Ratio",

          netProfit: "Net Profit",

          netMargin: "Net Profit Margin",

          losingTitle: "Business is Losing Money",

          losingMessage:
            "Your expenses are higher than your revenue. Review pricing, reduce costs, or increase sales volume.",

          excellentTitle: "Excellent Profit Margin",

          excellentMessage:
            "Your business is performing exceptionally well. Continue monitoring costs while maintaining your pricing strategy.",

          healthyTitle: "Healthy Profit Margin",

          healthyMessage:
            "Your business has a healthy profit margin. Look for opportunities to improve efficiency and continue growing.",

          moderateTitle: "Moderate Profit Margin",

          moderateMessage:
            "Your business is profitable, but there is room for improvement through better pricing or cost control.",

          lowTitle: "Very Low Profit Margin",

          lowMessage:
            "Although your business is profitable, your margin is very small. A slight increase in costs could eliminate your profit.",
        };
          const insight = useMemo(() => {
    if (netProfit < 0) {
      return {
        title: text.losingTitle,
        icon: "🔴",
        color: "#DC2626",
        message: text.losingMessage,
      };
    }

    if (netMargin >= 20) {
      return {
        title: text.excellentTitle,
        icon: "🟢",
        color: "#16A34A",
        message: text.excellentMessage,
      };
    }

    if (netMargin >= 10) {
      return {
        title: text.healthyTitle,
        icon: "🔵",
        color: "#2563EB",
        message: text.healthyMessage,
      };
    }

    if (netMargin >= 5) {
      return {
        title: text.moderateTitle,
        icon: "🟡",
        color: "#D97706",
        message: text.moderateMessage,
      };
    }

    return {
      title: text.lowTitle,
      icon: "🟠",
      color: "#EA580C",
      message: text.lowMessage,
    };
  }, [netMargin, netProfit, text]);

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
            label={text.revenue}
            placeholder={text.revenuePlaceholder}
            value={revenue}
            onChange={(value) =>
              setRevenue(
                value === "" ? "" : Math.max(0, value)
              )
            }
            inputRef={revenueRef}
            nextRef={variableRef}
          />

          <NumberInput
            label={text.variableCosts}
            placeholder={text.variablePlaceholder}
            value={variableCosts}
            onChange={(value) =>
              setVariableCosts(
                value === "" ? "" : Math.max(0, value)
              )
            }
            inputRef={variableRef}
            nextRef={fixedRef}
          />

          <NumberInput
            label={text.fixedCosts}
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
                setRevenue("");
                setVariableCosts("");
                setFixedCosts("");
                revenueRef.current?.focus();
              }}
              style={{
                background: "#2563EB",
                color: "#FFFFFF",
                border: "none",
                borderRadius: "12px",
                padding: "14px 28px",
                fontWeight: 700,
                cursor: "pointer",
                transition: "0.2s",
              }}
            >
              {text.reset}
            </button>
          </div>
        </div>
      </CalculatorContainer>

      {!canCalculate && (
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
            {canCalculate && (
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
              title={text.grossProfit}
              value={<MoneyValue value={grossProfit} />}
            />

            <ResultCard
              title={text.grossMargin}
              value={formatPercent(grossMargin)}
            />

            <ResultCard
              title={text.contributionMargin}
              value={<MoneyValue value={contributionMargin} />}
            />

            <ResultCard
              title={text.contributionMarginRatio}
              value={formatPercent(contributionMarginRatio)}
            />

            <ResultCard
              title={text.netProfit}
              value={<MoneyValue value={netProfit} />}
            />

            <ResultCard
              title={text.netMargin}
              value={formatPercent(netMargin)}
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