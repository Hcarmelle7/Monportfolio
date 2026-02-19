// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Background from "@/components/ui/Background"; // N'oublie pas l'import
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import TunnelBackground from "@/components/ui/TunnelBackground";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Carmelle.dev | Développeur Full Stack",
  description: "Portfolio de développeur web & mobile spécialisé en React, Node.js et Flutter.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="dark">
      <body className={inter.className}>
        {/* Fond animé présent sur toutes les pages */}
        <Background />
        {/* <TunnelBackground /> */}
        
        <Navbar />
        
        <main className="flex flex-col min-h-screen mt-20">
          {children}
        </main>
        
        <Footer />
      </body>
    </html>
  );
}