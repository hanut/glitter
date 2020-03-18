import React from "react";
import collections from "./collections";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";

import "./style.scss";

class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections
    };
  }

  render() {
    const { collections } = this.state;

    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherProps }) => (
          <CollectionPreview key={id} {...otherProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
