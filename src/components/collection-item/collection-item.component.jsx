import React from "react";
import CustomButton from "../custom-button/custom-button.component";

import "./style.scss";

const CollectionItem = ({ id, name, price, image }) => (
  <div className="collection-item" title={name + " @ Rs. " + price}>
    <div className="image-holder">
      <div
        className="image"
        style={{
          backgroundImage: `url(${image})`
        }}
        id={id}
      />
    </div>
    <div className="collection-footer">
      <span className="name">
        {name.length > 25 ? name.substr(0, 25) + "..." : name}
      </span>
      <span className="price">&#8377;{price}</span>
    </div>
    <CustomButton inverted={true}>Add to Cart</CustomButton>
  </div>
);

export default CollectionItem;
