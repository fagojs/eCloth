import { connect } from "react-redux";

import CollectionPreview from "./collection-preview.component";
import { selectShopCollections } from "./../../redux/selectors/shop.selector";
import "../../css/shop/shoppage.css";

const ShopPage = ({ collections }) => (
  <div className="shop-page">
    {collections.map((list) => (
      <CollectionPreview key={list.id} title={list.title} items={list.items} />
    ))}
  </div>
);
const mapStateToProps = (state) => ({
  collections: selectShopCollections(state),
});
export default connect(mapStateToProps)(ShopPage);
