"use client";
import React, { useState, useEffect, useRef } from 'react';

export default function SmartEnergySimulator() {
  const [budgetStr, setBudgetStr] = useState("");
  const [budgetFinal, setBudgetFinal] = useState(0);
  const [consommation, setConsommation] = useState(0);
  const [modeActuel, setModeActuel] = useState(0); // 0=AUTO, 1=FORCE, 2=VEILLE
  
  // États pour l'affichage
  const [tempMessage, setTempMessage] = useState("");
  const [ledColor, setLedColor] = useState("bg-[#555] shadow-none"); // led-off par défaut
  const [lcdLine2, setLcdLine2] = useState("P: 0 W");

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // La boucle de mise à jour
  useEffect(() => {
    if (budgetFinal > 0) {
      const pourcentage = (consommation / budgetFinal) * 100;

      // CAS DE DÉLESTAGE (>= 80%)
      if (pourcentage >= 80) {
        setLcdLine2(`ECO+ ${consommation}W  24°C`);
        
        if (modeActuel === 1) setLedColor("bg-purple-600 shadow-[0_0_10px_purple]");
        else if (modeActuel === 2) setLedColor("bg-red-600 shadow-[0_0_10px_red]");
        else setLedColor("bg-red-600 shadow-[0_0_10px_red]");
      } 
      // CAS NORMAL (< 80%)
      else {
        setLcdLine2(`P: ${consommation}W  24°C`);
        
        if (modeActuel === 2) {
          setLedColor("bg-red-600 shadow-[0_0_10px_red]");
        } else {
          if (pourcentage < 60) setLedColor("bg-green-600 shadow-[0_0_10px_green]");
          else setLedColor("bg-orange-500 shadow-[0_0_10px_orange]");
        }
      }
    } else {
      setLcdLine2(`P: ${consommation} W`);
      setLedColor("bg-[#555] shadow-none");
    }
  }, [budgetFinal, consommation, modeActuel]);

  // Gestion du clavier matriciel
  const handleKey = (key: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    if (key >= '0' && key <= '9') {
      if (budgetStr.length < 4) setBudgetStr(prev => prev + key);
      setTempMessage("");
    } 
    else if (key === 'A') {
      setBudgetStr("");
      setBudgetFinal(0); // On réinitialise également le budget final validé
      setTempMessage("");
    } 
    else if (key === 'B') {
      setBudgetFinal(parseInt(budgetStr || "0"));
      setTempMessage("OK! Enregistre");
      timeoutRef.current = setTimeout(() => setTempMessage(""), 1000); // 1s 
    } 
    else if (key === 'D') {
      const nextMode = (modeActuel + 1) % 3;
      setModeActuel(nextMode);
      const modes = ["MODE: AUTO", "MODE: FORCE", "MODE: VEILLE"];
      setTempMessage(modes[nextMode]);
      timeoutRef.current = setTimeout(() => setTempMessage(""), 2000); // 2s 
    }
  };

  // Affiche sur la ligne 1
  let displayLine1 = `Budget: ---- W`;
  if (tempMessage) {
    displayLine1 = tempMessage;
  } else if (budgetFinal > 0) {
    displayLine1 = `Budget: ${budgetFinal} W`;
  } else if (budgetStr !== "") {
    displayLine1 = `Budget: ${budgetStr}`;
  }

  return (
    <div className="bg-[#333] p-[20px] rounded-[10px] w-[450px]  font-sans text-white border border-[#444]">
      
      {/* Simulation de l'Écran LCD */}
      <div className="bg-[#4caf50] text-[#000] font-mono font-bold p-[08px] border-[3px] border-[#111] rounded-[5px] mb-[08px]">
        <div>{displayLine1}</div>
        <div>{lcdLine2}</div>
      </div>

      {/* LED RGB */}
      <div className="mb-[10px] flex items-center">
        <span>LED RGB :</span>
        <div className={`w-[10px] h-[10px] rounded-full border-2 border-[#000] inline-block ml-2 transition-colors ${ledColor}`}></div>
      </div>

      {/* Potentiomètre */}
      <div className="mb-[10px]">
        <label className="block mb-2 text-sm">
          Consommation (Potentiomètre) : <span className="font-bold">{consommation}</span> W
        </label>
        <input 
          type="range" 
          min="0" max="3000" step="1"
          value={consommation} 
          onChange={(e) => setConsommation(parseInt(e.target.value))}
          className="w-full cursor-pointer accent-[#5cb85c]"
        />
      </div>

      {/* Clavier Matriciel */}
      <div className="grid grid-cols-3 gap-[5px] mt-[20px]">
        {['1', '2', '3', '4', '5', '6', '7', '8', '9'].map(num => (
          <button 
            key={num} 
            onClick={() => handleKey(num)} 
            className="p-[5px] text-[16px] cursor-pointer bg-[rgba(105,0,180,0.1)] text-white border-2 border-[#000] rounded-[5px] active:bg-[#777] hover:bg-[#444] transition-colors"
          >
            {num}
          </button>
        ))}
        
        <button 
          onClick={() => handleKey('B')} 
          className="p-[5px] text-[16px] cursor-pointer bg-[#5cb85c] text-white border-2 border-[#000] rounded-[5px] active:bg-[#4cae4c] transition-colors"
        >
          B (Valider)
        </button>
        
        <button 
          onClick={() => handleKey('0')} 
          className="p-[5px] text-[16px] cursor-pointer bg-[rgba(105,0,180,0.1)] text-white border-2 border-[#000] rounded-[5px] active:bg-[#777] hover:bg-[#444] transition-colors"
        >
          0
        </button>
        
        <button 
          onClick={() => handleKey('A')} 
          className="p-[5px] text-[16px] cursor-pointer bg-[#d9534f] text-white border-2 border-[#000] rounded-[5px] active:bg-[#c9302c] transition-colors"
        >
          A (Vider)
        </button>
        
        {/* Bouton D */}
        <button 
          onClick={() => handleKey('D')} 
          className="col-start-2 p-[5px] text-[16px] cursor-pointer bg-[rgba(105,0,180,0.1)] text-white border-2 border-[#000] rounded-[5px] active:bg-[#777] hover:bg-[#444] transition-colors mt-1"
        >
          D (Mode)
        </button>
      </div>
      
    </div>
  );
}