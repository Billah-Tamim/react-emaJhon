import React from 'react';
import logo from '../../images/Logo.svg';
import './Header.css';
import {Link} from 'react-router-dom';

function Header() {
    return (
        <nav>
            <img src={logo} alt="" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/Orders">Orders</Link>
                <Link to="/cart">Inventory</Link>
                <Link to="/about">About</Link>
            </div>
        </nav>
    );
}

export default Header;