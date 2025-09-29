import Head from 'next/head'
import Link from 'next/link'
import Navbar from '../src/components/Navbar'
import NextFooter from '../src/components/NextFooter'
import { BookingLink } from '../src/components/ProtectedContact'
import { motion } from 'framer-motion'

export default function ElginEcommercePage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Forgewise - B2B eCommerce Consulting Elgin",
    "description": "Expert B2B eCommerce consultant in Elgin helping manufacturing and healthcare companies grow revenue 20-40% through Shopify, Magento, and digital transformation. Serving Elgin, Kane County, and northwest suburbs.",
    "url": "https://forgewise.io/ecommerce-consulting-elgin-il/",
    "telephone": "",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Elgin",
      "addressRegion": "IL",
      "addressCountry": "US"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Elgin",
        "containedInPlace": {
          "@type": "State",
          "name": "Illinois"
        }
      },
      {
        "@type": "Place",
        "name": "Kane County"
      },
      {
        "@type": "Place",
        "name": "South Elgin"
      },
      {
        "@type": "Place",
        "name": "Bartlett"
      },
      {
        "@type": "Place",
        "name": "Northwest Suburbs"
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
        <title>B2B eCommerce Consultant Elgin, IL | Shopify & Magento Expert | Forgewise</title>
        <meta name="description" content="Elgin's trusted B2B eCommerce consultant helping manufacturing and healthcare companies grow revenue 20-40%. Expert Shopify and Magento consulting, fractional CMO services for northwest suburbs." />
        <meta property="og:title" content="B2B eCommerce Consultant Elgin | Forgewise" />
        <meta property="og:description" content="Elgin B2B eCommerce consulting for manufacturing and healthcare companies. Proven revenue growth through Shopify, Magento, and strategic digital transformation." />
        <meta property="og:url" content="https://forgewise.io/ecommerce-consulting-elgin-il/" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://forgewise.io/ecommerce-consulting-elgin-il/" />
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
                B2B eCommerce Consultant in Elgin
              </h1>
              <p className="text-xl md:text-2xl mb-4 text-emerald-300">
                Helping Elgin manufacturing and healthcare companies grow revenue 20-40% through proven eCommerce strategies
              </p>
              <p className="text-lg mb-8 text-gray-300">
                From the Fox River industrial corridor to downtown Elgin, we partner with established manufacturers and healthcare providers to transform their digital commerce operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <BookingLink
                  type="discovery"
                  className="inline-block bg-emerald-600 text-white px-8 py-4 rounded-lg hover:bg-emerald-700 transition text-lg font-semibold text-center"
                >
                  Schedule Free Elgin Consultation
                </BookingLink>
                <Link href="/results/" className="inline-block bg-white text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-100 transition text-lg font-semibold text-center">
                  View Elgin Case Studies
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Local Expertise Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">
              Elgin B2B eCommerce Expertise
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-emerald-600">
                  Understanding Elgin's Manufacturing & Healthcare Base
                </h3>
                <p className="text-gray-700 mb-4">
                  Elgin's diverse manufacturing and healthcare ecosystem requires specialized eCommerce solutions. From precision manufacturers along the Fox River to healthcare facilities serving the northwest suburbs, we understand the unique B2B challenges facing Kane County's established industrial base.
                </p>
                <p className="text-gray-700">
                  Whether you're a medical device manufacturer serving hospitals nationwide or a precision parts company supplying automotive and aerospace industries, we deliver eCommerce consulting services tailored to Elgin's manufacturing heritage and healthcare innovation.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-emerald-600">
                  Local Industry Focus
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600">✓</span>
                    <span>Manufacturing companies along the Fox River corridor</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600">✓</span>
                    <span>Healthcare facilities and medical suppliers in Elgin</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600">✓</span>
                    <span>Precision manufacturers serving automotive industry</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600">✓</span>
                    <span>Industrial suppliers in South Elgin business district</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600">✓</span>
                    <span>Medical device companies in Bartlett corridor</span>
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
              eCommerce Consulting Services for Elgin Businesses
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-emerald-600">
                  Shopify Expert Elgin
                </h3>
                <p className="text-gray-700 mb-4">
                  As a certified Shopify consultant in Elgin, we help manufacturers and healthcare companies leverage Shopify Plus for B2B wholesale, medical device sales, and complex regulatory requirements.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Medical device B2B portals</li>
                  <li>• Manufacturing wholesale channels</li>
                  <li>• Healthcare compliance features</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-emerald-600">
                  Magento Consultant Elgin
                </h3>
                <p className="text-gray-700 mb-4">
                  Expert Magento consulting for complex manufacturing and healthcare B2B operations. We optimize Magento 2 for regulatory compliance and advanced product configurations.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• FDA compliance and tracking</li>
                  <li>• Complex manufacturing catalogs</li>
                  <li>• Healthcare pricing structures</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-emerald-600">
                  Fractional CMO Elgin
                </h3>
                <p className="text-gray-700 mb-4">
                  Fractional CMO services for Elgin's manufacturing and healthcare companies looking to modernize their digital presence and expand beyond traditional northwest suburbs markets.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Manufacturing marketing strategies</li>
                  <li>• Healthcare sector positioning</li>
                  <li>• Kane County market development</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Local Process Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">
              How We Help Elgin B2B Companies Grow
            </h2>
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-emerald-600 text-white rounded-lg flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Initial Elgin Consultation</h3>
                  <p className="text-gray-700">
                    We meet with you at your Elgin facility or virtually to understand your operation, whether you're manufacturing precision parts or providing healthcare solutions to the northwest suburbs.
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
                    We develop a customized eCommerce strategy accounting for manufacturing complexities, healthcare regulations, and growth goals for expanding beyond the traditional Kane County market.
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
                    Execute the strategy with focus on compliance requirements, manufacturing workflows, and leveraging Elgin's established industrial base and healthcare networks.
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
              Frequently Asked Questions - Elgin eCommerce Consulting
            </h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">
                  How much does eCommerce consulting cost in Elgin?
                </h3>
                <p className="text-gray-700">
                  Our Elgin B2B eCommerce consulting services typically range from $5,000-$15,000 per month depending on scope. We understand the unique needs of manufacturing and healthcare companies and offer flexible engagement models.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">
                  Do you work with manufacturing companies in Elgin?
                </h3>
                <p className="text-gray-700">
                  Yes, we specialize in working with manufacturers throughout Kane County and the northwest suburbs. We understand precision manufacturing, quality requirements, and the unique B2B needs of industrial companies.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">
                  What's the best eCommerce platform for Elgin healthcare companies?
                </h3>
                <p className="text-gray-700">
                  For healthcare companies in Elgin, we typically recommend Shopify Plus with HIPAA compliance features or Magento 2 Commerce for medical device companies requiring complex regulatory documentation and traceability.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">
                  Can you integrate with manufacturing ERP systems?
                </h3>
                <p className="text-gray-700">
                  Absolutely. We regularly integrate eCommerce platforms with manufacturing ERP systems, quality management systems, and production planning tools commonly used by Elgin's industrial companies.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-emerald-600 to-emerald-700 text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Transform Your Elgin B2B Business?
            </h2>
            <p className="text-xl mb-8">
              Join other successful Elgin manufacturers and healthcare companies who've grown revenue 20-40% with our eCommerce consulting.
            </p>
            <BookingLink
              type="discovery"
              className="inline-block bg-white text-emerald-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition text-lg font-semibold"
            >
              Schedule Your Free Elgin Consultation
            </BookingLink>
            <p className="mt-4 text-emerald-100">
              Serving Elgin, South Elgin, Bartlett, and all of Kane County
            </p>
          </div>
        </section>
      </main>

      <NextFooter />
    </>
  )
}