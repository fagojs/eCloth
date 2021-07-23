import React from "react";
import { Link } from "react-router-dom";

import "../../css/header/header.css";
import { FiShoppingCart } from "react-icons/fi";

const Header = ({ user }) => (
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
            {user.displayName}
          </Link>
          <Link className="others" to="/logout">
            LOGOUT
          </Link>
        </React.Fragment>
      ) : (
        <Link className="others" to="/register-form">
          REGISTER
        </Link>
      )}
    </div>
  </div>
);

export default Header;
