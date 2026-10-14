"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projetsEmbarque } from "@/data/content";
import { Plane, Cpu, BatteryCharging, CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";

export default function HardwareProjects() {
  // --- ÉTAT DU CARROUSEL ---
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkDesktop = () => setIsDesktop(window.innerWidth >= 1024);
    checkDesktop();
    window.addEventListener("resize", checkDesktop);
    return () => window.removeEventListener("resize", checkDesktop);
  }, []);

  const iconMap = {
    Plane: <Plane className="w-6 h-6 text-emerald-400" />,
    Cpu: <Cpu className="w-6 h-6 text-emerald-400" />,
    BatteryCharging: <BatteryCharging className="w-6 h-6 text-emerald-400" />
  };

  // --- LOGIQUE DU CARROUSEL RESPONSIVE ---
  const itemsPerPage = isDesktop ? 2 : 1;
  const maxIndex = Math.max(0, projetsEmbarque.projects.length - itemsPerPage);

  // Sécurité pour éviter le hors-cadre lors du redimensionnement
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

  // On extrait les projets à afficher
  const visibleProjects = projetsEmbarque.projects.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <section className="pt-4 md:pt-6 pb-12 md:pb-16 px-4 relative max-w-6xl mx-auto z-10 w-full overflow-hidden scroll-mt-20 md:scroll-mt-24" id="projets">
      
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
      <div className="flex items-center gap-2 md:gap-6 w-full max-w-full overflow-hidden">
        
        {/* Flèche */}
        {projetsEmbarque.projects.length > itemsPerPage && (
          <button
            onClick={prevSlide}
            aria-label="Voir les projets précédents"
            className="hidden sm:flex p-3 rounded-full bg-[#0a0a0a] border border-emerald-500/20 hover:bg-white/5 hover:border-emerald-500/50 transition-all text-emerald-400 flex-shrink-0 z-10 cursor-pointer"
          >
            <ChevronLeft className="w-6 h-6" />
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
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full min-w-0"
            >
              {visibleProjects.map((project) => (
                <div
                  key={project.title}
                  className="relative p-5 sm:p-6 rounded-2xl bg-[#0a0a0a] border border-emerald-500/20 overflow-hidden group hover:border-emerald-500/50 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(16,185,129,0.12)] transition-all duration-300 flex flex-col justify-between w-full min-w-0"
                >
                  <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl -z-10 group-hover:bg-emerald-500/10 transition-colors"></div>

                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-2 bg-emerald-500/10 rounded-lg border border-emerald-500/20">
                        {iconMap[project.icon as keyof typeof iconMap]}
                      </div>
                      <span className="text-[11px] sm:text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full border border-emerald-500/20">
                        {project.context}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors break-words">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 mb-4 text-sm leading-relaxed">{project.description}</p>

                    <div className="mb-4">
                      <ul className="space-y-2">
                        {project.objectives.map((obj, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-gray-400">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 mt-0.5 flex-shrink-0" />
                            <span>{obj}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div>
                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
                      {project.techStack.map((tech, idx) => (
                        <span key={idx} className="text-xs text-gray-300 bg-white/5 px-2.5 py-1 rounded-md border border-white/10 hover:bg-white/10 hover:text-emerald-300 transition-colors">
                          {tech}
                        </span>
                      ))}
                    </div>
                    {project.demoLink && (
                      <div className="mt-3 pt-3 border-t border-white/5">
                        <a
                          href={project.demoLink}
                          className="inline-flex items-center gap-2 text-sm text-emerald-400 hover:text-emerald-300 font-medium transition-colors"
                        >
                          Lancer la simulation →
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Flèche Droite  */}
        {projetsEmbarque.projects.length > itemsPerPage && (
          <button
            onClick={nextSlide}
            aria-label="Voir les projets suivants"
            className="hidden sm:flex p-3 rounded-full bg-[#0a0a0a] border border-emerald-500/20 hover:bg-white/5 hover:border-emerald-500/50 transition-all text-emerald-400 flex-shrink-0 z-10 cursor-pointer"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        )}

      </div>

      {/* CONTRÔLES MOBILE */}
      {maxIndex > 0 && (
        <div className="flex sm:hidden justify-between items-center mt-6 px-4">
          <button
            onClick={prevSlide}
            aria-label="Voir le projet précédent"
            className="p-2.5 rounded-full bg-[#0a0a0a] border border-emerald-500/20 text-emerald-400 active:scale-95 cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
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
            className="p-2.5 rounded-full bg-[#0a0a0a] border border-emerald-500/20 text-emerald-400 active:scale-95 cursor-pointer"
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
              className={`transition-all duration-300 rounded-full cursor-pointer ${
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