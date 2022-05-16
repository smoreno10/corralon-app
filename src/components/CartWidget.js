import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";

const CartWidget = () => {
  const { quantity } = useCartContext();
  

  return (
    <>
      {quantity() > 0 ? (
        <Link type="button" className="btn btn-warning position-relative" to="/Cart">
          <i className="fa-solid fa-cart-shopping" />
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {quantity()}
          </span>
        </Link>
      ) : (
        <></>
      )}
    </>
  );
};

export default CartWidget;
