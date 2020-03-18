import CartActionTypes from './cart.types';

export const toggleCartDropdown = () => ({
  type: CartActionTypes.TOGGLE_CART_DROPDOWN
});

export const addCartItem = (item) => ({
  type: CartActionTypes.ADD_CART_ITEM,
  item
});

export const removeCartItem = (itemId, all = false) => ({
  type: CartActionTypes.REMOVE_CART_ITEM,
  itemId,
  all
});
