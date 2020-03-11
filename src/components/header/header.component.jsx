import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../images/logo.svg';
import { ReactComponent as GiftBox } from '../../images/gift.svg';

import './style.scss';

const Header = () => (
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
            <Link className="option" to="/contact">
                SIGN IN
            </Link>
            <Link className="option cart-link" to="/cart">
                <GiftBox className="cart-icon" />
            </Link>
        </div>
    </div>
)

export default Header;