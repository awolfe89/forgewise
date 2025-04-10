// components/Navbar.jsx
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="font-bold text-2xl text-blue-700">Allan<span className="text-gray-800">.Resume</span></Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          <Link 
            to="/" 
            className={`${isActive('/') ? 'text-blue-700 font-medium' : 'text-gray-700'} hover:text-blue-600 transition-colors`}
          >
            Home
          </Link>
          <Link 
            to="/work" 
            className={`${isActive('/work') ? 'text-blue-700 font-medium' : 'text-gray-700'} hover:text-blue-600 transition-colors`}
          >
            Work
          </Link>
          <Link 
            to="/projects" 
            className={`${isActive('/projects') ? 'text-blue-700 font-medium' : 'text-gray-700'} hover:text-blue-600 transition-colors`}
          >
            Projects
          </Link>
          <Link 
            to="/leadership" 
            className={`${isActive('/leadership') ? 'text-blue-700 font-medium' : 'text-gray-700'} hover:text-blue-600 transition-colors`}
          >
            Leadership
          </Link>
          <Link 
            to="/insights" 
            className={`${
              location.pathname.includes('/insights') ? 'text-blue-700 font-medium' : 'text-gray-700'
            } hover:text-blue-600 transition-colors`}
          >
            Insights
          </Link>
          <Link 
            to="/contact" 
            className={`${isActive('/contact') ? 'text-blue-700 font-medium' : 'text-gray-700'} hover:text-blue-600 transition-colors`}
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg py-4">
          <div className="flex flex-col space-y-4 px-6">
            <Link 
              to="/" 
              className={`${isActive('/') ? 'text-blue-700 font-medium' : 'text-gray-700'} hover:text-blue-600 transition-colors`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/work" 
              className={`${isActive('work') ? 'text-blue-700 font-medium' : 'text-gray-700'} hover:text-blue-600 transition-colors`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Projects
            </Link>
            <Link 
              to="/projects" 
              className={`${isActive('/projects') ? 'text-blue-700 font-medium' : 'text-gray-700'} hover:text-blue-600 transition-colors`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Projects
            </Link>

            <Link 
              to="/leadership" 
              className={`${isActive('/leadership') ? 'text-blue-700 font-medium' : 'text-gray-700'} hover:text-blue-600 transition-colors`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Leadership
            </Link>
            <Link 
              to="/insights" 
              className={`${
                location.pathname.includes('/insights') ? 'text-blue-700 font-medium' : 'text-gray-700'
              } hover:text-blue-600 transition-colors`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Insights
            </Link>
            <Link 
              to="/contact" 
              className={`${isActive('/contact') ? 'text-blue-700 font-medium' : 'text-gray-700'} hover:text-blue-600 transition-colors`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}