import React from "react";
import { withRouter } from "react-router-dom";
import "./style.scss";
import CollectionItem from "../collection-item/collection-item.component";
import { Link } from "react-router-dom";

const CollectionPreview = ({ id, title, routeName, items, match }) => (
  <div className="collection-preview">
    <Link to={`${match.url}/${routeName}`}>
      <h1 className="title">
        {title.toUpperCase()} - {id}
      </h1>
    </Link>
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
