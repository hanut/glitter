import React from "react";
import { connect } from "react-redux";
import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";

import "./style.scss";
import {
  selectCartItems,
  selectCartTotal
} from "../../store/cart/cart.selectors";

const CartDropdown = ({ cartItems, total }) => (
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
      <div>
        <hr />
        Cart Total: {total}
        <hr />
        <CustomButton style={{ fontSize: "12px" }}>Go To Checkout</CustomButton>
      </div>
    ) : null}
  </div>
);

const mapStateToProps = state => ({
  cartItems: selectCartItems(state),
  total: selectCartTotal(state)
});

export default connect(mapStateToProps)(CartDropdown);
