import React from "react";


function Cart({setTotal, cart, total}) {

  function removeFromCart(event, sneaker) {
    event.target.parentNode.remove();
    setTotal(total - sneaker.amount);
  }

  return (
    <div className="cart">
      <h1>Your Cart</h1>
      <ol>
        {cart.map((sneaker, index) => (
          <li>
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
    </div>
  );
}

export default Cart;
