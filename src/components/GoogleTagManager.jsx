import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Script from 'next/script';

// Google Tag Manager Component
export function GoogleTagManager() {
  const router = useRouter();
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;

  // Track page views
  useEffect(() => {
    const handleRouteChange = (url) => {
      if (window.dataLayer) {
        window.dataLayer.push({
          event: 'pageview',
          page: url,
        });
      }
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  if (!gtmId) return null;

  return (
    <>
      {/* Google Tag Manager Script */}
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${gtmId}');
          `,
        }}
      />
    </>
  );
}

// Google Tag Manager NoScript (for _document.js)
export function GTMNoScript() {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;

  if (!gtmId) return null;

  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
        height="0"
        width="0"
        style={{ display: 'none', visibility: 'hidden' }}
      />
    </noscript>
  );
}

// Helper function to push events to dataLayer
export function pushToDataLayer(eventData) {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push(eventData);
  }
}

// E-commerce tracking helpers
export const trackEvent = {
  // Page view (automatically handled by router)
  pageView: (pagePath, pageTitle) => {
    pushToDataLayer({
      event: 'page_view',
      page_path: pagePath,
      page_title: pageTitle,
    });
  },

  // Contact form submission
  leadGeneration: (formName, value) => {
    pushToDataLayer({
      event: 'generate_lead',
      form_name: formName,
      value: value || 0,
      currency: 'USD',
    });
  },

  // Click on CTA buttons
  ctaClick: (buttonName, location) => {
    pushToDataLayer({
      event: 'cta_click',
      button_name: buttonName,
      button_location: location,
    });
  },

  // Scroll depth tracking
  scrollDepth: (percentage) => {
    pushToDataLayer({
      event: 'scroll',
      percent_scrolled: percentage,
    });
  },

  // Time on page
  timeOnPage: (seconds) => {
    pushToDataLayer({
      event: 'time_on_page',
      time_seconds: seconds,
    });
  },

  // Custom conversion events
  customConversion: (conversionName, value) => {
    pushToDataLayer({
      event: 'conversion',
      conversion_name: conversionName,
      value: value || 0,
      currency: 'USD',
    });
  },

  // Booking/consultation request
  bookingRequest: (type) => {
    pushToDataLayer({
      event: 'begin_checkout',
      checkout_type: type,
      items: [{
        item_name: type,
        item_category: 'consultation',
        quantity: 1,
      }],
    });
  },
};