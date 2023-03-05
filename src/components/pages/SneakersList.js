import React from "react";
import sneakers from '../../data/sneakers.json'; // assuming you have a Sneakers component already

const data = 

function SneakersList() {
  const sneakers = sneakers.map((sneaker) => (
    <Sneakers
      key={sneakers.id}
      name={sneakers.name}
      style={sneakers.style}
      price={sneakers.price}
      class={sneakers.class}
      image1={sneakers.image1}
    />
  ));

  return <div className="sneakers-list">{sneakers}</div>;
}

export default SneakersList;
