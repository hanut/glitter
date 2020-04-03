import React from 'react';
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectShopCollections } from "../../store/shop/shop.selectors";
import CollectionPreview from '../collection-preview/collection-preview.component';

import './styles.scss';

const CollectionsOverview = ({ collections }) => (
  <div className="collections-overview">
    {collections.map(({ id, ...otherProps }) => (
      <CollectionPreview key={id} {...otherProps} />
    ))}
  </div>
)

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollections
});

export default connect(mapStateToProps)(CollectionsOverview);