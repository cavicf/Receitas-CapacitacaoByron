import type { Metadata } from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner"

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin']
});


export const metadata: Metadata = {
  title: "Receitas",
  description: "Site de receitas simples e saborosas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${inter.variable} antialiased min-h-screen flex flex-col`}
      >
        <Header/>
        {children}
        <Footer/>
        <Toaster richColors/>
      </body>
    </html>
  );
}
