import "./App.css";
import ProductTab from "./ProductStore/ProductTab.jsx";
import Title from "./ProductStore/Title.jsx";

function App(){
  return (
    <main className="App">
      <Title name="Devesh"/>
      <h1>My Product Store 🛍️</h1>
      <ProductTab />
    </main>
  );
}

export default App;
