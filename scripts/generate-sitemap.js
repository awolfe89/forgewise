#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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
  '/privacy-policy': { priority: 0.3, changefreq: 'yearly' },
  '/terms-of-service': { priority: 0.3, changefreq: 'yearly' },
  '/accessibility': { priority: 0.3, changefreq: 'yearly' }
};

// Default config for insights
const INSIGHT_CONFIG = { priority: 0.6, changefreq: 'yearly' };

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
 * Parse routes from App.jsx
 */
function parseRoutesFromApp() {
  const appPath = path.join(__dirname, '..', 'src', 'App.jsx');
  const appContent = fs.readFileSync(appPath, 'utf8');
  
  // Extract routes using regex
  const routeRegex = /<Route\s+path="([^"]+)"\s+element={[^}]+}/g;
  const routes = [];
  let match;
  
  while ((match = routeRegex.exec(appContent)) !== null) {
    const route = match[1];
    // Skip dynamic routes (with parameters)
    if (!route.includes(':')) {
      routes.push(route);
    }
  }
  
  return routes;
}

/**
 * Get all insight IDs from the insights data in Insights.jsx
 */
function getInsightIds() {
  const insightsPath = path.join(__dirname, '..', 'src', 'pages', 'Insights.jsx');
  const insightsContent = fs.readFileSync(insightsPath, 'utf8');
  
  // Extract insight IDs from INSIGHTS_DATA
  const insightIds = [];
  const idRegex = /id:\s*['"]([^'"]+)['"]/g;
  let match;
  
  while ((match = idRegex.exec(insightsContent)) !== null) {
    insightIds.push(match[1]);
  }
  
  return insightIds;
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
  console.log('Starting sitemap generation...');
  
  // Parse routes from App.jsx
  const routes = parseRoutesFromApp();
  console.log(`Found ${routes.length} routes in App.jsx`);
  
  // Get insight IDs
  const insightIds = getInsightIds();
  console.log(`Found ${insightIds.length} insights`);
  
  // Start building the sitemap
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;
  
  // Add main routes
  routes.forEach(route => {
    const config = PAGE_CONFIG[route] || { priority: 0.5, changefreq: 'monthly' };
    
    // Determine which file to check for last modified
    let fileToCheck;
    if (route === '/') {
      fileToCheck = path.join(__dirname, '..', 'src', 'pages', 'Home.jsx');
    } else {
      // Map route to page file
      const routeToFile = {
        '/quick-fixes': 'QuickFixes.jsx',
        '/solutions': 'Projects.jsx',
        '/results': 'Work.jsx',
        '/about': 'Leadership.jsx',
        '/insights': 'Insights.jsx',
        '/contact': 'Contact.jsx',
        '/privacy-policy': 'PrivacyPolicy.jsx',
        '/terms-of-service': 'TermsOfService.jsx',
        '/accessibility': 'AccessibilityStatement.jsx'
      };
      
      const fileName = routeToFile[route];
      if (fileName) {
        fileToCheck = path.join(__dirname, '..', 'src', 'pages', fileName);
      }
    }
    
    const lastmod = fileToCheck ? getLastModified(fileToCheck) : new Date().toISOString().split('T')[0];
    
    sitemap += '\n' + generateUrlEntry(route, config, lastmod);
  });
  
  // Add insight pages
  sitemap += '\n\n  <!-- Individual Insight Pages -->';
  insightIds.forEach(insightId => {
    // Try to find the corresponding insight file
    const insightsDir = path.join(__dirname, '..', 'src', 'pages', 'insights');
    const possibleFiles = fs.readdirSync(insightsDir);
    
    // Convert insight ID to possible file names
    const camelCase = insightId.split('-').map((word, index) => 
      index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)
    ).join('');
    
    const pascalCase = insightId.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join('');
    
    // Find matching file
    let matchingFile = possibleFiles.find(file => {
      const fileBase = path.basename(file, '.jsx').toLowerCase();
      return fileBase === insightId.replace(/-/g, '') || 
             fileBase === camelCase.toLowerCase() ||
             fileBase === pascalCase.toLowerCase();
    });
    
    const lastmod = matchingFile 
      ? getLastModified(path.join(insightsDir, matchingFile))
      : new Date().toISOString().split('T')[0];
    
    sitemap += '\n' + generateUrlEntry(`/insights/${insightId}`, INSIGHT_CONFIG, lastmod);
  });
  
  // Close the sitemap
  sitemap += '\n</urlset>';
  
  // Write to file
  fs.writeFileSync(OUTPUT_PATH, sitemap);
  console.log(`Sitemap generated successfully at ${OUTPUT_PATH}`);
  
  // Display summary
  const totalUrls = routes.length + insightIds.length;
  console.log(`\nSummary:`);
  console.log(`- Main routes: ${routes.length}`);
  console.log(`- Insight pages: ${insightIds.length}`);
  console.log(`- Total URLs: ${totalUrls}`);
}

// Run the script
try {
  generateSitemap();
} catch (error) {
  console.error('Error generating sitemap:', error);
  process.exit(1);
}