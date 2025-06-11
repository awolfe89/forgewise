# PWA Configuration Guide

## Current Status ✅

The Progressive Web App (PWA) configuration has been properly set up with:

### 1. Icon Sizes
All required PWA icon sizes have been generated:
- **72x72** - Older Android home screen
- **96x96** - Google TV
- **128x128** - Chrome Web Store
- **144x144** - Microsoft Windows
- **152x152** - iPad
- **192x192** - Android Chrome *(minimum required)*
- **384x384** - HD Android devices
- **512x512** - Splash screens *(recommended for PWA)*
- **180x180** - Apple touch icon

### 2. Manifest Configuration
The `site.webmanifest` includes:
- ✅ All icon sizes with proper `purpose` attributes
- ✅ `maskable` icons for Android adaptive icons
- ✅ Theme and background colors
- ✅ Display mode set to `standalone`
- ✅ Start URL and scope defined
- ✅ Name and short name for app installation

### 3. Icon Generation Script
Created `scripts/generate-pwa-icons.js` that:
- Generates all required icon sizes from source image
- Adds padding for maskable icons
- Updates manifest automatically
- Creates Apple touch icon

## Usage

### Regenerate Icons
If you need to update the icons (e.g., new logo):
```bash
# Replace public/portfolio-favicon-128.png with new source icon
npm run generate-pwa-icons
```

### Testing PWA Compliance

1. **Chrome DevTools**:
   - Open DevTools → Application tab
   - Check "Manifest" section
   - Run Lighthouse PWA audit

2. **Test Installation**:
   - Visit site in Chrome on mobile
   - Should see "Add to Home Screen" prompt
   - Icon should display correctly when installed

3. **iOS Testing**:
   - Add to home screen on Safari
   - Apple touch icon should display correctly

## Icon Requirements

### Source Icon Best Practices
- Use a square icon (1:1 aspect ratio)
- Minimum 512x512px for best quality
- Simple design that scales well
- Consider safe zones for maskable icons

### Maskable Icons
The 192x192 and 512x512 icons are marked as "maskable":
- Android will crop these into various shapes
- 10% padding added automatically
- Ensures icon looks good in circles, squares, etc.

## Troubleshooting

### Common Issues

1. **"No matching service worker detected"**
   - PWA requires a service worker for offline functionality
   - Consider adding basic service worker for full PWA compliance

2. **Icon not showing on Android**
   - Ensure 192x192 icon exists
   - Check manifest is linked in HTML
   - Clear browser cache

3. **Icon not showing on iOS**
   - Apple touch icon must be specified separately
   - Already configured in index.html

## Future Enhancements

To make this a full PWA, consider adding:
1. Service worker for offline functionality
2. Push notification support
3. App shortcuts in manifest
4. Screenshots for app stores
5. Categories and related applications

## Resources
- [PWA Icon Guidelines](https://web.dev/add-manifest/)
- [Maskable Icons](https://web.dev/maskable-icon/)
- [PWA Checklist](https://web.dev/pwa-checklist/)