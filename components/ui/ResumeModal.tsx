// components/ui/ResumeModal.tsx
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
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

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
        >
          {/* overlay  cliquable pour fermer */}
          <div 
            className="absolute inset-0 bg-black/20 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* conteneur principal de la modale */}
          <motion.div 
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-xl h-[95vh] bg-[#1a1a1a] rounded-2xl border border-white/10 shadow-2xl overflow-hidden flex flex-col z-10"
          >
            
            {/* En-tête */}
            <div className="flex items-center  justify-between px-3 border-b border-white/10 bg-[#0a0a0a]">
              <h3 className="text-white  font-medium">{title}</h3>
              <button 
                onClick={onClose}
                className="p-1 bg-white/5 hover:bg-red-500/20 text-white hover:text-red-400 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
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