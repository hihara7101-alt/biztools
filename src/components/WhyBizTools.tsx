export default function WhyBizTools() {
  const cards = [
    {
      title: "⚡ Fast",
      description:
        "Get accurate business calculations instantly without spreadsheets or complicated formulas.",
    },
    {
      title: "💼 Practical",
      description:
        "Designed for entrepreneurs, freelancers and small business owners making real business decisions.",
    },
    {
      title: "✅ Free",
      description:
        "Every calculator is completely free to use. No signup. No subscriptions.",
    },
  ];

  return (
    <section
      style={{
        marginTop: "90px",
      }}
    >
      <h2
        style={{
          fontSize: "36px",
          fontWeight: 800,
          color: "#111827",
          textAlign: "center",
        }}
      >
        Why BizTools?
      </h2>

      <p
        style={{
          textAlign: "center",
          color: "#6B7280",
          fontSize: "18px",
          marginTop: "14px",
          maxWidth: "700px",
          marginInline: "auto",
          lineHeight: 1.8,
        }}
      >
        Business tools should be simple, fast and practical.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
          gap: "28px",
          marginTop: "42px",
        }}
      >
        {cards.map((card) => (
          <div
            key={card.title}
            style={{
              background: "#FFFFFF",
              border: "1px solid #E5E7EB",
              borderRadius: "22px",
              padding: "32px",
              boxShadow: "0 4px 12px rgba(0,0,0,.04)",
            }}
          >
            <h3
              style={{
                fontSize: "24px",
                fontWeight: 700,
                color: "#111827",
              }}
            >
              {card.title}
            </h3>

            <p
              style={{
                marginTop: "18px",
                color: "#6B7280",
                lineHeight: 1.8,
              }}
            >
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}