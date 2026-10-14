"use client";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { AboutMe } from '@/data/content';
import { ArrowLeft, Code2, Cpu, Github, Linkedin, Mail, Menu, X } from 'lucide-react';
import { useProfile } from "@/context/ProfileContext";
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function Navbar() {
  const pathname = usePathname();
  const isSimulationPage = pathname === "/demo";

  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');
  const { activeProfile, setActiveProfile } = useProfile();

  // Verrouillage du scroll en arrière-plan quand le menu mobile est ouvert
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const sectionIds = ['about', 'competences', 'projets', 'formation', 'contact'];

    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Si tout en haut de page, la section active est l'accueil
      if (window.scrollY < 200) {
        setActiveSection('');
        return;
      }

      // Détecter la section visible
      const detectionOffset = window.innerWidth >= 768 ? 120 : 90;
      const scrollPosition = window.scrollY + detectionOffset;
      let current = '';

      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            current = id;
            break;
          } else if (scrollPosition >= top) {
            current = id;
          }
        }
      }

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeProfile]);

  const links = [
    { name: 'Accueil', href: '/#' },
    { name: 'Profil', href: '/#about' },
    { name: 'Compétences', href: '/#competences' },
    { name: 'Mes Réalisations', href: '/#projets' },
    { name: 'Formation', href: '/#formation' },
    { name: 'Contact', href: '/#contact' },
  ];

  const isLinkActive = (href: string) => {
    if (href === '/#') return activeSection === '';
    const id = href.replace('/#', '');
    return activeSection === id;
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setMobileMenuOpen(false);

    if (pathname !== "/") {
      return;
    }

    e.preventDefault();

    if (href === "/#" || href === "#") {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      window.history.pushState(null, "", "/");
      return;
    }

    const targetId = href.replace(/^\/?#/, "");
    const elem = document.getElementById(targetId);
    if (elem) {
      const navOffset = window.innerWidth >= 768 ? 75 : 65;
      const elementTop = elem.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: Math.max(0, elementTop - navOffset),
        left: 0,
        behavior: "smooth",
      });
      window.history.pushState(null, "", `#${targetId}`);
    }
  };

  const handleProfileSwitch = (profile: "developpeur" | "embarque") => {
    setActiveProfile(profile);
    if (activeSection && activeSection !== "" && pathname === "/") {
      setTimeout(() => {
        const elem = document.getElementById(activeSection);
        if (elem) {
          const navOffset = window.innerWidth >= 768 ? 75 : 65;
          const elementTop = elem.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({
            top: Math.max(0, elementTop - navOffset),
            left: 0,
            behavior: "smooth",
          });
        }
      }, 70);
    }
  };

  if (isSimulationPage) {
    return (
      <header className="absolute top-0 left-0 w-full px-6 py-4 z-50 flex items-center justify-between bg-black/20 backdrop-blur-sm border-b border-white/10">
        
        {/* GAUCHE : Logo */}
        <a href="/" className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 hover:opacity-80 transition-opacity">
          Carmelle<span className="text-white">.dev</span>
        </a>

        <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <h1 className="text-2xl md:text-3xl text-center font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-500">
            Smart Energy Guardian
          </h1>
        </div>

        {/* DROITE : Bouton Retour */}
        <Link 
          href="/?tab=embarque#projets"
          className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-sm font-medium text-gray-300 hover:text-white transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          Retour
        </Link>
        
      </header>
    );
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-6 py-3 sm:py-5",
          scrolled || mobileMenuOpen ? "bg-black/80 backdrop-blur-md border-b border-white/10 shadow-lg" : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <a 
            href="/#" 
            onClick={(e) => handleNavClick(e, "/#")}
            className="text-lg sm:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 hover:opacity-90 transition-opacity"
          >
            Carmelle<span className="text-white">.dev</span>
          </a>

          {/* Liens de navigation Desktop */}
          <ul className="hidden lg:flex gap-8">
            {links.map((link) => {
              const active = isLinkActive(link.href);
              return (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={cn(
                      "text-base xl:text-lg font-medium transition-colors relative py-1 cursor-pointer",
                      active ? "text-white font-semibold" : "text-gray-300 hover:text-white"
                    )}
                  >
                    {link.name}
                    {active ? (
                      <motion.span
                        layoutId="navbar-active-indicator"
                        className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    ) : (
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transition-all group-hover:w-full" />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-2 sm:gap-3">
            {/* Switch de Profil */}
            <div className="relative flex items-center bg-white/5 border border-white/10 rounded-full shadow-lg p-0.5">
              {/* Option Développeur */}
              <button
                onClick={() => handleProfileSwitch("developpeur")}
                aria-label="Basculer vers le profil Développeur"
                className={`relative z-10 flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-bold transition-colors duration-300 cursor-pointer ${
                  activeProfile === "developpeur" ? "text-white" : "text-gray-400 hover:text-white"
                }`}
              >
                {activeProfile === "developpeur" && (
                  <motion.div
                    layoutId="nav-switch-pill" 
                    className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full -z-10 shadow-[0_0_15px_rgba(168,85,247,0.4)]"
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  />
                )}
                <Code2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span className="hidden sm:inline">Développeur</span>
              </button>

              {/* Option Ingénierie */}
              <button
                onClick={() => handleProfileSwitch("embarque")}
                aria-label="Basculer vers le profil Systèmes Embarqués"
                className={`relative z-10 flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-bold transition-colors duration-300 cursor-pointer ${
                  activeProfile === "embarque" ? "text-white" : "text-gray-400 hover:text-white"
                }`}
              >
                {activeProfile === "embarque" && (
                  <motion.div
                    layoutId="nav-switch-pill" 
                    className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-emerald-600 rounded-full -z-10 shadow-[0_0_15px_rgba(6,182,212,0.4)]"
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  />
                )}
                <Cpu className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span className="hidden sm:inline">Embarqué</span>
              </button>
            </div>

            {/* Menu */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Fermer le menu de navigation" : "Ouvrir le menu de navigation"}
              aria-expanded={mobileMenuOpen}
              className="lg:hidden p-2 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Menu Déroulant */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="lg:hidden">
            {/* backdrop */} 
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/75 backdrop-blur-md z-40"
            />

            {/* Boîte de menu */}
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.98 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="fixed top-[65px] left-4 right-4 max-w-md mx-auto max-h-[calc(100vh-85px)] overflow-y-auto bg-[#0d0d12]/98 border border-white/15 rounded-3xl p-5 shadow-2xl backdrop-blur-2xl z-50 flex flex-col gap-4"
            >
              {/* Sélecteur de profil*/}
              <div className="flex items-center justify-between p-1 bg-white/5 border border-white/10 rounded-2xl">
                <button
                  onClick={() => {
                    handleProfileSwitch("developpeur");
                    setMobileMenuOpen(false);
                  }}
                  aria-label="Mode Développeur"
                  className={cn(
                    "flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer",
                    activeProfile === "developpeur"
                      ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-md shadow-purple-500/30"
                      : "text-gray-400 hover:text-white"
                  )}
                >
                  <Code2 className="w-4 h-4" />
                  <span>Développeur</span>
                </button>
                <button
                  onClick={() => {
                    handleProfileSwitch("embarque");
                    setMobileMenuOpen(false);
                  }}
                  aria-label="Mode Systèmes Embarqués"
                  className={cn(
                    "flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer",
                    activeProfile === "embarque"
                      ? "bg-gradient-to-r from-cyan-600 to-emerald-600 text-white shadow-md shadow-cyan-500/30"
                      : "text-gray-400 hover:text-white"
                  )}
                >
                  <Cpu className="w-4 h-4" />
                  <span>Embarqué</span>
                </button>
              </div>

              <ul className="flex flex-col gap-1">
                {links.map((link) => {
                  const active = isLinkActive(link.href);
                  return (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        onClick={(e) => handleNavClick(e, link.href)}
                        className={cn(
                          "flex items-center justify-between py-3 px-4 text-base font-medium rounded-2xl transition-all cursor-pointer",
                          active
                            ? "text-white font-semibold bg-gradient-to-r from-purple-500/25 to-pink-500/25 border border-purple-500/40"
                            : "text-gray-300 hover:text-white hover:bg-white/5"
                        )}
                      >
                        <span>{link.name}</span>
                        {active && (
                          <span className="w-2 h-2 rounded-full bg-purple-400 shadow-[0_0_8px_rgba(168,85,247,0.8)]" />
                        )}
                      </a>
                    </li>
                  );
                })}
              </ul>

              {/* Réseaux sociaux */}
              <div className="pt-3 border-t border-white/10 flex justify-center items-center gap-6">
                <a
                  href={AboutMe.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Profil GitHub"
                  className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
                >
                  <Github size={20} />
                </a>
                <a
                  href={AboutMe.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Profil LinkedIn"
                  className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href={AboutMe.socials.email}
                  aria-label="Envoyer un email"
                  className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
                >
                  <Mail size={20} />
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}