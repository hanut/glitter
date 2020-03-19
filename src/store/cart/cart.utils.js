export const addItemToCart = (cartItems, newItem) => {
  const found = cartItems.find(item => {
    return item.id === newItem.id;
  });

  if (found) {
    return cartItems.map(item => {
      return item.id === newItem.id
        ? { ...item, quantity: item.quantity + 1 }
        : item;
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
    return cartItems.filter(item => item.id !== itemId);
  }
  
  return cartItems.map(item => {
    let newItem = Object.assign({}, item);
    if (item.id === itemId) {
      newItem.quantity--;
    }
    return newItem;
  });
};