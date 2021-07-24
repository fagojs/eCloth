import { AiOutlineShopping } from "react-icons/ai";
import "../../css/cart/cart-icon.css";
const CartIcon = () => (
  <div className="cart-icon">
    <AiOutlineShopping className="shop-box" />
    <span className="item-count">0</span>
  </div>
);
export default CartIcon;
