"use client";

import { useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

import Hero from "@/components/sections/Hero";
import Contact from "@/components/sections/Contact";
import ProfilDeveloppement from "./dev/page";
import ProfilEmbarque from "./embarque/page";
import About from "@/components/sections/About";
import { useProfile } from "@/context/ProfileContext";

function ProfileFromUrl() {
  const searchParams = useSearchParams();
  const tab = searchParams.get("tab");
  const { setActiveProfile } = useProfile();
 

  useEffect(() => {
    if (tab === "dev" || tab === "developer" || tab === "developpeur") {
      setActiveProfile("developpeur");
      return;
    }

    if (tab === "embarque" || tab === "embedded") {
      setActiveProfile("embarque");
      return;
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
          {activeProfile === "developpeur" && (
            <motion.div
              key="developpeur-content"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col gap-20 md:gap-32"
            >
              <ProfilDeveloppement />
            </motion.div>
          )}

          {activeProfile === "embarque" && (
            <motion.div
              key="embarque-content"
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