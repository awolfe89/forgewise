import NextSEO from '../../src/components/NextSEO';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { BookingLink } from '../../src/components/ProtectedContact';

export default function VSISwineCaseStudy() {
  const seoData = {
    title: 'VSI Swine Case Study | 3.2% Conversion Rate in 21 Days | Forgewise',
    description: 'How we helped VSI Swine achieve a 3.2% conversion rate and reduce cost per lead by 75% through checkout optimization and transparent pricing.',
    canonical: 'https://forgewise.io/results/vsiswine'
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
              <div className="text-emerald-300 font-semibold mb-2">AGTECH B2B</div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                From 0.8% to 3.2% Conversion
              </h1>
              <p className="text-xl text-blue-100">
                How VSI Swine quadrupled their conversion rate in just 21 days with strategic UX improvements
              </p>
            </motion.div>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-blue-700/50">
              <div>
                <div className="text-3xl font-bold text-emerald-300">3.2%</div>
                <div className="text-sm text-blue-200">Conversion Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-emerald-300">-75%</div>
                <div className="text-sm text-blue-200">Cost Per Lead</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-emerald-300">+340%</div>
                <div className="text-sm text-blue-200">Sales Qualified Leads</div>
              </div>
            </div>
          </div>
        </section>

        {/* Challenge Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">The Challenge</h2>

            <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8">
              <h3 className="font-bold text-lg mb-3 text-red-900">Starting Point: High-Tech Product, Low-Tech Experience</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>0.8% conversion rate despite $50K/month ad spend</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>Complex 5-step checkout process with 73% abandonment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>Technical jargon throughout - PhD-level content for farmers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>Hidden pricing - "Contact us for quote" everywhere</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>No social proof or customer success stories</span>
                </li>
              </ul>
            </div>

            <div className="prose max-w-none text-gray-600">
              <p className="text-lg">
                VSI Swine had developed revolutionary AgTech solutions for modern pig farming - IoT sensors, AI-powered 
                health monitoring, and automated feeding systems. Their technology was cutting-edge, but their website 
                felt like it was built in 2005.
              </p>
              <p className="text-lg mt-4">
                Despite significant traffic from their hefty ad budget, visitors were bouncing at alarming rates. 
                The few who did try to purchase were met with a convoluted process that felt more like applying for 
                a government grant than buying farm equipment. The sales team was frustrated - they knew they had 
                a superior product, but the website was sabotaging their efforts.
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
                <div className="text-blue-600 font-bold mb-3">Week 1: Simplification</div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Reduced checkout from 5 steps to 1 page</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Rewrote content in plain English</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Added "Save for Later" functionality</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Implemented progress indicators</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-blue-600 font-bold mb-3">Week 2: Trust Building</div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Added 12 detailed case studies with ROI data</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Created video testimonials from farmers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Displayed industry certifications prominently</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Added "100% satisfaction guarantee" messaging</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-blue-600 font-bold mb-3">Week 3: Transparency</div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Published transparent pricing tiers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Created interactive ROI calculator</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Added financing options clearly</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Showed total cost of ownership upfront</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-blue-600 font-bold mb-3">Technology Stack</div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Next.js</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Vercel</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Segment</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">HubSpot</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Stripe</span>
                </div>
              </div>
            </div>

            {/* Special Focus Section */}
            <div className="bg-emerald-50 p-6 rounded-lg mb-8">
              <h3 className="font-bold text-emerald-900 mb-3">The Power of Plain Language</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-gray-700 mb-2">Before:</h4>
                  <p className="text-sm text-gray-600 italic">
                    "Our proprietary IoT-enabled porcine health monitoring system leverages machine learning algorithms 
                    to predict disease outbreaks with 97.3% accuracy using multivariate analysis of behavioral patterns."
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700 mb-2">After:</h4>
                  <p className="text-sm text-gray-600 italic">
                    "Know when your pigs are getting sick before they show symptoms. Our sensors watch your animals 24/7 
                    and alert you days in advance, saving you thousands in vet bills and lost livestock."
                  </p>
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
                  <h3 className="font-bold text-lg mb-4 text-gray-900">Conversion Metrics (21 Days)</h3>
                  <ul className="space-y-3">
                    <li className="flex justify-between">
                      <span className="text-gray-700">Conversion Rate:</span>
                      <span className="font-bold text-emerald-600">0.8% → 3.2% (+300%)</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-700">Cart Abandonment:</span>
                      <span className="font-bold text-emerald-600">73% → 28% (-62%)</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-700">Average Order Value:</span>
                      <span className="font-bold text-emerald-600">$12K → $18.5K (+54%)</span>
                    </li>
                    <li className="flex justify-between border-t pt-3">
                      <span className="text-gray-700 font-bold">Revenue Impact:</span>
                      <span className="font-bold text-emerald-600 text-xl">+$280K/month</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-4 text-gray-900">Lead Quality Metrics</h3>
                  <ul className="space-y-3">
                    <li className="flex justify-between">
                      <span className="text-gray-700">Cost Per Lead:</span>
                      <span className="font-bold text-blue-600">$625 → $156 (-75%)</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-700">Sales Qualified Leads:</span>
                      <span className="font-bold text-blue-600">+340%</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-700">Lead-to-Customer Rate:</span>
                      <span className="font-bold text-blue-600">4% → 18%</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-700">Sales Cycle Length:</span>
                      <span className="font-bold text-blue-600">45 days → 21 days</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* ROI Calculator Results */}
            <div className="bg-yellow-50 p-6 rounded-lg mb-12">
              <h3 className="font-bold text-yellow-900 mb-4">Impact of the ROI Calculator</h3>
              <p className="text-gray-700 mb-4">
                The interactive ROI calculator became the most-visited page after the homepage. By letting farmers input their 
                herd size and see potential savings, we transformed abstract benefits into concrete dollar amounts.
              </p>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-yellow-600">87%</div>
                  <div className="text-sm text-gray-600">Used calculator</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-yellow-600">4.2min</div>
                  <div className="text-sm text-gray-600">Avg. time on tool</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-yellow-600">62%</div>
                  <div className="text-sm text-gray-600">Proceeded to purchase</div>
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
                    "We always knew our technology could revolutionize pig farming, but we were explaining it like engineers, 
                    not farmers. The new site speaks our customers' language. The transparent pricing alone removed our biggest 
                    sales objection. Our close rate tripled, and deals are closing twice as fast."
                  </blockquote>
                  <p className="text-sm text-gray-600 mt-2">— CEO, VSI Swine</p>
                </div>
              </div>
            </div>

            {/* Before/After Checkout Comparison */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-4">Checkout Process Transformation</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-red-600 mb-3">Before: 5-Step Marathon</h4>
                  <ol className="space-y-2 text-sm text-gray-600">
                    <li>1. Create account (12 fields)</li>
                    <li>2. Farm details (18 fields)</li>
                    <li>3. Product configuration (complex)</li>
                    <li>4. Contact sales for pricing</li>
                    <li>5. Wait 2-3 days for quote</li>
                  </ol>
                  <div className="mt-3 text-red-600 font-medium">73% abandonment rate</div>
                </div>
                <div>
                  <h4 className="font-medium text-emerald-600 mb-3">After: 1-Page Sprint</h4>
                  <ol className="space-y-2 text-sm text-gray-600">
                    <li>1. Choose package (with clear pricing)</li>
                    <li>2. Enter basic info (5 fields)</li>
                    <li>3. Select financing option</li>
                    <li>4. Schedule installation</li>
                    <li>5. Instant confirmation</li>
                  </ol>
                  <div className="mt-3 text-emerald-600 font-medium">28% abandonment rate</div>
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
                <div className="text-2xl mb-3">🗣️</div>
                <h3 className="font-bold mb-2">Speak Their Language</h3>
                <p className="text-gray-600 text-sm">
                  Your customers aren't impressed by jargon. Plain language that focuses on benefits, not features, 
                  dramatically improves comprehension and conversion.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <div className="text-2xl mb-3">💰</div>
                <h3 className="font-bold mb-2">Price Transparency Wins</h3>
                <p className="text-gray-600 text-sm">
                  B2B buyers expect B2C experiences. Hidden pricing creates friction and distrust. Clear pricing 
                  qualifies leads and accelerates sales cycles.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <div className="text-2xl mb-3">🎯</div>
                <h3 className="font-bold mb-2">Simplicity Sells</h3>
                <p className="text-gray-600 text-sm">
                  Complex products don't need complex purchases. Our one-page checkout quadrupled conversions 
                  by removing unnecessary friction.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-800 to-emerald-700 text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Is Your B2B Site Stuck in 2005?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Modern B2B buyers expect modern experiences. Let's bring your site into 2024.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <BookingLink
                type="discovery"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium bg-white text-blue-800 rounded-lg hover:bg-gray-100 transition-all"
              >
                Get Your Conversion Audit
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