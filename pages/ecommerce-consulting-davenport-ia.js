import Head from 'next/head'
import Link from 'next/link'
import { BookingLink } from '../src/components/ProtectedContact'
import { motion } from 'framer-motion'

export default function DavenportEcommercePage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Forgewise - B2B eCommerce Consulting Davenport",
    "description": "Expert B2B eCommerce consultant in Davenport helping Quad Cities manufacturing and John Deere-connected companies grow revenue 20-40% through Shopify, Magento, and digital transformation. Serving Davenport, Scott County, and Quad Cities region.",
    "url": "https://forgewise.io/ecommerce-consulting-davenport-ia/",
    "telephone": "",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Davenport",
      "addressRegion": "IA",
      "addressCountry": "US"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Davenport",
        "containedInPlace": {
          "@type": "State",
          "name": "Iowa"
        }
      },
      {
        "@type": "Place",
        "name": "Scott County"
      },
      {
        "@type": "Place",
        "name": "Quad Cities"
      },
      {
        "@type": "Place",
        "name": "Bettendorf"
      },
      {
        "@type": "Place",
        "name": "Mississippi River Valley"
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
        <title>B2B eCommerce Consultant Davenport, IA | Shopify & Magento Expert | Forgewise</title>
        <meta name="description" content="Davenport's trusted B2B eCommerce consultant helping Quad Cities manufacturing and agricultural equipment companies grow revenue 20-40%. Expert Shopify and Magento consulting, fractional CMO services." />
        <meta property="og:title" content="B2B eCommerce Consultant Davenport | Forgewise" />
        <meta property="og:description" content="Davenport B2B eCommerce consulting for Quad Cities manufacturing and agricultural equipment companies. Proven revenue growth through Shopify, Magento, and strategic digital transformation." />
        <meta property="og:url" content="https://forgewise.io/ecommerce-consulting-davenport-ia/" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://forgewise.io/ecommerce-consulting-davenport-ia/" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </Head>


      <main className="min-h-screen bg-gray-50 pt-20">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                B2B eCommerce Consultant in Davenport
              </h1>
              <p className="text-xl md:text-2xl mb-4 text-emerald-300">
                Helping Davenport Quad Cities manufacturing and agricultural equipment companies grow revenue 20-40% through proven eCommerce strategies
              </p>
              <p className="text-lg mb-8 text-gray-300">
                From the Mississippi River Valley to John Deere connections, we partner with established manufacturers to transform their digital commerce operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <BookingLink
                  type="discovery"
                  className="inline-block bg-emerald-600 text-white px-8 py-4 rounded-lg hover:bg-emerald-700 transition text-lg font-semibold text-center"
                >
                  Schedule Free Davenport Consultation
                </BookingLink>
                <Link href="/results/" className="inline-block bg-white text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-100 transition text-lg font-semibold text-center">
                  View Davenport Case Studies
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Local Expertise Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">
              Davenport B2B eCommerce Expertise
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-emerald-600">
                  Understanding Davenport's Quad Cities Manufacturing Hub
                </h3>
                <p className="text-gray-700 mb-4">
                  Davenport's position as a major Quad Cities manufacturing center, with strong connections to John Deere and agricultural equipment, requires specialized eCommerce solutions. From agricultural equipment suppliers to Mississippi River logistics companies, we understand the unique B2B challenges facing Scott County's diverse industrial ecosystem.
                </p>
                <p className="text-gray-700">
                  Whether you're a precision parts manufacturer serving John Deere or a logistics company leveraging the Mississippi River corridor, we deliver eCommerce consulting services tailored to the Quad Cities' manufacturing strength and agricultural heritage.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-emerald-600">
                  Local Industry Focus
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600">✓</span>
                    <span>Agricultural equipment suppliers with John Deere connections</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600">✓</span>
                    <span>Manufacturing companies in Bettendorf industrial corridor</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600">✓</span>
                    <span>Mississippi River logistics and transportation firms</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600">✓</span>
                    <span>Precision manufacturers serving agricultural industry</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600">✓</span>
                    <span>Industrial suppliers throughout Quad Cities region</span>
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
              eCommerce Consulting Services for Davenport Businesses
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-emerald-600">
                  Shopify Expert Davenport
                </h3>
                <p className="text-gray-700 mb-4">
                  As a certified Shopify consultant in Davenport, we help agricultural equipment and manufacturing companies leverage Shopify Plus for parts catalogs, wholesale operations, and dealer networks.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Agricultural parts B2B catalogs</li>
                  <li>• Dealer network portals</li>
                  <li>• Manufacturing wholesale channels</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-emerald-600">
                  Magento Consultant Davenport
                </h3>
                <p className="text-gray-700 mb-4">
                  Expert Magento consulting for complex manufacturing and agricultural equipment B2B operations. We optimize Magento 2 for parts management and dealer relationships.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Complex parts catalogs</li>
                  <li>• Dealer pricing structures</li>
                  <li>• Agricultural equipment integration</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-emerald-600">
                  Fractional CMO Davenport
                </h3>
                <p className="text-gray-700 mb-4">
                  Fractional CMO services for Davenport's manufacturing companies looking to expand beyond traditional Quad Cities markets and leverage agricultural industry connections.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Agricultural industry marketing</li>
                  <li>• Quad Cities market strategies</li>
                  <li>• Manufacturing sector positioning</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Local Process Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">
              How We Help Davenport B2B Companies Grow
            </h2>
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-emerald-600 text-white rounded-lg flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Initial Davenport Consultation</h3>
                  <p className="text-gray-700">
                    We meet with you at your Davenport facility or virtually to understand your operation, whether you're manufacturing agricultural equipment parts or providing services to the broader Quad Cities industrial base.
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
                    We develop a customized eCommerce strategy accounting for agricultural industry requirements, dealer relationships, and growth goals for expanding beyond the traditional Quad Cities market.
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
                    Execute the strategy with focus on dealer networks, parts management, and leveraging Davenport's strategic position in the Mississippi River Valley and Quad Cities region.
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
              Frequently Asked Questions - Davenport eCommerce Consulting
            </h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">
                  How much does eCommerce consulting cost in Davenport?
                </h3>
                <p className="text-gray-700">
                  Our Davenport B2B eCommerce consulting services typically range from $5,000-$15,000 per month depending on scope. We understand the unique needs of Quad Cities manufacturing and agricultural equipment companies and offer flexible engagement models.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">
                  Do you work with agricultural equipment companies in Davenport?
                </h3>
                <p className="text-gray-700">
                  Yes, we specialize in working with agricultural equipment manufacturers, parts suppliers, and related companies throughout the Quad Cities region. We understand dealer networks, parts catalogs, and agricultural industry requirements.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">
                  What's the best eCommerce platform for Davenport manufacturers?
                </h3>
                <p className="text-gray-700">
                  For Davenport manufacturers, we typically recommend Magento 2 Commerce for complex parts catalogs and dealer relationships or Shopify Plus for companies with simpler agricultural equipment needs.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">
                  Can you integrate with agricultural equipment systems?
                </h3>
                <p className="text-gray-700">
                  Absolutely. We regularly integrate eCommerce platforms with agricultural equipment management systems, parts databases, and dealer network platforms commonly used by Davenport's agricultural equipment companies.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-emerald-600 to-emerald-700 text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Transform Your Davenport B2B Business?
            </h2>
            <p className="text-xl mb-8">
              Join other successful Davenport manufacturers who've grown revenue 20-40% with our eCommerce consulting.
            </p>
            <BookingLink
              type="discovery"
              className="inline-block bg-white text-emerald-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition text-lg font-semibold"
            >
              Schedule Your Free Davenport Consultation
            </BookingLink>
            <p className="mt-4 text-emerald-100">
              Serving Davenport, Bettendorf, and all of the Quad Cities region
            </p>
          </div>
        </section>
      </main>

    </>
  )
}