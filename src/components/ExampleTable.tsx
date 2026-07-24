type Row = {
  label: string;
  value: string;
};

type Props = {
  title: string;
  rows: Row[];
};

export default function ExampleTable({
  title,
  rows,
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
          marginTop: "24px",
          background: "#FFFFFF",
          border: "1px solid #E5E7EB",
          borderRadius: "18px",
          overflow: "hidden",
          boxShadow: "0 4px 12px rgba(0,0,0,.04)",
        }}
      >
        {rows.map((row, index) => (
          <div
            key={row.label}
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "18px 24px",
              borderBottom:
                index === rows.length - 1
                  ? "none"
                  : "1px solid #E5E7EB",
            }}
          >
            <div
              style={{
                color: "#374151",
                fontWeight: 600,
              }}
            >
              {row.label}
            </div>

            <div
              style={{
                color: "#111827",
                fontWeight: 700,
              }}
            >
              {row.value}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}