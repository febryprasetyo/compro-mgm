import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import JsonLd from "@/components/JsonLd";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Medigas - World Class Oxygen Provider Indonesia",
  description: "Solusi Ketersediaan Oksigen Medis Terpercaya dengan sistem PSA.",
  keywords: ["Oksigen Medis", "Oksigen Generator", "PSA Oxygen", "Medigas", "Gas Medis"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${plusJakartaSans.variable} antialiased flex flex-col min-h-screen font-sans`}
      >
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <JsonLd />
      </body>
    </html>
  );
}
