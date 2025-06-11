import { Link, useLocation } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Breadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Don't show breadcrumbs on homepage
  if (pathnames.length === 0) return null;

  // Route name mapping for better display
  const routeNameMap = {
    'quick-fixes': 'Quick Fixes',
    'solutions': 'Solutions',
    'results': 'Results',
    'about': 'About',
    'insights': 'Insights',
    'contact': 'Contact',
    'privacy-policy': 'Privacy Policy',
    'terms-of-service': 'Terms of Service',
    'accessibility': 'Accessibility',
    // Insight-specific mappings
    'shopify-speed-fix': 'Shopify Speed Optimization',
    'hidden-inventory-costs': 'Hidden Inventory Costs',
    'unused-features': 'Unused Software Features',
    'ppc-cost-optimization': 'PPC Cost Optimization',
    'seo-ux-transformation': 'SEO & UX Transformation',
    'attribute-filtering-case-study': 'Attribute Filtering Case Study',
    'ai-in-ecommerce': 'AI in E-commerce'
  };

  return (
    <nav aria-label="Breadcrumb" className={`sticky z-40 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 shadow-sm transition-all duration-300 ${
      isScrolled ? 'top-[72px]' : 'top-[88px]'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-2">
        <ol className="flex items-center space-x-2 text-sm">
          <li>
            <Link 
              to="/" 
              className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
              aria-label="Home"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-4 w-4" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" 
                />
              </svg>
            </Link>
          </li>
          
          {pathnames.map((pathname, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
            const isLast = index === pathnames.length - 1;
            const displayName = routeNameMap[pathname] || pathname.charAt(0).toUpperCase() + pathname.slice(1);

            return (
              <li key={pathname} className="flex items-center">
                <ChevronRight className="h-4 w-4 text-gray-400 dark:text-gray-600 mx-1" />
                {isLast ? (
                  <span className="text-gray-700 dark:text-gray-200 font-medium" aria-current="page">
                    {displayName}
                  </span>
                ) : (
                  <Link
                    to={routeTo}
                    className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
                  >
                    {displayName}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}