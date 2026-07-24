export function formatNumber(value: number) {
  return value.toLocaleString();
}

export function cleanNumber(value: string) {
  return Number(value.replace(/,/g, "")) || 0;
}

export function formatMoney(
  value: number,
  symbol: string
) {
  return `${symbol}${formatNumber(Math.round(value))}`;
}

export function formatPercent(
  value: number
) {
  return `${value.toFixed(1)}%`;
}