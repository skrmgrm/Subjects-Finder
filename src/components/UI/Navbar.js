import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="container-fluid d-flex justify-content-center align-center">
          <form className="py-5 d-flex">
            <input
              className="form-control me-2
              "
              type="search"
              placeholder="Search"
              aria-label="Search"
            />

            <button className="btn btn-outline-primary" type="submit">
              <i className="bi bi-search"></i>
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
