// scripts/generate-favicons.js
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');
const toIco = require('to-ico');

const sourcePath = path.join(__dirname, '../public/images/forgewise_logo.jpg');
const outputPath = path.join(__dirname, '../public');

async function generateFavicons() {
  try {
    // Make sure the output directory exists
    if (!fs.existsSync(outputPath)) {
      fs.mkdirSync(outputPath, { recursive: true });
    }

    // Generate PNG files at different sizes
    const sizes = [16, 32, 48, 96, 192, 512];
    const pngBuffers = {};
    
    for (const size of sizes) {
      const buffer = await sharp(sourcePath)
        .resize(size, size)
        .png()
        .toBuffer();
      
      pngBuffers[size] = buffer;
      
      // Save individual PNGs for manifest.json and other uses
      fs.writeFileSync(
        path.join(outputPath, `icon-${size}x${size}.png`),
        buffer
      );
      
      console.log(`Generated icon-${size}x${size}.png`);
    }
    
    // Generate favicon.ico with multiple sizes
    const icoBuffer = await toIco([
      pngBuffers[16],
      pngBuffers[32],
      pngBuffers[48]
    ]);
    
    fs.writeFileSync(
      path.join(outputPath, 'favicon.ico'),
      icoBuffer
    );
    
    console.log('Generated favicon.ico with multiple sizes');
    
    // Generate Apple touch icons
    const appleSizes = [152, 167, 180];
    for (const size of appleSizes) {
      await sharp(sourcePath)
        .resize(size, size)
        .png()
        .toFile(path.join(outputPath, `apple-touch-icon-${size}x${size}.png`));
      
      console.log(`Generated apple-touch-icon-${size}x${size}.png`);
    }
    
    // Create default apple-touch-icon.png (180x180)
    fs.copyFileSync(
      path.join(outputPath, 'apple-touch-icon-180x180.png'),
      path.join(outputPath, 'apple-touch-icon.png')
    );
    
    console.log('All favicon assets have been generated successfully.');

  } catch (error) {
    console.error('Error generating favicons:', error);
    process.exit(1);
  }
}

// Run the function
generateFavicons();