import React from "react";
import Heading from "../components/Heading";
import bac from "../assets/certificat de baccalaureat.pdf";
import ach from "../assets/certificate of completion.pdf";
import attestationReussite from "../assets/attestation de reussite IFMIA.pdf";
import cosumar from "../assets/attestation de stage cosumar.pdf";
import fantasia from "../assets/attestation de stage Fantasia.pdf";
import groupelec from "../assets/Attestation de travail Groupelec.pdf";

const Annexes = () => {
  return (
    <div
      id="annexes"
      className="max-w-screen-xl items-center flex flex-col gap-12 mx-auto p-4"
    >
      <div>
        <Heading label={"Documents complémentaires"} />
      </div>
      <div>
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
          href={attestationReussite}
          target="_blank"
          className="py-3 px-6 border-[1px] border-secondary rounded-full hover:bg-secondary hover:shadow-2xl hover:shadow-secondary transition uppercase"
        >
          attestation de réussite IFMIA
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
          href={groupelec}
          target="_blank"
          className="py-3 px-6 border-[1px] border-secondary rounded-full hover:bg-secondary hover:shadow-2xl hover:shadow-secondary transition uppercase"
        >
          Attestation de travail Groupelec
        </a>
      </div>
    </div>
  );
};

export default Annexes;
