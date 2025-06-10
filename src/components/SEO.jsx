import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { siteConfig, getPageSEO } from '../config/seo';

export default function SEO() {
  const location = useLocation();
  
  useEffect(() => {
    // Get page-specific SEO config
    const pageSEO = getPageSEO(location.pathname);
    
    // Update document title
    document.title = pageSEO.title;
    
    // Update meta tags
    updateMetaTag('description', pageSEO.description);
    updateMetaTag('keywords', pageSEO.keywords);
    
    // Update Open Graph tags
    updateMetaTag('og:title', pageSEO.title, 'property');
    updateMetaTag('og:description', pageSEO.description, 'property');
    updateMetaTag('og:url', `${siteConfig.url}${location.pathname}`, 'property');
    
    // Update Twitter tags
    updateMetaTag('twitter:title', pageSEO.title, 'property');
    updateMetaTag('twitter:description', pageSEO.description, 'property');
    
    // Update canonical URL
    updateCanonicalURL(`${siteConfig.url}${location.pathname}`);
    
  }, [location]);
  
  return null;
}

// Helper function to update meta tags
function updateMetaTag(name, content, attribute = 'name') {
  if (!content) return;
  
  let element = document.querySelector(`meta[${attribute}="${name}"]`);
  
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, name);
    document.head.appendChild(element);
  }
  
  element.setAttribute('content', content);
}

// Helper function to update canonical URL
function updateCanonicalURL(url) {
  let element = document.querySelector('link[rel="canonical"]');
  
  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', 'canonical');
    document.head.appendChild(element);
  }
  
  element.setAttribute('href', url);
}