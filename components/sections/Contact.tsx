"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, User, Mail, MessageSquare, MapPin, Linkedin, Github, FileText } from "lucide-react";
import { cvFiles } from "@/lib/cv";
import { useProfile } from "@/context/ProfileContext";

export default function Contact() {
  const { activeProfile } = useProfile();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState(false);

  const links = [
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      value: "Se connecter",
      href: "https://linkedin.com/in/carmelle-helle",
      color: "from-blue-600 to-blue-800 hover:border-blue-400/50"
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      value: "Voir mon profil",
      href: "https://github.com/Hcarmelle7",
      color: "from-gray-700 to-gray-900 hover:border-gray-400/50"
    },
    {
      icon: <FileText className="w-6 h-6" />,
      label: "CV",
      value: "Télécharger mon CV",
      href: activeProfile === "embarque" ? cvFiles.embarque : cvFiles.developpeur,
      color: "from-purple-600 to-purple-800 hover:border-purple-400/50"
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(false);
    setIsSuccess(false);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setIsSuccess(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        setError(true);
      }
    } catch (err) {
      setError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="pt-4 md:pt-6 pb-16 md:pb-20 relative max-w-6xl mx-auto px-4 w-full overflow-hidden scroll-mt-20 md:scroll-mt-24">
      
      <div className="text-center mb-6 md:mb-8">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
          Contactez-moi
        </h2>
        <p className="text-gray-400 text-md max-w-2xl mx-auto">
          Une opportunité, une question ou simplement envie d'échanger ? N'hésitez pas.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-12 lg:gap-20 w-full">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6 w-full lg:w-[40%]"
        >
          <h3 className="text-2xl font-bold text-white mb-6">Mes Coordonnées</h3>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-purple-400">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Email</p>
                <a href="mailto:carmellerosy@icloud.com" aria-label="Envoyer un email à carmellerosy@icloud.com" className="text-white hover:text-purple-400 transition-colors font-medium">
                  carmellerosy@icloud.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-purple-400">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Localisation</p>
                <p className="text-white font-medium">Ivry-sur-Seine, France</p>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10">
            <h4 className="text-white font-medium mb-4">Mes Réseaux Professionnels</h4>

            <div className="flex gap-4">
              {links.map((link, index) => (
              <a 
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Accéder à mon ${link.label}`}
                className={`w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br border border-white/15 ${link.color} text-white hover:scale-110 transition-all duration-300 shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400`}
              >
                {link.icon}
                <span className="sr-only"> (ouvre un nouvel onglet)</span>
              </a>
              ))}
              
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="w-full lg:w-[60%]"
        >
          <form
            onSubmit={handleSubmit}
            className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 shadow-2xl backdrop-blur-md flex flex-col gap-4 w-full"
          >
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input
                type="text"
                name="name"
                required
                aria-label="Votre nom"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Votre Nom"
                className="w-full bg-black/20 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all"
              />
            </div>

            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input
                type="email"
                name="email"
                required
                aria-label="Votre adresse email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="Votre Email"
                className="w-full bg-black/20 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all"
              />
            </div>

            <div className="relative">
              <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-500" />
              <textarea
                required
                name="message"
                aria-label="Votre message"
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Votre Message..."
                className="w-full bg-black/20 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all resize-none"
              />
            </div>

            {error && (
              <p className="text-red-400 text-sm">Une erreur est survenue. Veuillez réessayer.</p>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="group relative w-full flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 hover:scale-[1.02] active:scale-95 disabled:opacity-70 disabled:hover:scale-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]"
            >
              {isSubmitting ? (
                <span className="animate-pulse">Envoi en cours...</span>
              ) : isSuccess ? (
                <span>Message Envoyé ! 🎉</span>
              ) : (
                <>
                  Envoyer le message
                  <Send className="w-5 h-5 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                </>
              )}
            </button>
          </form>
        </motion.div>

      </div>
    </section>
  );
}