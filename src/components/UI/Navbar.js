
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const Navbar = () => {
  const { logout, user } = useAuth();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  
  const handleLogout = () => {
    logout();
    navigate('/login');
  };
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  
  return (
    <nav className="bg-indigo-600 text-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-3">
          {/* Logo */}
          <Link to="/" className="text-xl font-bold">
            Mushroom Tracker
          </Link>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden bg-indigo-700 p-2 rounded"
            onClick={toggleMenu}
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
          
          {/* Desktop navigation */}
          <div className="hidden md:flex md:items-center md:ml-10 md:space-x-6">
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
          
          {/* Desktop logout */}
          <div className="hidden md:flex md:items-center">
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
        
        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden pb-3 border-t border-indigo-500 mt-2">
            <Link 
              to="/" 
              className="block py-2 hover:bg-indigo-700 rounded px-2"
              onClick={() => setMenuOpen(false)}
            >
              Dashboard
            </Link>
            <Link 
              to="/batches" 
              className="block py-2 hover:bg-indigo-700 rounded px-2"
              onClick={() => setMenuOpen(false)}
            >
              Batches
            </Link>
            <Link 
              to="/batches/new" 
              className="block py-2 hover:bg-indigo-700 rounded px-2"
              onClick={() => setMenuOpen(false)}
            >
              New Batch
            </Link>
            <Link 
              to="/recipes" 
              className="block py-2 hover:bg-indigo-700 rounded px-2"
              onClick={() => setMenuOpen(false)}
            >
              Recipes
            </Link>
            <div className="pt-2 mt-2 border-t border-indigo-500 flex justify-between items-center">
              {user && (
                <span>Welcome, {user.username}</span>
              )}
              <button
                onClick={handleLogout}
                className="bg-indigo-700 hover:bg-indigo-800 px-3 py-1 rounded"
              >
                Logout
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;