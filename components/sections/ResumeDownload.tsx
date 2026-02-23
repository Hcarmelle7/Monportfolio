// // components/sections/ResumeDownload.tsx
// "use client";

// import { motion } from "framer-motion";
// import { Download, FileText } from "lucide-react";
// import { useProfile } from "@/context/ProfileContext";

// export default function ResumeDownload() {
//   const { profile } = useProfile();

//   // On adapte le lien, le texte et les couleurs selon le profil !
//   const cvConfig = {
//     developer: {
//       file: "/cv-developpeur-helle.pdf",
//       title: "Télécharger mon CV Développeur Web",
//       gradient: "from-purple-600 to-pink-600",
//       shadow: "shadow-[0_0_30px_rgba(168,85,247,0.4)] hover:shadow-[0_0_50px_rgba(168,85,247,0.6)]",
//       border: "border-purple-500/50"
//     },
//     embedded: {
//       file: "/cv-embarque-helle.pdf",
//       title: "Télécharger mon CV Ingénierie & Embarqué",
//       gradient: "from-cyan-600 to-emerald-600",
//       shadow: "shadow-[0_0_30px_rgba(6,182,212,0.4)] hover:shadow-[0_0_50px_rgba(6,182,212,0.6)]",
//       border: "border-cyan-500/50"
//     }
//   };

//   const currentConfig = cvConfig[profile];

//   return (
//     <section className="py-12 px-4 relative max-w-4xl mx-auto z-10 flex justify-center">
//       <motion.div
//         initial={{ opacity: 0, scale: 0.9 }}
//         whileInView={{ opacity: 1, scale: 1 }}
//         viewport={{ once: true }}
//         whileHover={{ y: -5 }}
//         className="relative group"
//       >
//         {/* Lueur d'arrière-plan animée */}
//         <div className={`absolute -inset-1 bg-gradient-to-r ${currentConfig.gradient} rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-500`}></div>
        
//         {/* Le Bouton de téléchargement */}
//         <a 
//           href={currentConfig.file}
//           target="_blank"
//           rel="noopener noreferrer"
//           download
//           className={`relative flex items-center gap-4 px-8 py-5 bg-[#0a0a0a] rounded-xl border ${currentConfig.border} ${currentConfig.shadow} transition-all duration-300`}
//         >
//           <div className={`p-3 rounded-lg bg-gradient-to-br ${currentConfig.gradient}`}>
//             <FileText className="w-6 h-6 text-white" />
//           </div>
          
//           <div className="flex flex-col text-left mr-4">
//             <span className="text-white font-bold text-lg md:text-xl">
//               Prêt(e) à collaborer ?
//             </span>
//             <span className="text-gray-400 text-sm">
//               {currentConfig.title}
//             </span>
//           </div>

//           <div className="ml-auto pl-4 border-l border-white/10 text-white group-hover:scale-110 transition-transform">
//             <Download className="w-6 h-6" />
//           </div>
//         </a>
//       </motion.div>
//     </section>
//   );
// }