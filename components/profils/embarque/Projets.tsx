"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projetsEmbarque } from "@/data/content";
import { Plane, Cpu, BatteryCharging, CheckCircle2, ChevronLeft, ChevronRight, ExternalLink, Github } from "lucide-react";

export default function HardwareProjects() {
  // --- ÉTAT DU CARROUSEL RESPONSIVE (3 projets max) ---
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerPage(3);
      } else if (window.innerWidth >= 768) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(1);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const iconMap = {
    Plane: <Plane className="w-5 h-5 text-emerald-400" />,
    Cpu: <Cpu className="w-5 h-5 text-emerald-400" />,
    BatteryCharging: <BatteryCharging className="w-5 h-5 text-emerald-400" />
  };

  const maxIndex = Math.max(0, projetsEmbarque.projects.length - itemsPerPage);

  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [maxIndex, currentIndex]);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const goToSlide = (idx: number) => {
    setDirection(idx >= currentIndex ? 1 : -1);
    setCurrentIndex(idx);
  };

  const visibleProjects = projetsEmbarque.projects.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <section className="pt-4 md:pt-6 pb-10 md:pb-14 px-4 relative max-w-6xl mx-auto z-10 w-full overflow-hidden scroll-mt-20 md:scroll-mt-24" id="projets">
      
      {/* En-tête */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-6 md:mb-8 text-center sm:text-left w-full"
      >
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-500 break-words">
          {projetsEmbarque.title}
        </h2>
        <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto sm:mx-0">
          {projetsEmbarque.subtitle}
        </p>
        <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full mt-6 mx-auto sm:mx-0"></div>
      </motion.div>

      {/* --- CONTENEUR DU CARROUSEL --- */}
      <div className="flex items-center gap-2 md:gap-4 w-full max-w-full overflow-hidden">
        
        {/* Flèche Gauche */}
        {projetsEmbarque.projects.length > itemsPerPage && (
          <button
            onClick={prevSlide}
            aria-label="Voir les projets précédents"
            className="hidden sm:flex p-2.5 sm:p-3 rounded-full bg-[#0a0a0a] border border-emerald-500/20 hover:bg-white/5 hover:border-emerald-500/50 transition-all text-emerald-400 flex-shrink-0 z-10 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        )}

        {/* Grille des Projets avec Animation de Slide */}
        <div className="overflow-hidden flex-1 w-full min-w-0">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: direction * 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -direction * 40 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 w-full min-w-0"
            >
              {visibleProjects.map((project) => (
                <div
                  key={project.title}
                  className="relative p-4 sm:p-5 rounded-2xl bg-[#0a0a0a] border border-emerald-500/20 overflow-hidden group hover:border-emerald-500/50 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(16,185,129,0.12)] transition-all duration-300 flex flex-col justify-between w-full min-w-0 h-full"
                >
                  <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl -z-10 group-hover:bg-emerald-500/10 transition-colors"></div>

                  <div>
                    {/* Header de la carte : Icône + Contexte + Bouton GitHub (comme projet dev) */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="p-2 bg-emerald-500/10 rounded-lg border border-emerald-500/20">
                        {iconMap[project.icon as keyof typeof iconMap]}
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] sm:text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                          {project.context}
                        </span>

                        {/* Bouton vers GitHub conditionnel (comme pour projet dev) */}
                        {project.githubLink && (
                          <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Code source GitHub de ${project.title}`}
                            className="p-1.5 sm:p-2 bg-black/60 hover:bg-emerald-600 text-white rounded-full backdrop-blur-md border border-white/20 transition-all duration-300 hover:scale-110 shadow-lg cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
                            title="Code source GitHub"
                          >
                            <Github size={14} />
                            <span className="sr-only">Code source GitHub (ouvre un nouvel onglet)</span>
                          </a>
                        )}
                      </div>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-white mb-1.5 group-hover:text-emerald-400 transition-colors break-words line-clamp-1">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 mb-2.5 text-xs sm:text-sm leading-relaxed line-clamp-2">{project.description}</p>

                    <div className="mb-2.5">
                      <ul className="space-y-1">
                        {project.objectives.map((obj, idx) => (
                          <li key={idx} className="flex items-start gap-1.5 text-xs text-gray-400 leading-snug">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 mt-0.5 flex-shrink-0" />
                            <span className="line-clamp-1">{obj}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div>
                    <div className="flex flex-wrap gap-1 pt-2 border-t border-white/5">
                      {project.techStack.map((tech, idx) => (
                        <span key={idx} className="text-[10px] sm:text-[11px] text-gray-300 bg-white/5 px-2 py-0.5 rounded-md border border-white/10 hover:bg-white/10 hover:text-emerald-300 transition-colors">
                          {tech}
                        </span>
                      ))}
                    </div>
                    {project.demoLink && (
                      <div className="mt-2.5 pt-2 border-t border-white/5 flex items-center justify-between gap-3 text-xs sm:text-sm">
                        <a
                          href={project.demoLink}
                          className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-sm"
                        >
                          Lancer la simulation
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Flèche Droite */}
        {projetsEmbarque.projects.length > itemsPerPage && (
          <button
            onClick={nextSlide}
            aria-label="Voir les projets suivants"
            className="hidden sm:flex p-2.5 sm:p-3 rounded-full bg-[#0a0a0a] border border-emerald-500/20 hover:bg-white/5 hover:border-emerald-500/50 transition-all text-emerald-400 flex-shrink-0 z-10 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        )}

      </div>

      {/* CONTRÔLES MOBILE */}
      {maxIndex > 0 && (
        <div className="flex sm:hidden justify-between items-center mt-6 px-4">
          <button
            onClick={prevSlide}
            aria-label="Voir le projet précédent"
            className="p-2.5 rounded-full bg-[#0a0a0a] border border-emerald-500/20 text-emerald-400 active:scale-95 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                className={`transition-all duration-300 rounded-full cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 ${
                  currentIndex === idx
                    ? "w-7 h-2 bg-emerald-500"
                    : "w-2 h-2 bg-gray-600"
                }`}
                aria-label={`Aller au projet ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            aria-label="Voir le projet suivant"
            className="p-2.5 rounded-full bg-[#0a0a0a] border border-emerald-500/20 text-emerald-400 active:scale-95 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      )}

      {/* INDICATEURS DE POSITION DESKTOP */}
      {maxIndex > 0 && (
        <div className="hidden sm:flex justify-center items-center gap-2 mt-6">
          {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              className={`transition-all duration-300 rounded-full cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 ${
                currentIndex === idx
                  ? "w-8 h-2 bg-emerald-500"
                  : "w-2 h-2 bg-gray-600 hover:bg-gray-400"
              }`}
              aria-label={`Aller à la page ${idx + 1}`}
            />
          ))}
        </div>
      )}
    </section>
  );
}