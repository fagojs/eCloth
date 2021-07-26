import "../../css/cart/cart-item.css";

const CartItem = ({ item }) => {
  const { imageUrl, name, price, quantity } = item;
  return (
    <div className="cart-items">
      <div
        className="item-img"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="item-details">
        <span className="item-name">{name}</span>
        <span className="item-price">
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
