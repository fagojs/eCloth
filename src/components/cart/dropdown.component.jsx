import { connect } from "react-redux";

import CartItem from "./cart-item.component";
import CommonButton from "./../common/commonbutton.component";
import "../../css/cart/dropdown.css";

const Dropdown = ({ cartItems }) => (
  <div className="dropdown-container">
    <div className="dropdown-contents">
      {cartItems.map((cartItem) => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
    </div>
    <CommonButton>GO TO CHECKOUT</CommonButton>
  </div>
);

const mapStateToProps = (state) => ({
  cartItems: state.cart.cartItems,
});

export default connect(mapStateToProps)(Dropdown);
