import Head from 'next/head'
import Link from 'next/link'
import { BookingLink } from '../src/components/ProtectedContact'
import { motion } from 'framer-motion'

export default function JolietEcommercePage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Forgewise - B2B eCommerce Consulting Joliet",
    "description": "Expert B2B eCommerce consultant in Joliet helping transportation, logistics, and warehousing companies grow revenue 20-40% through Shopify, Magento, and digital transformation. Serving Joliet, Will County, and southwest suburbs.",
    "url": "https://forgewise.io/ecommerce-consulting-joliet-il/",
    "telephone": "",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Joliet",
      "addressRegion": "IL",
      "addressCountry": "US"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Joliet",
        "containedInPlace": {
          "@type": "State",
          "name": "Illinois"
        }
      },
      {
        "@type": "Place",
        "name": "Will County"
      },
      {
        "@type": "Place",
        "name": "Romeoville"
      },
      {
        "@type": "Place",
        "name": "Plainfield"
      },
      {
        "@type": "Place",
        "name": "CenterPoint Intermodal"
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
        <title>B2B eCommerce Consultant Joliet, IL | Shopify & Magento Expert | Forgewise</title>
        <meta name="description" content="Joliet's trusted B2B eCommerce consultant helping transportation and logistics companies grow revenue 20-40%. Expert Shopify and Magento consulting, fractional CMO services for Will County businesses." />
        <meta property="og:title" content="B2B eCommerce Consultant Joliet | Forgewise" />
        <meta property="og:description" content="Joliet B2B eCommerce consulting for transportation and logistics companies. Proven revenue growth through Shopify, Magento, and strategic digital transformation." />
        <meta property="og:url" content="https://forgewise.io/ecommerce-consulting-joliet-il/" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://forgewise.io/ecommerce-consulting-joliet-il/" />
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
                B2B eCommerce Consultant in Joliet
              </h1>
              <p className="text-xl md:text-2xl mb-4 text-emerald-300">
                Helping Joliet transportation and logistics companies grow revenue 20-40% through proven eCommerce strategies
              </p>
              <p className="text-lg mb-8 text-gray-300">
                From CenterPoint Intermodal to the I-80 corridor, we partner with logistics leaders to transform their digital commerce operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <BookingLink
                  type="discovery"
                  className="inline-block bg-emerald-600 text-white px-8 py-4 rounded-lg hover:bg-emerald-700 transition text-lg font-semibold text-center"
                >
                  Schedule Free Joliet Consultation
                </BookingLink>
                <Link href="/results/" className="inline-block bg-white text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-100 transition text-lg font-semibold text-center">
                  View Joliet Case Studies
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Local Expertise Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">
              Joliet B2B eCommerce Expertise
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-emerald-600">
                  Understanding Joliet's Logistics Hub
                </h3>
                <p className="text-gray-700 mb-4">
                  Joliet's position as a major transportation and logistics hub requires sophisticated eCommerce solutions. From warehousing operations at CenterPoint Intermodal to distribution companies along the I-55 and I-80 corridors, we understand the unique B2B challenges facing Will County's logistics ecosystem.
                </p>
                <p className="text-gray-700">
                  Whether you're a third-party logistics provider serving the Midwest or a transportation company managing nationwide freight, we deliver eCommerce consulting services tailored to Joliet's critical role in America's supply chain.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-emerald-600">
                  Local Industry Focus
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600">✓</span>
                    <span>Logistics companies at CenterPoint Intermodal Center</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600">✓</span>
                    <span>Warehousing operations along I-55 and I-80</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600">✓</span>
                    <span>Transportation companies in Romeoville corridor</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600">✓</span>
                    <span>Distribution centers serving Chicago metro</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600">✓</span>
                    <span>Industrial suppliers in Plainfield business district</span>
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
              eCommerce Consulting Services for Joliet Businesses
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-emerald-600">
                  Shopify Expert Joliet
                </h3>
                <p className="text-gray-700 mb-4">
                  As a certified Shopify consultant in Joliet, we help logistics companies leverage Shopify Plus for freight booking, transportation services, and warehousing solutions for B2B clients.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Logistics service booking systems</li>
                  <li>• Multi-location shipping calculations</li>
                  <li>• Integration with freight management systems</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-emerald-600">
                  Magento Consultant Joliet
                </h3>
                <p className="text-gray-700 mb-4">
                  Expert Magento consulting for complex logistics and warehousing B2B operations. We optimize Magento 2 for transportation companies requiring advanced service catalogs.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Complex service configurations</li>
                  <li>• Multi-tier logistics pricing</li>
                  <li>• Integration with WMS and TMS systems</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-emerald-600">
                  Fractional CMO Joliet
                </h3>
                <p className="text-gray-700 mb-4">
                  Fractional CMO services for Joliet's logistics and transportation companies looking to modernize their digital presence and capture more B2B freight business.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Logistics marketing strategies</li>
                  <li>• Digital freight acquisition</li>
                  <li>• Will County market development</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Local Process Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">
              How We Help Joliet B2B Companies Grow
            </h2>
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-emerald-600 text-white rounded-lg flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Initial Joliet Consultation</h3>
                  <p className="text-gray-700">
                    We meet with you at your Joliet facility or virtually to understand your logistics operation, whether you're managing warehousing at CenterPoint or providing transportation services across the Midwest.
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
                    We develop a customized eCommerce strategy accounting for logistics complexities, transportation regulations, and growth goals for expanding beyond the traditional Will County market.
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
                    Execute the strategy with focus on logistics workflows, transportation optimization, and leveraging Joliet's strategic position as a major intermodal hub.
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
              Frequently Asked Questions - Joliet eCommerce Consulting
            </h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">
                  How much does eCommerce consulting cost in Joliet?
                </h3>
                <p className="text-gray-700">
                  Our Joliet B2B eCommerce consulting services typically range from $5,000-$15,000 per month depending on scope. We understand the unique needs of logistics and transportation companies and offer flexible engagement models.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">
                  Do you work with logistics companies in Joliet?
                </h3>
                <p className="text-gray-700">
                  Yes, we specialize in working with logistics, transportation, and warehousing companies throughout Will County and the greater Chicago area. We understand freight management, supply chain optimization, and B2B service requirements.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">
                  What's the best eCommerce platform for Joliet logistics companies?
                </h3>
                <p className="text-gray-700">
                  For logistics companies in Joliet, we typically recommend Shopify Plus for service-based operations or Magento 2 Commerce for complex freight and warehousing services requiring advanced configuration options.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">
                  Can you integrate with transportation management systems?
                </h3>
                <p className="text-gray-700">
                  Absolutely. We regularly integrate eCommerce platforms with TMS, WMS, and freight management systems commonly used by Joliet's transportation and logistics companies.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-emerald-600 to-emerald-700 text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Transform Your Joliet B2B Business?
            </h2>
            <p className="text-xl mb-8">
              Join other successful Joliet logistics companies who've grown revenue 20-40% with our eCommerce consulting.
            </p>
            <BookingLink
              type="discovery"
              className="inline-block bg-white text-emerald-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition text-lg font-semibold"
            >
              Schedule Your Free Joliet Consultation
            </BookingLink>
            <p className="mt-4 text-emerald-100">
              Serving Joliet, Romeoville, Plainfield, and all of Will County
            </p>
          </div>
        </section>
      </main>

    </>
  )
}