import Head from 'next/head'
import Link from 'next/link'
import { BookingLink } from '../src/components/ProtectedContact'
import { motion } from 'framer-motion'

export default function GreenBayEcommercePage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Forgewise - B2B eCommerce Consulting Green Bay",
    "description": "Expert B2B eCommerce consultant in Green Bay helping paper, packaging, and food processing companies grow revenue 20-40% through Shopify, Magento, and digital transformation. Serving Green Bay, Brown County, and northeast Wisconsin.",
    "url": "https://forgewise.io/ecommerce-consulting-green-bay-wi/",
    "telephone": "",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Green Bay",
      "addressRegion": "WI",
      "addressCountry": "US"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Green Bay",
        "containedInPlace": {
          "@type": "State",
          "name": "Wisconsin"
        }
      },
      {
        "@type": "Place",
        "name": "Brown County"
      },
      {
        "@type": "Place",
        "name": "De Pere"
      },
      {
        "@type": "Place",
        "name": "Ashwaubenon"
      },
      {
        "@type": "Place",
        "name": "Fox River Valley"
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
        <title>B2B eCommerce Consultant Green Bay, WI | Shopify & Magento Expert | Forgewise</title>
        <meta name="description" content="Green Bay's trusted B2B eCommerce consultant helping paper, packaging, and food processing companies grow revenue 20-40%. Expert Shopify and Magento consulting, fractional CMO services for northeast Wisconsin." />
        <meta property="og:title" content="B2B eCommerce Consultant Green Bay | Forgewise" />
        <meta property="og:description" content="Green Bay B2B eCommerce consulting for paper and food processing companies. Proven revenue growth through Shopify, Magento, and strategic digital transformation." />
        <meta property="og:url" content="https://forgewise.io/ecommerce-consulting-green-bay-wi/" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://forgewise.io/ecommerce-consulting-green-bay-wi/" />
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
                B2B eCommerce Consultant in Green Bay
              </h1>
              <p className="text-xl md:text-2xl mb-4 text-emerald-300">
                Helping Green Bay paper and food processing companies grow revenue 20-40% through proven eCommerce strategies
              </p>
              <p className="text-lg mb-8 text-gray-300">
                From the Fox River Valley industrial corridor to Port of Green Bay, we partner with established manufacturers to transform their digital commerce operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <BookingLink
                  type="discovery"
                  className="inline-block bg-emerald-600 text-white px-8 py-4 rounded-lg hover:bg-emerald-700 transition text-lg font-semibold text-center"
                >
                  Schedule Free Green Bay Consultation
                </BookingLink>
                <Link href="/results/" className="inline-block bg-white text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-100 transition text-lg font-semibold text-center">
                  View Green Bay Case Studies
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Local Expertise Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">
              Green Bay B2B eCommerce Expertise
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-emerald-600">
                  Understanding Green Bay's Industrial Heritage
                </h3>
                <p className="text-gray-700 mb-4">
                  Green Bay's historic paper and packaging industry, along with growing food processing sector, requires specialized eCommerce solutions. From paper mills along the Fox River to food processors serving nationwide markets, we understand the unique B2B challenges facing northeast Wisconsin's industrial base.
                </p>
                <p className="text-gray-700">
                  Whether you're a packaging manufacturer serving consumer goods companies or a food processor distributing throughout the Midwest, we deliver eCommerce consulting services tailored to Green Bay's manufacturing strength and strategic port location.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-emerald-600">
                  Local Industry Focus
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600">✓</span>
                    <span>Paper and packaging companies along Fox River</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600">✓</span>
                    <span>Food processing facilities in De Pere corridor</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600">✓</span>
                    <span>Industrial suppliers near Port of Green Bay</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600">✓</span>
                    <span>Logistics companies in Ashwaubenon business district</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600">✓</span>
                    <span>Manufacturing firms serving Great Lakes region</span>
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
              eCommerce Consulting Services for Green Bay Businesses
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-emerald-600">
                  Shopify Expert Green Bay
                </h3>
                <p className="text-gray-700 mb-4">
                  As a certified Shopify consultant in Green Bay, we help paper and food processing companies leverage Shopify Plus for bulk orders, wholesale operations, and industrial supply chains.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Industrial B2B wholesale channels</li>
                  <li>• Bulk packaging order systems</li>
                  <li>• Food processing supply integration</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-emerald-600">
                  Magento Consultant Green Bay
                </h3>
                <p className="text-gray-700 mb-4">
                  Expert Magento consulting for complex manufacturing and food processing B2B operations. We optimize Magento 2 for industrial catalogs and compliance requirements.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Food safety compliance tracking</li>
                  <li>• Complex industrial catalogs</li>
                  <li>• Multi-tier manufacturing pricing</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-emerald-600">
                  Fractional CMO Green Bay
                </h3>
                <p className="text-gray-700 mb-4">
                  Fractional CMO services for Green Bay's established manufacturers looking to modernize their digital presence and expand beyond traditional Great Lakes markets.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Industrial marketing strategies</li>
                  <li>• Great Lakes market development</li>
                  <li>• Northeast Wisconsin positioning</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Local Process Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">
              How We Help Green Bay B2B Companies Grow
            </h2>
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-emerald-600 text-white rounded-lg flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Initial Green Bay Consultation</h3>
                  <p className="text-gray-700">
                    We meet with you at your Green Bay facility or virtually to understand your operation, whether you're producing packaging materials or processing food products for national distribution.
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
                    We develop a customized eCommerce strategy accounting for manufacturing complexities, food safety regulations, and growth goals for expanding beyond the traditional Great Lakes market.
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
                    Execute the strategy with focus on manufacturing workflows, compliance tracking, and leveraging Green Bay's strategic position as a Great Lakes shipping hub.
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
              Frequently Asked Questions - Green Bay eCommerce Consulting
            </h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">
                  How much does eCommerce consulting cost in Green Bay?
                </h3>
                <p className="text-gray-700">
                  Our Green Bay B2B eCommerce consulting services typically range from $5,000-$15,000 per month depending on scope. We understand the unique needs of paper and food processing companies and offer flexible engagement models.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">
                  Do you work with food processing companies in Green Bay?
                </h3>
                <p className="text-gray-700">
                  Yes, we specialize in working with food processing, paper, and packaging companies throughout northeast Wisconsin. We understand food safety regulations, supply chain complexities, and industrial B2B requirements.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">
                  What's the best eCommerce platform for Green Bay manufacturers?
                </h3>
                <p className="text-gray-700">
                  For Green Bay manufacturers, we typically recommend Magento 2 Commerce for complex industrial operations or Shopify Plus for companies with simpler wholesale needs. The choice depends on your product complexity and compliance requirements.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">
                  Can you integrate with food safety tracking systems?
                </h3>
                <p className="text-gray-700">
                  Absolutely. We regularly integrate eCommerce platforms with food safety tracking, quality management systems, and manufacturing ERP systems commonly used by Green Bay's food processing companies.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-emerald-600 to-emerald-700 text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Transform Your Green Bay B2B Business?
            </h2>
            <p className="text-xl mb-8">
              Join other successful Green Bay manufacturers who've grown revenue 20-40% with our eCommerce consulting.
            </p>
            <BookingLink
              type="discovery"
              className="inline-block bg-white text-emerald-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition text-lg font-semibold"
            >
              Schedule Your Free Green Bay Consultation
            </BookingLink>
            <p className="mt-4 text-emerald-100">
              Serving Green Bay, De Pere, Ashwaubenon, and all of Brown County
            </p>
          </div>
        </section>
      </main>

    </>
  )
}