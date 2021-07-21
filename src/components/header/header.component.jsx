import { Link } from "react-router-dom";

import "../../css/header/header.css";
import { FiShoppingCart } from "react-icons/fi";

const Header = () => (
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
      <Link className="others" to="/signin">
        SIGN-IN
      </Link>
    </div>
  </div>
);

export default Header;
