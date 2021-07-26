import { connect } from "react-redux";

import { toggleDropdown } from "../../redux/actions/cart.action";
import { AiOutlineShopping } from "react-icons/ai";
import "../../css/cart/cart-icon.css";

const CartIcon = ({ toggleDropdown, cartItems }) => {
  let totalQuantity = 0;
  cartItems.map((cartItem) => {
    return (totalQuantity += cartItem.quantity);
  });
  return (
    <div className="cart-icon" onClick={toggleDropdown}>
      <AiOutlineShopping className="shop-box" />
      <span className="item-count">{totalQuantity}</span>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItems: state.cart.cartItems,
});

const mapDispatchToProps = (dispatch) => ({
  toggleDropdown: () => dispatch(toggleDropdown()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
