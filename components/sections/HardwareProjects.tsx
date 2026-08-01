"use client";
import { motion } from "framer-motion";
import { hardwareProjects } from "@/data/content";
import { Plane, BatteryCharging, CheckCircle2 } from "lucide-react";

export default function HardwareProjects() {
  const iconMap = {
    Plane: <Plane className="w-6 h-6 text-emerald-400" />,
    BatteryCharging: <BatteryCharging className="w-6 h-6 text-emerald-400" />
  };

  return (
    <section className="py-24 px-4 relative max-w-6xl mx-auto z-10" id="hardware-projects">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-8"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-500">
          {hardwareProjects.title}
        </h2>
        <p className="text-gray-400 text-lg">{hardwareProjects.subtitle}</p>
        <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full mt-6"></div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {hardwareProjects.projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="relative p-8 rounded-2xl bg-[#0a0a0a] border border-emerald-500/20 overflow-hidden group hover:border-emerald-500/50 transition-colors"
          >
            {/* Effet de lueur en arrière-plan */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl -z-10 group-hover:bg-emerald-500/10 transition-colors"></div>

            <div className="flex items-center justify-between mb-6">
              <div className="p-3 bg-emerald-500/10 rounded-lg border border-emerald-500/20">
                {iconMap[project.icon as keyof typeof iconMap]}
              </div>
              <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                {project.context}
              </span>
            </div>

            <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
            <p className="text-gray-400 mb-6 text-sm leading-relaxed">{project.description}</p>

            <div className="mb-6">
              <h4 className="text-sm font-semibold text-gray-300 mb-3 uppercase tracking-wider">Objectifs Techniques</h4>
              <ul className="space-y-2">
                {project.objectives.map((obj, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-gray-400">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span>{obj}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
              {project.techStack.map((tech, idx) => (
                <span key={idx} className="text-xs  text-gray-300 bg-white/5 px-2 py-1.5 rounded-md border border-white/10 hover:bg-white/10 hover:text-emerald-300 transition-colors">
                  {tech}
                </span>
              ))}
            </div>
            <div>
              {project.demoLink && (
                <div className="mt-6 pt-4 border-t border-white/5">
                  <a
                    href={project.demoLink}
                    className="inline-flex items-center gap-2 text-sm text-emerald-400 hover:text-emerald-300 font-medium transition-colors"
                  >
                    Lancer la simulation interactive →
                  </a>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}