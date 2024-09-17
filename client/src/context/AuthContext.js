import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
        const savedUser = localStorage.getItem('user');
        return savedUser ? JSON.parse(savedUser) : null;
    });

    const register = (name, email, password) => {
        const newUser = { name, email, password };
        localStorage.setItem('registeredUser', JSON.stringify(newUser));
        setUser(newUser);
    };

    const login = (email, password) => {
        const storedUser = JSON.parse(localStorage.getItem('registeredUser'));
        if (storedUser && storedUser.email === email && storedUser.password === password) {
            setUser(storedUser); 
            localStorage.setItem('user', JSON.stringify(storedUser)); // Persist logged in user
            return true; 
        } else {
            return false;
        } 
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('user'); 
    };

    return (
        <AuthContext.Provider value={{ user, register, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
