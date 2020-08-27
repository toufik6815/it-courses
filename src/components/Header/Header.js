import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';


const Header = () => {
    return (
        <nav>
            <div className="container header">
           
                <a href="/logo"><img src={logo} alt="" /></a>
                <a href="/courses">All Courses</a>
                <a href="/bestCourses">Best Selling Courses</a>
                <a href="/cart">Cart</a>
            </div>
        </nav>
    );
};

export default Header;