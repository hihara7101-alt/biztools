"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import CurrencySelector from "@/components/CurrencySelector";

export default function Navbar() {
  const pathname = usePathname();

  function isActive(path: string) {
    return pathname === path;
  }

  const linkStyle = (path: string) => ({
    textDecoration: "none",
    fontWeight: "600",
    color: isActive(path) ? "#2563EB" : "#374151",
    borderBottom: isActive(path)
      ? "2px solid #2563EB"
      : "2px solid transparent",
    paddingBottom: "4px",
    transition: "0.2s",
  });

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        background: "#FFFFFF",
        borderBottom: "1px solid #E5E7EB",
      }}
    >
      <nav
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "18px 24px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Link
          href="/"
          style={{
            textDecoration: "none",
            fontSize: "30px",
            fontWeight: "800",
            color: "#2563EB",
          }}
        >
          BizTools
        </Link>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "28px",
          }}
        >
          <Link href="/" style={linkStyle("/")}>
            Home
          </Link>

          <Link href="/calculators" style={linkStyle("/calculators")}>
            Calculators
          </Link>

          <Link href="/about" style={linkStyle("/about")}>
            About
          </Link>

          <CurrencySelector />
        </div>
      </nav>
    </header>
  );
}