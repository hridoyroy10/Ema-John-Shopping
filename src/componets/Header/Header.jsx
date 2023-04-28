import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg'
import { AuthContext } from '../UserContext/UserContext';
import './Header.css'

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
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
                {
                    user?.uid ?
                        <button className='logOut-btn' onClick={logOut}>Sin Out</button>
                        :
                        <>
                            <Link to="/login" id="">Login</Link>
                            <Link to='/singUp'>Sing Up</Link></>
                }
            </div>
        </nav>
    );
};

export default Header;