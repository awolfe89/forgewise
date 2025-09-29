import NextSEO from '../../src/components/NextSEO';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { BookingLink } from '../../src/components/ProtectedContact';

export default function TechnimarkCaseStudy() {
  const seoData = {
    title: 'Technimark Case Study | -67% CAC in 30 Days | Forgewise',
    description: 'How we helped Technimark-Inc reduce customer acquisition cost by 67% and improve lead quality by 215% through strategic Google Ads optimization.',
    canonical: 'https://forgewise.io/results/technimark'
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
              <div className="text-emerald-300 font-semibold mb-2">B2B MANUFACTURING</div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                -67% CAC in Just 30 Days
              </h1>
              <p className="text-xl text-blue-100">
                How Technimark-Inc transformed their Google Ads from a money pit into a lead generation machine
              </p>
            </motion.div>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-blue-700/50">
              <div>
                <div className="text-3xl font-bold text-emerald-300">-67%</div>
                <div className="text-sm text-blue-200">Customer Acquisition Cost</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-emerald-300">+215%</div>
                <div className="text-sm text-blue-200">Lead Quality Score</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-emerald-300">30 Days</div>
                <div className="text-sm text-blue-200">To Results</div>
              </div>
            </div>
          </div>
        </section>

        {/* Challenge Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">The Challenge</h2>

            <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8">
              <h3 className="font-bold text-lg mb-3 text-red-900">Starting Point: Burning Cash with No Visibility</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>$30,000/month Google Ads spend with declining results</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>Zero conversion tracking - flying blind</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>Broad match keywords eating 70% of budget</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>Landing pages with 14% bounce rate</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>Lead forms generating spam and unqualified inquiries</span>
                </li>
              </ul>
            </div>

            <div className="prose max-w-none text-gray-600">
              <p className="text-lg">
                Technimark-Inc, a precision plastic injection molding manufacturer, had been running Google Ads for years.
                But as competition increased and costs rose, their once-profitable campaigns turned into a black hole for their marketing budget.
              </p>
              <p className="text-lg mt-4">
                The sales team was frustrated with lead quality - they were spending hours following up with tire-kickers and competitors
                doing research. Meanwhile, the CFO was questioning why they were spending $360,000 annually on Google Ads with no clear ROI data.
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
                <div className="text-blue-600 font-bold mb-3">Week 1: Foundation & Tracking</div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>GA4 implementation with enhanced ecommerce</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Server-side tracking via GTM for accuracy</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Phone call tracking with CallRail integration</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Lead scoring system based on behavior</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-blue-600 font-bold mb-3">Week 2: Campaign Restructure</div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Negative keyword audit (added 1,200+ negatives)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Shifted from broad to phrase/exact match</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Created SKAGs for high-value keywords</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Dayparting based on conversion data</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-blue-600 font-bold mb-3">Week 3: Landing Page Optimization</div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Created 5 industry-specific landing pages</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Added trust signals (certifications, clients)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Implemented progressive form profiling</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>A/B tested CTAs and form placement</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-blue-600 font-bold mb-3">Week 4: Lead Quality Focus</div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Implemented qualifying questions in forms</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Created content offers for serious buyers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Set up lead nurturing email sequences</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Integrated with CRM for closed-loop tracking</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="font-bold text-blue-900 mb-3">Technology Stack Implemented</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Google Ads</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">GA4</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">GTM Server-side</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Unbounce</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">CallRail</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">HubSpot</span>
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
                  <h3 className="font-bold text-lg mb-4 text-gray-900">Cost Metrics (30 Days)</h3>
                  <ul className="space-y-3">
                    <li className="flex justify-between">
                      <span className="text-gray-700">Cost Per Lead:</span>
                      <span className="font-bold text-emerald-600">$312 → $103 (-67%)</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-700">Monthly Ad Spend:</span>
                      <span className="font-bold text-emerald-600">$30K → $18K (-40%)</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-700">Cost Per SQL:</span>
                      <span className="font-bold text-emerald-600">$2,100 → $580 (-72%)</span>
                    </li>
                    <li className="flex justify-between border-t pt-3">
                      <span className="text-gray-700 font-bold">ROI:</span>
                      <span className="font-bold text-emerald-600 text-xl">312% increase</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-4 text-gray-900">Quality Metrics (30 Days)</h3>
                  <ul className="space-y-3">
                    <li className="flex justify-between">
                      <span className="text-gray-700">Lead Quality Score:</span>
                      <span className="font-bold text-blue-600">+215%</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-700">SQL Conversion Rate:</span>
                      <span className="font-bold text-blue-600">8% → 34%</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-700">Bounce Rate:</span>
                      <span className="font-bold text-blue-600">87% → 42%</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-700">Time on Site:</span>
                      <span className="font-bold text-blue-600">0:45 → 3:12</span>
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
                    "In 20 years of business, I've never seen marketing results this fast. Within 30 days, our sales team went from
                    complaining about lead quality to asking for more leads. The tracking dashboard alone was worth the investment - 
                    we finally know exactly what's working and what isn't."
                  </blockquote>
                  <p className="text-sm text-gray-600 mt-2">— VP of Marketing, Technimark-Inc</p>
                </div>
              </div>
            </div>

            {/* Monthly Breakdown */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-4">Week-by-Week Progress</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-20 font-medium text-gray-600">Week 1:</div>
                  <div className="flex-1 bg-gray-200 rounded-full h-6 relative">
                    <div className="absolute inset-0 bg-blue-500 rounded-full" style={{width: '15%'}}></div>
                    <span className="absolute inset-0 flex items-center justify-center text-xs font-medium">-15% CAC</span>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-20 font-medium text-gray-600">Week 2:</div>
                  <div className="flex-1 bg-gray-200 rounded-full h-6 relative">
                    <div className="absolute inset-0 bg-blue-500 rounded-full" style={{width: '38%'}}></div>
                    <span className="absolute inset-0 flex items-center justify-center text-xs font-medium">-38% CAC</span>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-20 font-medium text-gray-600">Week 3:</div>
                  <div className="flex-1 bg-gray-200 rounded-full h-6 relative">
                    <div className="absolute inset-0 bg-blue-500 rounded-full" style={{width: '52%'}}></div>
                    <span className="absolute inset-0 flex items-center justify-center text-xs font-medium">-52% CAC</span>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-20 font-medium text-gray-600">Week 4:</div>
                  <div className="flex-1 bg-gray-200 rounded-full h-6 relative">
                    <div className="absolute inset-0 bg-emerald-500 rounded-full" style={{width: '67%'}}></div>
                    <span className="absolute inset-0 flex items-center justify-center text-xs font-medium text-white">-67% CAC</span>
                  </div>
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
                <div className="text-2xl mb-3">📊</div>
                <h3 className="font-bold mb-2">Tracking is Everything</h3>
                <p className="text-gray-600 text-sm">
                  Without proper conversion tracking, you're flying blind. We implemented comprehensive tracking 
                  before making any campaign changes.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <div className="text-2xl mb-3">🎯</div>
                <h3 className="font-bold mb-2">Quality Over Quantity</h3>
                <p className="text-gray-600 text-sm">
                  Reducing ad spend while improving results isn't magic - it's about targeting the right people
                  with the right message.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <div className="text-2xl mb-3">🚀</div>
                <h3 className="font-bold mb-2">Speed Matters in B2B</h3>
                <p className="text-gray-600 text-sm">
                  B2B buyers expect B2C experiences. Fast-loading, relevant landing pages dramatically improved
                  engagement and conversion rates.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-800 to-emerald-700 text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Stop Burning Money on Google Ads
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Get a free audit of your current campaigns and see how much you could save in 30 days.
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