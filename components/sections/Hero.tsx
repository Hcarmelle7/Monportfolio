"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { AboutMe } from "@/data/content";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import ResumeModal from "@/components/ui/ResumeModal";

export default function Hero() {
   const [isCvModalOpen, setIsCvModalOpen] = useState(false);
  return (
    <>
      <section className="min-h-[85vh] flex flex-col justify-center items-center text-center pt-28 md:pt-42 px-4 relative gap-4">

        {/*  ANIMATION PHOTO DE PROFIL */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
          className="relative w-36 h-36 sm:w-40 sm:h-40 flex justify-center items-center mb-2"
        >
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 180, 360],
              borderRadius: [
                "50% 50% 50% 50%",       // Cercle 
                "30% 70% 70% 30% / 50%", // Forme ovale déformée
                "50% 50% 50% 50%"        // on retourne au cercle
              ]
            }}
            transition={{
              duration: 10, // Durée totale de l'animation
              ease: "easeInOut", // Douceur de l'animation
              repeat: Infinity, // Répéter indéfiniment
              repeatType: "reverse" // Revenir en arrière
            }}
            className="absolute inset-0 bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-600 blur-2xl opacity-60"
          />

          {/* 2. le deuxième cercle qui tourne en sens inverse */}
          <motion.div
            animate={{ rotate: [360, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute inset-2 rounded-full border border-white/20 border-t-purple-500/80 border-r-pink-500/80 blur-[1px]"
          />

          {/* 3. Le conteneur de la photo devant */}
          <div className="relative z-10 w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-2 border-white/20 shadow-[0_0_40px_rgba(139,92,246,0.3)] backdrop-blur-sm bg-black/30 p-1">
            <div className="w-full h-full rounded-full overflow-hidden relative">
              <Image
                src={AboutMe.image}
                alt="Carmelle Helle"
                fill
                priority
                sizes="(max-width: 640px) 112px, 128px"
                className="object-cover scale-105 hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>
        </motion.div>

        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-3xl sm:text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-100 to-white/60 mb-2 sm:mb-4 px-2"
        >
          {AboutMe.name}
        </motion.h1>

        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-lg sm:text-xl md:text-2xl w-full text-purple-400 font-medium mb-4 leading-relaxed px-2"
        >
          <span className="inline-block break-words bg-purple-500/10 px-4 sm:px-5 py-2 sm:py-2.5 rounded-2xl border border-purple-500/20 max-w-full">
            {AboutMe.role}
          </span>
        </motion.h2>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center w-full max-w-xs sm:max-w-none justify-center px-4"
        >
          {/* Bouton pour voir les projets */}
          <a 
            href="/#projets" 
            onClick={(e) => {
              e.preventDefault();
              const elem = document.getElementById("projets");
              if (elem) {
                const navOffset = window.innerWidth >= 768 ? 75 : 65;
                const elementTop = elem.getBoundingClientRect().top + window.scrollY;
                window.scrollTo({
                  top: Math.max(0, elementTop - navOffset),
                  left: 0,
                  behavior: "smooth",
                });
                window.history.pushState(null, "", "#projets");
              }
            }}
            className="w-full sm:w-auto justify-center px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white rounded-full font-medium transition-all flex items-center gap-2 group shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:-translate-y-0.5"
          >
            Voir mes projets
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          {/* Barre des réseaux sociaux */}
          <div className="w-full sm:w-auto justify-center flex gap-4 items-center border border-white/10 px-6 py-3 rounded-full bg-white/5 backdrop-blur-sm">
            <a 
              href={AboutMe.socials.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Profil GitHub de Carmelle Helle"
              className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform"
            >
              <Github size={20} />
            </a>
            <div className="w-px h-4 bg-white/10"></div>
            <a 
              href={AboutMe.socials.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Profil LinkedIn de Carmelle Helle"
              className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform"
            >
              <Linkedin size={20} />
            </a>
            <div className="w-px h-4 bg-white/10"></div>
            <a 
              href={AboutMe.socials.email} 
              aria-label="Envoyer un email à Carmelle Helle"
              className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform"
            >
              <Mail size={20} />
            </a>
          </div>

          {/* Bouton pour voir le CV */}
          <button 
            onClick={() => setIsCvModalOpen(true)}
            aria-label="Consulter et télécharger mon CV"
            className="w-full sm:w-auto justify-center px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white rounded-full font-medium transition-all flex items-center gap-2 group shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:-translate-y-0.5 cursor-pointer"
          >
            Voir mon CV
          </button>
        </motion.div>

      </section>

      <ResumeModal 
        isOpen={isCvModalOpen} 
        onClose={() => setIsCvModalOpen(false)} 
      />
    </>
  );
}