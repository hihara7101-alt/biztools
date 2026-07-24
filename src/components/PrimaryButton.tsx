"use client";

import Link from "next/link";
import { useState } from "react";

type Props = {
  href: string;
  children: React.ReactNode;
};

export default function PrimaryButton({
  href,
  children,
}: Props) {
  const [hover, setHover] = useState(false);

  return (
    <Link
      href={href}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: "inline-block",
        padding: "18px 36px",
        borderRadius: "12px",
        background: hover ? "#1D4ED8" : "#2563EB",
        color: "#FFFFFF",
        textDecoration: "none",
        fontWeight: 700,
        fontSize: "17px",
        transition: "all .25s ease",
        transform: hover ? "translateY(-3px)" : "translateY(0)",
        boxShadow: hover
          ? "0 14px 30px rgba(37,99,235,.28)"
          : "0 6px 18px rgba(37,99,235,.18)",
      }}
    >
      {children}
    </Link>
  );
}