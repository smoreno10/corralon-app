import React, { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";

const ItemDetail = ({ pItem }) => {
  const [count, setCount] = useState(0);
  const onAdd = (quantiyToAdd) => setCount(quantiyToAdd);

  return (
    <div className="container mt-4">
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={pItem.imgUrl}
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{`Producto: ${pItem.title}`}</h5>
              <h6 className="card-subtitle mb-2 text-muted">{`Stock: ${pItem.stock} unidades`}</h6>
              <h6 className="card-subtitle mb-2 text-muted">{`Precio: $ ${pItem.price}`}</h6>
              <h6 className="card-subtitle mb-2 text-muted">
                Características:
              </h6>
              <p className="card-text">{pItem.detail}</p>
              {count == 0 ? (
                <ItemCount item={pItem} onAdd={onAdd} />
              ) : (
                <>
                  <Link className="card-link" to="/Cart">
                    Ir al carrito
                  </Link>
                  <Link className="card-link" to="/">
                    Seguir comprando
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
