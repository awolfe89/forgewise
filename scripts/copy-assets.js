#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Ensure the export directory exists
const exportDir = path.join(process.cwd(), '.next', 'export');
if (!fs.existsSync(exportDir)) {
  console.log('Export directory does not exist. Skipping asset copy.');
  process.exit(0);
}

// Copy all files from public to export
const publicDir = path.join(process.cwd(), 'public');
const files = fs.readdirSync(publicDir);

let copiedCount = 0;
files.forEach(file => {
  const src = path.join(publicDir, file);
  const dest = path.join(exportDir, file);

  // Skip if it's a directory (we'll handle those separately if needed)
  if (fs.statSync(src).isFile()) {
    try {
      fs.copyFileSync(src, dest);
      copiedCount++;
    } catch (err) {
      console.error(`Failed to copy ${file}:`, err.message);
    }
  }
});

console.log(`✓ Copied ${copiedCount} assets to .next/export/`);