import { formatCurrency, Currency } from "@/lib/currency";

type Props = {
  value: number;
  currency?: Currency;
};

export default function MoneyValue({
  value,
  currency = "JPY",
}: Props) {
  return <>{formatCurrency(value, currency)}</>;
}