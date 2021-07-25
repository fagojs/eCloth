import { combineReducers } from "redux";

import userReducer from "./reducers/user.reducer";
import toggleDropdownReducer from "./reducers/cart.reducer";

export default combineReducers({
  user: userReducer,
  toggleDropdown: toggleDropdownReducer,
});
