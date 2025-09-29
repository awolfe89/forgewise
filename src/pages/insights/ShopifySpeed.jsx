// pages/insights/ShopifySpeed.jsx
import { useEffect } from 'react';
import Link from 'next/link';
import { BookingLink } from '../../components/ProtectedContact';
import SchemaMarkup from '../../components/SchemaMarkup';
import RelatedContent from '../../components/RelatedContent';

export default function ShopifySpeed() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Schema data for this article
  const schemaData = {
    article: {
      title: "Speed Optimization for E-commerce Success",
      excerpt: "Learn how to dramatically improve your site's loading speed and conversion rates with proven optimization techniques.",
      date: "2025-01-06",
      url: "https://forgewise.io/insights/shopify-speed"
    },
    faqs: [
      {
        question: "How much does site speed affect conversion rates?",
        answer: "According to Google, a 1-second delay in page load time can lead to a 7% reduction in conversions. For a $100,000/month store, that's $7,000 in lost revenue."
      },
      {
        question: "What's a good page load time for e-commerce?",
        answer: "Aim for under 3 seconds on mobile. The best-performing e-commerce sites load in 1-2 seconds."
      },
      {
        question: "Can I fix speed issues without changing platforms?",
        answer: "Yes! Most speed issues can be fixed with optimization techniques like image compression, code minification, and lazy loading without changing your platform."
      }
    ]
  };

  return (
    <div className="pt-20">
      <SchemaMarkup pageType="insight" data={schemaData} />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-600 to-orange-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex flex-col items-start">
            <span className="bg-red-500 text-white text-sm font-medium px-3 py-1 rounded-full mb-4">
              🚨 HIGH PRIORITY FIX
            </span>
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              Why Your Shopify Store Is Slow (And The $50 Fix)
            </h1>
            <p className="text-xl text-red-100 mb-6">
              Your store takes 8+ seconds to load. You're losing $10K/month. Here's the exact 30-minute fix.
            </p>
            <div className="flex items-center text-red-200 text-sm">
              <span>4 min read</span>
              <span className="mx-2">•</span>
              <span>Quick Fix</span>
              <span className="mx-2">•</span>
              <span className="font-bold">Saves $10K/month</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="prose prose-lg max-w-none">
            {/* The Problem */}
            <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8 rounded-r-lg">
              <h2 className="text-gray-800 text-xl font-semibold mt-0">⏱️ Test Your Speed Right Now</h2>
              <ol className="mb-0 text-gray-700">
                <li>Open your store in incognito mode</li>
                <li>Count: "One Mississippi, Two Mississippi..."</li>
                <li>If you hit 4+ before it loads, you're losing money</li>
              </ol>
              <p className="mt-4 mb-0 font-bold text-red-700">
                Every second after 3 seconds = 7% fewer sales (Google data)
              </p>
            </div>

            <h2>The $10,000/Month Math</h2>
            <p>Here's exactly what slow loading costs you:</p>
            <ul>
              <li>8-second load time = 5 seconds too slow</li>
              <li>5 × 7% = 35% lost conversions</li>
              <li>If you make $30K/month, you're losing $10,500</li>
              <li>That's $126,000/year. Gone.</li>
            </ul>

            <h2>The Real Culprits (In Order)</h2>
            
            <h3>1. Your Hero Image (60% of the problem)</h3>
            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <p className="font-bold mb-2">THE PROBLEM:</p>
              <p>That beautiful 4MB hero image takes 6 seconds to load on mobile.</p>
              <p className="font-bold mt-4 mb-2">THE FIX (10 minutes):</p>
              <ol>
                <li>Download your hero image</li>
                <li>Go to <code>tinypng.com</code> (free)</li>
                <li>Upload image, download compressed version</li>
                <li>Replace in Shopify admin</li>
                <li>Test speed again - should drop 2-3 seconds</li>
              </ol>
            </div>

            <h3>2. App Overload (25% of the problem)</h3>
            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <p className="font-bold mb-2">THE PROBLEM:</p>
              <p>You have 23 apps installed. You use 5. Each unused app adds 0.3 seconds.</p>
              <p className="font-bold mt-4 mb-2">THE FIX (15 minutes):</p>
              <ol>
                <li>Go to Apps in Shopify admin</li>
                <li>Sort by "Last used"</li>
                <li>Delete anything unused for 30+ days</li>
                <li>Keep only: Email, Reviews, Analytics, Shipping, Inventory</li>
                <li>Test speed - should drop another 2 seconds</li>
              </ol>
            </div>

            <h3>3. The Carousel of Death (15% of the problem)</h3>
            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <p className="font-bold mb-2">THE PROBLEM:</p>
              <p>That auto-playing product carousel loads 20 images before showing one.</p>
              <p className="font-bold mt-4 mb-2">THE FIX (5 minutes):</p>
              <ol>
                <li>Replace carousel with static featured products</li>
                <li>Show 4 products max on homepage</li>
                <li>Use "lazy loading" (ask your theme - it's one checkbox)</li>
              </ol>
            </div>

            <h2>The $50 Nuclear Option</h2>
            <p>Still slow? Here's what we do for clients:</p>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8 rounded-r-lg">
              <ol className="mb-0">
                <li><strong>Buy Shopify's "Minifier" app</strong> ($9/month)</li>
                <li><strong>Install Cloudflare</strong> (free plan)</li>
                <li><strong>Buy TinyIMG</strong> ($24/month) - compresses everything automatically</li>
                <li><strong>Turn on Shopify's "Online Store 2.0" speed features</strong></li>
              </ol>
              <p className="mt-4 mb-0 font-bold">
                Total cost: $33/month. Speed improvement: 60-80%. ROI: 30,000%.
              </p>
            </div>

            <h2>Test Your Results</h2>
            <p>After each fix, test your speed:</p>
            <ol>
              <li>Go to <code>gtmetrix.com</code></li>
              <li>Enter your store URL</li>
              <li>Screenshot the results</li>
              <li>Aim for under 3 seconds</li>
            </ol>

            <h2>Still Too Slow?</h2>
            <p>
              If you're still over 4 seconds after these fixes, you have deeper problems:
            </p>
            <ul>
              <li>Bad theme code (needs developer)</li>
              <li>Server location issues (needs Shopify Plus)</li>
              <li>Database bloat (needs cleanup)</li>
            </ul>

            {/* Call to Action */}
            <div className="bg-gray-900 text-white p-8 rounded-lg mt-12">
              <h3 className="text-2xl font-bold mb-4 text-white">
                Need Us to Fix This For You?
              </h3>
              <p className="mb-6 text-gray-300">
                We'll audit your site, implement all fixes, and guarantee under 3-second load time. 
                Usually takes 2-3 hours. Flat rate: $497.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <BookingLink
                  type="audit15min"
                  className="inline-block px-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 text-center"
                >
                  Book Speed Fix Service
                </BookingLink>
                <Link
                  href="/contact"
                  className="inline-block px-6 py-3 bg-transparent text-white font-bold rounded-lg border-2 border-white hover:bg-white hover:text-gray-900 text-center"
                >
                  Ask a Question First
                </Link>
              </div>
            </div>

            {/* Related Problems */}
            <div className="mt-12 p-6 bg-yellow-50 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Related Problems You Might Have:</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/insights/unused-features" className="text-blue-700 hover:text-blue-800 font-medium">
                    → Paying for apps you don't use (costs $847/month)
                  </Link>
                </li>
                <li>
                  <Link href="/insights/ppc-cost-optimization" className="text-blue-700 hover:text-blue-800 font-medium">
                    → Google Ads eating budget with no sales
                  </Link>
                </li>
                <li>
                  <Link href="/insights/seo-ux-transformation" className="text-blue-700 hover:text-blue-800 font-medium">
                    → Customers can't find products (even when site loads)
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Related Content */}
      <RelatedContent 
        title="More Performance Solutions"
        items={[
          {
            id: 'seo-fix',
            title: 'SEO & Visibility Rescue',
            description: 'Your site is invisible on Google. We\'ll identify and fix what\'s blocking you.',
            link: '/quick-fixes',
            category: 'Quick Fix',
            cta: 'Fix visibility issues'
          },
          {
            id: 'conversion-opt',
            title: 'Conversion Rate Optimization',
            description: 'Turn more visitors into customers with proven UX improvements.',
            link: '/insights/seo-ux-transformation',
            category: 'Case Study',
            cta: 'See 312% growth'
          },
          {
            id: 'tech-audit',
            title: 'Full Technical Audit',
            description: 'Comprehensive analysis of your site\'s performance, SEO, and conversion blockers.',
            link: '/contact',
            category: 'Service',
            cta: 'Book audit'
          }
        ]}
        variant="cards"
        className="bg-gray-50"
      />
    </div>
  );
}