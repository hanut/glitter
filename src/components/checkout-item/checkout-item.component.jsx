import React from "react";
import { connect } from "react-redux";
import { removeCartItem } from "../../store/cart/cart.actions";

import "./style.scss";

const CheckoutItem = ({ cartItem: { id, name, price, quantity, image }, dispatch }) => (
  <div className="checkout-item">
    <div className="image-container">
      <img src={image} alt={name} />
    </div>
    <span className="name">{name}</span>
    <span className="quantity">{quantity}</span>
    <span className="price">{price}</span>
    <div className="remove-button" onClick={() => dispatch(removeCartItem(id))}>&#10005;</div>
  </div>
);

export default connect()(CheckoutItem);
