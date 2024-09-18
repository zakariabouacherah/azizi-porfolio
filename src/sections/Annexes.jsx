import React from "react";
import Heading from "../components/Heading";

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
      <div></div>
    </div>
  );
};

export default Annexes;
