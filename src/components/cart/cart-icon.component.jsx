import { connect } from "react-redux";

import { toggleDropdown } from "../../redux/actions/cart.action";
import { AiOutlineShopping } from "react-icons/ai";
import "../../css/cart/cart-icon.css";

const CartIcon = ({ toggleDropdown }) => (
  <div className="cart-icon" onClick={toggleDropdown}>
    <AiOutlineShopping className="shop-box" />
    <span className="item-count">0</span>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  toggleDropdown: () => dispatch(toggleDropdown()),
});

export default connect(null, mapDispatchToProps)(CartIcon);
