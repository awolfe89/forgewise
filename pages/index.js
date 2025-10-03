import { useState, lazy, Suspense } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { StaggerContainer, StaggerItem } from '../src/components/AnimatedComponents';
import { BookingLink } from '../src/components/ProtectedContact';
import NextSEO from '../src/components/NextSEO';
import { getPageSEO } from '../src/config/seo';
import { FAQSchema } from '../src/components/StructuredData';
import { trackButtonClick, trackEvent, trackEngagement } from '../src/utils/tracking';

// Lazy load non-critical components
const FloatingCTA = lazy(() => import('../src/components/FloatingCTA'));

export default function Home() {

  const heroTitle = "From $2.2M to $6M in 3 Years. We Transform B2B & Legacy Businesses Into Digital Leaders.";
  const heroSubtitle = "The eCommerce consultant who speaks both business and tech – protecting you from overpriced agencies while delivering real growth";
  
  const seoData = getPageSEO('/');

  const faqData = [
    {
      question: "How quickly can I see results?",
      answer: "We start with what pays you back fastest. Quick wins come first, then we build momentum with bigger fixes. Every business is different, but we prioritize speed and impact."
    },
    {
      question: "What if I don't have a big budget?",
      answer: "Start with a $997 fix that makes you $10K/month. Use the profits to fund bigger improvements. No big upfront costs."
    },
    {
      question: "Do you work with my industry/platform?",
      answer: "We've worked across 20+ industries and all major platforms. Our strategies are principle-based and adapt to any business. If we can't help, we'll tell you upfront in the free assessment."
    },
    {
      question: "What makes you different from other agencies?",
      answer: "We've run 8-figure businesses. We build, not just talk. No reports. No decks. Just fixes that work."
    },
    {
      question: "Can you guarantee results?",
      answer: "We guarantee our work will be implemented as promised and track all metrics transparently. While we can't control market conditions, our track record shows consistent improvements across all clients."
    }
  ];

  return (
    <>
      <NextSEO {...seoData} />
      <FAQSchema faqs={faqData} />
      
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-800 via-blue-700 to-emerald-700 text-white overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative max-w-7xl mx-auto px-6 py-32 md:py-48 lg:py-56 text-center">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 1, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-base md:text-lg text-emerald-300 font-semibold uppercase tracking-wider mb-4"
              >
                B2B eCommerce Consultant • Western Illinois • Serving Chicago & Tri-State Area
              </motion.div>
              <motion.h1
                initial={{ opacity: 1, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight"
              >
                {heroTitle}
              </motion.h1>
              <motion.p
                initial={{ opacity: 1, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-xl md:text-2xl mb-4 text-blue-100 max-w-3xl mx-auto"
              >
                {heroSubtitle}
              </motion.p>
              <motion.div
                initial={{ opacity: 1, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 justify-center mb-12 px-4 sm:px-0"
              >
                <BookingLink
                  type="discovery"
                  className="inline-flex items-center justify-center px-6 sm:px-8 py-4 text-base sm:text-lg font-medium bg-white text-blue-800 rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl w-full sm:w-auto"
                >
                  Get Your Growth Assessment
                </BookingLink>
                <Link
                  href="/results"
                  className="inline-flex items-center justify-center px-6 sm:px-8 py-4 text-base sm:text-lg font-medium border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-800 transition-all w-full sm:w-auto"
                >
                  See How We Helped a B2B Distributor Triple Revenue
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 1, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-wrap justify-center gap-8 text-sm"
              >
                <div className="flex items-center">
                  <span className="text-emerald-400 mr-2">✓</span>
                  <span>11+ Years Magento & Shopify Experience</span>
                </div>
                <div className="flex items-center">
                  <span className="text-emerald-400 mr-2">✓</span>
                  <span>50+ B2B Digital Transformations</span>
                </div>
                <div className="flex items-center">
                  <span className="text-emerald-400 mr-2">✓</span>
                  <span>ERP Integrations</span>
                </div>
              </motion.div>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -bottom-1 left-0 right-0">
            <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
            </svg>
          </div>
        </section>


        {/* Services Section - B2B Focus */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              How We Help B2B & Traditional Businesses Win Online
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              Specialized expertise for complex catalogs, legacy systems, and B2B requirements
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Legacy Business Transformation */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">🏭→💻</div>
                <h3 className="text-xl font-bold mb-3">Legacy Business Transformation</h3>
                <p className="text-gray-600 mb-4 text-sm">
                  Turn your traditional business into a digital powerhouse
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-0.5">✓</span>
                    <span className="text-gray-700">ERP integration (Sage, ABAS, Prelude)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-0.5">✓</span>
                    <span className="text-gray-700">Gradual digital adoption</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-0.5">✓</span>
                    <span className="text-gray-700">Staff training included</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-0.5">✓</span>
                    <span className="text-gray-700">"No disruption" approach</span>
                  </li>
                </ul>
              </div>

              {/* B2B eCommerce Excellence */}
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">🔗</div>
                <h3 className="text-xl font-bold mb-3">B2B eCommerce Excellence</h3>
                <p className="text-gray-600 mb-4 text-sm">
                  Master complex catalogs and B2B requirements
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-0.5">✓</span>
                    <span className="text-gray-700">
                      <Link href="/insights/attribute-filtering" className="hover:text-blue-600 underline">
                        1,000+ product attributes? No problem
                      </Link>
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-0.5">✓</span>
                    <span className="text-gray-700">Customer-specific pricing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-0.5">✓</span>
                    <span className="text-gray-700">Quote systems & approvals</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-0.5">✓</span>
                    <span className="text-gray-700">Bulk ordering workflows</span>
                  </li>
                </ul>
              </div>

              {/* Revenue Acceleration */}
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">📈</div>
                <h3 className="text-xl font-bold mb-3">Revenue Acceleration</h3>
                <p className="text-gray-600 mb-4 text-sm">
                  Proven strategies that tripled client revenue
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-0.5">✓</span>
                    <span className="text-gray-700">
                      <Link href="/insights/seo-ux-case-study" className="hover:text-blue-600 underline">
                        SEO that actually works
                      </Link>
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-0.5">✓</span>
                    <span className="text-gray-700">
                      <Link href="/insights/ppc-cost-optimization" className="hover:text-blue-600 underline">
                        Google Ads optimization
                      </Link>
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-0.5">✓</span>
                    <span className="text-gray-700">Email segmentation mastery</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-0.5">✓</span>
                    <span className="text-gray-700">Monthly growth tracking</span>
                  </li>
                </ul>
              </div>

              {/* Tech Translation & Protection */}
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">🛡️</div>
                <h3 className="text-xl font-bold mb-3">Tech Translation & Protection</h3>
                <p className="text-gray-600 mb-4 text-sm">
                  Your advocate against agency BS
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-0.5">✓</span>
                    <span className="text-gray-700">Vendor vetting & negotiation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-0.5">✓</span>
                    <span className="text-gray-700">Plain-English explanations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-0.5">✓</span>
                    <span className="text-gray-700">
                      <Link href="/insights/unused-features" className="hover:text-blue-600 underline">
                        Cost-saving recommendations
                      </Link>
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-0.5">✓</span>
                    <span className="text-gray-700">Honest project assessments</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-center mt-12">
              <BookingLink
                type="discovery"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-all"
                onClick={() => trackButtonClick('services_cta', 'services_section')}
              >
                Let's Discuss Your Specific Needs →
              </BookingLink>
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Transforming Traditional Industries for Digital Success
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              Specialized expertise in B2B and traditional business sectors, with 11+ years helping complex industries go digital
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* B2B Distribution & Wholesale */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-4xl mb-4">📦</div>
                <h3 className="text-xl font-bold mb-3">B2B Distribution & Wholesale</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-0.5">•</span>
                    <span>Customer-specific pricing & bulk order management</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-0.5">•</span>
                    <span>ERP integration with real-time inventory sync</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-0.5">•</span>
                    <span>Quote-to-order workflows for 10,000+ SKUs</span>
                  </li>
                </ul>
                <p className="text-xs text-gray-500 mt-4 font-medium">15+ wholesale businesses transformed</p>
              </motion.div>

              {/* Manufacturing & Industrial Supply */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-4xl mb-4">🏭</div>
                <h3 className="text-xl font-bold mb-3">Manufacturing & Industrial Supply</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-0.5">•</span>
                    <span>Complex product configurators for custom orders</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-0.5">•</span>
                    <span>CAD file management & technical spec display</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-0.5">•</span>
                    <span>Dealer portals with territory management</span>
                  </li>
                </ul>
                <p className="text-xs text-gray-500 mt-4 font-medium">$180M+ in industrial sales enabled</p>
              </motion.div>

              {/* Legacy Retail → eCommerce */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-4xl mb-4">🏪</div>
                <h3 className="text-xl font-bold mb-3">Legacy Retail → eCommerce</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-0.5">•</span>
                    <span>POS integration for unified inventory</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-0.5">•</span>
                    <span>Click-and-collect & local delivery setup</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-0.5">•</span>
                    <span>Staff training for digital transition</span>
                  </li>
                </ul>
                <p className="text-xs text-gray-500 mt-4 font-medium">27 brick-and-mortar stores digitized</p>
              </motion.div>

              {/* Professional Services & B2B Software */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-4xl mb-4">💼</div>
                <h3 className="text-xl font-bold mb-3">Professional Services & B2B Software</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-0.5">•</span>
                    <span>Subscription billing & license management</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-0.5">•</span>
                    <span>Client portal development with secure access</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-0.5">•</span>
                    <span>Automated renewal & upsell workflows</span>
                  </li>
                </ul>
                <p className="text-xs text-gray-500 mt-4 font-medium">$8M+ ARR managed through platforms</p>
              </motion.div>

              {/* Building Materials & Construction Supply */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-4xl mb-4">🔨</div>
                <h3 className="text-xl font-bold mb-3">Building Materials & Construction Supply</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-0.5">•</span>
                    <span>Contractor accounts with NET terms</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-0.5">•</span>
                    <span>Job site delivery scheduling integration</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-0.5">•</span>
                    <span>Quantity calculators & project estimators</span>
                  </li>
                </ul>
                <p className="text-xs text-gray-500 mt-4 font-medium">12 suppliers serving 5,000+ contractors</p>
              </motion.div>

              {/* Your Industry CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border-2 border-blue-200 flex flex-col justify-center"
              >
                <div className="text-4xl mb-4 text-center">🤔</div>
                <h3 className="text-xl font-bold mb-3 text-center">Your Industry Not Listed?</h3>
                <p className="text-sm text-gray-700 mb-4 text-center">
                  We've helped 50+ B2B and traditional businesses across various sectors. If you have complex requirements, we can handle them.
                </p>
                <BookingLink
                  type="discovery"
                  className="block w-full py-3 bg-blue-600 text-white text-center font-medium rounded-lg hover:bg-blue-700 transition-colors"
                  onClick={() => trackButtonClick('industry_cta', 'industries_section')}
                >
                  Discuss Your Industry Needs →
                </BookingLink>
              </motion.div>
            </div>
          </div>
        </section>

        {/* The Forgewise Difference */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              The Forgewise Difference
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              Why B2B Companies and Traditional Businesses Choose Us
            </p>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* What Others Do */}
              <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-red-100">
                <div className="flex items-center mb-6">
                  <span className="text-3xl mr-3">❌</span>
                  <h3 className="text-2xl font-bold text-gray-800">What Others Do</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3 mt-1">•</span>
                    <span className="text-gray-700">Chase trendy DTC brands</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3 mt-1">•</span>
                    <span className="text-gray-700">Speak in tech jargon</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3 mt-1">•</span>
                    <span className="text-gray-700">Oversell unnecessary features</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3 mt-1">•</span>
                    <span className="text-gray-700">One-size-fits-all solutions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3 mt-1">•</span>
                    <span className="text-gray-700">Remote-only relationships</span>
                  </li>
                </ul>
              </div>

              {/* What We Do */}
              <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-green-100">
                <div className="flex items-center mb-6">
                  <span className="text-3xl mr-3">✅</span>
                  <h3 className="text-2xl font-bold text-gray-800">What We Do</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">•</span>
                    <span className="text-gray-700">Specialize in B2B complexity</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">•</span>
                    <span className="text-gray-700">Explain everything clearly</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">•</span>
                    <span className="text-gray-700">Recommend only what you need</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">•</span>
                    <span className="text-gray-700">Custom solutions for your industry</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">•</span>
                    <span className="text-gray-700">Locally Minded</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-center mt-12">
              <BookingLink
                type="discovery"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-all transform hover:scale-105 shadow-xl"
                onClick={() => trackButtonClick('difference_cta', 'forgewise_difference')}
              >
                Ready for Honest, Effective eCommerce Consulting? →
              </BookingLink>
            </div>
          </div>
        </section>

        {/* SMB Trust Signals */}
        <section className="py-12 bg-white border-y border-gray-100">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                  <p className="text-2xl font-bold text-blue-700">$100K-$5M</p>
                  <p className="text-gray-600 text-sm mt-1">Companies We Usually Work With</p>
              </div>
              <div>
                  <p className="text-2xl font-bold text-emerald-600">2-4 Weeks</p>
                  <p className="text-gray-600 text-sm mt-1">Project Timeline</p>
              </div>
              <div>
                  <p className="text-2xl font-bold text-amber-600">No Disruption</p>
                  <p className="text-gray-600 text-sm mt-1">To Your Operations</p>
              </div>
              <div>
                  <p className="text-2xl font-bold text-gray-700">3.8x</p>
                  <p className="text-gray-600 text-sm mt-1">Average ROI</p>
              </div>
            </div>
          </div>
        </section>


        {/* Problem/Solution Grid */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Common Problems, Proven Solutions
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              We've seen these challenges countless times. Here's exactly how we fix them.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-red-50 rounded-xl p-6 border-l-4 border-red-600">
                <div className="flex items-start">
                  <div className="text-red-500 mr-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Problem: Cart Abandonment Over 70%</h3>
                    <p className="text-gray-700 mb-3">Customers add items but never complete purchase.</p>
                    <div className="bg-emerald-50 rounded-lg p-4 border-l-4 border-emerald-600">
                      <h4 className="font-semibold text-emerald-800 mb-1">Our Solution:</h4>
                      <p className="text-gray-700">Smart exit-intent popups, simplified checkout, trust signals, and automated recovery emails. Average result: +42% cart recovery.</p>
                  </div>
                </div>
              </div>
              </div>

              <div className="bg-red-50 rounded-xl p-6 border-l-4 border-red-600">
                <div className="flex items-start">
                  <div className="text-red-500 mr-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Problem: PPC Burning Cash, No ROI</h3>
                    <p className="text-gray-700 mb-3">Thousands spent monthly with minimal conversions.</p>
                    <div className="bg-emerald-50 rounded-lg p-4 border-l-4 border-emerald-600">
                      <h4 className="font-semibold text-emerald-800 mb-1">Our Solution:</h4>
                      <p className="text-gray-700">Restructured campaigns, negative keywords, landing page optimization, conversion tracking. Average result: -67% CAC. <Link href="/insights/ppc-cost-optimization" className="text-blue-600 hover:text-blue-700 underline">Read our PPC optimization guide →</Link></p>
                  </div>
                </div>
              </div>
              </div>

              <div className="bg-red-50 rounded-xl p-6 border-l-4 border-red-600">
                <div className="flex items-start">
                  <div className="text-red-500 mr-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Problem: Website Takes 8+ Seconds to Load</h3>
                    <p className="text-gray-700 mb-3">Every second costs you 7% in conversions.</p>
                    <div className="bg-emerald-50 rounded-lg p-4 border-l-4 border-emerald-600">
                      <h4 className="font-semibold text-emerald-800 mb-1">Our Solution:</h4>
                      <p className="text-gray-700">Image optimization, code minification, CDN implementation, lazy loading. Average result: 3-second load times. <Link href="/insights/shopify-speed" className="text-blue-600 hover:text-blue-700 underline">See how we fixed Shopify speed →</Link></p>
                  </div>
                </div>
              </div>
              </div>

              <div className="bg-red-50 rounded-xl p-6 border-l-4 border-red-600">
                <div className="flex items-start">
                  <div className="text-red-500 mr-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Problem: Invisible on Google</h3>
                    <p className="text-gray-700 mb-3">Competitors outrank you for your own brand terms.</p>
                    <div className="bg-emerald-50 rounded-lg p-4 border-l-4 border-emerald-600">
                      <h4 className="font-semibold text-emerald-800 mb-1">Our Solution:</h4>
                      <p className="text-gray-700">Technical SEO fixes, content optimization, backlink strategy, local SEO. Average result: +156% organic traffic. <Link href="/insights/seo-ux-case-study" className="text-blue-600 hover:text-blue-700 underline">Read the SEO case study →</Link></p>
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>
        </section>

        {/* Forge-Themed Divider */}
        <div className="relative bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 h-2 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-30 animate-pulse"></div>
        </div>

        {/* Trust Indicators - Forged Results */}
        <section className="py-16 bg-white relative overflow-hidden">
          {/* Spark effects */}
          <div className="absolute top-0 left-1/4 text-amber-400 opacity-20 animate-pulse">✦</div>
          <div className="absolute bottom-0 right-1/3 text-amber-500 opacity-20 animate-pulse" style={{ animationDelay: '1s' }}>✦</div>

          <div className="max-w-6xl mx-auto px-6">
            <h3 className="text-center text-lg font-medium text-gray-600 mb-8">📊 Real Results. Real Numbers.</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-blue-700">45+</div>
                <div className="text-gray-600 mt-2">Projects Delivered</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-700">$2.5M+</div>
                <div className="text-gray-600 mt-2">Revenue Generated</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-700">45%</div>
                <div className="text-gray-600 mt-2">Average Improvement</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-700">2-4 weeks</div>
                <div className="text-gray-600 mt-2">Typical Timeline</div>
              </div>
            </div>
          </div>
        </section>


        {/* Your Growth Journey */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Your Growth Path
            </h2>
            <p className="text-xl text-gray-600 text-center mb-4 max-w-3xl mx-auto">
              Start small, scale when you see the impact
            </p>

            <div className="relative">
              {/* Connection line */}
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-emerald-200 to-amber-200 hidden md:block transform -translate-y-1/2"></div>

              <div className="grid md:grid-cols-3 gap-8 relative">
                {/* Quick Wins */}
                <div className="relative">
                  <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-blue-100 hover:border-blue-300 transition-all">
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white text-sm px-3 py-1 rounded-full font-bold">
                      1-2 WEEKS
                  </div>
                    <Link href="/quick-fixes/" className="block">
                      <div className="text-3xl mb-3 text-center">⚡</div>
                      <h3 className="text-xl font-bold mb-2 text-center">Quick Wins</h3>
                      <p className="text-gray-600 text-sm text-center">
                        Fast fixes that pay for themselves
                      </p>
                      <p className="text-blue-600 font-medium text-center mt-3 text-sm">Start here →</p>
                    </Link>
                </div>
              </div>

                {/* Custom Solutions */}
                <div className="relative">
                  <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-emerald-100 hover:border-emerald-300 transition-all">
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-emerald-700 text-white text-sm px-3 py-1 rounded-full font-bold">
                      4-12 WEEKS
                  </div>
                    <Link href="/solutions/" className="block">
                      <div className="text-3xl mb-3 text-center">🚀</div>
                      <h3 className="text-xl font-bold mb-2 text-center">Custom Solutions</h3>
                      <p className="text-gray-600 text-sm text-center">
                        Tailored systems that scale with you
                      </p>
                      <p className="text-emerald-700 font-semibold text-center mt-3 text-sm">Level up →</p>
                    </Link>
                </div>
              </div>

                {/* Fractional Leadership */}
                <div className="relative">
                  <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-amber-100 hover:border-amber-300 transition-all">
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-amber-700 text-white text-sm px-3 py-1 rounded-full font-bold">
                      ONGOING
                  </div>
                    <Link href="/leadership/" className="block">
                      <div className="text-3xl mb-3 text-center">👥</div>
                      <h3 className="text-xl font-bold mb-2 text-center">Fractional Leadership</h3>
                      <p className="text-gray-600 text-sm text-center">
                        Expert guidance without the full-time cost
                      </p>
                      <p className="text-amber-700 font-semibold text-center mt-3 text-sm">Scale smart →</p>
                    </Link>
                </div>
              </div>
              </div>
            </div>
          </div>
        </section>

        {/* Results Preview */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Recent Client Results
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Case 1 */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-8">
                  <div className="text-3xl font-bold text-emerald-600 mb-2">+22% Conversion Rate</div>
                  <h3 className="text-xl font-bold mb-2">E-commerce Fashion Brand</h3>
                  <p className="text-gray-600 mb-4">
                    Optimized checkout flow, reduced form fields, and added trust signals.
                    Result: $180K additional monthly revenue.
                  </p>
                  <div className="flex items-center justify-between">
                    <Link href="/results#animal-health-pharmacy" className="text-blue-600 hover:text-blue-700 font-medium">
                      Read full case →
                    </Link>
                    <BookingLink
                      type="discovery"
                      className="text-emerald-600 hover:text-emerald-700 font-medium"
                    >
                      Get similar results →
                    </BookingLink>
                  </div>
                </div>
              </div>

              {/* Case 2 */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-8">
                  <div className="text-3xl font-bold text-emerald-600 mb-2">-67% Customer Acquisition Cost</div>
                  <h3 className="text-xl font-bold mb-2">B2B SaaS Platform</h3>
                  <p className="text-gray-600 mb-4">
                    Restructured Google Ads, fixed tracking, optimized landing pages.
                    Result: Same leads, 67% less spend.
                  </p>
                  <div className="flex items-center justify-between">
                    <Link href="/results" className="text-blue-600 hover:text-blue-700 font-medium">
                      See all results →
                    </Link>
                    <BookingLink
                      type="discovery"
                      className="text-emerald-600 hover:text-emerald-700 font-medium"
                    >
                      Book a Call →
                    </BookingLink>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Link
                href="/results/"
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-all font-medium"
              >
                View All 45+ Success Stories →
              </Link>
            </div>
          </div>
        </section>

        {/* Lighthouse Performance Showcase */}
        <section className="py-20 bg-gradient-to-br from-emerald-50 to-blue-50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Perfect Performance Scores Like These
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We don't just talk about results—we deliver them. Here's a real Lighthouse report showing perfect scores across all metrics.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Lighthouse Report Image */}
              <div className="order-2 md:order-1">
                <div className="bg-white rounded-2xl shadow-xl p-4 border border-gray-200">
                  <Image
                    src="/lighthouse-report.png"
                    alt="Perfect Lighthouse Performance Report - 100 scores"
                    width={600}
                    height={400}
                    className="w-full h-auto rounded-lg"
                    priority={false}
                  />
                </div>
              </div>

              {/* Benefits List */}
              <div className="order-1 md:order-2 space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Lightning-Fast Load Times</h3>
                    <p className="text-gray-600">
                      Every second counts. We optimize your site to load in under 2 seconds, keeping visitors engaged and converting.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">📱</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Mobile-First Excellence</h3>
                    <p className="text-gray-600">
                      With most traffic coming from mobile, we ensure your site performs flawlessly on every device.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">SEO That Ranks</h3>
                    <p className="text-gray-600">
                      Perfect technical SEO scores mean Google can easily crawl, index, and rank your pages higher.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">♿</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Accessible to Everyone</h3>
                    <p className="text-gray-600">
                      Compliance-ready sites that work for all users, expanding your potential customer base.
                    </p>
                  </div>
                </div>

                <div className="pt-6">
                  <BookingLink
                    type="discovery"
                    className="inline-flex items-center justify-center px-8 py-4 bg-emerald-600 text-white font-bold rounded-lg hover:bg-emerald-700 transition-all"
                  >
                    Get Your Free Performance Audit →
                  </BookingLink>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Risk Reducer */}
        <section className="py-12 bg-emerald-50">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="inline-flex items-center justify-center p-2 bg-emerald-100 rounded-full mb-4">
              <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-2">Our Guarantee</h3>
            <p className="text-lg text-gray-700">
              Honest assessment, fair pricing & hard work.
            </p>
            <p className="text-sm text-gray-600 mt-2">
              We're that confident in our ability to deliver results.
            </p>
          </div>
        </section>


        {/* Process/Methodology */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Our Proven Process
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              A systematic approach that delivers predictable results
            </p>

            <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-bold text-xl mx-auto mb-4">
                  1
                </div>
                <h3 className="text-xl font-bold mb-2">Audit & Discover</h3>
                <p className="text-gray-600">We analyze your entire operation, identifying quick wins and long-term opportunities. No stone left unturned.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-700 font-bold text-xl mx-auto mb-4">
                  2
                </div>
                <h3 className="text-xl font-bold mb-2">Strategize & Prioritize</h3>
                <p className="text-gray-600">We create a roadmap prioritized by impact and effort. You'll know exactly what to fix first for maximum ROI.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center text-amber-700 font-bold text-xl mx-auto mb-4">
                  3
                </div>
                <h3 className="text-xl font-bold mb-2">Execute & Implement</h3>
                <p className="text-gray-600">We build it. You own it. No handoffs, no delays.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-bold text-xl mx-auto mb-4">
                  4
                </div>
                <h3 className="text-xl font-bold mb-2">Measure & Optimize</h3>
                <p className="text-gray-600">If it's not working, we fix it. Simple as that.</p>
              </div>
            </div>
          </div>
        </section>


        {/* Recent Wins */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Recent Client Wins
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-lg border-t-4 border-green-500">
                <div className="flex items-center mb-4">
                  <div className="text-green-500 mr-3">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                </div>
                  <span className="text-sm text-gray-500">E-Commerce</span>
              </div>
                <h3 className="font-bold text-lg mb-2">E-commerce Store</h3>
                <p className="text-gray-700 mb-3">Reduced cart abandonment by 43% with checkout optimization</p>
                <p className="text-2xl font-bold text-green-600">+$47K/month</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border-t-4 border-blue-500">
                <div className="flex items-center mb-4">
                  <div className="text-blue-500 mr-3">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                </div>
                  <span className="text-sm text-gray-500">B2B</span>
              </div>
                <h3 className="font-bold text-lg mb-2">B2B SaaS</h3>
                <p className="text-gray-700 mb-3">Cut PPC costs by 62% while doubling qualified leads</p>
                <p className="text-2xl font-bold text-blue-600">215% ROI</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border-t-4 border-purple-500">
                <div className="flex items-center mb-4">
                  <div className="text-purple-500 mr-3">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                </div>
                  <span className="text-sm text-gray-500">Local Service</span>
              </div>
                <h3 className="font-bold text-lg mb-2">Local Service Business</h3>
                <p className="text-gray-700 mb-3">3x'd website conversions with speed optimization</p>
                <p className="text-2xl font-bold text-purple-600">2.1s → 0.8s</p>
              </div>
            </div>
          </div>
        </section>


        {/* Technology Stack */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Technologies We Master
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              We work with the tools that power modern business
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <h3 className="font-bold text-gray-800 mb-4">E-commerce</h3>
                <div className="space-y-2 text-gray-600">
                  <p>Shopify Plus</p>
                  <p>Magento</p>
                  <p>WooCommerce</p>
                  <p>BigCommerce</p>
              </div>
              </div>

              <div className="text-center">
                <h3 className="font-bold text-gray-800 mb-4">Marketing</h3>
                <div className="space-y-2 text-gray-600">
                  <p>Google Ads</p>
                  <p>Meta Ads</p>
                  <p>Klaviyo</p>
                  <p>HubSpot</p>
              </div>
              </div>

              <div className="text-center">
                <h3 className="font-bold text-gray-800 mb-4">Analytics</h3>
                <div className="space-y-2 text-gray-600">
                  <p>Google Analytics 4</p>
                  <p>Segment</p>
                  <p>Mixpanel</p>
                  <p>Hotjar</p>
              </div>
              </div>

              <div className="text-center">
                <h3 className="font-bold text-gray-800 mb-4">Development</h3>
                <div className="space-y-2 text-gray-600">
                  <p>React/Next.js</p>
                  <p>Node.js</p>
                  <p>Python</p>
                  <p>AWS/Cloud</p>
              </div>
              </div>
            </div>
          </div>
        </section>


        {/* Final CTA - Two Ways to Start */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="bg-gradient-to-br from-blue-800 to-emerald-800 text-white rounded-2xl p-12 text-center shadow-xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Two Ways to Start
              </h2>
              <p className="text-xl mb-8 text-blue-100">
                Choose the option that works best for you
              </p>

              <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                {/* Option 1: Book a Call */}
                <div className="bg-white/10 backdrop-blur rounded-lg p-6 border border-white/20">
                  <div className="text-2xl mb-3">📞</div>
                  <h3 className="text-xl font-bold mb-2">Book a Call</h3>
                  <p className="text-blue-100 mb-4 text-sm">
                    (Recommended) 15-minute chat to discuss your specific needs and see if we're a fit
                  </p>
                  <BookingLink
                    type="discovery"
                    className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-800 rounded-lg hover:bg-gray-100 transition-all font-medium w-full"
                  >
                    Book Discovery Call →
                  </BookingLink>
                </div>

                {/* Option 2: Email Introduction */}
                <div className="bg-white/10 backdrop-blur rounded-lg p-6 border border-white/20">
                  <div className="text-2xl mb-3">✉️</div>
                  <h3 className="text-xl font-bold mb-2">Request Email Intro</h3>
                  <p className="text-blue-100 mb-4 text-sm">
                    Get a personalized email with our approach and case studies relevant to your business
                  </p>
                  <a
                    href="mailto:admin@forgewise.io?subject=Request%20for%20Introduction&body=Hi%2C%0A%0AI'd%20like%20to%20learn%20more%20about%20how%20Forgewise%20can%20help%20my%20business.%0A%0AMy%20company%3A%20%0AMonthly%20revenue%3A%20%0ABiggest%20challenge%3A%20%0A%0AThanks!"
                    className="inline-flex items-center justify-center px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-all font-medium w-full"
                  >
                    Request Email Intro →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="font-bold text-lg mb-3">How quickly can I see results?</h3>
                <p className="text-gray-700">
                  7-14 days for quick wins. 30 days for bigger fixes. We start with what pays you back fastest.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="font-bold text-lg mb-3">What if I don't have a big budget?</h3>
                <p className="text-gray-700">
                  Start with a $997 fix that makes you $10K/month. Use the profits to fund bigger improvements. No big upfront costs.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="font-bold text-lg mb-3">Do you work with my industry/platform?</h3>
                <p className="text-gray-700">
                  We've worked across 20+ industries and all major platforms. Our strategies are principle-based and adapt to any business. If we can't help, we'll tell you upfront in the free assessment.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="font-bold text-lg mb-3">What makes you different from other agencies?</h3>
                <p className="text-gray-700">
                  We've run 8-figure businesses. We build, not just talk. No reports. No decks. Just fixes that work.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="font-bold text-lg mb-3">Can you guarantee results?</h3>
                <p className="text-gray-700">
                  We guarantee our work will be implemented as promised and track all metrics transparently. While we can't control market conditions, our track record shows consistent improvements across all clients.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Floating CTA */}
        <Suspense fallback={null}>
          <FloatingCTA />
        </Suspense>
      </div>
    </>
  );
}
