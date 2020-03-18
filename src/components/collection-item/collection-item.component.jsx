import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import { connect } from "react-redux";
import { addCartItem } from "../../store/cart/cart.actions";

import "./style.scss";

const CollectionItem = ({ id, name, price, image, addToCart }) => (
  <div
    className="collection-item"
    title={name + " @ Rs. " + price + " | SKU: " + id}
  >
    <div className="image-holder">
      <div
        className="image"
        style={{
          backgroundImage: `url(${image})`
        }}
      />
    </div>
    <div className="collection-footer">
      <span className="name">
        {name.length > 25 ? name.substr(0, 25) + "..." : name}
        {id}
      </span>
      <span className="price">&#8377;{price}</span>
    </div>
    <CustomButton
      inverted
      onClick={() => {
        addToCart({ id, name, price, image });
      }}
    >
      Add to Cart
    </CustomButton>
  </div>
);

const mapDispatchToProps = dispatch => ({
  addToCart: item => dispatch(addCartItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);
