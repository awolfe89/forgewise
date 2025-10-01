import NextSEO from '../../src/components/NextSEO';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { BookingLink } from '../../src/components/ProtectedContact';

export default function AnimalHealthCaseStudy() {
  const seoData = {
    title: 'Animal Health Pharmacy Case Study | $2.2M to $6M Growth | Forgewise',
    description: 'How we helped an animal health pharmacy grow from $2.2M to $6M in 2.5 years through catalog optimization, SEO, and comprehensive eCommerce improvements—increasing site traffic by 471%.',
    canonical: 'https://forgewise.io/results/animal-health-pharmacy'
  };

  return (
    <>
      <NextSEO {...seoData} />

      <div className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-blue-800 to-emerald-700 text-white">
          <div className="max-w-4xl mx-auto px-6">
            <Link href="/results" className="inline-flex items-center text-blue-200 hover:text-white mb-6 transition">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Results
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8"
            >
              <div className="text-emerald-300 font-semibold mb-2">ECOMMERCE OPTIMIZATION & GROWTH</div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                From $2.2M to $6M in 2.5 Years
              </h1>
              <p className="text-xl text-blue-100">
                How strategic catalog optimization, SEO, and content development generated $15M in additional revenue
              </p>
            </motion.div>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-blue-700/50">
              <div>
                <div className="text-3xl font-bold text-emerald-300">173%</div>
                <div className="text-sm text-blue-200">Revenue Growth</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-emerald-300">471%</div>
                <div className="text-sm text-blue-200">Traffic Increase</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-emerald-300">2.5 Years</div>
                <div className="text-sm text-blue-200">Timeframe</div>
              </div>
            </div>
          </div>
        </section>

        {/* Challenge Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">The Challenge</h2>

            <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8">
              <h3 className="font-bold text-lg mb-3 text-red-900">Starting Point: Underutilized eCommerce Potential</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>$2.2M annual eCommerce revenue with significant growth potential</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>9,000 SKU catalog that was scattered with categories lacking nuance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>65% of products missing descriptions, images, or both</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>No product attributes for filtering, minimal content, no blog</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>Limited digital marketing presence and organic visibility</span>
                </li>
              </ul>
            </div>

            <div className="prose max-w-none text-gray-600">
              <p className="text-lg">
                This animal health pharmacy had an existing eCommerce platform generating $2.2M annually, but the site was
                severely underoptimized. With 9,000 SKUs in a disorganized catalog structure and the majority of products
                lacking basic information, customers struggled to find and purchase products.
              </p>
              <p className="text-lg mt-4">
                The sparse content, missing product attributes, and poor categorization created a challenging user experience.
                The company needed comprehensive catalog optimization, content development, and strategic SEO to unlock their
                platform's true revenue potential.
              </p>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">Our Solution</h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-blue-600 font-bold mb-3">Phase 1: Catalog Foundation (Months 1-8)</div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Created 500 product attributes and assigned across catalog</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Restructured into 200+ categories and subcategories</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Sourced and added missing images for entire catalog</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Sourced and added all missing product descriptions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Created SEO template for product descriptions</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-blue-600 font-bold mb-3">Phase 2: Content & Marketing (Months 9-18)</div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Added related products to entire catalog</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Built comprehensive blog using AI for ideation and creative content</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Increased intra-site linking through products and blog</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Created and maintained $50,000 ad spend campaigns</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-blue-600 font-bold mb-3">Phase 3: Technical Excellence (Months 19-30)</div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Migrated site from one ERP to another without downtime</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Created enticing homepage with optimized banner images</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Converted site to next-gen image formats (WebP/AVIF)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Built private image converter app for marketing team</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Created additional satellite websites for product subsections</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Developed interactive product guides with next-gen coding</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-blue-600 font-bold mb-3">Key Technologies & Tools</div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Magento 2</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">ERP Integration</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">AI Content Tools</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Google Ads</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Next-Gen Images</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Custom Tools</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">The Results</h2>

            <div className="bg-gradient-to-r from-emerald-50 to-blue-50 p-8 rounded-xl mb-12">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-bold text-lg mb-4 text-gray-900">Revenue Impact</h3>
                  <ul className="space-y-3">
                    <li className="flex justify-between">
                      <span className="text-gray-700">Starting Revenue:</span>
                      <span className="font-bold text-gray-600">$2.2M/year</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-700">Final Revenue:</span>
                      <span className="font-bold text-emerald-600">$6.0M/year</span>
                    </li>
                    <li className="flex justify-between border-t pt-3">
                      <span className="text-gray-700 font-bold">Total Growth:</span>
                      <span className="font-bold text-emerald-600 text-xl">173%</span>
                    </li>
                    <li className="flex justify-between border-t pt-3">
                      <span className="text-gray-700 font-bold">Additional Revenue Generated:</span>
                      <span className="font-bold text-emerald-600 text-xl">$15M</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-4 text-gray-900">Digital Impact</h3>
                  <ul className="space-y-3">
                    <li className="flex justify-between">
                      <span className="text-gray-700">Site Traffic Increase:</span>
                      <span className="font-bold text-blue-600">471%</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-700">Organic Keywords:</span>
                      <span className="font-bold text-blue-600">2x growth</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-700">Catalog Size:</span>
                      <span className="font-bold text-blue-600">9,000 SKUs</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-700">Products Optimized:</span>
                      <span className="font-bold text-blue-600">100%</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
              <div className="flex items-start">
                <svg className="w-6 h-6 text-blue-500 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                <div>
                  <h3 className="font-bold text-blue-900 mb-2">Client Testimonial</h3>
                  <blockquote className="text-gray-700 italic">
                    "The comprehensive catalog overhaul and strategic SEO work transformed our online business. By systematically
                    improving every aspect of our product catalog and building quality content, we saw traffic and revenue grow
                    month after month. The results speak for themselves—nearly tripling our eCommerce revenue in 2.5 years."
                  </blockquote>
                  <p className="text-sm text-gray-600 mt-2">— Owner, Animal Health Pharmacy</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Takeaways */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">Key Takeaways</h2>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="text-2xl mb-3">📦</div>
                <h3 className="font-bold mb-2">Complete Catalog Optimization</h3>
                <p className="text-gray-600 text-sm">
                  Systematic improvements across 9,000 SKUs—adding attributes, reorganizing categories, sourcing images and
                  descriptions—created a foundation for growth.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <div className="text-2xl mb-3">🔍</div>
                <h3 className="font-bold mb-2">SEO as a Growth Engine</h3>
                <p className="text-gray-600 text-sm">
                  Strategic content development, SEO-optimized product descriptions, and comprehensive internal linking
                  drove 471% traffic increase and 2x keyword growth.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <div className="text-2xl mb-3">⚡</div>
                <h3 className="font-bold mb-2">Technical Excellence Matters</h3>
                <p className="text-gray-600 text-sm">
                  Next-gen image formats, seamless ERP migration, custom tools, and interactive product guides combined
                  to create a superior user experience.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-800 to-emerald-700 text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Unlock Your eCommerce Potential?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              If this animal health pharmacy can grow 173% in 2.5 years, imagine what's possible for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <BookingLink
                type="discovery"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium bg-white text-blue-800 rounded-lg hover:bg-gray-100 transition-all"
              >
                Get Your Growth Assessment
              </BookingLink>
              <Link
                href="/results"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-800 transition-all"
              >
                View More Case Studies
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}