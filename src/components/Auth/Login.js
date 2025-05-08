// components/Auth/Login.js
import React, { useState } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  // If already logged in, redirect to dashboard
  if (isAuthenticated) {
    return <Navigate to="/" />;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!username || !password) {
      setError('Please enter both username and password');
      return;
    }
    
    const success = login(username, password);
    
    if (success) {
      navigate('/');
    } else {
      setError('Invalid credentials. Try admin/mushrooms123');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900 px-4">
      <div className="max-w-md w-full p-6 bg-slate-800 rounded-lg shadow-xl">
        <div className="flex flex-col items-center mb-8">
          <img 
            src="/images/forgewise_logo.jpg" 
            alt="ForgeWise Logo" 
            className="h-24 w-24 rounded-full mb-4 border-4 border-teal-300/20"
          />
          <h1 className="text-2xl font-bold text-teal-300 text-center">ForgeWise</h1>
          <p className="mt-1 text-slate-400 text-center">Mushroom Cultivation Tracker</p>
        </div>
        
        {error && (
          <div className="bg-red-900/30 border border-red-800 text-red-300 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-teal-100 mb-2" htmlFor="username">
              Username
            </label>
            <input
              className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded focus:outline-none focus:border-teal-400 text-white"
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          
          <div>
            <label className="block text-teal-100 mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded focus:outline-none focus:border-teal-400 text-white"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          
          <button
            className="w-full bg-teal-600 text-white py-2 px-4 rounded hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50 transition-colors"
            type="submit"
          >
            Login
          </button>
        </form>
        
        <div className="mt-6 text-center text-sm text-slate-400">
          <p>Use username: admin, password: mushrooms123</p>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-700 text-center text-xs text-slate-500">
          <p>© 2025 ForgeWise. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Login;