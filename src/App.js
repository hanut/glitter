import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import { connect } from "react-redux";
import HomePage from "./pages/home/home.page";
import ShopPage from "./pages/shop/shop.page";
import AuthPage from "./pages/auth/auth.page";
import * as NotFoundImage from "./images/404.jpg";
import Header from "./components/header/header.component.jsx";
import { auth, createUserProfile } from "./firebase/firebase.utils";
import { setCurrentUser } from "./store/user/user.actions";

import "./App.scss";

const NotFoundPage = () => (
  <div style={{ textAlign: "center" }}>
    <img
      style={{
        margin: "0 auto",
        maxWidth: "auto",
        height: "400px"
      }}
      src={NotFoundImage}
      alt="Not Found"
    />
    <br />
    <Link to="/">Home</Link>
  </div>
);

class App extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfile(userAuth);
        userRef.onSnapshot(snap => {
          setCurrentUser({
            id: snap.id,
            ...snap.data()
          });
        });
      }
      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/sign-in" component={AuthPage} />
          <Route path="*" component={NotFoundPage} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(App);
