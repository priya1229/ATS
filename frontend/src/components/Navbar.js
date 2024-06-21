// src/components/Navbar.js
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
    const { user, logout } = useContext(AuthContext);

    return (
        <nav className="bg-zinc-950 p-4 text-white">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-xl font-bold">ATS</Link>
                <div>
                    <Link to="/" className="mr-4">Home</Link>
                    {user ? (
                        <>
                            <span className="mr-4">Welcome, {user.name}</span>
                            <button onClick={logout} className="mr-4">Logout</button>
                            {user.role === 'Employer' && (
                                <Link to="/create-job" className="mr-4">Create Job</Link>
                            )}
                            {user.role === 'Recruiter' && (
                                <Link to="/review-applications" className="mr-4">Review Applications</Link>
                            )}
                        </>
                    ) : (
                        <>
                            <Link to="/login" className="mr-4">Login</Link>
                            <Link to="/register">Register</Link>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
