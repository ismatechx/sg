import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sugam Gunam — Holistic Healing Center, Chennai",
  description:
    "Naturopathy, Siddha, and Acupuncture clinic in Chennai since 2007. Addressing root causes through integrated traditional healing.",
  openGraph: {
    title: "Sugam Gunam — Holistic Healing Center, Chennai",
    description:
      "Naturopathy, Siddha, and Acupuncture clinic in Chennai since 2007.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-white text-zinc-900">{children}</body>
    </html>
  );
}
