"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { AboutMe } from '@/data/content';
import { Code2, Cpu, Github, Linkedin, Mail, } from 'lucide-react';
import { useProfile } from "@/context/ProfileContext";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { activeProfile, setActiveProfile } = useProfile();

  // le useEffect détecte le scroll pour changer la navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'Accueil', href: '#' },
    { name: 'Profile', href: '#about' },
    { name: 'Compétences', href: '#skills' },
    { name: 'Mes Réalisations', href: '#projects' },
    { name: 'Formation', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        scrolled ? "bg-black/50 backdrop-blur-md border-b border-white/10" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          Carmelle<span className="text-white">.dev</span>
        </a>

        {/* Liens de navigation */}
        <ul className="hidden lg:flex gap-8">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="text-sm font-medium text-gray-300 hover:text-white hover:text-primary transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 transition-all group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <div className="relative flex items-center p-1 bg-white/5 border border-white/10 rounded-full shadow-lg">

          {/* Option Développeur */}
          <button
            onClick={() => setActiveProfile("developer")}
            className={`relative z-10 flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold transition-colors duration-300 ${activeProfile === "developer" ? "text-white" : "text-gray-400 hover:text-white"
              }`}
          >
            {activeProfile === "developer" && (
              <motion.div
                layoutId="nav-switch-pill" // La magie Framer Motion
                className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full -z-10 shadow-[0_0_15px_rgba(168,85,247,0.4)]"
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              />
            )}
            <Code2 className="w-4 h-4" />
            <span className="hidden sm:inline">Développeur</span>
          </button>

          {/* Option Ingénierie */}
          <button
            onClick={() => setActiveProfile("embedded")}
            className={`relative z-10 flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold transition-colors duration-300 ${activeProfile === "embedded" ? "text-white" : "text-gray-400 hover:text-white"
              }`}
          >
            {activeProfile === "embedded" && (
              <motion.div
                layoutId="nav-switch-pill"
                className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-emerald-600 rounded-full -z-10 shadow-[0_0_15px_rgba(6,182,212,0.4)]"
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              />
            )}
            <Cpu className="w-4 h-4" />
            <span className="hidden sm:inline">Électronique & Embarqué</span>
          </button>

        </div>

        {/* Bouton de contact */}
        <div className="flex gap-4 items-center border border-white/10 px-6 py-3 rounded-full bg-white/5 backdrop-blur-sm hidden ">
          <a href={AboutMe.socials.github} className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform"><Github size={20} /></a>
          <div className="w-px h-4 bg-white/10"></div>
          <a href={AboutMe.socials.linkedin} className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform"><Linkedin size={20} /></a>
          <div className="w-px h-4 bg-white/10"></div>
          <a href={AboutMe.socials.email} className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform"><Mail size={20} /></a>
        </div>
      </div>
    </motion.nav>
  );
}