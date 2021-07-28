import { connect } from "react-redux";

import { addItem } from "../../redux/actions/cart.action";
import CommonButton from "./../common/commonbutton.component";
import { selectCurrentUser } from "./../../redux/selectors/user.selectors";

import "../../css/shop/collection-item.css";

const CollectionItem = ({ item, addItem, user }) => {
  const { imageUrl, name, price } = item;

  return (
    <div className="collection-item">
      <div
        className="item-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="item-footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
      {user ? (
        <CommonButton onClick={() => addItem(item)}>ADD TO CART</CommonButton>
      ) : null}
    </div>
  );
};
const mapStateToProps = (state) => ({
  user: selectCurrentUser(state),
});

const mapDispatchtoProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(mapStateToProps, mapDispatchtoProps)(CollectionItem);
