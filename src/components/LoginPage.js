import React from "react";

import { user } from "../provider";

import ParticleBackground from "./particle/ParticleBackground";

import ceaLogo from "../assets/ceaLogo.png";

const LoginPage = ({ loginHandler }) => {
  const login = async () => {
    const result = await user();
    if (result) {
      loginHandler(true, result.email, result.displayName);
      localStorage.setItem("email", result.email);
      alert(`Signed-in as ${result.displayName}`);
    }
  };

  return (
    <>
      <div className="container-fluid bg-dark d-flex flex-column h-100 justify-content-center align-items-center">
        <img className="w-25" src={ceaLogo} alt="CEA Logo" />
        <h1 className="h1 text-white">CEA Subjects Finder</h1>
        <div className="w-100 d-flex justify-content-center mt-3">
          <button className="btn btn-primary w-25 btn-login" onClick={login}>
            <i className="bi bi-google"></i> Login
          </button>
        </div>
      </div>
      <ParticleBackground className="particle-background" />
    </>
  );
};

export default LoginPage;
