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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Carmelle Helle",
  alternateName: "Gertrude Carmelle Rose Helle",
  jobTitle: "Ingénieure Systèmes Embarqués & Développeuse Full Stack",
  url: "https://carmelle.dev",
  image: "https://carmelle.dev/images/profile.webp",
  sameAs: [
    "https://github.com/Hcarmelle7",
    "https://linkedin.com/in/carmelle-helle",
  ],
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "ESIEA",
  },
  knowsAbout: [
    "Systèmes Embarqués",
    "IoT",
    "C++",
    "C",
    "STM32",
    "React",
    "Next.js",
    "Node.js",
    "Flutter",
    "Électronique Industrielle",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
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