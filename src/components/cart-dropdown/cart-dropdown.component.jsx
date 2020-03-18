import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import {
  selectCartItems,
  selectCartTotal
} from "../../store/cart/cart.selectors";
import { withRouter } from "react-router-dom";

import "./style.scss";
import { toggleCartDropdown } from "../../store/cart/cart.actions";

const CartDropdown = ({ cartItems, total, history, dispatch }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length > 0 ? (
        cartItems.map(item => <CartItem key={item.id} item={item} />)
      ) : (
        <h4 style={{ textAlign: "center", color: "#dfdfdf", marginTop: "45%" }}>
          There are no items in your cart!
        </h4>
      )}
    </div>
    {cartItems.length > 0 ? (
      <CustomButton
        style={{ fontSize: "12px" }}
        onClick={() => {
          history.push("/checkout");
          dispatch(toggleCartDropdown());
        }}
      >
        Go To Checkout
      </CustomButton>
    ) : null}
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
