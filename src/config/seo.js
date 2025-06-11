export const siteConfig = {
  name: 'Forgewise',
  title: 'Forgewise.io - Strategic Technology Consulting',
  description: 'Transform your business operations with strategic technology consulting. We solve complex problems with practical solutions that deliver measurable results.',
  url: 'https://forgewise.io',
  author: 'Forgewise Team',
  image: '/forgewisе-icon.png',
  locale: 'en_US',
  type: 'website'
};

// Page-specific SEO configurations
export const pageSEO = {
  home: {
    title: 'Forgewise.io - Strategic Technology Consulting',
    description: 'Transform your business operations with strategic technology consulting. We solve complex problems with practical solutions that deliver measurable results.',
    keywords: 'technology consulting, business transformation, process optimization, digital strategy, operational efficiency'
  },
  quickFixes: {
    title: 'Quick Solutions for Common Business Problems | Forgewise',
    description: 'Rapid implementation of proven solutions for your most pressing business challenges. Clear scope, transparent pricing, fast results.',
    keywords: 'business solutions, quick fixes, process improvement, technology implementation, rapid deployment'
  },
  solutions: {
    title: 'Proven Solutions That Drive Results | Forgewise',
    description: 'Explore our portfolio of successful implementations. Real problems, innovative solutions, measurable outcomes.',
    keywords: 'business solutions, case studies, technology implementation, ROI, process automation'
  },
  results: {
    title: 'Client Success Stories | Forgewise',
    description: 'See how we\'ve helped businesses transform their operations and achieve remarkable results through strategic technology implementation.',
    keywords: 'client success, case studies, business transformation, technology results, ROI examples'
  },
  about: {
    title: 'About Forgewise - Strategic Technology Partners',
    description: 'We\'re strategic technology consultants who deliver practical solutions. No fluff, just results-driven implementations that transform your business.',
    keywords: 'Forgewise, technology consulting, strategic partners, business transformation'
  },
  insights: {
    title: 'Business Insights & Strategic Guidance | Forgewise',
    description: 'Discover actionable insights to optimize your operations, reduce costs, and leverage technology for competitive advantage.',
    keywords: 'business insights, technology strategy, operational efficiency, cost optimization'
  },
  contact: {
    title: 'Contact Forgewise - Start Your Transformation',
    description: 'Ready to transform your business? Let\'s discuss your challenges and explore strategic solutions.',
    keywords: 'contact Forgewise, technology consulting, business consultation, strategic planning'
  },
  'privacy-policy': {
    title: 'Privacy Policy | Forgewise',
    description: 'Learn how Forgewise.io collects, uses, and protects your information. Our commitment to your privacy and data security.',
    keywords: 'privacy policy, data protection, information security, GDPR compliance',
    type: 'website'
  },
  'terms-of-service': {
    title: 'Terms of Service | Forgewise',
    description: 'Terms and conditions for using Forgewise.io services. Understand our service agreements and legal obligations.',
    keywords: 'terms of service, legal terms, service agreement, terms and conditions',
    type: 'website'
  },
  accessibility: {
    title: 'Accessibility Statement | Forgewise',
    description: 'Our commitment to digital accessibility. Learn about our WCAG compliance and how to report accessibility issues.',
    keywords: 'accessibility, WCAG compliance, digital accessibility, ADA compliance',
    type: 'website'
  },
  // Individual insight pages
  'insights/shopify-speed-fix': {
    title: 'Why Your Shopify Store Is Slow (And The $50 Fix) | Forgewise',
    description: 'Your store takes 8+ seconds to load. You\'re losing $10K/month. Here\'s the exact 30-minute fix to improve speed and conversions.',
    keywords: 'shopify speed optimization, site speed, page load time, conversion optimization, ecommerce performance',
    type: 'article',
    publishedTime: '2025-01-06',
    author: 'Forgewise Team',
    section: 'E-commerce Optimization',
    tags: ['Shopify', 'Site Speed', 'Conversion Optimization', 'Performance']
  },
  'insights/hidden-inventory-costs': {
    title: 'The Hidden Cost of Manual Inventory Management | Forgewise',
    description: 'Manual inventory tracking is costing you $30K+ annually. Learn how automation can save 15 hours/week and reduce errors by 95%.',
    keywords: 'inventory automation, cost reduction, inventory management, operational efficiency, warehouse automation',
    type: 'article',
    publishedTime: '2024-12-15',
    author: 'Forgewise Team',
    section: 'Operations',
    tags: ['Inventory', 'Automation', 'Cost Reduction', 'Efficiency']
  },
  'insights/unused-features': {
    title: 'The $847/Month You\'re Wasting on Software | Forgewise',
    description: 'Most businesses waste $847/month on unused software features. Our step-by-step audit guide helps you cut unnecessary costs.',
    keywords: 'software audit, SaaS optimization, subscription management, cost reduction, expense management',
    type: 'article',
    publishedTime: '2024-11-20',
    author: 'Forgewise Team',
    section: 'Cost Optimization',
    tags: ['Software Audit', 'Cost Savings', 'SaaS', 'Efficiency']
  },
  'insights/ppc-cost-optimization': {
    title: 'Cut Your Google Ads Spend by 67% (Real Strategy) | Forgewise',
    description: 'Stop burning money on ineffective ads. Learn the exact framework that reduced our client\'s CPA from $127 to $41.',
    keywords: 'PPC optimization, Google Ads, cost reduction, CPA optimization, ad spend efficiency',
    type: 'article',
    publishedTime: '2024-10-28',
    author: 'Forgewise Team',
    section: 'Digital Marketing',
    tags: ['PPC', 'Google Ads', 'Marketing ROI', 'Cost Optimization']
  },
  'insights/seo-ux-transformation': {
    title: 'How SEO + UX Drove 312% Growth (Case Study) | Forgewise',
    description: 'See how strategic SEO and UX improvements transformed a struggling store into a market leader with 312% revenue growth.',
    keywords: 'SEO strategy, UX optimization, case study, ecommerce growth, conversion optimization',
    type: 'article',
    publishedTime: '2024-09-15',
    author: 'Forgewise Team',
    section: 'Case Studies',
    tags: ['SEO', 'UX Design', 'Case Study', 'Growth Strategy']
  },
  'insights/attribute-filtering-case-study': {
    title: 'From 12,000 Products to Happy Customers | Forgewise',
    description: 'Learn how smart filtering reduced bounce rate by 68% and increased conversions by 127% for a large catalog retailer.',
    keywords: 'product filtering, faceted search, catalog management, UX optimization, conversion optimization',
    type: 'article',
    publishedTime: '2024-08-10',
    author: 'Forgewise Team',
    section: 'User Experience',
    tags: ['Product Discovery', 'UX', 'E-commerce', 'Case Study']
  },
  'insights/ai-in-ecommerce': {
    title: 'AI That Actually Makes Money (Not Just Hype) | Forgewise',
    description: 'Skip the AI hype. Here are 5 proven AI implementations delivering 200%+ ROI for e-commerce businesses right now.',
    keywords: 'AI implementation, ecommerce AI, marketing automation, practical AI, ROI',
    type: 'article',
    publishedTime: '2024-07-22',
    author: 'Forgewise Team',
    section: 'Technology',
    tags: ['AI', 'E-commerce', 'Automation', 'Technology ROI']
  }
};

// Helper function to get page SEO
export function getPageSEO(pathname) {
  const key = pathname === '/' ? 'home' : pathname.slice(1);
  
  const urlMap = {
    'projects': 'solutions',
    'work': 'results',
    'leadership': 'about',
    'quick-fixes': 'quickFixes'
  };
  
  const mappedKey = urlMap[key] || key;
  
  return pageSEO[mappedKey] || pageSEO.home;
}

// Default export for seo config
const seoConfig = {
  defaultTitle: siteConfig.title,
  defaultDescription: siteConfig.description,
  siteUrl: siteConfig.url,
  siteConfig,
  pageSEO
};

export default seoConfig;