import { useEffect } from 'react';
import Script from 'next/script';
import NextSEO from '../src/components/NextSEO';
import { getPageSEO } from '../src/config/seo';

export default function Contact() {
  // Load Calendly widget
  useEffect(() => {
    const head = document.querySelector('head');
    const link = document.createElement('link');
    link.href = 'https://assets.calendly.com/assets/external/widget.css';
    link.rel = 'stylesheet';
    head.appendChild(link);

    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    head.appendChild(script);

    return () => {
      head.removeChild(link);
      head.removeChild(script);
    };
  }, []);

  const seoData = getPageSEO('/contact');

  return (
    <>
      <NextSEO {...seoData} />
      
      <div className="pt-20 min-h-screen">
        {/* Header Section - Simplified */}
        <section className="relative bg-white py-12">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Let's Fix Your Revenue Leaks</h1>
            <p className="text-xl max-w-2xl mx-auto text-gray-600 mb-2">
              Book a free discovery call. No pitch decks, just solutions.
            </p>
            <p className="text-gray-500">
              Typical response same day. First call is 25-30 min.
            </p>
          </div>
        </section>

        {/* Calendly Embed */}
        <section className="py-8 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6">
            {/* Calendly inline widget */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="calendly-inline-widget"
                data-url="https://calendly.com/forgewise/discovery?hide_gdpr_banner=1&primary_color=1e40af"
                style={{ minWidth: '320px', height: '700px' }}
              />
            </div>

            {/* Email Alternative */}
            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-2">
                Prefer email? Reach out directly:
              </p>
              <a
                href="mailto:admin@forgewise.io"
                className="text-2xl font-medium text-blue-600 hover:text-blue-700 transition-colors"
              >
                admin@forgewise.io
              </a>
              <p className="text-sm text-gray-500 mt-2">
                We typically reply within 4 hours during business days
              </p>
            </div>
          </div>
        </section>

        {/* What to Expect */}
        <section className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-2xl font-bold text-center mb-8">What to Expect</h2>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl mb-3">📊</div>
                <h3 className="font-bold mb-2">Quick Assessment</h3>
                <p className="text-gray-600 text-sm">
                  We'll review your current metrics and identify your biggest opportunities
                </p>
              </div>
              <div>
                <div className="text-3xl mb-3">🎯</div>
                <h3 className="font-bold mb-2">Clear Next Steps</h3>
                <p className="text-gray-600 text-sm">
                  You'll leave with 2-3 actionable fixes you can implement immediately
                </p>
              </div>
              <div>
                <div className="text-3xl mb-3">🚫</div>
                <h3 className="font-bold mb-2">No BS</h3>
                <p className="text-gray-600 text-sm">
                  If we can't help, we'll tell you straight up and point you in the right direction
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {},
  }
}

