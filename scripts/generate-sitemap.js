// Script to generate sitemap.xml
// Run with: node scripts/generate-sitemap.js

const fs = require('fs');
const path = require('path');

const baseUrl = 'https://allanecommerce.netlify.app';
const today = new Date().toISOString().split('T')[0];

// Define all routes with their properties
const routes = [
  {
    path: '/',
    changefreq: 'weekly',
    priority: '1.0'
  },
  {
    path: '/quick-fixes',
    changefreq: 'weekly',
    priority: '0.9'
  },
  {
    path: '/solutions',
    changefreq: 'monthly',
    priority: '0.9'
  },
  {
    path: '/results',
    changefreq: 'monthly',
    priority: '0.9'
  },
  {
    path: '/about',
    changefreq: 'monthly',
    priority: '0.8'
  },
  {
    path: '/contact',
    changefreq: 'yearly',
    priority: '0.9'
  },
  {
    path: '/insights',
    changefreq: 'weekly',
    priority: '0.8'
  },
  // Individual insight pages
  {
    path: '/insights/shopify-speed-fix',
    changefreq: 'yearly',
    priority: '0.7'
  },
  {
    path: '/insights/hidden-inventory-costs',
    changefreq: 'yearly',
    priority: '0.7'
  },
  {
    path: '/insights/unused-features',
    changefreq: 'yearly',
    priority: '0.7'
  },
  {
    path: '/insights/seo-ux-transformation',
    changefreq: 'yearly',
    priority: '0.7'
  },
  {
    path: '/insights/attribute-filtering',
    changefreq: 'yearly',
    priority: '0.7'
  },
  {
    path: '/insights/ppc-cost-optimization',
    changefreq: 'yearly',
    priority: '0.7'
  },
  {
    path: '/insights/ai-in-ecommerce',
    changefreq: 'yearly',
    priority: '0.7'
  }
];

// Generate XML
const generateSitemap = () => {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(route => `  <url>
    <loc>${baseUrl}${route.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return xml;
};

// Write to file
const sitemap = generateSitemap();
const outputPath = path.join(__dirname, '../public/sitemap.xml');

fs.writeFileSync(outputPath, sitemap, 'utf8');
console.log(`✅ Sitemap generated successfully at: ${outputPath}`);
console.log(`📅 Last modified date: ${today}`);
console.log(`🔗 Total URLs: ${routes.length}`);