import CommonButton from "./../common/commonbutton.component";

import "../../css/shop/collection-item.css";

const CollectionItem = ({ id, imageUrl, name, price }) => (
  <div className="collection-item">
    <div
      className="item-image"
      style={{ backgroundImage: `url(${imageUrl})` }}
    />
    <div className="item-footer">
      <span className="name">{name}</span>
      <span className="price">${price}</span>
    </div>
    <CommonButton>ADD TO CART</CommonButton>
  </div>
);
export default CollectionItem;
