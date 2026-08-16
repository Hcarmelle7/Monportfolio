import Competences from "@/components/profils/embarque/Competences";
import Projets from "@/components/profils/embarque/Projets";
import Formation from "@/components/profils/embarque/Formation";

export default function ProfilEmbarque() {
  return (
    <div className="flex flex-col gap-20 md:gap-12 pb-24 animate-fade-in">
      <div id="skills">
        <Competences />
      </div>

      <div id="projects">
        <Projets />
      </div>

      <div id="education">
        <Formation />
      </div>
    </div>
  );
}
