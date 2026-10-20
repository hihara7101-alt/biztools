
import { ReactNode } from "react";

type Props = {
  title: string;
  value: ReactNode;
  subtitle?: string;
  color?: string;
  compact?: boolean;
};

export default function ResultCard({
  title,
  value,
  subtitle,
  color = "#2563EB",
  compact = false,
}: Props) {
  return (
    <div
      style={{
        background: "#FFFFFF",
        border: "1px solid #E5E7EB",
        borderRadius: compact ? "14px" : "20px",
        padding: compact ? "18px" : "28px",
        boxShadow: "0 4px 12px rgba(0,0,0,.04)",

        display: "flex",
        flexDirection: "column",

        minWidth: 0,
        minHeight: compact ? "120px" : "180px",

        transition: "all .2s ease",
      }}
    >
      <div
        style={{
          color: "#6B7280",
          fontSize: compact ? "12px" : "15px",
          fontWeight: 600,
          letterSpacing: ".2px",
          lineHeight: 1.5,
        }}
      >
        {title}
      </div>

      <div
        style={{
          marginTop: compact ? "10px" : "14px",
          fontSize: compact
            ? "clamp(16px, 2vw, 25px)"
            : "40px",
          fontWeight: 800,
          color,
          lineHeight: 1.2,

          wordBreak: compact ? "normal" : "break-word",
          overflowWrap: compact ? "normal" : "normal",
          whiteSpace: compact ? "nowrap" : "normal",
          fontVariantNumeric: "tabular-nums",
        }}
      >
        {value}
      </div>

      <div style={{ marginTop: "auto" }}>
        {subtitle && (
          <div
            style={{
              paddingTop: compact ? "12px" : "18px",
              color: "#6B7280",
              fontSize: compact ? "12px" : "15px",
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
