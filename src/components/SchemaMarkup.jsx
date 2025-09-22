import { useRouter } from 'next/router';

// LocalBusiness Schema for the organization
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://forgewise.io/#business",
  "name": "Forgewise",
  "alternateName": "Forgewise.io",
  "description": "Strategic technology consulting for e-commerce growth. We deliver practical solutions that drive measurable results.",
  "url": "https://forgewise.io",
  "telephone": "",
  "email": "adminforgewise.io",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "",
    "longitude": ""
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    "opens": "09:00",
    "closes": "18:00"
  },
  "priceRange": "$$",
  "image": "https://forgewise.io/forgewise_logo_1.png",
  "logo": "https://forgewise.io/forgewise_logo_1.png",
  "sameAs": [
    "https://www.linkedin.com/company/forgewise",
    "https://twitter.com/forgewise"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Technology Consulting Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Strategic Assessment",
          "description": "Comprehensive analysis of your operations and opportunities"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Quick Win Implementation",
          "description": "Rapid deployment of high-impact solutions"
        }
      }
    ]
  }
};

// Review schema for case studies
const getReviewSchema = (casestudy) => ({
  "@context": "https://schema.org",
  "@type": "Review",
  "itemReviewed": {
    "@type": "Service",
    "name": "Forgewise Consulting Services",
    "provider": {
      "@type": "LocalBusiness",
      "@id": "https://forgewise.io/#business"
    }
  },
  "reviewRating": {
    "@type": "Rating",
    "ratingValue": "5",
    "bestRating": "5"
  },
  "author": {
    "@type": "Person",
    "name": casestudy.author
  },
  "reviewBody": casestudy.testimonial
});

// HowTo schema for quick fixes
const getHowToSchema = (quickfix) => ({
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": quickfix.title,
  "description": quickfix.description,
  "totalTime": quickfix.timeframe,
  "estimatedCost": {
    "@type": "MonetaryAmount",
    "currency": "USD",
    "value": quickfix.estimatedCost || "Contact for pricing"
  },
  "supply": quickfix.requirements || [],
  "tool": quickfix.tools || [],
  "step": quickfix.steps || []
});

// FAQ schema for insights
const getFAQSchema = (faqs) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});

// Article schema for insights
const getArticleSchema = (article) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": article.title,
  "description": article.excerpt,
  "image": article.image || "https://forgewise.io/forgewise_logo_1.png",
  "datePublished": article.date,
  "dateModified": article.date,
  "author": {
    "@type": "Organization",
    "name": "Forgewise",
    "@id": "https://forgewise.io/#business"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Forgewise",
    "@id": "https://forgewise.io/#business",
    "logo": {
      "@type": "ImageObject",
      "url": "https://forgewise.io/forgewise_logo_1.png"
    }
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": article.url
  }
});

// Service schema for solutions
const getServiceSchema = (service) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": service.title,
  "description": service.description,
  "provider": {
    "@type": "LocalBusiness",
    "@id": "https://forgewise.io/#business"
  },
  "areaServed": {
    "@type": "Country",
    "name": "United States"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": service.title,
    "itemListElement": service.features?.map(feature => ({
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": feature
      }
    }))
  }
});

// Breadcrumb schema
const getBreadcrumbSchema = (pathname) => {
  const paths = pathname.split('/').filter(Boolean);
  const breadcrumbs = [
    { name: 'Home', url: 'https://forgewise.io' }
  ];

  let currentPath = '';
  paths.forEach((path, index) => {
    currentPath += `/${path}`;
    const name = path.charAt(0).toUpperCase() + path.slice(1).replace(/-/g, ' ');
    breadcrumbs.push({
      name,
      url: `https://forgewise.io${currentPath}`
    });
  });

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
};

export default function SchemaMarkup({ pageType, data = {} }) {
  const router = useRouter();
  const schemas = [];

  // Always include LocalBusiness schema
  schemas.push(localBusinessSchema);

  // Add breadcrumb schema for all pages except home
  if (router.pathname !== '/') {
    schemas.push(getBreadcrumbSchema(router.pathname));
  }

  // Add page-specific schemas
  switch (pageType) {
    case 'home':
      // Home page gets Organization schema (included in LocalBusiness)
      break;
      
    case 'quickfixes':
      if (data.quickfixes) {
        data.quickfixes.forEach(fix => {
          schemas.push(getHowToSchema(fix));
        });
      }
      break;
      
    case 'solutions':
      if (data.solutions) {
        data.solutions.forEach(solution => {
          schemas.push(getServiceSchema(solution));
        });
      }
      break;
      
    case 'results':
      if (data.casestudies) {
        data.casestudies.forEach(study => {
          if (study.testimonial) {
            schemas.push(getReviewSchema(study));
          }
        });
      }
      break;
      
    case 'insight':
      if (data.article) {
        schemas.push(getArticleSchema(data.article));
      }
      if (data.faqs) {
        schemas.push(getFAQSchema(data.faqs));
      }
      break;
      
    case 'contact':
      // Contact page uses LocalBusiness schema
      break;
  }

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