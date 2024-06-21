// src/context/AuthContext.js
import React, { createContext, useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode'; // Correct import
import { login as loginUser, register as registerUser } from '../services/api';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token && token.split('.').length === 3) { // Check if token is valid JWT
            try {
                const decodedUser = jwtDecode(token);
                setUser(decodedUser);
            } catch (error) {
                console.error('Invalid token:', error);
                localStorage.removeItem('token');
            }
        }
    }, []);

    const login = async (email, password) => {
        const response = await loginUser({ email, password });
        const token = response.data.token;
        if (token && token.split('.').length === 3) { // Check if token is valid JWT
            localStorage.setItem('token', token);
            const decodedUser = jwtDecode(token);
            setUser(decodedUser);
        } else {
            console.error('Invalid token received from server');
        }
    };

    const register = async (userData) => {
        await registerUser(userData);
    };

    const logout = () => {
        localStorage.removeItem('token');
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthProvider, AuthContext };
