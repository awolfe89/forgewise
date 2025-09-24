// Google Analytics and conversion tracking utilities

// Send custom events to Google Analytics
export function trackEvent(eventName, parameters = {}) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, parameters);
  }
}

// Track form submissions
export function trackFormSubmission(formName, formData = {}) {
  trackEvent('form_submit', {
    form_name: formName,
    form_destination: window.location.pathname,
    ...formData
  });
}

// Track button clicks
export function trackButtonClick(buttonName, buttonLocation = '') {
  trackEvent('button_click', {
    button_name: buttonName,
    button_location: buttonLocation || window.location.pathname
  });
}

// Track page views (already handled by GTM, but available for custom tracking)
export function trackPageView(pagePath, pageTitle) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'page_view', {
      page_path: pagePath,
      page_title: pageTitle
    });
  }
}

// Track conversions for Google Ads
export function trackConversion(conversionLabel, value = null, currency = 'USD') {
  const conversionId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;

  if (typeof window !== 'undefined' && window.gtag && conversionId) {
    const conversionData = {
      'send_to': `${conversionId}/${conversionLabel}`,
      'value': value,
      'currency': currency
    };

    window.gtag('event', 'conversion', conversionData);
  }
}

// Track contact form conversions
export function trackContactConversion() {
  trackConversion(process.env.NEXT_PUBLIC_ADS_CONTACT_LABEL, null);
  trackEvent('generate_lead', {
    value: 1,
    currency: 'USD'
  });
}

// Track quick fixes purchase conversions
export function trackQuickFixesConversion(packageName, value) {
  trackConversion(process.env.NEXT_PUBLIC_ADS_QUICKFIX_LABEL, value);
  trackEvent('purchase', {
    value: value,
    currency: 'USD',
    items: [{
      item_name: packageName,
      price: value,
      quantity: 1
    }]
  });
}

// Track engagement metrics
export function trackEngagement(action, label, value = null) {
  trackEvent('engagement', {
    action: action,
    label: label,
    value: value
  });
}

// Track scroll depth
export function trackScrollDepth(percentage) {
  trackEvent('scroll', {
    percent_scrolled: percentage
  });
}

// Track file downloads
export function trackDownload(fileName, fileType) {
  trackEvent('file_download', {
    file_name: fileName,
    file_extension: fileType
  });
}

// Track external link clicks
export function trackOutboundLink(url, linkText) {
  trackEvent('click', {
    link_url: url,
    link_text: linkText,
    link_domain: new URL(url).hostname,
    outbound: true
  });
}

// Enhanced Ecommerce tracking for viewing items
export function trackViewItem(itemName, itemId, price, category) {
  trackEvent('view_item', {
    currency: 'USD',
    value: price,
    items: [{
      item_id: itemId,
      item_name: itemName,
      price: price,
      item_category: category,
      quantity: 1
    }]
  });
}

// Track sign-ups
export function trackSignUp(method) {
  trackEvent('sign_up', {
    method: method
  });
}

// Track search queries
export function trackSearch(searchTerm) {
  trackEvent('search', {
    search_term: searchTerm
  });
}

// Track video interactions
export function trackVideo(action, videoTitle, videoUrl) {
  trackEvent(`video_${action}`, {
    video_title: videoTitle,
    video_url: videoUrl
  });
}

// Track errors
export function trackError(errorMessage, errorLocation) {
  trackEvent('exception', {
    description: errorMessage,
    fatal: false,
    error_location: errorLocation
  });
}

// Initialize dataLayer push for GTM custom events
export function pushToDataLayer(eventData) {
  if (typeof window !== 'undefined') {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(eventData);
  }
}

// Track user timing (performance metrics)
export function trackTiming(category, variable, value, label = null) {
  trackEvent('timing_complete', {
    name: variable,
    value: Math.round(value),
    event_category: category,
    event_label: label
  });
}