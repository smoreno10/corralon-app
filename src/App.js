import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Cart from "./components/Cart";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";

function App() {
  return (
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="Bienvenides a CORRALONLIFY!"/>}></Route>
          <Route path="/Category/:categoryId" element={<ItemListContainer greeting=""/>}></Route>
          <Route path="/Item/:id" element={<ItemDetailContainer/>}></Route>
          <Route path="/Cart" element={<Cart/>}></Route>       
        </Routes>
      </BrowserRouter>
  );
}
export default App;
