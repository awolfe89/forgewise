import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import seoConfig from '../config/seo';

const routeMetadata = {
  '/': {
    title: 'Forgewise - Scale Your Shopify Store to 6-Figures',
    description: 'Transform your e-commerce business with strategic technology consulting. We deliver practical solutions that drive measurable results.',
    structuredData: {
      '@type': 'Organization',
      '@id': 'https://forgewise.com/#organization',
      name: 'Forgewise',
      description: 'Strategic technology consulting for e-commerce growth',
      url: 'https://forgewise.com'
    }
  },
  '/quick-fixes': {
    title: 'Quick Wins for E-commerce Growth | Forgewise',
    description: 'High-impact solutions for your most pressing challenges. Fast implementation, measurable results in 2-5 days.',
    structuredData: {
      '@type': 'Service',
      name: 'Quick Win Solutions',
      provider: { '@id': 'https://forgewise.com/#organization' }
    }
  },
  '/solutions': {
    title: 'E-commerce Solutions & Case Studies | Forgewise',
    description: 'Real problems, real solutions, real results. Explore our portfolio of successful implementations.',
    structuredData: {
      '@type': 'CollectionPage',
      name: 'Solutions Portfolio',
      description: 'Case studies and solutions for e-commerce optimization'
    }
  },
  '/results': {
    title: 'Client Success Stories & Results | Forgewise',
    description: 'From challenges to success stories. See how we\'ve helped businesses transform their operations.',
    structuredData: {
      '@type': 'CollectionPage',
      name: 'Client Results',
      description: 'Real business transformations and success stories'
    }
  },
  '/about': {
    title: 'About Forgewise - Your Team for Getting Things Done',
    description: 'No PowerPoints. No fluff. Just practical solutions that solve real problems and deliver measurable results.',
    structuredData: {
      '@type': 'AboutPage',
      name: 'About Forgewise',
      description: 'Strategic technology partners who deliver results'
    }
  },
  '/insights': {
    title: 'E-commerce Insights & Strategies | Forgewise',
    description: 'Actionable guidance to optimize operations, reduce costs, and leverage technology for competitive advantage.',
    structuredData: {
      '@type': 'Blog',
      name: 'Forgewise Insights',
      description: 'Strategic insights for e-commerce optimization'
    }
  },
  '/contact': {
    title: 'Let\'s Forge Your Next Win | Contact Forgewise',
    description: 'Choose the right engagement for your goals. Strategic assessment, quick wins, or full transformation.',
    structuredData: {
      '@type': 'ContactPage',
      name: 'Contact Forgewise',
      description: 'Start your business transformation today'
    }
  }
};

// Individual insight metadata
const insightMetadata = {
  'shopify-speed-fix': {
    title: 'Speed Optimization for E-commerce Success | Forgewise',
    description: 'Learn how to dramatically improve your site\'s loading speed and conversion rates with proven optimization techniques.',
    structuredData: {
      '@type': 'BlogPosting',
      headline: 'Speed Optimization for E-commerce Success',
      datePublished: '2025-01-01',
      dateModified: '2025-01-01',
      author: { '@id': 'https://forgewise.com/#organization' }
    }
  },
  'hidden-inventory-costs': {
    title: 'Automate Your Inventory Management | Forgewise',
    description: 'Discover how modern inventory systems can save hours of manual work while improving accuracy and efficiency.',
    structuredData: {
      '@type': 'BlogPosting',
      headline: 'Automate Your Inventory Management',
      datePublished: '2025-01-01',
      dateModified: '2025-01-01',
      author: { '@id': 'https://forgewise.com/#organization' }
    }
  },
  'ppc-cost-optimization': {
    title: 'Advanced PPC Strategies for Better ROI | Forgewise',
    description: 'Master advanced Google Ads techniques to dramatically improve your campaign performance and reduce costs.',
    structuredData: {
      '@type': 'BlogPosting',
      headline: 'Advanced PPC Strategies for Better ROI',
      datePublished: '2024-12-01',
      dateModified: '2024-12-01',
      author: { '@id': 'https://forgewise.com/#organization' }
    }
  }
};

export default function SEOProvider({ children }) {
  const location = useLocation();
  const path = location.pathname;
  
  // Handle insight detail pages
  let metadata = routeMetadata[path] || {};
  let structuredData = metadata.structuredData || {};
  
  if (path.startsWith('/insights/')) {
    const insightId = path.split('/')[2];
    const insightMeta = insightMetadata[insightId];
    if (insightMeta) {
      metadata = insightMeta;
      structuredData = insightMeta.structuredData;
    }
  }
  
  const title = metadata.title || seoConfig.defaultTitle;
  const description = metadata.description || seoConfig.defaultDescription;
  
  const fullStructuredData = {
    '@context': 'https://schema.org',
    ...structuredData
  };

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        
        {/* Open Graph */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${seoConfig.siteUrl}${path}`} />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        
        {/* Canonical URL */}
        <link rel="canonical" href={`${seoConfig.siteUrl}${path}`} />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(fullStructuredData)}
        </script>
      </Helmet>
      {children}
    </>
  );
}