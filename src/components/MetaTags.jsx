import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import seoConfig from '../config/seo';

const routeMetadata = {
  '/': {
    title: 'Forgewise - Scale Your Shopify Store to 6-Figures',
    description: 'Transform your e-commerce business with strategic technology consulting. We deliver practical solutions that drive measurable results.',
  },
  '/quick-fixes': {
    title: 'Quick Wins for E-commerce Growth | Forgewise',
    description: 'High-impact solutions for your most pressing challenges. Fast implementation, measurable results in 2-5 days.',
  },
  '/solutions': {
    title: 'E-commerce Solutions & Case Studies | Forgewise',
    description: 'Real problems, real solutions, real results. Explore our portfolio of successful implementations.',
  },
  '/results': {
    title: 'Client Success Stories & Results | Forgewise',
    description: 'From challenges to success stories. See how we\'ve helped businesses transform their operations.',
  },
  '/about': {
    title: 'About Forgewise - Your Team for Getting Things Done',
    description: 'No PowerPoints. No fluff. Just practical solutions that solve real problems and deliver measurable results.',
  },
  '/insights': {
    title: 'E-commerce Insights & Strategies | Forgewise',
    description: 'Actionable guidance to optimize operations, reduce costs, and leverage technology for competitive advantage.',
  },
  '/contact': {
    title: 'Let\'s Forge Your Next Win | Contact Forgewise',
    description: 'Choose the right engagement for your goals. Strategic assessment, quick wins, or full transformation.',
  }
};

export default function MetaTags() {
  const location = useLocation();
  const path = location.pathname;
  
  useEffect(() => {
    const metadata = routeMetadata[path] || {};
    const title = metadata.title || seoConfig.defaultTitle;
    const description = metadata.description || seoConfig.defaultDescription;
    
    // Update document title
    document.title = title;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.content = description;
    }
    
    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.content = title;
    
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) ogDescription.content = description;
    
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.content = `${seoConfig.siteUrl}${path}`;
    
    // Update canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = `${seoConfig.siteUrl}${path}`;
    
  }, [path]);
  
  return null;
}