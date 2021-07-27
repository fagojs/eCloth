import { connect } from "react-redux";

import { removeItem } from "./../../redux/actions/cart.action";
import "../../css/checkout/checkout-item.css";

const CheckoutItem = ({ item, removeItem }) => {
  const { imageUrl, name, quantity, price } = item;
  return (
    <div className="checkout-items">
      <div
        className="ch-item-img"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="ch-item-name">{name}</div>
      <div className="ch-item-quantity">{quantity}</div>
      <div className="ch-item-price">${price}</div>
      <div className="ch-item-remove" onClick={() => removeItem(item)}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  removeItem: (item) => dispatch(removeItem(item)),
});
export default connect(null, mapDispatchToProps)(CheckoutItem);
