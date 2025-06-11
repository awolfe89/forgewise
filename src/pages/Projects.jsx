// pages/Projects.jsx (now Solutions)
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FadeIn, StaggerContainer, StaggerItem } from '../components/AnimatedComponents';
import LazyImage from '../components/LazyImage';
import { BookingLink } from '../components/ProtectedContact';
import SchemaMarkup from '../components/SchemaMarkup';
import emailAppScreenshot from '../assets/aah_ai_email_screen.png';
import chatbotScreenshot from '../assets/integratedChatBot.png';
import socialMediaScreenshot from '../assets/socialBot.png';
import rewriteEngine from '../assets/rewrite_engine.png';
import invDash from '../assets/invDash.png';
import comparisonChart from '../assets/comparison-chart.png';
import contentCannon from '../assets/content-cannon.png';
import adIntelligence from '../assets/ad-intelligence.png';

function SolutionCard({ title, summary, problem, solution, results, metrics, image, category }) {
  const [showImage, setShowImage] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden"
    >
      {image && (
        <div className="relative h-48 overflow-hidden bg-gray-100">
          <LazyImage
            src={image}
            alt={`${title} Solution`}
            className="w-full h-full object-contain cursor-zoom-in p-2"
            onClick={() => setShowImage(true)}
            placeholder="blur"
          />
          {showImage && (
            <div
              className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
              onClick={() => setShowImage(false)}
            >
              <div className="relative max-w-4xl w-full">
                <button 
                  className="absolute top-0 right-0 m-4 text-white bg-black bg-opacity-50 rounded-full p-2"
                  onClick={() => setShowImage(false)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <img src={image} alt="Full Preview" className="max-w-full max-h-screen rounded-lg" />
              </div>
            </div>
          )}
        </div>
      )}
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-medium px-3 py-1 rounded-full bg-indigo-100 text-indigo-700">
            {category}
          </span>
          {metrics.roi && (
            <span className="text-lg font-bold text-green-600">
              {metrics.roi} ROI
            </span>
          )}
        </div>

        <h3 className="text-xl font-bold mb-2 text-gray-900">{title}</h3>
        
        {summary && (
          <p className="text-sm font-medium text-indigo-600 mb-3 italic">
            {summary}
          </p>
        )}
        
        <div className="space-y-4">
          <div>
            <h4 className="text-sm font-semibold text-red-600 mb-1">THE CHALLENGE</h4>
            <p className="text-gray-700">{problem}</p>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-indigo-600 mb-1">OUR SOLUTION</h4>
            <p className="text-gray-700">{solution}</p>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-green-600 mb-1">THE RESULTS</h4>
            <p className="text-gray-700">{results}</p>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-gray-100">
          <div className="grid grid-cols-2 gap-4 text-center">
            {metrics.timeSaved && (
              <div>
                <div className="text-2xl font-bold text-indigo-700">{metrics.timeSaved}</div>
                <div className="text-sm text-gray-600">Time Saved</div>
              </div>
            )}
            {metrics.moneySaved && (
              <div>
                <div className="text-2xl font-bold text-green-600">{metrics.moneySaved}</div>
                <div className="text-sm text-gray-600">Revenue Impact</div>
              </div>
            )}
            {metrics.efficiency && (
              <div>
                <div className="text-2xl font-bold text-purple-600">{metrics.efficiency}</div>
                <div className="text-sm text-gray-600">Efficiency Gain</div>
              </div>
            )}
            {metrics.conversion && (
              <div>
                <div className="text-2xl font-bold text-orange-600">{metrics.conversion}</div>
                <div className="text-sm text-gray-600">Conversion Lift</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Solutions() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const solutions = [
    {
      id: 'customer-service',
      title: "Cut Customer Service Time by 70%",
      summary: "How we freed up 28 hours/week for a growing e-commerce brand's support team.",
      category: "Customer Experience",
      problem: "Support team was drowning in repetitive email queries about order status, shipping, and product details. Response times were 48+ hours.",
      solution: "Built an AI-powered email search system that instantly finds relevant past responses and suggests personalized replies based on context.",
      results: "Support tickets resolved 70% faster. Customer satisfaction scores increased by 23%. Team morale improved dramatically.",
      metrics: {
        timeSaved: "28 hrs/week",
        moneySaved: "$67K/year",
        roi: "312%"
      },
      image: emailAppScreenshot
    },
    {
      id: 'cart-abandonment',
      title: "Recovered $1.2M in Lost Sales",
      summary: "How we slashed cart abandonment from 68% to 51% for a B2B retailer.",
      category: "Revenue Optimization",
      problem: "68% cart abandonment rate with customers asking the same product questions repeatedly. Lost revenue estimated at $200K/month.",
      solution: "Deployed an intelligent chatbot on product pages that answers questions instantly using product data, reviews, and specifications.",
      results: "Cart abandonment dropped to 51%. Conversion rate increased 18% on complex products. Support tickets reduced by 40%.",
      metrics: {
        conversion: "+18%",
        moneySaved: "$1.2M/year",
        roi: "425%"
      },
      image: chatbotScreenshot
    },
    {
      id: 'marketing-automation',
      title: "85% Faster Content Creation",
      summary: "How we gave a marketing team 25 hours back every week through automation.",
      category: "Marketing Efficiency",
      problem: "Marketing team spent 30+ hours/week manually creating social media content. Posts were inconsistent and often delayed.",
      solution: "Created automated content pipeline that generates engaging social posts from product catalog, optimized for each platform.",
      results: "Content creation time reduced by 85%. Engagement rates increased 34%. Consistent posting schedule maintained automatically.",
      metrics: {
        timeSaved: "25 hrs/week",
        efficiency: "+85%",
        roi: "290%"
      },
      image: socialMediaScreenshot
    },
    {
      id: 'content-conversion',
      title: "Turn PDFs into Revenue",
      summary: "How we converted 450+ dusty PDFs into $340K of new product sales.",
      category: "Content Operations",
      problem: "Hundreds of vendor PDFs gathering dust. No easy way to convert technical specs and catalogs into shoppable content.",
      solution: "Built automated system that transforms PDFs into SEO-optimized product pages and blog posts with one click.",
      results: "Published 450+ new pages. Organic traffic increased 67%. Generated $340K in previously untapped product sales.",
      metrics: {
        efficiency: "+90%",
        moneySaved: "$340K",
        roi: "380%"
      },
      image: rewriteEngine
    },
    {
      id: 'inventory-optimization',
      title: "Prevent $2.3M in Dead Stock",
      summary: "How we helped a retailer predict and prevent inventory write-offs.",
      category: "Operations",
      problem: "No visibility into slow-moving inventory until it was too late. Averaged $600K in annual write-offs.",
      solution: "Created predictive dashboard that identifies at-risk inventory with AI-style insights and actionable recommendations.",
      results: "Dead stock reduced by 78%. Inventory turns improved from 4.2 to 6.8. Cash flow improved significantly.",
      metrics: {
        moneySaved: "$2.3M",
        efficiency: "+62%",
        roi: "520%"
      },
      image: invDash
    },
    {
      id: 'product-comparison',
      title: "Boost Complex Sales by 43%",
      summary: "How we turned confused shoppers into confident buyers with smart comparisons.",
      category: "Customer Experience",
      problem: "Customers couldn't easily compare technical products. Sales team fielded 100+ comparison calls weekly.",
      solution: "Built interactive comparison tool that lets customers filter and compare products instantly on the website.",
      results: "43% increase in multi-product orders. Support calls reduced by 65%. Average order value increased $127.",
      metrics: {
        conversion: "+43%",
        timeSaved: "20 hrs/week",
        roi: "367%"
      },
      image: comparisonChart
    },
    {
      id: 'competitor-intelligence',
      title: "Stay Ahead of Competition",
      summary: "How we captured $450K in margin by outsmarting the competition.",
      category: "Marketing Efficiency",
      problem: "No systematic way to track competitor pricing and promotions. Always reacting instead of leading.",
      solution: "Developed browser extension that automatically captures competitor ads and pricing as team browses naturally.",
      results: "Identified 3 major market opportunities. Adjusted pricing strategy to capture $450K in additional margin.",
      metrics: {
        moneySaved: "$450K",
        efficiency: "+100%",
        roi: "890%"
      },
      image: adIntelligence
    },
    {
      id: 'content-distribution',
      title: "10X Content Distribution Speed",
      summary: "How we reduced product update time from 2 weeks to 2 hours across all channels.",
      category: "Content Operations",
      problem: "Product updates took weeks to propagate across all channels. Inconsistent information frustrated customers.",
      solution: "Built Shopify app that syncs product content across all platforms with smart formatting for each channel.",
      results: "Update time reduced from 2 weeks to 2 hours. Content consistency errors eliminated. Customer complaints dropped 89%.",
      metrics: {
        timeSaved: "40 hrs/month",
        efficiency: "+1000%",
        roi: "445%"
      },
      image: contentCannon
    }
  ];

  const categories = ['All', ...new Set(solutions.map(s => s.category))];
  
  // Calculate counts for each category
  const categoryCounts = {
    'All': solutions.length,
    ...categories.slice(1).reduce((acc, cat) => ({
      ...acc,
      [cat]: solutions.filter(s => s.category === cat).length
    }), {})
  };
  
  const filteredSolutions = selectedCategory === 'All' 
    ? solutions 
    : solutions.filter(s => s.category === selectedCategory);

  // Prepare data for schema markup
  const schemaData = {
    solutions: filteredSolutions.map(solution => ({
      title: solution.title,
      description: solution.problem + ' ' + solution.solution,
      features: Object.keys(solution.metrics).map(key => 
        `${solution.metrics[key]} ${key.replace(/([A-Z])/g, ' $1').trim()}`
      )
    }))
  };

  return (
    <div className="pt-20">
      <SchemaMarkup pageType="solutions" data={schemaData} />
      {/* Header Section */}
      <section className="bg-gradient-to-br from-indigo-700 to-teal-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            Real Problems. Real Solutions. Real Results.
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-indigo-100 text-center">
            Explore our portfolio of successful implementations. See how we've helped businesses 
            transform their operations and achieve remarkable results.
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-white py-8 shadow-md">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-3xl font-bold text-indigo-700">$8.2M+</div>
              <div className="text-sm text-gray-600">Revenue Generated</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600">427%</div>
              <div className="text-sm text-gray-600">Average ROI</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600">73%</div>
              <div className="text-sm text-gray-600">Time Saved</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600">2-5 Days</div>
              <div className="text-sm text-gray-600">Typical Timeline</div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-indigo-700 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                }`}
              >
                {category} ({categoryCounts[category]})
              </button>
            ))}
          </div>

          {/* Solutions Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            {filteredSolutions.map(solution => (
              <SolutionCard key={solution.id} {...solution} />
            ))}
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Problem-Solving Process
          </h2>
          
          <div className="grid md:grid-cols-4 gap-6">
            <motion.div
              whileHover={{ y: -5 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔍</span>
              </div>
              <h3 className="font-bold mb-2">1. Diagnose</h3>
              <p className="text-sm text-gray-600">
                We dig deep to understand the real problem, not just symptoms
              </p>
            </motion.div>
            
            <motion.div
              whileHover={{ y: -5 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💡</span>
              </div>
              <h3 className="font-bold mb-2">2. Design</h3>
              <p className="text-sm text-gray-600">
                Create a solution that fits your team, budget, and timeline
              </p>
            </motion.div>
            
            <motion.div
              whileHover={{ y: -5 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="font-bold mb-2">3. Deploy</h3>
              <p className="text-sm text-gray-600">
                Rapid implementation with minimal disruption to operations
              </p>
            </motion.div>
            
            <motion.div
              whileHover={{ y: -5 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="font-bold mb-2">4. Measure</h3>
              <p className="text-sm text-gray-600">
                Track results and prove ROI with real data
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-700 to-teal-700 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            What Challenge Is Your Business Facing?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss your specific needs and explore solutions that deliver results.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <BookingLink
              type="discovery"
              className="inline-flex items-center px-8 py-4 bg-white text-indigo-700 font-bold rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl"
            >
              Schedule Solution Assessment
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </BookingLink>
            
            <a
              href="/quick-fixes"
              className="inline-block px-8 py-4 bg-transparent text-white font-bold rounded-lg border-2 border-white hover:bg-white/10 transition-all text-center"
            >
              Explore Quick Wins
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}