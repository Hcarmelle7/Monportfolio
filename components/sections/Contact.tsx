// components/sections/Contact.tsx
"use client";
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, FileText } from 'lucide-react';
import SpotlightCard from '../ui/SpotlighCard';

export default function Contact() {
  const contactOptions = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "M'envoyer un email",
      value: "carmellerosy@icloud.com",
      href: "mailto:carmellerosy@icloud.com",
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      value: "Se connecter",
      href: "https://linkedin.com/in/carmelle-helle",
      color: "from-blue-600 to-blue-800"
    },
    // Ajoute GitHub ou CV ici si tu veux
  ];

  return (
    <section className="py-24 px-4 relative overflow-hidden" id="contact">
      {/* Fond décoratif */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60"
        >
          Prêt à collaborer ?
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto"
        >
          Je suis actuellement ouvert aux opportunités en freelance ou CDI. Discutons de votre projet autour d'un café virtuel.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
          {contactOptions.map((opt, idx) => (
            <motion.a
              key={opt.label}
              href={opt.href}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 + idx * 0.1 }}
              className="block group"
            >
              <SpotlightCard className="h-full bg-white/5 hover:bg-white/10 transition-colors border-white/10">
                <div className="p-6 flex items-center gap-4">
                  <div className={`p-3 rounded-full bg-gradient-to-br ${opt.color} text-white shadow-lg`}>
                    {opt.icon}
                  </div>
                  <div className="text-left">
                    <div className="text-sm text-gray-400 font-medium">{opt.label}</div>
                    <div className="text-white font-semibold group-hover:text-purple-300 transition-colors">
                      {opt.value}
                    </div>
                  </div>
                </div>
              </SpotlightCard>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}