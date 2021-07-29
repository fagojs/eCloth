import { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import jwt_decode from "jwt-decode";

import HomePage from "./components/home/homePage.component";
import ShopPage from "./components/shop/shop.component";
import Header from "./components/header/header.component";
import SignInUp from "./components/signin-signup/signInUp.component";
import Logout from "./components/signin-signup/logout.component";
import Checkout from "./components/checkout/checkout.component";

import setUser from "./redux/actions/user.action";
import { selectCurrentUser } from "./redux/selectors/user.selectors";

import "./css/App.css";

class App extends Component {
  componentDidMount() {
    const { setCurrentUser } = this.props;
    try {
      //decoding user object from token
      const storedToken = localStorage.getItem("token");
      const decodedUser = jwt_decode(storedToken);
      setCurrentUser({ currentUser: decodedUser });
    } catch (error) {
      if (error.response) {
        alert(error.response.message);
      }
    }
  }

  render() {
    const { user } = this.props;
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route
            exact
            path="/register-form"
            render={() => (user ? <Redirect to="/" /> : <SignInUp />)}
          />
          <Route path="/logout" component={Logout} />
          <Route
            exact
            path="/checkout"
            render={() =>
              user ? <Checkout /> : <Redirect to="/register-form" />
            }
          />
        </Switch>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  user: selectCurrentUser(state),
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
