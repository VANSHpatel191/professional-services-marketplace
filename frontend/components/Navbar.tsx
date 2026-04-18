import React from 'react';

const Navbar = () => {
    return (
        <nav>
            <h1>Professional Services Marketplace</h1>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/browse">Browse Professionals</a></li>
                <li><a href="/login">Login</a></li>
                <li><a href="/register">Register</a></li>
                <li><a href="/profile/setup">Profile Setup</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;