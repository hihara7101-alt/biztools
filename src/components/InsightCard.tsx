type Props = {
  title: string;
  message: string;
  color: string;
  icon: string;
};

export default function InsightCard({
  title,
  message,
  color,
  icon,
}: Props) {
  return (
    <div
      style={{
        marginTop: "40px",
        background: color,
        borderRadius: "20px",
        padding: "30px",
        color: "#FFFFFF",
      }}
    >
      <div
        style={{
          fontSize: "28px",
          fontWeight: 800,
          display: "flex",
          alignItems: "center",
          gap: "12px",
        }}
      >
        <span>{icon}</span>
        <span>{title}</span>
      </div>

      <p
        style={{
          marginTop: "18px",
          fontSize: "17px",
          lineHeight: 1.8,
          opacity: 0.95,
        }}
      >
        {message}
      </p>
    </div>
  );
}