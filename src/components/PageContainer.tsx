type Props = {
  title: string;
  children: React.ReactNode;
};

export default function PageContainer({
  title,
  children,
}: Props) {
  return (
    <main
      style={{
        maxWidth: 900,
        margin: "0 auto",
        padding: "70px 24px",
      }}
    >
      <h1
        style={{
          fontSize: "52px",
          fontWeight: 800,
          color: "#111827",
          marginBottom: "40px",
        }}
      >
        {title}
      </h1>

      <div
        style={{
          color: "#4B5563",
          lineHeight: 1.9,
          fontSize: "17px",
        }}
      >
        {children}
      </div>
    </main>
  );
}