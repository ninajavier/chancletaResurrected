import React from 'react';

function Sneakers({sneakers, handleAddToCart}) {
    return (
        <div>
            {sneakers.map((sneaker) => (
        <>
          <div className="card" key={sneaker.id}>
            <h3>{sneaker.name}</h3>
            <p>Price: ${sneaker.price}</p>
            <p>Style: {sneaker.style}</p>
            <p>Class: {sneaker.class}</p>
            <img src={sneaker.image1} alt=""></img>
            <button onClick={() => handleAddToCart(sneaker)} >Add to Cart</button>
        </div>
        </>
      ))}
        </div>
    );
}

export default Sneakers;
