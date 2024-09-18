import { Button, Divider } from "antd";
import React from "react";
import Typewriter from "typewriter-effect";
import {
  TbBrandGmail,
  TbBrandInstagram,
  TbBrandLinkedin,
} from "react-icons/tb";
import cv from "../assets/cv.pdf";
import me from "../assets/me.jpg";

const HeroSection = () => {
  return (
    <div
      id="home"
      className="max-w-screen-xl items-center justify-between flex flex-col lg:flex-row gap-12 mx-auto p-4 lg:max-h-screen min-h-[100dvh] pt-40 lg:pt-20  "
    >
      <div className="lg:w-1/2 space-y-3">
        <div className="space-y-2">
          <div className="text-4xl font-bold lg:flex gap-2">
            Bonjour, je suis
            <Typewriter
              options={{
                strings: ["AZIZI", "IKRAM"],
                autoStart: true,
                loop: true,
                delay: 300,
              }}
            />
          </div>
          <div className="font-semibold text-lg">
            Technicienne spécialisée en systèmes automatisés
          </div>
          <div className="font-light text-[15px] tracking-wide">
            Avec un diplôme bac+2 de l'Institut de Formation des Métiers de
            l'Industrie Automobile, je suis passionnée par les technologies
            innovantes et les solutions automatisées. Mon parcours m’a permis de
            développer des compétences solides dans le domaine, et je suis prête
            à relever de nouveaux défis pour contribuer à des projets
            passionnants.
          </div>
        </div>
        <Divider className="border-secondary/30" />
        <div className="space-y-8">
          <div className="flex items-center gap-3 text-secondary ">
            <a
              href="https://www.linkedin.com/in/ikram-azizi-997339215"
              target="_blank"
              className="text-3xl"
            >
              <TbBrandLinkedin />
            </a>
            <a
              href="mailto:aziziikram2001@gmail.com"
              target="_blank"
              className="text-3xl"
            >
              <TbBrandGmail />
            </a>
            <a
              href="https://instagram.com/ikram__az_?igshid=MzRlODBiNWFlZA=="
              target="_blank"
              className="text-3xl"
            >
              <TbBrandInstagram />
            </a>
          </div>
          <div className="mt-6">
            <a
              href={cv}
              download={"CV Azizi Ikram"}
              target="_blank"
              className="py-3 px-6 border-[1px] border-secondary rounded-full hover:bg-secondary hover:shadow-2xl hover:shadow-secondary transition"
            >
              Telecharger mon cv
            </a>
          </div>
        </div>
      </div>
      <div className="">
        <img src={me} alt="Azizi Ikram" className="w-[400px] rounded-2xl" />
      </div>
    </div>
  );
};

export default HeroSection;
