import NextSEO from '../../src/components/NextSEO';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { BookingLink } from '../../src/components/ProtectedContact';

export default function VoltechCaseStudy() {
  const seoData = {
    title: 'Voltech Electric Case Study | +45% Conversion in 14 Days | Forgewise',
    description: 'How we helped Voltech Electric increase conversion rates by 45% through speed optimization, trust signals, and mobile-first design.',
    canonical: 'https://forgewise.io/results/voltech'
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
              <div className="text-emerald-300 font-semibold mb-2">LOCAL SERVICES</div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                +45% Conversion in 14 Days
              </h1>
              <p className="text-xl text-blue-100">
                How Voltech Electric turned their slow, outdated website into a lead generation powerhouse
              </p>
            </motion.div>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-blue-700/50">
              <div>
                <div className="text-3xl font-bold text-emerald-300">+45%</div>
                <div className="text-sm text-blue-200">Conversion Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-emerald-300">2.1s</div>
                <div className="text-sm text-blue-200">Page Load Time</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-emerald-300">+180%</div>
                <div className="text-sm text-blue-200">Mobile Leads</div>
              </div>
            </div>
          </div>
        </section>

        {/* Challenge Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">The Challenge</h2>

            <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8">
              <h3 className="font-bold text-lg mb-3 text-red-900">Starting Point: A Website That Repelled Customers</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>8-second page load time (Google recommends under 3s)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>0.8% conversion rate (industry average: 2.5%)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>Contact info buried in footer - no click-to-call</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>Zero trust signals - no reviews, licenses, or certifications</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>Desktop-only design - 65% of traffic was mobile</span>
                </li>
              </ul>
            </div>

            <div className="prose max-w-none text-gray-600">
              <p className="text-lg">
                Voltech Electric, a family-owned electrical contractor serving the greater metro area, was getting decent traffic
                from their local SEO efforts. But their website was killing conversions. Visitors would land, wait for the slow
                page to load, struggle to find contact information, and leave for a competitor.
              </p>
              <p className="text-lg mt-4">
                The owner was spending $3,000/month on various marketing efforts but couldn't understand why calls weren't coming in.
                The answer was simple: their website was actively driving customers away.
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
                <div className="text-blue-600 font-bold mb-3">Days 1-3: Speed Optimization</div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Migrated to Cloudflare CDN</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Optimized images (reduced by 78%)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Enabled browser caching</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Minified CSS/JS files</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-blue-600 font-bold mb-3">Days 4-7: Trust Building</div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Added Google Reviews widget (4.8 stars, 127 reviews)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Displayed license numbers prominently</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Added "Emergency Service" badges</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Created "Our Work" gallery with before/after photos</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-blue-600 font-bold mb-3">Days 8-11: Mobile Optimization</div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Sticky header with click-to-call button</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>One-thumb navigation design</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Simplified contact forms (3 fields max)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Added tap-to-text functionality</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-blue-600 font-bold mb-3">Days 12-14: Conversion Focus</div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Added urgency messaging for emergency services</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Implemented exit-intent popup with discount</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Created service-specific landing pages</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Added local schema markup for rich snippets</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-yellow-50 p-6 rounded-lg mb-8">
              <h3 className="font-bold text-yellow-900 mb-3">The Mobile-First Approach</h3>
              <p className="text-gray-700">
                With 65% of their traffic coming from mobile devices (often people with electrical emergencies searching on their phones),
                we designed everything mobile-first. Every element was optimized for one-handed use, with prominent call buttons always
                visible and forms that could be completed in under 30 seconds.
              </p>
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
                  <h3 className="font-bold text-lg mb-4 text-gray-900">Performance Metrics (14 Days)</h3>
                  <ul className="space-y-3">
                    <li className="flex justify-between">
                      <span className="text-gray-700">Page Load Time:</span>
                      <span className="font-bold text-emerald-600">8s → 2.1s (-74%)</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-700">Conversion Rate:</span>
                      <span className="font-bold text-emerald-600">0.8% → 1.16% (+45%)</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-700">Bounce Rate:</span>
                      <span className="font-bold text-emerald-600">68% → 41% (-40%)</span>
                    </li>
                    <li className="flex justify-between border-t pt-3">
                      <span className="text-gray-700 font-bold">Lead Volume:</span>
                      <span className="font-bold text-emerald-600 text-xl">+52% overall</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-4 text-gray-900">Mobile Specific Results</h3>
                  <ul className="space-y-3">
                    <li className="flex justify-between">
                      <span className="text-gray-700">Mobile Conversion:</span>
                      <span className="font-bold text-blue-600">0.4% → 1.12% (+180%)</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-700">Click-to-Call Rate:</span>
                      <span className="font-bold text-blue-600">+320%</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-700">Form Completions:</span>
                      <span className="font-bold text-blue-600">+85%</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-700">Emergency Calls:</span>
                      <span className="font-bold text-blue-600">+127%</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-blue-50 p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">2.1s</div>
                <div className="text-gray-600">Load Time</div>
                <div className="text-sm text-gray-500 mt-1">Was 8 seconds</div>
              </div>
              <div className="bg-emerald-50 p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-emerald-600 mb-2">89</div>
                <div className="text-gray-600">PageSpeed Score</div>
                <div className="text-sm text-gray-500 mt-1">Was 23</div>
              </div>
              <div className="bg-yellow-50 p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-yellow-600 mb-2">$18,400</div>
                <div className="text-gray-600">Extra Revenue</div>
                <div className="text-sm text-gray-500 mt-1">In first month</div>
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
                    "I can't believe the difference 2 weeks made. We went from maybe 2-3 calls a day to 10-15. 
                    My phone literally doesn't stop ringing. The emergency service calls alone paid for the entire project 
                    in the first week. Should have done this years ago!"
                  </blockquote>
                  <p className="text-sm text-gray-600 mt-2">— Owner, Voltech Electric</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Before/After Comparison */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">Before & After Comparison</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-red-50 p-6 rounded-lg">
                <h3 className="font-bold text-red-900 mb-4">Before</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✗</span>
                    <span>8-second load time</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✗</span>
                    <span>Phone number only in footer</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✗</span>
                    <span>No mobile optimization</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✗</span>
                    <span>No social proof</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✗</span>
                    <span>Generic stock photos</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✗</span>
                    <span>10-field contact form</span>
                  </li>
                </ul>
              </div>

              <div className="bg-emerald-50 p-6 rounded-lg">
                <h3 className="font-bold text-emerald-900 mb-4">After</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-emerald-500 mr-2">✓</span>
                    <span>2.1-second load time</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-500 mr-2">✓</span>
                    <span>Sticky click-to-call button</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-500 mr-2">✓</span>
                    <span>Mobile-first responsive design</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-500 mr-2">✓</span>
                    <span>127 Google reviews displayed</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-500 mr-2">✓</span>
                    <span>Real job photos & team pics</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-500 mr-2">✓</span>
                    <span>3-field quick contact form</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Key Takeaways */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">Key Takeaways</h2>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white border border-gray-200 p-6 rounded-lg shadow">
                <div className="text-2xl mb-3">⚡</div>
                <h3 className="font-bold mb-2">Speed is Revenue</h3>
                <p className="text-gray-600 text-sm">
                  Every second of load time costs conversions. We cut 6 seconds and saw immediate results 
                  in both user engagement and lead volume.
                </p>
              </div>

              <div className="bg-white border border-gray-200 p-6 rounded-lg shadow">
                <div className="text-2xl mb-3">📱</div>
                <h3 className="font-bold mb-2">Mobile-First Wins</h3>
                <p className="text-gray-600 text-sm">
                  For local services, mobile IS your business. People with emergencies search on phones - 
                  make it easy for them to reach you.
                </p>
              </div>

              <div className="bg-white border border-gray-200 p-6 rounded-lg shadow">
                <div className="text-2xl mb-3">🛡️</div>
                <h3 className="font-bold mb-2">Trust Drives Action</h3>
                <p className="text-gray-600 text-sm">
                  Reviews, licenses, and real photos build instant credibility. People need to trust you 
                  before they'll invite you into their homes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-800 to-emerald-700 text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Is Your Website Costing You Customers?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Get a free website audit and see exactly what's holding you back from more leads.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <BookingLink
                type="discovery"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium bg-white text-blue-800 rounded-lg hover:bg-gray-100 transition-all"
              >
                Get Your Free Audit
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