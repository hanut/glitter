import React from "react";
import { ReactComponent as GiftBox } from "../../images/gift.svg";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { toggleCartDropdown } from "../../store/cart/cart.actions";
import { selectCartItemsCount } from "../../store/cart/cart.selectors";

import "./style.scss";

const CartIcon = ({ toggleCartDropdown, count }) => (
  <div className="cart-icon" onClick={toggleCartDropdown}>
    <GiftBox className="gift-icon" />
    <span className="item-count">{count}</span>
  </div>
);

const mapDispatchToProps = dispatch => ({
  toggleCartDropdown: () => dispatch(toggleCartDropdown())
});

const mapStateToProps = createStructuredSelector({
  count: selectCartItemsCount
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
