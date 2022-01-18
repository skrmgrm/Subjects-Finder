import React, { useState } from "react";
import { signOutUser } from "../../provider";

const Navbar = (props) => {
  const [search, setSearch] = useState("");

  const onSearchChange = (e) => {
    setSearch(e.target.value);
    props.onSearch(e.target.value);
    if (e.target.value.length !== 0) {
      props.searchState(true);
    } else {
      props.searchState(false);
    }
  };

  const onLogout = () => {
    props.logoutHandler(false);
    signOutUser();
  };

  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="container-fluid d-flex flex-column justify-content-center align-center">
          <input
            className="form-control me-2
              "
            type="search"
            placeholder="Search"
            value={search}
            onChange={onSearchChange}
          />
          <div className="container-fluid text-start mt-2">
            <p className="lead-text text-primary">
              &copy; BARLOLONG, JOSHUA (2021)
            </p>
            <button className="btn btn-danger" onClick={onLogout}>
              Logout
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
