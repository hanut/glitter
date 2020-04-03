import React from "react";
import { Route } from "react-router-dom";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CategoryPage from "../collection/collection.page";

import "./style.scss";

const ShopPage = ({ match }) => {
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route exact path={`${match.path}/:collectionId`} component={CategoryPage} />
    </div>
  )
};

export default ShopPage;
