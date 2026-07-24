type Props = {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  maxWidth?: number;
};

export default function CalculatorPage({
  title,
  subtitle,
  children,
  maxWidth = 1000,
}: Props) {
  return (
    <main
      style={{
        maxWidth,
        margin: "0 auto",
        padding: "70px 24px 100px",
      }}
    >
      <section
        style={{
          marginBottom: "48px",
        }}
      >
        <h1
          style={{
            fontSize: "54px",
            fontWeight: 800,
            color: "#111827",
            lineHeight: 1.15,
          }}
        >
          {title}
        </h1>

        <p
          style={{
            marginTop: "24px",
            maxWidth: "760px",
            color: "#6B7280",
            fontSize: "20px",
            lineHeight: 1.8,
          }}
        >
          {subtitle}
        </p>
      </section>

      {children}
    </main>
  );
}