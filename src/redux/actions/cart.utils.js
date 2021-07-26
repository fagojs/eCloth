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
