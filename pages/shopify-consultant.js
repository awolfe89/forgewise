import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import NextSEO from '../src/components/NextSEO';
import { BookingLink } from '../src/components/ProtectedContact';
import { trackButtonClick, trackEvent } from '../src/utils/tracking';

export default function ShopifyConsultant() {
  const [expandedFaq, setExpandedFaq] = useState(null);

  const seoData = {
    title: 'Shopify Speed & Conversion Consultant | 40% Faster Load Times',
    description: 'Expert Shopify consultant specializing in speed optimization and conversion rate improvements. Average 40% speed increase and 25% conversion boost. Free audit available.',
    canonical: 'https://forgewise.io/shopify-consultant',
    openGraph: {
      title: 'Shopify Speed & Conversion Optimization Expert',
      description: 'Transform your Shopify store with proven speed optimization and conversion strategies. Average 40% faster load times.',
      url: 'https://forgewise.io/shopify-consultant',
    }
  };

  const shopifyStats = [
    { metric: '40%', description: 'Average speed improvement' },
    { metric: '25%', description: 'Typical conversion increase' },
    { metric: '2.3s', description: 'Target load time achieved' },
    { metric: '15%', description: 'Cart abandonment reduction' }
  ];

  const optimizations = [
    {
      title: 'Speed Optimization',
      icon: '⚡',
      points: [
        'Image optimization & lazy loading',
        'JavaScript & CSS minification',
        'Third-party app audit & cleanup',
        'CDN configuration & caching',
        'Mobile-first performance tuning'
      ]
    },
    {
      title: 'Conversion Rate Optimization',
      icon: '📈',
      points: [
        'Checkout flow optimization',
        'Cart abandonment recovery',
        'Product page enhancements',
        'Trust signals & social proof',
        'A/B testing implementation'
      ]
    },
    {
      title: 'Technical SEO',
      icon: '🔍',
      points: [
        'Core Web Vitals optimization',
        'Schema markup implementation',
        'URL structure optimization',
        'Meta tag optimization',
        'XML sitemap configuration'
      ]
    },
    {
      title: 'AI Integration',
      icon: '🤖',
      points: [
        'AI-powered product recommendations',
        'Smart inventory management',
        'Automated customer support chatbots',
        'Personalized shopping experiences',
        'Predictive analytics & insights'
      ]
    }
  ];

  const caseStudies = [
    {
      client: 'Fashion Retailer',
      results: [
        '45% faster page load',
        '32% increase in conversions',
        '$240K additional revenue/year'
      ]
    },
    {
      client: 'Beauty Brand',
      results: [
        '2.8s → 1.6s load time',
        '28% mobile conversion boost',
        '52% reduction in bounce rate'
      ]
    },
    {
      client: 'Home Goods Store',
      results: [
        '38% speed improvement',
        '18% cart abandonment decrease',
        '$180K recovered revenue'
      ]
    }
  ];

  const faqs = [
    {
      question: 'How quickly can I see results from Shopify optimization?',
      answer: 'Speed improvements are immediate upon implementation (typically 1-2 weeks). Conversion improvements usually show within 2-4 weeks as Google recognizes the improvements and customer behavior adapts.'
    },
    {
      question: 'Will optimization affect my store\'s design or functionality?',
      answer: 'No. Our optimizations work behind the scenes to improve performance without changing your store\'s appearance or user experience. In fact, the improved speed enhances the user experience.'
    },
    {
      question: 'What\'s included in the free Shopify audit?',
      answer: 'We run your store through SEMrush for comprehensive analysis including: site health score and critical errors, organic keyword rankings and opportunities, backlink profile analysis, on-page SEO issues, technical SEO problems, mobile usability, site speed metrics, Core Web Vitals assessment, top performance bottlenecks, and a prioritized action plan with specific recommendations.'
    },
    {
      question: 'Do you work with Shopify Plus stores?',
      answer: 'Yes! We work with all Shopify tiers from basic to Plus. Our Plus experience includes advanced features like Shopify Scripts, Launchpad, and Flow automation.'
    },
    {
      question: 'What makes you different from other Shopify consultants?',
      answer: 'We focus exclusively on measurable revenue impact. Every optimization ties directly to conversion metrics. Plus, we guarantee specific performance improvements or you don\'t pay.'
    }
  ];

  return (
    <>
      <NextSEO {...seoData} />

      {/* Structured Data for Service */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Shopify Speed & Conversion Optimization",
            "description": "Expert Shopify consulting focused on speed optimization and conversion rate improvement",
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
              "name": "Shopify Optimization Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Shopify Speed Optimization"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Shopify Conversion Optimization"
                  }
                }
              ]
            }
          })
        }}
      />

      <div className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-green-600 to-blue-600 text-white py-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Shopify Speed & Conversion Consultant
                </h1>
                <p className="text-xl mb-8 text-green-50">
                  Transform your Shopify store into a high-converting speed machine.
                  Average 40% faster load times and 25% conversion increase.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <BookingLink
                    type="discovery"
                    className="inline-block px-8 py-4 bg-white text-green-600 font-bold rounded-lg hover:bg-gray-100 transition-all"
                    onClick={() => trackButtonClick('shopify_free_audit', 'hero')}
                  >
                    Get Free Speed Audit →
                  </BookingLink>
                  <Link
                    href="/contact"
                    className="inline-block px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-green-600 transition-all text-center"
                  >
                    Start Optimization Project
                  </Link>
                </div>
                <p className="mt-6 text-sm text-green-100">
                  ✓ No commitment required • ✓ 15-minute audit • ✓ Actionable recommendations
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {shopifyStats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center"
                  >
                    <div className="text-3xl font-bold mb-2">{stat.metric}</div>
                    <div className="text-sm text-green-100">{stat.description}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Problem Statement */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">
              Your Shopify Store Is Losing Money Every Second It's Slow
            </h2>
            <div className="bg-red-50 border-2 border-red-200 rounded-xl p-8">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-red-600 mb-2">53%</div>
                  <p className="text-gray-700">of mobile users abandon sites that take over 3 seconds to load</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-red-600 mb-2">$2.6B</div>
                  <p className="text-gray-700">lost annually due to slow loading times</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-red-600 mb-2">7%</div>
                  <p className="text-gray-700">conversion loss for every 1-second delay</p>
                </div>
              </div>
            </div>
            <p className="text-center mt-8 text-lg text-gray-700">
              <strong>Good news:</strong> Most Shopify stores can be optimized for 40-60% faster load times.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-4">
              Complete Shopify Optimization Services
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              From speed optimization to AI integration, we handle every aspect of modern Shopify performance
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              {optimizations.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <ul className="space-y-3">
                    {service.points.map((point, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-green-500 mr-2 mt-1">✓</span>
                        <span className="text-gray-700">{point}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">
              Proven Shopify Success Stories
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {caseStudies.map((study, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-8 border border-green-200"
                >
                  <h3 className="text-xl font-bold mb-4 text-gray-800">{study.client}</h3>
                  <ul className="space-y-3">
                    {study.results.map((result, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-green-600 mr-2">→</span>
                        <span className="text-gray-700 font-medium">{result}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">
              Our Shopify Optimization Process
            </h2>
            <div className="space-y-6">
              {[
                { step: '1', title: 'Deep Audit', desc: 'Comprehensive analysis of your Shopify store\'s speed, conversion metrics, and revenue leaks', time: 'Day 1-2' },
                { step: '2', title: 'Priority Roadmap', desc: 'Detailed action plan prioritized by ROI impact and implementation complexity', time: 'Day 3' },
                { step: '3', title: 'Speed Optimization', desc: 'Technical improvements to achieve sub-3-second load times across all devices', time: 'Week 1' },
                { step: '4', title: 'Conversion Optimization', desc: 'UX improvements, checkout optimization, and trust signal implementation', time: 'Week 2' },
                { step: '5', title: 'Testing & Refinement', desc: 'A/B testing, monitoring, and continuous optimization based on data', time: 'Ongoing' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start bg-white rounded-lg p-6 shadow-md"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    {item.step}
                  </div>
                  <div className="ml-4 flex-grow">
                    <div className="flex justify-between items-start">
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <span className="text-sm text-gray-500 font-medium">{item.time}</span>
                    </div>
                    <p className="text-gray-700">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">
              Shopify Optimization FAQs
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg overflow-hidden"
                >
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                    className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-semibold text-gray-800">{faq.question}</span>
                    <span className="text-gray-400">
                      {expandedFaq === index ? '−' : '+'}
                    </span>
                  </button>
                  {expandedFaq === index && (
                    <div className="px-6 py-4 bg-gray-50 text-gray-700">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-green-600 to-blue-600 text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Accelerate Your Shopify Revenue?
            </h2>
            <p className="text-xl mb-8 text-green-50">
              Get your free speed audit and see exactly how much revenue you're losing to slow load times.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <BookingLink
                type="discovery"
                className="inline-block px-8 py-4 bg-white text-green-600 font-bold rounded-lg hover:bg-gray-100 transition-all"
                onClick={() => trackButtonClick('shopify_cta_audit', 'footer')}
              >
                Get Free 15-Min Audit →
              </BookingLink>
              <Link
                href="/quick-fixes"
                className="inline-block px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-green-600 transition-all"
              >
                View Quick Fix Packages
              </Link>
            </div>
            <p className="mt-8 text-sm text-green-100">
              Join 30+ Shopify stores that have optimized their speed and conversions with Forgewise
            </p>
          </div>
        </section>
      </div>
    </>
  );
}