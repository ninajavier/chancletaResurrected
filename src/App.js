import "./App.css";
import React from "react";
import Home from "./components/pages/Home";
import Cart from "./components/pages/Cart";
// import CheckOut from "./components/pages/CheckOut";
// import ExclusiveForm from "./components/pages/ExclusiveForm";
import Sneakers from "./components/products/Sneakers";
import data from "./data/sneakers";
import { useState } from "react";

function App() {
  const [total, setTotal] = useState(0);
  const [cart, setCart] = useState([]);

  function handleAddToCart(sneaker) {
    setCart([...cart, sneaker]);
    setTotal(total + sneaker.price);
  }

  return (
    <div className="App">
      <Home />
      <Cart cart={cart} setTotal={setTotal} total={total} />
      {/* <CheckOut /> */}
      {/* <ExclusiveForm /> */}
      <Sneakers sneakers={data} handleAddToCart={handleAddToCart} />
      <p>Hello World</p>
    </div>
  );
}

export default App;
