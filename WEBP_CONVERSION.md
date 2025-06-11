# WebP Image Conversion Guide

This guide explains how to convert existing JPG/PNG images to WebP format for better performance.

## Why WebP?

- 25-35% smaller file sizes compared to JPEG
- 26% smaller than PNG
- Supports transparency (like PNG)
- Better compression = faster loading times
- Automatic responsive image generation

## Quick Start (Recommended)

We have an automated conversion script that handles everything:

```bash
# Convert all images to WebP with responsive sizes
npm run convert-images
```

This script will:
- Convert all JPG/PNG images in `/src/assets` and `/public`
- Generate WebP versions at multiple sizes (original, 1200w, 600w, 400w)
- Keep original files as fallbacks
- Generate an image manifest for tracking
- Show file size savings for each conversion

## Enhanced LazyImage Component

The LazyImage component now supports:
- Automatic WebP detection and fallback
- Responsive images with srcset
- Browser WebP support detection
- Lazy loading with intersection observer

Usage:
```jsx
// Basic usage - WebP is automatic
<LazyImage 
  src="/images/hero.jpg"
  alt="Hero image"
/>

// Custom responsive sizes
<LazyImage 
  src="/images/product.png"
  alt="Product"
  sizes="(max-width: 768px) 100vw, 50vw"
/>

// Disable WebP for specific images
<LazyImage 
  src="/images/special.jpg"
  alt="Special"
  disableWebP={true}
/>
```

## Manual Conversion Methods

### Option 1: Command Line (Single Images)

```bash
# Using the installed sharp CLI
npx sharp -i input.jpg -o output.webp
```

### Option 2: Online Converters

1. Visit [squoosh.app](https://squoosh.app/)
2. Upload your image
3. Select WebP format
4. Adjust quality (85% recommended)
5. Download converted image

## File Structure After Conversion

```
src/assets/
  image.jpg          (original)
  image.webp         (WebP version)
  image@2x.jpg       (1200w responsive)
  image@2x.webp      
  image@1x.jpg       (600w responsive)
  image@1x.webp
  image@mobile.jpg   (400w responsive)
  image@mobile.webp
```

## Performance Impact

Expected improvements after WebP conversion:
- **Page Load Time**: 20-30% faster
- **Bandwidth Usage**: 25-35% reduction
- **Core Web Vitals**: Improved LCP scores
- **Mobile Performance**: Significant improvements on slower connections

## Browser Support

WebP is supported by:
- Chrome/Edge: Full support
- Firefox: Full support
- Safari 14+: Full support
- Older browsers: Automatic JPG/PNG fallback

## Best Practices

1. **Run Conversion Before Build**: Images are converted separately from build
2. **Quality Settings**: Script uses 85% quality (optimal balance)
3. **Responsive Sizes**: Automatically generates mobile, tablet, and desktop sizes
4. **Version Control**: Consider adding *.webp to .gitignore if preferred
5. **CDN Optimization**: WebP images work great with CDN auto-format features