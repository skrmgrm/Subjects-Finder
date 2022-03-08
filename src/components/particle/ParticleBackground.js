import React from "react";
import Particles from "react-tsparticles";
import ParticleConfig from "./particle-config";

const particleBackground = () => {
  return <Particles params={ParticleConfig}></Particles>;
};

export default particleBackground;
