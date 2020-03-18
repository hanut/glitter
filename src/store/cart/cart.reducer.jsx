import CartActionTypes from "./cart.types";
import { addItemToCart, removeItemFromCart } from "./cart.utils";
import { incrementItemQty } from "./cart.actions";

const INITIAL_STATE = {
  dropdownHidden: true,
  cartItems: []
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
      let { cartItems } = state;
      let newItem = action.item;
      return {
        ...state,
        cartItems: addItemToCart(cartItems, newItem)
      };
    }
    case CartActionTypes.REMOVE_CART_ITEM: {
      let { cartItems } = state;
      let updatedCartItems = removeItemFromCart(
        cartItems,
        action.itemId,
        action.all
      );
      return {
        ...state,
        cartItems: updatedCartItems
      };
    }
    case CartActionTypes.INCREMENT_CART_ITEM_QUANTITY: {
      let { cartItems } = state;
      let updatedCartItems = incrementItemQty(cartItems, action.itemId);
      return {
        ...state,
        cartItems: updatedCartItems
      };
    }
    default:
      return state;
  }
};

export default cartReducer;
