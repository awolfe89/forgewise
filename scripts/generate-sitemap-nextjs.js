#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Configuration
const DOMAIN = 'https://forgewise.io';
const OUTPUT_PATH = path.join(__dirname, '..', 'public', 'sitemap.xml');

// Priority and changefreq configuration
const PAGE_CONFIG = {
  '/': { priority: 1.0, changefreq: 'weekly' },
  '/quick-fixes': { priority: 0.8, changefreq: 'weekly' },
  '/solutions': { priority: 0.8, changefreq: 'monthly' },
  '/results': { priority: 0.8, changefreq: 'monthly' },
  '/about': { priority: 0.8, changefreq: 'monthly' },
  '/insights': { priority: 0.8, changefreq: 'weekly' },
  '/contact': { priority: 0.8, changefreq: 'yearly' },
  '/thank-you': { priority: 0.3, changefreq: 'yearly' },

  // Service pages
  '/shopify-consultant': { priority: 0.9, changefreq: 'monthly' },
  '/magento-consultant': { priority: 0.9, changefreq: 'monthly' },
  '/b2b-ecommerce-consulting': { priority: 0.9, changefreq: 'monthly' },
  '/chicago-b2b-ecommerce-consultant': { priority: 0.9, changefreq: 'monthly' },
  '/magento-seo-services': { priority: 0.9, changefreq: 'monthly' },
  '/shopify-plus-seo': { priority: 0.9, changefreq: 'monthly' },
  '/fractional-cmo-ecommerce': { priority: 0.9, changefreq: 'monthly' },
  '/ecommerce-audit': { priority: 0.9, changefreq: 'monthly' },

  // Location pages
  '/locations': { priority: 0.7, changefreq: 'monthly' },
  '/ecommerce-consulting-chicago-il': { priority: 0.7, changefreq: 'monthly' },
  '/ecommerce-consulting-milwaukee-wi': { priority: 0.7, changefreq: 'monthly' },
  '/ecommerce-consulting-des-moines-ia': { priority: 0.7, changefreq: 'monthly' },
  '/ecommerce-consulting-rockford-il': { priority: 0.7, changefreq: 'monthly' },
  '/ecommerce-consulting-peoria-il': { priority: 0.7, changefreq: 'monthly' },
  '/ecommerce-consulting-springfield-il': { priority: 0.7, changefreq: 'monthly' },
  '/ecommerce-consulting-naperville-il': { priority: 0.7, changefreq: 'monthly' },
  '/ecommerce-consulting-aurora-il': { priority: 0.7, changefreq: 'monthly' },
  '/ecommerce-consulting-joliet-il': { priority: 0.7, changefreq: 'monthly' },
  '/ecommerce-consulting-elgin-il': { priority: 0.7, changefreq: 'monthly' },
  '/ecommerce-consulting-madison-wi': { priority: 0.7, changefreq: 'monthly' },
  '/ecommerce-consulting-green-bay-wi': { priority: 0.7, changefreq: 'monthly' },
  '/ecommerce-consulting-kenosha-wi': { priority: 0.7, changefreq: 'monthly' },
  '/ecommerce-consulting-racine-wi': { priority: 0.7, changefreq: 'monthly' },
  '/ecommerce-consulting-cedar-rapids-ia': { priority: 0.7, changefreq: 'monthly' },
  '/ecommerce-consulting-davenport-ia': { priority: 0.7, changefreq: 'monthly' },
  '/ecommerce-consulting-sioux-city-ia': { priority: 0.7, changefreq: 'monthly' },
  '/ecommerce-consulting-waterloo-ia': { priority: 0.7, changefreq: 'monthly' },

  // Legal pages
  '/privacy-policy': { priority: 0.3, changefreq: 'yearly' },
  '/terms-of-service': { priority: 0.3, changefreq: 'yearly' },
  '/accessibility': { priority: 0.3, changefreq: 'yearly' }
};

// Default config for insights
const INSIGHT_CONFIG = { priority: 0.6, changefreq: 'yearly' };

// Insight IDs (matching the ones in pages/insights/[insightId].js)
const INSIGHT_IDS = [
  'shopify-speed',
  'hidden-inventory-costs',
  'ppc-cost-optimization',
  'ai-in-ecommerce',
  'seo-ux-case-study',
  'unused-features',
  'attribute-filtering'
];

/**
 * Get the last modified date for a file using git
 * Falls back to file system mtime if git fails
 */
function getLastModified(filePath) {
  try {
    // Try to get the last commit date for this file
    const gitDate = execSync(`git log -1 --format=%ai -- "${filePath}"`, {
      encoding: 'utf8',
      cwd: path.join(__dirname, '..')
    }).trim();
    
    if (gitDate) {
      return new Date(gitDate).toISOString().split('T')[0];
    }
  } catch (error) {
    // Git command failed, fall back to file mtime
  }
  
  // Fallback to file modification time
  try {
    const stats = fs.statSync(filePath);
    return stats.mtime.toISOString().split('T')[0];
  } catch (error) {
    // If all else fails, use today's date
    return new Date().toISOString().split('T')[0];
  }
}

/**
 * Generate a URL entry for the sitemap
 */
function generateUrlEntry(path, config, lastmod) {
  return `  <url>
    <loc>${DOMAIN}${path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${config.changefreq}</changefreq>
    <priority>${config.priority}</priority>
  </url>`;
}

/**
 * Main function to generate the sitemap
 */
function generateSitemap() {
  console.log('Starting sitemap generation for Next.js...');
  
  // Start building the sitemap
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;
  
  // Add main routes
  Object.keys(PAGE_CONFIG).forEach(route => {
    const config = PAGE_CONFIG[route];
    
    // Determine which file to check for last modified
    let fileToCheck;
    if (route === '/') {
      fileToCheck = path.join(__dirname, '..', 'pages', 'index.js');
    } else {
      // Remove leading slash and add .js extension
      const fileName = route.substring(1) + '.js';
      fileToCheck = path.join(__dirname, '..', 'pages', fileName);
    }
    
    const lastmod = fileToCheck && fs.existsSync(fileToCheck) 
      ? getLastModified(fileToCheck) 
      : new Date().toISOString().split('T')[0];
    
    sitemap += '\n' + generateUrlEntry(route, config, lastmod);
  });
  
  // Add insight pages
  sitemap += '\n\n  <!-- Individual Insight Pages -->';
  INSIGHT_IDS.forEach(insightId => {
    const fileToCheck = path.join(__dirname, '..', 'src', 'pages', 'insights', 
      insightId.split('-').map((word, i) => 
        i === 0 ? word.charAt(0).toUpperCase() + word.slice(1) : 
        word.charAt(0).toUpperCase() + word.slice(1)
      ).join('') + '.jsx'
    );
    
    const lastmod = fileToCheck && fs.existsSync(fileToCheck)
      ? getLastModified(fileToCheck)
      : new Date().toISOString().split('T')[0];
    
    sitemap += '\n' + generateUrlEntry(`/insights/${insightId}`, INSIGHT_CONFIG, lastmod);
  });
  
  // Close the sitemap
  sitemap += '\n</urlset>';
  
  // Write to file
  fs.writeFileSync(OUTPUT_PATH, sitemap);
  console.log(`Sitemap generated successfully at ${OUTPUT_PATH}`);
  
  // Display summary
  const mainRoutes = Object.keys(PAGE_CONFIG).length;
  const insightRoutes = INSIGHT_IDS.length;
  const totalUrls = mainRoutes + insightRoutes;
  console.log(`\nSummary:`);
  console.log(`- Main routes: ${mainRoutes}`);
  console.log(`- Insight pages: ${insightRoutes}`);
  console.log(`- Total URLs: ${totalUrls}`);
}

// Run the script
try {
  generateSitemap();
} catch (error) {
  console.error('Error generating sitemap:', error);
  process.exit(1);
}