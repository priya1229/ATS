// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-slate-900 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-white text-lg">ATS</Link>
                <div className="flex space-x-4">
                    <Link to="/login" className="text-white">Login</Link>
                    <Link to="/register" className="text-white">Register</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
