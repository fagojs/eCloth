import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import CartIcon from "../cart/cart-icon.component";
import Dropdown from "./../cart/dropdown.component";
import { selectCartHidden } from "../../redux/selectors/cart.selectors";
import { selectCurrentUser } from "../../redux/selectors/user.selectors";

import "../../css/header/header.css";
import { FiShoppingCart } from "react-icons/fi";

const Header = ({ user, hiddenDropdown }) => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <FiShoppingCart className="logo" />
      </Link>

      <div className="other-headers">
        <Link className="others" to="/shop">
          SHOP
        </Link>
        <Link className="others" to="/contact">
          CONTACT
        </Link>
        {user ? (
          <React.Fragment>
            <Link className="others" to="/profile">
              {user.currentUser.displayName}
            </Link>
            <Link className="others" to="/logout">
              LOGOUT
            </Link>
            <CartIcon />
          </React.Fragment>
        ) : (
          <Link className="others" to="/register-form">
            REGISTER
          </Link>
        )}
      </div>
      {hiddenDropdown ? null : <Dropdown />}
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: selectCurrentUser(state),
  hiddenDropdown: selectCartHidden(state),
});

export default connect(mapStateToProps)(Header);
