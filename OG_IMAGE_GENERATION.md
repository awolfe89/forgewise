# OG Image Generation Guide

## Current Status
The site is configured to use `/forgewise-og-image.jpg` as the Open Graph image, but this file needs to be created from the HTML template.

## Template Location
- Template: `/public/og-image.html`
- Expected output: `/public/forgewise-og-image.jpg`
- Required dimensions: 1200x630 pixels

## How to Generate the OG Image

### Option 1: Using Puppeteer (Recommended)
```bash
# Install puppeteer if not already installed
npm install puppeteer

# Create a script to generate the image
node scripts/generate-og-image.js
```

### Option 2: Using Online Tools
1. Open `/public/og-image.html` in a browser
2. Set browser window to exactly 1200x630 pixels
3. Use a screenshot tool to capture the exact dimensions
4. Save as `forgewise-og-image.jpg` in the `/public` directory

### Option 3: Using Browser DevTools
1. Open `/public/og-image.html` in Chrome
2. Open DevTools (F12)
3. Toggle device toolbar (Ctrl+Shift+M)
4. Set custom size to 1200x630
5. Use "Capture screenshot" in DevTools menu
6. Save as `forgewise-og-image.jpg` in `/public`

## Verification
After creating the image:
1. Place it in `/public/forgewise-og-image.jpg`
2. Build and deploy the site
3. Test with social media debuggers:
   - Facebook: https://developers.facebook.com/tools/debug/
   - Twitter: https://cards-dev.twitter.com/validator
   - LinkedIn: https://www.linkedin.com/post-inspector/

## Meta Tags Configuration
The following files are already configured to use the og:image:
- `/index.html` - Static meta tags for the homepage
- `/src/components/SEO.jsx` - Dynamic meta tags for all pages
- `/src/config/seo.js` - SEO configuration with article metadata

## Page-Specific Images (Optional)
To add custom og:images for specific pages:
1. Add the image to `/public/`
2. Update the page's SEO config in `/src/config/seo.js`:
   ```js
   'page-name': {
     // ... other config
     ogImage: '/custom-og-image.jpg'
   }
   ```