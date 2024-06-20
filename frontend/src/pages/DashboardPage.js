// frontend/src/pages/DashboardPage.js
import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const DashboardPage = () => {
    const { user } = useContext(AuthContext);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
            {user && <p>Welcome, {user.role}</p>}
            {/* Depending on user role, render different components */}
        </div>
    );
};

export default DashboardPage;
