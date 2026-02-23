"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export default function TunnelBackground() {
  const [mounted, setMounted] = useState(false);

  // On récupère la progression du scroll (0 = haut, 1 = bas)
  const { scrollYProgress } = useScroll();

  // 1. Mouvement : On fait avancer le tunnel en fonction du scroll
  // Plus on scroll, plus les "portes" du tunnel semblent avancer vers le spectateur
  const zPosition = useTransform(scrollYProgress, [0, 1], [0, 1000]);

  // 2. Opacité : On fait disparaître progressivement le tunnel à la fin du scroll pour une transition douce vers les sections suivantes
  const opacity = useTransform(scrollYProgress, [0, 0.85, 1], [1, 1, 0]);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Création de 20 "portes" pour le tunnel, chacune avec une position Z différente pour créer la profondeur
  const layers = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    z: -i * 150, // Chaque porte est reculée de 150px
    scale: 1 + i * 0.1, // Légère augmentation de la taille pour renforcer l'effet de perspective
  }));

  return (
    <motion.div
      className="fixed inset-0 z-[-1] bg-[#050505] overflow-hidden"
      style={{ opacity }}
    >
      {/* Un léger dégradé radial pour simuler une source de lumière au centre du tunnel */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#000_100%)] z-10 pointer-events-none" />

      {/* Les couches du tunnel */}
      <div className="absolute inset-0 flex items-center justify-center [perspective:1000px]">
        <motion.div
          className="relative w-full h-full [transform-style:preserve-3d]"
          style={{ z: zPosition }} // C'est ici que la magie du scroll opère
        >
          {layers.map((layer, index) => {
            // on alterne les couleurs pour plus de dynamisme, et on ajoute un léger glow pour l'effet néon
            const color = index % 3 === 0 ? "border-purple-500" : index % 3 === 1 ? "border-cyan-500" : "border-pink-500";
            const glowColor = index % 3 === 0 ? "rgba(168, 85, 247, 0.5)" : index % 3 === 1 ? "rgba(6, 182, 212, 0.5)" : "rgba(236, 72, 153, 0.5)";

            return (
              <div
                key={layer.id}
                className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vh] border-[1px] ${color} opacity-30`}
                style={{
                  transform: `translateZ(${layer.z}px)`,
                  boxShadow: `0 0 20px ${glowColor}, inset 0 0 20px ${glowColor}`, // Effet Néon
                  borderRadius: '20px', // Coins légèrement arrondis 
                }}
              >
                {/* Lignes de séparation pour renforcer l'effet de tunnel */}
                <div className="absolute top-0 left-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-white/20 to-transparent" />
                <div className="absolute top-0 right-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-white/20 to-transparent" />
                <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              </div>
            );
          })}
        </motion.div>
      </div>
    </motion.div>
  );
}