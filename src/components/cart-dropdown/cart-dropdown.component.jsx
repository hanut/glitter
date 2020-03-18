import React from "react";
import { connect } from "react-redux";
import CustomButton from "../custom-button/custom-button.component";
import { removeCartItem } from "../../store/cart/cart.actions";

import "./style.scss";

const CartDropdown = ({ cartItems, removeItem }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length > 0 ? (
        cartItems.map(item => (
          <div key={item.id} className="cart-item">
            {item.name.length < 25
              ? item.name
              : item.name.substr(0, 25) + "..."}
            <button
              onClick={() => {
                removeItem(item.id, true);
              }}
            >
              Remove
            </button>
          </div>
        ))
      ) : (
        <h4 style={{ textAlign: "center", color: "#dfdfdf", marginTop: "45%" }}>
          There are no items in your cart!
        </h4>
      )}
    </div>
    {cartItems.length > 0 ? <CustomButton>CHECKOUT</CustomButton> : null}
  </div>
);

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems
});

const mapDispatchToProps = dispatch => ({
  removeItem: (itemId, all) => dispatch(removeCartItem(itemId, all))
});

export default connect(mapStateToProps, mapDispatchToProps)(CartDropdown);
