# WebP Image Conversion Guide

## Why WebP?
WebP images are typically 25-35% smaller than PNGs and JPEGs while maintaining the same quality. This improves page load times and SEO.

## How to Convert Your Images

### Option 1: Online Converter (Recommended)
1. Visit [CloudConvert](https://cloudconvert.com/png-to-webp) or [Convertio](https://convertio.co/png-webp/)
2. Upload your images from `src/assets/`
3. Download the WebP versions
4. Save them in `src/assets/` with the same name but `.webp` extension

### Option 2: Command Line (if you have cwebp installed)
```bash
# Install webp tools
brew install webp

# Convert all PNGs
for file in src/assets/*.png; do
  cwebp -q 80 "$file" -o "${file%.png}.webp"
done

# Convert all JPGs
for file in src/assets/*.jpg; do
  cwebp -q 80 "$file" -o "${file%.jpg}.webp"
done
```

### Option 3: Using Node.js Script
```bash
npm install --save-dev imagemin imagemin-webp

# Then run the conversion script
node scripts/convert-to-webp.js
```

## Images to Convert
- [ ] AAH_logo.jpg → AAH_logo.webp
- [ ] aah_ai_email_screen.png → aah_ai_email_screen.webp
- [ ] comparison-chart.png → comparison-chart.webp
- [ ] content-cannon.png → content-cannon.webp
- [ ] esdguys.png → esdguys.webp
- [ ] grubs.png → grubs.webp
- [ ] integratedChatBot.png → integratedChatBot.webp
- [ ] invDash.png → invDash.webp
- [ ] neptune.png → neptune.webp
- [ ] portfolio-favicon-128.png → portfolio-favicon-128.webp
- [ ] ppv_logo.jpg → ppv_logo.webp
- [ ] qr-code.png → qr-code.webp
- [ ] rewrite_engine.png → rewrite_engine.webp
- [ ] socialBot.png → socialBot.webp
- [ ] technimark.png → technimark.webp
- [ ] triLogo.png → triLogo.webp
- [ ] voltech.png → voltech.webp
- [ ] wnlogo.png → wnlogo.webp
- [ ] yo.png → yo.webp

## After Conversion
The LazyImage component is already set up to use WebP images when available with PNG/JPG fallbacks for older browsers.