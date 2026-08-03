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

export default function PricingCalculator({
  lang = "en",
}: Props) {
  const currency: Currency =
    lang === "ja" ? "JPY" : "USD";

  const [cost, setCost] =
    useState<number | "">("");

  const [margin, setMargin] =
    useState<number | "">("");

  const [tax, setTax] =
    useState<number | "">("");

  const costRef =
    useRef<HTMLInputElement>(null);

  const marginRef =
    useRef<HTMLInputElement>(null);

  const taxRef =
    useRef<HTMLInputElement>(null);

  const costValue =
    Number(cost) || 0;

  const marginValue =
    Number(margin) || 0;

  const taxValue =
    Number(tax) || 0;

  const sellingPrice =
    marginValue >= 100
      ? 0
      : costValue /
        (1 - marginValue / 100);

  const profitPerUnit =
    sellingPrice - costValue;

  const markup =
    costValue > 0
      ? (profitPerUnit / costValue) *
        100
      : 0;

  const priceWithTax =
    sellingPrice *
    (1 + taxValue / 100);

  const hasInput =
    cost !== "" ||
    margin !== "" ||
    tax !== "";

  const text =
    lang === "ja"
      ? {
          sectionTitle:
            "価格設定情報",

          sectionSubtitle:
            "原価・利益率・税率を入力してください。",

          cost: "原価",

          costPlaceholder:
            "原価を入力",

          margin:
            "希望利益率 (%)",

          marginPlaceholder:
            "利益率を入力",

          tax: "消費税 (%)",

          taxPlaceholder:
            "税率を入力",

          reset: "リセット",

          ready:
            "販売価格を計算しましょう",

          readyDescription:
            "原価と利益率を入力すると最適な販売価格を計算できます。",

          sellingPrice:
            "販売価格",

          profit: "利益",

          markup:
            "原価利益率",

          taxPrice:
            "税込価格",

          excellentTitle:
            "十分な利益があります",

          excellentMessage:
            "利益率が高く、健全な価格設定です。",

          healthyTitle:
            "適切な価格設定",

          healthyMessage:
            "一般的な利益率です。",

          lowTitle:
            "利益率が低めです",

          lowMessage:
            "価格設定を見直すことで利益改善が期待できます。",
        }
      : {
          sectionTitle:
            "Pricing Information",

          sectionSubtitle:
            "Enter your product cost, desired margin and tax rate.",

          cost:
            "Cost per Unit",

          costPlaceholder:
            "Enter cost",

          margin:
            "Desired Margin (%)",

          marginPlaceholder:
            "Enter margin",

          tax:
            "Sales Tax (%)",

          taxPlaceholder:
            "Enter tax",

          reset:
            "Reset Calculator",

          ready:
            "Ready to calculate?",

          readyDescription:
            "Enter your product cost and desired margin to calculate your ideal selling price.",

          sellingPrice:
            "Selling Price",

          profit:
            "Profit per Unit",

          markup:
            "Markup",

          taxPrice:
            "Price Including Tax",

          excellentTitle:
            "Excellent Pricing",

          excellentMessage:
            "Your pricing provides a healthy profit margin.",

          healthyTitle:
            "Good Pricing",

          healthyMessage:
            "Your pricing appears balanced.",

          lowTitle:
            "Low Profit Margin",

          lowMessage:
            "Consider increasing your price or lowering costs.",
        };

  const insight = useMemo(() => {
    if (marginValue >= 40) {
      return {
        title:
          text.excellentTitle,
        icon: "🟢",
        color: "#16A34A",
        message:
          text.excellentMessage,
      };
    }

    if (marginValue >= 20) {
      return {
        title:
          text.healthyTitle,
        icon: "🔵",
        color: "#2563EB",
        message:
          text.healthyMessage,
      };
    }

    return {
      title: text.lowTitle,
      icon: "🟠",
      color: "#EA580C",
      message: text.lowMessage,
    };
  }, [marginValue, text]);

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
            label={text.cost}
            placeholder={
              text.costPlaceholder
            }
            value={cost}
            onChange={(value) =>
              setCost(
                value === ""
                  ? ""
                  : Math.max(
                      0,
                      value
                    )
              )
            }
            inputRef={costRef}
            nextRef={marginRef}
          />

          <NumberInput
            label={text.margin}
            placeholder={
              text.marginPlaceholder
            }
            value={margin}
            onChange={(value) =>
              setMargin(
                value === ""
                  ? ""
                  : Math.max(
                      0,
                      value
                    )
              )
            }
            inputRef={marginRef}
            nextRef={taxRef}
          />

          <NumberInput
            label={text.tax}
            placeholder={
              text.taxPlaceholder
            }
            value={tax}
            onChange={(value) =>
              setTax(
                value === ""
                  ? ""
                  : Math.max(
                      0,
                      value
                    )
              )
            }
            inputRef={taxRef}
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
                setCost("");
                setMargin("");
                setTax("");

                costRef.current?.focus();
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
            💲
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
              title={
                text.sellingPrice
              }
              value={
                <MoneyValue
                  value={
                    sellingPrice
                  }
                  currency={
                    currency
                  }
                />
              }
            />

            <ResultCard
              title={text.profit}
              value={
                <MoneyValue
                  value={
                    profitPerUnit
                  }
                  currency={
                    currency
                  }
                />
              }
            />

            <ResultCard
              title={text.markup}
              value={`${markup.toFixed(
                1
              )}%`}
            />

            <ResultCard
              title={text.taxPrice}
              value={
                <MoneyValue
                  value={
                    priceWithTax
                  }
                  currency={
                    currency
                  }
                />
              }
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