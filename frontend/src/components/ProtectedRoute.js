// src/components/ProtectedRoute.js

import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ role, element, ...rest }) => {
    const { user } = useAuth();

    // Example logic for role-based authorization
    if (user && user.role === role) {
        return <Route {...rest} element={element} />;
    } else {
        return <Navigate to="/login" />;
    }
};

export default ProtectedRoute;
