import { connect } from "react-redux";

import { toggleDropdown } from "../../redux/actions/cart.action";
import { selectCartItemsCount } from "../../redux/selectors/cart.selectors";
import { AiOutlineShopping } from "react-icons/ai";
import "../../css/cart/cart-icon.css";

const CartIcon = ({ toggleDropdown, totalQuantity }) => {
  return (
    <div className="cart-icon" onClick={toggleDropdown}>
      <AiOutlineShopping className="shop-box" />
      <span className="item-count">{totalQuantity}</span>
    </div>
  );
};

const mapStateToProps = (state) => ({
  totalQuantity: selectCartItemsCount(state),
});

const mapDispatchToProps = (dispatch) => ({
  toggleDropdown: () => dispatch(toggleDropdown()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
