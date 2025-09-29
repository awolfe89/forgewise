import Head from 'next/head'
import Link from 'next/link'
import Navbar from '../src/components/Navbar'
import NextFooter from '../src/components/NextFooter'
import { BookingLink } from '../src/components/ProtectedContact'
import { motion } from 'framer-motion'

export default function CedarRapidsEcommercePage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Forgewise - B2B eCommerce Consulting Cedar Rapids",
    "description": "Expert B2B eCommerce consultant in Cedar Rapids helping food processing, manufacturing, and grain companies grow revenue 20-40% through Shopify, Magento, and digital transformation. Serving Cedar Rapids, Linn County, and eastern Iowa.",
    "url": "https://forgewise.io/ecommerce-consulting-cedar-rapids-ia/",
    "telephone": "",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Cedar Rapids",
      "addressRegion": "IA",
      "addressCountry": "US"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Cedar Rapids",
        "containedInPlace": {
          "@type": "State",
          "name": "Iowa"
        }
      },
      {
        "@type": "Place",
        "name": "Linn County"
      },
      {
        "@type": "Place",
        "name": "Marion"
      },
      {
        "@type": "Place",
        "name": "Hiawatha"
      },
      {
        "@type": "Place",
        "name": "Cedar River Valley"
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
        <title>B2B eCommerce Consultant Cedar Rapids, IA | Shopify & Magento Expert | Forgewise</title>
        <meta name="description" content="Cedar Rapids' trusted B2B eCommerce consultant helping food processing and manufacturing companies grow revenue 20-40%. Expert Shopify and Magento consulting, fractional CMO services for eastern Iowa." />
        <meta property="og:title" content="B2B eCommerce Consultant Cedar Rapids | Forgewise" />
        <meta property="og:description" content="Cedar Rapids B2B eCommerce consulting for food processing and manufacturing companies. Proven revenue growth through Shopify, Magento, and strategic digital transformation." />
        <meta property="og:url" content="https://forgewise.io/ecommerce-consulting-cedar-rapids-ia/" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://forgewise.io/ecommerce-consulting-cedar-rapids-ia/" />
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
                B2B eCommerce Consultant in Cedar Rapids
              </h1>
              <p className="text-xl md:text-2xl mb-4 text-emerald-300">
                Helping Cedar Rapids food processing and manufacturing companies grow revenue 20-40% through proven eCommerce strategies
              </p>
              <p className="text-lg mb-8 text-gray-300">
                From the Cedar River Valley to I-380 corridor, we partner with agricultural processors and manufacturers to transform their digital commerce operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <BookingLink
                  type="discovery"
                  className="inline-block bg-emerald-600 text-white px-8 py-4 rounded-lg hover:bg-emerald-700 transition text-lg font-semibold text-center"
                >
                  Schedule Free Cedar Rapids Consultation
                </BookingLink>
                <Link href="/results/" className="inline-block bg-white text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-100 transition text-lg font-semibold text-center">
                  View Cedar Rapids Case Studies
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Local Expertise Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">
              Cedar Rapids B2B eCommerce Expertise
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-emerald-600">
                  Understanding Cedar Rapids' Agricultural & Manufacturing Base
                </h3>
                <p className="text-gray-700 mb-4">
                  Cedar Rapids' strong food processing and grain industry, combined with diversified manufacturing, requires specialized eCommerce solutions. From agricultural processors along the Cedar River to technology companies in the I-380 corridor, we understand the unique B2B challenges facing Linn County's diverse economy.
                </p>
                <p className="text-gray-700">
                  Whether you're processing grain for food manufacturers or producing equipment for agricultural markets, we deliver eCommerce consulting services tailored to Cedar Rapids' agricultural heritage and growing technology sector.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-emerald-600">
                  Local Industry Focus
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600">✓</span>
                    <span>Food processing companies along Cedar River corridor</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600">✓</span>
                    <span>Grain processing and agricultural suppliers in Marion</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600">✓</span>
                    <span>Manufacturing companies in Hiawatha business district</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600">✓</span>
                    <span>Technology firms serving agricultural markets</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600">✓</span>
                    <span>Industrial suppliers serving Iowa and Midwest</span>
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
              eCommerce Consulting Services for Cedar Rapids Businesses
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-emerald-600">
                  Shopify Expert Cedar Rapids
                </h3>
                <p className="text-gray-700 mb-4">
                  As a certified Shopify consultant in Cedar Rapids, we help food processors and manufacturers leverage Shopify Plus for agricultural products, bulk orders, and B2B wholesale operations.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Agricultural products B2B portals</li>
                  <li>• Food processing supply chains</li>
                  <li>• Grain and commodity pricing</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-emerald-600">
                  Magento Consultant Cedar Rapids
                </h3>
                <p className="text-gray-700 mb-4">
                  Expert Magento consulting for complex food processing and agricultural B2B operations. We optimize Magento 2 for compliance requirements and agricultural product catalogs.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Food safety compliance tracking</li>
                  <li>• Complex agricultural catalogs</li>
                  <li>• Multi-tier agricultural pricing</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-emerald-600">
                  Fractional CMO Cedar Rapids
                </h3>
                <p className="text-gray-700 mb-4">
                  Fractional CMO services for Cedar Rapids' food processing and manufacturing companies looking to expand beyond traditional agricultural markets into value-added segments.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Agricultural marketing strategies</li>
                  <li>• Food industry positioning</li>
                  <li>• Eastern Iowa market development</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Local Process Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">
              How We Help Cedar Rapids B2B Companies Grow
            </h2>
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-emerald-600 text-white rounded-lg flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Initial Cedar Rapids Consultation</h3>
                  <p className="text-gray-700">
                    We meet with you at your Cedar Rapids facility or virtually to understand your operation, whether you're processing agricultural products or manufacturing equipment for farm and food industries.
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
                    We develop a customized eCommerce strategy accounting for agricultural complexities, food safety regulations, and growth goals for expanding beyond traditional Midwest markets.
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
                    Execute the strategy with focus on agricultural workflows, compliance tracking, and leveraging Cedar Rapids' position as a major food processing center.
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
              Frequently Asked Questions - Cedar Rapids eCommerce Consulting
            </h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">
                  How much does eCommerce consulting cost in Cedar Rapids?
                </h3>
                <p className="text-gray-700">
                  Our Cedar Rapids B2B eCommerce consulting services typically range from $5,000-$15,000 per month depending on scope. We understand the unique needs of food processing and agricultural companies and offer flexible engagement models.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">
                  Do you work with food processing companies in Cedar Rapids?
                </h3>
                <p className="text-gray-700">
                  Yes, we specialize in working with food processing, grain handling, and agricultural companies throughout eastern Iowa. We understand food safety regulations, agricultural supply chains, and commodity market requirements.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">
                  What's the best eCommerce platform for Cedar Rapids food processors?
                </h3>
                <p className="text-gray-700">
                  For Cedar Rapids food processors, we typically recommend Magento 2 Commerce for complex regulatory and traceability requirements or Shopify Plus for agricultural suppliers with simpler B2B needs.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">
                  Can you integrate with agricultural commodity systems?
                </h3>
                <p className="text-gray-700">
                  Absolutely. We regularly integrate eCommerce platforms with commodity pricing systems, grain management platforms, and agricultural ERP systems commonly used by Cedar Rapids' food processing companies.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-emerald-600 to-emerald-700 text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Transform Your Cedar Rapids B2B Business?
            </h2>
            <p className="text-xl mb-8">
              Join other successful Cedar Rapids food processors who've grown revenue 20-40% with our eCommerce consulting.
            </p>
            <BookingLink
              type="discovery"
              className="inline-block bg-white text-emerald-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition text-lg font-semibold"
            >
              Schedule Your Free Cedar Rapids Consultation
            </BookingLink>
            <p className="mt-4 text-emerald-100">
              Serving Cedar Rapids, Marion, Hiawatha, and all of Linn County
            </p>
          </div>
        </section>
      </main>

      <NextFooter />
    </>
  )
}