import { connect } from "react-redux";

import CartItem from "./cart-item.component";
import CommonButton from "./../common/commonbutton.component";
import { selectCartItems } from "../../redux/selectors/cart.selectors";
import "../../css/cart/dropdown.css";

const Dropdown = ({ cartItems }) => (
  <div className="dropdown-container">
    <div className="dropdown-contents">
      {cartItems.length ? (
        cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <span
          style={{
            height: "100%",
            fontSize: "22px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Your Cart Is Empty.
        </span>
      )}
    </div>
    <CommonButton>GO TO CHECKOUT</CommonButton>
  </div>
);

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});

export default connect(mapStateToProps)(Dropdown);
