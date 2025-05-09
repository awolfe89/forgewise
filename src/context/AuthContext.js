// src/context/AuthContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';
import { login as apiLogin } from '../services/authService'; 

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check if user is already logged in (from localStorage)
  useEffect(() => {
    const token = localStorage.getItem('token');
    const storedUser = localStorage.getItem('user');
    
    if (token && storedUser) {
      setIsAuthenticated(true);
      setUser(JSON.parse(storedUser));
    }
    
    setLoading(false);
  }, []);

  // Login function - let's use apiLogin from authService
  const login = async (username, password) => {
    console.log(`Attempting to log in with username: ${username}`);
    
    try {
      // Use the imported apiLogin function
      const result = await apiLogin(username, password);
      
      if (result.success) {
        console.log('Login successful:', result.data);
        setIsAuthenticated(true);
        setUser(result.data);
        return true;
      } else {
        console.error('Login failed:', result.message);
        return false;
      }
    } catch (error) {
      console.error('Login error:', error);
      return false;
    }
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setIsAuthenticated(false);
    setUser(null);
  };

  const value = {
    isAuthenticated,
    user,
    loading,
    login,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default AuthContext;