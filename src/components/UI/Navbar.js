import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const Navbar = () => {
  const { logout, user } = useAuth();
  const navigate = useNavigate();
  
  const handleLogout = () => {
    logout();
    navigate('/login');
  };
  
  return (
    <nav className="bg-indigo-600 text-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold">
              Mushroom Tracker
            </Link>
            <div className="ml-10 flex items-center space-x-4">
              <Link to="/" className="hover:text-indigo-200">
                Dashboard
              </Link>
              <Link to="/batches" className="hover:text-indigo-200">
                Batches
              </Link>
              <Link to="/batches/new" className="hover:text-indigo-200">
                New Batch
              </Link>
              <Link to="/recipes" className="hover:text-indigo-200">
                Recipes
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            {user && (
              <span className="mr-4">Welcome, {user.username}</span>
            )}
            <button
              onClick={handleLogout}
              className="bg-indigo-700 hover:bg-indigo-800 px-3 py-1 rounded"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;