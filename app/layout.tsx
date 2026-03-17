import type { Metadata } from "next";
import { Montserrat, Pacifico } from "next/font/google";
import "./globals.css";

const display = Pacifico({
  subsets: ["latin"],
  weight: "400",
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
