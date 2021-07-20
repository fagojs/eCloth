import { Component } from "react";
import SHOP_DATA from "./shopdata";
import CollectionPreview from "./collection-preview.component";
import "../../css/shop/shoppage.css";

class ShopPage extends Component {
  state = {
    collection: SHOP_DATA,
  };
  render() {
    const { collection } = this.state;
    return (
      <div className="shop-page">
        {collection.map((list) => (
          <CollectionPreview
            key={list.id}
            title={list.title}
            items={list.items}
          />
        ))}
      </div>
    );
  }
}

export default ShopPage;
