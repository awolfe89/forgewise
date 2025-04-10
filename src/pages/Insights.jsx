// pages/Insights.jsx
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import AttributeFilteringCaseStudy from './insights/AttributeFilteringCaseStudy';
import SeoUxCaseStudy from './insights/SeoUxCaseStudy';
import PpcCostOptimization from './insights/PpcCostOptimization';
import AiInEcommerce from './insights/AiInEcommerce';

// This is your insights data - update with your actual case studies
const INSIGHTS_DATA = [
    {
      id: 'seo-ux-transformation',
      title: 'Unlocking eCommerce Potential Through SEO and UX',
      excerpt: 'How strategic improvements led to a 163% increase in users and 70% growth in sales for a medium-sized distributor.',
      category: 'Case Study',
      date: 'March 2023',
      imageUrl: '/placeholder-image-1.jpg',
      readTime: '7 min read',
    },
    {
      id: 'attribute-filtering',
      title: 'Navigating the 10,000+ SKU Challenge',
      excerpt: 'How attribute-based filtering transformed product discovery for an electronics supply distributor.',
      category: 'Case Study',
      date: 'April 2023',
      imageUrl: '/placeholder-image-2.jpg',
      readTime: '8 min read',
    },
    {
        id: 'ppc-cost-optimization',
        title: 'You Are Paying Too Much For Google Ads',
        excerpt: 'How switching from basic to advanced Google Ads can dramatically reduce your cost per acquisition and improve targeting.',
        category: 'Insights',
        date: 'March 2023',
        imageUrl: '/placeholder-image-5.jpg',
        readTime: '6 min read',
      },
    {
      id: 'ai-in-ecommerce',
      title: 'Practical Applications of AI in Modern eCommerce',
      excerpt: 'Beyond the hype: real-world examples of how AI is transforming customer experiences and operational efficiency.',
      category: 'Insights',
      date: 'March 2025',
      imageUrl: '/placeholder-image-4.jpg',
      readTime: '5 min read',
    },
    // Add more case studies as you create them
  ];

  function InsightCard({ insight }) {
    // Map categories to icons and colors
    const categoryStyles = {
      'Case Study': {
        icon: '📊',
        bgColor: 'from-blue-500 to-blue-700',
        iconBg: 'bg-blue-400',
      },
      'Insights': {
        icon: '💡',
        bgColor: 'from-indigo-500 to-purple-600',
        iconBg: 'bg-indigo-400',
      },
      // Add more categories as needed
    };
  
    // Get styling based on category, or use default if category not found
    const style = categoryStyles[insight.category] || {
      icon: '📄',
      bgColor: 'from-gray-500 to-gray-700',
      iconBg: 'bg-gray-400',
    };
  
    return (
      <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg border border-slate-100 hover:-translate-y-1">
        {/* Image replacement - gradient background with icon */}
        <div className={`h-48 bg-gradient-to-br ${style.bgColor} relative overflow-hidden`}>
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-pattern"></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className={`w-16 h-16 ${style.iconBg} bg-opacity-30 rounded-full flex items-center justify-center text-white`}>
              <span className="text-4xl">{style.icon}</span>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full p-4">
            <h3 className="text-xl font-bold text-white mb-1 drop-shadow-md line-clamp-2">
              {insight.title}
            </h3>
          </div>
        </div>
        <div className="p-6">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-xs font-semibold px-2 py-1 bg-blue-100 text-blue-700 rounded-full">
              {insight.category}
            </span>
            <span className="text-sm text-gray-500">{insight.date}</span>
            <span className="text-sm text-gray-500">{insight.readTime}</span>
          </div>
          <p className="text-gray-600 mb-4 line-clamp-3">{insight.excerpt}</p>
          <Link 
            to={`/insights/${insight.id}`} 
            className="text-blue-700 font-medium flex items-center hover:text-blue-800 transition"
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

// Component for an individual case study/insight page
export function InsightDetail() {
  const { insightId } = useParams();
  
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Map insightId to the appropriate component
  switch(insightId) {
    case 'attribute-filtering':
      return <AttributeFilteringCaseStudy />;
    case 'seo-ux-transformation':
      return <SeoUxCaseStudy />;
      case 'ppc-cost-optimization':
  return <PpcCostOptimization />;
  case 'ai-in-ecommerce':
  return <AiInEcommerce />;
    default:
      // For insights you haven't created custom components for yet
      const insight = INSIGHTS_DATA.find(item => item.id === insightId);
      
      if (!insight) {
        return (
          <div className="pt-20">
            <div className="max-w-4xl mx-auto py-16 px-6">
              <h1 className="text-4xl font-bold mb-4">Insight Not Found</h1>
              <p>The requested insight could not be found.</p>
              <Link 
                to="/insights" 
                className="mt-4 inline-block text-blue-700 font-medium hover:text-blue-800 transition"
              >
                Back to Insights
              </Link>
            </div>
          </div>
        );
      }
      
      return (
        <div className="pt-20">
          <div className="max-w-4xl mx-auto py-16 px-6">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">{insight.title}</h1>
              <div className="flex items-center justify-center gap-4 text-gray-500">
                <span>{insight.date}</span>
                <span>•</span>
                <span>{insight.readTime}</span>
                <span>•</span>
                <span className="text-blue-700">{insight.category}</span>
              </div>
            </div>
            
            <div className="prose prose-lg mx-auto">
              <p>
                This case study content is coming soon. In the meantime, you can check out our 
                completed case studies on <Link to="/insights/attribute-filtering">Attribute-Based Filtering</Link> or
                <Link to="/insights/seo-ux-transformation"> SEO & UX Transformation</Link>.
              </p>
            </div>
          </div>
        </div>
      );
  }
}

export default function Insights() {
  const [categoryFilter, setCategoryFilter] = useState('All');
  const categories = ['All', 'Case Study', 'Insights'];
  
  return (
    <div className="pt-20">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-blue-700 to-blue-800 text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Insights & Case Studies</h1>
          <p className="text-xl max-w-3xl mx-auto mb-4 text-blue-100">
            Practical perspectives on eCommerce leadership, technical innovation, and digital growth strategies.
          </p>
        </div>
      </section>

      {/* Insights Grid */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          {/* Category Filter */}
          <div className="flex justify-center mb-12">
            <div className="bg-white rounded-full shadow-sm inline-flex p-1">
              {categories.map(category => (
                <button
                  key={category}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition ${
                    categoryFilter === category 
                      ? 'bg-blue-700 text-white' 
                      : 'text-gray-700 hover:bg-slate-100'
                  }`}
                  onClick={() => setCategoryFilter(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          
          {/* Insights Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {INSIGHTS_DATA
              .filter(insight => categoryFilter === 'All' || insight.category === categoryFilter)
              .map(insight => (
                <InsightCard key={insight.id} insight={insight} />
              ))
            }
          </div>
          
        
        </div>
      </section>
    </div>
  );
}