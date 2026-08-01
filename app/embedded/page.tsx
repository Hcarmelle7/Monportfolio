import EmbeddedSkills from "@/components/sections/EmbeddedSkills";
import HardwareProjects from "@/components/sections/HardwareProjects";
import EmbeddedEducation from "@/components/sections/EmbeddedEducation";

export default function EmbeddedProfile() {
  return (
    <div className="flex flex-col gap-20 md:gap-12 pb-24 animate-fade-in">
      <div id="skills">
        <EmbeddedSkills />
      </div>

      <div id="projects">
        <HardwareProjects />
      </div>

      <div id="education">
        <EmbeddedEducation />
      </div>
    </div>
  );
}