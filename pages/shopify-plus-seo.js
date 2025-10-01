import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';
import { trackButtonClick, trackEvent } from '../src/utils/tracking';

export default function ShopifyPlusSEO() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const [showModal, setShowModal] = useState(false);
  const [activeFeature, setActiveFeature] = useState('enterprise');

  // Countdown timer logic
  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 3); // 3 days from now

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
    trackButtonClick('shopify-plus-seo-cta', { location });
    trackEvent('landing_page_conversion', {
      page: 'shopify-plus-seo',
      cta_location: location
    });
    setShowModal(true);
  };

  const features = {
    enterprise: {
      title: "Enterprise SEO Features",
      icon: "🏢",
      benefits: [
        "Multi-storefront SEO optimization",
        "Advanced wholesale/B2B SEO",
        "International SEO & hreflang",
        "Enterprise schema markup",
        "Shopify Flow SEO automation",
        "Advanced Scripts optimization"
      ]
    },
    performance: {
      title: "Performance Optimization",
      icon: "⚡",
      benefits: [
        "Core Web Vitals optimization",
        "Shopify Scripts performance",
        "Advanced caching strategies",
        "Image optimization pipeline",
        "Third-party app optimization",
        "CDN configuration"
      ]
    },
    scale: {
      title: "Scalability Solutions",
      icon: "📈",
      benefits: [
        "High-traffic SEO optimization",
        "Large catalog management",
        "Automated SEO workflows",
        "Enterprise monitoring",
        "Custom development",
        "API integrations"
      ]
    }
  };

  const testimonials = [];

  const results = [
    {
      metric: "Average Traffic Increase",
      value: "435%",
      timeframe: "proven results",
      icon: "📊"
    },
    {
      metric: "Revenue Growth",
      value: "380%",
      timeframe: "for clients",
      icon: "💰"
    },
    {
      metric: "Enterprise Clients Served",
      value: "30+",
      timeframe: "Shopify Plus stores",
      icon: "🏢"
    },
    {
      metric: "Average ROI",
      value: "1,340%",
      timeframe: "client average",
      icon: "🎯"
    }
  ];

  const services = [
    {
      category: "Shopify Plus Technical SEO",
      description: "Enterprise-level technical optimization",
      services: [
        "Multi-storefront SEO architecture",
        "Shopify Scripts SEO optimization",
        "Advanced sitemap management",
        "Enterprise schema implementation",
        "Core Web Vitals optimization",
        "Technical audit & monitoring"
      ]
    },
    {
      category: "Enterprise Content Strategy",
      description: "Scalable content systems",
      services: [
        "Large-scale content optimization",
        "Automated content workflows",
        "B2B content strategies",
        "Multi-market content planning",
        "Advanced keyword mapping",
        "Content governance systems"
      ]
    },
    {
      category: "International & Multi-Store SEO",
      description: "Global expansion optimization",
      services: [
        "Hreflang implementation",
        "Multi-currency SEO",
        "Geo-targeted optimization",
        "International keyword research",
        "Local market optimization",
        "Cross-border SEO strategy"
      ]
    },
    {
      category: "Advanced Analytics & Reporting",
      description: "Enterprise-grade insights",
      services: [
        "Custom dashboard development",
        "Advanced GA4 setup",
        "SEO performance monitoring",
        "Competitive intelligence",
        "ROI tracking & attribution",
        "Executive reporting"
      ]
    }
  ];

  const packages = [
    {
      name: "Shopify Plus SEO Essentials",
      price: "",
      originalPrice: "",
      period: "",
      popular: false,
      features: [
        "Complete technical SEO audit",
        "Core Web Vitals optimization",
        "Basic schema implementation",
        "On-page optimization (100 pages)",
        "Monthly performance reports",
        "Email support"
      ],
      cta: "Start Growing",
      guarantee: "60-day guarantee"
    },
    {
      name: "Enterprise SEO Accelerator",
      price: "",
      originalPrice: "",
      period: "",
      popular: true,
      features: [
        "Everything in Essentials PLUS:",
        "Multi-storefront optimization",
        "Advanced Scripts optimization",
        "Enterprise schema markup",
        "Unlimited page optimization",
        "Bi-weekly strategy calls",
        "Dedicated account manager",
        "Priority support"
      ],
      cta: "Scale Enterprise",
      guarantee: "90-day guarantee"
    },
    {
      name: "Global Enterprise SEO",
      price: "",
      originalPrice: "",
      period: "",
      popular: false,
      features: [
        "Everything in Accelerator PLUS:",
        "International SEO optimization",
        "Multi-market strategies",
        "Custom development work",
        "Weekly strategy sessions",
        "White-glove service",
        "24/7 support",
        "Comprehensive support"
      ],
      cta: "Dominate Globally",
      guarantee: "Comprehensive support"
    }
  ];

  const faqData = [
    {
      question: "What makes Shopify Plus SEO different from regular Shopify SEO?",
      answer: "Shopify Plus offers enterprise features like Shopify Scripts, multi-storefront capabilities, and advanced customization options that require specialized SEO strategies. We leverage these enterprise features to maximize your SEO performance at scale."
    },
    {
      question: "How do you handle SEO for multiple storefronts in Shopify Plus?",
      answer: "We develop a comprehensive multi-storefront SEO architecture that ensures each storefront is optimized for its specific market while maintaining overall brand consistency. This includes unique keyword strategies, localized content, and proper technical implementation."
    },
    {
      question: "Can you help migrate from another platform to Shopify Plus without losing SEO rankings?",
      answer: "Absolutely. We specialize in SEO-safe migrations to Shopify Plus, including comprehensive redirect mapping, content optimization, and technical setup to maintain or improve your existing rankings during the transition."
    },
    {
      question: "Do you work with Shopify Plus apps and third-party integrations?",
      answer: "Yes, we optimize SEO performance while working with your existing app ecosystem. We also recommend and implement SEO-friendly apps and ensure third-party integrations don't negatively impact your search performance."
    },
    {
      question: "How do you measure ROI for enterprise Shopify Plus SEO?",
      answer: "We track comprehensive metrics including organic traffic growth, revenue attribution, conversion improvements, and market share gains. Our enterprise clients see strong ROI through increased organic visibility and sales, with transparent reporting to track every dollar invested."
    },
    {
      question: "What level of support do enterprise clients receive?",
      answer: "Enterprise clients receive dedicated account management, priority support, regular strategy sessions, and direct access to our senior SEO specialists. We become an extension of your team with white-glove service."
    }
  ];

  return (
    <>
      <Head>
        <title>Shopify Plus SEO Services | Enterprise Ecommerce SEO Experts</title>
        <meta name="description" content="Expert Shopify Plus SEO services for enterprise ecommerce stores. Scale your organic traffic 400%+ with specialized enterprise SEO strategies and optimization." />
        <meta name="robots" content="noindex,nofollow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph */}
        <meta property="og:title" content="Shopify Plus SEO Services | Enterprise Ecommerce SEO Experts" />
        <meta property="og:description" content="Expert Shopify Plus SEO services for enterprise ecommerce stores. Scale your organic traffic 400%+ with specialized enterprise SEO strategies and optimization." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://forgewise.io/shopify-plus-seo" />

        {/* Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Shopify Plus SEO Services",
              "description": "Professional Shopify Plus SEO optimization services for enterprise ecommerce stores including technical SEO, performance optimization, and multi-storefront strategies.",
              "provider": {
                "@type": "Organization",
                "name": "Forgewise",
                "url": "https://forgewise.io"
              },
              "serviceType": "Search Engine Optimization",
              "areaServed": "Worldwide",
              "audience": {
                "@type": "BusinessAudience",
                "audienceType": "Enterprise Ecommerce"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Shopify Plus SEO Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Enterprise Technical SEO"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Multi-Storefront Optimization"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "International SEO"
                    }
                  }
                ]
              }
            })
          }}
        />
      </Head>

      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-green-900 via-emerald-900 to-teal-900 text-white relative overflow-hidden">
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
              ⚡ EXCLUSIVE: Only 3 Shopify Plus SEO Slots Available This Month
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
            >
              Scale Your Shopify Plus Store to{' '}
              <span className="text-yellow-400">$10M+</span> with Expert SEO
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl mb-8 text-green-100 leading-relaxed"
            >
              Specialized Shopify Plus SEO that leverages enterprise features for maximum growth.
              <strong> 30+ Shopify Plus stores</strong> scaled with our proven strategies.
            </motion.p>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap justify-center items-center gap-8 mb-8 text-green-200"
            >
              <div className="flex items-center">
                <span className="text-2xl mr-2">🏆</span>
                <span className="font-semibold">Shopify Plus Partner</span>
              </div>
              <div className="flex items-center">
                <span className="text-2xl mr-2">🏢</span>
                <span className="font-semibold">30+ Enterprise Stores</span>
              </div>
              <div className="flex items-center">
                <span className="text-2xl mr-2">📈</span>
                <span className="font-semibold">Proven Growth Strategies</span>
              </div>
              <div className="flex items-center">
                <span className="text-2xl mr-2">💎</span>
                <span className="font-semibold">Enterprise Support</span>
              </div>
            </motion.div>

            {/* Countdown Timer */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="bg-black bg-opacity-30 backdrop-blur-sm rounded-2xl p-6 mb-8 mx-auto max-w-lg"
            >
              <h3 className="text-lg font-semibold mb-4 text-yellow-400">⏰ Enterprise Discount Expires In:</h3>
              <div className="flex justify-center space-x-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400">{timeLeft.days}</div>
                  <div className="text-sm text-green-200">Days</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400">{timeLeft.hours}</div>
                  <div className="text-sm text-green-200">Hours</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400">{timeLeft.minutes}</div>
                  <div className="text-sm text-green-200">Minutes</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400">{timeLeft.seconds}</div>
                  <div className="text-sm text-green-200">Seconds</div>
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
                className="bg-gradient-to-r from-yellow-400 to-green-500 text-black font-bold text-xl px-12 py-4 rounded-full hover:from-yellow-300 hover:to-green-400 transform hover:scale-105 transition-all duration-200 shadow-2xl"
              >
                🚀 Get Your Free Enterprise SEO Audit ($3,000 Value)
              </button>
              <p className="text-sm text-green-200">Comprehensive Shopify Plus analysis delivered in 24 hours. No obligations.</p>

              {/* Secondary CTA */}
              <div className="mt-4">
                <button
                  onClick={() => handleCTAClick('hero-secondary')}
                  className="bg-transparent border-2 border-white text-white font-semibold px-8 py-3 rounded-full hover:bg-white hover:text-green-900 transition-all duration-200"
                >
                  📞 Schedule Enterprise Consultation
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
              Enterprise Shopify Plus SEO Results
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real performance metrics from enterprise Shopify Plus stores
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {results.map((result, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-xl p-8 text-center border-t-4 border-green-600"
              >
                <div className="text-4xl mb-4">{result.icon}</div>
                <div className="text-4xl font-bold text-green-600 mb-2">{result.value}</div>
                <div className="text-lg font-semibold text-gray-900 mb-1">{result.metric}</div>
                <div className="text-gray-600">{result.timeframe}</div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <button
              onClick={() => handleCTAClick('results')}
              className="bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold text-xl px-10 py-4 rounded-full hover:from-green-500 hover:to-emerald-500 transform hover:scale-105 transition-all duration-200 shadow-xl"
            >
              🎯 Achieve These Results
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Shopify Plus Requires Specialized SEO
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Enterprise features demand enterprise SEO strategies
            </p>
          </div>

          {/* Feature Tabs */}
          <div className="flex justify-center mb-12">
            <div className="bg-gray-100 rounded-lg p-2 shadow-lg">
              {Object.keys(features).map((key) => (
                <button
                  key={key}
                  onClick={() => setActiveFeature(key)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                    activeFeature === key
                      ? 'bg-green-600 text-white'
                      : 'text-gray-600 hover:text-green-600'
                  }`}
                >
                  {features[key].icon} {features[key].title}
                </button>
              ))}
            </div>
          </div>

          {/* Feature Content */}
          <motion.div
            key={activeFeature}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="max-w-4xl mx-auto"
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                {features[activeFeature].benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <span className="text-green-500 mr-3 text-xl">✓</span>
                    <span className="text-lg text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8">
                <div className="text-6xl text-center mb-4">{features[activeFeature].icon}</div>
                <h3 className="text-2xl font-bold text-center text-gray-900 mb-4">
                  {features[activeFeature].title}
                </h3>
                <p className="text-gray-600 text-center">
                  Leverage Shopify Plus enterprise capabilities for maximum SEO impact and scalable growth.
                </p>
              </div>
            </div>
          </motion.div>

          <div className="text-center mt-12">
            <button
              onClick={() => handleCTAClick('features')}
              className="bg-gradient-to-r from-yellow-400 to-green-500 text-black font-bold text-xl px-10 py-4 rounded-full hover:from-yellow-300 hover:to-green-400 transform hover:scale-105 transition-all duration-200 shadow-xl"
            >
              🏢 Optimize My Enterprise Store
            </button>
          </div>
        </div>
      </section>


      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Complete Shopify Plus SEO Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Enterprise-grade SEO solutions tailored for Shopify Plus stores
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-200"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.category}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>

                <ul className="space-y-3">
                  {service.services.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <span className="text-green-500 mr-3 text-lg">✓</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => handleCTAClick('services')}
              className="bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold text-xl px-10 py-4 rounded-full hover:from-green-500 hover:to-emerald-500 transform hover:scale-105 transition-all duration-200 shadow-xl"
            >
              🔧 Optimize My Shopify Plus Store
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Enterprise SEO Investment Plans
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the perfect plan to scale your Shopify Plus store
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
                    ? 'bg-gradient-to-br from-green-600 to-emerald-600 text-white border-4 border-yellow-400'
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
                  <div className="flex items-baseline justify-center mb-2">
                    <span className={`text-5xl font-bold ${pkg.popular ? 'text-yellow-400' : 'text-green-600'}`}>
                      {pkg.price}
                    </span>
                    <span className={`text-xl ml-2 ${pkg.popular ? 'text-green-200' : 'text-gray-500'}`}>
                      {pkg.period}
                    </span>
                  </div>
                  <div className={`line-through text-lg ${pkg.popular ? 'text-green-200' : 'text-gray-500'}`}>
                    {pkg.originalPrice}
                  </div>
                </div>

                <ul className={`space-y-4 mb-8 ${pkg.popular ? 'text-white' : 'text-gray-700'}`}>
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <span className={`mr-3 text-xl ${pkg.popular ? 'text-yellow-400' : 'text-green-500'}`}>✓</span>
                      <span className={featureIndex === 1 && pkg.name !== "Shopify Plus SEO Essentials" ? 'font-semibold' : ''}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="space-y-4">
                  <button
                    onClick={() => handleCTAClick(`pricing-${pkg.name.toLowerCase().replace(/\s+/g, '-')}`)}
                    className={`w-full font-bold py-4 rounded-lg transition-all duration-200 ${
                      pkg.popular
                        ? 'bg-yellow-400 text-black hover:bg-yellow-300'
                        : 'bg-green-600 text-white hover:bg-green-700'
                    }`}
                  >
                    {pkg.cta}
                  </button>

                  <div className={`text-center text-sm ${pkg.popular ? 'text-green-200' : 'text-gray-500'}`}>
                    🛡️ {pkg.guarantee}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-gray-600 mb-4">
              💰 <strong>Strong ROI:</strong> Proven results for enterprise clients | 🏢 <strong>Enterprise Focus:</strong> Tailored strategies for Shopify Plus
            </p>
            <button
              onClick={() => handleCTAClick('pricing-consultation')}
              className="bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold text-lg px-8 py-3 rounded-full hover:from-blue-400 hover:to-blue-500 transition-all duration-200"
            >
              📞 Schedule Enterprise Consultation
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Shopify Plus SEO Questions Answered
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get clarity on enterprise Shopify Plus SEO services and expectations
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqData.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-green-50 rounded-xl p-8 border-l-4 border-green-600"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => handleCTAClick('faq')}
              className="bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold text-xl px-10 py-4 rounded-full hover:from-green-500 hover:to-emerald-500 transform hover:scale-105 transition-all duration-200 shadow-xl"
            >
              🚀 Scale My Enterprise Store
            </button>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-green-900 to-emerald-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Scale Your Shopify Plus Store to Enterprise Level?
            </h2>
            <p className="text-xl text-green-100 mb-8 leading-relaxed">
              Join 30+ successful Shopify Plus stores that have achieved enterprise-level growth.
              Limited availability for new enterprise clients this quarter.
            </p>

            <div className="space-y-6">
              <button
                onClick={() => handleCTAClick('final-primary')}
                className="bg-gradient-to-r from-yellow-400 to-green-500 text-black font-bold text-2xl px-16 py-5 rounded-full hover:from-yellow-300 hover:to-green-400 transform hover:scale-105 transition-all duration-200 shadow-2xl"
              >
                🎯 Get Your Free Enterprise SEO Audit
              </button>

              <div className="flex flex-wrap justify-center items-center gap-8 text-green-200 text-lg">
                <div className="flex items-center">
                  <span className="text-yellow-400 mr-2">✓</span>
                  <span>Work Starts Within 48 Hours</span>
                </div>
                <div className="flex items-center">
                  <span className="text-yellow-400 mr-2">✓</span>
                  <span>Shopify Plus Experts</span>
                </div>
                <div className="flex items-center">
                  <span className="text-yellow-400 mr-2">✓</span>
                  <span>Dedicated Enterprise Support</span>
                </div>
              </div>

              <p className="text-green-200">
                ⏰ <strong>Enterprise priority:</strong> Only 3 Shopify Plus SEO engagements accepted this month.
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
                🎉 Your Enterprise SEO Audit is Priority!
              </h3>
              <p className="text-gray-600 mb-6">
                Excellent choice! As a Shopify Plus store, you'll receive our comprehensive enterprise audit
                within 24 hours. This includes technical analysis, growth opportunities, and a custom roadmap.
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
                className="mt-6 bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200"
              >
                Excellent!
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
}