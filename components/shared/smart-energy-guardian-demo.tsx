"use client";
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Tv, Microwave, Blinds, PowerOff } from 'lucide-react';

export default function SmartEnergySimulator() {
  const [budgetStr, setBudgetStr] = useState("");
  const [budgetFinal, setBudgetFinal] = useState(0);
  const [consommation, setConsommation] = useState(0); // Potentiomètre
  const [modeActuel, setModeActuel] = useState(0); // 0=AUTO, 1=FORCE, 2=VEILLE

  // États pour l'affichage
  const [tempMessage, setTempMessage] = useState("");
  const [ledColor, setLedColor] = useState("bg-[#555] shadow-none"); // led-off par défaut
  const [lcdLine2, setLcdLine2] = useState("P: 0 W");

  // etats pour la maison intelligente
  const [activeRooms, setActiveRooms] = useState<string[]>([]);
  const [isEcoMode, setIsEcoMode] = useState(false);


  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // les pièces de la maison
  const rooms = [
    { id: 'salon', name: 'Salon', lightPower: 60, icon: <Tv size={20} />, applianceName: "TV" },
    { id: 'cuisine', name: 'Cuisine', lightPower: 80, icon: <Microwave size={20} />, applianceName: "Four" },
    { id: 'chambre', name: 'Chambre', lightPower: 40, icon: <Tv size={16} />, applianceName: "Écran" },
    { id: 'sdb', name: 'SDB', lightPower: 30, icon: null, applianceName: "" },
  ];

  // Calcul de la consommation totale
  const currentLightsPower = activeRooms.reduce((total, roomId) => {
    const room = rooms.find(r => r.id === roomId);
    return total + (room ? room.lightPower : 0);
  }, 0);

  const totalConsommation = consommation + currentLightsPower;

  // La boucle de mise à jour
  useEffect(() => {
    if (budgetFinal > 0) {
      const pourcentage = (totalConsommation / budgetFinal) * 100;
      const ecoTriggered = pourcentage >= 80;
      setIsEcoMode(ecoTriggered);

      // CAS DE DÉLESTAGE (>= 80%)
      if (ecoTriggered) {
        setLcdLine2(`ECO+ ${totalConsommation}W  24°C`);

        if (modeActuel === 1) setLedColor("bg-purple-600 shadow-[0_0_10px_purple]");
        else if (modeActuel === 2) setLedColor("bg-red-600 shadow-[0_0_10px_red]");
        else setLedColor("bg-red-600 shadow-[0_0_10px_red]");
      }
      // CAS NORMAL (< 80%)
      else {
        setLcdLine2(`P: ${totalConsommation}W  24°C`);

        if (modeActuel === 2) {
          setLedColor("bg-red-600 shadow-[0_0_10px_red]");
        } else {
          if (pourcentage < 60) setLedColor("bg-green-600 shadow-[0_0_10px_green]");
          else setLedColor("bg-orange-500 shadow-[0_0_10px_orange]");
        }
      }
    } else {
      setLcdLine2(`P: ${totalConsommation} W`);
      setLedColor("bg-[#555] shadow-none");
      setIsEcoMode(false);
    }
  }, [budgetFinal, totalConsommation, modeActuel]);

  // Gestion du clavier matriciel 
  const handleKey = (key: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    if (key >= '0' && key <= '9') {
      if (budgetStr.length < 4) setBudgetStr(prev => prev + key);
      setTempMessage("");
    }
    else if (key === 'A') {
      setBudgetStr("");
      setBudgetFinal(0);
      setTempMessage("");
    }
    else if (key === 'B') {
      setBudgetFinal(parseInt(budgetStr || "0"));
      setTempMessage("OK! Enregistre");
      timeoutRef.current = setTimeout(() => setTempMessage(""), 1000);
    }
    else if (key === 'D') {
      const nextMode = (modeActuel + 1) % 3;
      setModeActuel(nextMode);
      const modes = ["MODE: AUTO", "MODE: FORCE", "MODE: VEILLE"];
      setTempMessage(modes[nextMode]);
      timeoutRef.current = setTimeout(() => setTempMessage(""), 2000);
    }
  };


  let displayLine1 = `Budget: ---- W`;
  if (tempMessage) {
    displayLine1 = tempMessage;
  } else if (budgetFinal > 0) {
    displayLine1 = `Budget: ${budgetFinal} W`;
  } else if (budgetStr !== "") {
    displayLine1 = `Budget: ${budgetStr}`;
  }

  // Gestion des pièces de la maison
  const handleRoomEnter = (id: string) => {
    if (!activeRooms.includes(id)) setActiveRooms([...activeRooms, id]);
  };
  const handleRoomLeave = (id: string) => {
    setActiveRooms(activeRooms.filter(roomId => roomId !== id));
  };

  return (
    <div className="flex lg:flex-row flex-col items-center gap-6 lg:gap-10 justify-center mt-6">

      {/* la maison intelligente en 2D */}
      <div className="lg:w-[430px] w-full lg:h-[326px] bg-[#1a1a1a] p-4 rounded-xl border border-white/10 shadow-lg">
        <h3 className="text-emerald-400 font-semibold mb-3 text-sm flex items-center gap-2">
          Maison Intelligente (Survolez les pièces)
        </h3>
        <div className="grid grid-cols-2 gap-2 h-[255px] mt-5">
          {rooms.map((room) => {
            const isHovered = activeRooms.includes(room.id);
            return (
              <div
                key={room.id}
                onMouseEnter={() => handleRoomEnter(room.id)}
                onMouseLeave={() => handleRoomLeave(room.id)}
                className={`relative rounded-lg border transition-all duration-300 overflow-hidden cursor-crosshair flex flex-col items-center justify-center
                  ${isHovered
                    ? 'border-emerald-500/50 bg-emerald-900/20 shadow-[inset_0_0_30px_rgba(16,185,129,0.1)]'
                    : 'border-white/5 bg-[#222]'}
                `}
              >
                {/* Animation des Volets */}
                <div className="absolute top-2 right-2 w-8 h-10 border border-white/10 bg-sky-900/30 rounded overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center opacity-30">
                    <Blinds size={12} />
                  </div>
                  <motion.div
                    className="absolute top-0 left-0 right-0 bg-gray-700 border-b border-gray-900"
                    initial={{ height: "0%" }}
                    animate={{ height: isEcoMode ? "100%" : "10%" }}
                    transition={{ duration: 1.5, type: "spring" }}
                  />
                </div>

                <span className="text-gray-300 font-medium text-sm">{room.name}</span>
                <div className="flex items-center gap-1 mt-1">
                  <Lightbulb
                    size={16}
                    className={`transition-colors duration-300 ${isHovered ? 'text-yellow-400 drop-shadow-[0_0_5px_rgba(250,204,21,0.8)]' : 'text-gray-600'}`}
                  />
                  <span className="text-[10px] text-gray-500">+{room.lightPower}W</span>
                </div>

                {room.icon && (
                  <div className="absolute bottom-2 left-2 flex items-center gap-1 bg-black/40 px-1.5 py-0.5 rounded border border-white/5">
                    {isEcoMode ? (
                      <PowerOff size={10} className="text-red-500 animate-pulse" />
                    ) : (
                      <span className="text-green-500">{room.icon}</span>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* clavier matriciel */}
      <div className="bg-[#333] p-[10px] rounded-[10px] w-[220px] font-sans text-white border border-[#444]">

        {/* Écran LCD pour afficher les informations */}
        <div className="bg-[#4caf50] text-[#000] font-mono font-bold p-[02px] border-[3px] border-[#111] rounded-[5px] mb-[08px]">
          <div>{displayLine1}</div>
          <div>{lcdLine2}</div>
        </div>

        {/* LED RGB pour afficher l'état */}
        <div className="mb-[08px] flex items-center">
          <span>LED RGB :</span>
          <div className={`w-[10px] h-[10px] rounded-full border-2 border-[#000] inline-block ml-2 transition-colors ${ledColor}`}></div>
        </div>

        {/* Potentiomètre  pour ajuster la consommation */}
        <div className="mb-[10px]">
          <label className="block mb-2 text-sm">
            Consommation : <span className="font-bold">{consommation}</span> W
          </label>
          <input
            type="range"
            min="0" max="3000" step="1"
            value={consommation}
            onChange={(e) => setConsommation(parseInt(e.target.value))}
            className="w-full cursor-pointer accent-[#5cb85c]"
          />
        </div>

        {/* Clavier Matriciel pour saisir les données */}
        <div className="grid grid-cols-3 gap-[5px] mt-[20px]">
          {['1', '2', '3', '4', '5', '6', '7', '8', '9'].map(num => (
            <button
              key={num}
              onClick={() => handleKey(num)}
              className="p-[1px] text-[10px] cursor-pointer bg-[rgba(105,0,180,0.1)] text-white border-2 border-[#000] rounded-[5px] active:bg-[#777] hover:bg-[#444] transition-colors"
            >
              {num}
            </button>
          ))}

          <button
            onClick={() => handleKey('B')}
            className="p-[1px] text-[10px] cursor-pointer bg-[#5cb85c] text-white border-2 border-[#000] rounded-[5px] active:bg-[#4cae4c] transition-colors"
          >
            B (Valider)
          </button>

          <button
            onClick={() => handleKey('0')}
            className="p-[1px] text-[10px] cursor-pointer bg-[rgba(105,0,180,0.1)] text-white border-2 border-[#000] rounded-[5px] active:bg-[#777] hover:bg-[#444] transition-colors"
          >
            0
          </button>

          <button
            onClick={() => handleKey('A')}
            className="p-[1px] text-[10px] cursor-pointer bg-[#d9534f] text-white border-2 border-[#000] rounded-[5px] active:bg-[#c9302c] transition-colors"
          >
            A (Vider)
          </button>

          {/* Bouton D cpour changer le mode */}
          <button
            onClick={() => handleKey('D')}
            className="col-start-2 p-[1px] text-[10px] cursor-pointer bg-[rgba(105,0,180,0.1)] text-white border-2 border-[#000] rounded-[5px] active:bg-[#777] hover:bg-[#444] transition-colors mt-1"
          >
            D (Mode)
          </button>
        </div>

      </div>
    </div>
  );
}