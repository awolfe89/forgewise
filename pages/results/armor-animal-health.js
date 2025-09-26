import NextSEO from '../../src/components/NextSEO';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { BookingLink } from '../../src/components/ProtectedContact';

export default function ArmorAnimalHealthCaseStudy() {
  const seoData = {
    title: 'Armor Animal Health Case Study | $2.2M to $6M Growth | Forgewise',
    description: 'How we helped Armor Animal Health grow from $2.2M to $6M in 3 years through B2B eCommerce transformation and ERP integration.',
    canonical: 'https://forgewise.io/results/armor-animal-health'
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
              <div className="text-emerald-300 font-semibold mb-2">B2B DISTRIBUTION TRANSFORMATION</div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                From $2.2M to $6M in 3 Years
              </h1>
              <p className="text-xl text-blue-100">
                How Armor Animal Health transformed their legacy wholesale business into a digital powerhouse
              </p>
            </motion.div>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-blue-700/50">
              <div>
                <div className="text-3xl font-bold text-emerald-300">173%</div>
                <div className="text-sm text-blue-200">Revenue Growth</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-emerald-300">67%</div>
                <div className="text-sm text-blue-200">Online Orders</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-emerald-300">3 Years</div>
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
              <h3 className="font-bold text-lg mb-3 text-red-900">Starting Point: A Traditional Distributor Stuck in the Past</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>$2.2M annual revenue with 100% phone/fax orders</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>5,000+ SKUs managed in spreadsheets</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>No online presence beyond a basic brochure site</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>Legacy ERP system (Sage 100) disconnected from everything</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>Losing customers to digital-first competitors</span>
                </li>
              </ul>
            </div>

            <div className="prose max-w-none text-gray-600">
              <p className="text-lg">
                Armor Animal Health had been in business for over 20 years, serving veterinary clinics and animal hospitals
                across the Midwest. But their traditional phone-and-fax ordering system was becoming a liability.
                Younger buyers expected online ordering, real-time inventory, and self-service account management.
              </p>
              <p className="text-lg mt-4">
                The owner knew they needed to modernize but was overwhelmed by the complexity and afraid of disrupting
                their existing operations. They needed a partner who understood both B2B commerce and legacy systems.
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
                <div className="text-blue-600 font-bold mb-3">Phase 1: Foundation (Months 1-6)</div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Magento 2 B2B implementation with customer-specific pricing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Sage 100 ERP integration for real-time inventory</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Bulk order upload and quick order forms</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Customer account hierarchies with approval workflows</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-blue-600 font-bold mb-3">Phase 2: Growth (Months 7-18)</div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Advanced product filtering for 5,000+ SKUs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Automated reorder reminders based on purchase history</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>SEO optimization targeting veterinary keywords</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Google Ads campaigns for high-margin products</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-blue-600 font-bold mb-3">Phase 3: Scale (Months 19-36)</div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Mobile app for field sales reps</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Automated email marketing with Klaviyo</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Expansion to new territories through digital marketing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Customer portal with order history and reporting</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-blue-600 font-bold mb-3">Technology Stack</div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Magento 2 B2B</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Sage 100 ERP</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Klaviyo</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Google Ads</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Cloudflare</span>
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
                      <span className="text-gray-700">Year 1 Revenue:</span>
                      <span className="font-bold text-emerald-600">$2.8M (+27%)</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-700">Year 2 Revenue:</span>
                      <span className="font-bold text-emerald-600">$4.2M (+50%)</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-700">Year 3 Revenue:</span>
                      <span className="font-bold text-emerald-600">$6.0M (+43%)</span>
                    </li>
                    <li className="flex justify-between border-t pt-3">
                      <span className="text-gray-700 font-bold">Total Growth:</span>
                      <span className="font-bold text-emerald-600 text-xl">173%</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-4 text-gray-900">Operational Impact</h3>
                  <ul className="space-y-3">
                    <li className="flex justify-between">
                      <span className="text-gray-700">Online Orders:</span>
                      <span className="font-bold text-blue-600">67% of total</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-700">Order Processing Time:</span>
                      <span className="font-bold text-blue-600">-82%</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-700">Customer Acquisition:</span>
                      <span className="font-bold text-blue-600">+156 new accounts</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-700">Repeat Order Rate:</span>
                      <span className="font-bold text-blue-600">89%</span>
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
                    "We were terrified of going digital. We thought we'd lose the personal touch that made our business successful.
                    Instead, we gained efficiency while keeping our relationships strong. Our customers actually prefer the online
                    ordering, and our sales team now focuses on growing accounts instead of taking orders. The ROI was evident
                    within 6 months."
                  </blockquote>
                  <p className="text-sm text-gray-600 mt-2">— Owner, Armor Animal Health</p>
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
                <div className="text-2xl mb-3">🔄</div>
                <h3 className="font-bold mb-2">Gradual Transformation</h3>
                <p className="text-gray-600 text-sm">
                  We didn't disrupt their business overnight. The phased approach allowed them to maintain operations
                  while building digital capabilities.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <div className="text-2xl mb-3">🔗</div>
                <h3 className="font-bold mb-2">ERP Integration is Key</h3>
                <p className="text-gray-600 text-sm">
                  Connecting Sage 100 to Magento eliminated double entry and gave customers real-time inventory visibility,
                  building trust and reducing calls.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <div className="text-2xl mb-3">📊</div>
                <h3 className="font-bold mb-2">B2B Requires B2B Features</h3>
                <p className="text-gray-600 text-sm">
                  Customer-specific pricing, approval workflows, and bulk ordering weren't nice-to-haves—they were essential
                  for B2B success.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-800 to-emerald-700 text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your B2B Business?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              If Armor Animal Health can grow 173% in 3 years, imagine what's possible for your business.
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