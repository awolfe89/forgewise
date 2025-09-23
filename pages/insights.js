import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { StaggerContainer, StaggerItem } from '../src/components/AnimatedComponents';
import NextSEO from '../src/components/NextSEO';
import { getPageSEO } from '../src/config/seo';

// Pillar posts that rank and convert
const pillarPosts = [
  {
    id: 'smb-playbook',
    title: 'The Small Business Playbook: Speed & CRO that actually move revenue',
    category: 'Guide',
    readTime: '15 min',
    date: '2024-01-20',
    excerpt: 'The complete guide to conversion optimization for $100K-$5M brands. Skip the theory, get the tactics that work.',
    image: '/comparison-chart.png',
    tags: ['CRO', 'Speed', 'Revenue'],
    isPillar: true
  },
  {
    id: 'ga4-for-owners',
    title: 'GA4 for Owners: Clean events & sane reports in 1 day',
    category: 'Guide',
    readTime: '12 min',
    date: '2024-01-18',
    excerpt: 'Stop flying blind. Set up GA4 properly, track what matters, and actually understand your data.',
    image: '/ad-intelligence.png',
    tags: ['GA4', 'Analytics', 'Tracking'],
    isPillar: true
  },
  {
    id: 'shopify-vs-magento',
    title: 'Shopify vs. Magento for $100K–$5M brands: a practical guide',
    category: 'Guide',
    readTime: '18 min',
    date: '2024-01-15',
    excerpt: 'The real costs, limitations, and growth potential of each platform. Based on 50+ migrations.',
    image: '/neptune.png',
    tags: ['Shopify', 'Magento', 'Platform'],
    isPillar: true
  }
];

const regularInsights = [
  {
    id: 'shopify-speed',
    title: 'The $50K Hidden Cost of Slow Shopify Sites',
    category: 'Performance',
    readTime: '8 min',
    date: '2024-01-10',
    excerpt: 'Every second of load time costs you 7% in conversions. Fix it without rebuilding.',
    image: '/technimark.png',
    tags: ['Shopify', 'Performance', 'Conversion']
  },
  {
    id: 'ppc-cost-optimization',
    title: 'Cut Your PPC Costs by 40% Without Losing Sales',
    category: 'Marketing',
    readTime: '12 min',
    date: '2024-01-05',
    excerpt: 'Stop burning cash on Google Ads. These 5 optimization strategies actually work.',
    image: '/ad-intelligence.png',
    tags: ['PPC', 'Google Ads', 'ROI']
  },
  {
    id: 'ai-in-ecommerce',
    title: 'AI in E-commerce: Hype vs Reality in 2024',
    category: 'Technology',
    readTime: '15 min',
    date: '2023-12-28',
    excerpt: 'We tested 20 AI tools for e-commerce. Only 5 actually delivered ROI. Here\'s what worked.',
    image: '/aah_ai_email_screen.png',
    tags: ['AI', 'E-commerce', 'Technology']
  },
  {
    id: 'seo-ux-case-study',
    title: 'How Fixing UX Doubled Our Client\'s Organic Traffic',
    category: 'Case Study',
    readTime: '10 min',
    date: '2023-12-20',
    excerpt: 'SEO isn\'t just about keywords. This case study shows how UX improvements led to massive organic growth.',
    image: '/neptune.png',
    tags: ['SEO', 'UX', 'Case Study']
  },
  {
    id: 'unused-features',
    title: 'The Features Your Customers Never Use (And Why They Matter)',
    category: 'Product',
    readTime: '8 min',
    date: '2023-12-15',
    excerpt: 'We analyzed 50 e-commerce sites. 70% of features go unused, but removing them hurt conversions. Here\'s why.',
    image: '/comparison-chart.png',
    tags: ['UX', 'Product', 'Analytics']
  },
  {
    id: 'attribute-filtering',
    title: 'Why Amazon-Style Filtering Doubled This Store\'s Revenue',
    category: 'Case Study',
    readTime: '7 min',
    date: '2023-12-10',
    excerpt: 'One simple navigation change led to 2.3x revenue. Here\'s exactly how to implement it.',
    image: '/content-cannon.png',
    tags: ['UX', 'Navigation', 'Revenue']
  }
];

const insights = [...pillarPosts, ...regularInsights];

export default function Insights() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    'all',
    ...Array.from(new Set(insights.map(i => i.category)))
  ];

  const filteredInsights = insights.filter(insight => {
    const matchesCategory = selectedCategory === 'all' || insight.category === selectedCategory;
    const matchesSearch = insight.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         insight.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         insight.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const seoData = getPageSEO('/insights');

  return (
    <>
      <NextSEO {...seoData} />
      
      <div className="min-h-screen pt-20">
        {/* Header */}
        <section className="bg-gradient-to-br from-purple-700 to-pink-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <motion.h1
              initial={{ opacity: 1, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              Insights That Drive Action
            </motion.h1>
            <motion.p
              initial={{ opacity: 1, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl max-w-3xl mx-auto text-purple-100"
            >
              Real-world lessons from helping 35+ businesses grow their revenue. 
              No fluff, just actionable insights you can implement today.
            </motion.p>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="py-8 bg-gray-50 sticky top-20 z-10 shadow-sm mb-8">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="flex flex-wrap gap-2">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      selectedCategory === cat
                        ? 'bg-purple-600 text-white'
                        : 'bg-white text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {cat.charAt(0).toUpperCase() + cat.slice(1)}
                  </button>
                ))}
              </div>
              
              <div className="relative w-full md:w-64">
                <input
                  type="text"
                  placeholder="Search insights..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                />
                <svg className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* Pinned Pillar Posts */}
        {selectedCategory === 'all' && searchTerm === '' && (
          <section className="py-12 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">
              <h2 className="text-2xl font-bold mb-8 text-center">📌 Essential Guides for Growing E-Commerce</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {pillarPosts.map((post, index) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 1, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={`/insights/${post.id}`}
                      className="block bg-white rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-1 border-2 border-blue-100"
                    >
                      <div className="relative h-48 bg-gradient-to-br from-blue-50 to-emerald-50 overflow-hidden">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-contain"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium z-10">
                          Pillar Post
                        </div>
                      </div>

                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-3 line-clamp-2">{post.title}</h3>
                        <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-blue-600">{post.readTime} read</span>
                          <span className="text-sm text-blue-600 font-medium">Read now →</span>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* All Insights Grid */}
        <StaggerContainer className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-2xl font-bold mb-8">{selectedCategory === 'all' && searchTerm === '' ? 'Recent Insights' : 'Insights'}</h2>
            {filteredInsights.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-600 text-lg">No insights found matching your criteria.</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
                {filteredInsights.filter(i => !i.isPillar || selectedCategory !== 'all' || searchTerm !== '').map((insight, index) => (
                  <StaggerItem key={insight.id} index={index} className="h-full">
                    <Link 
                      href={`/insights/${insight.id}`}
                      className="block bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-1 h-full flex flex-col"
                    >
                      <div className="relative h-48 bg-white overflow-hidden flex-shrink-0">
                        <Image
                          src={insight.image}
                          alt={insight.title}
                          fill
                          className="object-contain"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </div>
                      
                      <div className="p-6 flex flex-col flex-grow">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-sm font-medium text-purple-600">{insight.category}</span>
                          <span className="text-sm text-gray-500">{insight.readTime} read</span>
                        </div>
                        
                        <h3 className="text-xl font-bold mb-3 line-clamp-2 min-h-[3.5rem]">{insight.title}</h3>
                        <p className="text-gray-600 mb-4 line-clamp-3 flex-grow">{insight.excerpt}</p>
                        
                        <div className="flex items-center justify-between mt-auto">
                          <div className="flex flex-wrap gap-2">
                            {insight.tags.slice(0, 2).map(tag => (
                              <span key={tag} className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded">
                                {tag}
                              </span>
                            ))}
                          </div>
                          <span className="text-sm text-gray-500">
                            {new Date(insight.date).toLocaleDateString('en-US', { 
                              month: 'short', 
                              day: 'numeric' 
                            })}
                          </span>
                        </div>
                      </div>
                    </Link>
                  </StaggerItem>
                ))}
              </div>
            )}
          </div>
        </StaggerContainer>

        {/* Email Nurture CTA */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6">
            <div className="bg-gradient-to-br from-blue-50 to-emerald-50 rounded-2xl shadow-xl p-8 md:p-12 text-center border-2 border-blue-100">
              <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-full mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold mb-4">Get the 5-Day Revenue Accelerator</h2>
              <p className="text-xl text-gray-600 mb-6">
                5 emails. 5 tactics. Each one adds 5-10% to your bottom line.
              </p>
              <ul className="text-left max-w-md mx-auto mb-8 space-y-2">
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-2">✓</span>
                  <span className="text-gray-700">Day 1: The 15-minute site speed audit</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-2">✓</span>
                  <span className="text-gray-700">Day 2: Cart abandonment quick wins</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-2">✓</span>
                  <span className="text-gray-700">Day 3: PPC waste elimination checklist</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-2">✓</span>
                  <span className="text-gray-700">Day 4: Email revenue maximizers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-2">✓</span>
                  <span className="text-gray-700">Day 5: Conversion rate quick fixes</span>
                </li>
              </ul>
              
              <form
                name="newsletter"
                method="POST"
                action="/thank-you/"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                acceptCharset="UTF-8"
                className="max-w-md mx-auto"
              >
                <input type="hidden" name="form-name" value="newsletter" />
                <div hidden>
                  <label>
                    Don't fill this out: <input name="bot-field" />
                  </label>
                </div>
                
                <div className="flex gap-4">
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    required
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 transition-colors"
                  >
                    Subscribe
                  </button>
                </div>
                
                <p className="text-sm text-gray-500 mt-4">
                  No spam, ever. Unsubscribe anytime.
                </p>
              </form>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-br from-purple-900 to-pink-900 text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Apply These Insights?
            </h2>
            <p className="text-xl mb-8 text-purple-100">
              Let's discuss how these strategies can work for your business.
            </p>
            <Link 
              href="/contact/"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-purple-900 rounded-lg hover:bg-gray-100 transition-all font-medium"
            >
              Get Expert Help →
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}

