"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Download } from "lucide-react";
import { useProfile } from "@/context/ProfileContext";
import { cvFiles, cvTitles } from "@/lib/cv";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const { activeProfile } = useProfile();

  const cvFile = activeProfile === "embarque" ? cvFiles.embarque : cvFiles.developpeur;
  const title = activeProfile === "embarque" ? cvTitles.embarque : cvTitles.developpeur;

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6"
        >
          {/* overlay cliquable pour fermer */}
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* conteneur principal de la modale */}
          <motion.div 
            role="dialog"
            aria-modal="true"
            aria-labelledby="resume-modal-title"
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-2xl h-[92vh] bg-[#1a1a1a] rounded-2xl border border-white/10 shadow-2xl overflow-hidden flex flex-col z-10"
          >
            
            {/* En-tête */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-[#0a0a0a]">
              <h3 id="resume-modal-title" className="text-white font-medium text-sm sm:text-base truncate pr-2">{title}</h3>
              <div className="flex items-center gap-2">
                <a
                  href={cvFile}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Télécharger le CV au format PDF"
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-purple-600/20 hover:bg-purple-600 border border-purple-500/30 text-purple-300 hover:text-white rounded-lg text-xs font-medium transition-all"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Télécharger</span>
                </a>
                <button 
                  onClick={onClose}
                  autoFocus
                  aria-label="Fermer la fenêtre du CV"
                  className="p-1.5 bg-white/5 hover:bg-red-500/20 text-white hover:text-red-400 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* L'iframe qui charge le bon PDF */}
            <div className="flex-1 w-full bg-white">
              <iframe 
                src={`${cvFile}#toolbar=0&navpanes=0&view=FitH`} 
                className="w-full h-full border-none"
                title="CV"
              />
            </div>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}