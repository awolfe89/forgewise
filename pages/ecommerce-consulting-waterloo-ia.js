import Head from 'next/head'
import Link from 'next/link'
import { BookingLink } from '../src/components/ProtectedContact'
import { motion } from 'framer-motion'

export default function WaterlooEcommercePage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Forgewise - B2B eCommerce Consulting Waterloo",
    "description": "Expert B2B eCommerce consultant in Waterloo helping agricultural equipment and John Deere heritage companies grow revenue 20-40% through Shopify, Magento, and digital transformation. Serving Waterloo, Black Hawk County, and Cedar Falls region.",
    "url": "https://forgewise.io/ecommerce-consulting-waterloo-ia/",
    "telephone": "",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Waterloo",
      "addressRegion": "IA",
      "addressCountry": "US"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Waterloo",
        "containedInPlace": {
          "@type": "State",
          "name": "Iowa"
        }
      },
      {
        "@type": "Place",
        "name": "Black Hawk County"
      },
      {
        "@type": "Place",
        "name": "Cedar Falls"
      },
      {
        "@type": "Place",
        "name": "Evansdale"
      },
      {
        "@type": "Place",
        "name": "Cedar Valley"
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
        <title>B2B eCommerce Consultant Waterloo, IA | Shopify & Magento Expert | Forgewise</title>
        <meta name="description" content="Waterloo's trusted B2B eCommerce consultant helping agricultural equipment and John Deere heritage companies grow revenue 20-40%. Expert Shopify and Magento consulting, fractional CMO services for Cedar Valley." />
        <meta property="og:title" content="B2B eCommerce Consultant Waterloo | Forgewise" />
        <meta property="og:description" content="Waterloo B2B eCommerce consulting for agricultural equipment and manufacturing companies. Proven revenue growth through Shopify, Magento, and strategic digital transformation." />
        <meta property="og:url" content="https://forgewise.io/ecommerce-consulting-waterloo-ia/" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://forgewise.io/ecommerce-consulting-waterloo-ia/" />
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
                B2B eCommerce Consultant in Waterloo
              </h1>
              <p className="text-xl md:text-2xl mb-4 text-emerald-300">
                Helping Waterloo agricultural equipment and John Deere heritage companies grow revenue 20-40% through proven eCommerce strategies
              </p>
              <p className="text-lg mb-8 text-gray-300">
                From the Cedar Valley to John Deere's historic roots, we partner with agricultural equipment companies to transform their digital commerce operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <BookingLink
                  type="discovery"
                  className="inline-block bg-emerald-600 text-white px-8 py-4 rounded-lg hover:bg-emerald-700 transition text-lg font-semibold text-center"
                >
                  Schedule Free Waterloo Consultation
                </BookingLink>
                <Link href="/results/" className="inline-block bg-white text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-100 transition text-lg font-semibold text-center">
                  View Waterloo Case Studies
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Local Expertise Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">
              Waterloo B2B eCommerce Expertise
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-emerald-600">
                  Understanding Waterloo's John Deere Heritage & Agricultural Equipment Legacy
                </h3>
                <p className="text-gray-700 mb-4">
                  Waterloo's deep agricultural equipment heritage, anchored by John Deere's historic presence, requires specialized eCommerce solutions. From agricultural equipment manufacturers to precision parts suppliers throughout the Cedar Valley, we understand the unique B2B challenges facing Black Hawk County's agricultural equipment ecosystem.
                </p>
                <p className="text-gray-700">
                  Whether you're manufacturing components for agricultural equipment or providing precision services to farming operations, we deliver eCommerce consulting services tailored to Waterloo's agricultural equipment expertise and John Deere heritage.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-emerald-600">
                  Local Industry Focus
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600">✓</span>
                    <span>Agricultural equipment manufacturers with John Deere heritage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600">✓</span>
                    <span>Precision parts suppliers in Cedar Falls corridor</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600">✓</span>
                    <span>Farm equipment dealers throughout Cedar Valley</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600">✓</span>
                    <span>Agricultural services companies in Evansdale</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600">✓</span>
                    <span>Manufacturing firms serving agricultural industry</span>
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
              eCommerce Consulting Services for Waterloo Businesses
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-emerald-600">
                  Shopify Expert Waterloo
                </h3>
                <p className="text-gray-700 mb-4">
                  As a certified Shopify consultant in Waterloo, we help agricultural equipment companies leverage Shopify Plus for parts catalogs, dealer networks, and precision agriculture solutions.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Agricultural equipment parts catalogs</li>
                  <li>• Dealer network B2B portals</li>
                  <li>• Precision agriculture solutions</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-emerald-600">
                  Magento Consultant Waterloo
                </h3>
                <p className="text-gray-700 mb-4">
                  Expert Magento consulting for complex agricultural equipment B2B operations. We optimize Magento 2 for technical specifications, parts management, and dealer relationships.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Complex equipment specifications</li>
                  <li>• Parts compatibility systems</li>
                  <li>• Dealer pricing structures</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-emerald-600">
                  Fractional CMO Waterloo
                </h3>
                <p className="text-gray-700 mb-4">
                  Fractional CMO services for Waterloo's agricultural equipment companies looking to expand beyond traditional farming markets into precision agriculture and technology sectors.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Agricultural equipment marketing</li>
                  <li>• Precision agriculture positioning</li>
                  <li>• Cedar Valley market strategies</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Local Process Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">
              How We Help Waterloo B2B Companies Grow
            </h2>
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-emerald-600 text-white rounded-lg flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Initial Waterloo Consultation</h3>
                  <p className="text-gray-700">
                    We meet with you at your Waterloo facility or virtually to understand your operation, whether you're manufacturing agricultural equipment or providing precision services to farming operations.
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
                    We develop a customized eCommerce strategy accounting for agricultural equipment complexities, dealer relationships, and growth goals for expanding beyond traditional Cedar Valley markets.
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
                    Execute the strategy with focus on parts management, dealer networks, and leveraging Waterloo's John Deere heritage and agricultural equipment expertise.
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
              Frequently Asked Questions - Waterloo eCommerce Consulting
            </h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">
                  How much does eCommerce consulting cost in Waterloo?
                </h3>
                <p className="text-gray-700">
                  Our Waterloo B2B eCommerce consulting services typically range from $5,000-$15,000 per month depending on scope. We understand the unique needs of agricultural equipment companies and offer flexible engagement models.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">
                  Do you work with agricultural equipment companies in Waterloo?
                </h3>
                <p className="text-gray-700">
                  Yes, we specialize in working with agricultural equipment manufacturers, parts suppliers, and dealers throughout the Cedar Valley region. We understand the John Deere heritage, equipment specifications, and agricultural industry requirements.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">
                  What's the best eCommerce platform for Waterloo agricultural equipment companies?
                </h3>
                <p className="text-gray-700">
                  For Waterloo agricultural equipment companies, we typically recommend Magento 2 Commerce for complex parts catalogs and dealer relationships or Shopify Plus for companies with simpler agricultural equipment needs.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">
                  Can you integrate with agricultural equipment management systems?
                </h3>
                <p className="text-gray-700">
                  Absolutely. We regularly integrate eCommerce platforms with agricultural equipment management systems, parts databases, and dealer network platforms commonly used by Waterloo's agricultural equipment companies.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-emerald-600 to-emerald-700 text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Transform Your Waterloo B2B Business?
            </h2>
            <p className="text-xl mb-8">
              Join other successful Waterloo agricultural equipment companies who've grown revenue 20-40% with our eCommerce consulting.
            </p>
            <BookingLink
              type="discovery"
              className="inline-block bg-white text-emerald-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition text-lg font-semibold"
            >
              Schedule Your Free Waterloo Consultation
            </BookingLink>
            <p className="mt-4 text-emerald-100">
              Serving Waterloo, Cedar Falls, Evansdale, and all of Black Hawk County
            </p>
          </div>
        </section>
      </main>

    </>
  )
}