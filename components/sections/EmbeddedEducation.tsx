"use client";
import { motion } from "framer-motion";
import { embeddedEducation } from "@/data/content";
import { GraduationCap, Zap, Cpu } from "lucide-react";

export default function EmbeddedEducation() {
  const iconMap = {
    GraduationCap: <GraduationCap className="w-5 h-5 text-white" />,
    Zap: <Zap className="w-5 h-5 text-white" />,
    Cpu: <Cpu className="w-5 h-5 text-white" />
  };

  return (
    <section className="py-24 px-4 relative max-w-4xl mx-auto z-10" id="education">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 text-center"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
          {embeddedEducation.title}
        </h2>
        <p className="text-gray-400 text-lg">{embeddedEducation.subtitle}</p>
      </motion.div>

      <div className="relative">
        {/* Ligne verticale */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500 via-cyan-500 to-emerald-500 opacity-30 transform md:-translate-x-1/2"></div>

        <div className="space-y-12">
          {embeddedEducation.items.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={index} className={`relative flex flex-col md:flex-row items-start ${isEven ? 'md:flex-row-reverse' : ''}`}>
                
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="absolute left-4 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center w-10 h-10 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.2)] z-10"
                  style={{ background: `linear-gradient(to right, var(--tw-gradient-stops))` }}
                >
                  <div className={`w-full h-full rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center p-2`}>
                     {iconMap[item.icon as keyof typeof iconMap]}
                  </div>
                </motion.div>

                {/* Contenu de la carte */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className={`ml-12 md:ml-0 md:w-1/2 ${isEven ? 'md:pl-12' : 'md:pr-12'}`}
                >
                  <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 bg-gradient-to-r ${item.color} text-white`}>
                      {item.period}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-1">{item.degree}</h3>
                    <h4 className="text-sm font-medium text-gray-400 mb-4">{item.school}</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}