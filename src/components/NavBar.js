import React from "react";
import CartWidget from "./CartWidget";
import NavBarItem from "./NavBarItem"

const NavBar = () => {
  return (
    <>
      <div className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid pt-1 pe-4">
          <a className="navbar-brand" href="#">
            MI CORRALON
          </a>
          <CartWidget conteo="4" />
        </div>
      </div>

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
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
              <NavBarItem nombre="INICIO" url="#" />
              <NavBarItem nombre="CATÁLOGO" url="#" />
              <NavBarItem nombre="PRESUPUESTO" url="#" />
              <NavBarItem nombre="CONTACTO" url="#" />
              <NavBarItem nombre="LOGIN" url="#" />
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
