import Link from 'next/link';
import Image from 'next/image';
import { BookingLink, Location } from './ProtectedContact';

export default function NextFooter() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-blue-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-5 gap-8 mb-12">
          {/* Brand Column */}
          <div className="md:col-span-1 text-center md:text-left">
            <div className="mb-4 relative h-12 w-32 mx-auto md:mx-0">
              <Image
                src="/forgewise_logo_1.png"
                alt="Forgewise"
                fill
                className="object-contain brightness-0 invert"
                style={{ filter: 'brightness(0) invert(1)' }}
                sizes="128px"
              />
            </div>
            <p className="text-gray-300 mb-3 font-medium">
              Specializing in B2B eCommerce Since 2013
            </p>
            <p className="text-gray-400 mb-2 text-sm">
              Serving Illinois and the Tri-State Area
            </p>
            <p className="text-emerald-400 font-medium text-sm">
              ✓ Proven B2B solutions
            </p>
            <p className="text-emerald-400 font-medium text-sm">
              ✓ Measurable ROI
            </p>
          </div>
          
          {/* Solutions Column */}
          <div className="text-center md:text-left">
            <h4 className="font-semibold text-lg mb-4 text-emerald-400">Solutions</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/insights/shopify-speed" className="hover:text-emerald-400 transition">
                  Performance Optimization
                </Link>
              </li>
              <li>
                <Link href="/insights/ppc-cost-optimization" className="hover:text-emerald-400 transition">
                  Marketing Efficiency
                </Link>
              </li>
              <li>
                <Link href="/insights/seo-ux-case-study" className="hover:text-emerald-400 transition">
                  Conversion Optimization
                </Link>
              </li>
              <li>
                <Link href="/insights/hidden-inventory-costs" className="hover:text-emerald-400 transition">
                  Process Automation
                </Link>
              </li>
              <li>
                <Link href="/insights/ai-in-ecommerce" className="hover:text-emerald-400 transition">
                  AI Implementation
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Resources Column */}
          <div className="text-center md:text-left">
            <h4 className="font-semibold text-lg mb-4 text-emerald-400">Resources</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/insights/" className="hover:text-emerald-400 transition">
                  All Insights
                </Link>
              </li>
              <li>
                <Link href="/results/" className="hover:text-emerald-400 transition">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/quick-fixes/" className="hover:text-emerald-400 transition">
                  Quick Wins
                </Link>
              </li>
              <li>
                <Link href="/contact/" className="hover:text-emerald-400 transition">
                  Book Consultation
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Company Column */}
          <div className="text-center md:text-left">
            <h4 className="font-semibold text-lg mb-4 text-emerald-400">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/about/" className="hover:text-emerald-400 transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact/" className="hover:text-emerald-400 transition">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy/" className="hover:text-emerald-400 transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service/" className="hover:text-emerald-400 transition">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/accessibility/" className="hover:text-emerald-400 transition">
                  Accessibility
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Column */}
          <div className="text-center md:text-left">
            <h4 className="font-semibold text-lg mb-4 text-emerald-400">Get Started</h4>

            <div className="space-y-3 mb-4">
              <a href="mailto:admin@forgewise.io" className="block text-gray-300 hover:text-emerald-400 transition font-medium">
                admin@forgewise.io
              </a>
              <p className="text-sm text-gray-500">
                Typically replies same day
              </p>
            </div>

            <BookingLink
              type="discovery"
              className="inline-block bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 transition mb-4"
            >
              Book a Discovery Call
            </BookingLink>

            <p className="text-gray-400 flex items-center gap-2 justify-center md:justify-start">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <Location />
            </p>
          </div>
        </div>
        
        {/* Partner Badges */}
        <div className="border-t border-blue-800/30 pt-8 mb-8">
          <div className="flex flex-wrap justify-center items-center gap-8">
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <p className="text-sm font-medium text-gray-300">Google Partner</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <p className="text-sm font-medium text-gray-300">Shopify Partner</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <p className="text-sm font-medium text-gray-300">Magento Certified</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <p className="text-sm font-medium text-gray-300">ERP Integration Expert</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-800/30 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400">
            <p className="text-center">
              © {new Date().getFullYear()} Forgewise. All rights reserved.
            </p>
            <p className="text-center text-sm">
              B2B eCommerce Solutions | ERP Integration | Digital Transformation
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}