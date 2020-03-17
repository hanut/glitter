import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { ReactComponent as Logo } from "../../images/logo.svg";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

import "./style.scss";
import { auth } from "../../firebase/firebase.utils";

const Header = ({ currentUser, dropdownHidden }) => (
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
      <CartIcon className="option cart-link" />
    </div>
    {!dropdownHidden ? <CartDropdown /> : null}
  </div>
);

const mapStateToProps = ({
  user: { currentUser },
  cart: { dropdownHidden }
}) => ({
  currentUser,
  dropdownHidden
});

export default connect(mapStateToProps)(Header);
