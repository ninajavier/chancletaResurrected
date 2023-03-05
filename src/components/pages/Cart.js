import React from "react";


function Cart({setTotal, cart, total}) {

  function removeFromCart(event, sneaker) {
    event.target.parentNode.remove();
    setTotal(total - sneaker.price);
  }

  return (
    <div className="cart">
      <h1>Your Cart</h1>
      <ol>
        {cart.map((sneaker) => (
          <li key={sneaker.id}>
            <img src={sneaker.img} alt={sneaker.name}/>
            <p>
              {sneaker.name}: ${sneaker.price}
            </p>
            <button
              key={sneaker.id}
              onClick={(event) => removeFromCart(event, sneaker)}
            >
              Remove from cart
            </button>
          </li>
        ))}
      </ol>
      <h2>Subtotal: ${total}</h2>
    </div>
  );
}

export default Cart;
