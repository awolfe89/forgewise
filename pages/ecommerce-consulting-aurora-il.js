import Head from 'next/head'
import Link from 'next/link'
import { BookingLink } from '../src/components/ProtectedContact'
import { motion } from 'framer-motion'

export default function AuroraEcommercePage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Forgewise - B2B eCommerce Consulting Aurora",
    "description": "Expert B2B eCommerce consultant in Aurora helping manufacturing and logistics companies grow revenue 20-40% through Shopify, Magento, and digital transformation. Serving Aurora, Fox Valley, and Kane County.",
    "url": "https://forgewise.io/ecommerce-consulting-aurora-il/",
    "telephone": "",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Aurora",
      "addressRegion": "IL",
      "addressCountry": "US"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Aurora",
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
        "name": "Fox Valley"
      },
      {
        "@type": "Place",
        "name": "North Aurora"
      },
      {
        "@type": "Place",
        "name": "Montgomery"
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
        <title>B2B eCommerce Consultant Aurora, IL | Shopify & Magento Expert | Forgewise</title>
        <meta name="description" content="Aurora's trusted B2B eCommerce consultant helping manufacturing and logistics companies grow revenue 20-40%. Expert Shopify and Magento consulting, fractional CMO services for Fox Valley businesses." />
        <meta property="og:title" content="B2B eCommerce Consultant Aurora | Forgewise" />
        <meta property="og:description" content="Aurora B2B eCommerce consulting for manufacturing and logistics companies. Proven revenue growth through Shopify, Magento, and strategic digital transformation." />
        <meta property="og:url" content="https://forgewise.io/ecommerce-consulting-aurora-il/" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://forgewise.io/ecommerce-consulting-aurora-il/" />
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
                B2B eCommerce Consultant in Aurora
              </h1>
              <p className="text-xl md:text-2xl mb-4 text-emerald-300">
                Helping Aurora manufacturers and logistics companies grow revenue 20-40% through proven eCommerce strategies
              </p>
              <p className="text-lg mb-8 text-gray-300">
                From the Fox Valley industrial corridor to downtown Aurora, we partner with established manufacturers to transform their digital commerce operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <BookingLink
                  type="discovery"
                  className="inline-block bg-emerald-600 text-white px-8 py-4 rounded-lg hover:bg-emerald-700 transition text-lg font-semibold text-center"
                >
                  Schedule Free Aurora Consultation
                </BookingLink>
                <Link href="/results/" className="inline-block bg-white text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-100 transition text-lg font-semibold text-center">
                  View Aurora Case Studies
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Local Expertise Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">
              Aurora B2B eCommerce Expertise
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-emerald-600">
                  Understanding Aurora's Manufacturing Heritage
                </h3>
                <p className="text-gray-700 mb-4">
                  Aurora's rich manufacturing and logistics ecosystem requires robust eCommerce solutions. From industrial manufacturers in the Fox Valley to transportation companies along I-88, we understand the unique B2B challenges facing Kane County's established industrial base.
                </p>
                <p className="text-gray-700">
                  Whether you're a precision manufacturer serving aerospace companies or a logistics provider handling distribution across the Midwest, we deliver eCommerce consulting services tailored to Aurora's industrial strength and strategic location.
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
                    <span>Transportation and logistics providers near I-88</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600">✓</span>
                    <span>Industrial suppliers in Aurora Business Park</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600">✓</span>
                    <span>Precision manufacturers serving aerospace and automotive</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600">✓</span>
                    <span>Warehousing and distribution companies in Montgomery</span>
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
              eCommerce Consulting Services for Aurora Businesses
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-emerald-600">
                  Shopify Expert Aurora
                </h3>
                <p className="text-gray-700 mb-4">
                  As a certified Shopify consultant in Aurora, we help manufacturers leverage Shopify Plus for wholesale operations, bulk ordering, and complex shipping requirements across the Fox Valley.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Industrial B2B wholesale channels</li>
                  <li>• Complex shipping and logistics integration</li>
                  <li>• Multi-location inventory management</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-emerald-600">
                  Magento Consultant Aurora
                </h3>
                <p className="text-gray-700 mb-4">
                  Expert Magento consulting for complex manufacturing B2B operations. We optimize Magento 2 for Aurora manufacturers requiring advanced catalog management and custom pricing.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Custom product configurations</li>
                  <li>• Multi-tier manufacturing pricing</li>
                  <li>• ERP integration for production</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-emerald-600">
                  Fractional CMO Aurora
                </h3>
                <p className="text-gray-700 mb-4">
                  Fractional CMO services for Aurora's established manufacturers looking to modernize their digital presence and expand beyond traditional sales channels.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Industrial marketing strategies</li>
                  <li>• Digital transformation planning</li>
                  <li>• Fox Valley market development</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Local Process Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">
              How We Help Aurora B2B Companies Grow
            </h2>
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-emerald-600 text-white rounded-lg flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Initial Aurora Consultation</h3>
                  <p className="text-gray-700">
                    We meet with you at your Aurora facility or virtually to understand your manufacturing operation, whether you're serving local Fox Valley businesses or shipping nationwide from your Kane County location.
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
                    We develop a customized eCommerce strategy accounting for manufacturing complexities, logistics requirements, and growth goals for expanding beyond the traditional Fox Valley market.
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
                    Execute the strategy with focus on manufacturing workflows, logistics optimization, and leveraging Aurora's strategic location along major transportation corridors.
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
              Frequently Asked Questions - Aurora eCommerce Consulting
            </h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">
                  How much does eCommerce consulting cost in Aurora?
                </h3>
                <p className="text-gray-700">
                  Our Aurora B2B eCommerce consulting services typically range from $5,000-$15,000 per month depending on scope. We understand the unique needs of manufacturing companies and offer flexible engagement models.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">
                  Do you work with manufacturing companies in Aurora?
                </h3>
                <p className="text-gray-700">
                  Yes, we specialize in working with manufacturers throughout the Fox Valley region. We understand complex product catalogs, custom pricing structures, and the unique B2B requirements of industrial companies.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">
                  What's the best eCommerce platform for Aurora manufacturers?
                </h3>
                <p className="text-gray-700">
                  For Aurora manufacturers, we typically recommend Magento 2 Commerce for complex operations or Shopify Plus for companies seeking easier management. The choice depends on your product complexity and B2B requirements.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">
                  Can you integrate with manufacturing ERP systems?
                </h3>
                <p className="text-gray-700">
                  Absolutely. We regularly integrate eCommerce platforms with manufacturing ERP systems, inventory management, and production planning tools commonly used by Aurora's industrial companies.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-emerald-600 to-emerald-700 text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Transform Your Aurora B2B Business?
            </h2>
            <p className="text-xl mb-8">
              Join other successful Aurora manufacturers who've grown revenue 20-40% with our eCommerce consulting.
            </p>
            <BookingLink
              type="discovery"
              className="inline-block bg-white text-emerald-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition text-lg font-semibold"
            >
              Schedule Your Free Aurora Consultation
            </BookingLink>
            <p className="mt-4 text-emerald-100">
              Serving Aurora, North Aurora, Montgomery, and all of Kane County
            </p>
          </div>
        </section>
      </main>

    </>
  )
}