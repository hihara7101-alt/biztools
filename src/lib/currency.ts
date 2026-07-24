export type Currency = "JPY" | "USD" | "EUR" | "GBP";

export const currencySymbols: Record<Currency, string> = {
  JPY: "¥",
  USD: "$",
  EUR: "€",
  GBP: "£",
};

export function formatCurrency(
  value: number,
  currency: Currency = "JPY"
) {
  return `${currencySymbols[currency]}${value.toLocaleString(undefined, {
    minimumFractionDigits: currency === "JPY" ? 0 : 2,
    maximumFractionDigits: currency === "JPY" ? 0 : 2,
  })}`;
}