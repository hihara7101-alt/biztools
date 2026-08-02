"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const isEnglish =
    pathname === "/en" || pathname.startsWith("/en/");

  const saveLanguage = (language: "ja" | "en") => {
    document.cookie = `biztools-language=${language}; path=/; max-age=31536000; samesite=lax`;
  };

  const japanesePath = isEnglish
    ? pathname.replace(/^\/en/, "") || "/"
    : pathname;

  const englishPath = isEnglish
    ? pathname
    : pathname === "/"
      ? "/en"
      : `/en${pathname}`;

  return (
    <header
      style={{
        background: "#FFFFFF",
        borderBottom: "1px solid #E5E7EB",
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "18px 24px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Link
          href={isEnglish ? "/en" : "/"}
          style={{
            textDecoration: "none",
            color: "#111827",
            fontSize: "28px",
            fontWeight: 800,
          }}
        >
          BizTools
        </Link>

        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: "24px",
          }}
        >
          <Link
            href={isEnglish ? "/en" : "/"}
            style={{
              textDecoration: "none",
              color: "#374151",
            }}
          >
            {isEnglish ? "Home" : "ホーム"}
          </Link>

          <Link
            href={isEnglish ? "/en/calculators" : "/calculators"}
            style={{
              textDecoration: "none",
              color: "#374151",
            }}
          >
            {isEnglish ? "Calculators" : "計算ツール"}
          </Link>

          <Link
            href={isEnglish ? "/en/about" : "/about"}
            style={{
              textDecoration: "none",
              color: "#374151",
            }}
          >
            {isEnglish ? "About" : "BizToolsについて"}
          </Link>

          <Link
            href={isEnglish ? "/en/contact" : "/contact"}
            style={{
              textDecoration: "none",
              color: "#374151",
            }}
          >
            {isEnglish ? "Contact" : "お問い合わせ"}
          </Link>

          <div
            style={{
              width: "1px",
              height: "22px",
              background: "#D1D5DB",
            }}
          />

          <Link
            href={englishPath}
            onClick={() => saveLanguage("en")}
            style={{
              textDecoration: "none",
              fontWeight: isEnglish ? 700 : 500,
              color: isEnglish ? "#2563EB" : "#6B7280",
            }}
          >
            English
          </Link>

          <Link
            href={japanesePath}
            onClick={() => saveLanguage("ja")}
            style={{
              textDecoration: "none",
              fontWeight: isEnglish ? 500 : 700,
              color: isEnglish ? "#6B7280" : "#2563EB",
            }}
          >
            日本語
          </Link>
        </nav>
      </div>
    </header>
  );
}