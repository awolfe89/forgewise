import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import contactConfig from '../config/contact';
import { BookingLink } from '../components/ProtectedContact';

export default function Contact() {
  const [selectedTier, setSelectedTier] = useState(null);
  const [modalTier, setModalTier] = useState(null);
  const [hoveredTier, setHoveredTier] = useState(null);

  const contactTiers = [
    {
      id: 'strategic',
      icon: '🎯',
      title: 'Strategic Assessment',
      subtitle: 'Comprehensive Analysis',
      description: 'Deep dive into your operations and opportunities',
      response: contactConfig.responseTimes.consultation,
      timeline: '1-2 weeks',
      color: 'indigo',
      bookingType: 'consultation',
      details: {
        overview: 'Our Strategic Assessment provides a comprehensive analysis of your current operations, technology stack, and market opportunities.',
        includes: [
          'Complete operational audit',
          'Technology stack evaluation',
          'Competitive analysis',
          'ROI opportunity mapping',
          'Prioritized action plan'
        ],
        ideal: 'Perfect for businesses ready to identify and prioritize high-impact improvements.',
        outcome: 'Detailed roadmap with specific recommendations, projected ROI, and implementation timeline.'
      }
    },
    {
      id: 'quickwin',
      icon: '⚡',
      title: 'Quick Win Project',
      subtitle: 'Fast Implementation',
      description: 'Rapid deployment of high-impact solutions',
      response: contactConfig.responseTimes.priority,
      timeline: '2-4 weeks',
      color: 'teal',
      bookingType: 'discovery',
      details: {
        overview: 'Quick Win Projects focus on implementing one specific solution that delivers immediate, measurable impact.',
        includes: [
          'Focused problem analysis',
          'Solution design & implementation',
          'Team training & handoff',
          'Performance monitoring setup',
          '30-day support period'
        ],
        ideal: 'Best for addressing specific pain points like cart abandonment, site speed, or PPC optimization.',
        outcome: 'Fully implemented solution with measurable improvements within weeks.'
      }
    },
    {
      id: 'transformation',
      icon: '🚀',
      title: 'Full Transformation',
      subtitle: 'End-to-End Solution',
      description: 'Comprehensive business transformation',
      response: contactConfig.responseTimes.standard,
      timeline: '2-6 months',
      color: 'orange',
      bookingType: 'implementation',
      details: {
        overview: 'Full Transformation engagements redesign your operations from the ground up for maximum efficiency and growth.',
        includes: [
          'Complete business analysis',
          'Multi-system integration',
          'Process automation',
          'Team training program',
          'Ongoing optimization'
        ],
        ideal: 'Designed for ambitious businesses ready for significant operational improvements.',
        outcome: 'Transformed operations with automated processes, integrated systems, and sustainable growth.'
      }
    }
  ];

  const getColorClasses = (color) => {
    switch(color) {
      case 'indigo':
        return {
          bg: 'bg-indigo-50',
          border: 'border-indigo-200',
          text: 'text-indigo-700',
          hover: 'hover:border-indigo-400',
          icon: 'bg-indigo-100 text-indigo-600',
          button: 'bg-indigo-600 hover:bg-indigo-700'
        };
      case 'teal':
        return {
          bg: 'bg-teal-50',
          border: 'border-teal-200',
          text: 'text-teal-700',
          hover: 'hover:border-teal-400',
          icon: 'bg-teal-100 text-teal-600',
          button: 'bg-teal-600 hover:bg-teal-700'
        };
      case 'orange':
        return {
          bg: 'bg-orange-50',
          border: 'border-orange-200',
          text: 'text-orange-700',
          hover: 'hover:border-orange-400',
          icon: 'bg-orange-100 text-orange-600',
          button: 'bg-orange-600 hover:bg-orange-700'
        };
      default:
        return {
          bg: 'bg-gray-50',
          border: 'border-gray-200',
          text: 'text-gray-700',
          hover: 'hover:border-gray-400',
          icon: 'bg-gray-100 text-gray-600',
          button: 'bg-gray-600 hover:bg-gray-700'
        };
    }
  };

  return (
    <div className="pt-20">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-indigo-700 to-teal-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Let's Forge Your Next Win</h1>
          <p className="text-xl max-w-2xl mx-auto text-indigo-100">
            Choose the engagement model that fits your needs and timeline.
          </p>
        </div>
      </section>

      {/* Engagement Options */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4">How Can We Help?</h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            Choose the right engagement for your goals
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {contactTiers.map((tier) => {
              const colors = getColorClasses(tier.color);
              const isSelected = selectedTier === tier.id;
              
              return (
                <div
                  key={tier.id}
                  onClick={() => setSelectedTier(tier.id)}
                  onMouseEnter={() => setHoveredTier(tier.id)}
                  onMouseLeave={() => setHoveredTier(null)}
                  className={`relative cursor-pointer rounded-xl border-2 p-8 transition-all transform hover:scale-105 ${
                    isSelected 
                      ? `${colors.bg} ${colors.border} scale-105 shadow-lg` 
                      : `bg-white border-gray-200 ${colors.hover}`
                  }`}
                >
                  {/* Icon and Title */}
                  <div className="text-center mb-6">
                    <div className="text-5xl mb-4">{tier.icon}</div>
                    <h3 className="text-2xl font-bold mb-1">{tier.title}</h3>
                    <p className={`text-sm font-medium ${colors.text}`}>{tier.subtitle}</p>
                  </div>
                  
                  {/* Description */}
                  <p className="text-gray-600 mb-4 text-center">
                    {tier.description}
                  </p>
                  
                  {/* Timeline */}
                  <div className={`${colors.bg} rounded-lg p-3 mb-4`}>
                    <p className={`font-medium ${colors.text} text-center`}>
                      Timeline: {tier.timeline}
                    </p>
                  </div>
                  
                  {/* Response Time */}
                  <p className="text-center text-gray-700 font-medium mb-6">
                    Response: {tier.response}
                  </p>
                  
                  {/* Learn More on Hover */}
                  <AnimatePresence>
                    {hoveredTier === tier.id && (
                      <motion.button
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        onClick={(e) => {
                          e.stopPropagation();
                          setModalTier(tier);
                        }}
                        className={`absolute top-4 right-4 px-3 py-1 ${colors.bg} ${colors.text} text-sm font-medium rounded-lg hover:opacity-80 transition-opacity`}
                      >
                        Learn More →
                      </motion.button>
                    )}
                  </AnimatePresence>
                  
                  {/* CTA Button */}
                  <BookingLink
                    type={tier.bookingType}
                    className={`block w-full py-3 px-4 rounded-lg text-center font-medium text-white transition-all ${colors.button}`}
                  >
                    Schedule Discussion
                  </BookingLink>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">What Happens Next?</h2>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-700 font-bold">
                1
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-bold mb-1">Initial Consultation</h3>
                <p className="text-gray-600">
                  We discuss your challenges, goals, and explore potential solutions.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center text-teal-700 font-bold">
                2
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-bold mb-1">Strategic Proposal</h3>
                <p className="text-gray-600">
                  We present a detailed plan with clear objectives, timeline, and investment.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-orange-700 font-bold">
                3
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-bold mb-1">Implementation & Results</h3>
                <p className="text-gray-600">
                  We execute the strategy and deliver measurable improvements to your business.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-2">What industries do you work with?</h3>
              <p className="text-gray-600">
                We specialize in e-commerce, B2B distribution, professional services, and technology companies. 
                Our solutions are adaptable to various business models.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-2">How do you ensure ROI?</h3>
              <p className="text-gray-600">
                Every recommendation is tied to measurable business outcomes. We establish clear KPIs 
                upfront and track progress throughout the engagement.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-2">What's your typical engagement model?</h3>
              <p className="text-gray-600">
                We offer flexible engagement models from quick assessments to full transformations. 
                Most projects are scoped with clear deliverables and timelines.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-2">Do you work with small businesses?</h3>
              <p className="text-gray-600">
                Yes! We work with businesses of all sizes. Our solutions are scaled appropriately 
                to deliver value regardless of company size.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-indigo-700 text-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-indigo-100">
            Let's discuss how Forgewise can help transform your business operations.
          </p>
          <BookingLink
            type="consultation"
            className="inline-block px-8 py-4 bg-white text-indigo-700 font-bold rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105 text-lg"
          >
            Schedule Your Consultation
          </BookingLink>
        </div>
      </section>

      {/* Details Modal */}
      <AnimatePresence>
        {modalTier && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setModalTier(null)}
              className="fixed inset-0 bg-black bg-opacity-50 z-50"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="fixed inset-0 z-50 overflow-y-auto"
            >
              <div className="flex min-h-full items-center justify-center p-4">
                <div className="relative bg-white rounded-2xl shadow-xl max-w-2xl w-full p-8">
                  <button
                    onClick={() => setModalTier(null)}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                  
                  <div className="text-center mb-6">
                    <div className="text-5xl mb-4">{modalTier.icon}</div>
                    <h3 className="text-3xl font-bold mb-2">{modalTier.title}</h3>
                    <p className="text-lg text-gray-600">{modalTier.subtitle}</p>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-bold text-lg mb-2">Overview</h4>
                      <p className="text-gray-700">{modalTier.details.overview}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-bold text-lg mb-2">What's Included</h4>
                      <ul className="space-y-2">
                        {modalTier.details.includes.map((item, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-green-500 mr-2">✓</span>
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-bold text-lg mb-2">Ideal For</h4>
                      <p className="text-gray-700">{modalTier.details.ideal}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-bold text-lg mb-2">Expected Outcome</h4>
                      <p className="text-gray-700">{modalTier.details.outcome}</p>
                    </div>
                    
                    <div className="pt-4">
                      <BookingLink
                        type={modalTier.bookingType}
                        className={`block w-full py-3 px-4 rounded-lg text-center font-medium text-white transition-all ${
                          getColorClasses(modalTier.color).button
                        }`}
                      >
                        Schedule {modalTier.title}
                      </BookingLink>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}