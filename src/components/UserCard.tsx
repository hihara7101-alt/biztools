type Props = {
  icon: string;
  title: string;
  description: string;
};

export default function UserCard({
  icon,
  title,
  description,
}: Props) {
  return (
    <div
      style={{
        background: "#FFFFFF",
        border: "1px solid #E5E7EB",
        borderRadius: "20px",
        padding: "28px",
        textAlign: "center",
      }}
    >
      <div
        style={{
          fontSize: "42px",
        }}
      >
        {icon}
      </div>

      <h3
        style={{
          marginTop: "18px",
          fontSize: "22px",
          color: "#111827",
        }}
      >
        {title}
      </h3>

      <p
        style={{
          marginTop: "14px",
          color: "#6B7280",
          lineHeight: 1.8,
        }}
      >
        {description}
      </p>
    </div>
  );
}