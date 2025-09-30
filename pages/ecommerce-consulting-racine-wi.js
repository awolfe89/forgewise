import Head from 'next/head'
import Link from 'next/link'
import { BookingLink } from '../src/components/ProtectedContact'
import { motion } from 'framer-motion'

export default function RacineEcommercePage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Forgewise - B2B eCommerce Consulting Racine",
    "description": "Expert B2B eCommerce consultant in Racine helping industrial equipment and consumer goods manufacturers grow revenue 20-40% through Shopify, Magento, and digital transformation. Serving Racine County and southeast Wisconsin.",
    "url": "https://forgewise.io/ecommerce-consulting-racine-wi/",
    "telephone": "",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Racine",
      "addressRegion": "WI",
      "addressCountry": "US"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Racine",
        "containedInPlace": {
          "@type": "State",
          "name": "Wisconsin"
        }
      },
      {
        "@type": "Place",
        "name": "Racine County"
      },
      {
        "@type": "Place",
        "name": "Mount Pleasant"
      },
      {
        "@type": "Place",
        "name": "Sturtevant"
      },
      {
        "@type": "Place",
        "name": "Lake Michigan Harbor"
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
        <title>B2B eCommerce Consultant Racine, WI | Shopify & Magento Expert | Forgewise</title>
        <meta name="description" content="Racine's trusted B2B eCommerce consultant helping industrial equipment and consumer goods manufacturers grow revenue 20-40%. Expert Shopify and Magento consulting, fractional CMO services for Racine County." />
        <meta property="og:title" content="B2B eCommerce Consultant Racine | Forgewise" />
        <meta property="og:description" content="Racine B2B eCommerce consulting for industrial and consumer goods manufacturers. Proven revenue growth through Shopify, Magento, and strategic digital transformation." />
        <meta property="og:url" content="https://forgewise.io/ecommerce-consulting-racine-wi/" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://forgewise.io/ecommerce-consulting-racine-wi/" />
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
                B2B eCommerce Consultant in Racine
              </h1>
              <p className="text-xl md:text-2xl mb-4 text-emerald-300">
                Helping Racine industrial equipment and consumer goods manufacturers grow revenue 20-40% through proven eCommerce strategies
              </p>
              <p className="text-lg mb-8 text-gray-300">
                From the Lake Michigan harbor to I-94 industrial corridor, we partner with established manufacturers to transform their digital commerce operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <BookingLink
                  type="discovery"
                  className="inline-block bg-emerald-600 text-white px-8 py-4 rounded-lg hover:bg-emerald-700 transition text-lg font-semibold text-center"
                >
                  Schedule Free Racine Consultation
                </BookingLink>
                <Link href="/results/" className="inline-block bg-white text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-100 transition text-lg font-semibold text-center">
                  View Racine Case Studies
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Local Expertise Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">
              Racine B2B eCommerce Expertise
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-emerald-600">
                  Understanding Racine's Manufacturing Excellence
                </h3>
                <p className="text-gray-700 mb-4">
                  Racine's rich industrial heritage in equipment manufacturing and consumer goods requires sophisticated eCommerce solutions. From industrial equipment producers to consumer product manufacturers along Lake Michigan, we understand the precision and quality standards that define Racine County's manufacturing ecosystem.
                </p>
                <p className="text-gray-700">
                  Whether you're manufacturing industrial machinery for global markets or producing consumer goods for national distribution, we deliver eCommerce consulting services tailored to Racine's reputation for engineering excellence and manufacturing quality.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-emerald-600">
                  Local Industry Focus
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600">✓</span>
                    <span>Industrial equipment manufacturers in Sturtevant</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600">✓</span>
                    <span>Consumer goods companies near Lake Michigan harbor</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600">✓</span>
                    <span>Precision manufacturers in Mount Pleasant corridor</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600">✓</span>
                    <span>Specialty chemical and materials companies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600">✓</span>
                    <span>Industrial suppliers serving Great Lakes region</span>
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
              eCommerce Consulting Services for Racine Businesses
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-emerald-600">
                  Shopify Expert Racine
                </h3>
                <p className="text-gray-700 mb-4">
                  As a certified Shopify consultant in Racine, we help industrial equipment and consumer goods manufacturers leverage Shopify Plus for complex B2B operations and wholesale channels.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Industrial equipment B2B catalogs</li>
                  <li>• Consumer goods wholesale channels</li>
                  <li>• Technical specification management</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-emerald-600">
                  Magento Consultant Racine
                </h3>
                <p className="text-gray-700 mb-4">
                  Expert Magento consulting for complex manufacturing B2B operations. We optimize Magento 2 for industrial equipment specifications and advanced product configurations.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Complex product configurations</li>
                  <li>• Technical documentation systems</li>
                  <li>• Multi-tier industrial pricing</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-emerald-600">
                  Fractional CMO Racine
                </h3>
                <p className="text-gray-700 mb-4">
                  Fractional CMO services for Racine's manufacturing companies looking to modernize their digital presence and expand beyond traditional industrial markets.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Industrial marketing strategies</li>
                  <li>• Global market positioning</li>
                  <li>• Racine County business development</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Local Process Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">
              How We Help Racine B2B Companies Grow
            </h2>
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-emerald-600 text-white rounded-lg flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Initial Racine Consultation</h3>
                  <p className="text-gray-700">
                    We meet with you at your Racine facility or virtually to understand your operation, whether you're manufacturing industrial equipment or producing consumer goods for national markets.
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
                    We develop a customized eCommerce strategy accounting for manufacturing complexities, quality requirements, and growth goals for expanding beyond traditional Racine County markets.
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
                    Execute the strategy with focus on manufacturing excellence, quality documentation, and leveraging Racine's reputation for industrial innovation and precision manufacturing.
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
              Frequently Asked Questions - Racine eCommerce Consulting
            </h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">
                  How much does eCommerce consulting cost in Racine?
                </h3>
                <p className="text-gray-700">
                  Our Racine B2B eCommerce consulting services typically range from $5,000-$15,000 per month depending on scope. We understand the unique needs of industrial equipment and consumer goods manufacturers and offer flexible engagement models.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">
                  Do you work with industrial equipment manufacturers in Racine?
                </h3>
                <p className="text-gray-700">
                  Yes, we specialize in working with industrial equipment manufacturers and consumer goods companies throughout Racine County. We understand complex product specifications, quality standards, and B2B industrial requirements.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">
                  What's the best eCommerce platform for Racine manufacturers?
                </h3>
                <p className="text-gray-700">
                  For Racine manufacturers, we typically recommend Magento 2 Commerce for complex industrial equipment catalogs or Shopify Plus for consumer goods companies with simpler B2B needs. The choice depends on your product complexity and specifications.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">
                  Can you integrate with manufacturing quality systems?
                </h3>
                <p className="text-gray-700">
                  Absolutely. We regularly integrate eCommerce platforms with quality management systems, manufacturing ERP platforms, and technical documentation systems commonly used by Racine's precision manufacturers.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-emerald-600 to-emerald-700 text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Transform Your Racine B2B Business?
            </h2>
            <p className="text-xl mb-8">
              Join other successful Racine manufacturers who've grown revenue 20-40% with our eCommerce consulting.
            </p>
            <BookingLink
              type="discovery"
              className="inline-block bg-white text-emerald-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition text-lg font-semibold"
            >
              Schedule Your Free Racine Consultation
            </BookingLink>
            <p className="mt-4 text-emerald-100">
              Serving Racine, Mount Pleasant, Sturtevant, and all of Racine County
            </p>
          </div>
        </section>
      </main>

    </>
  )
}