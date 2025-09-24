import Link from 'next/link';
import { motion } from 'framer-motion';
import NextSEO from '../src/components/NextSEO';

export default function ThankYou() {
  return (
    <>
      <NextSEO
        title="Thank You - Forgewise"
        description="Thank you for contacting Forgewise. We'll be in touch soon."
        noindex={true}
      />

      <div className="min-h-screen pt-20 flex items-center justify-center bg-gradient-to-br from-green-50 to-blue-50">
        <div className="text-center px-6 max-w-2xl">
          <motion.div
            initial={{ opacity: 1, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Success Icon */}
            <div className="mb-8 inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full">
              <svg
                className="w-10 h-10 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>

            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Thank You!
            </h1>

            <p className="text-xl text-gray-700 mb-8">
              Your message has been received. We'll get back to you within 24 hours.
            </p>

            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-4">What happens next?</h2>
              <ol className="text-left space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold mr-3">
                    1
                  </span>
                  <div>
                    <strong>We review your message</strong>
                    <p className="text-gray-600 text-sm mt-1">
                      We'll analyze your specific challenges and opportunities
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold mr-3">
                    2
                  </span>
                  <div>
                    <strong>We prepare initial recommendations</strong>
                    <p className="text-gray-600 text-sm mt-1">
                      Based on your needs, we'll identify quick wins and solutions
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold mr-3">
                    3
                  </span>
                  <div>
                    <strong>We reach out within 24 hours</strong>
                    <p className="text-gray-600 text-sm mt-1">
                      With actionable insights - no pitch decks, just solutions
                    </p>
                  </div>
                </li>
              </ol>
            </div>

            <div className="space-y-4">
              <p className="text-gray-600">
                Need immediate assistance? Email us directly at{' '}
                <a href="mailto:admin@forgewise.io" className="text-blue-600 hover:underline">
                  admin@forgewise.io
                </a>
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
                  Browse Quick Fixes →
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}