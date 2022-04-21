import React from "react";

const Cabecera = ({ nombre, url, carrito }) => {
  return (
    <div className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid pt-1 pe-4">
        <a className="navbar-brand" href={url}>
          {nombre}
        </a>
        {carrito}
      </div>
    </div>
  );
};

export default Cabecera;
