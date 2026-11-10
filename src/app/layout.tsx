import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Folio — All-in-One Trading Terminal for Robinhood Chain",
  description:
    "Discover. Analyze. Trade. Folio is building a smarter way to discover, analyze and trade on Robinhood Chain. Coming soon.",
  keywords: [
    "folio",
    "robinhood chain",
    "crypto trading terminal",
    "token discovery",
    "whale tracking",
    "ai market scanner",
    "copy trading",
  ],
  authors: [{ name: "Folio" }],
  openGraph: {
    title: "Folio — All-in-One Trading Terminal for Robinhood Chain",
    description:
      "Discover. Analyze. Trade. The all-in-one trading terminal for Robinhood Chain.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
