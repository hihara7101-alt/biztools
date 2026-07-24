import { ReactNode } from "react";

type Props = {
  title: string;
  children: ReactNode;
};

export default function InputCard({
  title,
  children,
}: Props) {
  return (
    <section
      style={{
        background: "#FFFFFF",
        border: "1px solid #E5E7EB",
        borderRadius: "20px",
        padding: "30px",
        marginTop: "40px",
      }}
    >
      <h2
        style={{
          fontSize: "28px",
          fontWeight: "700",
          marginBottom: "24px",
        }}
      >
        {title}
      </h2>

      {children}
    </section>
  );
}