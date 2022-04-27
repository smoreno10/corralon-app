import React, { useState } from "react";

const ItemCount = ({ initial, stock, onAdd }) => {

  const [count, setCount] = useState(stock > 0 ? initial: stock);
  const decrement = () => () => {
    if (count > 0) {
      setCount(count - 1);
    }
  }
  const increment = () => () => {
    if (count < stock) {
      setCount(count + 1)
    }
  }

  const agregar = () => () => {
    if (stock > 0 && count > 0) {
      onAdd(count)
    }
  }

  return (
    <>
      <div className="card-text">
        <div className="btn-group" role="group" aria-label="Basic example">
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
      </div>
      <button type="button" className="btn btn-link" onClick={agregar()}>
        Agregar al carrito
      </button>
    </>
  );
};

export default ItemCount;
