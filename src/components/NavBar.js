/* eslint-disable jsx-a11y/anchor-is-valid */
// rafce: rearArrowFunctionExportComponent

import React from "react";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          CORRALON APP
        </a>
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
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">
                INICIO
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                CATÁLOGO
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                PRESUPUESTO
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                CONTACTO
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                LOGIN
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
