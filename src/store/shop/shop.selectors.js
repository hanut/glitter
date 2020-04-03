import { createSelector } from 'reselect';

const selectShop = state => state.shop;

const COLLECTION_ID_MAP = {
  rings: 1,
  necklaces: 2,
  earrings: 3,
  accessories: 4,
  bridal: 5,
  womens: 6,
  mens: 7
}

export const selectShopCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

export const selectShopCollection = collectionName => createSelector(
  [selectShopCollections],
  (collections) => collections.find(({ id }) => (id === COLLECTION_ID_MAP[collectionName]))
);