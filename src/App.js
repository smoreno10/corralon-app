import "./App.css";
import Cabecera from "./components/Cabecera";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import NavBarItem from "./components/NavBarItem";
import CartWidget from "./components/CartWidget";
import ItemCard from "./components/ItemCard";

function App() {
  return (
    <div className="App">
      <Cabecera nombre="MI CORRALON" url="#" carrito={CartWidget({conteo: "4"})} />
      <NavBar>
          <NavBarItem nombre="INICIO" url="#" />
          <NavBarItem nombre="CATÁLOGO" url="#" />
          <NavBarItem nombre="PRESUPUESTO" url="#" />
          <NavBarItem nombre="CONTACTO" url="#" />
          <NavBarItem nombre="LOGIN" url="#" />
      </NavBar>
      <ItemListContainer>
        <ItemCard name="Art 1"/>
        <ItemCard name="Art 2"/>
        <ItemCard name="Art 3"/>        
      </ItemListContainer>
    </div>
  );
}
export default App;
