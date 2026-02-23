import Skills from "@/components/sections/DeveloperSkills";
import Projects from "@/components/sections/DevProjects";
import WebCertifications from "@/components/sections/WebCertifications";

export default function DeveloperProfile() {
  return (
    <div className="flex flex-col gap-20 md:gap-12 pb-24 animate-fade-in">

      <div id="skills">
        <Skills />
      </div>
      
      <div id="projects">
        <Projects />
      </div>
      
      <div id="education">
        <WebCertifications />
      </div>
      
    </div>
  );
}