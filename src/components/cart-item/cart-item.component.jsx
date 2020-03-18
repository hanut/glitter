import React from "react";
import { removeCartItem } from "../../store/cart/cart.actions";
import { connect } from "react-redux";
import CustomButton from "../custom-button/custom-button.component";

import "./style.scss";

const CartItem = ({ item: { id, name, price, image, quantity }, removeItem }) => (
  <div className="cart-item">
    <img src={image} alt="cart item" />
    <div className="item-details">
      <span className="name">{name}</span>
      <span className="price">
        {quantity} * &#8377;{price}
      </span>
      <CustomButton 
      style={{width: "auto", height: "22px", fontSize: "14px", lineHeight: "14px"}} 
      onClick={() => removeItem(id)}>Remove</CustomButton>
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
    removeItem: itemId => dispatch(removeCartItem(itemId, true))
});

export default connect(null, mapDispatchToProps)(CartItem);
