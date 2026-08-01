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

        display: "flex",
        flexDirection: "column",

        minHeight: "180px",

        transition: "all .2s ease",
      }}
    >
      <div
        style={{
          color: "#6B7280",
          fontSize: "15px",
          fontWeight: 600,
          letterSpacing: ".2px",
        }}
      >
        {title}
      </div>

      <div
        style={{
          marginTop: "14px",
          fontSize: "40px",
          fontWeight: 800,
          color,

          lineHeight: 1.1,

          wordBreak: "break-word",
        }}
      >
        {value}
      </div>

      <div
        style={{
          marginTop: "auto",
        }}
      >
        {subtitle && (
          <div
            style={{
              paddingTop: "18px",
              color: "#6B7280",
              fontSize: "15px",
              lineHeight: 1.6,
            }}
          >
            {subtitle}
          </div>
        )}
      </div>
    </div>
  );
}