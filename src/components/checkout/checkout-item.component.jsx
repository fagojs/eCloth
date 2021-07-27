import { connect } from "react-redux";

import {
  removeItem,
  addItem,
  decreaseItem,
} from "./../../redux/actions/cart.action";
import "../../css/checkout/checkout-item.css";

const CheckoutItem = ({ item, removeItem, addItem, decreaseItem }) => {
  const { imageUrl, name, quantity, price } = item;
  return (
    <div className="checkout-items">
      <div
        className="ch-item-img"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <span className="ch-item-name">{name}</span>
      <span className="ch-item-quantity">
        <span className="arrow" onClick={() => decreaseItem(item)}>
          &#10094;
        </span>
        {quantity}
        <span className="arrow" onClick={() => addItem(item)}>
          &#10095;
        </span>
      </span>
      <span className="ch-item-price">${price}</span>
      <span className="ch-item-remove" onClick={() => removeItem(item)}>
        &#10005;
      </span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  removeItem: (item) => dispatch(removeItem(item)),
  addItem: (item) => dispatch(addItem(item)),
  decreaseItem: (item) => dispatch(decreaseItem(item)),
});
export default connect(null, mapDispatchToProps)(CheckoutItem);
