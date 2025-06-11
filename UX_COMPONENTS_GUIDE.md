# User Experience Components Implementation Guide

This guide documents the newly implemented UX components and how to use them throughout the application.

## 1. Breadcrumb Navigation

**Location**: `src/components/Breadcrumbs.jsx`

**Features**:
- Automatically generates breadcrumbs based on current route
- Custom route name mapping for better display
- Accessible with ARIA labels
- Home icon for root navigation

**Usage**:
Already integrated in `App.jsx` - appears on all pages except homepage.

**Customization**:
To add new route names, update the `routeNameMap` object in the component:
```javascript
const routeNameMap = {
  'your-route': 'Display Name',
  // ...
};
```

## 2. Back to Top Button

**Location**: `src/components/BackToTop.jsx`

**Features**:
- Appears after scrolling 400px down
- Smooth scroll animation
- Accessible with keyboard navigation
- Fixed position (bottom-left)
- Animated entrance/exit

**Usage**:
Already integrated in `App.jsx` - available on all pages.

**Customization**:
- Change appearance threshold: Modify `window.scrollY > 400` in the component
- Change position: Update Tailwind classes `bottom-8 left-8`

## 3. Loading Skeletons

**Location**: `src/components/LoadingSkeleton.jsx`

**Features**:
- Multiple skeleton types: text, title, button, image, card, avatar
- Pre-built patterns: CardSkeleton, ArticleSkeleton
- Animated pulse effect
- Responsive sizing

**Usage**:
```javascript
import LoadingSkeleton, { CardSkeleton, Skeleton } from './components/LoadingSkeleton';

// Full page skeleton
<LoadingSkeleton type="page" />

// Grid of card skeletons
<LoadingSkeleton type="card" count={6} />

// Individual skeleton elements
<Skeleton variant="title" />
<Skeleton variant="text" className="w-3/4" />
```

**Integration Example**:
```javascript
const [loading, setLoading] = useState(true);

return loading ? (
  <LoadingSkeleton type="card" count={3} />
) : (
  <div>Your actual content</div>
);
```

## 4. Dark Mode Toggle

**Location**: `src/components/DarkModeToggle.jsx`

**Features**:
- System preference detection
- LocalStorage persistence
- Animated sun/moon icons
- Tailwind dark mode classes
- Custom hook for checking dark mode state

**Usage**:
Toggle already added to Navbar. For dark mode styles:
```javascript
// In your components
<div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100">
  Content adapts to dark mode
</div>

// Check dark mode state
import { useDarkMode } from './components/DarkModeToggle';

function MyComponent() {
  const isDarkMode = useDarkMode();
  // ...
}
```

**Tailwind Configuration**:
Dark mode is configured with `darkMode: 'class'` in `tailwind.config.cjs`.

## 5. Form Input with Validation

**Location**: `src/components/FormInput.jsx`

**Features**:
- Real-time validation feedback
- Custom validation rules
- Accessible error messages
- Visual indicators (check/cross icons)
- Support for email, phone, URL validation
- Dark mode support

**Usage**:
```javascript
import FormInput, { validationRules } from './components/FormInput';

const [formData, setFormData] = useState({
  email: '',
  phone: ''
});
const [touched, setTouched] = useState({});

<FormInput
  label="Email Address"
  type="email"
  name="email"
  value={formData.email}
  onChange={(e) => setFormData({...formData, email: e.target.value})}
  onBlur={() => setTouched({...touched, email: true})}
  required
  touched={touched.email}
  placeholder="you@example.com"
/>

<FormInput
  label="Phone Number"
  type="tel"
  name="phone"
  value={formData.phone}
  onChange={(e) => setFormData({...formData, phone: e.target.value})}
  validation={validationRules.phone}
  touched={touched.phone}
/>
```

**Custom Validation**:
```javascript
<FormInput
  label="Custom Field"
  name="custom"
  value={value}
  onChange={onChange}
  validation={{
    minLength: 5,
    maxLength: 20,
    pattern: /^[A-Za-z]+$/,
    message: 'Only letters allowed'
  }}
/>
```

## Implementation Checklist

- [x] Breadcrumbs integrated in App.jsx
- [x] BackToTop integrated in App.jsx
- [x] DarkModeToggle added to Navbar
- [x] Tailwind dark mode configured
- [x] LoadingSkeleton ready for use
- [x] FormInput component ready for forms

## Next Steps

1. **Update existing forms** to use the new FormInput component
2. **Add loading states** to data-fetching components using LoadingSkeleton
3. **Test dark mode** across all pages and components
4. **Add more skeleton patterns** as needed for specific layouts
5. **Customize breadcrumb names** for all routes

## Dark Mode Best Practices

1. Always provide both light and dark variants:
   ```css
   bg-white dark:bg-gray-800
   text-gray-900 dark:text-gray-100
   border-gray-200 dark:border-gray-700
   ```

2. Test contrast ratios in both modes
3. Consider reduced transparency in dark mode
4. Use semantic color names (e.g., `bg-surface`, `text-primary`)

## Performance Tips

1. **Lazy load LoadingSkeleton** for non-critical paths
2. **Memoize FormInput** validation functions if complex
3. **Use CSS transitions** for dark mode switching
4. **Debounce scroll events** for BackToTop if needed

## Accessibility Notes

- All components include proper ARIA labels
- Keyboard navigation fully supported
- Focus indicators included
- Screen reader announcements for dynamic content
- Color contrast meets WCAG AA standards