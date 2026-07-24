export default function StatsBar() {
  const stats = [
    {
      value: "5",
      label: "Business Calculators",
    },
    {
      value: "100%",
      label: "Free to Use",
    },
    {
      value: "<30 sec",
      label: "Average Calculation",
    },
  ];

  return (
    <section
      style={{
        marginTop: "80px",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
          gap: "24px",
        }}
      >
        {stats.map((stat) => (
          <div
            key={stat.label}
            style={{
              background: "#F9FAFB",
              border: "1px solid #E5E7EB",
              borderRadius: "20px",
              padding: "32px",
              textAlign: "center",
            }}
          >
            <div
              style={{
                fontSize: "44px",
                fontWeight: 800,
                color: "#2563EB",
              }}
            >
              {stat.value}
            </div>

            <div
              style={{
                marginTop: "12px",
                fontSize: "16px",
                color: "#6B7280",
              }}
            >
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}