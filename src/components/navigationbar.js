import React from 'react';
import logo from '../assets/img/logo.svg'

function Navigationbar() {
    return (
        <>
        <nav className="navbar">
            <a href="#">
            <img src={logo} alt="logo" className="logo"/>
            </a>
            <ul className="menu_list">
                <li><a href="#">Blogs</a></li>
                <li><a href="#">Text Utility</a></li>
                <li><a href="#">Todo</a></li>
                <li><a href="#">About us</a></li>
            </ul>
            <div>&nbsp;</div>
        </nav>
        </>
    );
}

export default Navigationbar;