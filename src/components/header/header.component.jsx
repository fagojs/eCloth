import { Link } from "react-router-dom";

import "../../css/header/header.css";
import "font-awesome/css/font-awesome.min.css";
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
    </div>
  </div>
);

export default Header;
