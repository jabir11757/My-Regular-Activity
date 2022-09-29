import React from 'react';
import logo from '../../images/logo.png'
import './Header.css'


const Header = () => {
    return (
        <div>
            <div className='header'>
                <img src={logo} alt='logo' />
                <h2>My Regular Activity</h2>
            </div>
        </div>
    );
};

export default Header;