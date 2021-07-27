import { connect } from "react-redux";

import CheckoutItem from "./checkout-item.component";
import {
  selectCartTotalPrice,
  selectCartItems,
} from "../../redux/selectors/cart.selectors";
import "../../css/checkout/checkout.css";

const Checkout = ({ cartItems, totPrice }) => (
  <div className="checkout-page">
    <div className="checkout-headers">
      <span className="checkout-img">Product</span>
      <span className="checkout-name">Name</span>
      <span className="checkout-quantity">Quantity</span>
      <span className="checkout-price">Price</span>
      <span className="checkout-remove">Remove</span>
    </div>
    {cartItems.map((cartItem) => (
      <CheckoutItem key={cartItem.id} item={cartItem} />
    ))}
    <div className="checkout-total">
      <span>Total: ${totPrice}</span>
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
  totPrice: selectCartTotalPrice(state),
});

export default connect(mapStateToProps)(Checkout);
