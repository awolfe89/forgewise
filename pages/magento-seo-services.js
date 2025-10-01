import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';
import { trackButtonClick, trackEvent } from '../src/utils/tracking';

export default function MagentoSEOServices() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const [showModal, setShowModal] = useState(false);
  const [activeTab, setActiveTab] = useState('traffic');

  // Countdown timer logic
  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 5); // 5 days from now

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
    trackButtonClick('magento-seo-cta', { location });
    trackEvent('landing_page_conversion', {
      page: 'magento-seo-services',
      cta_location: location
    });
    window.open('https://calendly.com/admin-forgewise/strategy-session', '_blank');
  };

  const results = {
    traffic: {
      title: "Traffic Growth",
      data: [
        { metric: "Organic Traffic Increase", value: "385%", timeframe: "6 months" },
        { metric: "Keyword Rankings", value: "420+", timeframe: "top 10 positions" },
        { metric: "Monthly Visitors", value: "75K+", timeframe: "average increase" },
        { metric: "Search Visibility", value: "290%", timeframe: "improvement" }
      ]
    },
    revenue: {
      title: "Revenue Impact",
      data: [
        { metric: "Revenue Growth", value: "340%", timeframe: "12 months" },
        { metric: "Conversion Rate", value: "165%", timeframe: "improvement" },
        { metric: "Average Order Value", value: "$2,450", timeframe: "increase" },
        { metric: "ROI on SEO", value: "1,247%", timeframe: "first year" }
      ]
    },
    technical: {
      title: "Technical Improvements",
      data: [
        { metric: "Page Load Speed", value: "75%", timeframe: "faster" },
        { metric: "Core Web Vitals", value: "100%", timeframe: "pass rate" },
        { metric: "Technical Issues Fixed", value: "847", timeframe: "total resolved" },
        { metric: "Mobile Performance", value: "95+", timeframe: "PageSpeed score" }
      ]
    }
  };


  const services = [
    {
      category: "Technical SEO",
      items: [
        "Magento 2 performance optimization",
        "Core Web Vitals improvement",
        "Site speed optimization",
        "Technical audit & fixes",
        "Schema markup implementation",
        "XML sitemap optimization"
      ]
    },
    {
      category: "On-Page SEO",
      items: [
        "Product page optimization",
        "Category page SEO",
        "Meta tags optimization",
        "Internal linking strategy",
        "Content optimization",
        "Image SEO & alt tags"
      ]
    },
    {
      category: "Content Strategy",
      items: [
        "SEO content creation",
        "Blog content strategy",
        "Product descriptions",
        "Landing page content",
        "FAQ optimization",
        "User-generated content"
      ]
    },
    {
      category: "Advanced SEO",
      items: [
        "Multi-store SEO setup",
        "International SEO",
        "Local SEO optimization",
        "Voice search optimization",
        "Featured snippets targeting",
        "Competitive analysis"
      ]
    }
  ];

  const faqData = [
    {
      question: "Why is Magento SEO different from other ecommerce platforms?",
      answer: "Magento has unique technical challenges including complex URL structures, heavy resource usage, and intricate category hierarchies. Our specialized approach addresses these Magento-specific issues to maximize your SEO performance."
    },
    {
      question: "How quickly will I see results from Magento SEO services?",
      answer: "Technical improvements show results within 2-4 weeks. Ranking improvements typically begin within 6-8 weeks, with significant traffic growth occurring within 3-6 months. Full transformation usually takes 6-12 months."
    },
    {
      question: "Do you work with both Magento 1 and Magento 2?",
      answer: "Yes, though we highly recommend migrating to Magento 2 for better SEO performance. We can handle SEO for both versions and assist with SEO-optimized migrations to Magento 2."
    },
    {
      question: "What makes your Magento SEO different from other agencies?",
      answer: "We're Magento-specialized with deep technical expertise. Our team includes Magento certified developers who understand the platform's SEO challenges. We've optimized 150+ Magento stores with proven results."
    },
    {
      question: "Can you help with enterprise/Magento Commerce SEO?",
      answer: "Absolutely. We have extensive experience with Magento Commerce, including B2B features, advanced MSI, and enterprise-level technical SEO challenges. We've helped Fortune 500 companies optimize their Magento stores."
    },
    {
      question: "What if my Magento store has existing SEO issues?",
      answer: "We start with a comprehensive technical audit to identify all issues. Our team fixes technical problems, recovers lost rankings, and implements strategies to prevent future issues while driving new growth."
    }
  ];

  const packages = [
    {
      name: "Magento SEO Starter",
      popular: false,
      features: [
        "Complete technical SEO audit",
        "Core Web Vitals optimization",
        "On-page SEO for 50 pages",
        "Basic schema markup",
        "3 months support",
        "Monthly reporting"
      ],
      cta: "Start Optimizing"
    },
    {
      name: "Magento SEO Pro",
      popular: true,
      features: [
        "Everything in Starter PLUS:",
        "Advanced technical optimization",
        "On-page SEO for 200+ pages",
        "Content strategy & creation",
        "Link building campaign",
        "6 months hands-on support",
        "Bi-weekly strategy calls"
      ],
      cta: "Scale My Rankings"
    },
    {
      name: "Enterprise Magento SEO",
      popular: false,
      features: [
        "Everything in Pro PLUS:",
        "Multi-store SEO optimization",
        "Enterprise-level audits",
        "Custom development work",
        "Dedicated account manager",
        "12 months support",
        "Weekly strategy sessions",
        "White-glove service"
      ],
      cta: "Dominate Your Market"
    }
  ];

  return (
    <>
      <Head>
        <title>Magento SEO Services | Increase Traffic 400% in 6 Months</title>
        <meta name="description" content="Expert Magento SEO services for ecommerce stores. Specialized in Magento 2 optimization, technical SEO, and performance improvements. Get 400% more traffic." />
        <meta name="robots" content="noindex,nofollow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph */}
        <meta property="og:title" content="Magento SEO Services | Increase Traffic 400% in 6 Months" />
        <meta property="og:description" content="Expert Magento SEO services for ecommerce stores. Specialized in Magento 2 optimization, technical SEO, and performance improvements. Get 400% more traffic." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://forgewise.io/magento-seo-services" />

        {/* Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Magento SEO Services",
              "description": "Professional Magento SEO optimization services including technical SEO, performance optimization, and search engine ranking improvements for Magento ecommerce stores.",
              "provider": {
                "@type": "Organization",
                "name": "Forgewise",
                "url": "https://forgewise.io"
              },
              "serviceType": "Search Engine Optimization",
              "areaServed": "Worldwide",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Magento SEO Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Magento Technical SEO"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Magento Performance Optimization"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Magento Content Optimization"
                    }
                  }
                ]
              }
            })
          }}
        />
      </Head>

      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] bg-[size:24px_24px]"></div>
        </div>

        <div className="container mx-auto px-4 pt-20 pb-12 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            {/* Urgency Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center bg-red-600 text-white px-6 py-2 rounded-full text-sm font-semibold mb-8"
            >
              🚨 LIMITED: Only 5 Magento SEO Projects Accepted This Quarter
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
            >
              Increase Your Magento Store Traffic by{' '}
              <span className="text-yellow-400">400%</span> in 6 Months
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl mb-8 text-purple-100 leading-relaxed"
            >
              Specialized Magento SEO services that have generated <strong>$25M+</strong> in revenue for 150+ stores.
              Get the exact optimization strategies that dominate Google rankings.
            </motion.p>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap justify-center items-center gap-8 mb-8 text-purple-200"
            >
              <div className="flex items-center">
                <span className="text-2xl mr-2">🏆</span>
                <span className="font-semibold">Magento Certified</span>
              </div>
              <div className="flex items-center">
                <span className="text-2xl mr-2">📈</span>
                <span className="font-semibold">150+ Stores Optimized</span>
              </div>
              <div className="flex items-center">
                <span className="text-2xl mr-2">⚡</span>
                <span className="font-semibold">400% Avg Growth</span>
              </div>
            </motion.div>

            {/* Countdown Timer */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="bg-black bg-opacity-30 backdrop-blur-sm rounded-2xl p-6 mb-8 mx-auto max-w-lg"
            >
              <h3 className="text-lg font-semibold mb-4 text-yellow-400">⏰ Early Bird Pricing Expires In:</h3>
              <div className="flex justify-center space-x-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400">{timeLeft.days}</div>
                  <div className="text-sm text-purple-200">Days</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400">{timeLeft.hours}</div>
                  <div className="text-sm text-purple-200">Hours</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400">{timeLeft.minutes}</div>
                  <div className="text-sm text-purple-200">Minutes</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400">{timeLeft.seconds}</div>
                  <div className="text-sm text-purple-200">Seconds</div>
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
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold text-xl px-12 py-4 rounded-full hover:from-yellow-300 hover:to-orange-400 transform hover:scale-105 transition-all duration-200 shadow-2xl"
              >
                🚀 Get Your Free Magento SEO Audit
              </button>
              <p className="text-sm text-purple-200">Complete technical analysis in 48 hours. No strings attached.</p>

              {/* Secondary CTA */}
              <div className="mt-4">
                <button
                  onClick={() => handleCTAClick('hero-secondary')}
                  className="bg-transparent border-2 border-white text-white font-semibold px-8 py-3 rounded-full hover:bg-white hover:text-purple-900 transition-all duration-200"
                >
                  📞 Call Now: 872-248-9710
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Real Magento SEO Results
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See the measurable impact of specialized Magento SEO optimization
            </p>
          </div>

          {/* Result Tabs */}
          <div className="flex justify-center mb-12">
            <div className="bg-white rounded-lg p-2 shadow-lg">
              {Object.keys(results).map((key) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                    activeTab === key
                      ? 'bg-purple-600 text-white'
                      : 'text-gray-600 hover:text-purple-600'
                  }`}
                >
                  {results[key].title}
                </button>
              ))}
            </div>
          </div>

          {/* Results Display */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {results[activeTab].data.map((result, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 text-center border-t-4 border-purple-600">
                <div className="text-4xl font-bold text-purple-600 mb-2">{result.value}</div>
                <div className="text-lg font-semibold text-gray-900 mb-1">{result.metric}</div>
                <div className="text-gray-600">{result.timeframe}</div>
              </div>
            ))}
          </motion.div>

          {/* CTA */}
          <div className="text-center mt-12">
            <button
              onClick={() => handleCTAClick('results')}
              className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold text-xl px-10 py-4 rounded-full hover:from-purple-500 hover:to-indigo-500 transform hover:scale-105 transition-all duration-200 shadow-xl"
            >
              🎯 Get These Results for Your Store
            </button>
          </div>
        </div>
      </section>


      {/* Services Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Complete Magento SEO Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything your Magento store needs to dominate search rankings
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-800 rounded-xl p-8 hover:bg-gray-700 transition-colors duration-200"
              >
                <h3 className="text-xl font-bold mb-6 text-yellow-400">{service.category}</h3>
                <ul className="space-y-3">
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <span className="text-green-400 mr-3 text-lg">✓</span>
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => handleCTAClick('services')}
              className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold text-xl px-12 py-4 rounded-full hover:from-yellow-300 hover:to-orange-400 transform hover:scale-105 transition-all duration-200 shadow-xl"
            >
              🔧 Optimize My Magento Store
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-indigo-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Magento SEO Investment Plans
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the perfect plan to scale your Magento store's organic traffic
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`rounded-2xl shadow-2xl p-8 relative ${
                  pkg.popular
                    ? 'bg-gradient-to-br from-purple-600 to-indigo-600 text-white border-4 border-yellow-400'
                    : 'bg-white border-2 border-gray-200'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-yellow-400 text-black px-6 py-2 rounded-full text-sm font-bold">
                      🔥 MOST POPULAR
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className={`text-2xl font-bold mb-4 ${pkg.popular ? 'text-white' : 'text-gray-900'}`}>
                    {pkg.name}
                  </h3>
                </div>

                <ul className={`space-y-4 mb-8 ${pkg.popular ? 'text-white' : 'text-gray-700'}`}>
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <span className={`mr-3 text-xl ${pkg.popular ? 'text-yellow-400' : 'text-green-500'}`}>✓</span>
                      <span className={featureIndex === 1 && pkg.name !== "Magento SEO Starter" ? 'font-semibold' : ''}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => handleCTAClick(`pricing-${pkg.name.toLowerCase().replace(/\s+/g, '-')}`)}
                  className={`w-full font-bold py-4 rounded-lg transition-all duration-200 ${
                    pkg.popular
                      ? 'bg-yellow-400 text-black hover:bg-yellow-300'
                      : 'bg-purple-600 text-white hover:bg-purple-700'
                  }`}
                >
                  {pkg.cta}
                </button>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-gray-600 mb-4">
              🎯 <strong>Success Rate:</strong> 96% of clients exceed expectations
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
              Magento SEO Questions Answered
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get clarity on specialized Magento SEO services and what to expect
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqData.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-purple-50 rounded-xl p-8 border-l-4 border-purple-600"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => handleCTAClick('faq')}
              className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold text-xl px-10 py-4 rounded-full hover:from-purple-500 hover:to-indigo-500 transform hover:scale-105 transition-all duration-200 shadow-xl"
            >
              🚀 Start Optimizing Today
            </button>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Dominate Magento SEO Rankings?
            </h2>
            <p className="text-xl text-purple-100 mb-8 leading-relaxed">
              Join 150+ successful Magento stores that have transformed their organic traffic and revenue.
              Don't let your competitors get ahead with better SEO.
            </p>

            <div className="space-y-6">
              <button
                onClick={() => handleCTAClick('final-primary')}
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold text-2xl px-16 py-5 rounded-full hover:from-yellow-300 hover:to-orange-400 transform hover:scale-105 transition-all duration-200 shadow-2xl"
              >
                🎯 Get Your Free Magento SEO Audit
              </button>

              <div className="flex flex-wrap justify-center items-center gap-8 text-purple-200 text-lg">
                <div className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>48-Hour Delivery</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>Magento Specialists</span>
                </div>
              </div>

              <p className="text-purple-200">
                ⏰ <strong>Limited capacity:</strong> Only 5 Magento SEO projects accepted this quarter.
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
                🎉 Your Free Magento SEO Audit is Coming!
              </h3>
              <p className="text-gray-600 mb-6">
                You've made a smart decision! I'll personally analyze your Magento store and send you a
                comprehensive SEO audit within 48 hours. No fluff, just actionable insights.
              </p>

              <div className="space-y-4">
                <div className="flex items-center justify-center space-x-4">
                  <span className="text-2xl">📞</span>
                  <span className="text-lg font-semibold">872-248-9710</span>
                </div>
                <div className="flex items-center justify-center space-x-4">
                  <span className="text-2xl">✉️</span>
                  <span className="text-lg font-semibold">hello@forgewise.io</span>
                </div>
              </div>

              <button
                onClick={() => setShowModal(false)}
                className="mt-6 bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors duration-200"
              >
                Perfect!
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
}