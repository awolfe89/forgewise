import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import NextSEO from '../src/components/NextSEO';
import { BookingLink } from '../src/components/ProtectedContact';
import { trackButtonClick, trackEvent } from '../src/utils/tracking';

export default function EcommerceAudit() {
  const [selectedAudit, setSelectedAudit] = useState(null);
  const [formData, setFormData] = useState({
    website: '',
    revenue: '',
    email: ''
  });

  const seoData = {
    title: 'E-Commerce Growth Audit Services | Find $100K+ in Hidden Revenue',
    description: 'Professional e-commerce audit services that uncover revenue leaks and growth opportunities. Average client finds $100K+ in recoverable revenue. Free 15-minute assessment.',
    canonical: 'https://forgewise.io/ecommerce-audit',
    openGraph: {
      title: 'E-Commerce Growth Audit - Find Hidden Revenue',
      description: 'Comprehensive e-commerce audit that identifies conversion leaks, technical issues, and growth opportunities. Average $100K+ revenue recovery.',
      url: 'https://forgewise.io/ecommerce-audit',
    }
  };

  const auditTypes = [
    {
      id: 'conversion',
      title: 'Conversion Rate Audit',
      icon: '📊',
      description: 'Deep-dive into your conversion funnel',
      focus: [
        'Cart abandonment analysis',
        'Checkout flow optimization',
        'Product page conversion',
        'Trust signal assessment',
        'Mobile UX evaluation'
      ],
      deliverables: [
        '47-point conversion checklist',
        'Heatmap & session analysis',
        'Competitor benchmarking',
        'Priority action plan',
        'ROI projections'
      ],
      typical_findings: '$50-150K in recoverable revenue'
    },
    {
      id: 'technical',
      title: 'Technical Performance Audit',
      icon: '⚡',
      description: 'Complete technical health check',
      focus: [
        'Site speed analysis',
        'Core Web Vitals assessment',
        'SEO technical audit',
        'Mobile responsiveness',
        'Security vulnerabilities'
      ],
      deliverables: [
        'Performance metrics report',
        'Technical debt assessment',
        'Infrastructure recommendations',
        'Speed optimization roadmap',
        'SEO improvement plan'
      ],
      typical_findings: '40-60% speed improvement potential'
    },
    {
      id: 'revenue',
      title: 'Revenue Recovery Audit',
      icon: '💰',
      description: 'Find and fix revenue leaks',
      focus: [
        'Abandoned cart recovery',
        'Email marketing gaps',
        'Pricing strategy analysis',
        'Upsell/cross-sell opportunities',
        'Customer retention issues'
      ],
      deliverables: [
        'Revenue leak analysis',
        'Recovery strategy blueprint',
        'Email automation plan',
        'Pricing optimization guide',
        'LTV improvement tactics'
      ],
      typical_findings: '15-25% revenue increase opportunity'
    },
    {
      id: 'complete',
      title: 'Complete Growth Audit',
      icon: '🚀',
      description: 'Comprehensive 360° analysis',
      focus: [
        'All conversion metrics',
        'Technical performance',
        'Revenue opportunities',
        'Marketing effectiveness',
        'Operational efficiency'
      ],
      deliverables: [
        'Executive summary report',
        '100+ point analysis',
        '90-day growth roadmap',
        'Quick win opportunities',
        'Long-term strategy plan'
      ],
      typical_findings: '$100-500K in growth opportunities'
    }
  ];

  const auditProcess = [
    {
      phase: 'Discovery',
      duration: '2-3 days',
      activities: [
        'Analytics deep-dive',
        'Customer journey mapping',
        'Competitor analysis',
        'Technical assessment'
      ]
    },
    {
      phase: 'Analysis',
      duration: '3-4 days',
      activities: [
        'Data synthesis',
        'Problem prioritization',
        'ROI calculations',
        'Solution development'
      ]
    },
    {
      phase: 'Delivery',
      duration: '1 day',
      activities: [
        'Report presentation',
        'Action plan review',
        'Q&A session',
        'Implementation guidance'
      ]
    }
  ];

  const metrics = [
    { value: '250+', label: 'E-commerce audits completed' },
    { value: '$47M', label: 'Revenue recovered for clients' },
    { value: '3.2x', label: 'Average ROI from recommendations' },
    { value: '89%', label: 'Issues fixed within 90 days' }
  ];

  const commonIssues = [
    { issue: 'Slow page load speed', impact: '7% conversion loss per second', frequency: '78%' },
    { issue: 'Complex checkout process', impact: '23% cart abandonment', frequency: '65%' },
    { issue: 'Poor mobile experience', impact: '35% of potential revenue', frequency: '71%' },
    { issue: 'Missing trust signals', impact: '15% conversion loss', frequency: '82%' },
    { issue: 'Weak email automation', impact: '$30-50 per customer', frequency: '69%' },
    { issue: 'No upsell strategy', impact: '10-30% AOV increase', frequency: '74%' }
  ];

  const handleQuickAssessment = (e) => {
    e.preventDefault();
    trackEvent('quick_assessment_submitted', {
      website: formData.website,
      revenue_range: formData.revenue
    });
    trackButtonClick('quick_assessment', 'ecommerce_audit');
    alert('Thank you! We\'ll send your quick assessment within 24 hours.');
    setFormData({ website: '', revenue: '', email: '' });
  };

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
            "name": "E-Commerce Growth Audit Services",
            "description": "Comprehensive e-commerce audits that identify revenue opportunities and optimization strategies",
            "provider": {
              "@type": "Organization",
              "name": "Forgewise"
            },
            "areaServed": "United States",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "E-Commerce Audit Services",
              "itemListElement": auditTypes.map(audit => ({
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": audit.title,
                  "description": audit.description
                }
              }))
            }
          })
        }}
      />

      <div className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-purple-700 to-indigo-700 text-white py-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                E-Commerce Growth Audit Services
              </h1>
              <p className="text-xl mb-4 text-purple-100 max-w-3xl mx-auto">
                Uncover $100K+ in hidden revenue with our B2B-focused e-commerce audit.
                We analyze 100+ growth factors specific to B2B and traditional businesses.
              </p>
              <p className="text-lg mb-8 text-purple-200">
                Most stores are losing 20-40% of potential revenue. Find out how much you're leaving on the table.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <BookingLink
                  type="audit15min"
                  className="inline-block px-8 py-4 bg-white text-purple-700 font-bold rounded-lg hover:bg-gray-100 transition-all"
                  onClick={() => trackButtonClick('free_audit_hero', 'ecommerce_audit')}
                >
                  Get Free 15-Min Assessment →
                </BookingLink>
                <a
                  href="#quick-assessment"
                  className="inline-block px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-purple-700 transition-all"
                >
                  Quick Self-Assessment
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
              {metrics.map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold mb-2">{metric.value}</div>
                  <div className="text-sm text-purple-200">{metric.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Common Issues */}
        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-4">
              Revenue Leaks We Find in 90% of E-Commerce Stores
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12">
              These common issues are costing you thousands every month
            </p>
            <div className="bg-red-50 rounded-xl p-8">
              <div className="space-y-4">
                {commonIssues.map((item, index) => (
                  <div key={index} className="flex items-start justify-between border-b border-red-100 pb-4 last:border-0">
                    <div className="flex-grow">
                      <h3 className="font-semibold text-gray-800 mb-1">{item.issue}</h3>
                      <p className="text-red-600 font-medium">Lost revenue: {item.impact}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-gray-700">{item.frequency}</div>
                      <div className="text-xs text-gray-500">of stores affected</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="text-center mt-8">
              <p className="text-lg text-gray-700 font-medium">
                Total potential revenue recovery: <span className="text-green-600 text-2xl">$50,000 - $200,000/year</span>
              </p>
            </div>
          </div>
        </section>

        {/* Audit Types */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-4">
              Choose Your E-Commerce Audit Type
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12">
              Targeted audits for B2B companies and traditional businesses going digital
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              {auditTypes.map((audit) => (
                <motion.div
                  key={audit.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className={`bg-white rounded-xl p-8 shadow-lg cursor-pointer transition-all hover:shadow-xl ${
                    selectedAudit === audit.id ? 'ring-4 ring-purple-500' : ''
                  }`}
                  onClick={() => setSelectedAudit(audit.id)}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <span className="text-4xl">{audit.icon}</span>
                      <h3 className="text-2xl font-bold mt-3">{audit.title}</h3>
                    </div>
                    {audit.id === 'complete' && (
                      <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    )}
                  </div>
                  <p className="text-gray-600 mb-4">{audit.description}</p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-2">Focus Areas:</h4>
                    <ul className="space-y-1">
                      {audit.focus.slice(0, 3).map((item, i) => (
                        <li key={i} className="text-sm text-gray-600 flex items-start">
                          <span className="text-green-500 mr-2">✓</span>
                          {item}
                        </li>
                      ))}
                      {audit.focus.length > 3 && (
                        <li className="text-sm text-gray-500 italic">
                          +{audit.focus.length - 3} more areas
                        </li>
                      )}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-sm font-semibold text-purple-600 mb-3">
                      Typical findings: {audit.typical_findings}
                    </p>
                    <BookingLink
                      type="consultation"
                      className="block w-full py-3 bg-purple-600 text-white text-center font-semibold rounded-lg hover:bg-purple-700 transition-colors"
                      onClick={() => trackButtonClick(`audit_${audit.id}`, 'audit_selection')}
                    >
                      Start This Audit →
                    </BookingLink>
                  </div>

                  {selectedAudit === audit.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      className="mt-6 pt-6 border-t border-gray-200"
                    >
                      <h4 className="font-semibold text-gray-800 mb-2">Deliverables:</h4>
                      <ul className="space-y-1">
                        {audit.deliverables.map((item, i) => (
                          <li key={i} className="text-sm text-gray-600 flex items-start">
                            <span className="text-purple-500 mr-2">→</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Timeline */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">
              Our E-Commerce Audit Process
            </h2>
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-purple-200"></div>
              {auditProcess.map((phase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative flex items-start mb-12 last:mb-0"
                >
                  <div className="flex-shrink-0 w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-xl z-10">
                    {index + 1}
                  </div>
                  <div className="ml-8 flex-grow bg-gray-50 rounded-lg p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-bold">{phase.phase}</h3>
                      <span className="text-sm text-gray-500 bg-white px-3 py-1 rounded-full">
                        {phase.duration}
                      </span>
                    </div>
                    <div className="grid md:grid-cols-2 gap-3">
                      {phase.activities.map((activity, i) => (
                        <div key={i} className="flex items-center text-gray-700">
                          <span className="text-purple-500 mr-2">•</span>
                          {activity}
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="text-center mt-12">
              <p className="text-lg text-gray-700">
                <strong>Total timeline:</strong> 5-7 business days from start to actionable recommendations
              </p>
            </div>
          </div>
        </section>

        {/* Quick Assessment Form */}
        <section id="quick-assessment" className="py-16 bg-gray-50">
          <div className="max-w-2xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-4">
              Get Your Quick Revenue Assessment
            </h2>
            <p className="text-xl text-gray-600 text-center mb-8">
              See how much revenue you're leaving on the table (takes 30 seconds)
            </p>
            <form onSubmit={handleQuickAssessment} className="bg-white rounded-xl shadow-lg p-8">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Website URL
                  </label>
                  <input
                    type="url"
                    required
                    value={formData.website}
                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                    placeholder="https://yourstore.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Monthly Revenue Range
                  </label>
                  <select
                    required
                    value={formData.revenue}
                    onChange={(e) => setFormData({ ...formData, revenue: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                  >
                    <option value="">Select range</option>
                    <option value="0-50k">$0 - $50K</option>
                    <option value="50k-100k">$50K - $100K</option>
                    <option value="100k-250k">$100K - $250K</option>
                    <option value="250k-500k">$250K - $500K</option>
                    <option value="500k+">$500K+</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                    placeholder="you@company.com"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-purple-600 text-white font-bold rounded-lg hover:bg-purple-700 transition-colors"
                >
                  Get My Free Assessment →
                </button>
                <p className="text-xs text-gray-500 text-center">
                  Free assessment delivered within 24 hours. No spam, ever.
                </p>
              </div>
            </form>
          </div>
        </section>

        {/* Results */}
        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">
              What You Get From Our E-Commerce Audit
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">📈</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Revenue Projections</h3>
                <p className="text-gray-600">
                  Detailed calculations showing exactly how much revenue you can recover
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🎯</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Priority Roadmap</h3>
                <p className="text-gray-600">
                  Step-by-step action plan prioritized by ROI and implementation effort
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🚀</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Quick Wins</h3>
                <p className="text-gray-600">
                  5-10 immediate changes you can implement today for instant results
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-br from-purple-700 to-indigo-700 text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Stop Losing Money to Hidden Revenue Leaks
            </h2>
            <p className="text-xl mb-8 text-purple-100">
              Our B2B-specialized audit identifies exactly where traditional businesses lose money online.
              Average B2B client recovers $100K+ in the first 90 days.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <BookingLink
                type="audit15min"
                className="inline-block px-8 py-4 bg-white text-purple-700 font-bold rounded-lg hover:bg-gray-100 transition-all"
                onClick={() => trackButtonClick('final_cta_audit', 'ecommerce_audit')}
              >
                Start Your Audit Today →
              </BookingLink>
              <Link
                href="/contact"
                className="inline-block px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-purple-700 transition-all"
              >
                Ask Questions First
              </Link>
            </div>
            <p className="mt-8 text-sm text-purple-200">
              100% money-back guarantee if we don't find at least $50K in opportunities
            </p>
          </div>
        </section>
      </div>
    </>
  );
}