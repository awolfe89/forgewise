// components/Navbar.jsx
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => router.pathname === path;

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg py-2' : 'bg-white/95 backdrop-blur-sm shadow-md py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <img 
            src="/forgewise_logo_1.png" 
            alt="Forgewise" 
            className="h-14 md:h-16 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link 
            href="/" 
            className={`${
              isActive('/') ? 'text-indigo-600 font-medium' : 'text-gray-700'
            } hover:text-indigo-600 transition-colors`}
          >
            Home
          </Link>
          <Link 
            href="/quick-fixes/" 
            className={`${
              isActive('/quick-fixes') ? 'text-indigo-600 font-medium' : 'text-gray-700'
            } hover:text-indigo-600 transition-colors`}
          >
            Quick Wins
          </Link>
          <Link 
            href="/solutions/" 
            className={`${
              isActive('/solutions') ? 'text-indigo-600 font-medium' : 'text-gray-700'
            } hover:text-indigo-600 transition-colors`}
          >
            Solutions
          </Link>
          <Link 
            href="/results/" 
            className={`${
              isActive('/results') ? 'text-indigo-600 font-medium' : 'text-gray-700'
            } hover:text-indigo-600 transition-colors`}
          >
            Results
          </Link>
          <Link 
            href="/about/" 
            className={`${
              isActive('/about') ? 'text-indigo-600 font-medium' : 'text-gray-700'
            } hover:text-indigo-600 transition-colors`}
          >
            About
          </Link>
          <Link 
            href="/insights/" 
            className={`${
              isActive('/insights') ? 'text-indigo-600 font-medium' : 'text-gray-700'
            } hover:text-indigo-600 transition-colors`}
          >
            Insights
          </Link>
          <Link 
            href="/contact/" 
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 rounded-lg p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
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
        <div id="mobile-menu" className="md:hidden bg-white shadow-lg py-4">
          <div className="flex flex-col space-y-4 px-6">
            <Link 
              href="/" 
              className={`${
                isActive('/') ? 'text-indigo-600 font-medium' : 'text-gray-700'
              } hover:text-indigo-600 transition-colors`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/quick-fixes/" 
              className={`${
                isActive('/quick-fixes') ? 'text-indigo-600 font-medium' : 'text-gray-700'
              } hover:text-indigo-600 transition-colors`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Quick Wins
            </Link>
            <Link 
              href="/solutions/" 
              className={`${
                isActive('/solutions') ? 'text-indigo-600 font-medium' : 'text-gray-700'
              } hover:text-indigo-600 transition-colors`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Solutions
            </Link>
            <Link 
              href="/results/" 
              className={`${
                isActive('/results') ? 'text-indigo-600 font-medium' : 'text-gray-700'
              } hover:text-indigo-600 transition-colors`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Results
            </Link>
            <Link 
              href="/about/" 
              className={`${
                isActive('/about') ? 'text-indigo-600 font-medium' : 'text-gray-700'
              } hover:text-indigo-600 transition-colors`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              href="/insights/" 
              className={`${
                isActive('/insights') ? 'text-indigo-600 font-medium' : 'text-gray-700'
              } hover:text-indigo-600 transition-colors`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Insights
            </Link>
            <Link 
              href="/contact/" 
              className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}