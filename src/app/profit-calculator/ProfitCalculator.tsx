
"use client";

import { useRef, useState } from "react";

import NumberInput from "@/components/NumberInput";
import MoneyValue from "@/components/MoneyValue";
import CalculatorContainer from "@/components/CalculatorContainer";
import SectionTitle from "@/components/SectionTitle";

import type { Currency } from "@/lib/currency";

type Props = {
  lang?: "en" | "ja";
};

type Amount = number | "";

type Figures = {
  revenue: number;
  variable: number;
  fixed: number;
};

function calculate({
  revenue,
  variable,
  fixed,
}: Figures) {
  const contribution = revenue - variable;
  const profit = contribution - fixed;

  return {
    contribution,
    profit,
    contributionRate:
      revenue > 0
        ? (contribution / revenue) * 100
        : null,
    profitRate:
      revenue > 0
        ? (profit / revenue) * 100
        : null,
  };
}

export default function ProfitCalculator({
  lang = "en",
}: Props) {
  const ja = lang === "ja";

  const currency: Currency = ja ? "JPY" : "USD";

  const [revenue, setRevenue] = useState<Amount>("");
  const [variable, setVariable] = useState<Amount>("");
  const [fixed, setFixed] = useState<Amount>("");

  const [scenarioRevenue, setScenarioRevenue] =
    useState<Amount>("");
  const [scenarioVariable, setScenarioVariable] =
    useState<Amount>("");
  const [scenarioFixed, setScenarioFixed] =
    useState<Amount>("");

  const [compare, setCompare] = useState(false);

  const revenueRef = useRef<HTMLInputElement>(null);
  const variableRef = useRef<HTMLInputElement>(null);
  const fixedRef = useRef<HTMLInputElement>(null);

  const t = ja
    ? {
        heading: "現在の事業数値",
        subheading:
          "同じ期間の売上高・変動費・固定費を入力してください。",
        revenue: "売上高",
        variable: "変動費",
        fixed: "固定費",
        contribution: "限界利益",
        contributionRate: "限界利益率",
        profit: "概算利益",
        profitRate: "概算利益率",
        reset: "すべてリセット",
        ready:
          "3項目を入力すると結果が表示されます。",
        comparison: "シナリオ比較",
        enable: "別の条件と比較する",
        close: "比較シミュレーションを閉じる",
        description:
          "売上やコストを変更した場合、利益がどのくらい変わるか比較できます。",
        scenario: "比較する事業数値",
        scenarioHelp:
          "現在の数値をコピーしてから、変更したい項目だけ調整できます。",
        copy: "現在の数値をコピー",
        current: "現在",
        alternative: "比較案",
        change:
          "概算利益の差額（比較案 − 現在）",
        higher:
          "比較案の概算利益が増えています。",
        lower:
          "比較案の概算利益が減っています。",
        same:
          "両方の概算利益は同じです。",
        missing:
          "現在と比較案の3項目をすべて入力すると比較結果が表示されます。",
        assumptions: "計算の前提",
        note:
          "限界利益＝売上高−変動費、概算利益＝限界利益−固定費。利益率は売上高に対する割合です。この概算利益は会計上の純利益ではありません。未入力の費用、税金、金利、減価償却などは別途考慮してください。両案は同じ期間・同じ費用区分で比較してください。",
        warning:
          "変動費が売上高を超えています。入力内容を確認してください（計算はそのまま表示しています）。",
      }
    : {
        heading: "Current business figures",
        subheading:
          "Enter revenue, variable costs and fixed costs for the same period.",
        revenue: "Revenue",
        variable: "Variable costs",
        fixed: "Fixed costs",
        contribution: "Contribution Margin",
        contributionRate:
          "Contribution Margin Ratio",
        profit: "Estimated Profit",
        profitRate: "Estimated Profit Margin",
        reset: "Reset All",
        ready:
          "Enter all three figures to see your results.",
        comparison: "Scenario Comparison",
        enable: "Compare Another Scenario",
        close: "Close Scenario Comparison",
        description:
          "See how changes in revenue and costs affect your estimated profit.",
        scenario: "Alternative business figures",
        scenarioHelp:
          "Copy your current figures, then change only the assumptions you want to test.",
        copy: "Copy Current Figures",
        current: "Current",
        alternative: "Alternative",
        change:
          "Estimated Profit Difference (Alternative − Current)",
        higher:
          "Estimated profit increases in the alternative scenario.",
        lower:
          "Estimated profit decreases in the alternative scenario.",
        same:
          "Estimated profit is unchanged.",
        missing:
          "Enter all three figures for both scenarios to see the comparison.",
        assumptions: "Calculation Assumptions",
        note:
          "Contribution margin = revenue − variable costs; estimated profit = contribution margin − fixed costs. Ratios are percentages of revenue. Estimated profit is not accounting net income. Allow separately for omitted expenses, taxes, interest and depreciation. Compare the same period and cost categories in both scenarios.",
        warning:
          "Variable costs exceed revenue. Check the inputs (the calculated result is shown as entered).",
      };

  const current = calculate({
    revenue: Number(revenue) || 0,
    variable: Number(variable) || 0,
    fixed: Number(fixed) || 0,
  });

  const alternative = calculate({
    revenue: Number(scenarioRevenue) || 0,
    variable: Number(scenarioVariable) || 0,
    fixed: Number(scenarioFixed) || 0,
  });

  const currentReady =
    revenue !== "" &&
    variable !== "" &&
    fixed !== "";

  const alternativeReady =
    scenarioRevenue !== "" &&
    scenarioVariable !== "" &&
    scenarioFixed !== "";

  const difference =
    alternative.profit - current.profit;

  const percent = (n: number | null) =>
    n === null
      ? "—"
      : `${n.toLocaleString(
          ja ? "ja-JP" : "en-US",
          {
            maximumFractionDigits: 1,
            minimumFractionDigits: 1,
          }
        )}%`;

  const money = (n: number) => (
    <MoneyValue value={n} currency={currency} />
  );

  function copyCurrent() {
    setScenarioRevenue(revenue);
    setScenarioVariable(variable);
    setScenarioFixed(fixed);
  }

  function reset() {
    setRevenue("");
    setVariable("");
    setFixed("");

    setScenarioRevenue("");
    setScenarioVariable("");
    setScenarioFixed("");

    setCompare(false);
    revenueRef.current?.focus();
  }

  function ResultBox({
    title,
    value,
    isMoney = false,
  }: {
    title: string;
    value: React.ReactNode;
    isMoney?: boolean;
  }) {
    return (
      <div
        style={{
          minWidth: 0,
          padding: "20px",
          background: "#FFFFFF",
          border: "1px solid #E2E8F0",
          borderRadius: "14px",
          boxShadow:
            "0 2px 8px rgba(15,23,42,0.04)",
        }}
      >
        <div
          style={{
            fontSize: "13px",
            fontWeight: 700,
            color: "#64748B",
            marginBottom: "12px",
          }}
        >
          {title}
        </div>

        <div
          style={{
            fontSize: "clamp(19px, 2.5vw, 26px)",
            fontWeight: 800,
            color: isMoney ? "#16A34A" : "#2563EB",
            whiteSpace: "nowrap",
            overflowX: "auto",
            maxWidth: "100%",
            fontVariantNumeric: "tabular-nums",
          }}
        >
          {value}
        </div>
      </div>
    );
  }

  return (
    <>
      <CalculatorContainer>
        <SectionTitle
          title={t.heading}
          subtitle={t.subheading}
        />

        <NumberInput
          label={t.revenue}
          placeholder={t.revenue}
          value={revenue}
          onChange={setRevenue}
          inputRef={revenueRef}
          nextRef={variableRef}
        />

        <NumberInput
          label={t.variable}
          placeholder={t.variable}
          value={variable}
          onChange={setVariable}
          inputRef={variableRef}
          nextRef={fixedRef}
        />

        <NumberInput
          label={t.fixed}
          placeholder={t.fixed}
          value={fixed}
          onChange={setFixed}
          inputRef={fixedRef}
        />

        <button
          type="button"
          onClick={reset}
          style={{
            padding: "12px 20px",
            borderRadius: "10px",
            border: "1px solid #CBD5E1",
            background: "#FFFFFF",
            cursor: "pointer",
            fontWeight: 600,
          }}
        >
          {t.reset}
        </button>
      </CalculatorContainer>

      {!currentReady ? (
        <p
          style={{
            marginTop: "24px",
            color: "#64748B",
          }}
        >
          {t.ready}
        </p>
      ) : (
        <section style={{ marginTop: "32px" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit,minmax(min(100%,220px),1fr))",
              gap: "16px",
            }}
          >
            <ResultBox
              title={t.contribution}
              value={money(current.contribution)}
              isMoney
            />

            <ResultBox
              title={t.contributionRate}
              value={percent(current.contributionRate)}
            />

            <ResultBox
              title={t.profit}
              value={money(current.profit)}
              isMoney
            />

            <ResultBox
              title={t.profitRate}
              value={percent(current.profitRate)}
            />
          </div>

          {Number(variable) > Number(revenue) && (
            <p
              style={{
                color: "#B45309",
                marginTop: "16px",
              }}
            >
              {t.warning}
            </p>
          )}
        </section>
      )}

      <section
        style={{
          marginTop: "44px",
          padding: "28px",
          border: "1px solid #DBEAFE",
          borderRadius: "18px",
          background: "#F8FAFF",
        }}
      >
        <h2
          style={{
            fontSize: "26px",
            fontWeight: 800,
            marginBottom: "12px",
            color: "#111827",
          }}
        >
          {t.comparison}
        </h2>

        <p
          style={{
            color: "#475569",
            fontSize: "16px",
            lineHeight: 1.8,
            marginBottom: "22px",
          }}
        >
          {t.description}
        </p>

        <button
          type="button"
          aria-expanded={compare}
          onClick={() => {
            if (!compare && currentReady && !alternativeReady) {
              copyCurrent();
            }

            setCompare(!compare);
          }}
          style={{
            display: "flex",
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            gap: "12px",
            padding: "20px 24px",
            background: compare ? "#1D4ED8" : "#2563EB",
            color: "#FFFFFF",
            border: "none",
            borderRadius: "14px",
            cursor: "pointer",
            fontSize: "18px",
            fontWeight: 800,
            boxShadow:
              "0 6px 16px rgba(37,99,235,0.2)",
          }}
        >
          <span aria-hidden="true">⇄</span>

          {compare ? t.close : t.enable}

          <span aria-hidden="true">
            {compare ? "▲" : "▼"}
          </span>
        </button>

        {compare && (
          <div style={{ marginTop: "30px" }}>
            <h3
              style={{
                fontSize: "21px",
                fontWeight: 700,
                marginBottom: "10px",
              }}
            >
              {t.scenario}
            </h3>

            <p
              style={{
                marginBottom: "20px",
                color: "#64748B",
                lineHeight: 1.8,
              }}
            >
              {t.scenarioHelp}
            </p>

            <button
              type="button"
              onClick={copyCurrent}
              style={{
                padding: "12px 18px",
                marginBottom: "22px",
                border: "1px solid #93C5FD",
                borderRadius: "10px",
                background: "#EFF6FF",
                color: "#1D4ED8",
                fontWeight: 700,
                cursor: "pointer",
              }}
            >
              {t.copy}
            </button>

            <NumberInput
              label={t.revenue}
              placeholder={t.revenue}
              value={scenarioRevenue}
              onChange={setScenarioRevenue}
            />

            <NumberInput
              label={t.variable}
              placeholder={t.variable}
              value={scenarioVariable}
              onChange={setScenarioVariable}
            />

            <NumberInput
              label={t.fixed}
              placeholder={t.fixed}
              value={scenarioFixed}
              onChange={setScenarioFixed}
            />

            {!currentReady || !alternativeReady ? (
              <p>{t.missing}</p>
            ) : (
              <div style={{ marginTop: "28px" }}>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns:
                      "repeat(auto-fit,minmax(min(100%,220px),1fr))",
                    gap: "16px",
                  }}
                >
                  <ResultBox
                    title={`${t.current}: ${t.profit}`}
                    value={money(current.profit)}
                    isMoney
                  />

                  <ResultBox
                    title={`${t.alternative}: ${t.profit}`}
                    value={money(alternative.profit)}
                    isMoney
                  />

                  <ResultBox
                    title={`${t.current}: ${t.profitRate}`}
                    value={percent(current.profitRate)}
                  />

                  <ResultBox
                    title={`${t.alternative}: ${t.profitRate}`}
                    value={percent(alternative.profitRate)}
                  />
                </div>

                <div
                  aria-live="polite"
                  style={{
                    marginTop: "24px",
                    padding: "24px",
                    background: "#EFF6FF",
                    border: "1px solid #BFDBFE",
                    borderRadius: "14px",
                  }}
                >
                  <div
                    style={{
                      fontSize: "15px",
                      fontWeight: 700,
                      color: "#1E40AF",
                      marginBottom: "10px",
                    }}
                  >
                    {t.change}
                  </div>

                  <div
                    style={{
                      fontSize: "clamp(22px,3vw,30px)",
                      fontWeight: 800,
                      color:
                        difference >= 0
                          ? "#16A34A"
                          : "#DC2626",
                      whiteSpace: "nowrap",
                      overflowX: "auto",
                    }}
                  >
                    {difference > 0 ? "+" : ""}
                    {money(difference)}
                  </div>

                  <p
                    style={{
                      marginTop: "12px",
                      color: "#334155",
                    }}
                  >
                    {difference > 0
                      ? t.higher
                      : difference < 0
                        ? t.lower
                        : t.same}
                  </p>
                </div>

                {Number(scenarioVariable) >
                  Number(scenarioRevenue) && (
                  <p
                    style={{
                      color: "#B45309",
                      marginTop: "16px",
                    }}
                  >
                    {t.warning}
                  </p>
                )}
              </div>
            )}
          </div>
        )}
      </section>

      <section
        style={{
          marginTop: "28px",
          padding: "24px",
          background: "#F8FAFC",
          borderRadius: "14px",
        }}
      >
        <h2
          style={{
            fontSize: "20px",
            fontWeight: 700,
          }}
        >
          {t.assumptions}
        </h2>

        <p
          style={{
            lineHeight: 1.8,
            marginTop: "12px",
            color: "#475569",
          }}
        >
          {t.note}
        </p>
      </section>
    </>
  );
}
