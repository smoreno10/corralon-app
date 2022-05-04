import React from "react";
import { Link } from "react-router-dom";

const Item = ({ pItem }) => {
  return (
    <>
      <div className="col">
        <div className="card h-100">
          <div className="card-body d-flex flex-column align-items-center">
            <h5 className="card-title">{pItem.title}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{`Stock: ${pItem.stock} `}</h6>
            <Link className="card-link" to={`/Item/${pItem.id}`}>Ver detalles</Link>
          </div>
        </div>
      </div>

    </>
  );
};

export default Item;
