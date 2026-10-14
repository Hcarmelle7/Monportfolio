"use client";
import { useState, useEffect, useRef } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, Tooltip } from 'recharts';
import { competencesDeveloppeur } from '@/data/content';
import { motion } from 'framer-motion';
import DevStack from '@/components/sections/Stack';

interface TooltipPayloadItem {
  payload?: {
    subject: string;
    A: number;
    fullMark: number;
  };
}

interface CustomTooltipProps {
  active?: boolean;
  payload?: TooltipPayloadItem[];
}

function CustomTooltip({ active, payload }: CustomTooltipProps) {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    if (!data) return null;
    return (
      <div className="bg-neutral-900/95 backdrop-blur-md border border-purple-500/30 px-3.5 py-2 rounded-xl shadow-2xl text-center pointer-events-none">
        <p className="text-white text-xs font-semibold">{data.subject}</p>
        <p className="text-purple-400 text-xs font-bold mt-0.5">
          Maîtrise : <span className="text-white">{data.A}%</span>
        </p>
      </div>
    );
  }
  return null;
}

export default function Skills() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 340 });
  const [activeSkill, setActiveSkill] = useState<string | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const updateSize = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const style = window.getComputedStyle(containerRef.current);
        const padX = parseFloat(style.paddingLeft || '0') + parseFloat(style.paddingRight || '0');
        const padY = parseFloat(style.paddingTop || '0') + parseFloat(style.paddingBottom || '0');
        const availableW = Math.max(0, Math.floor(rect.width - padX));
        const availableH = Math.max(0, Math.floor((rect.height || 340) - padY));

        if (availableW > 0) {
          setDimensions({
            width: availableW,
            height: availableH,
          });
        }
      }
    };

    updateSize();
    const observer = new ResizeObserver(updateSize);
    observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, []);

  const isSmallScreen = dimensions.width > 0 && dimensions.width < 500;
  const radius = isSmallScreen 
    ? Math.floor(Math.min(dimensions.width, dimensions.height) * 0.28)
    : Math.floor(Math.min(dimensions.width, dimensions.height) * 0.32);

  const formatTick = (value: string) => {
    const shortNames: Record<string, string> = {
      'Frontend (React/Next)': 'Frontend',
      'Backend (Node/PHP/Symfony)': 'Backend',
      'Mobile (Flutter)': 'Mobile',
      'DevOps/Tools': 'DevOps',
      'Algorithms (C/C++)': 'Algorithmes',
      'UI/UX Design': 'UI / UX',
    };
    return shortNames[value] || value;
  };

  return (
    <section className="pt-4 md:pt-6 pb-12 md:pb-16 px-4 max-w-6xl mx-auto w-full overflow-hidden scroll-mt-20 md:scroll-mt-24" id="competences">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-6 md:mb-8 text-center lg:text-left w-full"
      >
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500 break-words">
          {competencesDeveloppeur.title}
        </h2>
        <p className="text-gray-400 text-base sm:text-lg max-w-3xl leading-relaxed mx-auto lg:mx-0">
          {competencesDeveloppeur.subtitle}
        </p>
        <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-6 mx-auto lg:mx-0"></div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full min-w-0"
      >
        <div className="w-full min-w-0 text-center lg:text-left">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-white">
            <span className="text-primary">Mes</span> Compétences Développeur
          </h3>
          <p className="text-gray-400 mb-6 leading-relaxed text-sm sm:text-base max-w-xl mx-auto lg:mx-0">
            Une vue d'ensemble de mon expertise technique. Je combine une solide formation d'ingénieur avec une expérience pratique en développement produit.
          </p>
          <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
            {competencesDeveloppeur.subjects.map((skill) => {
              const isActive = activeSkill === skill.subject;
              return (
                <span 
                  key={skill.subject} 
                  onMouseEnter={() => setActiveSkill(skill.subject)}
                  onMouseLeave={() => setActiveSkill(null)}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs sm:text-sm transition-all duration-300 cursor-default select-none ${
                    isActive 
                      ? 'bg-purple-500/20 border-purple-500/50 text-white shadow-[0_0_15px_rgba(168,85,247,0.3)]' 
                      : 'bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:border-purple-500/30'
                  }`}
                >
                  <span>{skill.subject}</span>
                  <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded-full bg-white/10 text-purple-300">
                    {skill.A}%
                  </span>
                </span>
              );
            })}
          </div>
        </div>

        <div 
          ref={containerRef}
          className="relative h-[340px] sm:h-[380px] md:h-[420px] w-full min-w-0 overflow-hidden bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm p-2 sm:p-4 flex items-center justify-center shadow-xl"
        >
          {dimensions.width > 0 ? (
            <RadarChart 
              width={dimensions.width} 
              height={dimensions.height} 
              cx={dimensions.width / 2} 
              cy={dimensions.height / 2} 
              outerRadius={radius} 
              data={competencesDeveloppeur.subjects}
            >
              <PolarGrid stroke="rgba(255,255,255,0.12)" />
              <PolarAngleAxis 
                dataKey="subject" 
                tickFormatter={formatTick}
                tick={{ 
                  fill: '#a1a1aa', 
                  fontSize: isSmallScreen ? 11 : 12,
                  fontWeight: 500,
                }} 
              />
              <Tooltip content={<CustomTooltip />} />
              <Radar
                name="Compétences"
                dataKey="A"
                stroke="#8b5cf6"
                strokeWidth={2.5}
                fill="#8b5cf6"
                fillOpacity={0.35}
                dot={{ r: 3, fill: '#ec4899', strokeWidth: 1, stroke: '#ffffff' }}
                activeDot={{ r: 5, fill: '#ec4899', stroke: '#ffffff', strokeWidth: 2 }}
              />
            </RadarChart>
          ) : (
            <div className="w-full h-full animate-pulse bg-white/5 rounded-xl" />
          )}
        </div>
      </motion.div>
      <DevStack/>
    </section>
  );
}