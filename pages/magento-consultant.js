import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import NextSEO from '../src/components/NextSEO';
import { BookingLink } from '../src/components/ProtectedContact';
import { trackButtonClick, trackEvent } from '../src/utils/tracking';

export default function MagentoConsultant() {
  const [activeTab, setActiveTab] = useState('performance');

  const seoData = {
    title: 'Magento Optimization Consultant | Performance & Conversion Expert',
    description: 'Expert Magento 2 consultant specializing in performance optimization, conversion improvements, and technical solutions. Fix slow Magento stores and boost revenue.',
    canonical: 'https://forgewise.io/magento-consultant',
    openGraph: {
      title: 'Magento 2 Performance & Optimization Consultant',
      description: 'Transform your Magento store with expert optimization. Solve performance issues, increase conversions, and scale efficiently.',
      url: 'https://forgewise.io/magento-consultant',
    }
  };

  const services = {
    performance: {
      title: 'Performance Optimization',
      icon: '⚡',
      description: 'Make your Magento store lightning fast',
      services: [
        'Database optimization & query tuning',
        'Varnish cache configuration',
        'Redis/Elasticsearch optimization',
        'CDN implementation & tuning',
        'Image optimization pipeline',
        'JavaScript/CSS optimization',
        'Third-party extension audit',
        'Server infrastructure optimization'
      ],
      results: [
        '60% average speed improvement',
        'Sub-2 second page loads',
        '90+ PageSpeed scores',
        '40% server cost reduction'
      ]
    },
    conversion: {
      title: 'SEO & Marketing',
      icon: '📈',
      description: 'Drive traffic and increase visibility',
      services: [
        'SEO optimization & audits',
        'Keyword research & strategy',
        'Google Ads campaign management',
        'Product page SEO',
        'Search & navigation UX',
        'Mobile experience optimization',
        'Schema markup implementation',
        'Content optimization'
      ],
      results: [
        'Increased organic traffic',
        'Improved search rankings',
        'Better ad performance',
        'Higher conversion rates'
      ]
    },
    technical: {
      title: 'Technical Solutions',
      icon: '🔧',
      description: 'Solve complex Magento challenges',
      services: [
        'Layout & design optimization',
        'Search functionality fixes',
        'Product maintenance & updates',
        'Product filtering & attributes',
        'Configurable products setup',
        'Multi-store configuration',
        'B2B functionality setup',
        'Extension conflicts resolution'
      ],
      results: [
        '99.9% uptime achieved',
        'Zero security breaches',
        'Improved product management',
        'Enhanced search experience'
      ]
    },
    maintenance: {
      title: 'Ongoing Support',
      icon: '🛡️',
      description: 'Keep your store running smoothly',
      services: [
        'Monthly performance audits',
        'Security patch management',
        'Extension updates & testing',
        'Backup & disaster recovery',
        '24/7 monitoring setup',
        'Emergency support',
        'Growth consulting',
        'Team training'
      ],
      results: [
        '24/7 peace of mind',
        'Proactive issue prevention',
        'Continuous improvement',
        'Expert on-demand support'
      ]
    }
  };

  const magentoIssues = [
    {
      problem: 'Slow Category Pages',
      cause: 'Unoptimized database queries',
      solution: 'Query optimization & caching',
      impact: '45% speed improvement'
    },
    {
      problem: 'High Cart Abandonment',
      cause: 'Complex checkout process',
      solution: 'One-page checkout optimization',
      impact: '22% recovery rate increase'
    },
    {
      problem: 'Poor Mobile Performance',
      cause: 'Heavy JavaScript execution',
      solution: 'Progressive Web App implementation',
      impact: '3x mobile conversion boost'
    },
    {
      problem: 'Indexing Issues',
      cause: 'Improper cron configuration',
      solution: 'Asynchronous indexing setup',
      impact: '80% faster catalog updates'
    },
    {
      problem: 'Extension Conflicts',
      cause: 'Incompatible third-party modules',
      solution: 'Code refactoring & compatibility fixes',
      impact: 'Stable, error-free operation'
    },
    {
      problem: 'High Server Costs',
      cause: 'Inefficient resource usage',
      solution: 'Infrastructure optimization',
      impact: '40% cost reduction'
    }
  ];

  const expertise = [
    { skill: 'Magento 2.4.x', level: 100 },
    { skill: 'Performance Tuning', level: 95 },
    { skill: 'Custom Development', level: 90 },
    { skill: 'Adobe Commerce', level: 85 },
    { skill: 'B2B Commerce', level: 88 },
    { skill: 'PWA Studio', level: 82 }
  ];

  const caseStudies = [
    {
      client: 'Electronics Retailer',
      challenge: 'Site crashing during sales',
      solution: 'Infrastructure overhaul & caching',
      results: [
        'Handled 10x traffic spikes',
        '$2.4M sales in 24 hours',
        'Zero downtime achieved'
      ]
    },
    {
      client: 'Fashion Brand',
      challenge: '8-second page loads',
      solution: 'Complete performance optimization',
      results: [
        '1.9s average load time',
        '41% conversion increase',
        '65% mobile revenue growth'
      ]
    },
    {
      client: 'B2B Distributor',
      challenge: 'Complex pricing rules',
      solution: 'Custom B2B functionality',
      results: [
        'Automated quote system',
        '3x faster order processing',
        '$500K operational savings'
      ]
    }
  ];

  return (
    <>
      <NextSEO {...seoData} />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "Magento Optimization Consultant",
            "description": "Expert Magento 2 consulting services for performance optimization and conversion improvement",
            "provider": {
              "@type": "Organization",
              "name": "Forgewise"
            },
            "areaServed": "United States",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Magento Consulting Services",
              "itemListElement": Object.keys(services).map(key => ({
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": services[key].title,
                  "description": services[key].description
                }
              }))
            }
          })
        }}
      />

      <div className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-orange-600 to-red-600 text-white py-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Magento Optimization Consultant
                </h1>
                <p className="text-xl mb-8 text-orange-50">
                  Fix your slow Magento store. Expert performance optimization,
                  conversion improvements, and technical solutions for Magento 2.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">✓</span>
                    <span>Certified Magento Solution Specialist</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">✓</span>
                    <span>15+ Magento stores optimized</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">✓</span>
                    <span>Adobe Commerce Partner</span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <BookingLink
                    type="discovery"
                    className="inline-block px-8 py-4 bg-white text-orange-600 font-bold rounded-lg hover:bg-gray-100 transition-all text-center"
                    onClick={() => trackButtonClick('magento_consultation', 'hero')}
                  >
                    Free Magento Assessment →
                  </BookingLink>
                  <a
                    href="#quick-audit"
                    className="inline-block px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-orange-600 transition-all text-center"
                  >
                    Quick Performance Check
                  </a>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-6">Our Magento Expertise</h3>
                <div className="space-y-4">
                  {expertise.map((item, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium">{item.skill}</span>
                        <span>{item.level}%</span>
                      </div>
                      <div className="w-full bg-white/20 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${item.level}%` }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className="bg-white h-2 rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Common Magento Issues */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-4">
              Common Magento Problems We Solve
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12">
              Don't let these issues cost you revenue
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {magentoIssues.map((issue, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow"
                >
                  <h3 className="font-bold text-red-600 mb-2">❌ {issue.problem}</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    <strong>Cause:</strong> {issue.cause}
                  </p>
                  <p className="text-sm text-green-600 mb-2">
                    <strong>✓ Solution:</strong> {issue.solution}
                  </p>
                  <p className="text-sm font-semibold text-gray-800">
                    Impact: {issue.impact}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Tabs */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">
              Comprehensive Magento Consulting Services
            </h2>

            {/* Tab Navigation */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {Object.keys(services).map((key) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                    activeTab === key
                      ? 'bg-orange-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-orange-50'
                  }`}
                >
                  {services[key].icon} {services[key].title}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-xl shadow-lg p-8"
            >
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4">
                    {services[activeTab].icon} {services[activeTab].title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {services[activeTab].description}
                  </p>
                  <h4 className="font-semibold mb-3">What We Do:</h4>
                  <ul className="space-y-2">
                    {services[activeTab].services.map((service, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-orange-500 mr-2 mt-1">→</span>
                        <span className="text-gray-700">{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-lg p-6">
                  <h4 className="font-semibold mb-4 text-lg">Expected Results:</h4>
                  <div className="space-y-4">
                    {services[activeTab].results.map((result, index) => (
                      <div
                        key={index}
                        className="bg-white rounded-lg p-4 shadow-sm"
                      >
                        <div className="flex items-center">
                          <span className="text-green-500 text-2xl mr-3">✓</span>
                          <span className="font-medium text-gray-800">{result}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6">
                    <BookingLink
                      type="consultation"
                      className="block w-full py-3 bg-orange-600 text-white text-center font-bold rounded-lg hover:bg-orange-700 transition-colors"
                      onClick={() => trackButtonClick(`magento_service_${activeTab}`, 'services')}
                    >
                      Discuss {services[activeTab].title} →
                    </BookingLink>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">
              Magento Success Stories
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {caseStudies.map((study, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-50 to-orange-50 rounded-xl p-8 shadow-lg"
                >
                  <h3 className="text-xl font-bold mb-3">{study.client}</h3>
                  <div className="mb-4">
                    <p className="text-sm text-gray-600 mb-2">
                      <strong>Challenge:</strong> {study.challenge}
                    </p>
                    <p className="text-sm text-gray-600">
                      <strong>Solution:</strong> {study.solution}
                    </p>
                  </div>
                  <div className="border-t pt-4">
                    <p className="font-semibold mb-2">Results:</p>
                    <ul className="space-y-2">
                      {study.results.map((result, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span>
                          <span className="text-sm font-medium">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Audit Form */}
        <section id="quick-audit" className="py-16 bg-gray-50">
          <div className="max-w-2xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-4">
              Free Magento Performance Check
            </h2>
            <p className="text-xl text-gray-600 text-center mb-8">
              Get instant insights into your Magento store's performance
            </p>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  trackEvent('magento_quick_audit', { source: 'landing_page' });
                  alert('Thank you! We\'ll analyze your store and send recommendations within 24 hours.');
                }}
                className="space-y-6"
              >
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Magento Store URL
                  </label>
                  <input
                    type="url"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
                    placeholder="https://yourstore.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Main Issue You're Facing
                  </label>
                  <select
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
                  >
                    <option value="">Select an issue</option>
                    <option value="speed">Slow page loads</option>
                    <option value="conversion">Low conversion rates</option>
                    <option value="errors">Frequent errors/crashes</option>
                    <option value="scaling">Scaling problems</option>
                    <option value="maintenance">High maintenance costs</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
                    placeholder="you@company.com"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-orange-600 text-white font-bold rounded-lg hover:bg-orange-700 transition-colors"
                >
                  Get Free Performance Analysis →
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">
              Why Choose Forgewise for Magento
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600 font-bold text-xl">
                  1
                </div>
                <div className="ml-4">
                  <h3 className="font-bold mb-2">Deep Magento Expertise</h3>
                  <p className="text-gray-600">
                    11+ years exclusively with Magento/Adobe Commerce. We know every optimization trick.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600 font-bold text-xl">
                  2
                </div>
                <div className="ml-4">
                  <h3 className="font-bold mb-2">Performance Guarantee</h3>
                  <p className="text-gray-600">
                    We guarantee specific performance improvements or you don't pay.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600 font-bold text-xl">
                  3
                </div>
                <div className="ml-4">
                  <h3 className="font-bold mb-2">Emergency Support</h3>
                  <p className="text-gray-600">
                    24/7 emergency support for critical issues. Your store never sleeps, neither do we.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600 font-bold text-xl">
                  4
                </div>
                <div className="ml-4">
                  <h3 className="font-bold mb-2">ROI Focus</h3>
                  <p className="text-gray-600">
                    Every optimization is tied to revenue impact. Average 3-5x ROI within 90 days.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-orange-600 to-red-600 text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Fix Your Magento Store Today
            </h2>
            <p className="text-xl mb-8 text-orange-50">
              Stop losing revenue to performance issues. Get expert Magento optimization
              that delivers measurable results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <BookingLink
                type="discovery"
                className="inline-block px-8 py-4 bg-white text-orange-600 font-bold rounded-lg hover:bg-gray-100 transition-all"
                onClick={() => trackButtonClick('magento_final_cta', 'footer')}
              >
                Get Free Magento Assessment →
              </BookingLink>
              <Link
                href="/contact"
                className="inline-block px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-orange-600 transition-all"
              >
                Discuss Your Project
              </Link>
            </div>
            <p className="mt-8 text-sm text-orange-100">
              Trusted by 15+ Magento stores
            </p>
          </div>
        </section>
      </div>
    </>
  );
}