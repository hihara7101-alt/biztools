import { formatCurrency, Currency } from "@/lib/currency";

type Props = {
  value: number;
  currency?: Currency;
};

export default function MoneyValue({
  value,
  currency = "JPY",
}: Props) {
  const color =
    value < 0
      ? "#DC2626"
      : value > 0
      ? "#16A34A"
      : "#111827";

  return (
    <span
      style={{
        color,
        fontWeight: 700,
      }}
    >
      {formatCurrency(value, currency)}
    </span>
  );
}