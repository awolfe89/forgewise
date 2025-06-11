import { useLocation } from 'react-router-dom';
import { siteConfig } from '../config/seo';

export default function StructuredData() {
  const location = useLocation();
  
  // Person schema for Allan Wolfe
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Forgewise.io",
    "jobTitle": "eCommerce Experts",
    "description": "Scale Your eCommerce to 6-Figures with Targeted Quick Wins",
    "url": siteConfig.url,
    "sameAs": [],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Chicago",
      "addressRegion": "IL",
      "addressCountry": "US"
    }
  };

 // Forgewise Service schema
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "provider": {
    "@type": "Organization",
    "name": "Forgewise Consulting",
    "url": "https://forgewise.io",
    "logo": "https://forgewise.io/assets/logo.png"
  },
  "serviceType": "eCommerce & Digital Transformation Consulting",
  "areaServed": {
    "@type": "Country",
    "name": "United States"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Forgewise Quick-Win Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Shopify Performance Audit",
          "description": "Deep-dive audit and rapid optimizations to boost site speed, mobile UX, and Core Web Vitals."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Checkout & Cart Conversion",
          "description": "Proven UX tweaks and payment flow enhancements to slash abandonment and lift average order value."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Paid Ads ROI Booster",
          "description": "Strategic Google & Meta Ads optimizations to cut ad spend, improve ROAS, and scale profitable campaigns."
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