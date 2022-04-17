import "./App.css";
import Cabecera from "./components/Cabecera";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <Cabecera nombre="MI CORRALON" url="#" conteo="3"/>
      <NavBar/>
      <ItemListContainer/>
    </div>
  );
}
export default App;
