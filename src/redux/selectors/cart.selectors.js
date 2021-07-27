import { createSelector } from "reselect";

const selectCart = (state) => state.cart;

//memoization-creating cached form
export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) => {
    let totalQuantity = 0;
    cartItems.map((cartItem) => {
      totalQuantity += cartItem.quantity;
      return totalQuantity;
    });
    return totalQuantity;
  }
);
export const selectCartTotalPrice = createSelector(
  [selectCartItems],
  (cartItems) => {
    let totPrice = 0;
    cartItems.map(
      (cartItem) => (totPrice += cartItem.price * cartItem.quantity)
    );
    return totPrice;
  }
);

//select hidden state

export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
);
