import React from "react";

import { user } from "../provider";

import ceaLogo from "../assets/ceaLogo.jpg";

const LoginPage = ({ loginHandler }) => {
  const login = async () => {
    const result = await user();
    if (result) {
      loginHandler(true, result.email, result.displayName);
      alert(`Signed-in as ${result.displayName}`);
    }
  };

  return (
    <div className="container d-flex flex-column h-100 justify-content-center align-items-center">
      <img className="w-75" src={ceaLogo} alt="CEA Logo" />
      <h1 className="h1">CEA Subjects Finder</h1>
      <div className="w-100 d-flex justify-content-center mt-3">
        <button className="btn btn-primary w-25" onClick={login}>
          <i className="bi bi-google"></i> Login
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
