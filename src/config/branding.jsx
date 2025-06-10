// config/branding.js
export const brandConfig = {
  name: 'ForgeWise',
  fullName: 'ForgeWise.io',
  tagline: 'Forge Smarter Solutions',
  description: 'Strategic technology consulting that transforms your business operations',
  
  // Standardized color palette
  colors: {
    // Primary - Deep Blue/Indigo
    primary: {
      50: '#e8eaf6',
      100: '#c5cae9',
      200: '#9fa8da',
      300: '#7986cb',
      400: '#5c6bc0',
      500: '#3f51b5', // Main primary
      600: '#3949ab',
      700: '#303f9f',
      800: '#283593',
      900: '#1a237e'
    },
    
    // Secondary - Teal/Cyan
    secondary: {
      50: '#e0f2f1',
      100: '#b2dfdb',
      200: '#80cbc4',
      300: '#4db6ac',
      400: '#26a69a',
      500: '#009688', // Main secondary
      600: '#00897b',
      700: '#00796b',
      800: '#00695c',
      900: '#004d40'
    },
    
    // Accent - Orange
    accent: {
      50: '#fff3e0',
      100: '#ffe0b2',
      200: '#ffcc80',
      300: '#ffb74d',
      400: '#ffa726',
      500: '#ff9800', // Main accent
      600: '#fb8c00',
      700: '#f57c00',
      800: '#ef6c00',
      900: '#e65100'
    },
    
    // Semantic colors
    success: '#4caf50',
    warning: '#ff9800',
    error: '#f44336',
    info: '#2196f3',
    
    // Neutrals
    gray: {
      50: '#fafafa',
      100: '#f5f5f5',
      200: '#eeeeee',
      300: '#e0e0e0',
      400: '#bdbdbd',
      500: '#9e9e9e',
      600: '#757575',
      700: '#616161',
      800: '#424242',
      900: '#212121'
    }
  },
  
  // Tailwind class mappings for easy use
  theme: {
    // Backgrounds
    bgPrimary: 'bg-indigo-600',
    bgPrimaryHover: 'bg-indigo-700',
    bgSecondary: 'bg-teal-600',
    bgSecondaryHover: 'bg-teal-700',
    bgAccent: 'bg-orange-500',
    bgAccentHover: 'bg-orange-600',
    
    // Text
    textPrimary: 'text-indigo-600',
    textSecondary: 'text-teal-600',
    textAccent: 'text-orange-500',
    
    // Borders
    borderPrimary: 'border-indigo-600',
    borderSecondary: 'border-teal-600',
    borderAccent: 'border-orange-500',
    
    // Gradients
    gradientPrimary: 'bg-gradient-to-br from-indigo-600 to-indigo-800',
    gradientSecondary: 'bg-gradient-to-br from-teal-600 to-teal-800',
    gradientAccent: 'bg-gradient-to-br from-orange-500 to-orange-700',
    gradientHero: 'bg-gradient-to-br from-indigo-700 via-indigo-800 to-teal-700'
  },
  
  // Priority levels for insights/fixes
  priorities: {
    high: {
      bg: 'bg-red-50',
      border: 'border-red-300',
      text: 'text-red-700',
      icon: '🔴'
    },
    medium: {
      bg: 'bg-amber-50',
      border: 'border-amber-300',
      text: 'text-amber-700',
      icon: '🟡'
    },
    low: {
      bg: 'bg-green-50',
      border: 'border-green-300',
      text: 'text-green-700',
      icon: '🟢'
    }
  }
};

// SVG Logo Component
export const ForgeWiseLogo = ({ className = "h-8 w-8", color = "#3f51b5" }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Anvil base */}
    <path d="M8 32L12 28H36L40 32V36C40 37.1 39.1 38 38 38H10C8.9 38 8 37.1 8 36V32Z" fill={color} />
    
    {/* Anvil horn */}
    <path d="M12 28L8 24C7.4 23.4 7.4 22.6 8 22L10 20C10.6 19.4 11.4 19.4 12 20L16 24V28H12Z" fill={color} opacity="0.8" />
    
    {/* Gear/wisdom symbol */}
    <circle cx="24" cy="16" r="8" fill="none" stroke={color} strokeWidth="2" />
    <path d="M24 10V22M18 16H30M19.5 11.5L28.5 20.5M28.5 11.5L19.5 20.5" stroke={color} strokeWidth="2" strokeLinecap="round" />
    
    {/* Spark elements */}
    <path d="M36 8L38 6" stroke={color} strokeWidth="2" strokeLinecap="round" opacity="0.6" />
    <path d="M38 10L40 8" stroke={color} strokeWidth="2" strokeLinecap="round" opacity="0.6" />
    <path d="M34 6L36 4" stroke={color} strokeWidth="2" strokeLinecap="round" opacity="0.6" />
  </svg>
);

// Text logo variant
export const ForgeWiseTextLogo = ({ className = "" }) => (
  <div className={`flex items-center gap-2 ${className}`}>
    <ForgeWiseLogo />
    <span className="font-bold text-2xl">
      <span className="text-indigo-600">Forge</span>
      <span className="text-teal-600">Wise</span>
    </span>
  </div>
);