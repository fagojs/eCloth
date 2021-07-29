import { connect } from "react-redux";

import CollectionItem from "./collection-item.component";
import { selectSpecificCollection } from "../../redux/selectors/shop.selector";

import "../../css/shop/collection-page.css";

const CollectionPage = ({ collection }) => (
  <div className="collection-page">
    <h1>{collection.title.toUpperCase()}</h1>
    <div className="items">
      {collection.items.map((item) => (
        <CollectionItem key={item.id} item={item} />
      ))}
    </div>
  </div>
);

const mapStateToProps = (state, ownProps) => ({
  collection: selectSpecificCollection(ownProps.match.params.collectionId)(
    state
  ),
});
export default connect(mapStateToProps)(CollectionPage);
