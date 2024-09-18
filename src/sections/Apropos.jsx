import React from "react";
import Heading from "../components/Heading";
import { Divider, Timeline } from "antd";
import { TbClock, TbMapPin } from "react-icons/tb";

const Apropos = () => {
  const formationItems = [
    {
      label: <div className="text-secondary text-lg">2018 - 2019</div>,
      children: (
        <div>
          <div className="text-lg font-semibold">
            Baccalauréat Science Physique et Chimie Option Français
          </div>
          <div className="flex items-center gap-2">
            <TbMapPin /> Agadir | Lycée Mohamed El Bakkali
          </div>
        </div>
      ),
      color: "#26436c",
    },
    {
      label: <div className="text-secondary text-lg">2019 - 2022</div>,
      children: (
        <div className="text-lg font-semibold">
          Certificate de British en Soft Skills
        </div>
      ),
      color: "#26436c",
    },
    {
      label: <div className="text-secondary text-lg">2019 - 2021</div>,
      children: (
        <div>
          <div className="text-lg font-semibold">
            Technicienne Spécialisée en Système Automatisé.
          </div>
          <div className="flex items-center gap-2">
            <TbMapPin /> Casablanca | Institut de Formation des Métiers de
            l'Industrie Automobile
          </div>
        </div>
      ),
      color: "#26436c",
    },
  ];
  const expItems = [
    {
      label: (
        <div className="text-secondary text-lg">04/11/2019 - 28/12/2019</div>
      ),
      children: (
        <div className="text-lg font-semibold">
          STAGIAIRE / COUSUMAR Casablanca
        </div>
      ),
      color: "#26436c",
    },
    {
      label: (
        <div className="text-secondary text-lg">25/02/2020 - 25/03/2020</div>
      ),
      children: (
        <div className="text-lg font-semibold">
          STAGIAIRE / ALTRAN Casablanca
        </div>
      ),
      color: "#26436c",
    },
    {
      label: (
        <div className="text-secondary text-lg">01/11/2020 - 28/11/2020</div>
      ),
      children: (
        <div className="text-lg font-semibold">STAGIAIRE / FANTASIA Agadir</div>
      ),
      color: "#26436c",
    },
    {
      label: (
        <div className="text-secondary text-lg">01/02/2021 - 26/03/2021</div>
      ),
      children: (
        <div className="text-lg font-semibold">
          STAGE DE FIN DE FORMATION / IFMIA Casablanca
        </div>
      ),
      color: "#26436c",
    },
    {
      label: (
        <div className="text-secondary text-lg">27/01/2022 - 20/05/2022</div>
      ),
      children: (
        <div className="text-lg font-semibold uppercase">
          SERVICE INSPECTION ET qualité / groupe elec
        </div>
      ),
      color: "#26436c",
    },
    {
      label: <div className="text-secondary text-lg pl-2">23/05/2022</div>,
      children: (
        <div className="text-lg font-semibold uppercase">
          Design mécanique / CAPGEMINI ENGINEERING
        </div>
      ),
      color: "#26436c",
      dot: (
        <div className="bg-transparent text-lg">
          <TbClock />
        </div>
      ),
    },
  ];
  return (
    <div
      id="a-propos"
      className="max-w-screen-xl items-center flex flex-col gap-12 mx-auto p-4"
    >
      <div>
        <Heading label={"à propos"} />
      </div>
      <div className="self-start text-2xl uppercase ">Formation :</div>
      <div className="w-full">
        <Timeline
          items={formationItems}
          mode="alternate"
          className="text-white"
        />
      </div>
      <Divider className="bg-secondary/30" />
      <div className="self-start text-2xl uppercase ">éxperiences :</div>
      <div className="w-full">
        <Timeline items={expItems} mode="alternate" className="text-white" />
      </div>
    </div>
  );
};

export default Apropos;
