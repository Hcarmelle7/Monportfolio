import Competences from "@/components/profils/dev/Competences";
import Projets from "@/components/profils/dev/Projets";
import Certifications from "@/components/profils/dev/Formation";

export default function ProfilDeveloppement() {
  return (
    <div className="flex flex-col gap-16 md:gap-24 pb-20">
      <Competences />
      <Projets />
      <Certifications />
    </div>
  );
}
