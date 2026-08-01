import Link from "next/link";

type Calculator = {
  title: string;
  href: string;
};

type Props = {
  calculators: Calculator[];
  title?: string;
};

export default function RelatedCalculators({
  calculators,
  title,
}: Props) {
  const isJapanese =
    calculators.length > 0 &&
    /[ぁ-んァ-ヶ一-龯]/.test(calculators[0].title);

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
        {title ?? (isJapanese ? "関連する計算ツール" : "Related Calculators")}
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
          gap: "20px",
        }}
      >
        {calculators.map((calculator) => (
          <Link
            key={calculator.href}
            href={calculator.href}
            style={{
              textDecoration: "none",
              background: "#FFFFFF",
              border: "1px solid #E5E7EB",
              borderRadius: "18px",
              padding: "22px",
              color: "#111827",
              fontWeight: 700,
              boxShadow: "0 4px 12px rgba(0,0,0,.04)",
              transition: "all .2s ease",
            }}
          >
            {calculator.title}

            <div
              style={{
                marginTop: "12px",
                color: "#2563EB",
                fontWeight: 600,
                fontSize: "15px",
              }}
            >
              {isJapanese ? "計算ツールを開く →" : "Open Calculator →"}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}