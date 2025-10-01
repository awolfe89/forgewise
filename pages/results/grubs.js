import NextSEO from '../../src/components/NextSEO';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { BookingLink } from '../../src/components/ProtectedContact';

export default function OutdoorApparelCaseStudy() {
  const seoData = {
    title: 'Outdoor Apparel Retailer Case Study | +156% Repeat Orders | Forgewise',
    description: 'How we helped an outdoor apparel retailer increase repeat orders by 156% in 60 days through email automation and customer retention strategies.',
    canonical: 'https://forgewise.io/results/grubs'
  };

  return (
    <>
      <NextSEO {...seoData} />

      <div className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-emerald-800 to-blue-700 text-white">
          <div className="max-w-4xl mx-auto px-6">
            <Link href="/results" className="inline-flex items-center text-emerald-200 hover:text-white mb-6 transition">
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
              <div className="text-emerald-300 font-semibold mb-2">E-COMMERCE FASHION</div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                +156% Repeat Orders in 60 Days
              </h1>
              <p className="text-xl text-emerald-100">
                How an outdoor apparel retailer transformed their customer retention from industry worst to industry best
              </p>
            </motion.div>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-emerald-700/50">
              <div>
                <div className="text-3xl font-bold text-emerald-300">156%</div>
                <div className="text-sm text-emerald-200">Repeat Rate Increase</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-emerald-300">340%</div>
                <div className="text-sm text-emerald-200">Email Revenue Growth</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-emerald-300">60 Days</div>
                <div className="text-sm text-emerald-200">To Transform</div>
              </div>
            </div>
          </div>
        </section>

        {/* Challenge Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">The Challenge</h2>

            <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8">
              <h3 className="font-bold text-lg mb-3 text-red-900">Starting Point: A Retention Crisis</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>$8M fashion brand with only 12% repeat purchase rate (industry average: 27%)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>Email contributing just 8% of revenue despite 45,000 subscriber list</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>No post-purchase communication beyond order confirmations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>Generic email blasts with 11% open rates</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>Customer lifetime value declining quarter over quarter</span>
                </li>
              </ul>
            </div>

            <div className="prose max-w-none text-gray-600">
              <p className="text-lg">
                This outdoor apparel retailer had built a successful $8M business on the strength of their product—premium waterproof
                footwear loved by farmers, equestrians, and outdoor workers. But they had a massive problem: customers
                would buy once and never return.
              </p>
              <p className="text-lg mt-4">
                With rising customer acquisition costs and Facebook iOS changes crushing their paid media returns,
                they needed to maximize the value of existing customers. But with no retention strategy and broken
                email marketing, they were leaving millions on the table.
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
                <div className="text-emerald-600 font-bold mb-3">Week 1-2: Foundation</div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Klaviyo migration from Mailchimp</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Customer data cleanup and segmentation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Welcome series design (5 emails)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Abandoned cart sequence (3 emails + SMS)</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-emerald-600 font-bold mb-3">Week 3-4: Automation</div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Post-purchase flow (education + cross-sell)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Browse abandonment triggers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Product review requests</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Birthday and anniversary campaigns</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-emerald-600 font-bold mb-3">Week 5-6: Segmentation</div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>RFM segmentation (Recency, Frequency, Monetary)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>VIP customer identification and perks</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Product affinity segments</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Geographic and seasonal targeting</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-emerald-600 font-bold mb-3">Week 7-8: Optimization</div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Win-back campaigns for lapsed customers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Loyalty program integration</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Predictive analytics setup</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>A/B testing framework</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6">
              <h3 className="font-bold text-blue-900 mb-2">The Secret Sauce: Behavioral Triggers</h3>
              <p className="text-gray-700">
                Instead of batch-and-blast emails, we created 23 behavioral triggers based on customer actions.
                Someone views work boots 3 times? They get work boot content. Someone's in a rainy region during
                storm season? They see waterproofing tips. This hyper-personalization drove our 340% revenue increase.
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
                  <h3 className="font-bold text-lg mb-4 text-gray-900">Email Performance</h3>
                  <ul className="space-y-3">
                    <li className="flex justify-between">
                      <span className="text-gray-700">Open Rate:</span>
                      <span className="font-bold text-emerald-600">11% → 42%</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-700">Click Rate:</span>
                      <span className="font-bold text-emerald-600">1.2% → 8.7%</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-700">Email Revenue:</span>
                      <span className="font-bold text-emerald-600">8% → 35% of total</span>
                    </li>
                    <li className="flex justify-between border-t pt-3">
                      <span className="text-gray-700 font-bold">Revenue/Email:</span>
                      <span className="font-bold text-emerald-600 text-xl">+340%</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-4 text-gray-900">Customer Metrics</h3>
                  <ul className="space-y-3">
                    <li className="flex justify-between">
                      <span className="text-gray-700">Repeat Rate:</span>
                      <span className="font-bold text-blue-600">12% → 31%</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-700">AOV (Repeat):</span>
                      <span className="font-bold text-blue-600">$127 → $168</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-700">Customer LTV:</span>
                      <span className="font-bold text-blue-600">+89%</span>
                    </li>
                    <li className="flex justify-between border-t pt-3">
                      <span className="text-gray-700 font-bold">60-Day Revenue:</span>
                      <span className="font-bold text-blue-600 text-xl">+$428K</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-emerald-50 p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-emerald-600 mb-2">23</div>
                <p className="text-gray-700">Automated Flows Created</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">68%</div>
                <p className="text-gray-700">Of Revenue Now Automated</p>
              </div>
              <div className="bg-amber-50 p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-amber-600 mb-2">4.2x</div>
                <p className="text-gray-700">ROI in First 60 Days</p>
              </div>
            </div>

            <div className="bg-gray-50 border-l-4 border-gray-400 p-6">
              <div className="flex items-start">
                <svg className="w-6 h-6 text-gray-400 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0118 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Client Testimonial</h3>
                  <blockquote className="text-gray-700 italic">
                    "We knew email was important but had no idea it could drive this much revenue. The team didn't just
                    set up some flows—they transformed how we think about customer relationships. That 156% increase in
                    repeat orders? That's real money that goes straight to our bottom line."
                  </blockquote>
                  <p className="text-sm text-gray-600 mt-2">— Marketing Director, Outdoor Apparel Retailer</p>
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
                <div className="text-2xl mb-3">📧</div>
                <h3 className="font-bold mb-2">Email Isn't Dead</h3>
                <p className="text-gray-600 text-sm">
                  With the right strategy, email can drive 30-40% of total revenue. It's not about sending more
                  emails—it's about sending the right emails to the right people at the right time.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <div className="text-2xl mb-3">🎯</div>
                <h3 className="font-bold mb-2">Segmentation is Everything</h3>
                <p className="text-gray-600 text-sm">
                  Generic blasts get generic results. By segmenting based on behavior, preferences, and purchase
                  history, we 4x'd engagement rates.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <div className="text-2xl mb-3">⚡</div>
                <h3 className="font-bold mb-2">Speed Matters</h3>
                <p className="text-gray-600 text-sm">
                  Transform retention fast. No 6-month roadmaps, no endless strategy sessions. Just rapid
                  implementation and continuous optimization.
                </p>
              </div>
            </div>

            <div className="mt-12 p-6 bg-blue-50 rounded-lg">
              <h3 className="font-bold text-lg mb-3">The Retention Playbook We Used:</h3>
              <ul className="grid md:grid-cols-2 gap-3 text-sm">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-0.5">✓</span>
                  <span>Welcome series that educates and builds brand affinity</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-0.5">✓</span>
                  <span>Abandoned cart recovery with escalating incentives</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-0.5">✓</span>
                  <span>Post-purchase flows that drive second purchases</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-0.5">✓</span>
                  <span>VIP treatment for high-value customers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-0.5">✓</span>
                  <span>Win-back campaigns for lapsed buyers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-0.5">✓</span>
                  <span>Behavioral triggers based on site activity</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-emerald-800 to-blue-700 text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Is Your Retention Rate Below 30%?
            </h2>
            <p className="text-xl mb-8 text-emerald-100">
              You're leaving money on the table. Let's fix your retention fast.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <BookingLink
                type="discovery"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium bg-white text-emerald-800 rounded-lg hover:bg-gray-100 transition-all"
              >
                Get Your Retention Audit
              </BookingLink>
              <Link
                href="/results"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium border-2 border-white text-white rounded-lg hover:bg-white hover:text-emerald-800 transition-all"
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