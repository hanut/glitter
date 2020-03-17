import React from "react";
import { ReactComponent as GiftBox } from "../../images/gift.svg";
import { connect } from "react-redux";
import { toggleCartDropdown } from "../../store/cart/cart.actions";

import "./style.scss";

const CartIcon = ({ toggleCartDropdown }) => (
  <div className="cart-icon" onClick={toggleCartDropdown}>
    <GiftBox className="gift-icon" />
    <span className="item-count">0</span>
  </div>
);

const mapDispatchToProps = dispatch => ({
  toggleCartDropdown: () => dispatch(toggleCartDropdown())
});

export default connect(null, mapDispatchToProps)(CartIcon);
