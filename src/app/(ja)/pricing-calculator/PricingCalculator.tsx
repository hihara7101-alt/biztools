
"use client";

import { useRef, useState } from "react";

import CalculatorContainer from "@/components/CalculatorContainer";
import MoneyValue from "@/components/MoneyValue";
import NumberInput from "@/components/NumberInput";

import type { Currency } from "@/lib/currency";

type Language = "en" | "ja";
type NumericInput = number | "";

type Props = {
  lang?: Language;
};

function formatNumber(value: number, lang: Language) {
  return new Intl.NumberFormat(
    lang === "ja" ? "ja-JP" : "en-US",
    {
      maximumFractionDigits: 1,
    }
  ).format(value);
}

function percent(value: number, lang: Language) {
  return `${formatNumber(value, lang)}%`;
}

function Section({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      style={{
        marginTop: "26px",
        padding: "24px",
        border: "1px solid #E5E7EB",
        borderRadius: "18px",
        background: "#F9FAFB",
      }}
    >
      <h3
        style={{
          margin: 0,
          fontSize: "20px",
          fontWeight: 800,
          color: "#111827",
        }}
      >
        {title}
      </h3>

      {description && (
        <p
          style={{
            marginTop: "10px",
            marginBottom: "20px",
            fontSize: "15px",
            lineHeight: 1.8,
            color: "#4B5563",
          }}
        >
          {description}
        </p>
      )}

      {children}
    </section>
  );
}

function ResultBox({
  title,
  children,
  description,
  accent = "#2563EB",
}: {
  title: string;
  children: React.ReactNode;
  description?: string;
  accent?: string;
}) {
  return (
    <div
      style={{
        minWidth: 0,
        padding: "22px",
        border: "1px solid #E5E7EB",
        borderTop: `4px solid ${accent}`,
        borderRadius: "14px",
        background: "#FFFFFF",
      }}
    >
      <div
        style={{
          fontSize: "14px",
          fontWeight: 800,
          color: "#374151",
        }}
      >
        {title}
      </div>

      <div
        style={{
          marginTop: "14px",
          fontSize: "clamp(22px, 3vw, 30px)",
          fontWeight: 900,
          color: "#111827",
          whiteSpace: "nowrap",
          overflowX: "auto",
          fontVariantNumeric: "tabular-nums",
        }}
      >
        {children}
      </div>

      {description && (
        <p
          style={{
            marginTop: "10px",
            marginBottom: 0,
            fontSize: "13px",
            lineHeight: 1.7,
            color: "#6B7280",
          }}
        >
          {description}
        </p>
      )}
    </div>
  );
}

const gridStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns:
    "repeat(auto-fit, minmax(min(100%, 220px), 1fr))",
  gap: "16px",
};

export default function PricingCalculator({
  lang = "en",
}: Props) {
  const currency: Currency =
    lang === "ja" ? "JPY" : "USD";

  const [cost, setCost] = useState<NumericInput>("");
  const [margin, setMargin] = useState<NumericInput>("");
  const [tax, setTax] = useState<NumericInput>("");

  const [proposedPrice, setProposedPrice] =
    useState<NumericInput>("");
  const [discount, setDiscount] =
    useState<NumericInput>("");

  const costRef = useRef<HTMLInputElement>(null);
  const marginRef = useRef<HTMLInputElement>(null);
  const taxRef = useRef<HTMLInputElement>(null);

  const t =
    lang === "ja"
      ? {
          title: "価格設定シミュレーター",
          description:
            "原価と希望利益率から販売価格を算出し、実際の販売価格や値引き後の利益も比較できます。",
          inputTitle: "基本条件",
          cost: "原価（1個あたり・税抜）",
          margin: "希望売上総利益率（%）",
          tax: "消費税率（%）",
          costPlaceholder: "例：4000",
          marginPlaceholder: "例：40",
          taxPlaceholder: "例：10",
          reset: "すべてリセット",
          incomplete:
            "原価と希望売上総利益率を入力してください。税率は任意です。",
          invalidMargin:
            "希望利益率は0%以上100%未満で入力してください。",
          zeroCost:
            "原価が0の場合、希望利益率から販売価格を一意に決めることはできません。原価を確認してください。",
          pricingTitle: "希望利益率から販売価格を計算",
          pricingDescription:
            "利益率は税抜販売価格に対する利益の割合です。原価には販売価格から差し引く対象費用を含めてください。",
          sellingPrice: "必要な税抜販売価格",
          profit: "1個あたり利益",
          actualMargin: "売上総利益率",
          markup: "原価に対するマークアップ率",
          taxPrice: "税込販売価格",
          taxAmount: "消費税相当額",
          reverseTitle: "実際の販売価格を検証",
          reverseDescription:
            "市場価格や競合価格を想定し、その価格で販売した場合の利益率を確認できます。",
          proposedPrice: "検討中の税抜販売価格",
          proposedPlaceholder: "例：6500",
          reverseProfit: "1個あたり利益",
          reverseMargin: "実際の利益率",
          reverseMarkup: "実際のマークアップ率",
          reverseTaxPrice: "税込販売価格",
          reverseEmpty:
            "検討中の販売価格を入力すると結果を表示します。",
          belowCost:
            "販売価格が原価を下回っています。1個販売するごとに損失が発生します。",
          atCost:
            "販売価格と原価が同じため、利益は0です。",
          discountTitle: "値引きシミュレーション",
          discountDescription:
            "検討中の販売価格から値引きした場合の利益への影響を確認します。",
          discount: "値引き率（%）",
          discountPlaceholder: "例：10",
          discountPrice: "値引き後の税抜価格",
          discountProfit: "値引き後の利益",
          discountMargin: "値引き後の利益率",
          profitChange: "値引き前との利益差",
          discountEmpty:
            "販売価格と値引き率を入力すると結果を表示します。",
          invalidDiscount:
            "値引き率は0%以上100%以下で入力してください。",
          notesTitle: "計算上の前提",
          notes:
            "原価・販売価格・利益は税抜で計算します。利益は税抜販売価格から入力原価を引いた金額です。原価に含まれない固定費、販売手数料、送料、広告費などは別途考慮してください。税込価格は単純計算値であり、実際の端数処理や税区分とは異なる場合があります。",
        }
      : {
          title: "Pricing Simulator",
          description:
            "Calculate a selling price from cost and target margin, then evaluate market pricing and discounts.",
          inputTitle: "Basic Assumptions",
          cost: "Cost per Unit (Excluding Tax)",
          margin: "Target Gross Margin (%)",
          tax: "Sales Tax Rate (%)",
          costPlaceholder: "e.g. 40",
          marginPlaceholder: "e.g. 40",
          taxPlaceholder: "e.g. 10",
          reset: "Reset All",
          incomplete:
            "Enter cost and target gross margin. Tax rate is optional.",
          invalidMargin:
            "Target margin must be at least 0% and below 100%.",
          zeroCost:
            "When cost is zero, target margin alone does not determine a unique selling price. Review your cost.",
          pricingTitle: "Price From Target Margin",
          pricingDescription:
            "Margin measures profit as a percentage of the tax-exclusive selling price. Include all relevant per-unit costs in the cost input.",
          sellingPrice: "Required Selling Price",
          profit: "Profit per Unit",
          actualMargin: "Gross Margin",
          markup: "Markup on Cost",
          taxPrice: "Price Including Tax",
          taxAmount: "Tax Amount",
          reverseTitle: "Evaluate a Proposed Selling Price",
          reverseDescription:
            "Test a market or competitor-based price to see the resulting profit and margin.",
          proposedPrice: "Proposed Price (Excluding Tax)",
          proposedPlaceholder: "e.g. 65",
          reverseProfit: "Profit per Unit",
          reverseMargin: "Actual Margin",
          reverseMarkup: "Actual Markup",
          reverseTaxPrice: "Price Including Tax",
          reverseEmpty:
            "Enter a proposed selling price to see the results.",
          belowCost:
            "The selling price is below cost. Each unit sold generates a loss.",
          atCost:
            "Selling price equals cost, so profit is zero.",
          discountTitle: "Discount Simulator",
          discountDescription:
            "See how discounting your proposed selling price affects profit.",
          discount: "Discount Rate (%)",
          discountPlaceholder: "e.g. 10",
          discountPrice: "Discounted Price",
          discountProfit: "Profit After Discount",
          discountMargin: "Margin After Discount",
          profitChange: "Change in Profit per Unit",
          discountEmpty:
            "Enter a proposed price and discount rate to see the results.",
          invalidDiscount:
            "Discount rate must be between 0% and 100%.",
          notesTitle: "Calculation Assumptions",
          notes:
            "Cost, selling price, and profit are calculated excluding tax. Profit is selling price minus the entered cost. Fixed overhead, selling fees, shipping, advertising, and other costs not included in the cost input must be considered separately. Tax-inclusive prices are mathematical estimates; actual rounding and tax treatment may differ.",
        };

  const costValue = Number(cost) || 0;
  const marginValue = Number(margin) || 0;
  const taxValue = Number(tax) || 0;
  const proposedValue = Number(proposedPrice) || 0;
  const discountValue = Number(discount) || 0;

  const hasRequiredInputs =
    cost !== "" && margin !== "";

  const marginValid =
    marginValue >= 0 && marginValue < 100;

  const canCalculate =
    hasRequiredInputs &&
    costValue > 0 &&
    marginValid;

  const sellingPrice = canCalculate
    ? costValue / (1 - marginValue / 100)
    : 0;

  const profit = sellingPrice - costValue;

  const markup =
    costValue > 0
      ? (profit / costValue) * 100
      : 0;

  const actualMargin =
    sellingPrice > 0
      ? (profit / sellingPrice) * 100
      : 0;

  const taxPrice =
    sellingPrice * (1 + taxValue / 100);

  const taxAmount = taxPrice - sellingPrice;

  const hasProposedPrice = proposedPrice !== "";

  const proposedProfit = proposedValue - costValue;

  const proposedMargin =
    proposedValue > 0
      ? (proposedProfit / proposedValue) * 100
      : null;

  const proposedMarkup =
    costValue > 0
      ? (proposedProfit / costValue) * 100
      : 0;

  const proposedTaxPrice =
    proposedValue * (1 + taxValue / 100);

  const discountValid =
    discountValue >= 0 && discountValue <= 100;

  const hasDiscount = discount !== "";

  const discountedPrice =
    proposedValue * (1 - discountValue / 100);

  const discountedProfit =
    discountedPrice - costValue;

  const discountedMargin =
    discountedPrice > 0
      ? (discountedProfit / discountedPrice) * 100
      : null;

  const profitChange =
    discountedProfit - proposedProfit;

  const money = (value: number) => (
    <MoneyValue value={value} currency={currency} />
  );

  const reset = () => {
    setCost("");
    setMargin("");
    setTax("");
    setProposedPrice("");
    setDiscount("");
    costRef.current?.focus();
  };

  return (
    <CalculatorContainer>
      <div style={{ marginBottom: "26px" }}>
        <h2
          style={{
            margin: 0,
            fontSize: "30px",
            fontWeight: 800,
            color: "#111827",
          }}
        >
          {t.title}
        </h2>

        <p
          style={{
            marginTop: "12px",
            fontSize: "16px",
            lineHeight: 1.8,
            color: "#4B5563",
          }}
        >
          {t.description}
        </p>
      </div>

      <Section title={t.inputTitle}>
        <div style={gridStyle}>
          <NumberInput
            label={t.cost}
            placeholder={t.costPlaceholder}
            value={cost}
            onChange={(value) =>
              setCost(
                value === "" ? "" : Math.max(0, value)
              )
            }
            inputRef={costRef}
            nextRef={marginRef}
          />

          <NumberInput
            label={t.margin}
            placeholder={t.marginPlaceholder}
            value={margin}
            onChange={(value) =>
              setMargin(
                value === "" ? "" : Math.max(0, value)
              )
            }
            inputRef={marginRef}
            nextRef={taxRef}
          />

          <NumberInput
            label={t.tax}
            placeholder={t.taxPlaceholder}
            value={tax}
            onChange={(value) =>
              setTax(
                value === "" ? "" : Math.max(0, value)
              )
            }
            inputRef={taxRef}
          />
        </div>

        <button
          type="button"
          onClick={reset}
          style={{
            marginTop: "22px",
            padding: "12px 20px",
            background: "#FFFFFF",
            border: "1px solid #CBD5E1",
            borderRadius: "10px",
            color: "#334155",
            fontWeight: 700,
            cursor: "pointer",
          }}
        >
          {t.reset}
        </button>
      </Section>

      {!hasRequiredInputs && (
        <p
          style={{
            marginTop: "22px",
            padding: "18px",
            background: "#EFF6FF",
            borderRadius: "12px",
            color: "#1D4ED8",
            lineHeight: 1.8,
          }}
        >
          {t.incomplete}
        </p>
      )}

      {hasRequiredInputs && !canCalculate && (
        <p
          role="alert"
          style={{
            marginTop: "22px",
            padding: "18px",
            background: "#FEF2F2",
            border: "1px solid #FECACA",
            borderRadius: "12px",
            color: "#991B1B",
            lineHeight: 1.8,
          }}
        >
          {!marginValid ? t.invalidMargin : t.zeroCost}
        </p>
      )}

      {canCalculate && (
        <>
          <Section
            title={t.pricingTitle}
            description={t.pricingDescription}
          >
            <div style={gridStyle}>
              <ResultBox
                title={t.sellingPrice}
                accent="#059669"
              >
                {money(sellingPrice)}
              </ResultBox>

              <ResultBox title={t.profit}>
                {money(profit)}
              </ResultBox>

              <ResultBox title={t.actualMargin}>
                {percent(actualMargin, lang)}
              </ResultBox>

              <ResultBox title={t.markup}>
                {percent(markup, lang)}
              </ResultBox>

              <ResultBox
                title={t.taxPrice}
                accent="#059669"
              >
                {money(taxPrice)}
              </ResultBox>

              <ResultBox title={t.taxAmount}>
                {money(taxAmount)}
              </ResultBox>
            </div>
          </Section>

          <Section
            title={t.reverseTitle}
            description={t.reverseDescription}
          >
            <NumberInput
              label={t.proposedPrice}
              placeholder={t.proposedPlaceholder}
              value={proposedPrice}
              onChange={(value) =>
                setProposedPrice(
                  value === ""
                    ? ""
                    : Math.max(0, value)
                )
              }
            />

            {!hasProposedPrice ? (
              <p
                style={{
                  marginTop: "18px",
                  color: "#6B7280",
                }}
              >
                {t.reverseEmpty}
              </p>
            ) : (
              <>
                <div
                  style={{
                    ...gridStyle,
                    marginTop: "20px",
                  }}
                >
                  <ResultBox
                    title={t.reverseProfit}
                    accent={
                      proposedProfit >= 0
                        ? "#059669"
                        : "#DC2626"
                    }
                  >
                    {money(proposedProfit)}
                  </ResultBox>

                  <ResultBox title={t.reverseMargin}>
                    {proposedMargin === null
                      ? "—"
                      : percent(proposedMargin, lang)}
                  </ResultBox>

                  <ResultBox title={t.reverseMarkup}>
                    {percent(proposedMarkup, lang)}
                  </ResultBox>

                  <ResultBox title={t.reverseTaxPrice}>
                    {money(proposedTaxPrice)}
                  </ResultBox>
                </div>

                {proposedProfit <= 0 && (
                  <p
                    style={{
                      marginTop: "16px",
                      fontWeight: 700,
                      color:
                        proposedProfit < 0
                          ? "#B91C1C"
                          : "#6B7280",
                    }}
                  >
                    {proposedProfit < 0
                      ? t.belowCost
                      : t.atCost}
                  </p>
                )}
              </>
            )}
          </Section>

          <Section
            title={t.discountTitle}
            description={t.discountDescription}
          >
            <NumberInput
              label={t.discount}
              placeholder={t.discountPlaceholder}
              value={discount}
              onChange={(value) =>
                setDiscount(
                  value === "" ? "" : Math.max(0, value)
                )
              }
            />

            {!hasProposedPrice || !hasDiscount ? (
              <p
                style={{
                  marginTop: "18px",
                  color: "#6B7280",
                }}
              >
                {t.discountEmpty}
              </p>
            ) : !discountValid ? (
              <p
                role="alert"
                style={{
                  marginTop: "18px",
                  color: "#B91C1C",
                  fontWeight: 700,
                }}
              >
                {t.invalidDiscount}
              </p>
            ) : (
              <div
                style={{
                  ...gridStyle,
                  marginTop: "20px",
                }}
              >
                <ResultBox title={t.discountPrice}>
                  {money(discountedPrice)}
                </ResultBox>

                <ResultBox
                  title={t.discountProfit}
                  accent={
                    discountedProfit >= 0
                      ? "#059669"
                      : "#DC2626"
                  }
                >
                  {money(discountedProfit)}
                </ResultBox>

                <ResultBox title={t.discountMargin}>
                  {discountedMargin === null
                    ? "—"
                    : percent(discountedMargin, lang)}
                </ResultBox>

                <ResultBox title={t.profitChange}>
                  {money(profitChange)}
                </ResultBox>
              </div>
            )}
          </Section>

          <Section title={t.notesTitle}>
            <p
              style={{
                margin: 0,
                fontSize: "14px",
                lineHeight: 1.9,
                color: "#4B5563",
              }}
            >
              {t.notes}
            </p>
          </Section>
        </>
      )}
    </CalculatorContainer>
  );
}
