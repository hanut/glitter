import React from "react";
import { connect } from "react-redux";
import CustomButton from "../custom-button/custom-button.component";
import { removeCartItem } from "../../store/cart/cart.actions";
import CartItem from "../cart-item/cart-item.component";

import "./style.scss";

const CartDropdown = ({ cartItems, removeItem }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length > 0 ? (
        cartItems.map(item => (
          <CartItem key={item.id} item={item} />
        ))
      ) : (
        <h4 style={{ textAlign: "center", color: "#dfdfdf", marginTop: "45%" }}>
          There are no items in your cart!
        </h4>
      )}
    </div>
    <hr/>
    Cart Total: {}
    <hr/>
    {cartItems.length > 0 ? <CustomButton style={{fontSize: "12px"}}>Go To Checkout</CustomButton> : null}
  </div>
);

const mapStateToProps = ({ cart: { cartItems, total } }) => ({
  cartItems,
  total
});

const mapDispatchToProps = dispatch => ({
  removeItem: (itemId, all) => dispatch(removeCartItem(itemId, all))
});

export default connect(mapStateToProps, mapDispatchToProps)(CartDropdown);
