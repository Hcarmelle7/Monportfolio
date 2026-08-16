// components/sections/Skills.tsx
"use client";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import { DeveloperSkills } from '@/data/content';
import { motion } from 'framer-motion';
import DevStack from '@/components/sections/Stack';

export default function Skills() {
  return (
    <section className="py-20 px-4 max-w-6xl mx-auto" id="skills">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-2 text-center lg:text-left"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
          {DeveloperSkills.title}
        </h2>
        <p className="text-gray-400 text-lg">{DeveloperSkills.subtitle}</p>
        <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-6 mx-auto lg:mx-0"></div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
      >
        <div>
          <h2 className="text-3xl font-bold mb-6 text-white"><span className="text-primary">Mes</span> Compétences</h2>
          <p className="text-gray-400 mb-6">
            Une vue d'ensemble de mon expertise technique. Je combine une solide formation d'ingénieur avec une expérience pratique en développement produit.
          </p>
          <div className="flex flex-wrap gap-2">
            {DeveloperSkills.subjects.map((skill) => (
              <span key={skill.subject} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300">
                {skill.subject}
              </span>
            ))}
          </div>
        </div>

        <div className="h-[300px] md:h-[400px] w-full bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm p-4">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="70%" data={DeveloperSkills.subjects}>
              <PolarGrid stroke="rgba(255,255,255,0.1)" />
              <PolarAngleAxis dataKey="subject" tick={{ fill: '#9ca3af', fontSize: 12 }} />
              <Radar
                name="Compétences"
                dataKey="A"
                stroke="#8b5cf6"
                strokeWidth={3}
                fill="#8b5cf6"
                fillOpacity={0.3}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </motion.div>
      <DevStack/>
    </section>
  );
}