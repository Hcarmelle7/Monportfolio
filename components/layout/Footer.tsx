"use client";

import { AboutMe } from "@/data/content";
import { useProfile } from "@/context/ProfileContext";
import { ArrowUp, Github, Linkedin, Mail, Cpu, Terminal, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const { activeProfile, setActiveProfile } = useProfile();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navGeneral = [
    { name: "Accueil", href: "/#" },
    { name: "À propos", href: "/#about" },
  ];

  const navPortfolio = [
    { name: "Compétences", href: "/#competences" },
    { name: "Projets", href: "/#projets" },
    { name: "Formation", href: "/#formation" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <footer className="border-t border-white/10 bg-[#070707] text-gray-400 pt-4 sm:pt-6 lg:pt-4 pb-2 sm:pb-4 lg:pb-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-8 sm:pb-2 border-b border-white/5">

          {/* Logo, Rôle & Statut */}
          <div className="lg:col-span-5 flex flex-col gap-3 sm:gap-4">
            <div className="flex flex-wrap items-center justify-between sm:justify-start gap-3">
              <a
                href="/#"
                className="text-xl sm:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 hover:opacity-90 transition-opacity"
              >
                Carmelle<span className="text-white">.dev</span>
              </a>

              {/* Badge de disponibilité*/}
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px] sm:text-xs font-medium">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                </span>
                Disponible pour projets
              </div>
            </div>

            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed ">
              {AboutMe.role}
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-12 gap-6 sm:gap-6 lg:gap-6">

            {/* Section 1: Navigation */}
            <div className="hidden sm:flex col-span-2 sm:col-span-1 lg:col-span-2 flex-col gap-2 sm:gap-2.5">
              <p className="text-[11px] sm:text-xs font-semibold text-gray-300 uppercase tracking-wider text-center sm:text-left">
                Navigation
              </p>
              <div className="grid grid-cols-2 sm:flex sm:flex-col gap-x-4 gap-y-1.5 sm:gap-2 text-xs sm:text-sm">
                {navGeneral.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors inline-flex items-center gap-1.5 group justify-center sm:justify-start"
                  >
                    <span className="text-[10px] text-gray-600 group-hover:text-purple-400 transition-colors">›</span>
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Section 2: Portfolio */}
            <div className="col-span-2 sm:col-span-2 lg:col-span-4 flex flex-col gap-2 sm:gap-2.5">
              <p className="text-[11px] sm:text-xs font-semibold text-gray-300 uppercase tracking-wider ">
                Portfolio
              </p>
              <div className="grid grid-cols-2 gap-x-4 sm:gap-x-6 gap-y-1.5 sm:gap-2 text-xs sm:text-sm">
                {navPortfolio.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors inline-flex items-center gap-1.5 group"
                  >
                    <span className="text-[10px] text-gray-600 group-hover:text-purple-400 transition-colors">›</span>
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Section 3: Profils */}
            <div className="col-span-1 sm:col-span-1 lg:col-span-3 flex flex-col gap-2 sm:gap-2.5">
              <p className="text-[11px] sm:text-xs font-semibold text-gray-300 uppercase tracking-wider">
                profils
              </p>
              <div className="flex flex-col gap-1 sm:gap-2 text-xs sm:text-sm">
                <button
                  onClick={() => {
                    setActiveProfile("developpeur");
                    const el = document.getElementById("competences");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className={`flex items-center gap-1.5 text-left transition-colors cursor-pointer group ${activeProfile === "developpeur" ? "text-purple-400 font-medium" : "text-gray-400 hover:text-white"
                    }`}
                >
                  <Terminal size={13} className={activeProfile === "developpeur" ? "text-purple-400" : "text-gray-500 group-hover:text-purple-400"} />
                  <span>Full Stack</span>
                  {activeProfile === "developpeur" && (
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 ml-4" />
                  )}
                </button>

                <button
                  onClick={() => {
                    setActiveProfile("embarque");
                    const el = document.getElementById("competences");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className={`flex items-center gap-1.5 text-left transition-colors cursor-pointer group ${activeProfile === "embarque" ? "text-cyan-400 font-medium" : "text-gray-400 hover:text-white"
                    }`}
                >
                  <Cpu size={13} className={activeProfile === "embarque" ? "text-cyan-400" : "text-gray-500 group-hover:text-cyan-400"} />
                  <span>Embarqué</span>
                  {activeProfile === "embarque" && (
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 ml-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Section 4: Contacts */}
            <div className="col-span-1 sm:col-span-1 lg:col-span-3 flex flex-col gap-2 sm:gap-2.5">
              <ul className="flex flex-col gap-1.5 sm:gap-2 text-xs sm:text-sm">
                <li>
                  <a
                    href={AboutMe.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors inline-flex items-center gap-1.5 group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-purple-400 rounded-sm"
                  >
                    <Github size={13} className="text-gray-500 group-hover:text-white transition-colors" />
                    <span>GitHub</span>
                    <ArrowUpRight size={11} className="text-gray-600 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    <span className="sr-only"> (ouvre un nouvel onglet)</span>
                  </a>
                </li>
                <li>
                  <a
                    href={AboutMe.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors inline-flex items-center gap-1.5 group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-purple-400 rounded-sm"
                  >
                    <Linkedin size={13} className="text-gray-500 group-hover:text-white transition-colors" />
                    <span>LinkedIn</span>
                    <ArrowUpRight size={11} className="text-gray-600 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    <span className="sr-only"> (ouvre un nouvel onglet)</span>
                  </a>
                </li>
                <li>
                  <a
                    href={AboutMe.socials.email}
                    className="text-gray-400 hover:text-white transition-colors inline-flex items-center gap-1.5 group"
                  >
                    <Mail size={13} className="text-gray-500 group-hover:text-white transition-colors" />
                    <span>Email</span>
                  </a>
                </li>
              </ul>
            </div>

          </div>

        </div>

        {/*Copyright & Bouton Haut */}
        <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-xs text-gray-500">
          <p className="text-center sm:text-left">&copy; {new Date().getFullYear()} {AboutMe.name}. Tous droits réservés.</p>

          <div className="flex items-center gap-4 sm:gap-6">
            <p className="hidden md:block">Conçu avec Next.js & Tailwind CSS</p>
            <button
              onClick={scrollToTop}
              aria-label="Retourner en haut de page"
              className="hidden sm:flex px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 hover:border-purple-500/30 transition-all items-center gap-1.5 sm:gap-2 text-xs cursor-pointer group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
            >
              <span>Haut de page</span>
              <ArrowUp size={13} className="group-hover:-translate-y-0.5 transition-transform text-purple-400" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}