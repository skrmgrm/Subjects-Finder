import React, { useState } from "react";

const Navbar = (props) => {
  const [search, setSearch] = useState("");

  const onSearchChange = (e) => {
    setSearch(e.target.value);
    props.onSearch(e.target.value);
    if (e.target.value === "") {
      props.searchState(false);
    } else {
      props.searchState(true);
    }
  };

  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="container-fluid d-flex justify-content-center align-center">
          <input
            className="form-control me-2
              "
            type="search"
            placeholder="Search"
            value={search}
            onChange={onSearchChange}
          />
          <button className="btn btn-outline-primary">
            <i className="bi bi-search"></i>
          </button>
        </div>
      </nav>
      <div className="container d-flex justify-content-center align-center">
        <p className="lead text-primary">&copy; 2021 skrmgrm</p>
      </div>
    </div>
  );
};

export default Navbar;
