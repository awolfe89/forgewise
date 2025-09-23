import Link from 'next/link';
import { motion } from 'framer-motion';
import NextSEO from '../src/components/NextSEO';

export default function NotFound() {
  return (
    <>
      <NextSEO 
        title="Page Not Found - Forgewise"
        description="The page you're looking for doesn't exist."
      />
      
      <div className="min-h-screen pt-20 flex items-center justify-center bg-gray-50">
        <div className="text-center px-6">
          <motion.div
            initial={{ opacity: 1, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-9xl font-bold text-gray-200 mb-4">404</h1>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Page Not Found</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-md mx-auto">
              This page doesn't exist. Let's get you back on track.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/"
                className="inline-flex items-center justify-center px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
              >
                ← Go Home
              </Link>
              <Link 
                href="/contact/"
                className="inline-flex items-center justify-center px-6 py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors"
              >
                Contact Support
              </Link>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mt-16"
          >
            <p className="text-gray-600 mb-4">Popular pages:</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/quick-fixes/" className="text-indigo-600 hover:text-indigo-700 underline">
                Quick Fixes
              </Link>
              <Link href="/solutions/" className="text-indigo-600 hover:text-indigo-700 underline">
                Solutions
              </Link>
              <Link href="/results/" className="text-indigo-600 hover:text-indigo-700 underline">
                Results
              </Link>
              <Link href="/insights/" className="text-indigo-600 hover:text-indigo-700 underline">
                Insights
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}

