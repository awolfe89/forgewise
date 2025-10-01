import NextSEO from '../../src/components/NextSEO';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { BookingLink } from '../../src/components/ProtectedContact';

export default function AgTechCaseStudy() {
  const seoData = {
    title: 'Agricultural Technology Provider Case Study | 340% More Leads | Forgewise',
    description: 'How we helped an agricultural technology provider achieve 340% more qualified leads and reduce cost per lead by 75% through SEO optimization, UX improvements, and Next.js best practices.',
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
              <div className="text-emerald-300 font-semibold mb-2">AGTECH B2B LANDING PAGE</div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                340% More Qualified Leads in 21 Days
              </h1>
              <p className="text-xl text-blue-100">
                How an agricultural technology provider transformed their Next.js landing page with SEO optimization, security fixes, and conversion-focused UX
              </p>
            </motion.div>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-blue-700/50">
              <div>
                <div className="text-3xl font-bold text-emerald-300">+340%</div>
                <div className="text-sm text-blue-200">Contact Form Leads</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-emerald-300">-75%</div>
                <div className="text-sm text-blue-200">Cost Per Lead</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-emerald-300">Page 1</div>
                <div className="text-sm text-blue-200">Google Rankings (8 keywords)</div>
              </div>
            </div>
          </div>
        </section>

        {/* Challenge Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">The Challenge</h2>

            <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8">
              <h3 className="font-bold text-lg mb-3 text-red-900">Starting Point: Great Product, Broken Website</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>Self-hosted Next.js site with security vulnerabilities and performance issues</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>No SEO optimization - missing meta tags, poor Core Web Vitals, zero rankings</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>Contact form buried at the bottom - 87% of visitors never saw it</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>Technical jargon throughout - PhD-level content for farmers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>No social proof, testimonials, or trust signals</span>
                </li>
              </ul>
            </div>

            <div className="prose max-w-none text-gray-600">
              <p className="text-lg">
                This agricultural technology provider had developed revolutionary AgTech solutions for modern farming - IoT sensors, AI-powered
                health monitoring, and automated feeding systems. Their technology was cutting-edge, but their Next.js
                landing page was plagued with common setup mistakes that killed lead generation.
              </p>
              <p className="text-lg mt-4">
                Despite significant traffic from their ad budget, the site was invisible in organic search, loaded slowly,
                and made it difficult for interested farmers to get in touch. The self-hosted setup had security headers
                missing, no CDN optimization, and technical debt that was costing them thousands in lost leads every month.
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
                <div className="text-blue-600 font-bold mb-3">Week 1: Technical Foundation</div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Migrated from self-hosted to Vercel for better performance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Added security headers (CSP, HSTS, X-Frame-Options)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Implemented image optimization and lazy loading</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Fixed Core Web Vitals (LCP, FID, CLS)</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-blue-600 font-bold mb-3">Week 2: SEO Optimization</div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Added comprehensive meta tags and structured data</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Created XML sitemap and optimized robots.txt</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Optimized content for target keywords (pig farming IoT)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Built internal linking structure</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-blue-600 font-bold mb-3">Week 3: UX & Conversion</div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Moved contact form above the fold with clear CTA</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Rewrote content in plain English (no jargon)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Added customer testimonials and trust badges</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Implemented form analytics and spam protection</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-blue-600 font-bold mb-3">Technology Stack</div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Next.js 14</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Vercel</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Google Analytics</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">HubSpot Forms</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Cloudflare</span>
                </div>
              </div>
            </div>

            {/* Special Focus Section */}
            <div className="bg-emerald-50 p-6 rounded-lg mb-8">
              <h3 className="font-bold text-emerald-900 mb-3">SEO Impact: From Invisible to Page 1</h3>
              <div className="space-y-4">
                <p className="text-gray-700">
                  The site had zero organic visibility. By implementing proper Next.js SEO best practices, we achieved
                  Page 1 rankings for 8 high-intent keywords within 21 days:
                </p>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div className="bg-white p-3 rounded">
                    <div className="font-medium">pig farm IoT sensors</div>
                    <div className="text-gray-500">Unranked → Position 3</div>
                  </div>
                  <div className="bg-white p-3 rounded">
                    <div className="font-medium">automated pig feeding system</div>
                    <div className="text-gray-500">Unranked → Position 5</div>
                  </div>
                  <div className="bg-white p-3 rounded">
                    <div className="font-medium">swine health monitoring</div>
                    <div className="text-gray-500">Unranked → Position 2</div>
                  </div>
                  <div className="bg-white p-3 rounded">
                    <div className="font-medium">AgTech for pig farms</div>
                    <div className="text-gray-500">Unranked → Position 7</div>
                  </div>
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
                  <h3 className="font-bold text-lg mb-4 text-gray-900">Lead Generation Metrics (21 Days)</h3>
                  <ul className="space-y-3">
                    <li className="flex justify-between">
                      <span className="text-gray-700">Contact Form Submissions:</span>
                      <span className="font-bold text-emerald-600">18 → 79 (+340%)</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-700">Form Completion Rate:</span>
                      <span className="font-bold text-emerald-600">13% → 67% (+415%)</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-700">Avg. Time on Page:</span>
                      <span className="font-bold text-emerald-600">0:45 → 2:18 (+207%)</span>
                    </li>
                    <li className="flex justify-between border-t pt-3">
                      <span className="text-gray-700 font-bold">Organic Traffic:</span>
                      <span className="font-bold text-emerald-600 text-xl">+580%</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-4 text-gray-900">Technical & SEO Metrics</h3>
                  <ul className="space-y-3">
                    <li className="flex justify-between">
                      <span className="text-gray-700">Cost Per Lead:</span>
                      <span className="font-bold text-blue-600">$625 → $156 (-75%)</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-700">Page Load Time:</span>
                      <span className="font-bold text-blue-600">4.2s → 1.1s (-74%)</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-700">Core Web Vitals Score:</span>
                      <span className="font-bold text-blue-600">42 → 98</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-700">Security Score:</span>
                      <span className="font-bold text-blue-600">C → A+ (Mozilla Observatory)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Contact Form Optimization */}
            <div className="bg-yellow-50 p-6 rounded-lg mb-12">
              <h3 className="font-bold text-yellow-900 mb-4">Contact Form Optimization</h3>
              <p className="text-gray-700 mb-4">
                Moving the contact form above the fold and reducing fields from 12 to 4 dramatically improved completion rates.
                Added form analytics revealed that 87% of visitors abandoned the old form because it was too long.
              </p>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-yellow-600">67%</div>
                  <div className="text-sm text-gray-600">Form completion rate</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-yellow-600">38s</div>
                  <div className="text-sm text-gray-600">Avg. time to complete</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-yellow-600">94%</div>
                  <div className="text-sm text-gray-600">Valid (not spam)</div>
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
                    "We had a Next.js site that looked professional but generated almost no leads. After the optimization,
                    our contact form submissions went through the roof, and we started ranking for keywords we never thought
                    possible. Best part? Our hosting costs dropped 70% by moving to Vercel. The ROI was immediate."
                  </blockquote>
                  <p className="text-sm text-gray-600 mt-2">— CEO, Agricultural Technology Provider</p>
                </div>
              </div>
            </div>

            {/* Before/After Comparison */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-4">Next.js Setup: Before vs After</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-red-600 mb-3">Before: Common Mistakes</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>✗ Self-hosted on VPS (slow, security issues)</li>
                    <li>✗ No meta tags or structured data</li>
                    <li>✗ Images not optimized (4MB+ file sizes)</li>
                    <li>✗ No sitemap or robots.txt</li>
                    <li>✗ Contact form hidden below fold</li>
                    <li>✗ No security headers configured</li>
                  </ul>
                  <div className="mt-3 text-red-600 font-medium">18 leads/month</div>
                </div>
                <div>
                  <h4 className="font-medium text-emerald-600 mb-3">After: Best Practices</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>✓ Vercel deployment (edge network, auto-scaling)</li>
                    <li>✓ Complete SEO setup with Next.js metadata API</li>
                    <li>✓ Next/Image optimization (WebP, lazy loading)</li>
                    <li>✓ XML sitemap auto-generated</li>
                    <li>✓ Contact form prominently featured</li>
                    <li>✓ A+ security score (all headers configured)</li>
                  </ul>
                  <div className="mt-3 text-emerald-600 font-medium">79 leads/month</div>
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
                <div className="text-2xl mb-3">🔧</div>
                <h3 className="font-bold mb-2">Next.js Setup Matters</h3>
                <p className="text-gray-600 text-sm">
                  A professional-looking Next.js site means nothing if it's invisible to Google. Proper SEO setup,
                  security headers, and performance optimization are non-negotiable for lead generation.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <div className="text-2xl mb-3">📝</div>
                <h3 className="font-bold mb-2">Forms Above the Fold</h3>
                <p className="text-gray-600 text-sm">
                  For landing pages, contact forms should be prominent and simple. Reducing form fields from 12 to 4
                  increased completion rates by 415%. Every field is a barrier.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <div className="text-2xl mb-3">🚀</div>
                <h3 className="font-bold mb-2">Self-Hosting Is a Trap</h3>
                <p className="text-gray-600 text-sm">
                  Self-hosted Next.js sites require constant maintenance, security updates, and optimization.
                  Vercel deployment cut hosting costs 70% while improving performance and security.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-800 to-emerald-700 text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Is Your Next.js Site Generating Zero Leads?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Most Next.js landing pages make the same mistakes. Let's fix yours fast.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <BookingLink
                type="discovery"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium bg-white text-blue-800 rounded-lg hover:bg-gray-100 transition-all"
              >
                Get Your Free Site Audit
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