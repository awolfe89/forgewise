import Head from 'next/head'
import Link from 'next/link'
import Navbar from '../src/components/Navbar'
import NextFooter from '../src/components/NextFooter'
import { BookingLink } from '../src/components/ProtectedContact'
import { motion } from 'framer-motion'

export default function ChicagoEcommercePage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Forgewise - B2B eCommerce Consulting Chicago",
    "description": "Expert B2B eCommerce consultant in Chicago helping manufacturers and distributors grow revenue 20-40% through Shopify, Magento, and digital transformation. Serving Chicago Loop, River North, and greater Chicagoland.",
    "url": "https://forgewise.io/ecommerce-consulting-chicago-il/",
    "telephone": "",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Chicago",
      "addressRegion": "IL",
      "addressCountry": "US"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Chicago",
        "containedInPlace": {
          "@type": "State",
          "name": "Illinois"
        }
      },
      {
        "@type": "Place",
        "name": "Chicago Loop"
      },
      {
        "@type": "Place",
        "name": "River North"
      },
      {
        "@type": "Place",
        "name": "Lincoln Park"
      },
      {
        "@type": "Place",
        "name": "Chicagoland"
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
        <title>B2B eCommerce Consultant Chicago, IL | Shopify & Magento Expert | Forgewise</title>
        <meta name="description" content="Chicago's trusted B2B eCommerce consultant helping manufacturers grow revenue 20-40%. Expert Shopify and Magento consulting, fractional CMO services, and digital transformation for Chicago businesses." />
        <meta property="og:title" content="B2B eCommerce Consultant Chicago | Forgewise" />
        <meta property="og:description" content="Chicago B2B eCommerce consulting for manufacturers and distributors. Proven revenue growth through Shopify, Magento, and strategic digital transformation." />
        <meta property="og:url" content="https://forgewise.io/ecommerce-consulting-chicago-il/" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://forgewise.io/ecommerce-consulting-chicago-il/" />
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
                B2B eCommerce Consultant in Chicago
              </h1>
              <p className="text-xl md:text-2xl mb-4 text-emerald-300">
                Helping Chicago manufacturers and distributors grow revenue 20-40% through proven eCommerce strategies
              </p>
              <p className="text-lg mb-8 text-gray-300">
                From the Chicago Loop to O'Hare corridor, we partner with B2B companies across Chicagoland to transform their digital commerce operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <BookingLink
                  type="discovery"
                  className="inline-block bg-emerald-600 text-white px-8 py-4 rounded-lg hover:bg-emerald-700 transition text-lg font-semibold text-center"
                >
                  Schedule Free Chicago Consultation
                </BookingLink>
                <Link href="/results/" className="inline-block bg-white text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-100 transition text-lg font-semibold text-center">
                  View Chicago Case Studies
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Local Expertise Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">
              Chicago B2B eCommerce Expertise
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-emerald-600">
                  Understanding Chicago's B2B Market
                </h3>
                <p className="text-gray-700 mb-4">
                  Chicago's diverse manufacturing and distribution ecosystem requires specialized eCommerce solutions. From industrial suppliers in the West Loop to food distributors near the Merchandise Mart, we understand the unique challenges Chicago B2B companies face.
                </p>
                <p className="text-gray-700">
                  Whether you're a manufacturer in the Kinzie Industrial Corridor or a distributor serving the greater Chicagoland area from Naperville to Schaumburg, we deliver eCommerce consulting services tailored to Chicago's competitive B2B landscape.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-emerald-600">
                  Local Industry Focus
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600">✓</span>
                    <span>Manufacturing companies from Cicero to Franklin Park</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600">✓</span>
                    <span>Food & beverage distributors near Fulton Market</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600">✓</span>
                    <span>Industrial suppliers along the I-90/I-94 corridor</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600">✓</span>
                    <span>Medical device companies in the Chicago Technology Park</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600">✓</span>
                    <span>Building materials distributors serving Cook County</span>
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
              eCommerce Consulting Services for Chicago Businesses
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-emerald-600">
                  Shopify Expert Chicago
                </h3>
                <p className="text-gray-700 mb-4">
                  As a certified Shopify consultant in Chicago, we help B2B companies migrate to or optimize Shopify Plus for wholesale operations, custom pricing, and B2B portals.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Shopify B2B wholesale channels</li>
                  <li>• Custom Chicago-area shipping zones</li>
                  <li>• Integration with Midwest fulfillment centers</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-emerald-600">
                  Magento Consultant Chicago
                </h3>
                <p className="text-gray-700 mb-4">
                  Expert Magento consulting for complex B2B operations. We optimize Magento 2 installations for Chicago manufacturers needing advanced B2B features.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Custom catalog management</li>
                  <li>• Multi-warehouse inventory (Chicago area)</li>
                  <li>• B2B customer account hierarchies</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-emerald-600">
                  Fractional CMO Chicago
                </h3>
                <p className="text-gray-700 mb-4">
                  Fractional CMO services for Chicago B2B companies looking to scale their digital presence without the cost of a full-time executive.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Strategic planning & execution</li>
                  <li>• Marketing team leadership</li>
                  <li>• Chicago market penetration strategies</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Local Process Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">
              How We Help Chicago B2B Companies Grow
            </h2>
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-emerald-600 text-white rounded-lg flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Initial Chicago Consultation</h3>
                  <p className="text-gray-700">
                    We meet with you (in-person in Chicago or virtually) to understand your B2B operation, whether you're serving local Chicago businesses or shipping nationwide from your Chicago warehouse.
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
                    We develop a customized eCommerce strategy accounting for Chicago's competitive landscape, your industry specifics, and growth goals for the Midwest market.
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
                    Execute the strategy with focus on quick wins and long-term growth, optimizing for Chicago-area logistics, regional payment preferences, and local B2B buying patterns.
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
              Frequently Asked Questions - Chicago eCommerce Consulting
            </h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">
                  How much does eCommerce consulting cost in Chicago?
                </h3>
                <p className="text-gray-700">
                  Our Chicago B2B eCommerce consulting services typically range from $5,000-$15,000 per month depending on scope. We offer flexible engagement models including project-based, retainer, and fractional executive arrangements tailored to Chicago businesses.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">
                  Do you work with Chicago businesses exclusively?
                </h3>
                <p className="text-gray-700">
                  While we serve B2B companies nationwide, we have deep expertise in the Chicago market. We work with businesses throughout Chicagoland including suburbs like Evanston, Oak Park, Arlington Heights, and the entire Cook, DuPage, and Lake County areas.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">
                  What's the best eCommerce platform for Chicago B2B companies?
                </h3>
                <p className="text-gray-700">
                  For most Chicago B2B companies, we recommend Shopify Plus or Magento 2 depending on complexity. Shopify Plus works well for companies under $50M revenue, while Magento suits enterprises with complex B2B requirements common in Chicago's industrial sector.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">
                  Can you integrate with our Chicago-area warehouse systems?
                </h3>
                <p className="text-gray-700">
                  Yes, we regularly integrate eCommerce platforms with warehouse management systems used by Chicago distributors, including connections to fulfillment centers in Elk Grove Village, Bedford Park, and throughout the O'Hare submarket.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-emerald-600 to-emerald-700 text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Transform Your Chicago B2B Business?
            </h2>
            <p className="text-xl mb-8">
              Join other successful Chicago manufacturers and distributors who've grown revenue 20-40% with our eCommerce consulting.
            </p>
            <BookingLink
              type="discovery"
              className="inline-block bg-white text-emerald-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition text-lg font-semibold"
            >
              Schedule Your Free Chicago Consultation
            </BookingLink>
            <p className="mt-4 text-emerald-100">
              Serving all of Chicagoland from the Loop to the suburbs
            </p>
          </div>
        </section>
      </main>

      <NextFooter />
    </>
  )
}