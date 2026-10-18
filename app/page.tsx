"use client";

import { useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";

import Hero from "@/components/sections/Hero";
import Contact from "@/components/sections/Contact";
import ProfilDeveloppement from "@/components/profils/ProfilDeveloppement";
import ProfilEmbarque from "@/components/profils/ProfilEmbarque";
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
    <div className="flex flex-col gap-20 md:gap-12 pb-8 w-full max-w-full overflow-x-hidden">
      
      <Suspense fallback={null}>
        <ProfileFromUrl />
      </Suspense>

      <Hero />
      
      <About />
      
      {/* Le Contenu principal change selon le profil sélectionné */}
      <div className="min-h-screen">
        <motion.div
          key={activeProfile}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="flex flex-col gap-20 md:gap-32"
        >
          {activeProfile === "developpeur" ? (
            <ProfilDeveloppement />
          ) : (
            <ProfilEmbarque />
          )}
        </motion.div>
      </div>

      <Contact />
    </div>
  );
}