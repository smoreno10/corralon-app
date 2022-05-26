import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";

const Cart = () => {
  const { cart, total, deleteFromCart, deleteCart } = useCartContext();

  return (
    <>
      {cart && cart.length > 0 ? (
        <div className="container card-container mt-4 card">
          <div className="card-body d-flex flex-row align-items-center justify-content-between">
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">Total compra: ${total()}</h5>
              <Link className="card-link" to="/Sale">
                Confirmar compra
              </Link>
            </div>
            <button
              type="button"
              className="btn btn-danger m-3"
              onClick={() => deleteCart()}
            >
              <i className="fa-solid fa-trash-can"></i>
            </button>
          </div>
          {cart.map((item) => {
            return (
              <div key={item.id} className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-2">
                    <img
                      src={item.imgUrl}
                      className="img-fluid rounded-start"
                      style={{ width: "160px" }}
                      alt="foto articulo"
                    />
                  </div>
                  <div className="col-md-10">
                    <div className="card-body">
                      <h5 className="card-title">{`Producto: ${item.title}`}</h5>
                      <h6 className="card-subtitle mb-2 text-muted">{`Precio: $ ${item.price}`}</h6>
                      <h6 className="card-subtitle mb-2 text-muted">{`Cantidad: ${item.quantity} unidades`}</h6>
                      <h6 className="card-subtitle mb-2 ">{`Total: ${
                        item.price * item.quantity
                      }`}</h6>
                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => deleteFromCart(item)}
                      >
                        <i className="fa-solid fa-trash-can"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="container mt-4 card">
          <div className="card-body">
            <h5 className="card-title">Tu carrito esta vacio</h5>
            <Link className="card-link" to="/">
              Volver al inicio
            </Link>
          </div>
        </div>
      )}
    </>
  );
};
export default Cart;
