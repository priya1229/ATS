import React, { createContext, useContext, useState, useEffect } from 'react';

// Create context
const AuthContext = createContext();

// Custom hook to use the auth context
export const useAuth = () => useContext(AuthContext);

// AuthProvider component
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [logoutCallback, setLogoutCallback] = useState(() => () => { });

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const login = (userData) => {
        console.log('Logging in user:', userData);
        setUser(userData);
        localStorage.setItem('user', JSON.stringify(userData));
    };

    const logout = () => {
        console.log('Logging out user');
        setUser(null);
        localStorage.removeItem('user');
        logoutCallback();
    };

    const value = {
        user,
        login,
        logout,
        setLogoutCallback,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
