import type { Metadata, Viewport } from "next";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";
import GoogleAnalytics from "@/components/GoogleAnalytics";

export const metadata: Metadata = {
  metadataBase: new URL("https://uttacca.com"),

  title: {
    default: "Uttacca | Free Business Calculators",
    template: "%s | Uttacca",
  },

  description:
    "Free business calculators for entrepreneurs, freelancers and small business owners. Calculate profit, break-even, pricing, ROI and sales targets instantly.",

  keywords: [
    "business calculator",
    "profit calculator",
    "break-even calculator",
    "ROI calculator",
    "pricing calculator",
    "sales target calculator",
    "small business",
    "entrepreneur",
    "freelancer",
  ],

  authors: [
    {
      name: "Uttacca",
    },
  ],

  creator: "Uttacca",

  openGraph: {
    title: "Uttacca | Free Business Calculators",

    description:
      "Free business calculators for entrepreneurs, freelancers and small business owners.",

    url: "https://uttacca.com",

    siteName: "Uttacca",

    locale: "ja_JP",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Uttacca | Free Business Calculators",

    description:
      "Free business calculators for entrepreneurs, freelancers and small business owners.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body
        style={{
          margin: 0,
          background: "#F9FAFB",
          color: "#111827",
          fontFamily:
            "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
          WebkitFontSmoothing: "antialiased",
          MozOsxFontSmoothing: "grayscale",
        }}
      >
        <GoogleAnalytics />

        <StructuredData />

        <Header />

        <main
          style={{
            minHeight: "80vh",
            paddingTop: "20px",
          }}
        >
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}