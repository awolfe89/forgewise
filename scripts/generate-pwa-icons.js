import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// PWA icon sizes required for full compatibility
const PWA_ICON_SIZES = [
  { size: 72, purpose: 'any' },
  { size: 96, purpose: 'any' },
  { size: 128, purpose: 'any' },
  { size: 144, purpose: 'any' },
  { size: 152, purpose: 'any' },
  { size: 192, purpose: 'any maskable' }, // Minimum required
  { size: 384, purpose: 'any' },
  { size: 512, purpose: 'any maskable' }  // For splash screens
];

async function generatePWAIcons() {
  const sourcePath = path.join(__dirname, '..', 'public', 'portfolio-favicon-128.png');
  const outputDir = path.join(__dirname, '..', 'public');
  
  console.log('🎨 Generating PWA icons...\n');
  
  try {
    // Read the source image
    const sourceImage = sharp(sourcePath);
    const metadata = await sourceImage.metadata();
    
    console.log(`Source image: ${metadata.width}x${metadata.height}`);
    console.log('Generating icons:\n');
    
    // Generate each icon size
    for (const { size, purpose } of PWA_ICON_SIZES) {
      const outputPath = path.join(outputDir, `icon-${size}x${size}.png`);
      
      // For maskable icons, add some padding (10% on each side)
      const padding = purpose.includes('maskable') ? Math.round(size * 0.1) : 0;
      
      await sharp(sourcePath)
        .resize(size - (padding * 2), size - (padding * 2), {
          fit: 'contain',
          background: { r: 255, g: 255, b: 255, alpha: 0 }
        })
        .extend({
          top: padding,
          bottom: padding,
          left: padding,
          right: padding,
          background: { r: 255, g: 255, b: 255, alpha: 0 }
        })
        .png()
        .toFile(outputPath);
      
      const purposeLabel = purpose.includes('maskable') ? ' (maskable)' : '';
      console.log(`  ✓ ${size}x${size}${purposeLabel} → icon-${size}x${size}.png`);
    }
    
    // Generate apple-touch-icon (180x180)
    const appleTouchPath = path.join(outputDir, 'apple-touch-icon.png');
    await sharp(sourcePath)
      .resize(180, 180, {
        fit: 'contain',
        background: { r: 255, g: 255, b: 255, alpha: 1 } // White background for Apple
      })
      .png()
      .toFile(appleTouchPath);
    
    console.log('  ✓ 180x180 → apple-touch-icon.png (for iOS)\n');
    
    // Update the manifest
    await updateManifest();
    
    console.log('✨ PWA icons generated successfully!\n');
    console.log('Next steps:');
    console.log('1. The manifest has been updated with all icon sizes');
    console.log('2. Add the apple-touch-icon link to index.html:');
    console.log('   <link rel="apple-touch-icon" href="/apple-touch-icon.png">');
    console.log('3. Test with Lighthouse PWA audit\n');
    
  } catch (error) {
    console.error('Error generating icons:', error);
    process.exit(1);
  }
}

async function updateManifest() {
  const manifestPath = path.join(__dirname, '..', 'site.webmanifest');
  
  try {
    // Read current manifest
    const manifestContent = await fs.readFile(manifestPath, 'utf8');
    const manifest = JSON.parse(manifestContent);
    
    // Update icons array
    manifest.icons = PWA_ICON_SIZES.map(({ size, purpose }) => ({
      src: `/icon-${size}x${size}.png`,
      sizes: `${size}x${size}`,
      type: 'image/png',
      purpose: purpose
    }));
    
    // Write updated manifest
    await fs.writeFile(
      manifestPath, 
      JSON.stringify(manifest, null, 2) + '\n',
      'utf8'
    );
    
    console.log('✓ Updated site.webmanifest with new icon sizes');
    
  } catch (error) {
    console.error('Error updating manifest:', error);
    throw error;
  }
}

// Run the generator
generatePWAIcons().catch(console.error);