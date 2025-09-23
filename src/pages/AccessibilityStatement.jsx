import { useEffect } from 'react';
import Link from 'next/link';
import { FadeIn } from '../components/AnimatedComponents';

export default function AccessibilityStatement() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <FadeIn>
      <div className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Accessibility Statement</h1>
            <p className="text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

            <div className="prose prose-lg max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Our Commitment to Accessibility</h2>
                <p className="text-gray-700 mb-4">
                  Forgewise.io is committed to ensuring digital accessibility for people with disabilities. 
                  We continually improve the user experience for everyone and apply relevant accessibility 
                  standards.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Conformance Status</h2>
                <p className="text-gray-700 mb-4">
                  We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 level AA. 
                  These guidelines explain how to make web content more accessible to people with disabilities.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Accessibility Features</h2>
                <p className="text-gray-700 mb-4">
                  Our website includes the following accessibility features:
                </p>
                
                <h3 className="text-xl font-semibold mb-3">Navigation & Structure</h3>
                <ul className="list-disc pl-6 mb-4 text-gray-700">
                  <li>Consistent navigation throughout the site</li>
                  <li>Skip to main content link on all pages</li>
                  <li>Semantic HTML structure with proper heading hierarchy</li>
                  <li>Descriptive page titles and headings</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3">Visual Design</h3>
                <ul className="list-disc pl-6 mb-4 text-gray-700">
                  <li>Sufficient color contrast ratios (WCAG AA compliant)</li>
                  <li>Text resizable up to 200% without loss of functionality</li>
                  <li>Focus indicators for keyboard navigation</li>
                  <li>No reliance on color alone to convey information</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3">Interaction & Control</h3>
                <ul className="list-disc pl-6 mb-4 text-gray-700">
                  <li>All functionality available via keyboard</li>
                  <li>No keyboard traps</li>
                  <li>Sufficient time limits for time-based content</li>
                  <li>Motion and animations respect prefers-reduced-motion settings</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3">Content & Media</h3>
                <ul className="list-disc pl-6 mb-4 text-gray-700">
                  <li>Alternative text for all informative images</li>
                  <li>Descriptive link text</li>
                  <li>Clear and simple language</li>
                  <li>Structured content with lists and headings</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Technologies Used</h2>
                <p className="text-gray-700 mb-4">
                  This website uses the following technologies:
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700">
                  <li>HTML5 with semantic markup</li>
                  <li>CSS3 with responsive design</li>
                  <li>JavaScript (React) with accessibility considerations</li>
                  <li>ARIA labels and landmarks where appropriate</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Testing & Evaluation</h2>
                <p className="text-gray-700 mb-4">
                  We regularly test our website using:
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700">
                  <li>Automated accessibility testing tools</li>
                  <li>Keyboard-only navigation testing</li>
                  <li>Screen reader compatibility testing</li>
                  <li>Color contrast analyzers</li>
                  <li>Manual accessibility audits</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Known Issues</h2>
                <p className="text-gray-700 mb-4">
                  We are actively working to address any accessibility issues. If you encounter 
                  any problems, please contact us so we can resolve them promptly.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Browser Compatibility</h2>
                <p className="text-gray-700 mb-4">
                  Our website is designed to be compatible with the following assistive technologies:
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700">
                  <li>Recent versions of JAWS, NVDA, and VoiceOver screen readers</li>
                  <li>Speech recognition software</li>
                  <li>Screen magnification software</li>
                  <li>Browser zoom functionality</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Feedback & Contact</h2>
                <p className="text-gray-700 mb-4">
                  We welcome your feedback on the accessibility of Forgewise.io. Please let us know 
                  if you encounter accessibility barriers:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <p className="text-gray-700">
                    <strong>Email:</strong> hello@forgewise.io<br />
                    <strong>Contact Form:</strong> <Link href="/contact" className="text-indigo-600 hover:text-indigo-800">Available here</Link><br />
                    <strong>Response Time:</strong> We aim to respond within 2 business days
                  </p>
                </div>
                <p className="text-gray-700 mb-4">
                  When contacting us, please include:
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700">
                  <li>The web page address (URL) where you encountered the barrier</li>
                  <li>A description of the problem</li>
                  <li>The assistive technology you were using (if applicable)</li>
                  <li>Your contact information if you'd like a response</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Enforcement</h2>
                <p className="text-gray-700 mb-4">
                  We take accessibility seriously and are committed to addressing all concerns. 
                  If you are not satisfied with our response, you may wish to contact relevant 
                  enforcement bodies in your jurisdiction.
                </p>
              </section>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                <div className="flex gap-4">
                  <Link 
                    href="/privacy-policy" 
                    className="text-indigo-600 hover:text-indigo-800 font-medium"
                  >
                    Privacy Policy
                  </Link>
                  <Link 
                    href="/terms-of-service" 
                    className="text-indigo-600 hover:text-indigo-800 font-medium"
                  >
                    Terms of Service
                  </Link>
                </div>
                <Link 
                  href="/" 
                  className="text-gray-600 hover:text-gray-800"
                >
                  Back to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FadeIn>
  );
}