// frontend/src/context/AuthContext.js
import React, { createContext, useState, useEffect } from 'react';
import { login as loginUser, register as registerUser } from '../services/api';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            // decode token and set user
            setUser({ role: 'decode_from_token' });
        }
    }, []);

    const login = async (email, password) => {
        const response = await loginUser({ email, password });
        localStorage.setItem('token', response.data.token);
        setUser({ role: 'decode_from_token' });
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
