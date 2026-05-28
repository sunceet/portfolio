import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["cyrillic", "latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Сивцев Владислав — Frontend Developer",
  description: "Портфолио frontend разработчика. React, Next.js, TypeScript, Tailwind CSS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={inter.variable}>
      <body className="min-h-screen bg-[#09090b] text-zinc-100 antialiased">
        {children}
      </body>
    </html>
  );
}