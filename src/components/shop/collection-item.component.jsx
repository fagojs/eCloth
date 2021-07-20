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
  </div>
);
export default CollectionItem;
