const sharp = require('sharp');
const path = require('path');

async function convertArmorLogo() {
  const inputPath = path.join(__dirname, '../public/armor-logo.jpg');
  const outputPath = path.join(__dirname, '../public/armor-logo.webp');

  try {
    await sharp(inputPath)
      .webp({ quality: 85 })
      .toFile(outputPath);
    console.log('✓ Created armor-logo.webp');
  } catch (err) {
    console.error('Error converting armor logo:', err.message);
  }
}

convertArmorLogo();