import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { StaggerContainer, StaggerItem } from '../src/components/AnimatedComponents';
import { BookingLink } from '../src/components/ProtectedContact';
import NextSEO from '../src/components/NextSEO';
import { getPageSEO } from '../src/config/seo';

export default function About() {
  const values = [
    {
      icon: '🎯',
      title: 'Results First',
      description: 'Revenue up = success. Everything else is noise.'
    },
    {
      icon: '⚡',
      title: 'Speed Matters',
      description: 'Fast fixes. Real results. No waiting.'
    },
    {
      icon: '🤝',
      title: 'True Partnership',
      description: 'We win when you win. Simple.'
    },
    {
      icon: '💡',
      title: 'Innovation Applied',
      description: 'New tech that actually works and makes money.'
    }
  ];

  const expertise = [
    { area: 'B2B eCommerce Implementation', years: '11+' },
    { area: 'ERP Integration & Migration', years: '8+' },
    { area: 'Magento Development & Optimization', years: '11+' },
    { area: 'Google Ads & SEO Management', years: '10+' }
  ];


  const seoData = getPageSEO('/about');

  return (
    <>
      <NextSEO {...seoData} />
      
      <div className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-800 to-emerald-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-6">
            <motion.h1
              initial={{ opacity: 1, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold mb-6 text-center"
            >
              Your B2B eCommerce Advocate
            </motion.h1>
            <motion.p
              initial={{ opacity: 1, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl max-w-3xl mx-auto text-center text-blue-100"
            >
              Protecting B2B and traditional businesses from dishonest, overpriced agencies 
            </motion.p>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 1, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-lg text-gray-700 leading-relaxed text-center">
                After 11+ years in eCommerce and seeing countless businesses get burned by overpriced agencies speaking tech gibberish, I founded Forgewise with a simple mission:
              </p>
              <p className="text-2xl font-bold text-blue-800 text-center py-4">
                Help B2B and traditional businesses compete digitally without the fluff.
              </p>

              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 my-8">
                <h3 className="text-xl font-bold mb-4 text-center">We specialize in:</h3>
                <ul className="space-y-3 max-w-2xl mx-auto">
                  <li className="flex items-start justify-center">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    <span className="text-gray-700">Making complex B2B requirements work online</span>
                  </li>
                  <li className="flex items-start justify-center">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    <span className="text-gray-700">Integrating decades-old ERPs with modern platforms</span>
                  </li>
                  <li className="flex items-start justify-center">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    <span className="text-gray-700">Protecting businesses from unnecessary tech spending</span>
                  </li>
                  <li className="flex items-start justify-center">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    <span className="text-gray-700">Translating between IT departments and executives</span>
                  </li>
                </ul>
              </div>

          
            </motion.div>
          </div>
        </section>

        {/* Credentials Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-2xl font-bold text-center mb-8">Credentials That Matter</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="font-bold text-lg mb-3 text-blue-700">Platform Expertise</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• 11+ years Magento experience (v1 & v2)</li>
                  <li>• Shopify Partner</li>
                  <li>• Adobe Commerce certified</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="font-bold text-lg mb-3 text-blue-700">Technical Certifications</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Google Ads & Analytics certified</li>
                  <li>• ERP Integration specialist</li>
                  <li>• B2B Commerce specialist</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-16">Our Values</h2>
            
            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <StaggerItem key={index} index={index}>
                  <div className="text-center">
                    <div className="text-5xl mb-4">{value.icon}</div>
                    <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Expertise Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-16">Years of Real Experience</h2>
            
            <div className="space-y-6">
              {expertise.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 1, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center justify-between p-6 bg-gray-50 rounded-lg"
                >
                  <h3 className="text-lg font-medium">{item.area}</h3>
                  <span className="text-2xl font-bold text-blue-700">{item.years} Years</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>


        {/* Why Choose Us */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-16">Why Choose Forgewise?</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🏆</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Proven Track Record</h3>
                <p className="text-gray-600">
                  45+ successful projects with measurable ROI. We don't just promise results – we deliver them.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🚀</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Rapid Implementation</h3>
                <p className="text-gray-600">
                  See results in weeks, not months. Our agile approach ensures quick wins and continuous improvement.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🤖</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Tech That Works</h3>
                <p className="text-gray-600">
                  AI, automation, analytics - but only if it makes you money.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA - Moved up with spacing */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6">
            <div className="bg-gradient-to-br from-blue-800 to-emerald-800 text-white rounded-2xl p-12 text-center shadow-xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Stop Losing Money?
              </h2>
              <p className="text-xl mb-8 text-blue-100">
                30 minutes. No pitch. Just solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <BookingLink
                  type="consultation"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-800 rounded-lg hover:bg-gray-100 transition-all font-medium"
                >
                  Get An Honest Opinion →
                </BookingLink>
                <Link
                  href="/results/"
                  className="inline-flex items-center justify-center px-8 py-4 bg-emerald-700 text-white rounded-lg hover:bg-emerald-600 transition-all font-medium"
                >
                  See How We Triple Revenue
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom spacing */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <p className="text-gray-600">
              Trusted by 45+ growing e-commerce brands since 2013
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
