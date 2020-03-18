export const addItemToCart = (cartItems, newItem) => {
  const found = cartItems.find(item => {
    return item.id === newItem.id;
  });

  if (found) {
    return cartItems.map(item => {
      return item.id === newItem.id ? { ...item, quantity: item.quantity + 1 } : item;
    });
  }

  return [...cartItems, { ...newItem, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, itemId, all) => {
  let found = cartItems.findIndex(item => {
    return item.id === itemId;
  });

  if (found === -1) {
    throw new Error("Item not found in cart: " + itemId);
  }
  if (all || cartItems[found].quantity === 1) {
    cartItems.splice(found, 1);
  } else {
    cartItems[found].quantity--;
  }
  return [...cartItems];
};

export const incrementItemQty = (cartItems, itemId) => {
  let found = cartItems.findIndex(item => {
    return item.id === itemId;
  });

  if (found === -1) {
    throw new Error("Item not found in cart: " + itemId);
  }

  cartItems[found].quantity++;

  return [...cartItems];
};