
"use client";

import { Cpu, Zap, Activity } from "lucide-react";
import { motion } from "framer-motion";
import SmartEnergySimulator from "../../components/shared/smart-energy-guardian-demo";

export default function SimulateurPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white relative flex items-center justify-center pt-24 sm:pt-28 pb-16 px-4 overflow-hidden">

      {/* Conteneur principal */}
      <div className="max-w-6xl w-full mx-auto">

        {/* En-tête*/}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>Système Embarqué Interactif</span>
          </div>

          <p className="text-gray-400 text-sm sm:text-base max-w-2xl">
            Ce simulateur illustre la logique de délestage d'un microcontrôleur.
            Testez le système en temps réel en définissant un budget et en faisant varier la charge électrique.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">

          {/* COLONNE GAUCHE : EXPLICATIONS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2 space-y-5"
          >



            {/* Guide d'utilisation */}
            <div className="space-y-1 bg-white/5 border border-white/10 p-4 rounded-2xl">
              <h3 className="text-xl font-semibold text-white">Comment l'utiliser ?</h3>

              <ul className="space-y-5">
                <li className="flex items-start gap-4">
                  <div className="bg-purple-500/20 p-2 rounded-lg text-purple-400 mt-1">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">1. Fixer le budget</h4>
                    <p className="text-sm text-gray-400 mt-1">Tapez une valeur (ex: 2000) sur le pavé numérique puis appuyez sur <strong>B (Valider)</strong>.</p>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="bg-emerald-500/20 p-2 rounded-lg text-emerald-400 mt-1">
                    <Activity className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">2. Simuler la charge</h4>
                    <p className="text-sm text-gray-400 mt-1">Bougez le potentiomètre pour augmenter la consommation électrique (en Watts).</p>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="bg-red-500/20 p-2 rounded-lg text-red-400 mt-1">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">3. Observer le délestage</h4>
                    <p className="text-sm text-gray-400 mt-1">Si la consommation dépasse 80% de votre budget, le système active le mode ECO+ pour éviter la coupure.</p>
                  </div>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* COLONNE DROITE : SIMULATEUR */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-8 w-full lg:w-1/2 flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-emerald-500/10 blur-[80px] rounded-full pointer-events-none" />

              <div className="relative z-10 shadow-2xl">
                <SmartEnergySimulator />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}