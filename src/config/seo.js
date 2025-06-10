export const siteConfig = {
  name: 'ForgeWise',
  title: 'ForgeWise.io - Strategic Technology Consulting',
  description: 'Transform your business operations with strategic technology consulting. We solve complex problems with practical solutions that deliver measurable results.',
  url: 'https://forgewisе.io',
  author: 'ForgeWise Team',
  image: '/forgewisе-icon.png',
  locale: 'en_US',
  type: 'website'
};

// Page-specific SEO configurations
export const pageSEO = {
  home: {
    title: 'ForgeWise.io - Strategic Technology Consulting',
    description: 'Transform your business operations with strategic technology consulting. We solve complex problems with practical solutions that deliver measurable results.',
    keywords: 'technology consulting, business transformation, process optimization, digital strategy, operational efficiency'
  },
  quickFixes: {
    title: 'Quick Solutions for Common Business Problems | ForgeWise',
    description: 'Rapid implementation of proven solutions for your most pressing business challenges. Clear scope, transparent pricing, fast results.',
    keywords: 'business solutions, quick fixes, process improvement, technology implementation, rapid deployment'
  },
  solutions: {
    title: 'Proven Solutions That Drive Results | ForgeWise',
    description: 'Explore our portfolio of successful implementations. Real problems, innovative solutions, measurable outcomes.',
    keywords: 'business solutions, case studies, technology implementation, ROI, process automation'
  },
  results: {
    title: 'Client Success Stories | ForgeWise',
    description: 'See how we\'ve helped businesses transform their operations and achieve remarkable results through strategic technology implementation.',
    keywords: 'client success, case studies, business transformation, technology results, ROI examples'
  },
  about: {
    title: 'About ForgeWise - Strategic Technology Partners',
    description: 'We\'re strategic technology consultants who deliver practical solutions. No fluff, just results-driven implementations that transform your business.',
    keywords: 'ForgeWise, technology consulting, strategic partners, business transformation'
  },
  insights: {
    title: 'Business Insights & Strategic Guidance | ForgeWise',
    description: 'Discover actionable insights to optimize your operations, reduce costs, and leverage technology for competitive advantage.',
    keywords: 'business insights, technology strategy, operational efficiency, cost optimization'
  },
  contact: {
    title: 'Contact ForgeWise - Start Your Transformation',
    description: 'Ready to transform your business? Let\'s discuss your challenges and explore strategic solutions.',
    keywords: 'contact ForgeWise, technology consulting, business consultation, strategic planning'
  },
  // Individual insight pages
  'insights/shopify-speed-fix': {
    title: 'Optimize Your E-commerce Performance | ForgeWise',
    description: 'Learn how to dramatically improve your online store\'s loading speed and conversion rates with proven optimization techniques.',
    keywords: 'ecommerce optimization, site speed, conversion optimization, performance improvement'
  },
  'insights/hidden-inventory-costs': {
    title: 'Automate Inventory Management & Cut Costs | ForgeWise',
    description: 'Discover how modern inventory management systems can save thousands in labor costs while improving accuracy.',
    keywords: 'inventory automation, cost reduction, inventory management, operational efficiency'
  },
  'insights/unused-features': {
    title: 'Software Audit Guide - Eliminate Waste | ForgeWise',
    description: 'Learn how to audit your software subscriptions and eliminate wasteful spending on unused features and redundant tools.',
    keywords: 'software audit, cost optimization, subscription management, expense reduction'
  },
  'insights/ppc-cost-optimization': {
    title: 'Advanced PPC Strategies for Better ROI | ForgeWise',
    description: 'Master advanced Google Ads techniques to dramatically reduce cost-per-acquisition and improve campaign performance.',
    keywords: 'PPC optimization, Google Ads strategy, cost reduction, digital marketing ROI'
  },
  'insights/seo-ux-transformation': {
    title: 'SEO & UX Strategy for E-commerce Growth | ForgeWise',
    description: 'Learn how strategic SEO and UX improvements can transform your e-commerce performance and drive substantial growth.',
    keywords: 'SEO strategy, UX optimization, ecommerce growth, conversion optimization'
  },
  'insights/attribute-filtering': {
    title: 'Product Discovery Solutions for Large Catalogs | ForgeWise',
    description: 'Implement smart filtering systems that help customers find products quickly in large catalogs, improving conversions.',
    keywords: 'product filtering, catalog management, user experience, conversion optimization'
  },
  'insights/ai-in-ecommerce': {
    title: 'Practical AI Implementation for E-commerce | ForgeWise',
    description: 'Explore proven AI applications that deliver measurable ROI in e-commerce operations and customer experience.',
    keywords: 'AI implementation, ecommerce technology, automation, ROI'
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