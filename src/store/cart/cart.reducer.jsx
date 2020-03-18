import CartActionTypes from "./cart.types";
import { addItemToCart, removeItemFromCart, countItems } from "./cart.utils";

const INITIAL_STATE = {
  dropdownHidden: true,
  cartItems: [],
  itemCount: 0
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_DROPDOWN: {
      return {
        ...state,
        dropdownHidden: !state.dropdownHidden
      };
    }
    case CartActionTypes.ADD_CART_ITEM: {
      let { cartItems, itemCount } = state;
      let newItem = action.item;
      itemCount++;
      return {
        ...state,
        cartItems: addItemToCart(cartItems, newItem),
        itemCount
      };
    }
    case CartActionTypes.REMOVE_CART_ITEM: {
      let { cartItems } = state;
      
      return {
        ...state,
        cartItems: removeItemFromCart(cartItems, action.itemId, action.all),
        itemCount: countItems(cartItems)
      };
    }
    default:
      return state;
  }
};

export default cartReducer;
