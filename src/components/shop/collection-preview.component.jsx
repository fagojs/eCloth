import CollectionItem from "./collection-item.component";
import "../../css/shop/collectionpreview.css";

const CollectionPreview = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .filter((item, idx) => idx < 4)
        .map((item) => (
          <CollectionItem
            key={item.id}
            id={item.id}
            imageUrl={item.imageUrl}
            name={item.name}
            price={item.price}
          />
        ))}
    </div>
  </div>
);
export default CollectionPreview;
