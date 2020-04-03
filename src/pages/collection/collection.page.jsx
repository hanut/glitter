import React from 'react';
import { connect } from "react-redux";
import { selectShopCollection } from "../../store/shop/shop.selectors";
import CollectionItem from '../../components/collection-item/collection-item.component';

import './styles.scss';
import { Redirect } from 'react-router-dom';

const CollectionPage = ({ collection }) => {
  if (!collection) {
    return (<Redirect to="/shop" />)
  }
  const { title, items } = collection;
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map(({ id, ...otherProps }) => (
          <CollectionItem key={id} id={id} {...otherProps} />
        ))}
      </div>
    </div>
  )
}

const mapStateToProps = (state, { match: { params: { collectionId } } }) => ({
  collection: selectShopCollection(collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);