import { useLocation } from 'react-router-dom';
import { siteConfig } from '../config/seo';

export default function StructuredData() {
  const location = useLocation();
  
  // Person schema for Allan Wolfe
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Allan Wolfe",
    "jobTitle": "Business Problem Solver",
    "description": "I fix online business problems. Fast, focused solutions that work. Most fixes under $2K.",
    "url": siteConfig.url,
    "sameAs": [],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Chicago",
      "addressRegion": "IL",
      "addressCountry": "US"
    }
  };

  // Service schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "provider": {
      "@type": "Person",
      "name": "Allan Wolfe"
    },
    "serviceType": "Business Consulting",
    "areaServed": {
      "@type": "Country",
      "name": "United States"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Quick Business Fixes",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Website Speed Optimization",
            "description": "Fix your slow website and stop losing $10K/month"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Cart Abandonment Fix",
            "description": "Stop losing sales with proven checkout optimization"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Google Ads Optimization",
            "description": "Cut your ad spend by 40% while increasing conversions"
          }
        }
      ]
    }
  };

  // Website schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": siteConfig.name,
    "description": siteConfig.description,
    "url": siteConfig.url,
    "author": personSchema
  };

  // Breadcrumb schema
  const getBreadcrumbSchema = () => {
    const pathSegments = location.pathname.split('/').filter(Boolean);
    
    if (pathSegments.length === 0) return null;

    const items = [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": siteConfig.url
      }
    ];

    pathSegments.forEach((segment, index) => {
      const url = `${siteConfig.url}/${pathSegments.slice(0, index + 1).join('/')}`;
      const name = segment.charAt(0).toUpperCase() + segment.slice(1).replace('-', ' ');
      
      items.push({
        "@type": "ListItem",
        "position": index + 2,
        "name": name,
        "item": url
      });
    });

    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": items
    };
  };

  const breadcrumbSchema = getBreadcrumbSchema();

  const schemas = [
    websiteSchema,
    personSchema,
    serviceSchema,
    ...(breadcrumbSchema ? [breadcrumbSchema] : [])
  ];

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}