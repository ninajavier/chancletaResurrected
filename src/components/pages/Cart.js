import React from "react";
import { useState } from "react";

function Cart() {
const [total, setTotal] = useState(0);
const [cart, setCart] = useState([]);

  function removeFromCart(event, shoe) {
    event.target.parentNode.remove();
    setTotal(total - shoe.amount);
  }

  return (
    <div classname="cart">
      <h1>Your Cart</h1>
      <ol>
        {cart.map((shoe, index) => (
          <li>
            <p>
              {shoe.name}: ${shoe.amount}
            </p>
            <button
              key={shoe.id}
              onClick={(event) => removeFromCart(event, shoe)}
            >
              Remove from cart
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Cart;
