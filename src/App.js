import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Cart from "./components/Cart";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import Sale from "./components/Sale";
import CartContextProvider from "./context/CartContext";

function App() {
  return (
      <CartContextProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route
              path="/"
              element={
                <ItemListContainer greeting="Bienvenides a Corralonlify!" />
              }
            ></Route>
            <Route
              path="/Category/:categoryId"
              element={<ItemListContainer greeting="" />}
            ></Route>
            <Route path="/Item/:id" element={<ItemDetailContainer />}></Route>
            <Route path="/Cart" element={<Cart />}></Route>
            <Route path="/Sale" element={<Sale />}></Route>            
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
  );
}
export default App;
