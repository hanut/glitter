import React from "react";
import { withRouter } from "react-router-dom";
import CollectionItem from "../collection-item/collection-item.component";
import "./style.scss";

const CollectionPreview = ({ id, title, routeName, items, match, history }) => (
  <div className="collection-preview">
    <h1 className="title" onClick={() => history.push(`${match.url}/${routeName}`)}>
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

export default withRouter(CollectionPreview);
