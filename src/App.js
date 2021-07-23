import { Component } from "react";
import { Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";

import HomePage from "./components/home/homePage.component";
import ShopPage from "./components/shop/shop.component";
import Header from "./components/header/header.component";
import SignInUp from "./components/signin-signup/signInUp.component";
import Logout from "./components/signin-signup/logout.component";

import "./css/App.css";

class App extends Component {
  state = {};

  componentDidMount() {
    try {
      //decoding user object from token
      const storedToken = localStorage.getItem("token");
      const decodedUser = jwt_decode(storedToken);
      this.setState({ decodedUser });
    } catch (error) {
      if (error.response) {
        alert(error.response.message);
      }
    }
  }

  render() {
    return (
      <div className="App">
        <Header user={this.state.decodedUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/register-form" component={SignInUp} />
          <Route path="/logout" component={Logout} />
        </Switch>
      </div>
    );
  }
}

export default App;
