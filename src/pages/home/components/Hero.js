import React from "react";
import Experiment from "./images/theexperiment.png";

const Hero = () => {
  return (
    <div
      className="bg-cover text-center font-Bebas pt-64 tracking-wider font-medium text-white text-6xl bg-scroll bg-center h-screen w-screen"
      style={{
        backgroundImage: `url(${Experiment})`,
      }}
    >
      {" "}
      GIVING THE BEST PROCESS.
    </div>
  );
};
export default Hero;
