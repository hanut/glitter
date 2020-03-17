import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { ReactComponent as Logo } from "../../images/logo.svg";
import { ReactComponent as GiftBox } from "../../images/gift.svg";

import "./style.scss";
import { auth } from "../../firebase/firebase.utils";

const Header = ({ currentUser }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/contact">
        CONTACT
      </Link>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to="/sign-in">
          SIGN IN
        </Link>
      )}
      <Link className="option cart-link" to="/cart">
        <GiftBox className="cart-icon" />
      </Link>
    </div>
  </div>
);

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(Header);
