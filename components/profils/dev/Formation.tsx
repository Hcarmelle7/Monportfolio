"use client";
import { motion } from "framer-motion";
import { certificationsDeveloppeur } from "@/data/content";
import { Code2, Database, Smartphone, Award } from "lucide-react";

export default function WebCertifications() {
  const iconMap = {
    Code2: <Code2 className="w-8 h-8 text-white" />,
    Database: <Database className="w-8 h-8 text-white" />,
    Smartphone: <Smartphone className="w-8 h-8 text-white" />
  };

  return (
    <section className="py-24 px-4 relative max-w-6xl mx-auto z-10" id="formation">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 text-center"
      >
        <div className="flex justify-center items-center gap-3 mb-4">
          <Award className="w-8 h-8 text-purple-400" />
          <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
            {certificationsDeveloppeur.title}
          </h2>
        </div>
        <p className="text-gray-400 text-lg">{certificationsDeveloppeur.subtitle}</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {certificationsDeveloppeur.items.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15, duration: 0.5 }}
            className="relative p-8 rounded-2xl bg-[#0f0f11] border border-white/5 hover:border-purple-500/30 transition-all group overflow-hidden"
          >
            {/* Effet de lueur interne au hover */}
            <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-500`}></div>

            <div className={`mb-6 inline-flex p-4 rounded-xl bg-gradient-to-br ${cert.color} shadow-lg shadow-purple-500/20`}>
              {iconMap[cert.icon as keyof typeof iconMap]}
            </div>
            
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-white leading-tight pr-4">{cert.title}</h3>
              <span className="text-xs font-bold px-3 py-1 bg-white/10 text-gray-300 rounded-full flex-shrink-0">
                {cert.duration}
              </span>
            </div>

            <div className="pt-6 border-t border-white/10 mt-6">
              <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-3">Compétences acquises</p>
              <div className="flex flex-wrap gap-2">
                {cert.skills.map((skill, idx) => (
                  <span key={idx} className="text-xs font-medium text-gray-400 bg-white/5 px-2.5 py-1 rounded-md">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}