import Link from 'next/link';
import { motion } from 'framer-motion';
import NextSEO from '../src/components/NextSEO';
import { BookingLink } from '../src/components/ProtectedContact';

export default function Custom500() {
  return (
    <>
      <NextSEO
        title="Server Error - Forgewise"
        description="Something went wrong on our end. We're fixing it."
        noindex={true}
      />

      <div className="min-h-screen pt-20 flex items-center justify-center bg-gradient-to-br from-red-50 to-orange-50">
        <div className="text-center px-6 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Error Icon */}
            <div className="mb-8 inline-flex items-center justify-center w-20 h-20 bg-red-100 rounded-full">
              <svg
                className="w-10 h-10 text-red-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
            </div>

            <h1 className="text-6xl font-bold text-gray-200 mb-4">500</h1>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Our Server Had a Moment
            </h2>

            <p className="text-xl text-gray-600 mb-8">
              Something broke on our end. The good news? We fix things for a living.
            </p>

            <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
              <h3 className="text-xl font-semibold mb-3">While we fix this...</h3>
              <ul className="text-left text-gray-700 space-y-3">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>
                    <strong>Try refreshing</strong> - Sometimes that's all it takes
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>
                    <strong>Come back in 5 minutes</strong> - We're probably already on it
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>
                    <strong>Still broken?</strong> Email us at{' '}
                    <a href="mailto:admin@forgewise.io" className="text-blue-600 hover:underline">
                      admin@forgewise.io
                    </a>
                  </span>
                </li>
              </ul>
            </div>

            <p className="text-gray-600 mb-6">
              Or while you wait, learn how we help $1M-$50M brands stop bleeding money:
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-gray-700 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors"
              >
                ← Back to Home
              </Link>

              <Link
                href="/quick-fixes/"
                className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                See Quick Fixes →
              </Link>

              <BookingLink
                type="discovery"
                className="inline-flex items-center justify-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                Get Help Now →
              </BookingLink>
            </div>

            <p className="mt-8 text-sm text-gray-500">
              Error Code: 500 | Internal Server Error
            </p>
          </motion.div>
        </div>
      </div>
    </>
  );
}