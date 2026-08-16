"use client";

import { useState, useEffect, Suspense } from "react"; // Ajout de useEffect et Suspense
import { useSearchParams } from "next/navigation"; // Ajout pour lire l'URL
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Cpu } from "lucide-react";

// --- IMPORTS COMMUNS ---
import Hero from "@/components/sections/Hero";
import Contact from "@/components/sections/Contact";

// --- IMPORTS PAR CATÉGORIE ---
import ProfilDeveloppement from "./dev/page";
import ProfilEmbarque from "./embarque/page";
import About from "@/components/sections/About";
import { useProfile } from "@/context/ProfileContext";

// --- NOUVEAU COMPOSANT : Gestionnaire d'URL ---
function ProfileFromUrl() {
  const searchParams = useSearchParams();
  const tab = searchParams.get("tab");
  const { setActiveProfile } = useProfile();
 

  useEffect(() => {
    if (tab === "dev") {
      setActiveProfile("developer");
      return;
    }

    if (tab === "embarque") {
      setActiveProfile("embedded");
      return;
    }

    if (tab === "embedded" || tab === "developer") {
      setActiveProfile(tab);
    }
  }, [tab, setActiveProfile]);

  return null; 
}

export default function Home() {
  const { activeProfile } = useProfile();

  return (
    <div className="flex flex-col gap-20 md:gap-12 pb-8">
      
      <Suspense fallback={null}>
        <ProfileFromUrl />
      </Suspense>

      <div className="min-h-[80vh] flex flex-col items-center justify-center gap-2 px-4 ">
        <Hero />
      </div>
      
      <About />
      
      {/* Le Contenu principal change selon le profil sélectionné */}
      <div className="min-h-screen">
        <AnimatePresence mode="wait">
          {activeProfile === "developer" && (
            <motion.div
              key="developer-content"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col gap-20 md:gap-32"
            >
              <ProfilDeveloppement />
            </motion.div>
          )}

          {activeProfile === "embedded" && (
            <motion.div
              key="embedded-content"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col gap-20 md:gap-32"
            >
              <ProfilEmbarque />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <Contact />
    </div>
  );
}