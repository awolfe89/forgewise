import Head from 'next/head'
import Image from 'next/image'
import { BookingLink } from '../src/components/ProtectedContact'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function FractionalCMOPage() {
  const [timeLeft, setTimeLeft] = useState(15 * 60) // 15 minutes in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0))
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const minutes = Math.floor(timeLeft / 60)
  const seconds = timeLeft % 60

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Fractional CMO for eCommerce",
    "description": "Expert fractional CMO services for B2B eCommerce companies. Get C-level marketing leadership at 40% of the cost. Drive real revenue growth with executive-level expertise.",
    "provider": {
      "@type": "Organization",
      "name": "Forgewise",
      "url": "https://forgewise.io"
    },
    "areaServed": {
      "@type": "Country",
      "name": "United States"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Fractional CMO Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Part-Time CMO",
            "description": "2-3 days per week of strategic marketing leadership"
          }
        }
      ]
    }
  }

  return (
    <>
      <Head>
        <title>Fractional CMO for eCommerce | $5-15K/Month | 35% Revenue Growth</title>
        <meta name="description" content="Get an experienced eCommerce CMO for 40% of the cost. Our fractional CMOs deliver 35% average revenue growth. Book your strategy call today." />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href="https://forgewise.io/fractional-cmo-ecommerce/" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </Head>

      {/* No Navigation - This is a landing page */}

      <main className="min-h-screen bg-white">
        {/* Urgency Bar */}
        <div className="bg-red-600 text-white py-2 text-center text-sm font-semibold">
          ⏰ Limited Time: Free Growth Audit - Expires in {minutes}:{seconds.toString().padStart(2, '0')}
        </div>

        {/* Hero Section */}
        <section className="py-12 md:py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <Image
                    src="/shopify-partner-1.webp"
                    alt="Shopify Partner"
                    width={100}
                    height={40}
                    className="opacity-80"
                  />
                  <Image
                    src="/magento_badge.webp"
                    alt="Magento Partner"
                    width={100}
                    height={40}
                    className="opacity-80"
                  />
                </div>

                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Get a Fractional CMO for Your eCommerce Business
                </h1>

                <div className="space-y-3 mb-8">
                  <p className="text-xl text-emerald-300 font-semibold">
                    C-Level Marketing Leadership at 40% of the Cost
                  </p>
                  <p className="text-lg">
                    Our fractional CMOs have generated <span className="text-emerald-300 font-bold">significant eCommerce revenue</span> for B2B companies like yours.
                  </p>
                </div>

                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3">
                    <svg className="w-6 h-6 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>See real revenue growth in 6 months</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-6 h-6 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Flexible monthly investment options</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-6 h-6 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Free up room in your budget</span>
                  </div>
                </div>

                <BookingLink
                  type="discovery"
                  className="inline-block bg-emerald-600 text-white px-8 py-4 rounded-lg hover:bg-emerald-700 transition text-xl font-bold w-full md:w-auto text-center shadow-lg"
                >
                  Get Your Free Growth Audit →
                </BookingLink>

                <p className="text-sm text-gray-300 mt-4">
                  No commitment required • 30-minute strategy call
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6"
              >
                <h3 className="text-xl font-bold mb-4">What You Get:</h3>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <span className="text-emerald-400">✓</span>
                    <span>Strategic marketing leadership 2-3 days/week</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-emerald-400">✓</span>
                    <span>Complete marketing team management</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-emerald-400">✓</span>
                    <span>Data-driven growth strategies</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-emerald-400">✓</span>
                    <span>Board-level reporting & insights</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-emerald-400">✓</span>
                    <span>Vendor & agency management</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-emerald-400">✓</span>
                    <span>Marketing automation & tech stack</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Trust Bar */}
        <section className="py-8 bg-gray-100 border-y">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-wrap justify-center items-center gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-emerald-600">$25M+</div>
                <div className="text-sm text-gray-600">Revenue Generated</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-emerald-600">35%</div>
                <div className="text-sm text-gray-600">Avg Revenue Growth</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-emerald-600">40%</div>
                <div className="text-sm text-gray-600">Cost Savings vs Full-Time</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-emerald-600">11+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>
        </section>

        {/* Problem/Solution Section */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">
              Why B2B eCommerce Companies Choose Our Fractional CMO Services
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-red-800 mb-4">Without a Fractional CMO:</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex gap-3">
                    <span className="text-red-500">✗</span>
                    <span>Random marketing tactics without strategy</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-red-500">✗</span>
                    <span>Wasting $1000s on agencies that don't deliver</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-red-500">✗</span>
                    <span>CEO/founder doing marketing (poorly)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-red-500">✗</span>
                    <span>Can't afford $300K+ for full-time CMO</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-red-500">✗</span>
                    <span>Missing revenue targets quarter after quarter</span>
                  </li>
                </ul>
              </div>

              <div className="bg-emerald-50 border-2 border-emerald-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-emerald-800 mb-4">With Our Fractional CMO:</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex gap-3">
                    <span className="text-emerald-500">✓</span>
                    <span>Clear 90-day growth roadmap from day one</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-emerald-500">✓</span>
                    <span>Proven playbooks from $100M+ in eCommerce</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-emerald-500">✓</span>
                    <span>CEO focuses on product & operations</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-emerald-500">✓</span>
                    <span>60% cost savings with better results</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-emerald-500">✓</span>
                    <span>Predictable revenue growth month-over-month</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-center mt-12">
              <BookingLink
                type="discovery"
                className="inline-block bg-emerald-600 text-white px-8 py-4 rounded-lg hover:bg-emerald-700 transition text-xl font-bold shadow-lg"
              >
                Schedule Your Free Growth Audit →
              </BookingLink>
            </div>
          </div>
        </section>

        {/* Deliverables Timeline */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">
              Your First 90 Days with a Fractional CMO
            </h2>

            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="flex items-center gap-4 mb-3">
                  <div className="bg-emerald-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">
                    1
                  </div>
                  <h3 className="text-xl font-bold">Days 1-30: Assessment & Quick Wins</h3>
                </div>
                <ul className="ml-14 space-y-2 text-gray-700">
                  <li>• Complete marketing audit & competitive analysis</li>
                  <li>• Identify and fix critical conversion leaks (typical 15-20% lift)</li>
                  <li>• Optimize ad spend (average 30% cost reduction)</li>
                  <li>• Establish KPIs and reporting dashboard</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="flex items-center gap-4 mb-3">
                  <div className="bg-emerald-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">
                    2
                  </div>
                  <h3 className="text-xl font-bold">Days 31-60: Strategy & Systems</h3>
                </div>
                <ul className="ml-14 space-y-2 text-gray-700">
                  <li>• Develop comprehensive growth strategy</li>
                  <li>• Implement marketing automation (save 20+ hours/week)</li>
                  <li>• Launch new revenue channels</li>
                  <li>• Build/optimize marketing team structure</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="flex items-center gap-4 mb-3">
                  <div className="bg-emerald-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">
                    3
                  </div>
                  <h3 className="text-xl font-bold">Days 61-90: Scale & Optimize</h3>
                </div>
                <ul className="ml-14 space-y-2 text-gray-700">
                  <li>• Scale winning campaigns (2-3x growth)</li>
                  <li>• Launch customer retention programs</li>
                  <li>• Implement predictive revenue model</li>
                  <li>• Present board-ready growth report</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-4">
              Fractional CMO Investment Options
            </h2>
            <p className="text-center text-gray-600 mb-12">
              All plans include strategic leadership, team management, and growth execution
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white border rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold mb-2">Growth</h3>
                <ul className="space-y-3 mb-6 text-gray-700">
                  <li className="flex gap-2">
                    <span className="text-emerald-500">✓</span>
                    <span>10 hours/week commitment</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-emerald-500">✓</span>
                    <span>Perfect for $1-5M revenue</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-emerald-500">✓</span>
                    <span>Weekly strategy calls</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-emerald-500">✓</span>
                    <span>Marketing team guidance</span>
                  </li>
                </ul>
                <BookingLink
                  type="discovery"
                  className="block bg-gray-200 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-300 transition text-center font-semibold"
                >
                  Get Started
                </BookingLink>
              </div>

              <div className="bg-emerald-50 border-2 border-emerald-500 rounded-lg p-6 shadow-lg relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-emerald-500 text-white px-4 py-1 rounded-full text-sm">
                  MOST POPULAR
                </div>
                <h3 className="text-xl font-bold mb-2">Scale</h3>
                <ul className="space-y-3 mb-6 text-gray-700">
                  <li className="flex gap-2">
                    <span className="text-emerald-500">✓</span>
                    <span>20 hours/week commitment</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-emerald-500">✓</span>
                    <span>Ideal for $5-20M revenue</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-emerald-500">✓</span>
                    <span>2x weekly strategy calls</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-emerald-500">✓</span>
                    <span>Direct team management</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-emerald-500">✓</span>
                    <span>Board reporting included</span>
                  </li>
                </ul>
                <BookingLink
                  type="discovery"
                  className="block bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition text-center font-bold shadow"
                >
                  Get Started
                </BookingLink>
              </div>

              <div className="bg-white border rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold mb-2">Enterprise</h3>
                <ul className="space-y-3 mb-6 text-gray-700">
                  <li className="flex gap-2">
                    <span className="text-emerald-500">✓</span>
                    <span>30+ hours/week commitment</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-emerald-500">✓</span>
                    <span>For $20M+ revenue</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-emerald-500">✓</span>
                    <span>Daily availability</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-emerald-500">✓</span>
                    <span>Full marketing ownership</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-emerald-500">✓</span>
                    <span>C-suite collaboration</span>
                  </li>
                </ul>
                <BookingLink
                  type="discovery"
                  className="block bg-gray-200 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-300 transition text-center font-semibold"
                >
                  Get Started
                </BookingLink>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">
              Fractional CMO FAQs
            </h2>

            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-lg font-bold mb-2">
                  What exactly is a fractional CMO?
                </h3>
                <p className="text-gray-700">
                  A fractional CMO is an experienced marketing executive who works with your company part-time (typically 2-3 days per week) providing the same strategic leadership as a full-time CMO at 40% of the cost. You get C-level expertise without the $300K+ salary, benefits, and equity.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-lg font-bold mb-2">
                  How quickly will I see results?
                </h3>
                <p className="text-gray-700">
                  Every business is different, but we've found that executive-level marketing leadership creates momentum faster than you'd expect. When you have a seasoned CMO prioritizing the right opportunities and eliminating wasteful spending from day one, the path forward becomes crystal clear. Most importantly, you'll finally have someone accountable for your marketing ROI—someone who lives and breathes eCommerce growth. The real question is: how much longer can you afford to operate without that expertise?
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-lg font-bold mb-2">
                  What if I already have a marketing team?
                </h3>
                <p className="text-gray-700">
                  Perfect! A fractional CMO excels at leading and optimizing existing teams. We'll assess your team's strengths, provide strategic direction, implement processes, and mentor them to higher performance.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-lg font-bold mb-2">
                  What's included in the free growth audit?
                </h3>
                <p className="text-gray-700">
                  We run your website through SEMrush to uncover critical insights including: organic keyword rankings and opportunities, backlink profile analysis, technical SEO issues impacting visibility, competitive positioning in your market, traffic trends and projections, and top-performing content assets. You'll receive a detailed report with actionable recommendations to improve your search presence and drive qualified traffic.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 bg-gradient-to-br from-emerald-600 to-emerald-700 text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Put an Executive in the Driver's Seat?
            </h2>
            <p className="text-xl mb-8">
              Join Other B2B eCommerce companies that have scaled with our fractional CMO services.
            </p>
            <BookingLink
              type="discovery"
              className="inline-block bg-white text-emerald-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition text-xl font-bold shadow-lg"
            >
              Get Your Free Growth Audit Now →
            </BookingLink>
            <p className="text-emerald-100 mt-4">
              Limited slots available • No credit card required
            </p>
          </div>
        </section>

        {/* Simple Footer */}
        <footer className="py-8 bg-gray-900 text-gray-400">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <p>© {new Date().getFullYear()} Forgewise. All rights reserved.</p>
            <p className="mt-2 text-sm">
              B2B eCommerce Fractional CMO Services | Serving companies nationwide
            </p>
          </div>
        </footer>
      </main>
    </>
  )
}