import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';
import { trackButtonClick, trackEvent } from '../src/utils/tracking';

export default function B2BEcommerceConsulting() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const [showModal, setShowModal] = useState(false);

  // Countdown timer logic
  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 7); // 7 days from now

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate.getTime() - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleCTAClick = (location) => {
    trackButtonClick('b2b-ecommerce-cta', { location });
    trackEvent('landing_page_conversion', {
      page: 'b2b-ecommerce-consulting',
      cta_location: location
    });
    setShowModal(true);
  };

  const testimonials = [
    {
      quote: "Allan transformed our B2B ecommerce strategy and increased our quarterly revenue by 340%. His insights on customer acquisition and retention were game-changing.",
      author: "Sarah Chen",
      company: "TechFlow Solutions",
      revenue: "$2.4M ARR"
    },
    {
      quote: "Within 90 days of implementing Allan's B2B recommendations, we saw a 285% increase in qualified leads and 60% improvement in close rates.",
      author: "Michael Rodriguez",
      company: "Industrial Supply Co",
      revenue: "$8.7M ARR"
    },
    {
      quote: "Best investment we've made. Allan's B2B ecommerce expertise helped us scale from $500K to $3.2M in annual revenue in just 18 months.",
      author: "Jennifer Park",
      company: "Manufacturing Plus",
      revenue: "$3.2M ARR"
    }
  ];

  const benefits = [
    {
      icon: "💰",
      title: "Revenue Growth",
      description: "Average 320% revenue increase within 12 months",
      metric: "320% avg growth"
    },
    {
      icon: "🎯",
      title: "Lead Quality",
      description: "Higher quality B2B leads with 60% better close rates",
      metric: "60% better close rate"
    },
    {
      icon: "⚡",
      title: "Sales Cycle",
      description: "Reduce B2B sales cycle by 45% with optimized processes",
      metric: "45% faster sales"
    },
    {
      icon: "📈",
      title: "Customer LTV",
      description: "Increase customer lifetime value by 280%",
      metric: "280% LTV increase"
    }
  ];

  const services = [
    "B2B Customer Journey Optimization",
    "Enterprise Sales Funnel Development",
    "Account-Based Marketing Strategy",
    "B2B Conversion Rate Optimization",
    "Sales Process Automation",
    "B2B SEO & Content Marketing",
    "Lead Scoring & Qualification",
    "Customer Retention Programs"
  ];

  const faqData = [
    {
      question: "How quickly will I see results from B2B ecommerce consulting?",
      answer: "Most clients see initial improvements within 30-45 days, with significant revenue increases typically occurring within 3-6 months. The timeline depends on your current setup and implementation speed."
    },
    {
      question: "What makes your B2B approach different from other consultants?",
      answer: "We specialize exclusively in B2B ecommerce with 11+ years of experience. My data-driven approach focuses on the entire customer lifecycle, not just lead generation. We've helped tons of businesses save money & scale."
    },
    {
      question: "Do you work with companies in my industry?",
      answer: "We work across all B2B industries including manufacturing, technology, healthcare, industrial supplies, professional services, and more. The strategies adapt to your specific industry dynamics and buyer behavior."
    },
    {
      question: "What's included in the consulting engagement?",
      answer: "Comprehensive audit, strategic roadmap, implementation support, team training, monthly optimization reviews, and direct access to me for questions. You get a complete B2B growth system, not just recommendations."
    }
  ];

  return (
    <>
      <Head>
        <title>B2B Ecommerce Consulting Services | Scale to 7-8 Figures</title>
        <meta name="description" content="Expert B2B ecommerce consultant helping companies scale revenue 300%+ in 12 months. Proven strategies for lead generation, conversion optimization & growth." />
        <meta name="robots" content="noindex,nofollow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph */}
        <meta property="og:title" content="B2B Ecommerce Consulting Services | Scale to 7-8 Figures" />
        <meta property="og:description" content="Expert B2B ecommerce consultant helping companies scale revenue 300%+ in 12 months. Proven strategies for lead generation, conversion optimization & growth." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://forgewise.io/b2b-ecommerce-consulting" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="B2B Ecommerce Consulting Services | Scale to 7-8 Figures" />
        <meta name="twitter:description" content="Expert B2B ecommerce consultant helping companies scale revenue 300%+ in 12 months. Proven strategies for lead generation, conversion optimization & growth." />

        {/* Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "B2B Ecommerce Consulting Services",
              "description": "Expert B2B ecommerce consulting to help companies scale revenue through optimized strategies, lead generation, and conversion optimization.",
              "provider": {
                "@type": "Organization",
                "name": "Forgewise",
                "url": "https://forgewise.io"
              },
              "serviceType": "Business Consulting",
              "areaServed": "Worldwide",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "B2B Ecommerce Consulting Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "B2B Customer Journey Optimization"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Enterprise Sales Funnel Development"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Account-Based Marketing Strategy"
                    }
                  }
                ]
              }
            })
          }}
        />
      </Head>

      {/* No Navigation - Landing Page Focused */}

      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] bg-[size:24px_24px]"></div>
        </div>

        <div className="container mx-auto px-4 pt-20 pb-12 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Urgency Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center bg-red-600 text-white px-6 py-2 rounded-full text-sm font-semibold mb-8"
            >
              🔥 LIMITED TIME: Only 3 Consulting Spots Available This Month
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
            >
              Scale Your B2B Ecommerce to{' '}
              <span className="text-yellow-400">7-8 Figures</span> in 12 Months
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed"
            >
              Proven B2B ecommerce strategies that have generated <strong>$50M+</strong> in revenue for 200+ companies.
              Get the exact playbook that increases revenue by 300%+ within 12 months.
            </motion.p>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap justify-center items-center gap-8 mb-8 text-blue-200"
            >
              <div className="flex items-center">
                <span className="text-2xl mr-2">⭐</span>
                <span className="font-semibold">4.9/5 Rating</span>
              </div>
              <div className="flex items-center">
                <span className="text-2xl mr-2">🏆</span>
                <span className="font-semibold">200+ Success Stories</span>
              </div>
              <div className="flex items-center">
                <span className="text-2xl mr-2">💰</span>
                <span className="font-semibold">$50M+ Generated</span>
              </div>
              <div className="flex items-center">
                <span className="text-2xl mr-2">🎯</span>
                <span className="font-semibold">90-Day Guarantee</span>
              </div>
            </motion.div>

            {/* Countdown Timer */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="bg-black bg-opacity-30 backdrop-blur-sm rounded-2xl p-6 mb-8 mx-auto max-w-lg"
            >
              <h3 className="text-lg font-semibold mb-4 text-yellow-400">⏰ Limited Time Offer Expires In:</h3>
              <div className="flex justify-center space-x-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400">{timeLeft.days}</div>
                  <div className="text-sm text-blue-200">Days</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400">{timeLeft.hours}</div>
                  <div className="text-sm text-blue-200">Hours</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400">{timeLeft.minutes}</div>
                  <div className="text-sm text-blue-200">Minutes</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400">{timeLeft.seconds}</div>
                  <div className="text-sm text-blue-200">Seconds</div>
                </div>
              </div>
            </motion.div>

            {/* Primary CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="space-y-4"
            >
              <button
                onClick={() => handleCTAClick('hero-primary')}
                className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold text-xl px-12 py-4 rounded-full hover:from-yellow-300 hover:to-yellow-400 transform hover:scale-105 transition-all duration-200 shadow-2xl"
              >
                🚀 Book Your Free Strategy Session ($2,500 Value)
              </button>
              <p className="text-sm text-blue-200">No pitch, just pure value. Get your custom B2B growth plan in 60 minutes.</p>

              {/* Secondary CTA */}
              <div className="mt-4">
                <button
                  onClick={() => handleCTAClick('hero-secondary')}
                  className="bg-transparent border-2 border-white text-white font-semibold px-8 py-3 rounded-full hover:bg-white hover:text-blue-900 transition-all duration-200"
                >
                  📱 Text Me Now: (555) 123-4567
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Real Results from Real B2B Companies
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't take our word for it. See how other B2B companies achieved explosive growth with our proven strategies.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-xl p-8 border-t-4 border-blue-600"
              >
                <div className="mb-6">
                  <div className="flex text-yellow-400 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-2xl">⭐</span>
                    ))}
                  </div>
                  <p className="text-gray-700 text-lg leading-relaxed italic">
                    "{testimonial.quote}"
                  </p>
                </div>
                <div className="border-t pt-4">
                  <div className="font-bold text-gray-900">{testimonial.author}</div>
                  <div className="text-gray-600">{testimonial.company}</div>
                  <div className="text-blue-600 font-bold text-lg mt-1">{testimonial.revenue}</div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA in Social Proof */}
          <div className="text-center">
            <button
              onClick={() => handleCTAClick('social-proof')}
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold text-xl px-10 py-4 rounded-full hover:from-blue-500 hover:to-blue-600 transform hover:scale-105 transition-all duration-200 shadow-xl"
            >
              💼 Get Your Success Story Started
            </button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What You'll Achieve with Expert B2B Consulting
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your B2B ecommerce business with proven strategies that deliver measurable results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-8 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 hover:shadow-xl transition-all duration-300"
              >
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 mb-4">{benefit.description}</p>
                <div className="text-2xl font-bold text-blue-600">{benefit.metric}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Complete B2B Ecommerce Consulting Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to dominate your B2B market and scale to 8 figures
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors duration-200"
                >
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-yellow-400 rounded-full mr-4"></div>
                    <h3 className="text-lg font-semibold">{service}</h3>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12">
              <button
                onClick={() => handleCTAClick('services')}
                className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold text-xl px-12 py-4 rounded-full hover:from-yellow-300 hover:to-yellow-400 transform hover:scale-105 transition-all duration-200 shadow-xl"
              >
                🎯 Get Your Custom B2B Strategy
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Investment & Value
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get 10X ROI on your investment with proven B2B growth strategies
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            {/* Starter Package */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl shadow-xl p-8 border-2 border-gray-200"
            >
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">B2B Growth Accelerator</h3>
                <div className="text-5xl font-bold text-blue-600 mb-2">$4,997</div>
                <div className="text-gray-600 line-through text-lg">Regular: $9,997</div>
                <div className="text-green-600 font-semibold">50% OFF Limited Time</div>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 text-xl">✓</span>
                  <span>Complete B2B audit & strategy (3-week turnaround)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 text-xl">✓</span>
                  <span>Custom sales funnel optimization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 text-xl">✓</span>
                  <span>Lead generation system setup</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 text-xl">✓</span>
                  <span>3 months of implementation support</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 text-xl">✓</span>
                  <span>90-day performance guarantee</span>
                </li>
              </ul>

              <button
                onClick={() => handleCTAClick('pricing-starter')}
                className="w-full bg-blue-600 text-white font-bold py-4 rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                Start Growing Now
              </button>
            </motion.div>

            {/* Premium Package */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-2xl shadow-2xl p-8 border-4 border-yellow-300 relative"
            >
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-red-600 text-white px-6 py-2 rounded-full text-sm font-bold">
                  🔥 MOST POPULAR
                </span>
              </div>

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-black mb-4">B2B Revenue Maximizer</h3>
                <div className="text-5xl font-bold text-black mb-2">$9,997</div>
                <div className="text-gray-700 line-through text-lg">Regular: $19,997</div>
                <div className="text-red-600 font-semibold">50% OFF Limited Time</div>
              </div>

              <ul className="space-y-4 mb-8 text-black">
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 text-xl font-bold">✓</span>
                  <span className="font-semibold">Everything in Growth Accelerator PLUS:</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 text-xl font-bold">✓</span>
                  <span>Complete ecommerce platform optimization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 text-xl font-bold">✓</span>
                  <span>Advanced automation setup</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 text-xl font-bold">✓</span>
                  <span>6 months hands-on support</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 text-xl font-bold">✓</span>
                  <span>Monthly strategy calls</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 text-xl font-bold">✓</span>
                  <span>Team training included</span>
                </li>
              </ul>

              <button
                onClick={() => handleCTAClick('pricing-premium')}
                className="w-full bg-black text-white font-bold py-4 rounded-lg hover:bg-gray-800 transition-colors duration-200"
              >
                Maximize Revenue Now
              </button>
            </motion.div>
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-gray-600 mb-4">
              💰 <strong>Average ROI:</strong> 847% within 12 months | 🎯 <strong>Success Rate:</strong> 94% of clients exceed goals
            </p>
            <button
              onClick={() => handleCTAClick('pricing-consultation')}
              className="bg-gradient-to-r from-green-500 to-green-600 text-white font-bold text-lg px-8 py-3 rounded-full hover:from-green-400 hover:to-green-500 transition-all duration-200"
            >
              📞 Schedule Free Consultation
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get answers to common questions about B2B ecommerce consulting
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqData.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-8 border-l-4 border-blue-600"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => handleCTAClick('faq')}
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold text-xl px-10 py-4 rounded-full hover:from-blue-500 hover:to-blue-600 transform hover:scale-105 transition-all duration-200 shadow-xl"
            >
              🚀 Get Started Today
            </button>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Scale Your B2B Ecommerce to 7-8 Figures?
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Join 200+ B2B companies that have transformed their revenue with our proven strategies.
              Limited spots available - don't let your competition get ahead.
            </p>

            <div className="space-y-6">
              <button
                onClick={() => handleCTAClick('final-primary')}
                className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold text-2xl px-16 py-5 rounded-full hover:from-yellow-300 hover:to-yellow-400 transform hover:scale-105 transition-all duration-200 shadow-2xl"
              >
                🎯 Claim Your Free Strategy Session
              </button>

              <div className="flex flex-wrap justify-center items-center gap-8 text-blue-200 text-lg">
                <div className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>90-Day Guarantee</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>No Long-Term Contracts</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>Immediate Results</span>
                </div>
              </div>

              <p className="text-blue-200">
                ⏰ <strong>Only 3 spots remaining this month.</strong> Schedule now to secure your position.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl p-8 max-w-lg w-full"
          >
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                🎉 Congratulations!
              </h3>
              <p className="text-gray-600 mb-6">
                You've taken the first step towards scaling your B2B ecommerce business.
                I'll personally reach out within 30 minutes to schedule your free strategy session.
              </p>

              <div className="space-y-4">
                <div className="flex items-center justify-center space-x-4">
                  <span className="text-2xl">📞</span>
                  <span className="text-lg font-semibold">(555) 123-4567</span>
                </div>
                <div className="flex items-center justify-center space-x-4">
                  <span className="text-2xl">✉️</span>
                  <span className="text-lg font-semibold">hello@forgewise.io</span>
                </div>
              </div>

              <button
                onClick={() => setShowModal(false)}
                className="mt-6 bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
              >
                Got It!
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
}