import React, { useState } from "react";
import { useCartContext } from "../context/CartContext";
import { itemsData } from "../data/itemsData"


const ItemCount = ({ initial, stock, onAdd, id }) => {
  const { addToCart } = useCartContext()
  const [count, setCount] = useState(stock > 0 ? initial : stock);
  

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  
  const increment = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };
  const handleClick = () =>  {
    if (stock > 0 && count > 0) {
      addToCart(itemsData.find((i) => i.id == id), count);
      onAdd(count)
    }
  };

  return (
    <>
        <div role="group">
          <button
            type="button"
            className="btn btn-warning"
            onClick={decrement}
          >
            -
          </button>
          <button type="button" className="btn btn-light" disabled>
            <strong>{count}</strong>
          </button>
          <button
            type="button"
            className="btn btn-warning"
            onClick={increment}
          >
            +
          </button>
        </div>
      <a type="button" className="card-link" onClick={handleClick}>
        Agregar al carrito
      </a>
    </>
  );
};

export default ItemCount;
