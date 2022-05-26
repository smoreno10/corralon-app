import { doc, updateDoc, increment, getFirestore, collection, addDoc } from "firebase/firestore";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";

const Sale = () => {
  const { cart, total, deleteCart } = useCartContext();
  const [saleId, setSaleId] = useState(undefined);
  const [sale, setSale] = useState({
    buyer: {
      name: "",
      phone: "",
      email: "",
    },
    items: cart.map((i) => ({
      id: i.id,
      title: i.title,
      price: i.price,
      quantity: i.quantity,
    })),
    date: new Date(),
    total: total(),
  });

  const handleNameBlur = (e) => {
    const newSale = { ...sale };
    newSale.buyer.name = e.target.value;
    setSale(newSale);
  };

  const handlePhoneBlur = (e) => {
    const newSale = { ...sale };
    newSale.buyer.phone = e.target.value;
    setSale(newSale);
  };

  const handleEmailBlur = (e) => {
    const newSale = { ...sale };
    newSale.buyer.email = e.target.value;
    setSale(newSale);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const db = getFirestore();

    sale.items.forEach((item) => {
      const docRef = doc(db, 'itemsData', item.id)
      updateDoc(docRef, {
        stock: increment(-item.quantity)
      })
    });

    const sales = collection(db, "sales");
    const response = await addDoc(sales, sale);
    setSaleId(response.id);
    deleteCart();
  };

  return (
    <>
      {cart && cart.length > 0 ? (
        <div className="card container mt-4" style={{maxWidth: "500px"}}>
          <div className="card-body">
            <h5 className="card-title">
              Ingrese los siguientes datos para confirmar la compra
            </h5>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Nombre</label>
                <input
                  type="text"
                  className="form-control"
                  id="inptNombre"
                  onBlur={handleNameBlur}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Telefono</label>
                <input
                  type="text"
                  className="form-control"
                  id="inptTelefono"
                  onBlur={handlePhoneBlur}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="inptEmail"
                  onBlur={handleEmailBlur}
                  required
                />
              </div>
              <button type="submit" className="btn btn-warning">
                Confirmar
              </button>
            </form>
          </div>
        </div>
      ) : (
        <div className="card container mt-4">
          <div className="card-body">
            <>
              {saleId ? (
                <div className="alert alert-success" role="alert">
                  Su compra se ha registrado correctamente bajo id: {saleId}
                </div>
              ) : (
                <h5 className="card-title">Tu carrito esta vacio</h5>
              )}
            </>
            <Link className="card-link" to="/">
              Volver al inicio
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Sale;
