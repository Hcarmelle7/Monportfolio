"use client";

import { motion, useScroll, useTransform, useMotionValueEvent, useMotionValue } from "framer-motion";
import Image from "next/image";
import { about } from "@/data/content";
import { useState } from "react";

export default function About() {
    const { scrollY } = useScroll();

  const progress = useMotionValue(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest <= 10) {
      progress.set(0);
    } 
    else if (latest > progress.get()) {
      progress.set(latest);
    }
  });

  const y = useTransform(progress, [0, 400], ["-630px", "0px"]);
  const x = useTransform(progress, [0, 400], ["386px", "0px"]);
  const scale = useTransform(progress, [0, 400], [0, 1]);
  const borderRadius = useTransform(progress, [0, 400], ["999px", "16px"]);

    return (
        <section id="about" className="py-25 px-4 relative max-w-6xl mx-auto z-10">
            <div className="flex flex-col md:flex-row gap-12 md:gap-20 items-start">

                <div className="w-full md:w-1/3 md:sticky md:top-32 z-20 flex justify-center md:block">

                    <motion.div
                        style={{ x, y, scale, borderRadius }}
                        className="relative aspect-[4/5] w-64 md:w-full overflow-hidden border border-white/10 shadow-[0_0_40px_rgba(255,255,255,0.05)] origin-top"
                    >
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent z-10"></div>

                        <Image
                            src="/images/profile.png"
                            alt="Gertrude Carmelle Rose Helle"
                            fill
                            className="object-cover"
                            priority
                        />
                    </motion.div>

                </div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="w-full md:w-2/3 space-y-6"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                        {about.title}
                    </h2>

                    <div className="space-y-6 text-gray-300 text-justify leading-relaxed">
                        {about.description.map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                    </div>

                </motion.div>

            </div>
        </section>
    );
}