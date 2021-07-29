import { connect } from "react-redux";
import { selectShopCollections } from "./../../redux/selectors/shop.selector";
import CollectionPreview from "./collection-preview.component";

const CollectionOverview = ({ collections }) => {
  return (
    <div
      className="collection-overview"
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      {collections.map((list) => (
        <CollectionPreview
          key={list.id}
          title={list.title}
          items={list.items}
        />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  collections: selectShopCollections(state),
});
export default connect(mapStateToProps)(CollectionOverview);
