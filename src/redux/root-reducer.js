import { combineReducers } from "redux";

import userReducer from "./reducers/user.reducer";
import cartReducer from "./reducers/cart.reducer";
import homepageReducer from "./reducers/homepage.reducer";
import shopReducer from "./reducers/shop.reducer";

export default combineReducers({
  user: userReducer,
  cart: cartReducer,
  home: homepageReducer,
  shop: shopReducer,
});
