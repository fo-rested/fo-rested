import type { Metadata } from "next";
import { Cormorant, Montserrat } from "next/font/google";
import "./globals.css";

const display = Cormorant({
  subsets: ["latin"],
  weight: "600",
  style: "normal",
  variable: "--font-display",
  display: "swap",
});

const main = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400"],
  variable: "--font-main",
  display: "swap",
});

export const metadata: Metadata = {
  title: "fo-rested",
  description:
    "Strona w budowie. Wkrótce pokażemy, jak drewno staje się produktem.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className={`${display.variable} ${main.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
