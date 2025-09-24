import Link from 'next/link';
import NextSEO from '../src/components/NextSEO';

export default function TermsOfService() {
  return (
    <>
      <NextSEO 
        title="Terms of Service - Forgewise"
        description="Read Forgewise's terms of service and understand your rights and responsibilities."
      />
      
      <div className="min-h-screen pt-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
          <p className="text-sm text-gray-600 mb-8">Effective Date: January 15, 2024</p>
          
          <div className="prose prose-gray max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">1. Agreement to Terms</h2>
              <p className="text-gray-700 mb-4">
                By accessing or using Forgewise's services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">2. Services Description</h2>
              <p className="text-gray-700 mb-4">
                Forgewise provides digital transformation, optimization, and consulting services including but not limited to:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>E-commerce optimization</li>
                <li>Marketing automation</li>
                <li>Data analytics and insights</li>
                <li>Custom software development</li>
                <li>Strategic consulting</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">3. Client Responsibilities</h2>
              <p className="text-gray-700 mb-4">As a client, you agree to:</p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Provide accurate and complete information</li>
                <li>Maintain the confidentiality of account credentials</li>
                <li>Cooperate with reasonable requests for information</li>
                <li>Make timely payments as agreed</li>
                <li>Comply with all applicable laws and regulations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">4. Payment Terms</h2>
              <p className="text-gray-700 mb-4">
                Payment terms are as follows unless otherwise specified in writing:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>50% deposit required before project commencement</li>
                <li>Balance due upon project completion</li>
                <li>Monthly retainer clients billed on the 1st of each month</li>
                <li>Late payments subject to 1.5% monthly interest</li>
                <li>All fees are non-refundable unless otherwise stated</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">5. Intellectual Property</h2>
              <p className="text-gray-700 mb-4">
                Upon full payment, clients receive ownership of custom deliverables created specifically for them. Forgewise retains the right to:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Use general methodologies and know-how</li>
                <li>Display work in portfolio (unless under NDA)</li>
                <li>Retain ownership of pre-existing intellectual property</li>
                <li>Use anonymized data for research and improvement</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">6. Confidentiality</h2>
              <p className="text-gray-700 mb-4">
                Both parties agree to maintain the confidentiality of proprietary information shared during the engagement. This obligation survives termination of the agreement.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">7. Warranties and Disclaimers</h2>
              <p className="text-gray-700 mb-4">
                Forgewise provides services on an "as is" basis. While we strive for excellence, we cannot guarantee specific results. We disclaim all warranties, express or implied, including warranties of merchantability and fitness for a particular purpose.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">8. Limitation of Liability</h2>
              <p className="text-gray-700 mb-4">
                Forgewise's total liability for any claim arising from our services shall not exceed the amount paid by the client for the specific service giving rise to the claim. We are not liable for indirect, incidental, or consequential damages.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">9. Termination</h2>
              <p className="text-gray-700 mb-4">
                Either party may terminate services with 30 days written notice. Upon termination:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Client pays for all work completed to date</li>
                <li>Forgewise delivers all completed work</li>
                <li>Both parties return confidential materials</li>
                <li>Ongoing obligations (confidentiality, payment) survive</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">10. Governing Law</h2>
              <p className="text-gray-700 mb-4">
                These terms are governed by the laws of [Your State/Country], without regard to conflict of law principles. Any disputes shall be resolved through binding arbitration.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">11. Changes to Terms</h2>
              <p className="text-gray-700 mb-4">
                We reserve the right to modify these terms at any time. Changes become effective upon posting to our website. Continued use of our services constitutes acceptance of modified terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">12. Contact Information</h2>
              <p className="text-gray-700 mb-4">
                For questions about these Terms of Service, please contact us at:
              </p>
              <p className="text-gray-700">
                Email: admin@forgewise.io<br />
                Chicago, IL
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

