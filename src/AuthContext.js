// AuthContext.js
import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userName, setUserName] = useState('');

  const login = async (email, password) => {
    try {
      const response = await axios.get('https://66d5ca01f5859a7042677b7b.mockapi.io/api/v1/register');
      const user = response.data.find(user => user.email === email && user.password === password);
      if (user) {
        setIsAuthenticated(true);
        setUserName(user.name);
        localStorage.setItem('token', 'dummy_token'); // Replace with actual token if provided
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUserName('');
    localStorage.removeItem('token');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, userName, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
