import React from "react";
import Heading from "../components/Heading";
import bac from "../assets/certificat de baccalaureat.pdf";
import ach from "../assets/certificate of completion.pdf";
import diplome from "../assets/diplome.pdf";
import cosumar from "../assets/attestation de stage cosumar.pdf";
import fantasia from "../assets/attestation de stage Fantasia.pdf";
import groupelec from "../assets/Attestation de travail Groupelec.pdf";
import att_travail from "../assets/attestatin de travail_compressed.pdf";
import att_stage_capgemini from "../assets/Attestation de stage capgemini.pdf";
import att_stage_ifmia from "../assets/attestation stage ifmia.pdf";

const Annexes = () => {
  return (
    <div
      id="annexes"
      className="max-w-screen-xl items-center flex flex-col gap-12 mx-auto p-4 pb-16"
    >
      <div>
        <Heading label={"Documents complémentaires"} />
      </div>
      <div className="text-center font-light">
        Vous trouverez ci-dessous la liste des pièces jointes à mon portfolio
      </div>
      <div className="flex items-center justify-center flex-wrap  gap-4 w-full">
        <a
          href={bac}
          target="_blank"
          className="py-3 px-6 border-[1px] border-secondary rounded-full hover:bg-secondary hover:shadow-2xl hover:shadow-secondary transition uppercase"
        >
          Certificat du baccalauréat
        </a>

        <a
          href={ach}
          target="_blank"
          className="py-3 px-6 border-[1px] border-secondary rounded-full hover:bg-secondary hover:shadow-2xl hover:shadow-secondary transition uppercase"
        >
          certificat d'achèvement
        </a>

        <a
          href={diplome}
          target="_blank"
          className="py-3 px-6 border-[1px] border-secondary rounded-full hover:bg-secondary hover:shadow-2xl hover:shadow-secondary transition uppercase"
        >
          Diplôme IFMIA
        </a>

        <a
          href={cosumar}
          target="_blank"
          className="py-3 px-6 border-[1px] border-secondary rounded-full hover:bg-secondary hover:shadow-2xl hover:shadow-secondary transition uppercase"
        >
          attestation de stage cosumar
        </a>

        <a
          href={fantasia}
          target="_blank"
          className="py-3 px-6 border-[1px] border-secondary rounded-full hover:bg-secondary hover:shadow-2xl hover:shadow-secondary transition uppercase"
        >
          attestation de stage Fantasia
        </a>
        <a
          href={att_stage_ifmia}
          target="_blank"
          className="py-3 px-6 border-[1px] border-secondary rounded-full hover:bg-secondary hover:shadow-2xl hover:shadow-secondary transition uppercase"
        >
          attestation de stage IFMIA
        </a>
        <a
          href={att_stage_capgemini}
          target="_blank"
          className="py-3 px-6 border-[1px] border-secondary rounded-full hover:bg-secondary hover:shadow-2xl hover:shadow-secondary transition uppercase"
        >
          attestation de stage Capgemini
        </a>

        <a
          href={groupelec}
          target="_blank"
          className="py-3 px-6 border-[1px] border-secondary rounded-full hover:bg-secondary hover:shadow-2xl hover:shadow-secondary transition uppercase"
        >
          Attestation de travail Groupelec
        </a>
        <a
          href={att_travail}
          target="_blank"
          className="py-3 px-6 border-[1px] border-secondary rounded-full hover:bg-secondary hover:shadow-2xl hover:shadow-secondary transition uppercase"
        >
          Attestation de travail Capgemini
        </a>
      </div>
    </div>
  );
};

export default Annexes;
