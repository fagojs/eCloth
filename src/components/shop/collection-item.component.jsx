import { connect } from "react-redux";

import { addItem } from "../../redux/actions/cart.action";
import CommonButton from "./../common/commonbutton.component";

import "../../css/shop/collection-item.css";

const CollectionItem = ({ item, addItem }) => {
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
      <CommonButton onClick={() => addItem(item)}>ADD TO CART</CommonButton>
    </div>
  );
};
const mapDispatchtoProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchtoProps)(CollectionItem);
