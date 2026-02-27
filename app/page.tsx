"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Cpu } from "lucide-react";

// --- IMPORTS COMMUNS ---
import Hero from "@/components/sections/Hero";
import Contact from "@/components/sections/Contact";

// --- IMPORTS DÉVELOPPEUR ---
import Skills from "@/components/sections/DeveloperSkills";
import Projects from "@/components/sections/DevProjects";
import WebCertifications from "@/components/sections/WebCertifications";

// --- IMPORTS EMBARQUÉ ---
import EmbeddedSkills from "@/components/sections/EmbeddedSkills";
import HardwareProjects from "@/components/sections/HardwareProjects";
import EmbeddedEducation from "@/components/sections/EmbeddedEducation.tsx";
import DeveloperProfile from "./developper/page";
import EmbeddedProfile from "./embedded/page";
import About from "@/components/sections/About";
import { useProfile } from "@/context/ProfileContext";


export default function Home() {
  const [activeProfile, setActiveProfile] = useState<"developer" | "embedded">("developer");
  const { profile } = useProfile();

  return (
    <div className="flex flex-col gap-20 md:gap-12 pb-8">

      <div className="min-h-[80vh] flex flex-col items-center justify-center gap-2 px-4 ">

        <Hero />

        <div className="flex flex-col hidden md:block sm:flex-row gap-6  z-10">

          {/* BOUTON DÉVELOPPEUR */}
          <button
            onClick={() => setActiveProfile("developer")}
            className={`group relative px-8 py-4 rounded-2xl border transition-all overflow-hidden flex items-center gap-4 text-left ${activeProfile === "developer"
              ? "bg-purple-500/10 border-purple-500 shadow-[0_0_30px_rgba(168,85,247,0.2)] scale-105"
              : "bg-white/5 border-purple-500/30 hover:bg-white/10 hover:border-purple-500"
              }`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <Code2 className={`w-8 h-8 ${activeProfile === "developer" ? "text-purple-400" : "text-gray-400"}`} />
            <div className="relative z-10">
              <h3 className={`font-bold text-lg ${activeProfile === "developer" ? "text-white" : "text-gray-300"}`}>Profil Développeur</h3>
              <p className="text-gray-400 text-sm">Web, Mobile & Logiciel</p>
            </div>
          </button>

          {/* BOUTON INGÉNIERIE */}
          <button
            onClick={() => setActiveProfile("embedded")}
            className={`group relative px-8 py-4 rounded-2xl border transition-all overflow-hidden flex items-center gap-4 text-left ${activeProfile === "embedded"
              ? "bg-cyan-500/10 border-cyan-500 shadow-[0_0_30px_rgba(6,182,212,0.2)] scale-105"
              : "bg-white/5 border-cyan-500/30 hover:bg-white/10 hover:border-cyan-500"
              }`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <Cpu className={`w-8 h-8 ${activeProfile === "embedded" ? "text-cyan-400" : "text-gray-400"}`} />
            <div className="relative z-10">
              <h3 className={`font-bold text-lg ${activeProfile === "embedded" ? "text-white" : "text-gray-300"}`}>Profil Ingénierie</h3>
              <p className="text-gray-400 text-sm">Embarqué & Électronique</p>
            </div>
          </button>

        </div>
      </div>
      <About />
      {/* Le Contenu principal change selon le profil sélectionné */}
      <div className="min-h-screen">
        <AnimatePresence mode="wait">
          {profile === "developer" && (
            <motion.div
              key="developer-content"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col gap-20 md:gap-32"
            >
              <DeveloperProfile />
            </motion.div>
          )}

          {profile === "embedded" && (
            <motion.div
              key="embedded-content"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col gap-20 md:gap-32"
            >
              <EmbeddedProfile />
            </motion.div>
          )}

        </AnimatePresence>
      </div>

      <Contact />
    </div>
  );
}