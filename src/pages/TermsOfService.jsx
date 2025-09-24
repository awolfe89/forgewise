import { useEffect } from 'react';
import Link from 'next/link';
import { FadeIn } from '../components/AnimatedComponents';

export default function TermsOfService() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <FadeIn>
      <div className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Terms of Service</h1>
            <p className="text-gray-600 mb-8">Effective Date: {new Date().toLocaleDateString()}</p>

            <div className="prose prose-lg max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">1. Agreement to Terms</h2>
                <p className="text-gray-700 mb-4">
                  By accessing and using Forgewise.io ("we," "our," or "the Company"), you agree to be 
                  bound by these Terms of Service. If you do not agree to these terms, please do not 
                  use our services.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">2. Services Provided</h2>
                <p className="text-gray-700 mb-4">
                  Forgewise.io provides strategic technology consulting services, including but not limited to:
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700">
                  <li>E-commerce optimization and development</li>
                  <li>Digital marketing strategy and implementation</li>
                  <li>Website performance optimization</li>
                  <li>Business process automation</li>
                  <li>Technical audits and assessments</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">3. Client Responsibilities</h2>
                <p className="text-gray-700 mb-4">As our client, you agree to:</p>
                <ul className="list-disc pl-6 mb-4 text-gray-700">
                  <li>Provide accurate and complete information necessary for service delivery</li>
                  <li>Grant necessary access to systems and platforms as required</li>
                  <li>Respond to requests for information in a timely manner</li>
                  <li>Make timely payments according to agreed terms</li>
                  <li>Comply with all applicable laws and regulations</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">4. Intellectual Property</h2>
                
                <h3 className="text-xl font-semibold mb-3">Our Intellectual Property</h3>
                <p className="text-gray-700 mb-4">
                  All content, methodologies, tools, and materials created by Forgewise.io remain our 
                  intellectual property unless explicitly transferred in writing.
                </p>

                <h3 className="text-xl font-semibold mb-3">Client Intellectual Property</h3>
                <p className="text-gray-700 mb-4">
                  You retain ownership of your pre-existing intellectual property. You grant us a 
                  limited license to use your materials solely for the purpose of providing services.
                </p>

                <h3 className="text-xl font-semibold mb-3">Work Product</h3>
                <p className="text-gray-700 mb-4">
                  Unless otherwise agreed in writing, all work product created specifically for you 
                  becomes your property upon full payment.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">5. Confidentiality</h2>
                <p className="text-gray-700 mb-4">
                  Both parties agree to maintain the confidentiality of any proprietary or sensitive 
                  information disclosed during the engagement. This obligation survives the termination 
                  of our services.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">6. Payment Terms</h2>
                <ul className="list-disc pl-6 mb-4 text-gray-700">
                  <li>Payment terms are specified in individual service agreements</li>
                  <li>Invoices are due within the timeframe specified on the invoice</li>
                  <li>Late payments may incur additional fees</li>
                  <li>We reserve the right to suspend services for overdue accounts</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">7. Warranties and Disclaimers</h2>
                
                <h3 className="text-xl font-semibold mb-3">Our Commitment</h3>
                <p className="text-gray-700 mb-4">
                  We warrant that our services will be performed in a professional and workmanlike 
                  manner consistent with industry standards.
                </p>

                <h3 className="text-xl font-semibold mb-3">Disclaimers</h3>
                <p className="text-gray-700 mb-4">
                  We do not guarantee specific results or outcomes. Success depends on various factors 
                  including your implementation of recommendations and market conditions.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">8. Limitation of Liability</h2>
                <p className="text-gray-700 mb-4">
                  Our liability for any claim arising from our services shall not exceed the total 
                  amount paid by you for the specific services giving rise to the claim. We are not 
                  liable for indirect, incidental, or consequential damages.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">9. Termination</h2>
                <p className="text-gray-700 mb-4">
                  Either party may terminate services according to the terms specified in the service 
                  agreement. Upon termination:
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700">
                  <li>All outstanding payments become immediately due</li>
                  <li>We will deliver any completed work product</li>
                  <li>Both parties will return or destroy confidential information</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">10. Dispute Resolution</h2>
                <p className="text-gray-700 mb-4">
                  Any disputes arising from these terms or our services will first be addressed through 
                  good faith negotiations. If unresolved, disputes will be settled through binding 
                  arbitration.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">11. Governing Law</h2>
                <p className="text-gray-700 mb-4">
                  These terms are governed by the laws of the jurisdiction in which Forgewise.io 
                  operates, without regard to conflict of law principles.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">12. Modifications</h2>
                <p className="text-gray-700 mb-4">
                  We reserve the right to modify these terms at any time. Changes will be effective 
                  upon posting to our website. Continued use of our services constitutes acceptance 
                  of modified terms.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">13. Contact Information</h2>
                <p className="text-gray-700 mb-4">
                  For questions about these terms or our services:
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
                  href="/privacy-policy" 
                  className="text-indigo-600 hover:text-indigo-800 font-medium"
                >
                  View Privacy Policy →
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