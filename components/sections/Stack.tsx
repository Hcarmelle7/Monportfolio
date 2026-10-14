import { stackEmbarque, stackWeb } from "@/data/content";

interface TechItem {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}

interface TechStackProps {
  id: string;
  title: string;
  subtitle: string;
  gradientClass: string;
  items: TechItem[];
}

export function TechStack({ id, title, subtitle, gradientClass, items }: TechStackProps) {
  return (
    <section id={id} className="pt-14 md:pt-20 pb-4 md:pb-6 relative w-full max-w-full overflow-hidden">
      
      <div className="max-w-6xl mx-auto px-4 mb-10 md:mb-14 text-center">
        <h2 className={`text-2xl sm:text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent ${gradientClass}`}>
          {title}
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
          {subtitle}
        </p>
      </div>

      <div className="relative w-full max-w-full flex overflow-hidden group [mask-image:_linear-gradient(to_right,transparent_0,_black_32px,_black_calc(100%-32px),transparent_100%)] md:[mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
        
        <div className="flex w-max gap-8 sm:gap-12 md:gap-20 pr-8 sm:pr-12 md:pr-20 py-5 sm:py-7 animate-marquee group-hover:[animation-play-state:paused]">
          {[...items, ...items].map((stack, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center justify-center gap-3 sm:gap-4 min-w-[84px] sm:min-w-[100px] cursor-pointer"
            >
              <div className="p-3.5 sm:p-4 bg-white/5 border border-white/10 rounded-2xl shadow-lg transition-all duration-300 hover:scale-110 hover:bg-white/10 group-hover:opacity-100 opacity-70">
                <stack.icon className={`w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 ${stack.color}`} />
              </div>
              
              <span className="text-gray-400 font-medium text-xs sm:text-sm md:text-base">
                {stack.name}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default function DevStack() {
  return (
    <TechStack
      id="skills-dev"
      title="Mon Stack Technique"
      subtitle="Les outils et technologies que j'utilise au quotidien pour concevoir des applications web et mobiles performantes."
      gradientClass="bg-gradient-to-r from-purple-400 to-pink-600"
      items={stackWeb}
    />
  );
}

export function EmbStack() {
  return (
    <TechStack
      id="skills-embarque"
      title="Mon Stack Technique"
      subtitle="Les outils et technologies que j'utilise au quotidien pour concevoir des projets techniques et autonomes."
      gradientClass="bg-gradient-to-r from-cyan-400 to-blue-600"
      items={stackEmbarque}
    />
  );
}



