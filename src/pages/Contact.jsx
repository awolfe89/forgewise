import { useState } from 'react';
import contactConfig from '../config/contact';
import { BookingLink } from '../components/ProtectedContact';

export default function Contact() {
  const [selectedTier, setSelectedTier] = useState(null);

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
      bookingType: 'consultation'
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
      bookingType: 'discovery'
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
      bookingType: 'implementation'
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Let's Transform Your Business</h1>
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
            Select the option that best matches your current needs
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {contactTiers.map((tier) => {
              const colors = getColorClasses(tier.color);
              const isSelected = selectedTier === tier.id;
              
              return (
                <div
                  key={tier.id}
                  onClick={() => setSelectedTier(tier.id)}
                  className={`cursor-pointer rounded-xl border-2 p-8 transition-all transform hover:scale-105 ${
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
            Let's discuss how ForgeWise can help transform your business operations.
          </p>
          <BookingLink
            type="consultation"
            className="inline-block px-8 py-4 bg-white text-indigo-700 font-bold rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105 text-lg"
          >
            Schedule Your Consultation
          </BookingLink>
        </div>
      </section>
    </div>
  );
}