"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { projetsDeveloppeur } from "@/data/content";
import { ExternalLink, ChevronLeft, ChevronRight, Github,  } from "lucide-react";
import SpotlightCard from "@/components/ui/SpotlighCard";

export default function SoftwareProjects() {
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

  const maxIndex = Math.max(0, projetsDeveloppeur.projects.length - itemsPerPage);

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

  const visibleProjects = projetsDeveloppeur.projects.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <section className="pt-4 md:pt-6 pb-10 md:pb-14 px-4 relative max-w-6xl mx-auto z-10 w-full overflow-hidden scroll-mt-20 md:scroll-mt-24" id="projets">
      {/* En-tête */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-6 md:mb-8 text-center sm:text-left w-full"
      >
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-purple-200 break-words">
          {projetsDeveloppeur.title}
        </h2>
        <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto sm:mx-0">
          {projetsDeveloppeur.subtitle}
        </p>
        <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-6 mx-auto sm:mx-0"></div>
      </motion.div>

      {/* --- CONTENEUR DU CARROUSEL --- */}
      <div className="flex items-center gap-2 md:gap-4 w-full max-w-full overflow-hidden">
        {/* Flèche Gauche */}
        {projetsDeveloppeur.projects.length > itemsPerPage && (
          <button
            onClick={prevSlide}
            aria-label="Voir les projets précédents"
            className="hidden sm:flex p-2.5 sm:p-3 rounded-full bg-[#0a0a0a] border border-purple-500/20 hover:bg-white/5 hover:border-purple-500/50 transition-all text-purple-400 flex-shrink-0 z-10 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
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
              {visibleProjects.map((item) => (
                <div key={item.id} className="h-full min-w-0">
                  <SpotlightCard
                    spotlightColor="rgba(168, 85, 247, 0.25)"
                    className="h-full flex flex-col group border-purple-500/20 hover:border-purple-500/50 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(168,85,247,0.12)] transition-all duration-300 rounded-2xl bg-[#0a0a0a]"
                  >
                    <div className="p-4 sm:p-5 flex flex-col justify-between h-full z-10 relative bg-black/20 backdrop-blur-sm hover:bg-black/10 transition-colors">
                      {/* Image Preview Showcase (Non coupée, pleine visibilité) */}
                      <div className="relative w-full h-36 sm:h-40 rounded-xl overflow-hidden mb-3 border border-purple-500/20 bg-gradient-to-b from-[#14121f] to-[#0a0a0f] group/img flex-shrink-0 flex items-center justify-center p-2">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-contain p-1.5 group-hover:scale-105 transition-transform duration-500 drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]"
                        />

                        {/* Bouton GitHub actuel + Bouton Voir le site conditionnel */}
                        <div className="absolute top-2.5 right-2.5 flex items-center gap-1.5 z-20">
                          {item.link && (
                            <a
                              href={item.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`Code source GitHub de ${item.title}`}
                              className="p-2 bg-black/60 hover:bg-purple-600 text-white rounded-full backdrop-blur-md border border-white/20 transition-all duration-300 hover:scale-110 shadow-lg cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
                              title="Code source GitHub"
                            >
                              <Github size={15} />
                              <span className="sr-only">Code source GitHub (ouvre un nouvel onglet)</span>
                            </a>
                          )}
                          {item.liveLink && (
                            <a
                              href={item.liveLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`Voir le site en direct pour ${item.title}`}
                              className="p-2 bg-black/60 hover:bg-emerald-600 text-white rounded-full backdrop-blur-md border border-white/20 transition-all duration-300 hover:scale-110 shadow-lg cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
                              title="Voir le site / Live Demo"
                            >
                              <ExternalLink size={15} />
                              <span className="sr-only">Voir le site en direct</span>
                            </a>
                          )}
                        </div>
                      </div>

                      {/* Contenu texte */}
                      <div className="flex flex-col flex-grow min-h-0 mb-3">
                        <h3 className="text-base sm:text-lg font-bold text-white mb-1.5 group-hover:text-purple-400 transition-colors line-clamp-1">
                          {item.title}
                        </h3>
                        <p className="text-gray-400 text-xs sm:text-sm leading-relaxed line-clamp-2">
                          {item.description}
                        </p>
                      </div>

                      {/* Footer de la carte avec les technologies */}
                      <div>
                        <div className="flex flex-wrap gap-1.5 pt-2.5 border-t border-white/5">
                          {item.tech.map((t) => (
                            <span
                              key={t}
                              className="text-[10px] sm:text-[11px] font-medium text-purple-300 bg-purple-500/10 px-2 py-0.5 rounded-md border border-purple-500/20"
                            >
                              {t}
                            </span>
                          ))}
                        </div>

                        
                      </div>
                    </div>
                  </SpotlightCard>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Flèche Droite */}
        {projetsDeveloppeur.projects.length > itemsPerPage && (
          <button
            onClick={nextSlide}
            aria-label="Voir les projets suivants"
            className="hidden sm:flex p-2.5 sm:p-3 rounded-full bg-[#0a0a0a] border border-purple-500/20 hover:bg-white/5 hover:border-purple-500/50 transition-all text-purple-400 flex-shrink-0 z-10 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
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
            className="p-2.5 rounded-full bg-[#0a0a0a] border border-purple-500/20 text-purple-400 active:scale-95 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                className={`transition-all duration-300 rounded-full cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 ${
                  currentIndex === idx ? "w-7 h-2 bg-purple-500" : "w-2 h-2 bg-gray-600"
                }`}
                aria-label={`Aller au projet ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            aria-label="Voir le projet suivant"
            className="p-2.5 rounded-full bg-[#0a0a0a] border border-purple-500/20 text-purple-400 active:scale-95 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
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
              className={`transition-all duration-300 rounded-full cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 ${
                currentIndex === idx
                  ? "w-8 h-2 bg-purple-500"
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