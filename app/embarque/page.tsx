import Competences from "@/components/profils/embarque/Competences";
import Projets from "@/components/profils/embarque/Projets";
import Formation from "@/components/profils/embarque/Formation";

export default function ProfilEmbarque() {
  return (
    <div className="flex flex-col gap-20 md:gap-12 pb-24 animate-fade-in">
      <div id="competences">
        <Competences />
      </div>

      <div id="projets">
        <Projets />
      </div>

      <div id="formation">
        <Formation />
      </div>
    </div>
  );
}
