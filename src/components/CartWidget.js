import React from "react";

const CartWidget = ({ conteo }) => {
  return (
    <>
      <button type="button" className="btn btn-warning position-relative">
        <i className="fa-solid fa-cart-shopping" />
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {conteo}
        </span>
      </button>
    </>
  );
};

export default CartWidget;
