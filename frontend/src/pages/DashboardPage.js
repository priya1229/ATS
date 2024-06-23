// src/pages/DashboardPage.js

import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';

const DashboardPage = () => {
    const { user } = useAuth(); // Use useAuth hook to access user information

    return (
        <div className="container mx-auto p-4">
            <h2>Welcome to Dashboard</h2>
            <p>User: {user ? user.username : 'Guest'}</p>
            {user && user.role === 'Employer' && (
                <Link to="/create-job" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                    Create Job
                </Link>
            )}
            {user && user.role === 'Recruiter' && (
                <Link to="/review-applications" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                    Review Applications
                </Link>
            )}
            {/* Add more conditional rendering based on other roles */}
        </div>
    );
};

export default DashboardPage;
