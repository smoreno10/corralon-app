import React from "react";
import CartWidget from "./CartWidget"

const Cabecera = ({nombre, url, conteo}) => {
  return (
    <div className="navbar navbar-expand-lg navbar-dark bg-dark" >
      <div className="container-fluid pt-1 pe-4">
        <a className="navbar-brand" href={url}>
          {nombre}
        </a>
        <CartWidget conteo={conteo}/>
      </div>
    </div>
  );
};

export default Cabecera;
