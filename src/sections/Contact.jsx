import React from "react";
import Heading from "../components/Heading";
import bg from "../assets/bg.jpg";

const Contact = () => {
  return (
    <div className="bg-primary relative">
      <img
        src={bg}
        alt="ikram azizi"
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />
      <div className="absolute top-0 left-0 w-full h-full z-10 bg-black/60"></div>
      <div
        id="contact"
        className="max-w-screen-xl items-center flex flex-col gap-12 mx-auto p-4 py-16 relative z-20"
      >
        <Heading label={"Contact"} />
        <div className="text-center font-light">
          Je serais ravie d'échanger avec vous ! Pour toute question ou
          opportunité, n’hésitez pas à me contacter
        </div>
        <div className="lg:w-2/3 w-full bg-white text-forBg flex flex-col items-center gap-5 py-4 rounded-xl shadow-2xl shadow-white/40">
          <div>
            <span className="font-bold">Email: </span>
            <span>aziziikram2001@gmail.com</span>
          </div>
          <div>
            <span className="font-bold">Téléphone: </span>
            <span>+212 7 73 27 93 30</span>
          </div>
          <div>
            <span className="font-bold">Adresse: </span>
            <span>Ait Melloul Agadir, 80 000</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
