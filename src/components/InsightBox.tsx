import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function InsightBox({
  children,
}: Props) {
  return (
    <div
      style={{
        marginTop: "30px",
        background: "#EFF6FF",
        border: "1px solid #BFDBFE",
        borderRadius: "18px",
        padding: "25px",
      }}
    >
      <h3
        style={{
          fontSize: "22px",
          fontWeight: "700",
        }}
      >
        💡 Business Insight
      </h3>

      <div
        style={{
          marginTop: "15px",
          color: "#374151",
          lineHeight: "1.8",
        }}
      >
        {children}
      </div>
    </div>
  );
}