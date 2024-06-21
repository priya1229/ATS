// src/pages/DashboardPage.js
import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Link } from 'react-router-dom';

const DashboardPage = () => {
    const { user, logout } = useContext(AuthContext);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Welcome, {user ? user.name : 'Guest'}!</h1>
            {user?.role === 'Employer' && (
                <Link to="/create-job" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                    Create Job
                </Link>
            )}
        </div>
    );
};

export default DashboardPage;
