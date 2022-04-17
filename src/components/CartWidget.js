import React from 'react'

const CartWidget = ({conteo}) => {
  return (
    <button type="button" class="btn btn-warning position-relative">
    <i className="fa-solid fa-cart-shopping" />
    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
      {conteo}
    </span>
  </button>
  )
}

export default CartWidget