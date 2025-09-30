import Head from 'next/head'
import Link from 'next/link'
import { BookingLink } from '../src/components/ProtectedContact'
import { motion } from 'framer-motion'

export default function KenoshaEcommercePage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Forgewise - B2B eCommerce Consulting Kenosha",
    "description": "Expert B2B eCommerce consultant in Kenosha helping manufacturing and distribution companies grow revenue 20-40% through Shopify, Magento, and digital transformation. Serving Kenosha County and Lake Michigan port region.",
    "url": "https://forgewise.io/ecommerce-consulting-kenosha-wi/",
    "telephone": "",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Kenosha",
      "addressRegion": "WI",
      "addressCountry": "US"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Kenosha",
        "containedInPlace": {
          "@type": "State",
          "name": "Wisconsin"
        }
      },
      {
        "@type": "Place",
        "name": "Kenosha County"
      },
      {
        "@type": "Place",
        "name": "Somers"
      },
      {
        "@type": "Place",
        "name": "Pleasant Prairie"
      },
      {
        "@type": "Place",
        "name": "Lake Michigan Port"
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
        <title>B2B eCommerce Consultant Kenosha, WI | Shopify & Magento Expert | Forgewise</title>
        <meta name="description" content="Kenosha's trusted B2B eCommerce consultant helping manufacturing and distribution companies grow revenue 20-40%. Expert Shopify and Magento consulting, fractional CMO services for Lake Michigan port region." />
        <meta property="og:title" content="B2B eCommerce Consultant Kenosha | Forgewise" />
        <meta property="og:description" content="Kenosha B2B eCommerce consulting for manufacturing and distribution companies. Proven revenue growth through Shopify, Magento, and strategic digital transformation." />
        <meta property="og:url" content="https://forgewise.io/ecommerce-consulting-kenosha-wi/" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://forgewise.io/ecommerce-consulting-kenosha-wi/" />
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
                B2B eCommerce Consultant in Kenosha
              </h1>
              <p className="text-xl md:text-2xl mb-4 text-emerald-300">
                Helping Kenosha manufacturing and distribution companies grow revenue 20-40% through proven eCommerce strategies
              </p>
              <p className="text-lg mb-8 text-gray-300">
                From the Lake Michigan port to I-94 distribution corridors, we partner with established manufacturers to transform their digital commerce operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <BookingLink
                  type="discovery"
                  className="inline-block bg-emerald-600 text-white px-8 py-4 rounded-lg hover:bg-emerald-700 transition text-lg font-semibold text-center"
                >
                  Schedule Free Kenosha Consultation
                </BookingLink>
                <Link href="/results/" className="inline-block bg-white text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-100 transition text-lg font-semibold text-center">
                  View Kenosha Case Studies
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Local Expertise Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">
              Kenosha B2B eCommerce Expertise
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-emerald-600">
                  Understanding Kenosha's Manufacturing & Distribution Hub
                </h3>
                <p className="text-gray-700 mb-4">
                  Kenosha's strategic location between Chicago and Milwaukee, combined with Lake Michigan port access, creates unique opportunities for B2B eCommerce. From automotive suppliers to distribution centers serving the Midwest, we understand the logistics advantages and manufacturing heritage that define Kenosha County's business landscape.
                </p>
                <p className="text-gray-700">
                  Whether you're a precision manufacturer serving automotive OEMs or a distribution company leveraging Kenosha's strategic location, we deliver eCommerce consulting services tailored to your competitive advantages in the Chicago-Milwaukee corridor.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-emerald-600">
                  Local Industry Focus
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600">✓</span>
                    <span>Manufacturing companies in Pleasant Prairie business park</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600">✓</span>
                    <span>Distribution centers along I-94 corridor</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600">✓</span>
                    <span>Automotive suppliers serving Great Lakes region</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600">✓</span>
                    <span>Port-related logistics companies at Lake Michigan</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600">✓</span>
                    <span>Industrial suppliers in Somers manufacturing district</span>
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
              eCommerce Consulting Services for Kenosha Businesses
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-emerald-600">
                  Shopify Expert Kenosha
                </h3>
                <p className="text-gray-700 mb-4">
                  As a certified Shopify consultant in Kenosha, we help manufacturers and distributors leverage Shopify Plus for automotive parts, industrial supplies, and complex logistics operations.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Automotive parts B2B catalogs</li>
                  <li>• Multi-location shipping optimization</li>
                  <li>• Great Lakes distribution integration</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-emerald-600">
                  Magento Consultant Kenosha
                </h3>
                <p className="text-gray-700 mb-4">
                  Expert Magento consulting for complex manufacturing and distribution B2B operations. We optimize Magento 2 for automotive industry requirements and logistics complexity.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Automotive industry compliance</li>
                  <li>• Complex manufacturing catalogs</li>
                  <li>• Port logistics integration</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-emerald-600">
                  Fractional CMO Kenosha
                </h3>
                <p className="text-gray-700 mb-4">
                  Fractional CMO services for Kenosha's manufacturing and distribution companies looking to capitalize on their strategic location between major Midwest markets.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Automotive industry marketing</li>
                  <li>• Chicago-Milwaukee corridor strategies</li>
                  <li>• Kenosha County market development</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Local Process Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">
              How We Help Kenosha B2B Companies Grow
            </h2>
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-emerald-600 text-white rounded-lg flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Initial Kenosha Consultation</h3>
                  <p className="text-gray-700">
                    We meet with you at your Kenosha facility or virtually to understand your operation, whether you're manufacturing automotive components or managing distribution across the Great Lakes region.
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
                    We develop a customized eCommerce strategy accounting for manufacturing complexities, automotive industry requirements, and growth goals leveraging Kenosha's strategic location advantages.
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
                    Execute the strategy with focus on logistics optimization, manufacturing workflows, and maximizing Kenosha's position as a Lake Michigan port and interstate hub.
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
              Frequently Asked Questions - Kenosha eCommerce Consulting
            </h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">
                  How much does eCommerce consulting cost in Kenosha?
                </h3>
                <p className="text-gray-700">
                  Our Kenosha B2B eCommerce consulting services typically range from $5,000-$15,000 per month depending on scope. We understand the unique needs of manufacturing and distribution companies and offer flexible engagement models.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">
                  Do you work with automotive suppliers in Kenosha?
                </h3>
                <p className="text-gray-700">
                  Yes, we specialize in working with automotive suppliers, manufacturers, and distribution companies throughout Kenosha County. We understand automotive industry requirements, quality standards, and supply chain complexities.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">
                  What's the best eCommerce platform for Kenosha manufacturers?
                </h3>
                <p className="text-gray-700">
                  For Kenosha manufacturers, we typically recommend Magento 2 Commerce for complex automotive operations or Shopify Plus for distribution companies with simpler product catalogs. The choice depends on your industry requirements and complexity.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">
                  Can you integrate with port and logistics systems?
                </h3>
                <p className="text-gray-700">
                  Absolutely. We regularly integrate eCommerce platforms with port management systems, transportation management systems, and logistics platforms commonly used by Kenosha's port-related businesses.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-emerald-600 to-emerald-700 text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Transform Your Kenosha B2B Business?
            </h2>
            <p className="text-xl mb-8">
              Join other successful Kenosha manufacturers who've grown revenue 20-40% with our eCommerce consulting.
            </p>
            <BookingLink
              type="discovery"
              className="inline-block bg-white text-emerald-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition text-lg font-semibold"
            >
              Schedule Your Free Kenosha Consultation
            </BookingLink>
            <p className="mt-4 text-emerald-100">
              Serving Kenosha, Pleasant Prairie, Somers, and all of Kenosha County
            </p>
          </div>
        </section>
      </main>

    </>
  )
}