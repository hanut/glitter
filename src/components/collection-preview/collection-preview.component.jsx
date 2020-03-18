import React from "react";

import "./style.scss";
import CollectionItem from "../collection-item/collection-item.component";

const CollectionPreview = ({ id, title, items }) => (
  <div className="collection-preview">
    <h1 className="title">
      {title.toUpperCase()} - {id}
    </h1>
    <div className="preview">
      {items
        .filter((item, idx) => idx < 4)
        .map(({ id, ...otherProps }) => (
          <CollectionItem key={id} id={id} {...otherProps} />
        ))}
    </div>
  </div>
);

export default CollectionPreview;
