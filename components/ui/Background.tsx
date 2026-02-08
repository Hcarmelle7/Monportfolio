// components/ui/Background.tsx
"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// Fonction utilitaire pour générer un nombre aléatoire entre min et max
const random = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1) + min);

// Définition des couleurs "fluo" de ta palette
const colors = [
  "bg-purple-600",
  "bg-fuchsia-600",
  "bg-indigo-600",
  "bg-violet-500",
  "bg-pink-600"
];

export default function Background() {
  // On utilise un state pour s'assurer que les valeurs aléatoires 
  // sont générées uniquement côté client après le premier rendu.
  // Cela évite les erreurs d'hydratation avec Next.js (le serveur et le client doivent voir la même chose au début).
  const [squares, setSquares] = useState<any[]>([]);

  useEffect(() => {
    // On génère 15 carrés avec des propriétés aléatoires
    const generatedSquares = [...Array(15)].map((_, i) => ({
      id: i,
      // Taille entre 50px et 150px
      size: random(50, 150),
      // Position de départ aléatoire sur l'écran (en pourcentage)
      initialX: random(0, 100),
      initialY: random(0, 100),
      // Couleur aléatoire parmi la liste
      color: colors[random(0, colors.length - 1)],
      // Durée de l'animation (entre 20 et 40 secondes pour un mouvement lent)
      duration: random(20, 40),
      // Délai avant le début pour qu'ils ne partent pas tous en même temps
      delay: random(0, 5),
    }));
    setSquares(generatedSquares);
  }, []);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-[#0a0a0a]">
      {/* Couche de base pour assombrir légèrement */}
      <div className="absolute inset-0 bg-black/60" />

      {squares.map((sq) => (
        <motion.div
          key={sq.id}
          className={`absolute rounded-xl ${sq.color} mix-blend-screen`}
          style={{
            width: sq.size,
            height: sq.size,
            // Un flou modéré pour l'effet "lumineux" tout en gardant la forme carrée
            filter: "blur(8px)", 
            // Ombre portée de la même couleur pour renforcer l'effet néon
            boxShadow: `0 0 20px 5px currentColor`, 
            opacity: 0.25, // Assez transparent pour ne pas gêner la lecture
            top: `${sq.initialY}%`,
            left: `${sq.initialX}%`,
          }}
          animate={{
            // Animation complexe sur plusieurs points clés
            // Le carré va bouger vers ces positions relatives (en pourcentage de l'écran)
            x: [
              `0vw`, 
              `${random(-50, 50)}vw`, 
              `${random(-50, 50)}vw`, 
              `0vw`
            ],
            y: [
              `0vh`, 
              `${random(-50, 50)}vh`, 
              `${random(-50, 50)}vh`, 
              `0vh`
            ],
            // Rotation lente pendant le mouvement
            rotate: [0, 180, 360],
            // Légère variation d'échelle (pulsation)
            scale: [1, 1.2, 0.9, 1]
          }}
          transition={{
            duration: sq.duration,
            ease: "easeInOut",
            repeat: Infinity, // Boucle infinie
            repeatType: "reverse", // Fait l'animation dans un sens puis dans l'autre
            delay: sq.delay,
          }}
        />
      ))}
      
      {/* Optionnel: Un léger bruit de fond pour un aspect plus texturé/analologique */}
      <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none mix-blend-overlay"></div>
    </div>
  );
}