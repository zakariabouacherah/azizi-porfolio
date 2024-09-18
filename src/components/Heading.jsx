import React from "react";

const Heading = ({ label }) => {
  return (
    <div className="font-bold text-3xl lg:text-5xl text-secondary text-center uppercase ">
      {label}
    </div>
  );
};

export default Heading;
