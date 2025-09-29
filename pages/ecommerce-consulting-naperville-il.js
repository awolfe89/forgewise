import Head from 'next/head'
import Link from 'next/link'
import Navbar from '../src/components/Navbar'
import NextFooter from '../src/components/NextFooter'
import { BookingLink } from '../src/components/ProtectedContact'
import { motion } from 'framer-motion'

export default function NapervilleEcommercePage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Forgewise - B2B eCommerce Consulting Naperville",
    "description": "Expert B2B eCommerce consultant in Naperville helping healthcare and tech companies grow revenue 20-40% through Shopify, Magento, and digital transformation. Serving Naperville, DuPage County, and western suburbs.",
    "url": "https://forgewise.io/ecommerce-consulting-naperville-il/",
    "telephone": "",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Naperville",
      "addressRegion": "IL",
      "addressCountry": "US"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Naperville",
        "containedInPlace": {
          "@type": "State",
          "name": "Illinois"
        }
      },
      {
        "@type": "Place",
        "name": "DuPage County"
      },
      {
        "@type": "Place",
        "name": "Warrenville"
      },
      {
        "@type": "Place",
        "name": "Lisle"
      },
      {
        "@type": "Place",
        "name": "Western Suburbs"
      }
    ],
    "priceRange": "$$",
    "openingHours": "Mo-Fr 09:00-17:00",
    "image": "https://forgewise.io/forgewise_logo_1.png",
    "sameAs": []
  }

  return (
    <>
      <Head>
        <title>B2B eCommerce Consultant Naperville, IL | Shopify & Magento Expert | Forgewise</title>
        <meta name="description" content="Naperville's trusted B2B eCommerce consultant helping healthcare and tech companies grow revenue 20-40%. Expert Shopify and Magento consulting, fractional CMO services for DuPage County businesses." />
        <meta property="og:title" content="B2B eCommerce Consultant Naperville | Forgewise" />
        <meta property="og:description" content="Naperville B2B eCommerce consulting for healthcare and technology companies. Proven revenue growth through Shopify, Magento, and strategic digital transformation." />
        <meta property="og:url" content="https://forgewise.io/ecommerce-consulting-naperville-il/" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://forgewise.io/ecommerce-consulting-naperville-il/" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </Head>

      <Navbar />

      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                B2B eCommerce Consultant in Naperville
              </h1>
              <p className="text-xl md:text-2xl mb-4 text-emerald-300">
                Helping Naperville healthcare and tech companies grow revenue 20-40% through proven eCommerce strategies
              </p>
              <p className="text-lg mb-8 text-gray-300">
                From the Naperville Technology Park to downtown Naperville, we partner with innovative B2B companies to transform their digital commerce operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <BookingLink
                  type="discovery"
                  className="inline-block bg-emerald-600 text-white px-8 py-4 rounded-lg hover:bg-emerald-700 transition text-lg font-semibold text-center"
                >
                  Schedule Free Naperville Consultation
                </BookingLink>
                <Link href="/results/" className="inline-block bg-white text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-100 transition text-lg font-semibold text-center">
                  View Naperville Case Studies
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Local Expertise Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">
              Naperville B2B eCommerce Expertise
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-emerald-600">
                  Understanding Naperville's Innovation Economy
                </h3>
                <p className="text-gray-700 mb-4">
                  Naperville's thriving technology and healthcare sector requires sophisticated eCommerce solutions. From medical device manufacturers in the Naperville Technology Park to software companies downtown, we understand the unique B2B challenges facing DuPage County's most innovative businesses.
                </p>
                <p className="text-gray-700">
                  Whether you're a healthcare supplier serving hospitals across the Midwest or a tech company selling to enterprises nationwide, we deliver eCommerce consulting services tailored to Naperville's high-growth business environment.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-emerald-600">
                  Local Industry Focus
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600">✓</span>
                    <span>Healthcare technology companies in Warrenville corridor</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600">✓</span>
                    <span>Medical device manufacturers along Route 59</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600">✓</span>
                    <span>Software and IT companies in downtown Naperville</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600">✓</span>
                    <span>Pharmaceutical distributors serving the western suburbs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600">✓</span>
                    <span>Engineering firms and technical manufacturers in Lisle</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">
              eCommerce Consulting Services for Naperville Businesses
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-emerald-600">
                  Shopify Expert Naperville
                </h3>
                <p className="text-gray-700 mb-4">
                  As a certified Shopify consultant in Naperville, we help healthcare and tech companies leverage Shopify Plus for complex B2B operations, regulatory compliance, and custom integrations.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• HIPAA-compliant eCommerce solutions</li>
                  <li>• Custom pricing for healthcare buyers</li>
                  <li>• Integration with medical device systems</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-emerald-600">
                  Magento Consultant Naperville
                </h3>
                <p className="text-gray-700 mb-4">
                  Expert Magento consulting for complex healthcare and technology B2B operations. We optimize Magento 2 for regulatory compliance and advanced product catalogs.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• FDA compliance and documentation</li>
                  <li>• Complex product configurations</li>
                  <li>• Multi-tier pricing structures</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-emerald-600">
                  Fractional CMO Naperville
                </h3>
                <p className="text-gray-700 mb-4">
                  Fractional CMO services for Naperville's growing healthcare and tech companies looking to scale their digital presence with experienced marketing leadership.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Healthcare marketing compliance</li>
                  <li>• Technology sector positioning</li>
                  <li>• DuPage County market strategies</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Local Process Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">
              How We Help Naperville B2B Companies Grow
            </h2>
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-emerald-600 text-white rounded-lg flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Initial Naperville Consultation</h3>
                  <p className="text-gray-700">
                    We meet with you at your Naperville office or virtually to understand your B2B operation, whether you're serving healthcare networks regionally or selling technology solutions nationwide.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-emerald-600 text-white rounded-lg flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">eCommerce Strategy Development</h3>
                  <p className="text-gray-700">
                    We develop a customized eCommerce strategy accounting for healthcare regulations, technology sector requirements, and growth goals for expanding beyond the DuPage County market.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-emerald-600 text-white rounded-lg flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Implementation & Optimization</h3>
                  <p className="text-gray-700">
                    Execute the strategy with focus on compliance requirements, technical integrations, and scaling for Naperville's innovation-driven business environment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">
              Frequently Asked Questions - Naperville eCommerce Consulting
            </h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">
                  How much does eCommerce consulting cost in Naperville?
                </h3>
                <p className="text-gray-700">
                  Our Naperville B2B eCommerce consulting services typically range from $5,000-$15,000 per month depending on scope. We understand the high-growth nature of Naperville's tech and healthcare sectors and offer flexible engagement models.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">
                  Do you work with healthcare companies in Naperville?
                </h3>
                <p className="text-gray-700">
                  Yes, we have extensive experience with healthcare and medical device companies throughout DuPage County. We understand HIPAA compliance, FDA regulations, and the unique B2B requirements of healthcare commerce.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">
                  What's the best eCommerce platform for Naperville healthcare companies?
                </h3>
                <p className="text-gray-700">
                  For healthcare companies in Naperville, we typically recommend Shopify Plus with healthcare compliance apps or Magento 2 Commerce for enterprises requiring advanced regulatory features and complex product catalogs.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">
                  Can you integrate with medical device management systems?
                </h3>
                <p className="text-gray-700">
                  Absolutely. We regularly integrate eCommerce platforms with medical device tracking, inventory management, and healthcare ERP systems commonly used by Naperville's medical technology companies.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-emerald-600 to-emerald-700 text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Transform Your Naperville B2B Business?
            </h2>
            <p className="text-xl mb-8">
              Join other successful Naperville healthcare and tech companies who've grown revenue 20-40% with our eCommerce consulting.
            </p>
            <BookingLink
              type="discovery"
              className="inline-block bg-white text-emerald-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition text-lg font-semibold"
            >
              Schedule Your Free Naperville Consultation
            </BookingLink>
            <p className="mt-4 text-emerald-100">
              Serving Naperville, Warrenville, Lisle, and all of DuPage County
            </p>
          </div>
        </section>
      </main>

      <NextFooter />
    </>
  )
}