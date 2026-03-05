"use client";
import { motion } from "framer-motion";
import { embeddedSkills, engineeringStacks } from "@/data/content";
import { Cpu, TerminalSquare, Activity, MonitorOff } from "lucide-react";
import { EmbStack } from "./Stack";

export default function EmbeddedSkills() {
  const iconMap = {
    Cpu: <Cpu className="w-8 h-8 text-cyan-400" />,
    TerminalSquare: <TerminalSquare className="w-8 h-8 text-cyan-400" />,
    Activity: <Activity className="w-8 h-8 text-cyan-400" />,
    MonitorOff: <MonitorOff className="w-8 h-8 text-cyan-400" />
  };

  return (
    <section className="py-24 px-4 relative max-w-6xl mx-auto z-10" id="embedded-skills">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-8 text-center lg:text-left"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
          {embeddedSkills.title}
        </h2>
        <p className="text-gray-400 text-lg">{embeddedSkills.subtitle}</p>
        <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mt-6 mx-auto lg:mx-0"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {embeddedSkills.categories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-cyan-500/20 hover:border-cyan-400/50 hover:bg-white/10 transition-all duration-300 group"
          >
            <div className="mb-6 p-4 rounded-xl bg-cyan-500/10 inline-block group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all">
              {iconMap[category.icon as keyof typeof iconMap]}
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">{category.name}</h3>
            <ul className="space-y-3">
              {category.skills.map((skill, idx) => (
                <li key={idx} className="text-gray-300 flex items-start gap-3 text-sm">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0 shadow-[0_0_8px_rgba(34,211,238,0.8)]"></span>
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <EmbStack />
    </section>
  );
}