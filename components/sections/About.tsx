"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { about } from "@/data/content";

export default function About() {
    const { scrollY } = useScroll();
    const [mounted, setMounted] = useState(false);
    const [isDesktop, setIsDesktop] = useState(false);
    const [offsets, setOffsets] = useState({ x: 384, y: -500 });

    useEffect(() => {
        setMounted(true);
        const updateLayout = () => {
            const isDesk = window.innerWidth >= 1024;
            setIsDesktop(isDesk);

            if (isDesk) {
                // Largeur du conteneur max-w-6xl (1152px)
                const containerWidth = Math.min(window.innerWidth - 32, 1152);
                const containerLeft = (window.innerWidth - containerWidth) / 2;
                // La colonne About photo occupe 1/3 du conteneur
                const aboutPhotoCenterX = containerLeft + (containerWidth / 3) / 2;
                //L'avatar
                const heroPhotoCenterX = window.innerWidth / 2;
                const deltaX = heroPhotoCenterX - aboutPhotoCenterX;

                setOffsets({
                    x: Math.round(deltaX),
                    y: -500
                });
            }
        };

        updateLayout();
        window.addEventListener("resize", updateLayout);
        return () => window.removeEventListener("resize", updateLayout);
    }, []);

    // Animation photo
    const y = useTransform(scrollY, (latest) => {
        const progress = Math.min(Math.max(latest / 380, 0), 1);
        return `${Math.round(offsets.y * (1 - progress))}px`;
    });

    const x = useTransform(scrollY, (latest) => {
        const progress = Math.min(Math.max(latest / 380, 0), 1);
        return `${Math.round(offsets.x * (1 - progress))}px`;
    });

    const scale = useTransform(scrollY, (latest) => {
        const progress = Math.min(Math.max(latest / 380, 0), 1);
        return 0.42 + (1 - 0.42) * progress;
    });

    const borderRadius = useTransform(scrollY, (latest) => {
        const progress = Math.min(Math.max(latest / 380, 0), 1);
        return `${Math.round(999 - (999 - 16) * progress)}px`;
    });

    const opacity = useTransform(scrollY, (latest) => {
        if (latest <= 15) return 0;
        if (latest >= 80) return 1;
        return (latest - 15) / 65;
    });

    return (
        <section 
            id="about" 
            className="pt-4 md:pt-6 pb-16 md:pb-20 px-4 relative w-full max-w-6xl mx-auto z-10 scroll-mt-20 md:scroll-mt-24"
        >
            <div className="flex flex-col items-center mb-6 md:mb-8">
                <h2 className="text-3xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                    {about.title}
                </h2>
            </div>
            
            <div className="flex flex-col md:flex-row gap-8 md:gap-20 items-center md:items-start">

                <div className="w-full md:w-1/3 md:sticky md:top-32 z-20 flex justify-center">
                    {mounted && isDesktop ? (
                        <motion.div
                            style={{ x, y, scale, borderRadius, opacity }}
                            className="relative aspect-[4/5] w-56 sm:w-64 md:w-full rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_30px_rgba(139,92,246,0.15)] origin-top bg-[#121217]"
                        >
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/60 via-transparent to-transparent z-10 pointer-events-none" />

                            <Image
                                src="/images/profile.webp"
                                alt="Carmelle Helle"
                                fill
                                sizes="(max-width: 768px) 256px, 33vw"
                                className="object-cover object-top"
                                priority
                            />
                        </motion.div>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="relative aspect-[4/5] w-56 sm:w-64 md:w-full rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_30px_rgba(139,92,246,0.15)] origin-top bg-[#121217]"
                        >
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/60 via-transparent to-transparent z-10 pointer-events-none" />

                            <Image
                                src="/images/profile.webp"
                                alt="Carmelle Helle"
                                fill
                                sizes="(max-width: 768px) 256px, 33vw"
                                className="object-cover object-top"
                                priority
                            />
                        </motion.div>
                    )}
                </div>

                <motion.div
                    initial={{ opacity: 0, x: isDesktop ? 40 : 0, y: !isDesktop ? 20 : 0 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.8 }}
                    className="w-full md:w-2/3 space-y-6"
                >
                   

                    <div className="space-y-2 md:space-y-4 text-gray-300 text-left md:text-justify text-base leading-relaxed">
                        {about.description.map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                    </div>
                </motion.div>

            </div>
        </section>
    );
}