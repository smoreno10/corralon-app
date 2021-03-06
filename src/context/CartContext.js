import { createContext, useContext, useState } from "react"

const CartContext = createContext()
export const useCartContext = () => useContext(CartContext)

const CartContextProvider = ({children}) => {
  const [cart, setCart] = useState([])

  // Suma total de items para mostrar en el cartWidget.js
  const quantity = () => cart.reduce((sum, i) => { return sum + i.quantity }, 0)
  
  const total = () => cart.reduce((sum, i) => { return sum + (i.quantity * i.price) }, 0)
  
  //Esta en el carro?
  const isInCart = (id) => cart.find(p => p.id === id)

  //Agregar al carro
  const addToCart = ( producto, cantidad ) => {
    const newCart = [...cart]
    const productoIsInCart = isInCart(producto.id)
    if (productoIsInCart) {
      newCart[newCart.findIndex((prod) => prod.id == productoIsInCart.id)].quantity += cantidad
      setCart(newCart)
      return
    }
    producto.quantity = cantidad
    setCart([...newCart, producto])
  }

    //Eliminar del carro
  const deleteFromCart = (producto) => {
    const newCart = [...cart]
    const productoIsInCart = isInCart(producto.id)
    if (!productoIsInCart) {
      return
    }
    const deleteProduct = newCart.filter((prod) => prod.id !== producto.id)
    setCart(deleteProduct)
  }

  //Eliminar carro
  const deleteCart = () => setCart([])

  return (
    <CartContext.Provider value={{cart, addToCart, deleteFromCart, deleteCart, setCart, quantity, total }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider