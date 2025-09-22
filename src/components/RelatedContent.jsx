import Link from 'next/link';
import { motion } from 'framer-motion';

/**
 * RelatedContent Component
 * 
 * A flexible component for displaying related content sections
 * Can be used for related articles, projects, services, etc.
 * 
 * @param {Object} props
 * @param {string} props.title - Section title (e.g., "Related Articles", "Similar Projects")
 * @param {Array} props.items - Array of related content items
 * @param {string} props.variant - Display variant: 'grid', 'list', or 'cards' (default: 'cards')
 * @param {string} props.className - Additional CSS classes
 */
export default function RelatedContent({ 
  title = "Related Content", 
  items = [], 
  variant = 'cards',
  className = '' 
}) {
  if (!items || items.length === 0) return null;

  const renderGrid = () => (
    <div className="grid md:grid-cols-3 gap-6">
      {items.map((item, index) => (
        <motion.div
          key={item.id || index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <Link
            href={item.link}
            className="block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 h-full"
          >
            {item.badge && (
              <span className={`inline-block text-xs font-bold px-2 py-1 rounded-full mb-3 ${item.badgeColor || 'bg-indigo-100 text-indigo-700'}`}>
                {item.badge}
              </span>
            )}
            <h3 className="font-bold text-lg mb-2 text-gray-900 group-hover:text-indigo-600 transition-colors">
              {item.title}
            </h3>
            <p className="text-gray-600 text-sm mb-3">{item.description}</p>
            {item.metric && (
              <p className="text-indigo-600 font-semibold text-sm">{item.metric}</p>
            )}
            <span className="text-indigo-600 text-sm font-medium inline-flex items-center mt-2">
              Learn more →
            </span>
          </Link>
        </motion.div>
      ))}
    </div>
  );

  const renderList = () => (
    <div className="space-y-4">
      {items.map((item, index) => (
        <motion.div
          key={item.id || index}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <Link
            href={item.link}
            className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            {item.icon && (
              <div className="flex-shrink-0 w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                <span className="text-xl">{item.icon}</span>
              </div>
            )}
            <div className="flex-grow">
              <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
              {item.tags && (
                <div className="flex gap-2 mt-2">
                  {item.tags.map(tag => (
                    <span key={tag} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
            <span className="text-indigo-600 flex-shrink-0">→</span>
          </Link>
        </motion.div>
      ))}
    </div>
  );

  const renderCards = () => (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item, index) => (
        <motion.div
          key={item.id || index}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.1 }}
          viewport={{ once: true }}
          className="group"
        >
          <Link href={item.link} className="block h-full">
            <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all h-full p-6 border border-gray-100 group-hover:border-indigo-200">
              {item.category && (
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-medium text-indigo-600 uppercase tracking-wide">
                    {item.category}
                  </span>
                  {item.readTime && (
                    <span className="text-xs text-gray-500">{item.readTime} read</span>
                  )}
                </div>
              )}
              
              <h3 className="font-bold text-lg mb-2 text-gray-900 group-hover:text-indigo-600 transition-colors">
                {item.title}
              </h3>
              
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                {item.description}
              </p>
              
              <div className="flex items-center justify-between mt-auto">
                {item.author && (
                  <span className="text-xs text-gray-500">{item.author}</span>
                )}
                {item.cta && (
                  <span className="text-sm font-medium text-indigo-600 group-hover:text-indigo-700">
                    {item.cta} →
                  </span>
                )}
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );

  return (
    <section className={`py-12 ${className}`}>
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
          {title}
        </h2>
        
        {variant === 'grid' && renderGrid()}
        {variant === 'list' && renderList()}
        {variant === 'cards' && renderCards()}
      </div>
    </section>
  );
}

// Helper function to get related items based on current page
export function getRelatedItems(currentPath, currentItem) {
  // This would typically fetch from a data source
  // For now, return sample data based on path
  
  if (currentPath.includes('/insights/')) {
    return [
      {
        id: 'insight-1',
        title: 'Cut Your Google Ads Spend by 67%',
        description: 'Learn the exact framework that reduced CPA from $127 to $41.',
        link: '/insights/ppc-cost-optimization',
        category: 'Marketing',
        readTime: '5 min',
        cta: 'Read insight'
      },
      {
        id: 'insight-2',
        title: 'The $847/Month You\'re Wasting on Software',
        description: 'Our step-by-step audit guide helps you cut unnecessary costs.',
        link: '/insights/unused-features',
        category: 'Cost Optimization',
        readTime: '4 min',
        cta: 'Start saving'
      },
      {
        id: 'insight-3',
        title: 'Why Your Shopify Store Is Slow',
        description: 'The exact 30-minute fix to improve speed and conversions.',
        link: '/insights/shopify-speed',
        category: 'Performance',
        readTime: '3 min',
        cta: 'Fix it now'
      }
    ];
  }
  
  if (currentPath.includes('/solutions')) {
    return [
      {
        id: 'solution-1',
        title: 'Cut Customer Service Time by 70%',
        description: 'AI-powered email system that saved 28 hours/week.',
        link: '/solutions#customer-service',
        metric: '312% ROI',
        badge: 'Customer Experience'
      },
      {
        id: 'solution-2',
        title: 'Recovered $1.2M in Lost Sales',
        description: 'Slashed cart abandonment from 68% to 51%.',
        link: '/solutions#cart-abandonment',
        metric: '425% ROI',
        badge: 'Revenue Optimization'
      },
      {
        id: 'solution-3',
        title: '85% Faster Content Creation',
        description: 'Automated pipeline for social media content.',
        link: '/solutions#marketing-automation',
        metric: '290% ROI',
        badge: 'Marketing Efficiency'
      }
    ];
  }
  
  if (currentPath.includes('/quick-fixes')) {
    return [
      {
        id: 'fix-1',
        title: 'Cart Abandonment Solution',
        description: '70% cart abandonment? Cut it in half with proven strategies.',
        link: '/quick-fixes',
        icon: '🛒',
        tags: ['3-5 days', 'Revenue']
      },
      {
        id: 'fix-2',
        title: 'SEO & Visibility Rescue',
        description: 'Your site is invisible on Google. We\'ll fix what\'s blocking you.',
        link: '/quick-fixes',
        icon: '🔍',
        tags: ['2-3 days', 'Visibility']
      },
      {
        id: 'fix-3',
        title: 'Ad Spend Optimization',
        description: 'Stop wasting money on ineffective ads. Get more for less.',
        link: '/quick-fixes',
        icon: '💰',
        tags: ['1-2 days', 'Efficiency']
      }
    ];
  }
  
  return [];
}