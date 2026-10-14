import Competences from "@/components/profils/embarque/Competences";
import Projets from "@/components/profils/embarque/Projets";
import Formation from "@/components/profils/embarque/Formation";

export default function ProfilEmbarque() {
  return (
    <div className="flex flex-col gap-16 md:gap-24 pb-20">
      <Competences />
      <Projets />
      <Formation />
    </div>
  );
}
