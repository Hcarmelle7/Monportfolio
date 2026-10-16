import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Background from "@/components/ui/Background";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ProfileProvider } from "@/context/ProfileContext";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://carmelle.dev"),
  title: "Carmelle Helle | Ingénieure Systèmes Embarqués & Développeuse Full Stack",
  description: "Portfolio de Carmelle Helle, ingénieure systèmes embarqués et développeuse full stack spécialisée en React, Next.js, Node.js, Flutter et IoT.",
  keywords: [
    "Carmelle Helle",
    "portfolio",
    "ingénieure embarquée",
    "full stack",
    "React",
    "Next.js",
    "Flutter",
    "développeuse",
    "systèmes embarqués",
    "IoT",
    "C++"
  ],
  authors: [{ name: "Carmelle Helle" }],
  creator: "Carmelle Helle",
  openGraph: {
    title: "Carmelle Helle | Ingénieure Systèmes Embarqués & Développeuse Full Stack",
    description: "Portfolio de Carmelle Helle. Projets concrets en ingénierie embarquée, IoT et architectures web & mobile modernes.",
    url: "https://carmelle.dev",
    siteName: "Carmelle Helle Portfolio",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/images/profile.webp",
        width: 800,
        height: 800,
        alt: "Carmelle Helle - Ingénieure Systèmes Embarqués & Développeuse Full Stack",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Carmelle Helle | Ingénieure Systèmes Embarqués & Développeuse Full Stack",
    description: "Portfolio de Carmelle Helle. Projets concrets en ingénierie embarquée, IoT et architectures web & mobile modernes.",
    images: ["/images/profile.webp"],
  },
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
        
        <ProfileProvider>
          <Navbar />

          <main>
            {children}
          </main>

          <Footer />
        </ProfileProvider>
        <Analytics />
      </body>
    </html>
  );
}