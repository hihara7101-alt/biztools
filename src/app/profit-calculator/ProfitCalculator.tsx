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

export default function ProfitCalculator({
  lang = "en",
}: Props) {
  const currency: Currency =
    lang === "ja" ? "JPY" : "USD";

  const [revenue, setRevenue] =
    useState<number | "">("");

  const [variableCosts, setVariableCosts] =
    useState<number | "">("");

  const [fixedCosts, setFixedCosts] =
    useState<number | "">("");

  const revenueRef =
    useRef<HTMLInputElement>(null);

  const variableRef =
    useRef<HTMLInputElement>(null);

  const fixedRef =
    useRef<HTMLInputElement>(null);

  const revenueValue =
    Number(revenue) || 0;

  const variableValue =
    Number(variableCosts) || 0;

  const fixedValue =
    Number(fixedCosts) || 0;

  const grossProfit =
    revenueValue - variableValue;

  const netProfit =
    revenueValue -
    variableValue -
    fixedValue;

  const grossMargin =
    revenueValue > 0
      ? (grossProfit / revenueValue) * 100
      : 0;

  const netMargin =
    revenueValue > 0
      ? (netProfit / revenueValue) * 100
      : 0;

  const canCalculate =
    revenue !== "";

  const formatPercent = (
    value: number
  ) =>
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

          revenuePlaceholder:
            "売上高を入力",

          variableCosts:
            "変動費（売上原価）",

          variablePlaceholder:
            "変動費を入力",

          fixedCosts: "固定費",

          fixedPlaceholder:
            "固定費を入力",

          reset: "↺ リセット",

          ready:
            "計算を始めましょう",

          readyDescription:
            "売上・変動費・固定費を入力すると、粗利益・純利益・利益率をすぐに計算できます。",

          grossProfit: "粗利益",

          grossMargin: "粗利益率",

          netProfit: "純利益",

          netMargin: "純利益率",

          losingTitle:
            "費用が売上を上回っています",

          losingMessage:
            "現在の入力条件では純利益がマイナスです。価格、売上、変動費、固定費を変更して結果を比較できます。",

          profitableTitle:
            "純利益がプラスです",

          profitableMessage:
            "現在の入力条件では利益が出ています。利益率は業種、事業規模、成長段階などによって適切な水準が異なるため、過去の実績や事業計画と比較して確認してください。",

          breakEvenTitle:
            "収支が均衡しています",

          breakEvenMessage:
            "現在の入力条件では純利益が0です。売上の増加やコストの変化が利益にどのように影響するか比較してみましょう。",
        }
      : {
          sectionTitle:
            "Business Numbers",

          sectionSubtitle:
            "Enter your revenue and business costs below. Results update instantly as you type.",

          revenue: "Revenue",

          revenuePlaceholder:
            "Enter revenue",

          variableCosts:
            "Variable Costs (COGS)",

          variablePlaceholder:
            "Enter variable costs",

          fixedCosts:
            "Fixed Costs",

          fixedPlaceholder:
            "Enter fixed costs",

          reset:
            "↺ Reset Calculator",

          ready:
            "Ready to calculate?",

          readyDescription:
            "Enter your revenue and business costs to calculate gross profit, net profit and profit margins instantly.",

          grossProfit:
            "Gross Profit",

          grossMargin:
            "Gross Margin",

          netProfit:
            "Net Profit",

          netMargin:
            "Net Profit Margin",

          losingTitle:
            "Expenses Exceed Revenue",

          losingMessage:
            "Under the current inputs, net profit is negative. Change your pricing, revenue, variable costs or fixed costs to compare different scenarios.",

          profitableTitle:
            "Net Profit Is Positive",

          profitableMessage:
            "Under the current inputs, the business is generating a profit. Appropriate profit margins vary by industry, business size and stage, so compare the result with your historical performance and business plan.",

          breakEvenTitle:
            "Revenue and Costs Are Equal",

          breakEvenMessage:
            "Under the current inputs, net profit is zero. Try changing revenue or costs to see how different assumptions affect profitability.",
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

    if (netProfit > 0) {
      return {
        title: text.profitableTitle,
        icon: "🟢",
        color: "#16A34A",
        message: text.profitableMessage,
      };
    }

    return {
      title: text.breakEvenTitle,
      icon: "🔵",
      color: "#2563EB",
      message: text.breakEvenMessage,
    };
  }, [
    netProfit,
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
            label={text.revenue}
            placeholder={
              text.revenuePlaceholder
            }
            value={revenue}
            onChange={(value) =>
              setRevenue(
                value === ""
                  ? ""
                  : Math.max(
                      0,
                      value
                    )
              )
            }
            inputRef={revenueRef}
            nextRef={variableRef}
          />

          <NumberInput
            label={
              text.variableCosts
            }
            placeholder={
              text.variablePlaceholder
            }
            value={variableCosts}
            onChange={(value) =>
              setVariableCosts(
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
            label={text.fixedCosts}
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
                setRevenue("");
                setVariableCosts("");
                setFixedCosts("");

                revenueRef.current?.focus();
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
              title={
                text.grossProfit
              }
              value={
                <MoneyValue
                  value={
                    grossProfit
                  }
                  currency={
                    currency
                  }
                />
              }
            />

            <ResultCard
              title={
                text.grossMargin
              }
              value={formatPercent(
                grossMargin
              )}
            />

            <ResultCard
              title={
                text.netProfit
              }
              value={
                <MoneyValue
                  value={netProfit}
                  currency={
                    currency
                  }
                />
              }
            />

            <ResultCard
              title={
                text.netMargin
              }
              value={formatPercent(
                netMargin
              )}
            />
          </div>

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