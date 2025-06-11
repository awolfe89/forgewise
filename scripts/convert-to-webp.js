import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const config = {
  quality: 85, // WebP quality (0-100)
  lossless: false, // Use lossy compression for smaller files
  generateSizes: true, // Generate responsive image sizes
  sizes: [
    { suffix: '', width: null }, // Original size
    { suffix: '@2x', width: 1200 },
    { suffix: '@1x', width: 600 },
    { suffix: '@mobile', width: 400 }
  ]
};

// Directories to process
const imageDirs = [
  path.join(__dirname, '../src/assets'),
  path.join(__dirname, '../public')
];

// Supported formats
const supportedFormats = ['.jpg', '.jpeg', '.png'];

async function convertImage(inputPath, outputDir) {
  const ext = path.extname(inputPath).toLowerCase();
  const basename = path.basename(inputPath, ext);
  
  if (!supportedFormats.includes(ext)) {
    return;
  }

  console.log(`Converting ${path.basename(inputPath)}...`);

  try {
    const image = sharp(inputPath);
    const metadata = await image.metadata();
    
    // Convert to WebP with different sizes
    for (const size of config.sizes) {
      const suffix = size.suffix;
      const width = size.width || metadata.width;
      
      // Skip if the target width is larger than original
      if (width > metadata.width) continue;
      
      const outputFileName = `${basename}${suffix}.webp`;
      const outputPath = path.join(outputDir, outputFileName);
      
      await image
        .resize(width, null, {
          withoutEnlargement: true,
          fit: 'inside'
        })
        .webp({
          quality: config.quality,
          lossless: config.lossless,
          effort: 6 // Higher effort = better compression but slower
        })
        .toFile(outputPath);
      
      const stats = await fs.stat(outputPath);
      const originalStats = await fs.stat(inputPath);
      const savings = ((1 - stats.size / originalStats.size) * 100).toFixed(2);
      
      console.log(`  ✓ ${outputFileName} (${formatBytes(stats.size)}, ${savings}% smaller)`);
    }
    
    // Also keep the original format in responsive sizes for fallback
    if (config.generateSizes) {
      for (const size of config.sizes.slice(1)) { // Skip original size
        const suffix = size.suffix;
        const width = size.width;
        
        if (width > metadata.width) continue;
        
        const outputFileName = `${basename}${suffix}${ext}`;
        const outputPath = path.join(outputDir, outputFileName);
        
        await image
          .resize(width, null, {
            withoutEnlargement: true,
            fit: 'inside'
          })
          .toFile(outputPath);
      }
    }
    
  } catch (error) {
    console.error(`  ✗ Error converting ${path.basename(inputPath)}:`, error.message);
  }
}

async function processDirectory(dir) {
  try {
    const files = await fs.readdir(dir);
    
    for (const file of files) {
      const filePath = path.join(dir, file);
      const stats = await fs.stat(filePath);
      
      if (stats.isFile()) {
        await convertImage(filePath, dir);
      }
    }
  } catch (error) {
    console.error(`Error processing directory ${dir}:`, error.message);
  }
}

function formatBytes(bytes) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

async function generateImageManifest() {
  const manifest = {
    images: {},
    generated: new Date().toISOString()
  };
  
  for (const dir of imageDirs) {
    try {
      const files = await fs.readdir(dir);
      const relativeDir = path.relative(path.join(__dirname, '..'), dir);
      
      for (const file of files) {
        const ext = path.extname(file).toLowerCase();
        if (supportedFormats.includes(ext)) {
          const basename = path.basename(file, ext);
          const filePath = path.join(dir, file);
          const stats = await fs.stat(filePath);
          const image = sharp(filePath);
          const metadata = await image.metadata();
          
          manifest.images[basename] = {
            original: {
              path: path.join(relativeDir, file),
              size: stats.size,
              dimensions: {
                width: metadata.width,
                height: metadata.height
              }
            },
            webp: {},
            fallback: {}
          };
          
          // Check for WebP versions
          for (const size of config.sizes) {
            const webpFile = `${basename}${size.suffix}.webp`;
            const webpPath = path.join(dir, webpFile);
            try {
              const webpStats = await fs.stat(webpPath);
              manifest.images[basename].webp[size.suffix || 'original'] = {
                path: path.join(relativeDir, webpFile),
                size: webpStats.size
              };
            } catch (e) {
              // WebP file doesn't exist yet
            }
          }
        }
      }
    } catch (error) {
      console.error(`Error generating manifest for ${dir}:`, error.message);
    }
  }
  
  // Save manifest
  const manifestPath = path.join(__dirname, '../src/config/image-manifest.json');
  await fs.writeFile(manifestPath, JSON.stringify(manifest, null, 2));
  console.log('\nImage manifest generated at src/config/image-manifest.json');
}

async function main() {
  console.log('🖼️  WebP Image Conversion Tool\n');
  console.log('Configuration:');
  console.log(`  Quality: ${config.quality}`);
  console.log(`  Lossless: ${config.lossless}`);
  console.log(`  Sizes: ${config.sizes.map(s => s.width || 'original').join(', ')}\n`);
  
  // Process each directory
  for (const dir of imageDirs) {
    console.log(`\nProcessing ${path.relative(process.cwd(), dir)}...`);
    await processDirectory(dir);
  }
  
  // Generate manifest
  console.log('\nGenerating image manifest...');
  await generateImageManifest();
  
  console.log('\n✨ Conversion complete!');
  console.log('\nNext steps:');
  console.log('1. Update your components to use the LazyImage component');
  console.log('2. The LazyImage component will automatically use WebP with fallbacks');
  console.log('3. Run "npm run build" to see the performance improvements');
}

// Run the conversion
main().catch(console.error);