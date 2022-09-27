import React from 'react';
import logo from '../../images/Logo.svg';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
      
            <nav className='nav'>
                <img src={logo} alt=''/>
                <div className='option'>
                    <a href='/shop'> Shop</a>
                    <a href='/orders'> Orders</a>
                    <a href='/inventory'> Inventory</a>
                    <a href='/about'> About</a>
                </div>
            </nav>
        </div>
    );
};

export default Header;