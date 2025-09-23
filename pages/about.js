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
    { area: 'E-commerce Optimization', years: '12+' },
    { area: 'Conversion Rate Optimization', years: '10+' },
    { area: 'Marketing Automation', years: '8+' },
    { area: 'Data Analytics & AI', years: '6+' }
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
              We Fix What's Broken. Fast.
            </motion.h1>
            <motion.p
              initial={{ opacity: 1, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl max-w-3xl mx-auto text-center text-blue-100"
            >
              No 6-month roadmaps. No bloated retainers. Just fixes that work.
            </motion.p>
          </div>
        </section>

        {/* Our Approach Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 1, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-lg text-gray-700 leading-relaxed"
            >
              <p>
                We work with $100K-$5M businesses because you move fast and make decisions. No committees. No corporate BS. We find what's broken, fix it, and measure everything in dollars. Faster sites, better checkouts, smarter ads - whatever stops the bleeding and starts the growth. We're not consultants. We're builders who happen to give good advice.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-gray-50">
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
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-16">Areas of Expertise</h2>
            
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
                  30+ successful projects with measurable ROI. We don't just promise results – we deliver them.
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
                  Start With a Quick Win →
                </BookingLink>
                <Link
                  href="/results/"
                  className="inline-flex items-center justify-center px-8 py-4 bg-emerald-700 text-white rounded-lg hover:bg-emerald-600 transition-all font-medium"
                >
                  View Our Results
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom spacing */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <p className="text-gray-600">
              Trusted by 45+ growing e-commerce brands since 2012
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
