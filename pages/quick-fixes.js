import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { StaggerContainer, StaggerItem } from '../src/components/AnimatedComponents';
import { BookingLink } from '../src/components/ProtectedContact';
import NextSEO from '../src/components/NextSEO';
import { getPageSEO } from '../src/config/seo';

export default function QuickFixes() {
  const [activeCategory, setActiveCategory] = useState('all');

  const quickFixes = [
    {
      id: 'speed-sprint',
      category: 'performance',
      title: 'Speed Sprint',
      goal: 'LCP under 2.5s in 2 weeks',
      problem: 'Every second of load time costs you 7% in conversions',
      deliverables: [
        'Core Web Vitals audit & fixes',
        'Image optimization & next-gen formats',
        'Code splitting & lazy loading',
        'CDN implementation',
        'Database query optimization',
        'Before/after performance report'
      ],
      solution: 'Complete performance overhaul with measurable results',
      impact: '+15-25% conversion rate',
      timeline: '2 weeks',
      benefit: 'Immediate performance gains',
      icon: '⚡'
    },
    {
      id: 'cro-sprint',
      category: 'conversion',
      title: 'CRO Sprint',
      goal: 'Find & fix top 5 conversion leaks in 2 weeks',
      problem: 'Traffic isn\'t converting and you don\'t know why',
      deliverables: [
        'Heatmap & session recording analysis',
        'Conversion funnel audit',
        'Cart abandonment fixes',
        'Checkout optimization',
        'Trust signals & social proof',
        'A/B test recommendations'
      ],
      solution: 'Data-driven conversion optimization with quick wins',
      impact: '+20-35% conversion rate',
      timeline: '2 weeks',
      benefit: 'Data-driven improvements',
      icon: '📈'
    },
    {
      id: 'tracking-sprint',
      category: 'analytics',
      title: 'Tracking Sprint',
      goal: 'GA4 + server-side tagging + clean events in 1.5 weeks',
      problem: 'You\'re flying blind - no idea what\'s actually working',
      deliverables: [
        'GA4 migration & setup',
        'Server-side tracking via GTM',
        'Enhanced e-commerce tracking',
        'Custom conversion events',
        'Marketing attribution setup',
        'Dashboard & reporting templates'
      ],
      solution: 'Complete analytics setup so you can make data-driven decisions',
      impact: 'Finally see what drives revenue',
      timeline: '1.5 weeks',
      benefit: 'Clear visibility into performance',
      icon: '📊'
    },
    {
      id: 'retention-sprint',
      category: 'retention',
      title: 'Retention Sprint',
      goal: 'Email/SMS baseline flows in 2 weeks',
      problem: 'One-time buyers never come back',
      deliverables: [
        'Welcome series (5 emails)',
        'Abandoned cart sequence',
        'Post-purchase flow',
        'Win-back campaign',
        'SMS integration',
        'Segmentation strategy'
      ],
      solution: 'Automated retention system that brings customers back',
      impact: '+25-40% repeat purchase rate',
      timeline: '2 weeks',
      benefit: 'Automated customer retention',
      icon: '💌'
    },
  ];

  const categories = [
    { id: 'all', label: 'All Sprints', icon: '🎯' },
    { id: 'performance', label: 'Performance', icon: '⚡' },
    { id: 'conversion', label: 'Conversion', icon: '📈' },
    { id: 'analytics', label: 'Analytics', icon: '📊' },
    { id: 'retention', label: 'Retention', icon: '💌' }
  ];

  const filteredFixes = activeCategory === 'all' 
    ? quickFixes 
    : quickFixes.filter(fix => fix.category === activeCategory);

  const seoData = getPageSEO('/quick-fixes');

  return (
    <>
      <NextSEO {...seoData} />
      
      <div className="min-h-screen pt-20">
        {/* Header */}
        <section className="relative bg-white overflow-hidden py-24">
          {/* Unique diagonal split background */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-blue-50"></div>
            <div className="absolute top-0 right-0 w-1/2 h-full bg-emerald-50/30 transform skew-x-12"></div>
          </div>
          <div className="relative max-w-7xl mx-auto px-6 text-center">
            <span className="inline-block px-4 py-1 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium mb-4">
              ⚡ Fast Implementation
            </span>
            <motion.h1
              initial={{ opacity: 1, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold mb-4 text-gray-900"
            >
              Quick Wins for Growing E-Commerce
            </motion.h1>
            <motion.p
              initial={{ opacity: 1, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl max-w-2xl mx-auto text-gray-600">
              Perfect for $100K-$5M shops that need results fast.
              No 6-month roadmaps. No bloated retainers. Just fixes that work.
            </motion.p>
            <motion.div
              initial={{ opacity: 1, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-8"
            >
              <Link
                href="/contact/"
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-700 text-white text-lg font-medium rounded-lg hover:bg-blue-800 transition-all transform hover:scale-105 shadow-xl"
              >
                Book Your First Sprint →
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 bg-gray-50 sticky top-20 z-10 shadow-sm">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-3 rounded-full font-medium transition-all ${
                    activeCategory === category.id
                      ? 'bg-blue-700 text-white shadow-lg transform scale-105'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <span className="mr-2">{category.icon}</span>
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Fixes Grid */}
        <StaggerContainer className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-8">
              {filteredFixes.map((sprint, index) => (
                <StaggerItem key={sprint.id} index={index}>
                  <motion.div
                    layout
                    className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all h-full flex flex-col border border-gray-200"
                  >
                    {/* Sprint Header */}
                    <div className="p-6 border-b border-gray-200">
                      <div className="mb-4">
                        <div className="text-4xl">{sprint.icon}</div>
                      </div>
                      <h3 className="text-2xl font-bold mb-2">{sprint.title}</h3>
                      {sprint.goal && (
                        <div className="bg-emerald-100 text-emerald-800 inline-block px-3 py-1 rounded-full text-sm font-medium">
                          {sprint.goal}
                        </div>
                      )}
                    </div>

                    {/* Sprint Content */}
                    <div className="p-6 flex-grow space-y-4">
                      <div>
                        <p className="text-sm font-medium text-red-600 mb-1">The Problem:</p>
                        <p className="text-gray-700">{sprint.problem}</p>
                      </div>

                      {sprint.deliverables ? (
                        <div>
                          <p className="text-sm font-medium text-blue-600 mb-2">Deliverables:</p>
                          <ul className="space-y-1">
                            {sprint.deliverables.slice(0, 4).map((item, idx) => (
                              <li key={idx} className="flex items-start text-sm text-gray-700">
                                <span className="text-emerald-500 mr-2">✓</span>
                                {item}
                              </li>
                            ))}
                            {sprint.deliverables.length > 4 && (
                              <li className="text-sm text-gray-500 italic">
                                +{sprint.deliverables.length - 4} more...
                              </li>
                            )}
                          </ul>
                        </div>
                      ) : (
                        <div>
                          <p className="text-sm font-medium text-green-600 mb-1">Solution:</p>
                          <p className="text-gray-700">{sprint.solution}</p>
                        </div>
                      )}
                    </div>

                    {/* Sprint Footer */}
                    <div className="p-6 bg-gray-50 border-t border-gray-200">
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                          <p className="text-sm text-gray-600">Typical Lift</p>
                          <p className="font-bold text-emerald-600">{sprint.impact}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Timeline</p>
                          <p className="font-bold text-gray-900">{sprint.timeline}</p>
                        </div>
                      </div>
                      {sprint.benefit && (
                        <p className="text-center text-sm text-gray-600 mb-4">
                          <span className="font-medium">✓ </span>{sprint.benefit}
                        </p>
                      )}
                      <BookingLink
                        type="discovery"
                        className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-all w-full"
                      >
                        Get Your Growth Assessment →
                      </BookingLink>
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </div>
          </div>
        </StaggerContainer>

        {/* How It Works */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">
              How Sprints Work
            </h2>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-bold text-lg">
                  1
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold mb-2">Choose Your Sprint</h3>
                  <p className="text-gray-600">
                    Pick the sprint that addresses your biggest pain point. Fixed scope, fixed timeline, clear deliverables.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-700 font-bold text-lg">
                  2
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold mb-2">Sprint Execution</h3>
                  <p className="text-gray-600">
                    We deliver everything promised within the timeline. Daily updates, no surprises, no scope creep.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center text-amber-700 font-bold text-lg">
                  3
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold mb-2">Measure & Scale</h3>
                  <p className="text-gray-600">
                    See the results, measure the impact. If it works, we can run another sprint to compound your gains.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Offerings */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-4">
              Choose Your Engagement Model
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12">
              Pick your fix. We build it. You profit.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="text-3xl mb-4">🚀</div>
                <h3 className="text-xl font-bold mb-3">Quick Sprint</h3>
                <p className="text-gray-600 mb-4">Perfect for urgent fixes and immediate improvements</p>
                <ul className="space-y-2 text-sm text-gray-700 mb-6">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Single focused improvement</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>3-7 day turnaround</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Measurable results</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Implementation included</span>
                  </li>
                </ul>
                <BookingLink
                  type="discovery"
                  className="block w-full py-2 bg-blue-700 text-white text-center rounded-lg hover:bg-blue-800 transition-colors text-sm font-medium"
                >
                  Get This Fix
                </BookingLink>
              </div>

              <div className="bg-emerald-50 rounded-xl p-6 border-2 border-emerald-200">
                <div className="text-3xl mb-4">📦</div>
                <h3 className="text-xl font-bold mb-3">Growth Package</h3>
                <p className="text-gray-600 mb-4">Bundle multiple improvements for compound impact</p>
                <ul className="space-y-2 text-sm text-gray-700 mb-6">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>3-5 big fixes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Prioritized roadmap</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>30-day execution</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Weekly progress reports</span>
                  </li>
                </ul>
                <BookingLink
                  type="discovery"
                  className="block w-full py-2 bg-blue-700 text-white text-center rounded-lg hover:bg-blue-800 transition-colors text-sm font-medium"
                >
                  Get This Fix
                </BookingLink>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <div className="text-3xl mb-4">🎯</div>
                <h3 className="text-xl font-bold mb-3">Fractional CMO</h3>
                <p className="text-gray-600 mb-4">Part-time CMO. Full-time results. No equity needed.</p>
                <ul className="space-y-2 text-sm text-gray-700 mb-6">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>10-20 hours/week</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Strategy & execution</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Team management</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Board-level reporting</span>
                  </li>
                </ul>
                <BookingLink
                  type="consultation"
                  className="block w-full py-2 bg-gray-800 text-white text-center rounded-lg hover:bg-gray-700 transition-colors text-sm font-medium"
                >
                  Get This Fix
                </BookingLink>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <div className="text-3xl mb-4">🏆</div>
                <h3 className="text-xl font-bold mb-3">Director of Marketing</h3>
                <p className="text-gray-600 mb-4">Full marketing department leadership and operations</p>
                <ul className="space-y-2 text-sm text-gray-700 mb-6">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>20-30 hours/week</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Campaign management</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Vendor coordination</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Performance optimization</span>
                  </li>
                </ul>
                <BookingLink
                  type="consultation"
                  className="block w-full py-2 bg-gray-800 text-white text-center rounded-lg hover:bg-gray-700 transition-colors text-sm font-medium"
                >
                  Get This Fix
                </BookingLink>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-4">Not sure which option is right for you?</p>
              <Link
                href="/contact/"
                className="inline-flex items-center justify-center px-6 py-3 bg-white border-2 border-blue-700 text-blue-700 rounded-lg hover:bg-blue-50 transition-all font-medium">
                Let's discuss your needs →
              </Link>
            </div>
          </div>
        </section>

        {/* CTA - Contained Card Style */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6">
            <div className="bg-gradient-to-br from-blue-800 to-emerald-800 text-white rounded-2xl p-12 text-center shadow-xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready for Quick Wins?
              </h2>
              <p className="text-xl mb-8 text-blue-100">
                Pick your fixes and start seeing results this week.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact/"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-800 rounded-lg hover:bg-gray-100 transition-all font-medium"
                >
                  Start With One Fix →
                </Link>
                <Link
                  href="/results/"
                  className="inline-flex items-center justify-center px-8 py-4 bg-emerald-700/20 backdrop-blur text-white border border-white/20 rounded-lg hover:bg-emerald-700/30 transition-all font-medium"
                >
                  See Case Studies
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-700">2-7 Days</div>
                <div className="text-gray-600 mt-2">Average Implementation</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-700">87%</div>
                <div className="text-gray-600 mt-2">Fix Success Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-700">3x</div>
                <div className="text-gray-600 mt-2">Typical Results</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-700">45+</div>
                <div className="text-gray-600 mt-2">Businesses Helped</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

