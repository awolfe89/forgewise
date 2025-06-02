// Image configuration for lazy loading and WebP support
// Since we can't convert images server-side, we'll prepare the structure
// for when WebP images are available

export const imageAssets = {
  // Logos
  aahLogo: {
    original: '/src/assets/AAH_logo.jpg',
    webp: '/src/assets/AAH_logo.webp', // To be added
    alt: 'Armor Animal Health Logo'
  },
  ppvLogo: {
    original: '/src/assets/ppv_logo.jpg',
    webp: '/src/assets/ppv_logo.webp', // To be added
    alt: 'PrimePet&Vet Logo'
  },
  
  // Project Screenshots
  emailApp: {
    original: '/src/assets/aah_ai_email_screen.png',
    webp: '/src/assets/aah_ai_email_screen.webp', // To be added
    alt: 'AI Email Search Engine Screenshot'
  },
  chatbot: {
    original: '/src/assets/integratedChatBot.png',
    webp: '/src/assets/integratedChatBot.webp', // To be added
    alt: 'Shopify AI Chatbot Screenshot'
  },
  socialBot: {
    original: '/src/assets/socialBot.png',
    webp: '/src/assets/socialBot.webp', // To be added
    alt: 'Social Media Automation Screenshot'
  },
  rewriteEngine: {
    original: '/src/assets/rewrite_engine.png',
    webp: '/src/assets/rewrite_engine.webp', // To be added
    alt: 'Rewrite Engine Screenshot'
  },
  invDash: {
    original: '/src/assets/invDash.png',
    webp: '/src/assets/invDash.webp', // To be added
    alt: 'Inventory Dashboard Screenshot'
  },
  comparisonChart: {
    original: '/src/assets/comparison-chart.png',
    webp: '/src/assets/comparison-chart.webp', // To be added
    alt: 'Product Comparison Tool Screenshot'
  },
  contentCannon: {
    original: '/src/assets/content-cannon.png',
    webp: '/src/assets/content-cannon.webp', // To be added
    alt: 'Content Cannon Screenshot'
  },
  qrCode: {
    original: '/src/assets/qr-code.png',
    webp: '/src/assets/qr-code.webp', // To be added
    alt: 'QR Code Generator Screenshot'
  },
  
  // Company Logos
  grubs: {
    original: '/src/assets/grubs.png',
    webp: '/src/assets/grubs.webp', // To be added
    alt: 'Grubs Boots USA Logo'
  },
  triLogo: {
    original: '/src/assets/triLogo.png',
    webp: '/src/assets/triLogo.webp', // To be added
    alt: 'Tri-County Garage Door Logo'
  },
  wnLogo: {
    original: '/src/assets/wnlogo.png',
    webp: '/src/assets/wnlogo.webp', // To be added
    alt: 'Wet Noses Grooming Logo'
  },
  voltech: {
    original: '/src/assets/voltech.png',
    webp: '/src/assets/voltech.webp', // To be added
    alt: 'Voltech Electric Logo'
  },
  technimark: {
    original: '/src/assets/technimark.png',
    webp: '/src/assets/technimark.webp', // To be added
    alt: 'Technimark Logo'
  },
  esdGuys: {
    original: '/src/assets/esdguys.png',
    webp: '/src/assets/esdguys.webp', // To be added
    alt: 'ESD Guys Logo'
  },
  yo: {
    original: '/src/assets/yo.png',
    webp: '/src/assets/yo.webp', // To be added
    alt: 'Yo Units Logo'
  },
  neptune: {
    original: '/src/assets/neptune.png',
    webp: '/src/assets/neptune.webp', // To be added
    alt: 'Neptune SEO Logo'
  }
};

// Helper function to check WebP support
export const supportsWebP = () => {
  if (typeof window === 'undefined') return false;
  
  const canvas = document.createElement('canvas');
  canvas.width = 1;
  canvas.height = 1;
  return canvas.toDataURL('image/webp').indexOf('image/webp') === 0;
};