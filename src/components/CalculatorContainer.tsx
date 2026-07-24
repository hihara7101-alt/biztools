import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function CalculatorContainer({
  children,
}: Props) {
  return (
    <section
      style={{
        background: "#FFFFFF",
        border: "1px solid #E5E7EB",
        borderRadius: "24px",
        padding: "40px",
        marginTop: "40px",
        boxShadow: "0 8px 30px rgba(0,0,0,.05)",
      }}
    >
      {children}
    </section>
  );
}