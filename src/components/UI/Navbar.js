// components/UI/Navbar.js
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
    <nav className="bg-slate-900 text-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-3">
          {/* Logo and Brand */}
          <Link to="/" className="flex items-center">
            <img 
              src="/images/forgewise_logo.jpg" 
              alt="ForgeWise Logo" 
              className="h-10 w-10 rounded-full mr-3"
            />
            <span className="text-xl font-bold text-teal-300">ForgeWise</span>
          </Link>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden bg-slate-800 p-2 rounded-md"
            onClick={toggleMenu}
          >
            <svg 
              className="w-6 h-6 text-teal-300" 
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
            <Link to="/" className="text-teal-100 hover:text-teal-300 transition-colors">
              Dashboard
            </Link>
            <Link to="/batches" className="text-teal-100 hover:text-teal-300 transition-colors">
              Batches
            </Link>
            <Link to="/batches/new" className="text-teal-100 hover:text-teal-300 transition-colors">
              New Batch
            </Link>
            <Link to="/recipes" className="text-teal-100 hover:text-teal-300 transition-colors">
              Recipes
            </Link>
          </div>
          
          {/* Desktop logout */}
          <div className="hidden md:flex md:items-center">
            {user && (
              <span className="mr-4 text-slate-300">Welcome, {user.username}</span>
            )}
            <button
              onClick={handleLogout}
              className="bg-slate-800 hover:bg-slate-700 text-teal-300 px-3 py-1 rounded-md transition-colors"
            >
              Logout
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden pb-3 border-t border-slate-700 mt-2">
            <Link 
              to="/" 
              className="block py-2 text-teal-100 hover:bg-slate-800 rounded px-2"
              onClick={() => setMenuOpen(false)}
            >
              Dashboard
            </Link>
            <Link 
              to="/batches" 
              className="block py-2 text-teal-100 hover:bg-slate-800 rounded px-2"
              onClick={() => setMenuOpen(false)}
            >
              Batches
            </Link>
            <Link 
              to="/batches/new" 
              className="block py-2 text-teal-100 hover:bg-slate-800 rounded px-2"
              onClick={() => setMenuOpen(false)}
            >
              New Batch
            </Link>
            <Link 
              to="/recipes" 
              className="block py-2 text-teal-100 hover:bg-slate-800 rounded px-2"
              onClick={() => setMenuOpen(false)}
            >
              Recipes
            </Link>
            <div className="pt-2 mt-2 border-t border-slate-700 flex justify-between items-center">
              {user && (
                <span className="text-slate-300">Welcome, {user.username}</span>
              )}
              <button
                onClick={handleLogout}
                className="bg-slate-800 hover:bg-slate-700 text-teal-300 px-3 py-1 rounded-md"
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