import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-lg">
                    <Link to="/dashboard" className="mr-4">Dashboard</Link>
                    <Link to="/create-job" className="mr-4">Create Job</Link>
                    <Link to="/login" className="mr-4">Login</Link>
                    <Link to="/register" className="mr-4">Register</Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
