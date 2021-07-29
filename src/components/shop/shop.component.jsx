import { Route } from "react-router-dom";

import CollectionOverview from "./collection-overview.component";
import CollectionPage from "./collection-page.component";

import "../../css/shop/shoppage.css";

const ShopPage = ({ match }) => (
  <div className="shop-page">
    <Route exact path={`${match.path}`} component={CollectionOverview} />
    <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
  </div>
);
export default ShopPage;
