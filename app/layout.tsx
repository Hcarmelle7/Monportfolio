import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Background from "@/components/ui/Background";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import TunnelBackground from "@/components/ui/TunnelBackground";
import { ProfileProvider } from "@/context/ProfileContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Carmelle Helle | Ingénieure Systèmes Embarqués & Développeuse Full Stack",
  description: "Portfolio de Carmelle Helle, ingénieure systèmes embarqués et développeuse full stack spécialisée en React, Next.js, Node.js et Flutter.",
  keywords: [
    "Carmelle Helle",
    "portfolio",
    "ingénieure embarquée",
    "full stack",
    "React",
    "Next.js",
    "Flutter",
    "embedded",
    "developpeuse"
  ],
  openGraph: {
    title: "Carmelle Helle | Portfolio",
    description: "Ingénieure systèmes embarqués et développeuse full stack.",
    type: "website",
    locale: "fr_FR"
  },
  twitter: {
    card: "summary_large_image",
    title: "Carmelle Helle | Portfolio",
    description: "Ingénieure systèmes embarqués et développeuse full stack."
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="dark">
      <body className={inter.className} >
        <Background />
        {/* <TunnelBackground /> */}
        
        
       <ProfileProvider>
          
          <Navbar />

          <main>
            {children}
          </main>

        </ProfileProvider>
        <Footer />
      </body>
    </html>
  );
}