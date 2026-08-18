import Competences from "@/components/profils/dev/Competences";
import Projets from "@/components/profils/dev/Projets";
import Certifications from "@/components/profils/dev/Certifications";

export default function ProfilDeveloppement() {
  return (
    <div className="flex flex-col gap-10 md:gap-12 pb-20 animate-fade-in">
      <div id="competences">
        <Competences />
      </div>

      <div id="projets">
        <Projets />
      </div>

      <div id="certifications">
        <Certifications />
      </div>
    </div>
  );
}
