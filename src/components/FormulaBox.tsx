type Props = {
  title: string;
  formula: string;
  explanation?: string;
};

export default function FormulaBox({
  title,
  formula,
  explanation,
}: Props) {
  return (
    <section
      style={{
        marginTop: "50px",
      }}
    >
      <h2
        style={{
          fontSize: "30px",
          fontWeight: 800,
          color: "#111827",
        }}
      >
        {title}
      </h2>

      <div
        style={{
          marginTop: "22px",
          background: "#F8FAFC",
          border: "1px solid #E5E7EB",
          borderRadius: "18px",
          padding: "28px",
        }}
      >
        <div
          style={{
            fontSize: "28px",
            fontWeight: 700,
            color: "#2563EB",
            fontFamily: "monospace",
            wordBreak: "break-word",
          }}
        >
          {formula}
        </div>

        {explanation && (
          <p
            style={{
              marginTop: "20px",
              color: "#6B7280",
              lineHeight: 1.8,
              fontSize: "16px",
            }}
          >
            {explanation}
          </p>
        )}
      </div>
    </section>
  );
}