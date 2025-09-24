import Link from 'next/link';
import NextSEO from '../src/components/NextSEO';

export default function AccessibilityStatement() {
  return (
    <>
      <NextSEO 
        title="Accessibility Statement - Forgewise"
        description="Learn about Forgewise's commitment to web accessibility and how to request assistance."
      />
      
      <div className="min-h-screen pt-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h1 className="text-4xl font-bold mb-8">Accessibility Statement</h1>
          <p className="text-sm text-gray-600 mb-8">Last updated: January 15, 2024</p>
          
          <div className="prose prose-gray max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Our Commitment</h2>
              <p className="text-gray-700 mb-4">
                Forgewise is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Conformance Status</h2>
              <p className="text-gray-700 mb-4">
                We aim to conform to WCAG 2.1 Level AA standards. The Web Content Accessibility Guidelines (WCAG) defines requirements for designers and developers to improve accessibility for people with disabilities.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Accessibility Features</h2>
              <p className="text-gray-700 mb-4">Our website includes the following accessibility features:</p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Semantic HTML for better screen reader support</li>
                <li>Keyboard navigation throughout the site</li>
                <li>Alt text for all informative images</li>
                <li>Sufficient color contrast ratios</li>
                <li>Clear focus indicators</li>
                <li>Resizable text without loss of functionality</li>
                <li>Descriptive link text</li>
                <li>Consistent navigation structure</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Technical Specifications</h2>
              <p className="text-gray-700 mb-4">
                Accessibility of Forgewise relies on the following technologies to work with the particular combination of web browser and any assistive technologies or plugins installed on your computer:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>WAI-ARIA</li>
              </ul>
              <p className="text-gray-700 mb-4">
                These technologies are relied upon for conformance with the accessibility standards used.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Known Limitations</h2>
              <p className="text-gray-700 mb-4">
                Despite our best efforts, users may encounter some limitations. Known limitations include:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Some older PDF documents may not be fully accessible</li>
                <li>Third-party content may not meet accessibility standards</li>
                <li>Some interactive features may require JavaScript</li>
              </ul>
              <p className="text-gray-700 mb-4">
                We are actively working to address these limitations.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Assessment Approach</h2>
              <p className="text-gray-700 mb-4">
                Forgewise assessed the accessibility of this website by the following approaches:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Self-evaluation using automated tools</li>
                <li>Manual testing with keyboard navigation</li>
                <li>Testing with screen readers</li>
                <li>Color contrast analysis</li>
                <li>User testing with people with disabilities</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Feedback</h2>
              <p className="text-gray-700 mb-4">
                We welcome your feedback on the accessibility of Forgewise. Please let us know if you encounter accessibility barriers:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Email: admin@forgewise.io</li>
                <li>Location: Chicago, IL</li>
              </ul>
              <p className="text-gray-700 mb-4">
                We try to respond to accessibility feedback within 2 business days.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Alternative Formats</h2>
              <p className="text-gray-700 mb-4">
                If you need information from our website in an alternative format, please contact us and we will make every effort to provide it in a format that meets your needs.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Third-Party Content</h2>
              <p className="text-gray-700 mb-4">
                Our website may include third-party content or links to third-party websites. We cannot control or guarantee the accessibility of third-party content.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Enforcement Procedure</h2>
              <p className="text-gray-700 mb-4">
                If you wish to report an accessibility issue, have any questions, or need assistance, please contact us as described in the Feedback section above.
              </p>
            </section>
          </div>
          
          <div className="mt-12 pt-8 border-t">
            <Link href="/" className="text-indigo-600 hover:text-indigo-700">
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

