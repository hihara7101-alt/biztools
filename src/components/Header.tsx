"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const isJapanese = pathname.startsWith("/ja");

  const englishPath = pathname.replace(/^\/ja/, "") || "/";

  const japanesePath = isJapanese
    ? pathname
    : `/ja${pathname === "/" ? "" : pathname}`;

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
          href={isJapanese ? "/ja" : "/"}
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
            href={isJapanese ? "/ja" : "/"}
            style={{
              textDecoration: "none",
              color: "#374151",
            }}
          >
            {isJapanese ? "ホーム" : "Home"}
          </Link>

          <Link
            href={isJapanese ? "/ja/about" : "/about"}
            style={{
              textDecoration: "none",
              color: "#374151",
            }}
          >
            {isJapanese ? "BizToolsについて" : "About"}
          </Link>

          <Link
            href={isJapanese ? "/ja/contact" : "/contact"}
            style={{
              textDecoration: "none",
              color: "#374151",
            }}
          >
            {isJapanese ? "お問い合わせ" : "Contact"}
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
            style={{
              textDecoration: "none",
              fontWeight: isJapanese ? 500 : 700,
              color: isJapanese ? "#6B7280" : "#2563EB",
            }}
          >
            English
          </Link>

          <Link
            href={japanesePath}
            style={{
              textDecoration: "none",
              fontWeight: isJapanese ? 700 : 500,
              color: isJapanese ? "#2563EB" : "#6B7280",
            }}
          >
            日本語
          </Link>
        </nav>
      </div>
    </header>
  );
}