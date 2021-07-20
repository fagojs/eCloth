import { Route, Switch } from "react-router-dom";
import HomePage from "./components/home/homePage.component";
import ShopPage from "./components/shop/shop.component";
import Header from "./components/header/header.component";

import "./css/App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
