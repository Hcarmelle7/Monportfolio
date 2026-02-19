import Hero from "@/components/sections/Hero";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="flex flex-col gap-10 md:gap-15">
      <Hero />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}