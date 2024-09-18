import React from "react";
import Heading from "../components/Heading";
import { Collapse } from "antd";

const Competences = () => {
  const items = [
    {
      key: "1",
      label: "Electricité et électronique",
      children: (
        <ul className="space-y-2 capitalize">
          <li>électricité industrielle</li>
          <li>électronique de puissance</li>
          <li>instrumentation</li>
          <li>circuit numérique</li>
          <li>installation et câblage des moteurs électriques</li>
        </ul>
      ),
    },
    {
      key: "2",
      label: "Mécanique ",
      children: (
        <ul className="space-y-2 capitalize">
          <li>CAO</li>
          <li>CatiaV6/V5 </li>
          <li>Nx siemens</li>
        </ul>
      ),
    },
    {
      key: "3",
      label: "Automatisme",
      children: (
        <ul className="space-y-2 capitalize">
          <li>programmation des automates programmables industriels</li>
          <li>programmation des Arduino,des Microcontrôleurs </li>
        </ul>
      ),
    },
    {
      key: "4",
      label: "Gestion des projets",
      children: (
        <ul className="space-y-2 capitalize">
          <li>PMBOK</li>
          <li>ISO21502:2020</li>
          <li>Gantt, Pert</li>
          <li>A3</li>
          <li>Agile</li>
        </ul>
      ),
    },
    {
      key: "5",
      label: "Logiciels",
      children: (
        <ul className="space-y-2 capitalize">
          <li>LabVIEW</li>
          <li>Matlab</li>
          <li>Arduino</li>
          <li>Proteus (ISIS et ARES)</li>
        </ul>
      ),
    },
    {
      key: "6",
      label: "Langagues de programmation",
      children: (
        <ul className="space-y-2 capitalize">
          <li>C</li>
          <li>C++</li>
          <li>Python</li>
          <li>VHDL</li>
        </ul>
      ),
    },
    {
      key: "7",
      label: "Bureautiques",
      children: (
        <ul className="space-y-2 capitalize">
          <li>Word</li>
          <li>Excel</li>
          <li>PowerPoint</li>
          <li>Acces</li>
        </ul>
      ),
    },
  ];
  return (
    <div
      id="compétences"
      className="max-w-screen-xl items-center flex flex-col gap-12 mx-auto p-4 pb-16"
    >
      <div>
        <Heading label={"Compétences"} />
      </div>
      <div className="lg:w-2/3 w-full font-sans">
        <Collapse accordion items={items} className="bg-primary text-white" />
      </div>
    </div>
  );
};

export default Competences;
