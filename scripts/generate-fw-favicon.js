#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { createCanvas } = require('canvas');

// Function to create FW favicon
function generateFWFavicon(size) {
  const canvas = createCanvas(size, size);
  const ctx = canvas.getContext('2d');

  // Background - blue gradient
  const gradient = ctx.createLinearGradient(0, 0, size, size);
  gradient.addColorStop(0, '#3f51b5');  // Indigo
  gradient.addColorStop(1, '#283593');  // Darker indigo
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, size, size);

  // Text settings
  ctx.fillStyle = '#ffffff';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';

  // Adjust font size based on icon size
  const fontSize = Math.floor(size * 0.45);
  ctx.font = `bold ${fontSize}px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`;

  // Draw "FW" text
  ctx.fillText('FW', size / 2, size / 2);

  return canvas.toBuffer('image/png');
}

// Generate favicon sizes
const sizes = [16, 32, 72, 96, 128, 144, 152, 192, 384, 512];

console.log('🎨 Generating FW favicons...\n');

try {
  // Create each size
  sizes.forEach(size => {
    const buffer = generateFWFavicon(size);

    // Write favicon files
    if (size === 16 || size === 32) {
      fs.writeFileSync(path.join(__dirname, '..', 'public', `favicon-${size}x${size}.png`), buffer);
      console.log(`✓ Created favicon-${size}x${size}.png`);
    }

    // Write icon files for PWA
    fs.writeFileSync(path.join(__dirname, '..', 'public', `icon-${size}x${size}.png`), buffer);
    console.log(`✓ Created icon-${size}x${size}.png`);
  });

  // Create apple-touch-icon (180x180)
  const appleIcon = generateFWFavicon(180);
  fs.writeFileSync(path.join(__dirname, '..', 'public', 'apple-touch-icon.png'), appleIcon);
  console.log('✓ Created apple-touch-icon.png');

  // Create main favicon.ico using the 32x32 version
  const favicon32 = generateFWFavicon(32);
  fs.writeFileSync(path.join(__dirname, '..', 'public', 'favicon.ico'), favicon32);
  console.log('✓ Created favicon.ico');

  console.log('\n✨ FW favicons generated successfully!');
} catch (error) {
  console.error('Error generating favicons:', error);
  process.exit(1);
}