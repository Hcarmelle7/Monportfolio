"use client";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

// Fonction utilitaire pour générer un nombre aléatoire entre min et max 
const random = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1) + min);

// Définition des couleurs "fluo" pour les carrés 
const colors = [
  "bg-purple-600",
  "bg-fuchsia-600",
  "bg-indigo-600",
  "bg-violet-500",
  "bg-pink-600"
];

interface Square {
  id: number;
  size: number;
  initialX: number;
  initialY: number;
  color: string;
  duration: number;
  delay: number;
  waypointsX: string[];
  waypointsY: string[];
}

export default function Background() {
  const [squares, setSquares] = useState<Square[]>([]);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    // On génère 15 carrés avec des propriétés aléatoires stables
    const generatedSquares: Square[] = [...Array(15)].map((_, i) => ({
      id: i,
      size: random(50, 150),
      initialX: random(0, 100),
      initialY: random(0, 100),
      color: colors[random(0, colors.length - 1)],
      duration: random(20, 40),
      delay: random(0, 5),
      waypointsX: ["0vw", `${random(-50, 50)}vw`, `${random(-50, 50)}vw`, "0vw"],
      waypointsY: ["0vh", `${random(-50, 50)}vh`, `${random(-50, 50)}vh`, "0vh"],
    }));
    setSquares(generatedSquares);
  }, []);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-[#0a0a0a]">
      <div className="absolute inset-0 bg-black/60" />

      {squares.map((sq) => (
        <motion.div
          key={sq.id}
          className={`absolute rounded-xl ${sq.color} mix-blend-screen`}
          style={{
            width: sq.size,
            height: sq.size,
            filter: "blur(8px)", 
            boxShadow: `0 0 20px 5px currentColor`, 
            opacity: 0.25,
            top: `${sq.initialY}%`,
            left: `${sq.initialX}%`,
          }}
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  x: sq.waypointsX,
                  y: sq.waypointsY,
                  rotate: [0, 180, 360],
                  scale: [1, 1.2, 0.9, 1],
                }
          }
          transition={{
            duration: sq.duration,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
            delay: sq.delay,
          }}
        />
      ))}
    </div>
  );
}