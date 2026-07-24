type Props = {
  title: string;
  subtitle?: string;
};

export default function SectionTitle({
  title,
  subtitle,
}: Props) {
  return (
    <div
      style={{
        marginBottom: "32px",
      }}
    >
      <h2
        style={{
          fontSize: "34px",
          fontWeight: 800,
          color: "#111827",
          margin: 0,
        }}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          style={{
            marginTop: "12px",
            color: "#6B7280",
            fontSize: "18px",
            lineHeight: 1.8,
            maxWidth: "720px",
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}