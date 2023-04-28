import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    return (
        <nav className='header'>
            <Link to='/home'>
                <img src={logo} alt="" />
            </Link>
            <div>
                <Link to="/shope" id="">Shope</Link>
                <Link to='/Orders'>Orders</Link>
                <Link to="/about" id="">About</Link>
                <Link to="/inventory" id="">Inventory</Link>
                <Link to="/login" id="">Login</Link>
            </div>
        </nav>
    );
};

export default Header;