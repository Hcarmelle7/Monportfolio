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
        <Background />
        {/* <TunnelBackground /> */}
        
        
       <ProfileProvider>
          
          {/* La Navbar a maintenant accès au contexte ! */}
          <Navbar />
          
          {/* Les pages en dessous ont aussi accès au contexte ! */}
          <main>
            {children}
          </main>

        </ProfileProvider>
        <Footer />
      </body>
    </html>
  );
}