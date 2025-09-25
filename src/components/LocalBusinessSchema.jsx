export default function LocalBusinessSchema() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://forgewise.io/#business",
    "name": "Forgewise",
    "alternateName": "Forgewise.io",
    "description": "B2B eCommerce consultant specializing in traditional business digital transformation. 11+ years experience with Magento, Shopify, and ERP integrations.",
    "url": "https://forgewise.io",
    "telephone": "+1-555-123-4567",
    "email": "admin@forgewise.io",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Chicago",
      "addressRegion": "IL",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 41.8781,
      "longitude": -87.6298
    },
    "areaServed": [
      {
        "@type": "State",
        "name": "Illinois"
      },
      {
        "@type": "State",
        "name": "Wisconsin"
      },
      {
        "@type": "State",
        "name": "Iowa"
      },
      {
        "@type": "State",
        "name": "Indiana"
      }
    ],
    "priceRange": "$$",
    "openingHours": "Mo-Fr 09:00-17:00",
    "founder": {
      "@type": "Person",
      "name": "Allan Wolfe"
    },
    "foundingDate": "2013",
    "sameAs": [
      "https://www.linkedin.com/company/forgewise",
      "https://calendly.com/admin-forgewise"
    ],
    "knowsAbout": [
      "B2B eCommerce",
      "ERP Integration",
      "Magento Development",
      "Shopify Plus",
      "Digital Transformation",
      "Traditional Business Modernization"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "B2B eCommerce Consulting Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "B2B eCommerce Implementation",
            "description": "Transform traditional B2B operations with modern eCommerce platforms"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "ERP Integration",
            "description": "Connect legacy systems with modern eCommerce platforms (Sage, ABAS, Prelude)"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Magento Optimization",
            "description": "11+ years experience optimizing Magento 1 & 2 for B2B companies"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "45"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}