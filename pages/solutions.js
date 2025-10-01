import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { StaggerContainer, StaggerItem } from '../src/components/AnimatedComponents';
import NextSEO from '../src/components/NextSEO';
import { getPageSEO } from '../src/config/seo';

export default function Solutions() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = [
    { id: 'all', label: 'All Solutions', color: 'gray' },
    { id: 'conversion', label: 'Conversion Systems', color: 'emerald' },
    { id: 'performance', label: 'Speed & Core Web Vitals', color: 'blue' },
    { id: 'analytics', label: 'Data & Analytics Layer', color: 'purple' },
    { id: 'lifecycle', label: 'Lifecycle & LTV', color: 'orange' }
  ];

  const solutions = [
    {
      id: 'checkout-optimization',
      title: 'Checkout & Cart Recovery',
      category: 'conversion',
      description: 'Reduce abandonment by 40% with smart checkout flows and recovery systems',
      problem: 'Losing 70% of potential customers at checkout',
      solution: 'Optimized checkout flow with smart recovery triggers that bring customers back',
      platforms: 'Shopify Plus, Magento 2, BigCommerce',
      image: '/content-cannon.png',
      metrics: [
        { label: 'Recovery Rate', value: '42%', trend: 'up' },
        { label: 'Revenue Saved', value: '$21K/mo', trend: 'up' },
        { label: 'Implementation', value: '2 weeks' }
      ],
      features: [
        'Real-time abandonment prediction',
        'Personalized recovery offers',
        'Multi-channel outreach',
        'A/B testing framework'
      ],
      techStack: ['React', 'Node.js', 'TensorFlow', 'Segment'],
      caseStudyUrl: '/results#armoranimalhealth',
      buttonText: 'See Cart Recovery Results'
    },
    {
      id: 'product-page-optimization',
      title: 'Product Page Conversion',
      category: 'conversion',
      description: 'Automated inventory system that predicts demand and optimizes stock levels',
      problem: 'Manual inventory management causing $100K+ in dead stock and stockouts',
      solution: 'Machine learning system that analyzes sales patterns and automatically adjusts inventory',
      image: '/invDash.png',
      metrics: [
        { label: 'Dead Stock', value: '-35%', trend: 'down' },
        { label: 'Stockouts', value: '-45%', trend: 'down' },
        { label: 'Cash Flow', value: '+$48K' }
      ],
      features: [
        'Demand forecasting',
        'Automatic reordering',
        'Supplier integration',
        'Real-time alerts'
      ],
      techStack: ['Python', 'PostgreSQL', 'Redis', 'AWS'],
      caseStudyUrl: '/results/vsiswine',
      buttonText: 'View Inventory Case Study'
    },
    {
      id: 'speed-optimization',
      title: 'Site Speed & Core Web Vitals',
      category: 'performance',
      description: 'Get LCP under 2.5s and pass all Core Web Vitals',
      problem: 'Every second of load time costs 7% in conversions',
      solution: 'Complete performance overhaul that gets you to sub-3 second load times',
      platforms: 'All platforms',
      description: 'Unified dashboard that reveals actionable customer insights from all touchpoints',
      problem: 'Data scattered across 8 tools, no clear picture of customer journey',
      solution: 'Central platform that aggregates and visualizes customer data with AI-powered insights',
      image: '/ad-intelligence.png',
      metrics: [
        { label: 'Data Sources', value: '12', trend: 'up' },
        { label: 'Time Saved', value: '15hrs/week' },
        { label: 'ROI', value: '180%' }
      ],
      features: [
        'Unified customer view',
        'Predictive analytics',
        'Automated reporting',
        'Custom alerts'
      ],
      techStack: ['Vue.js', 'Python', 'BigQuery', 'Tableau'],
      caseStudyUrl: '/results/voltech',
      buttonText: 'Check Speed Improvements'
    },
    {
      id: 'analytics-tracking',
      title: 'Analytics & Attribution Setup',
      category: 'analytics',
      description: 'GA4, server-side tracking, and complete attribution modeling',
      problem: 'Flying blind with broken tracking and no idea what drives revenue',
      solution: 'Complete analytics layer with server-side tracking and custom dashboards',
      platforms: 'Platform agnostic',
      description: 'AI-driven pricing that maximizes revenue while maintaining competitiveness',
      problem: 'Static pricing leaving money on table, losing to competitors on key products',
      solution: 'Smart pricing engine that adjusts based on demand, competition, and inventory',
      image: '/comparison-chart.png',
      metrics: [
        { label: 'Revenue', value: '+23%', trend: 'up' },
        { label: 'Margin', value: '+18%', trend: 'up' },
        { label: 'Competitiveness', value: '95%' }
      ],
      features: [
        'Competitor monitoring',
        'Demand-based pricing',
        'Margin protection',
        'Rule engine'
      ],
      techStack: ['Python', 'Redis', 'PostgreSQL', 'Kubernetes'],
      caseStudyUrl: '/results/technimark',
      buttonText: 'Explore Analytics Setup'
    },
    {
      id: 'email-retention',
      title: 'Email & SMS Automation',
      category: 'lifecycle',
      description: 'Turn one-time buyers into repeat customers with automated flows',
      problem: 'Customers buy once and never come back',
      solution: 'Complete retention system with personalized email/SMS flows',
      platforms: 'Klaviyo, Sendlane, Omnisend',
      description: 'Email platform that creates unique content for each subscriber automatically',
      problem: 'Generic emails getting 12% open rates, minimal engagement',
      solution: 'AI system that generates personalized content based on behavior and preferences',
      image: '/aah_ai_email_screen.png',
      metrics: [
        { label: 'Open Rate', value: '47%', trend: 'up' },
        { label: 'Click Rate', value: '18%', trend: 'up' },
        { label: 'Revenue/Email', value: '+85%' }
      ],
      features: [
        'Content personalization',
        'Send time optimization',
        'Subject line testing',
        'Behavioral triggers'
      ],
      techStack: ['Node.js', 'React', 'GPT-4', 'SendGrid'],
      caseStudyUrl: '/results/grubs',
      buttonText: 'See Email Results'
    },
    {
      id: 'customer-data-platform',
      title: 'Customer Data Platform',
      category: 'analytics',
      description: 'Unified customer view across all touchpoints',
      problem: 'Data scattered across 8+ tools with no single source of truth',
      solution: 'Central platform that unifies and activates customer data',
      platforms: 'Segment, Rudderstack, custom CDP',
      description: 'Continuous testing platform that finds and implements winning variations',
      problem: 'Conversion rate stuck at 1.8% despite traffic growth',
      solution: 'Automated testing framework that continuously improves conversion rates',
      image: '/neptune.png',
      metrics: [
        { label: 'Conversion Rate', value: '3.2%', trend: 'up' },
        { label: 'Tests/Month', value: '24' },
        { label: 'Revenue Lift', value: '+$32K/mo' }
      ],
      features: [
        'Multivariate testing',
        'Heatmap analysis',
        'User recordings',
        'Statistical significance'
      ],
      techStack: ['JavaScript', 'Python', 'Google Optimize', 'Hotjar'],
      caseStudyUrl: '/results/technimark',
      buttonText: 'View CDP Implementation'
    }
  ];

  const filteredSolutions = selectedCategory === 'all'
    ? solutions
    : solutions.filter(s => s.category === selectedCategory);

  const seoData = getPageSEO('/solutions');

  return (
    <>
      <NextSEO {...seoData} />
      
      <div className="min-h-screen pt-20">
        {/* Header */}
        <section className="relative py-24 bg-gray-50">
          {/* Grid pattern background */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `repeating-linear-gradient(0deg, #000 0px, transparent 1px, transparent 40px, #000 41px),
                               repeating-linear-gradient(90deg, #000 0px, transparent 1px, transparent 40px, #000 41px)`
            }}></div>
          </div>
          <div className="relative max-w-7xl mx-auto px-6">
            <motion.h1
              initial={{ opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold mb-4 text-center text-gray-900"
            >
              Custom Solutions That Scale
            </motion.h1>
            <motion.p
              initial={{ opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl max-w-3xl mx-auto text-center text-gray-600"
            >
              We build what drives revenue. Nothing that doesn't. Everything pays for itself.
            </motion.p>
          </div>
        </section>

        {/* Forge Audit CTA */}
        <section className="py-16 bg-white border-b">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-full mb-6">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold mb-4">Start with a 60-Minute Forge Audit</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Discovery → Analysis → Custom Roadmap
            </p>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="text-3xl mb-2">🔍</div>
                <h3 className="font-bold mb-2">Discovery</h3>
                <p className="text-gray-600">Deep dive into your metrics, tech stack, and biggest revenue leaks</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">📊</div>
                <h3 className="font-bold mb-2">Analysis</h3>
                <p className="text-gray-600">Identify quick wins and long-term opportunities with clear ROI</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🗺️</div>
                <h3 className="font-bold mb-2">Roadmap</h3>
                <p className="text-gray-600">Get a prioritized plan with timeline and expected results</p>
              </div>
            </div>
            <Link
              href="/contact/"
              className="inline-flex items-center justify-center px-8 py-4 bg-blue-700 text-white text-lg font-medium rounded-lg hover:bg-blue-800 transition-all transform hover:scale-105 shadow-xl"
            >
              Book Your Forge Audit →
            </Link>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 bg-gray-50 sticky top-20 z-10 shadow-sm">
          <div className="max-w-7xl mx-auto px-6">
            <div className="relative">
              {/* Gradient fade indicators for mobile scroll */}
              <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-gray-50 to-transparent pointer-events-none md:hidden z-10"></div>
              <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none md:hidden z-10"></div>

              <div className="flex md:flex-wrap md:justify-center gap-4 overflow-x-auto md:overflow-x-visible pb-2 md:pb-0 scrollbar-hide">
                {categories.map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-6 py-3 rounded-full font-medium transition-all whitespace-nowrap flex-shrink-0 ${
                      selectedCategory === cat.id
                        ? 'bg-blue-700 text-white shadow-lg'
                        : 'bg-white text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>
        {/* Projects Grid */}
        <StaggerContainer className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence mode="popLayout">
                {filteredSolutions.map((solution, index) => (
                  <StaggerItem
                    key={solution.id}
                    index={index}
                  >
                    <div
                      role="button"
                      tabIndex={0}
                      className="bg-white rounded-xl shadow-lg p-6 cursor-pointer hover:shadow-2xl transition-shadow h-full flex flex-col focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                      onClick={() => setSelectedProject(solution)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          setSelectedProject(solution);
                        }
                      }}
                      aria-label={`View details for ${solution.title}`}
                    >
                      {/* Card Header */}
                      <h3 className="text-xl font-bold mb-2">{solution.title}</h3>
                      <p className="text-gray-600 text-sm mb-4">{solution.description}</p>

                      {/* Category Tag */}
                      <div className="mb-4">
                        <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                          solution.category === 'conversion' ? 'bg-emerald-100 text-emerald-700' :
                          solution.category === 'performance' ? 'bg-blue-100 text-blue-700' :
                          solution.category === 'analytics' ? 'bg-purple-100 text-purple-700' :
                          solution.category === 'lifecycle' ? 'bg-orange-100 text-orange-700' :
                          'bg-gray-100 text-gray-700'
                        }`}>
                          {categories.find(c => c.id === solution.category)?.label || solution.category}
                        </span>
                      </div>
                      
                      {/* Problem & Solution */}
                      <div className="space-y-3 mb-4">
                        <div>
                          <p className="text-sm font-medium text-red-600">Problem:</p>
                          <p className="text-sm text-gray-700">{solution.problem}</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-green-600">Solution:</p>
                          <p className="text-sm text-gray-700">{solution.solution}</p>
                        </div>
                      </div>

                      {/* Platforms */}
                      {solution.platforms && (
                        <div className="mb-4 pb-4 border-b">
                          <p className="text-xs text-gray-500 mb-1">Platforms:</p>
                          <p className="text-sm text-gray-700">{solution.platforms}</p>
                        </div>
                      )}
                      
                      {/* Metrics */}
                      {solution.metrics && (
                        <div className="grid grid-cols-2 gap-4 mb-6">
                          {solution.metrics.slice(0, 2).map((metric, i) => (
                            <div key={i} className="text-center">
                              <p className="text-2xl font-bold text-emerald-600">{metric.value}</p>
                              <p className="text-sm text-gray-600">{metric.label}</p>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Features */}
                      {solution.features && (
                        <div className="flex-grow">
                          <p className="text-sm text-gray-600 mb-3">What's Included:</p>
                          <ul className="space-y-1">
                            {solution.features.slice(0, 3).map((feature, i) => (
                              <li key={i} className="text-sm text-gray-700 flex items-start">
                                <span className="text-emerald-500 mr-2">✓</span>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Button */}
                      <Link href={solution.caseStudyUrl || "/results"} className="block w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium mt-6 text-center">
                        {solution.buttonText}
                      </Link>
                    </div>
                  </StaggerItem>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </StaggerContainer>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={e => e.stopPropagation()}
              >
                <div className="p-8">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h2 className="text-3xl font-bold mb-2">{selectedProject.title}</h2>
                      <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                        selectedProject.category === 'ecommerce' ? 'bg-indigo-100 text-indigo-700' :
                        selectedProject.category === 'automation' ? 'bg-teal-100 text-teal-700' :
                        selectedProject.category === 'analytics' ? 'bg-purple-100 text-purple-700' :
                        selectedProject.category === 'marketing' ? 'bg-orange-100 text-orange-700' :
                        'bg-gray-100 text-gray-700'
                      }`}>
                        {selectedProject.category.charAt(0).toUpperCase() + selectedProject.category.slice(1)}
                      </span>
                    </div>
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="text-gray-500 hover:text-gray-700"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="font-bold text-red-600 mb-2">The Problem</h3>
                      <p className="text-gray-700 mb-6">{selectedProject.problem}</p>
                      
                      <h3 className="font-bold text-green-600 mb-2">Our Solution</h3>
                      <p className="text-gray-700 mb-6">{selectedProject.solution}</p>
                      
                      <h3 className="font-bold text-gray-800 mb-3">Tech Stack</h3>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {selectedProject.techStack.map(tech => (
                          <span key={tech} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-bold text-gray-800 mb-3">Key Metrics</h3>
                      <div className="space-y-3">
                        {selectedProject.metrics.map((metric, i) => (
                          <div key={i} className="flex justify-between items-center p-3 bg-gray-50 rounded">
                            <span className="text-sm text-gray-600">{metric.label}</span>
                            <span className="text-lg font-bold text-indigo-600">{metric.value}</span>
                          </div>
                        ))}
                      </div>
                      
                      <h3 className="font-bold text-gray-800 mb-3 mt-6">Features</h3>
                      <ul className="space-y-2">
                        {selectedProject.features.map((feature, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-indigo-600 mr-2">✓</span>
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <div className="mt-8">
                        <Link
                          href={`/contact?project=${encodeURIComponent(selectedProject.title)}&category=${selectedProject.category}`}
                          className="block w-full py-3 bg-blue-700 text-white text-center rounded-lg hover:bg-blue-800 transition-colors font-medium"
                        >
                          Build Something Similar
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
        {/* Process Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">
              How We Build Your Solution
            </h2>
            
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔍</span>
                </div>
                <h3 className="font-bold mb-2">Discovery</h3>
                <p className="text-sm text-gray-600">Deep dive into your challenges and goals</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📐</span>
                </div>
                <h3 className="font-bold mb-2">Design</h3>
                <p className="text-sm text-gray-600">Architect the perfect solution</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔨</span>
                </div>
                <h3 className="font-bold mb-2">Build</h3>
                <p className="text-sm text-gray-600">Rapid development with regular updates</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📈</span>
                </div>
                <h3 className="font-bold mb-2">Optimize</h3>
                <p className="text-sm text-gray-600">Continuous improvement based on data</p>
              </div>
            </div>
          </div>
        </section>
        {/* CTA - Contained Card Style */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6">
            <div className="bg-gradient-to-br from-blue-800 to-emerald-800 text-white rounded-2xl p-12 text-center shadow-xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Build Your Solution?
              </h2>
              <p className="text-xl mb-8 text-blue-100">
                Let's discuss your challenges and design the perfect solution.
              </p>
              <Link
                href="/contact/"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-800 rounded-lg hover:bg-gray-100 transition-all font-medium"
              >
                Start Your Project →
              </Link>
            </div>
          </div>
        </section>

        {/* Bottom Trust Bar */}
        <section className="py-12 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-center md:text-left">
                <p className="text-gray-600">Trusted by 45+ businesses across 20+ industries</p>
              </div>
              <div className="flex gap-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-700">$2.5M+</div>
                  <div className="text-sm text-gray-600">Revenue Generated</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-700">3.8x</div>
                  <div className="text-sm text-gray-600">Past Results</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}