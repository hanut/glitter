import React from "react";

import "./style.scss";

const CartItem = ({ item: { name, price, image, quantity } }) => (
  <div className="cart-item">
    <img src={image} alt="cart item" />
    <div className="item-details">
      <span className="name">{name}</span>
      <span className="price">
        {quantity} * &#8377;{price}
      </span>
    </div>
  </div>
);

export default CartItem;
