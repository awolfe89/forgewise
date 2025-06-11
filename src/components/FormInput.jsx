import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X, AlertCircle } from 'lucide-react';

export default function FormInput({
  label,
  type = 'text',
  name,
  value,
  onChange,
  onBlur,
  placeholder,
  required = false,
  validation = {},
  error,
  touched,
  className = '',
  ...props
}) {
  const [isValidating, setIsValidating] = useState(false);
  const [localError, setLocalError] = useState('');

  const validateInput = (inputValue) => {
    // Email validation
    if (type === 'email' && inputValue) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(inputValue)) {
        return 'Please enter a valid email address';
      }
    }

    // Phone validation
    if (type === 'tel' && inputValue) {
      const phoneRegex = /^[\d\s\-\+\(\)]+$/;
      if (!phoneRegex.test(inputValue)) {
        return 'Please enter a valid phone number';
      }
    }

    // Required field validation
    if (required && !inputValue) {
      return `${label} is required`;
    }

    // Custom validation rules
    if (validation.minLength && inputValue.length < validation.minLength) {
      return `${label} must be at least ${validation.minLength} characters`;
    }

    if (validation.maxLength && inputValue.length > validation.maxLength) {
      return `${label} must be no more than ${validation.maxLength} characters`;
    }

    if (validation.pattern && !validation.pattern.test(inputValue)) {
      return validation.message || `${label} is invalid`;
    }

    return '';
  };

  const handleBlur = (e) => {
    const validationError = validateInput(e.target.value);
    setLocalError(validationError);
    if (onBlur) onBlur(e);
  };

  const showError = error || (touched && localError);
  const isValid = touched && value && !showError;

  return (
    <div className={`space-y-1 ${className}`}>
      <label 
        htmlFor={name}
        className="block text-sm font-medium text-gray-700 dark:text-gray-300"
      >
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      
      <div className="relative">
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          onBlur={handleBlur}
          placeholder={placeholder}
          required={required}
          aria-invalid={!!showError}
          aria-describedby={showError ? `${name}-error` : undefined}
          className={`
            w-full px-4 py-2 pr-10 border rounded-lg transition-all duration-200
            focus:outline-none focus:ring-2 focus:ring-offset-2
            ${showError 
              ? 'border-red-500 focus:ring-red-500' 
              : isValid 
                ? 'border-green-500 focus:ring-green-500' 
                : 'border-gray-300 dark:border-gray-600 focus:ring-indigo-500'
            }
            bg-white dark:bg-gray-800 
            text-gray-900 dark:text-gray-100
            placeholder-gray-400 dark:placeholder-gray-500
          `}
          {...props}
        />
        
        {/* Validation Icons */}
        <AnimatePresence>
          {showError && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="absolute right-3 top-1/2 -translate-y-1/2"
            >
              <X className="h-5 w-5 text-red-500" />
            </motion.div>
          )}
          
          {isValid && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="absolute right-3 top-1/2 -translate-y-1/2"
            >
              <Check className="h-5 w-5 text-green-500" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      {/* Error Message */}
      <AnimatePresence>
        {showError && (
          <motion.div
            id={`${name}-error`}
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            className="flex items-center gap-1 text-sm text-red-600 dark:text-red-400"
          >
            <AlertCircle className="h-4 w-4" />
            <span>{error || localError}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Export validation helpers
export const validationRules = {
  email: {
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    message: 'Please enter a valid email address'
  },
  phone: {
    pattern: /^[\d\s\-\+\(\)]+$/,
    message: 'Please enter a valid phone number'
  },
  url: {
    pattern: /^https?:\/\/.+\..+/,
    message: 'Please enter a valid URL'
  }
};