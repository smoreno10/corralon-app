import React, { useState } from "react";

const ItemCount = ({ initial, stock, onAdd }) => {
  const [count, setCount] = useState(stock > 0 ? initial : stock);

  const decrement = () => () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  const increment = () => () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };
  const agregar = () => () => {
    if (stock > 0 && count > 0) {
      onAdd(count);
    }
  };

  return (
    <>
     {/* <div className="d-flex flex-column justify-content-center">
       <div className="card-text"> */}
        <div role="group">
          <button
            type="button"
            className="btn btn-warning"
            onClick={decrement()}
          >
            -
          </button>
          <button type="button" className="btn btn-light" disabled>
            <strong>{count}</strong>
          </button>
          <button
            type="button"
            className="btn btn-warning"
            onClick={increment()}
          >
            +
          </button>
        </div>
      {/* </div> */}
      <a type="button" className="card-link" onClick={agregar()}>
        Agregar al carrito
      </a>
     {/* </div> */}
    </>
  );
};

export default ItemCount;
