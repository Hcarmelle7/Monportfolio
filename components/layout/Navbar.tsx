"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { AboutMe } from "@/data/content";
import { ArrowLeft, ArrowRight, Github, Linkedin, Mail, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const pathname = usePathname();
  const isSimulationPage = pathname === "/demo";
  const { language, setLanguage, t } = useLanguage();

  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

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

    if (pathname !== "/") {
      return;
    }

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
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-6 py-2.5 sm:py-3",
          scrolled || mobileMenuOpen
            ? "bg-[#0a0a0c]/85 backdrop-blur-md border-b border-white/[0.08] shadow-sm"
            : "bg-transparent"
        )}
      >
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <a
            href="/#"
            onClick={(e) => handleNavClick(e, "/#")}
            className="text-base sm:text-lg font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-300 hover:opacity-90 transition-opacity"
          >
            Carmelle<span className="text-white font-semibold">.dev</span>
          </a>

          {/* Liens de navigation Desktop - Compacts & Raffinés */}
          <ul className="hidden lg:flex items-center gap-6 xl:gap-7">
            {links.map((link) => {
              const active = isLinkActive(link.href);
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={cn(
                      "text-[15px] font-medium transition-colors relative py-1 cursor-pointer",
                      active ? "text-white font-semibold" : "text-gray-300 hover:text-white"
                    )}
                  >
                    {link.name}
                    {active ? (
                      <motion.span
                        layoutId="navbar-active-indicator"
                        className="absolute -bottom-0.5 left-0 w-full h-[2px] bg-gradient-to-r from-purple-500/80 to-pink-500/80 rounded-full"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    ) : (
                      <span className="absolute -bottom-0.5 left-0 w-0 h-[2px] bg-gradient-to-r from-purple-500/60 to-pink-500/60 transition-all group-hover:w-full" />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Côté Droit : Sélecteur de langue + Bouton Démarrer */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            {/* Sélecteur de langue discret */}
            <div
              role="group"
              aria-label="Choix de langue"
              className="flex items-center bg-white/[0.06] border border-white/10 rounded-full p-0.5 text-[11px] font-medium shadow-xs"
            >
              <button
                type="button"
                onClick={() => setLanguage("fr")}
                aria-pressed={language === "fr"}
                aria-label="Passer en Français"
                className={cn(
                  "px-2 py-0.5 rounded-full transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-purple-400",
                  language === "fr"
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold shadow-xs"
                    : "text-gray-400 hover:text-white"
                )}
              >
                FR
              </button>
              <button
                type="button"
                onClick={() => setLanguage("en")}
                aria-pressed={language === "en"}
                aria-label="Switch to English"
                className={cn(
                  "px-2 py-0.5 rounded-full transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-purple-400",
                  language === "en"
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold shadow-xs"
                    : "text-gray-400 hover:text-white"
                )}
              >
                EN
              </button>
            </div>

            {/* Bouton Démarrer (mène à la section contact) */}
            <a
              href="/#contact"
              onClick={(e) => handleNavClick(e, "/#contact")}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r from-purple-600/90 to-indigo-600/90 hover:from-purple-500 hover:to-indigo-500 text-white border border-purple-400/25 shadow-[0_0_12px_rgba(168,85,247,0.2)] hover:shadow-[0_0_18px_rgba(168,85,247,0.35)] transition-all hover:-translate-y-0.5 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
            >
              <span>{t.nav.start}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>

            {/* Bouton menu mobile */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={mobileMenuOpen}
              className="lg:hidden p-1.5 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 cursor-pointer"
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

            {/* Tiroir / Card de navigation */}
            <motion.div
              initial={{ opacity: 0, y: -16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -16, scale: 0.98 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="fixed top-[58px] left-4 right-4 max-w-sm mx-auto max-h-[calc(100vh-80px)] overflow-y-auto bg-[#0d0d12]/98 border border-white/10 rounded-2xl p-4 shadow-xl backdrop-blur-2xl z-50 flex flex-col gap-3"
            >
              {/* Entête mobile : Choix de langue + Démarrer */}
              <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
                <div className="flex items-center bg-white/[0.06] border border-white/10 rounded-full p-0.5 text-[11px] font-medium">
                  <button
                    type="button"
                    onClick={() => setLanguage("fr")}
                    className={cn(
                      "px-2.5 py-1 rounded-full transition-all",
                      language === "fr"
                        ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold"
                        : "text-gray-400 hover:text-white"
                    )}
                  >
                    FR
                  </button>
                  <button
                    type="button"
                    onClick={() => setLanguage("en")}
                    className={cn(
                      "px-2.5 py-1 rounded-full transition-all",
                      language === "en"
                        ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold"
                        : "text-gray-400 hover:text-white"
                    )}
                  >
                    EN
                  </button>
                </div>

                <a
                  href="/#contact"
                  onClick={(e) => handleNavClick(e, "/#contact")}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-xs"
                >
                  <span>{t.nav.start}</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>

              {/* Liens de navigation */}
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
