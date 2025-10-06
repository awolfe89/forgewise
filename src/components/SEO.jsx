import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { siteConfig, getPageSEO } from '../config/seo';

export default function SEO() {
  const router = useRouter();
  
  useEffect(() => {
    // Get page-specific SEO config
    const pageSEO = getPageSEO(router.pathname);
    
    // Update document title
    document.title = pageSEO.title;
    
    // Update meta tags
    updateMetaTag('description', pageSEO.description);
    updateMetaTag('keywords', pageSEO.keywords);
    
    // Update Open Graph tags
    updateMetaTag('og:title', pageSEO.title, 'property');
    updateMetaTag('og:description', pageSEO.description, 'property');
    updateMetaTag('og:url', `${siteConfig.url}${router.pathname}`, 'property');
    updateMetaTag('og:type', pageSEO.type || 'website', 'property');
    
    // Set og:image - use page-specific image or default
    const ogImage = pageSEO.ogImage || '/forgewise-og-image.jpg';
    const ogImageUrl = ogImage.startsWith('http') ? ogImage : `${siteConfig.url}${ogImage}`;
    updateMetaTag('og:image', ogImageUrl, 'property');
    updateMetaTag('og:image:width', '1200', 'property');
    updateMetaTag('og:image:height', '630', 'property');
    updateMetaTag('og:image:alt', pageSEO.title, 'property');
    
    // Update Twitter tags
    updateMetaTag('twitter:card', 'summary_large_image', 'property');
    updateMetaTag('twitter:title', pageSEO.title, 'property');
    updateMetaTag('twitter:description', pageSEO.description, 'property');
    updateMetaTag('twitter:image', ogImageUrl, 'property');
    updateMetaTag('twitter:image:alt', pageSEO.title, 'property');
    
    // Article-specific meta tags for insights
    if (location.pathname.includes('/insights/') && pageSEO.type === 'article') {
      updateMetaTag('article:published_time', pageSEO.publishedTime || new Date().toISOString(), 'property');
      updateMetaTag('article:author', pageSEO.author || 'Forgewise Team', 'property');
      updateMetaTag('article:section', pageSEO.section || 'Insights', 'property');
      
      // Remove old article tags
      document.querySelectorAll('meta[property="article:tag"]').forEach(el => el.remove());
      
      // Add new article tags
      if (pageSEO.tags && Array.isArray(pageSEO.tags)) {
        pageSEO.tags.forEach(tag => {
          const tagElement = document.createElement('meta');
          tagElement.setAttribute('property', 'article:tag');
          tagElement.setAttribute('content', tag);
          document.head.appendChild(tagElement);
        });
      }
    }
    
    // Update canonical URL - ensure trailing slash for consistency
    const canonicalPath = location.pathname === '/'
      ? '/'
      : (location.pathname.endsWith('/') ? location.pathname : `${location.pathname}/`);
    updateCanonicalURL(`${siteConfig.url}${canonicalPath}`);
    
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