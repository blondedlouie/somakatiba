import type { Metadata } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";
import "./globals.css";

const sans = Inter({
  subsets: ["latin"],
  weight: ["500", "700", "900"],
  variable: "--font-sans",
});

const serif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["normal", "italic"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "Soma Katiba KE: Reading, Understanding, Explaining The Constitution",
  description: "An educational platform dedicated to educating every Kenyan with clear, unbiased constitutional literacy. Sovereign power belongs to the people.",
  keywords: ["Kenya Constitution 2010", "Katiba", "Bill of Rights", "Devolution", "Article 35 ATI"],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/icon.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "192x192", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable} scroll-smooth`}>
      <body className="antialiased bg-white text-ink font-serif">{children}</body>
    </html>
  );
}
