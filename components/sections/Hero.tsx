"use client";
import { motion } from "framer-motion";
import { AboutMe } from "@/data/content";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-[85vh] flex flex-col justify-center items-center text-center pt-25 px-4 relative  gap-4">

      {/*  ANIMATION PHOTO DE PROFIL */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
        className="relative w-40 h-40 flex justify-center items-center mb-2"
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

        {/* 2. le deuxième cercle  qui tourne en sens inverse */}
        <motion.div
          animate={{ rotate: [360, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute inset-2 rounded-full border border-white/20 border-t-purple-500/80 border-r-pink-500/80 blur-[1px]"
        />

        {/* 3. Le conteneur de la photo devant */}
        <div className="relative z-10 w-30 h-30 rounded-full overflow-hidden border-2 border-white/20 shadow-[0_0_40px_rgba(139,92,246,0.3)] backdrop-blur-sm bg-black/30 p-1">
          <div className="w-full h-full rounded-full overflow-hidden relative">
            <img
              src={AboutMe.image}
              alt="Profile Placeholder"
              className="object-cover w-full h-full scale-105 hover:scale-110 transition-transform duration-500"
            />
          </div>
        </div>
      </motion.div>

      <motion.h1
        initial={{ y: 20, opacity: 0 }} // Animation d'entrée : glisse vers le haut et fade in
        animate={{ y: 0, opacity: 1 }} // Position finale : à sa place normale et complètement visible
        transition={{ delay: 0.2 }} // Délai avant le début de l'animation pour un effet de cascade
        className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-100 to-white/60 mb-4"
      >
        {AboutMe.name}
      </motion.h1>

      <motion.h2
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-xl md:text-2xl w-full text-purple-400 font-medium mb-4 leading-relaxed"
      >
        <span className="inline-block break-words bg-purple-500/10 px-5 py-2.5 rounded-2xl border border-purple-500/20">
          {AboutMe.role}
        </span>
      </motion.h2>

      {/* <motion.p 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="max-w-xl text-gray-400 mb-10 leading-relaxed md:text-lg"
      >
        {AboutMe.bio}
      </motion.p>  */}

      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="flex flex-col md:flex-row gap-6 items-center"
      >
        {/* Bouton  pour voir les projets */}
        <a href="#projects" className="px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white rounded-full font-medium transition-all flex items-center gap-2 group shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:-translate-y-0.5">
          Voir mes projets
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </a>
        
        <div className="flex gap-4 items-center border border-white/10 px-6 py-3 rounded-full bg-white/5 backdrop-blur-sm">
          <a href={AboutMe.socials.github} className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform"><Github size={20} /></a>
          <div className="w-px h-4 bg-white/10"></div>
          <a href={AboutMe.socials.linkedin} className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform"><Linkedin size={20} /></a>
          <div className="w-px h-4 bg-white/10"></div>
          <a href={AboutMe.socials.email} className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform"><Mail size={20} /></a>
        </div>

        <a href="#projects" className="px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white rounded-full font-medium transition-all flex items-center gap-2 group shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:-translate-y-0.5">
          Voir mon CV
          {/* <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /> */}
        </a>
      </motion.div>
      
    </section>
  );
}