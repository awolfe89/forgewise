import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

export default function NextNavbar() {
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
  const isHomePage = router.pathname === '/';
  const shouldUseLightText = isHomePage && !isScrolled;

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg py-2' : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <div className="relative h-14 md:h-16 w-32 md:w-40">
            <Image
              src="/forgewise_logo_1.png"
              alt="Forgewise"
              fill
              className={`object-contain transition-all ${
                shouldUseLightText ? 'brightness-0 invert' : ''
              }`}
              sizes="(max-width: 768px) 128px, 160px"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link
            href="/"
            className={`${
              shouldUseLightText
                ? 'text-white hover:text-blue-200'
                : `${isActive('/') ? 'text-blue-700 font-medium' : 'text-gray-700'} hover:text-blue-700`
            } transition-colors`}
          >
            Home
          </Link>
          <Link
            href="/results/"
            className={`${
              shouldUseLightText
                ? 'text-white hover:text-blue-200'
                : `${isActive('/results') ? 'text-blue-700 font-medium' : 'text-gray-700'} hover:text-blue-700`
            } transition-colors`}
          >
            Results
          </Link>
          <Link
            href="/quick-fixes/"
            className={`${
              shouldUseLightText
                ? 'text-white hover:text-blue-200'
                : `${isActive('/quick-fixes') ? 'text-blue-700 font-medium' : 'text-gray-700'} hover:text-blue-700`
            } transition-colors`}
          >
            Quick Wins
          </Link>
          <Link
            href="/solutions/"
            className={`${
              shouldUseLightText
                ? 'text-white hover:text-blue-200'
                : `${isActive('/solutions') ? 'text-blue-700 font-medium' : 'text-gray-700'} hover:text-blue-700`
            } transition-colors`}
          >
            Solutions
          </Link>
          <Link
            href="/insights/"
            className={`${
              shouldUseLightText
                ? 'text-white hover:text-blue-200'
                : `${isActive('/insights') ? 'text-blue-700 font-medium' : 'text-gray-700'} hover:text-blue-700`
            } transition-colors`}
          >
            Insights
          </Link>
          <Link
            href="/contact/"
            className={`${
              shouldUseLightText
                ? 'text-white hover:text-blue-200'
                : `${isActive('/contact') ? 'text-blue-700 font-medium' : 'text-gray-700'} hover:text-blue-700`
            } transition-colors`}
          >
            Contact
          </Link>

          <Link
            href="/contact/"
            className={`px-4 py-2 rounded-lg transition-colors ${
              shouldUseLightText
                ? 'bg-white text-blue-700 hover:bg-blue-50'
                : 'bg-blue-700 text-white hover:bg-blue-800'
            }`}
          >
            Book a Discovery Call
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`md:hidden p-2 ${shouldUseLightText ? 'text-white' : 'text-gray-700'}`}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMobileMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-6 py-4 space-y-3">
            <Link
              href="/"
              className={`block ${
                isActive('/') ? 'text-blue-700 font-medium' : 'text-gray-700'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/results/"
              className={`block ${
                isActive('/results') ? 'text-blue-700 font-medium' : 'text-gray-700'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Results
            </Link>
            <Link
              href="/quick-fixes/"
              className={`block ${
                isActive('/quick-fixes') ? 'text-blue-700 font-medium' : 'text-gray-700'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Quick Wins
            </Link>
            <Link
              href="/solutions/"
              className={`block ${
                isActive('/solutions') ? 'text-blue-700 font-medium' : 'text-gray-700'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Solutions
            </Link>
            <Link
              href="/insights/"
              className={`block ${
                isActive('/insights') ? 'text-blue-700 font-medium' : 'text-gray-700'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Insights
            </Link>
            <Link
              href="/contact/"
              className={`block ${
                isActive('/contact') ? 'text-blue-700 font-medium' : 'text-gray-700'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>

            {/* Mobile CTA */}
            <div className="border-t pt-3 mt-4">
              <Link
                href="/contact/"
                className="block w-full text-center px-4 py-2 bg-blue-700 text-white rounded-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Book a Discovery Call
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}