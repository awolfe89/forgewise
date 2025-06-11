// components/Footer.jsx
import { Link } from 'react-router-dom';
import { BookingLink, Location } from './ProtectedContact';
import { ForgewiseLogo } from '../config/branding';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-5 gap-8 mb-12">
          {/* Brand Column */}
          <div className="md:col-span-1 text-center md:text-left">
            <div className="flex items-center gap-2 mb-4 justify-center md:justify-start">
              <ForgewiseLogo className="h-8 w-8" color="#ffffff" />
              <h3 className="font-bold text-xl">Forgewise</h3>
            </div>
            <p className="text-gray-400 mb-4">
              Strategic technology consulting that transforms businesses.
            </p>
            <p className="text-teal-400 font-medium">
              ✓ Proven solutions
            </p>
            <p className="text-teal-400 font-medium">
              ✓ Measurable results
            </p>
          </div>
          
          {/* Solutions Column */}
          <div className="text-center md:text-left">
            <h4 className="font-semibold text-lg mb-4 text-teal-400">Solutions</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link to="/insights/shopify-speed-fix" className="hover:text-teal-400 transition">
                  Performance Optimization
                </Link>
              </li>
              <li>
                <Link to="/insights/ppc-cost-optimization" className="hover:text-teal-400 transition">
                  Marketing Efficiency
                </Link>
              </li>
              <li>
                <Link to="/insights/seo-ux-transformation" className="hover:text-teal-400 transition">
                  Conversion Optimization
                </Link>
              </li>
              <li>
                <Link to="/insights/hidden-inventory-costs" className="hover:text-teal-400 transition">
                  Process Automation
                </Link>
              </li>
              <li>
                <Link to="/insights/unused-features" className="hover:text-teal-400 transition">
                  Cost Reduction
                </Link>
              </li>
              <li>
                <Link to="/quick-fixes" className="hover:text-teal-400 transition font-medium">
                  View All Solutions →
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Industries Column */}
          <div className="text-center md:text-left">
            <h4 className="font-semibold text-lg mb-4 text-indigo-400">Industries</h4>
            <ul className="space-y-2 text-gray-400">
              <li>E-commerce & Retail</li>
              <li>B2B Distribution</li>
              <li>Professional Services</li>
              <li>Manufacturing</li>
              <li>Technology</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h4 className="font-semibold text-lg mb-4">Resources</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link to="/quick-fixes" className="hover:text-indigo-400 transition font-medium">
                  Quick Wins →
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="hover:text-indigo-400 transition">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="/results" className="hover:text-indigo-400 transition">
                  Client Results
                </Link>
              </li>
              <li>
                <Link to="/insights" className="hover:text-indigo-400 transition">
                  Insights Library
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-indigo-400 transition">
                  About Forgewise
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Column */}
          <div className="text-center md:text-left">
            <h4 className="font-semibold text-lg mb-4 text-orange-400">Get Started</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <p className="text-white font-medium mb-1">Schedule a Discussion</p>
                <BookingLink 
                  type="consultation"
                  className="hover:text-orange-400 transition"
                >
                  Book consultation →
                </BookingLink>
              </li>
              <li>
                <p className="text-white font-medium mb-1">Quick Assessment</p>
                <BookingLink 
                  type="discovery"
                  className="hover:text-orange-400 transition"
                >
                  15-minute discovery →
                </BookingLink>
              </li>
              <li className="flex items-center gap-2 justify-center md:justify-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <Location />
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Forgewise.io. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-sm">
              <Link to="/privacy-policy" className="text-gray-400 hover:text-white transition">
                Privacy Policy
              </Link>
              <span className="text-gray-600">|</span>
              <Link to="/terms-of-service" className="text-gray-400 hover:text-white transition">
                Terms of Service
              </Link>
              <span className="text-gray-600">|</span>
              <Link to="/accessibility" className="text-gray-400 hover:text-white transition">
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}