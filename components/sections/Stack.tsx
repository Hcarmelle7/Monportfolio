import { engineeringStacks, webStacks } from "@/data/content";
import { motion } from "framer-motion";

export default function DevStack() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      
      <div className="max-w-6xl mx-auto px-4 mb-16 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          Mon Stack Technique
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          Les outils et technologies que j'utilise au quotidien pour concevoir des applications web et mobiles performantes.
        </p>
      </div>

      <div className="relative w-full flex overflow-hidden group [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
        
        <motion.div
          className="flex w-max gap-16 md:gap-24 pr-16 md:pr-24 py-8"
          
          // L'animation va de 0 à la moitié de la div
          animate={{ x: ["0%", "-50%"] }}
          
          transition={{
            duration: 15, // Vitesse du tour complet
            ease: "linear", // Vitesse constante 
            repeat: Infinity, // Boucle infinie
          }}
        >
          
          {[...webStacks, ...webStacks].map((stack, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center justify-center gap-4 min-w-[100px]"
            >
              <div className="p-4 bg-white/5 border border-white/10 rounded-2xl shadow-lg transition-all duration-300 hover:scale-110 hover:bg-white/10 group-hover:opacity-100 opacity-60">
                <stack.icon className={`w-12 h-12 md:w-16 md:h-16 ${stack.color}`} />
              </div>
              
              <span className="text-gray-400 font-medium text-sm md:text-base">
                {stack.name}
              </span>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}



export  function EmbStack() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      
      <div className="max-w-6xl mx-auto px-4 mb-16 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600">
          Mon Stack Technique
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          Les outils et technologies que j'utilise au quotidien pour concevoir des projets technique et autonomes.
        </p>
      </div>

      <div className="relative w-full flex overflow-hidden group [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
        
        <motion.div
          className="flex w-max gap-8 md:gap-24 pr-8 md:pr-24 py-8"
          // L'animation va de 0 à la moitié de la div
          animate={{ x: ["0%", "-50%"] }}
          
          transition={{
            duration: 15, // Vitesse du tour complet
            ease: "linear", // Vitesse constante
            repeat: Infinity, // Boucle infinie
          }}
        >
          {[...engineeringStacks, ...engineeringStacks].map((stack, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center justify-center gap-2 min-w-[100px]"
            >
                {/* effet survol */}
              <div className="p-4 bg-white/5 border border-white/10 rounded-2xl shadow-lg transition-all duration-300 hover:scale-110 hover:bg-white/10 group-hover:opacity-100 opacity-60">
                <stack.icon className={`w-8 h-8 md:w-16 md:h-16 ${stack.color}`} />
              </div>
              
              <span className="text-gray-400 font-medium text-sm md:text-base">
                {stack.name}
              </span>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}



