// pages/Insights.jsx
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { BookingLink } from '../components/ProtectedContact';
import AttributeFilteringCaseStudy from './insights/AttributeFilteringCaseStudy';
import SeoUxCaseStudy from './insights/SeoUxCaseStudy';
import PpcCostOptimization from './insights/PpcCostOptimization';
import AiInEcommerce from './insights/AiInEcommerce';
import ShopifySpeed from './insights/ShopifySpeed';
import HiddenInventoryCosts from './insights/HiddenInventoryCosts';
import UnusedFeatures from './insights/UnusedFeatures';

// Updated insights data focused on solutions rather than costs
const INSIGHTS_DATA = [
  {
    id: 'shopify-speed',
    title: 'Speed Optimization for E-commerce Success',
    excerpt: 'Learn how to dramatically improve your site\'s loading speed and conversion rates with proven optimization techniques.',
    category: 'Performance',
    date: 'January 2025',
    readTime: '4 min read',
    priority: 'HIGH',
    impact: 'Conversion Rate'
  },
  {
    id: 'hidden-inventory-costs',
    title: 'Automate Your Inventory Management',
    excerpt: 'Discover how modern inventory systems can save hours of manual work while improving accuracy and efficiency.',
    category: 'Automation',
    date: 'January 2025',
    readTime: '5 min read',
    priority: 'MEDIUM',
    impact: 'Efficiency'
  },
  {
    id: 'unused-features',
    title: 'Software Optimization Guide',
    excerpt: 'A systematic approach to auditing your software stack and eliminating wasteful spending on unused features.',
    category: 'Cost Optimization',
    date: 'January 2025',
    readTime: '3 min read',
    priority: 'LOW',
    impact: 'Cost Savings'
  },
  {
    id: 'ppc-cost-optimization',
    title: 'Advanced PPC Strategies for Better ROI',
    excerpt: 'Master advanced Google Ads techniques to dramatically improve your campaign performance and reduce costs.',
    category: 'Marketing',
    date: 'December 2024',
    readTime: '6 min read',
    priority: 'HIGH',
    impact: 'Marketing ROI'
  },
  {
    id: 'seo-ux-transformation',
    title: 'SEO & UX: A Winning Combination',
    excerpt: 'How strategic SEO and UX improvements can transform your site\'s performance and drive substantial growth.',
    category: 'Case Study',
    date: 'November 2024',
    readTime: '7 min read',
    priority: 'HIGH',
    impact: 'Traffic & Sales'
  },
  {
    id: 'attribute-filtering',
    title: 'Smart Product Discovery for Large Catalogs',
    excerpt: 'Implement intelligent filtering systems that help customers find products quickly, improving user experience and conversions.',
    category: 'UX Strategy',
    date: 'October 2024',
    readTime: '8 min read',
    priority: 'MEDIUM',
    impact: 'User Experience'
  },
  {
    id: 'ai-in-ecommerce',
    title: 'Practical AI Implementation Guide',
    excerpt: 'Explore proven AI applications that deliver measurable ROI in e-commerce operations and customer experience.',
    category: 'Innovation',
    date: 'September 2024',
    readTime: '5 min read',
    priority: 'LOW',
    impact: 'Future-Ready'
  }
];

function InsightCard({ insight }) {
  const priorityColors = {
    'HIGH': 'bg-red-100 text-red-700 border-red-300',
    'MEDIUM': 'bg-amber-100 text-amber-700 border-amber-300',
    'LOW': 'bg-green-100 text-green-700 border-green-300'
  };

  const priorityLabels = {
    'HIGH': 'Must-Read',
    'MEDIUM': 'Worthwhile',
    'LOW': 'Explore When You Have Time'
  };

  const categoryIcons = {
    'Performance': '🚀',
    'Automation': '⚙️',
    'Cost Optimization': '💡',
    'Marketing': '📊',
    'Case Study': '📈',
    'UX Strategy': '🎯',
    'Innovation': '🤖'
  };

  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col h-full min-h-[420px]">
      {/* Priority Banner */}
      <div className={`px-4 py-2 ${priorityColors[insight.priority]} border-b flex items-center justify-between flex-shrink-0`}>
        <span className="font-semibold text-sm">
          {priorityLabels[insight.priority]}
        </span>
        <span className="font-medium text-sm">
          {insight.impact}
        </span>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center gap-2 mb-3 flex-shrink-0">
          <span className="text-2xl">{categoryIcons[insight.category] || '📄'}</span>
          <span className="text-sm font-medium text-gray-600">
            {insight.category}
          </span>
          <span className="text-sm text-gray-500">•</span>
          <span className="text-sm text-gray-500">{insight.readTime}</span>
        </div>
        
        <h3 className="text-xl font-bold mb-3 text-gray-900 hover:text-indigo-700 transition-colors line-clamp-2 min-h-[3.5rem]">
          {insight.title}
        </h3>
        
        <p className="text-gray-700 mb-4 line-clamp-3 flex-grow">{insight.excerpt}</p>
        
        <Link 
          href={`/insights/${insight.id}`} 
          className="inline-flex items-center text-indigo-700 font-bold hover:text-indigo-800 transition mt-auto"
        >
          Read More
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>
    </div>
  );
}

// Component for individual insight pages
export function InsightDetail() {
  const router = useRouter();
  const { insightId } = router.query;
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Map insightId to the appropriate component
  switch(insightId) {
    case 'shopify-speed':
      return <ShopifySpeed />;
    case 'hidden-inventory-costs':
      return <HiddenInventoryCosts />;
    case 'unused-features':
      return <UnusedFeatures />;
    case 'attribute-filtering':
      return <AttributeFilteringCaseStudy />;
    case 'seo-ux-transformation':
      return <SeoUxCaseStudy />;
    case 'ppc-cost-optimization':
      return <PpcCostOptimization />;
    case 'ai-in-ecommerce':
      return <AiInEcommerce />;
    default:
      const insight = INSIGHTS_DATA.find(item => item.id === insightId);
      
      if (!insight) {
        return (
          <div className="pt-20">
            <div className="max-w-4xl mx-auto py-16 px-6">
              <h1 className="text-4xl font-bold mb-4">Insight Not Found</h1>
              <p>The requested insight doesn't exist.</p>
              <Link 
                href="/insights" 
                className="mt-4 inline-block text-indigo-700 font-medium hover:text-indigo-800 transition"
              >
                Back to All Insights
              </Link>
            </div>
          </div>
        );
      }
      
      return (
        <div className="pt-20">
          <div className="max-w-4xl mx-auto py-16 px-6">
            <h1 className="text-4xl font-bold mb-4">{insight.title}</h1>
            <p className="text-xl text-gray-600 mb-8">
              This insight is being prepared. In the meantime, let's discuss how we can help with this challenge.
            </p>
            <BookingLink
              type="discovery"
              className="inline-block px-6 py-3 bg-indigo-700 text-white font-bold rounded-lg hover:bg-indigo-800"
            >
              Schedule a Discussion
            </BookingLink>
          </div>
        </div>
      );
  }
}

export default function Insights() {
  const [sortBy, setSortBy] = useState('newest');
  const [filterCategory, setFilterCategory] = useState('All');
  
  const categories = ['All', 'Performance', 'Automation', 'Cost Optimization', 'Marketing', 'Case Study', 'UX Strategy', 'Innovation'];
  
  // Sort insights based on selection
  const sortedInsights = [...INSIGHTS_DATA].sort((a, b) => {
    if (sortBy === 'priority') {
      const priorityOrder = { 'HIGH': 0, 'MEDIUM': 1, 'LOW': 2 };
      return priorityOrder[a.priority] - priorityOrder[b.priority];
    }
    if (sortBy === 'newest') {
      return new Date(b.date) - new Date(a.date);
    }
    return 0;
  });
  
  const filteredInsights = sortedInsights.filter(
    insight => filterCategory === 'All' || insight.category === filterCategory
  );
  
  return (
    <div className="pt-20">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-indigo-700 to-teal-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Strategic Insights & Solutions
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-indigo-100">
            Actionable guidance to optimize your operations, reduce costs, and leverage technology for competitive advantage.
          </p>
        </div>
      </section>

      {/* Insights Grid */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          {/* Article Count */}
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">
              {filteredInsights.length} Insights Available
            </h2>
            <p className="text-gray-600 mt-2">
              Practical strategies to improve your business performance
            </p>
          </div>

          {/* Filters and Sorting */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-4">
            <div className="flex items-center gap-4">
              <span className="font-medium text-gray-700">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="newest">Newest First</option>
                <option value="priority">By Importance</option>
              </select>
            </div>
            
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setFilterCategory(category)}
                  className={`px-4 py-2 rounded-lg font-medium transition ${
                    filterCategory === category 
                      ? 'bg-indigo-700 text-white' 
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          
          {/* Insights Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
            {filteredInsights.map(insight => (
              <InsightCard key={insight.id} insight={insight} />
            ))}
          </div>
          
          {/* CTA Section */}
          <div className="mt-16 bg-indigo-700 rounded-2xl p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-4">
              Ready to Apply These Insights?
            </h2>
            <p className="text-lg mb-6 opacity-90">
              Let's discuss how these strategies can transform your business operations.
            </p>
            <BookingLink
              type="consultation"
              className="inline-block px-8 py-3 bg-white text-indigo-700 font-bold rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105"
            >
              Schedule Strategic Consultation
            </BookingLink>
          </div>
        </div>
      </section>
    </div>
  );
}