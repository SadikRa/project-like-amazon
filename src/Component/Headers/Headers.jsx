import React from 'react';
import './Headers.css'
import logo from '../../images/Logo.svg'
const Headers = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" srcset="" />
            <div>
                <a href="/Order">Order</a>
                <a href="/Order Review">Order Review</a>
                <a href="/Manage Inventory">Manage Inventory</a>
                <a href="/Login">Login</a>
            </div>
        </nav>
    );
};

export default Headers;