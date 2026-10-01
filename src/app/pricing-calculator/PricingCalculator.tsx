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

  const isMarginValid =
    marginValue < 100;

  const sellingPrice =
    isMarginValid
      ? costValue /
        (1 - marginValue / 100)
      : 0;

  const profitPerUnit =
    isMarginValid
      ? sellingPrice - costValue
      : 0;

  const markup =
    isMarginValid && costValue > 0
      ? (profitPerUnit / costValue) * 100
      : 0;

  const priceWithTax =
    isMarginValid
      ? sellingPrice *
        (1 + taxValue / 100)
      : 0;

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
            "原価と希望利益率を入力すると、販売価格・利益・原価利益率を計算できます。",

          sellingPrice:
            "販売価格",

          profit: "利益",

          markup:
            "原価利益率",

          taxPrice:
            "税込価格",

          invalidTitle:
            "希望利益率を確認してください",

          invalidMessage:
            "希望利益率は100%未満で入力してください。利益率が100%の場合、販売価格の全額が利益になる計算となるため、有限の販売価格を算出できません。",

          calculatedTitle:
            "価格を計算しました",

          calculatedMessage:
            "入力した原価と希望利益率から販売価格を計算しています。適切な利益率は業種、商品、競合、販売数量などによって異なるため、実際の価格設定では市場環境や事業計画とあわせて確認してください。",
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
            "Enter your product cost and desired margin to calculate selling price, profit and markup.",

          sellingPrice:
            "Selling Price",

          profit:
            "Profit per Unit",

          markup:
            "Markup",

          taxPrice:
            "Price Including Tax",

          invalidTitle:
            "Check Your Desired Margin",

          invalidMessage:
            "Enter a desired margin below 100%. At a 100% margin, the entire selling price would need to be profit, so a finite selling price cannot be calculated.",

          calculatedTitle:
            "Price Calculated",

          calculatedMessage:
            "The selling price is calculated from the cost and desired margin you entered. Appropriate margins vary by industry, product, competition and sales volume, so consider the result together with your market conditions and business plan.",
        };

  const insight = useMemo(() => {
    if (!isMarginValid) {
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
    isMarginValid,
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
          {isMarginValid && (
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