import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const DashboardPage = () => {
    const { user, logout } = useContext(AuthContext);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4 text-white">Welcome, {user ? user.name : 'Guest'}!</h1>
            <button onClick={logout} className="text-2xl font-bold mb-4 text-white">Logout</button>
        </div>
    );
};

export default DashboardPage;

