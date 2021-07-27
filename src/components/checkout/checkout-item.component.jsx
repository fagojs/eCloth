import "../../css/checkout/checkout-item.css";

const CheckoutItem = ({ item }) => {
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
      <div className="ch-item-remove">&#10005;</div>
    </div>
  );
};
export default CheckoutItem;
