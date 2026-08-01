"use client";
import { devProjects } from '@/data/content';
import { motion } from 'framer-motion';
import { ExternalLink, Code2 } from 'lucide-react';
import SpotlightCard from '../ui/SpotlighCard';

export default function Projects() {
    return (
        <section className="py-20 px-4 max-w-6xl mx-auto" id="projects">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
            >
                <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-white">
                    {devProjects.title}
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                    {devProjects.subtitle}
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {devProjects.projects.map((item, index) => (
                    
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <SpotlightCard className="h-full flex flex-col group">
                            <div className="p-6 flex flex-col h-full z-10 relative bg-black/20 backdrop-blur-sm hover:bg-black/10 transition-colors">

                                {/* Header de la carte */}
                                <div className="flex justify-between items-start mb-6 md:hidden">
                                    <div className="p-3 bg-purple-500/10 rounded-lg border border-purple-500/20 text-purple-400">
                                        <Code2 size={24} />
                                    </div>
                                    <a
                                        href={item.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-500 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full"
                                        title="Voir le projet"
                                    >
                                        <ExternalLink size={20} />
                                    </a>
                                </div>

                                <div className='flex items-start md:flex-col justify-center  gap-6  md:items-center md:text-center  '>
                                    <div className="md:p-3 p-2 bg-purple-500/10 rounded-lg border border-purple-500/20 text-purple-400">
                                        <img src={item.image} alt={item.title} className="object-cover md:w-30 md:h-15  h-10 w-45"/>
                                    </div>
                                    <div>
                                        {/* Contenu de la carte */}
                                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                                            {item.title}
                                        </h3>
                                        <p className="text-gray-400 text-sm mb-6 flex-grow leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Footer de la carte */}
                                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                                    {item.tech.map((t) => (
                                        <span
                                            key={t}
                                            className="text-xs font-medium text-purple-300 bg-purple-500/10 px-2.5 py-1 rounded-md border border-purple-500/10"
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