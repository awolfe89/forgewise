import Head from 'next/head';

export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Forgewise",
    "alternateName": "Forgewise.io",
    "url": "https://forgewise.io",
    "logo": "https://forgewise.io/forgewise_logo_1.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-800-FORGEWISE",
      "contactType": "Customer Service",
      "email": "admin@forgewise.io",
      "areaServed": "US",
      "availableLanguage": "English"
    },
    "sameAs": [
      "https://www.linkedin.com/company/forgewise",
      "https://twitter.com/forgewise"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    },
    "description": "We help $1M-$50M e-commerce teams turn traffic into revenue with fast, no-bloat fixes and scalable growth systems.",
    "founder": {
      "@type": "Person",
      "name": "Allan Wolfe"
    },
    "foundingDate": "2020",
    "slogan": "No pitch decks, just results"
  };

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </Head>
  );
}

export function WebsiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Forgewise",
    "alternateName": "Forgewise.io",
    "url": "https://forgewise.io",
    "description": "Quick wins and systems for $1M-$50M e-commerce brands",
    "publisher": {
      "@type": "Organization",
      "name": "Forgewise"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://forgewise.io/insights?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </Head>
  );
}

export function FAQSchema({ faqs }) {
  const schema = {
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
  };

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </Head>
  );
}

export function ServiceSchema({ service }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": service.name,
    "provider": {
      "@type": "Organization",
      "name": "Forgewise"
    },
    "areaServed": {
      "@type": "Country",
      "name": "United States"
    },
    "description": service.description,
    "offers": {
      "@type": "Offer",
      "priceRange": service.priceRange || "$$",
      "availability": "https://schema.org/InStock"
    }
  };

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </Head>
  );
}

export function ArticleSchema({ article }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.description,
    "image": article.image || "https://forgewise.io/forgewise-og-image.jpg",
    "datePublished": article.publishedTime,
    "dateModified": article.modifiedTime || article.publishedTime,
    "author": {
      "@type": "Organization",
      "name": "Forgewise"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Forgewise",
      "logo": {
        "@type": "ImageObject",
        "url": "https://forgewise.io/forgewise_logo_1.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": article.url
    }
  };

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </Head>
  );
}

export function BreadcrumbSchema({ items }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </Head>
  );
}