#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Patterns to fix - internal links without trailing slashes
const linkPattern = /href="(\/[^/#"]+)(?<!\.png|\.jpg|\.jpeg|\.webp|\.pdf|\.ico|\.xml|\.txt|\.webmanifest)"/g;

// Files to process
const patterns = [
  'pages/**/*.{js,jsx}',
  'src/components/**/*.{jsx,js}'
];

let totalFixed = 0;

patterns.forEach(pattern => {
  const files = glob.sync(pattern);

  files.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    let fixedContent = content;
    let fileFixCount = 0;

    // Fix href attributes missing trailing slashes
    fixedContent = fixedContent.replace(linkPattern, (match, url) => {
      // Skip if it's the root path
      if (url === '/') return match;

      // Skip if it already has a trailing slash
      if (url.endsWith('/')) return match;

      // Skip external URLs, anchors, and file extensions
      if (url.startsWith('http') || url.includes('#') || url.match(/\.\w+$/)) {
        return match;
      }

      fileFixCount++;
      return `href="${url}/"`;
    });

    if (fileFixCount > 0) {
      fs.writeFileSync(file, fixedContent);
      console.log(`✓ Fixed ${fileFixCount} links in ${file}`);
      totalFixed += fileFixCount;
    }
  });
});

console.log(`\n✨ Total: Fixed ${totalFixed} links with missing trailing slashes`);