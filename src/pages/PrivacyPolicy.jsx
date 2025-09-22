import { useEffect } from 'react';
import Link from 'next/link';
import { FadeIn } from '../components/AnimatedComponents';

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <FadeIn>
      <div className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Privacy Policy</h1>
            <p className="text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

            <div className="prose prose-lg max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Our Commitment to Your Privacy</h2>
                <p className="text-gray-700 mb-4">
                  At Forgewise.io, we take your privacy seriously. This policy outlines how we collect, 
                  use, and protect your information when you use our website and services.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
                
                <h3 className="text-xl font-semibold mb-3">Information You Provide</h3>
                <ul className="list-disc pl-6 mb-4 text-gray-700">
                  <li>Contact information (name, email, phone) when you reach out to us</li>
                  <li>Business information you share during consultations</li>
                  <li>Project requirements and specifications</li>
                  <li>Feedback and testimonials you provide</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3">Information Collected Automatically</h3>
                <ul className="list-disc pl-6 mb-4 text-gray-700">
                  <li>Website usage data via analytics tools</li>
                  <li>IP addresses and browser information</li>
                  <li>Device and operating system information</li>
                  <li>Pages visited and time spent on site</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
                <p className="text-gray-700 mb-4">We use collected information to:</p>
                <ul className="list-disc pl-6 mb-4 text-gray-700">
                  <li>Provide and improve our consulting services</li>
                  <li>Respond to your inquiries and requests</li>
                  <li>Send relevant updates about your projects</li>
                  <li>Analyze website performance and user experience</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Data Protection</h2>
                <p className="text-gray-700 mb-4">
                  We implement appropriate technical and organizational measures to protect your data:
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700">
                  <li>SSL encryption for all data transmission</li>
                  <li>Secure hosting with regular security updates</li>
                  <li>Limited access to personal information</li>
                  <li>Regular security audits and improvements</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Third-Party Services</h2>
                <p className="text-gray-700 mb-4">
                  We may use third-party services for:
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700">
                  <li>Website analytics (Google Analytics)</li>
                  <li>Email communications</li>
                  <li>Payment processing (when applicable)</li>
                  <li>Cloud storage and hosting</li>
                </ul>
                <p className="text-gray-700 mb-4">
                  These services have their own privacy policies and data handling practices.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Your Rights</h2>
                <p className="text-gray-700 mb-4">You have the right to:</p>
                <ul className="list-disc pl-6 mb-4 text-gray-700">
                  <li>Access your personal information</li>
                  <li>Request corrections to your data</li>
                  <li>Request deletion of your data</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Request data portability</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Cookies</h2>
                <p className="text-gray-700 mb-4">
                  We use cookies to enhance your browsing experience. You can control cookie settings 
                  through your browser preferences. Essential cookies are required for site functionality.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Updates to This Policy</h2>
                <p className="text-gray-700 mb-4">
                  We may update this privacy policy periodically. Significant changes will be 
                  communicated through our website or via email for active clients.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                <p className="text-gray-700 mb-4">
                  For privacy-related questions or to exercise your rights, please contact us:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700">
                    Email: admin@forgewise.io<br />
                    Or use our <Link href="/contact" className="text-indigo-600 hover:text-indigo-800">contact form</Link>
                  </p>
                </div>
              </section>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                <Link 
                  href="/terms-of-service" 
                  className="text-indigo-600 hover:text-indigo-800 font-medium"
                >
                  View Terms of Service →
                </Link>
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