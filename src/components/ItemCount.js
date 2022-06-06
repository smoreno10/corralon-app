import React, { useState } from "react";
import { useCartContext } from "../context/CartContext";


const ItemCount = ({ item, onAdd }) => {
  const { addToCart } = useCartContext()
  const [count, setCount] = useState( item.stock > 0 ? item.initial : item.stock);
  
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  
  const increment = () => {
    if (count < item.stock) {
      setCount(count + 1);
    }
  };
  const handleClick = () =>  {
    if (item.stock > 0 && count > 0) {
      addToCart(item, count);
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
      <a type="button" className="btn btn-outline-secondary m-2" onClick={handleClick}>
        Agregar al carrito
      </a>
    </>
  );
};

export default ItemCount;
