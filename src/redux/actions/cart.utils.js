export const addItemsToCart = (cartItems, itemToBeAdded) => {
  //find similar item inside array
  const existingItem = cartItems.find(
    (cartItem) => cartItem.id === itemToBeAdded.id
  );
  //if item is present already
  if (existingItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === itemToBeAdded.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  //else
  //add item with new property "quantity"
  return [...cartItems, { ...itemToBeAdded, quantity: 1 }];
};

export const decreaseCartItem = (cartItems, itemToDecrease) => {
  const existingItem = cartItems.find(
    (cartItem) => cartItem.id === itemToDecrease.id
  );
  //ifOnly 1-item or on decrement if at last only 1-item then
  if (existingItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== itemToDecrease.id);
  }
  return cartItems.map((cartItem) =>
    cartItem.id === itemToDecrease.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
