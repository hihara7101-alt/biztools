type FAQItem = {
  question: string;
  answer: string;
};

type Props = {
  title?: string;
  items: FAQItem[];
};

export default function FAQ({
  title,
  items,
}: Props) {
  return (
    <section
      style={{
        marginTop: "60px",
      }}
    >
      <h2
        style={{
          fontSize: "30px",
          fontWeight: 800,
          color: "#111827",
          marginBottom: "24px",
        }}
      >
        {title ?? (items[0]?.question.match(/[ぁ-んァ-ヶ一-龯]/)
          ? "よくある質問"
          : "Frequently Asked Questions")}
      </h2>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "18px",
        }}
      >
        {items.map((item) => (
          <div
            key={item.question}
            style={{
              background: "#FFFFFF",
              border: "1px solid #E5E7EB",
              borderRadius: "18px",
              padding: "24px",
              boxShadow: "0 4px 12px rgba(0,0,0,.04)",
            }}
          >
            <h3
              style={{
                fontSize: "20px",
                fontWeight: 700,
                color: "#111827",
                marginBottom: "12px",
              }}
            >
              {item.question}
            </h3>

            <p
              style={{
                color: "#6B7280",
                lineHeight: 1.8,
                fontSize: "16px",
              }}
            >
              {item.answer}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}