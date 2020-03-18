import React from "react";
import { connect } from "react-redux";
import {
  removeCartItem,
  incrementItemQty
} from "../../store/cart/cart.actions";

import "./style.scss";

const CheckoutItem = ({ cartItem, addItem, removeItem }) => {
  let { id, name, price, quantity, image } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={image} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => removeItem(id)}>
          &#10094;
        </div>
        <div className="value">{quantity}</div>
        <div className="arrow" onClick={() => addItem(id)}>
          &#10095;
        </div>
      </span>
      <span className="price">&#8377;{price}</span>
      <div
        className="remove-button"
        onClick={() => removeItem(id, true)}
      >
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
    addItem: (itemId) => dispatch(incrementItemQty(itemId)),
    removeItem: (...params) => dispatch(removeCartItem(...params)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
