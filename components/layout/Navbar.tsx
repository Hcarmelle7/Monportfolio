"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { AboutMe } from "@/data/content";
import { ArrowLeft, ChevronDown, Github, Linkedin, Mail, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

// Drapeaux SVG précis et universels (fonctionnent sans dépendre des polices d'emojis système)
const FrenchFlag = () => (
  <svg className="w-4 h-3 rounded-[2px] overflow-hidden shadow-xs flex-shrink-0" viewBox="0 0 640 480" aria-hidden="true">
    <g fillRule="evenodd" strokeWidth="1pt">
      <path fill="#002654" d="M0 0h213.3v480H0z" />
      <path fill="#fff" d="M213.3 0h213.4v480H213.3z" />
      <path fill="#ce1126" d="M426.7 0H640v480H426.7z" />
    </g>
  </svg>
);

const UKFlag = () => (
  <svg className="w-4 h-3 rounded-[2px] overflow-hidden shadow-xs flex-shrink-0" viewBox="0 0 640 480" aria-hidden="true">
    <path fill="#012169" d="M0 0h640v480H0z" />
    <path fill="#FFF" d="m75 0 245 184L565 0h75v50L440 240l200 150v90h-75L320 296 75 480H0v-50l200-150L0 50V0z" />
    <path fill="#C8102E" d="m424 288 216 162v30h-40L384 318zm176-288L384 162v-42l176-132h40zM0 480l216-162v42L40 480zm0-440L216 192v-42L40 40H0z" />
    <path fill="#FFF" d="M256 0h128v480H256zM0 176h640v128H0z" />
    <path fill="#C8102E" d="M280 0h80v480h-80zM0 200h640v80H0z" />
  </svg>
);

export default function Navbar() {
  const pathname = usePathname();
  const isSimulationPage = pathname === "/demo";
  const { language, setLanguage, t } = useLanguage();

  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  const langMenuRef = useRef<HTMLDivElement>(null);

  // Fermer le menu langue quand on clique en dehors
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (langMenuRef.current && !langMenuRef.current.contains(e.target as Node)) {
        setLangMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
    const sectionIds = ["about", "competences", "projets", "formation", "contact"];

    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 30);

      // Si tout en haut de page, la section active est l'accueil
      if (scrollY < 160) {
        setActiveSection("");
        return;
      }

      // Si l'utilisateur est tout en bas de page, activer directement contact
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      if (windowHeight + scrollY >= docHeight - 70) {
        setActiveSection("contact");
        return;
      }

      // Détection de la section visible
      const detectionOffset = window.innerWidth >= 768 ? 120 : 90;
      let current = "";

      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= detectionOffset) {
            current = id;
          }
        }
      }

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: t.nav.home, href: "/#" },
    { name: t.nav.about, href: "/#about" },
    { name: t.nav.skills, href: "/#competences" },
    { name: t.nav.projects, href: "/#projets" },
    { name: t.nav.education, href: "/#formation" },
    { name: t.nav.contact, href: "/#contact" },
  ];

  const isLinkActive = (href: string) => {
    if (href === "/#" || href === "#" || href === "/") return activeSection === "";
    const id = href.replace("/#", "").replace("#", "");
    return activeSection === id;
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setMobileMenuOpen(false);

    if (pathname !== "/") return;

    e.preventDefault();

    if (href === "/#" || href === "#" || href === "/") {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      window.history.pushState(null, "", "/");
      setActiveSection("");
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
      setActiveSection(targetId);
    }
  };

  if (isSimulationPage) {
    return (
      <header className="absolute top-0 left-0 w-full px-5 py-3 z-50 flex items-center justify-between bg-black/30 backdrop-blur-md border-b border-white/10">
        <a
          href="/"
          className="text-base sm:text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-300 hover:opacity-85 transition-opacity"
        >
          Carmelle<span className="text-white">.dev</span>
        </a>

        <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <h1 className="text-xl md:text-2xl text-center font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-500">
            Smart Energy Guardian
          </h1>
        </div>

        <Link
          href="/#projets"
          className="flex items-center gap-1.5 px-3.5 py-1.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-xs font-medium text-gray-300 hover:text-white transition-all"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Retour
        </Link>
      </header>
    );
  }

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3",
          scrolled || mobileMenuOpen
            ? "bg-[#0a0a0c]/85 backdrop-blur-md border-b border-white/[0.08] shadow-sm"
            : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* GAUCHE : Logo */}
          <a
            href="/#"
            onClick={(e) => handleNavClick(e, "/#")}
            className="text-base sm:text-lg font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-300 hover:opacity-90 transition-opacity flex-shrink-0"
          >
            Carmelle<span className="text-white font-semibold">.dev</span>
          </a>

          {/* DROITE : Navigation + Sélecteur de langue + Bouton Démarrer */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {/* Liens de navigation avec animation de charge / décharge rapide au survol */}
            <ul className="flex items-center gap-5 xl:gap-7">
              {links.map((link) => {
                const active = isLinkActive(link.href);
                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className={cn(
                        "group relative py-1 text-[13px] font-medium transition-colors cursor-pointer block",
                        active ? "text-white font-semibold" : "text-gray-300 hover:text-white"
                      )}
                    >
                      <span>{link.name}</span>

                      {/* Barre active persistante */}
                      {active && (
                        <motion.span
                          layoutId="navbar-active-indicator"
                          className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}

                      {/* Barre qui se charge au survol et se décharge très rapidement lorsqu'on le quitte */}
                      {!active && (
                        <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-purple-400 to-pink-400 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-150 ease-out origin-left" />
                      )}
                    </a>
                  </li>
                );
              })}
            </ul>

            {/* Sélecteur de langue avec Drapeau & Chevron */}
            <div className="relative" ref={langMenuRef}>
              <button
                type="button"
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                aria-expanded={langMenuOpen}
                aria-label="Changer de langue"
                className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.09] border border-white/10 hover:border-white/20 text-xs font-medium text-gray-200 transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
              >
                {language === "fr" ? <FrenchFlag /> : <UKFlag />}
                <span className="font-semibold tracking-wider text-[11px]">{language.toUpperCase()}</span>
                <ChevronDown
                  className={cn(
                    "w-3 h-3 text-gray-400 transition-transform duration-200",
                    langMenuOpen && "rotate-180"
                  )}
                />
              </button>

              {/* Menu déroulant de langue */}
              <AnimatePresence>
                {langMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 6, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.96 }}
                    transition={{ duration: 0.15, ease: "easeOut" }}
                    className="absolute right-0 mt-1.5 w-32 bg-[#0e0e14]/95 backdrop-blur-xl border border-white/15 rounded-xl shadow-2xl py-1 z-50 overflow-hidden"
                  >
                    <button
                      type="button"
                      onClick={() => {
                        setLanguage("fr");
                        setLangMenuOpen(false);
                      }}
                      className={cn(
                        "w-full flex items-center justify-between px-3 py-2 text-xs transition-colors cursor-pointer",
                        language === "fr"
                          ? "bg-purple-500/20 text-white font-semibold"
                          : "text-gray-300 hover:text-white hover:bg-white/5"
                      )}
                    >
                      <div className="flex items-center gap-2">
                        <FrenchFlag />
                        <span>Français</span>
                      </div>
                      {language === "fr" && <span className="w-1.5 h-1.5 rounded-full bg-purple-400 shadow-xs" />}
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        setLanguage("en");
                        setLangMenuOpen(false);
                      }}
                      className={cn(
                        "w-full flex items-center justify-between px-3 py-2 text-xs transition-colors cursor-pointer",
                        language === "en"
                          ? "bg-purple-500/20 text-white font-semibold"
                          : "text-gray-300 hover:text-white hover:bg-white/5"
                      )}
                    >
                      <div className="flex items-center gap-2">
                        <UKFlag />
                        <span>English</span>
                      </div>
                      {language === "en" && <span className="w-1.5 h-1.5 rounded-full bg-purple-400 shadow-xs" />}
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Bouton Démarrer */}
            <a
              href="/#contact"
              onClick={(e) => handleNavClick(e, "/#contact")}
              className="px-4 py-2 rounded-xl text-xs sm:text-[13px] font-semibold bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white border border-purple-400/30 shadow-[0_0_15px_rgba(168,85,247,0.25)] hover:shadow-[0_0_22px_rgba(168,85,247,0.4)] transition-all hover:-translate-y-0.5 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 flex items-center justify-center tracking-wide"
            >
              {t.nav.start}
            </a>
          </div>

          {/* Bouton menu mobile (visible sur petits écrans) */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={mobileMenuOpen}
              className="p-1.5 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Menu Déroulant Mobile */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="lg:hidden">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/75 backdrop-blur-md z-40"
            />

            {/* Tiroir mobile */}
            <motion.div
              initial={{ opacity: 0, y: -16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -16, scale: 0.98 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="fixed top-[58px] left-4 right-4 max-w-sm mx-auto max-h-[calc(100vh-80px)] overflow-y-auto bg-[#0d0d12]/98 border border-white/10 rounded-2xl p-4 shadow-xl backdrop-blur-2xl z-50 flex flex-col gap-3"
            >
              {/* Entête mobile : Choix de langue avec drapeau + Bouton Démarrer */}
              <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
                <div className="flex items-center bg-white/[0.06] border border-white/10 rounded-xl p-0.5 text-xs">
                  <button
                    type="button"
                    onClick={() => setLanguage("fr")}
                    className={cn(
                      "flex items-center gap-1.5 px-2.5 py-1 rounded-lg transition-all",
                      language === "fr"
                        ? "bg-purple-600/80 text-white font-semibold"
                        : "text-gray-400 hover:text-white"
                    )}
                  >
                    <FrenchFlag />
                    <span>FR</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setLanguage("en")}
                    className={cn(
                      "flex items-center gap-1.5 px-2.5 py-1 rounded-lg transition-all",
                      language === "en"
                        ? "bg-purple-600/80 text-white font-semibold"
                        : "text-gray-400 hover:text-white"
                    )}
                  >
                    <UKFlag />
                    <span>EN</span>
                  </button>
                </div>

                <a
                  href="/#contact"
                  onClick={(e) => handleNavClick(e, "/#contact")}
                  className="px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-xs"
                >
                  {t.nav.start}
                </a>
              </div>

              {/* Liens de navigation mobile */}
              <ul className="flex flex-col gap-0.5">
                {links.map((link) => {
                  const active = isLinkActive(link.href);
                  return (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        onClick={(e) => handleNavClick(e, link.href)}
                        className={cn(
                          "flex items-center justify-between py-2 px-3 text-sm font-medium rounded-xl transition-all cursor-pointer",
                          active
                            ? "text-white font-semibold bg-purple-500/15 border border-purple-500/30"
                            : "text-gray-300 hover:text-white hover:bg-white/5"
                        )}
                      >
                        <span>{link.name}</span>
                        {active && (
                          <span className="w-1.5 h-1.5 rounded-full bg-purple-400 shadow-[0_0_6px_rgba(168,85,247,0.8)]" />
                        )}
                      </a>
                    </li>
                  );
                })}
              </ul>

              {/* Réseaux sociaux */}
              <div className="pt-2.5 border-t border-white/[0.08] flex justify-center items-center gap-5">
                <a
                  href={AboutMe.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Profil GitHub"
                  className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
                >
                  <Github size={16} />
                </a>
                <a
                  href={AboutMe.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Profil LinkedIn"
                  className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
                >
                  <Linkedin size={16} />
                </a>
                <a
                  href={AboutMe.socials.email}
                  aria-label="Envoyer un email"
                  className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
                >
                  <Mail size={16} />
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
