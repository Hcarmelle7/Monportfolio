"use client";
import Image from 'next/image';
import { projetsDeveloppeur } from '@/data/content';
import { motion } from 'framer-motion';
import { ExternalLink, Code2 } from 'lucide-react';
import SpotlightCard from '@/components/ui/SpotlighCard';

export default function Projects() {
    return (
        <section className="pt-4 md:pt-6 pb-16 md:pb-20 px-4 max-w-6xl mx-auto scroll-mt-20 md:scroll-mt-24" id="projets">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-8 md:mb-10"
            >
                <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-white">
                    {projetsDeveloppeur.title}
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                    {projetsDeveloppeur.subtitle}
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projetsDeveloppeur.projects.map((item, index) => (
                    
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="h-full"
                    >
                        <SpotlightCard className="h-full flex flex-col group">
                            <div className="p-5 sm:p-6 flex flex-col h-full z-10 relative bg-black/20 backdrop-blur-sm hover:bg-black/10 transition-colors">

                                {/* Image Preview Banner  */}
                                <div className="relative w-full h-44 rounded-xl overflow-hidden mb-4 border border-purple-500/20 bg-purple-500/5 group/img">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-70" />
                                    <a
                                        href={item.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`Voir le projet ${item.title}`}
                                        className="absolute top-3 right-3 p-2 bg-black/60 hover:bg-purple-600 text-white rounded-full backdrop-blur-md border border-white/20 transition-all duration-300 hover:scale-110 shadow-lg cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
                                        title="Voir le projet"
                                    >
                                        <ExternalLink size={16} />
                                        <span className="sr-only"> (ouvre un nouvel onglet)</span>
                                    </a>
                                </div>

                                {/* Contenu texte */}
                                <div className="flex flex-col flex-grow">
                                    <div className="flex items-center gap-2 mb-2">
                                        <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
                                            {item.title}
                                        </h3>
                                    </div>
                                    <p className="text-gray-400 text-sm mb-6 flex-grow leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>

                                {/* Footer de la carte avec les technologies */}
                                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5 mt-auto">
                                    {item.tech.map((t) => (
                                        <span
                                            key={t}
                                            className="text-xs font-medium text-purple-300 bg-purple-500/10 px-2.5 py-1 rounded-md border border-purple-500/20"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </SpotlightCard>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}