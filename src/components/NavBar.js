import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import NavBarItem from "./NavBarItem";


const NavBar = () => {
  return (
    <>
      <nav className="navbar sticky-top navbar-expand-lg navbar-dark">
        <div className="container-fluid">
        <Link className="navbar-brand" to={"/"}>CORRALONLIFY</Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <NavBarItem nombre="MATERIALES DE CONSTRUCCION" url="/Category/1" />
              <NavBarItem nombre="GRIFFERIA" url="/Category/2" />
            </ul>
            <CartWidget/>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
