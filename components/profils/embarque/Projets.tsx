"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { projetsEmbarque } from "@/data/content";
import { Plane, Cpu, BatteryCharging, CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";

export default function HardwareProjects() {
  // --- ÉTAT DU CARROUSEL ---
  const [currentIndex, setCurrentIndex] = useState(0);

  const iconMap = {
    Plane: <Plane className="w-6 h-6 text-emerald-400" />,
    Cpu: <Cpu className="w-6 h-6 text-emerald-400" />,
    BatteryCharging: <BatteryCharging className="w-6 h-6 text-emerald-400" />
  };

  // --- LOGIQUE DU CARROUSEL ---
  const itemsPerPage = 2;
  // Index maximum possible pour ne pas déborder
  const maxIndex = Math.max(0, projetsEmbarque.projects.length - itemsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  // On extrait uniquement les 2 projets à afficher
  const visibleProjects = projetsEmbarque.projects.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <section className="py-24 px-4 relative max-w-6xl mx-auto z-10" id="projets">
      
      {/* En-tête */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-8"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-500">
          {projetsEmbarque.title}
        </h2>
        <p className="text-gray-400 text-lg">{projetsEmbarque.subtitle}</p>
        <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full mt-6"></div>
      </motion.div>

      {/* --- CONTENEUR DU CARROUSEL --- */}
      <div className="flex items-center gap-2 md:gap-6">
        
        {/* Flèche Gauche */}
        {projetsEmbarque.projects.length > itemsPerPage && (
          <button
            onClick={prevSlide}
            className="p-3 rounded-full bg-[#0a0a0a] border border-emerald-500/20 hover:bg-white/5 hover:border-emerald-500/50 transition-all text-emerald-400 flex-shrink-0 z-10"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}

        {/* Grille des Projets */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 flex-1">
          {visibleProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="relative p-4 rounded-2xl bg-[#0a0a0a] border border-emerald-500/20 overflow-hidden group hover:border-emerald-500/50 transition-colors"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl -z-10 group-hover:bg-emerald-500/10 transition-colors"></div>

              <div className="flex items-center justify-between mb-4">
                <div className="p-1 bg-emerald-500/10 rounded-sm border border-emerald-500/20">
                  {iconMap[project.icon as keyof typeof iconMap]}
                </div>
                <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-3 py-2 rounded-sm border border-emerald-500/20">
                  {project.context}
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
              <p className="text-gray-400 mb-4 text-sm leading-relaxed">{project.description}</p>

              <div className="mb-3">
                <ul className="space-y-2">
                  {project.objectives.map((obj, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-400">
                      <CheckCircle2 className="w-3 h-3 text-emerald-500 mt-0.5 flex-shrink-0" />
                      <span>{obj}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-1 pt-2 border-t border-white/5">
                {project.techStack.map((tech, idx) => (
                  <span key={idx} className="text-xs  text-gray-300 bg-white/5 px-2 py-1 rounded-md border border-white/10 hover:bg-white/10 hover:text-emerald-300 transition-colors">
                    {tech}
                  </span>
                ))}
              </div>
              <div>
                {project.demoLink && (
                  <div className="mt-2 pt-2 border-t border-white/5">
                    <a
                      href={project.demoLink}
                      className="inline-flex items-center gap-2 text-sm  text-emerald-400 hover:text-emerald-300 font-medium transition-colors"
                    >
                      Lancer la simulation
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Flèche Droite */}
        {projetsEmbarque.projects.length > itemsPerPage && (
          <button
            onClick={nextSlide}
            className="p-3 rounded-full bg-[#0a0a0a] border border-emerald-500/20 hover:bg-white/5 hover:border-emerald-500/50 transition-all text-emerald-400 flex-shrink-0 z-10"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        )}

      </div>

      {/* --- INDICATEURS DE POSITION (DOTS) --- */}
      {maxIndex > 0 && (
        <div className="flex justify-center items-center gap-2 mt-4">
          {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`transition-all duration-300 rounded-full ${
                currentIndex === idx
                  ? "w-8 h-2 bg-emerald-500" // Dot actif allongé
                  : "w-2 h-2 bg-gray-600 hover:bg-gray-400" // Dot inactif
              }`}
              aria-label={`Aller à la page ${idx + 1}`}
            />
          ))}
        </div>
      )}
    </section>
  );
}