import { ReactNode } from "react";

type Props = {
  title: string;
  value: ReactNode;
  subtitle?: string;
  color?: string;
};

export default function ResultCard({
  title,
  value,
  subtitle,
  color = "#2563EB",
}: Props) {
  return (
    <div
      style={{
        background: "#FFFFFF",
        border: "1px solid #E5E7EB",
        borderRadius: "20px",
        padding: "28px",
        boxShadow: "0 4px 12px rgba(0,0,0,.04)",
      }}
    >
      <div
        style={{
          color: "#6B7280",
          fontSize: "15px",
          fontWeight: 600,
        }}
      >
        {title}
      </div>

      <div
        style={{
          marginTop: "12px",
          fontSize: "40px",
          fontWeight: 800,
          color,
        }}
      >
        {value}
      </div>

      {subtitle && (
        <div
          style={{
            marginTop: "12px",
            color: "#6B7280",
            fontSize: "15px",
            lineHeight: 1.6,
          }}
        >
          {subtitle}
        </div>
      )}
    </div>
  );
}