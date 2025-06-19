// Components
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import AnimationBackground from "@/components/layout/AnimationBackground";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Astudillo Agustín E.",
  description: "Portfolio of Astudillo Agustín E.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} antialiased`}>
        <Header />
        <AnimationBackground />
        {children}
        <Footer />
      </body>
    </html>
  );
}
