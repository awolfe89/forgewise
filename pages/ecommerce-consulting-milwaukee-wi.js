import Head from 'next/head'
import Link from 'next/link'
import { BookingLink } from '../src/components/ProtectedContact'
import { motion } from 'framer-motion'

export default function MilwaukeeEcommercePage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Forgewise - B2B eCommerce Consulting Milwaukee",
    "description": "Milwaukee's trusted B2B eCommerce consultant helping manufacturers and distributors achieve 20-40% revenue growth through Shopify, Magento, and digital transformation. Serving Milwaukee, Waukesha, and Southeast Wisconsin.",
    "url": "https://forgewise.io/ecommerce-consulting-milwaukee-wi/",
    "telephone": "",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Milwaukee",
      "addressRegion": "WI",
      "addressCountry": "US"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Milwaukee",
        "containedInPlace": {
          "@type": "State",
          "name": "Wisconsin"
        }
      },
      {
        "@type": "Place",
        "name": "Third Ward"
      },
      {
        "@type": "Place",
        "name": "Walker's Point"
      },
      {
        "@type": "Place",
        "name": "Menomonee Valley"
      },
      {
        "@type": "City",
        "name": "Waukesha"
      },
      {
        "@type": "City",
        "name": "Brookfield"
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
        <title>B2B eCommerce Consultant Milwaukee, WI | Shopify & Magento Expert | Forgewise</title>
        <meta name="description" content="Milwaukee B2B eCommerce consultant specializing in manufacturing and industrial distribution. Expert Shopify and Magento consulting, fractional CMO services for Wisconsin businesses." />
        <meta property="og:title" content="B2B eCommerce Consultant Milwaukee | Forgewise" />
        <meta property="og:description" content="Milwaukee's B2B eCommerce consulting expert. Helping Wisconsin manufacturers and distributors grow revenue through strategic digital transformation." />
        <meta property="og:url" content="https://forgewise.io/ecommerce-consulting-milwaukee-wi/" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://forgewise.io/ecommerce-consulting-milwaukee-wi/" />
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
                B2B eCommerce Consultant in Milwaukee
              </h1>
              <p className="text-xl md:text-2xl mb-4 text-emerald-300">
                Helping Wisconsin manufacturers and industrial distributors increase online revenue 20-40%
              </p>
              <p className="text-lg mb-8 text-gray-300">
                From the Menomonee Valley industrial corridor to the Port of Milwaukee, we partner with Southeast Wisconsin's leading B2B companies to modernize their digital commerce.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <BookingLink
                  type="discovery"
                  className="inline-block bg-emerald-600 text-white px-8 py-4 rounded-lg hover:bg-emerald-700 transition text-lg font-semibold text-center"
                >
                  Schedule Free Milwaukee Consultation
                </BookingLink>
                <Link href="/results/" className="inline-block bg-white text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-100 transition text-lg font-semibold text-center">
                  View Wisconsin Case Studies
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Local Expertise Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">
              Milwaukee's B2B eCommerce Specialist
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-emerald-600">
                  Understanding Milwaukee's Manufacturing Heritage
                </h3>
                <p className="text-gray-700 mb-4">
                  Milwaukee's rich manufacturing history creates unique opportunities for B2B digital transformation. From tool manufacturers in West Allis to food processing companies near Miller Park, we understand the specific challenges Wisconsin manufacturers face in the digital marketplace.
                </p>
                <p className="text-gray-700">
                  Whether you're an industrial supplier in the Menomonee Valley, a distributor in the Harbor District, or a manufacturer along the I-94 corridor from Waukesha to Racine, we deliver eCommerce solutions tailored to Milwaukee's industrial economy.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-emerald-600">
                  Industries We Serve in Milwaukee
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600">✓</span>
                    <span>Tool & equipment manufacturers in West Milwaukee</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600">✓</span>
                    <span>Food & beverage distributors near the Third Ward</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600">✓</span>
                    <span>Industrial automation companies in Brookfield</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600">✓</span>
                    <span>Metal fabricators throughout Milwaukee County</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600">✓</span>
                    <span>Building supply distributors serving Southeast Wisconsin</span>
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
              eCommerce Consulting Services for Milwaukee Businesses
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-emerald-600">
                  Shopify Consultant Milwaukee
                </h3>
                <p className="text-gray-700 mb-4">
                  Certified Shopify expert serving Milwaukee manufacturers. We implement Shopify Plus B2B features for wholesale operations, dealer portals, and complex pricing structures.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• B2B wholesale channels setup</li>
                  <li>• Wisconsin tax compliance</li>
                  <li>• Integration with Midwest logistics</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-emerald-600">
                  Magento Expert Milwaukee
                </h3>
                <p className="text-gray-700 mb-4">
                  Advanced Magento consulting for Milwaukee's complex B2B operations. Optimize your Magento 2 platform for industrial sales and distribution.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Custom product configurators</li>
                  <li>• Multi-location inventory (Milwaukee area)</li>
                  <li>• ERP integration expertise</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-emerald-600">
                  Fractional CMO Milwaukee
                </h3>
                <p className="text-gray-700 mb-4">
                  Strategic marketing leadership for Milwaukee B2B companies. Get C-level expertise without the full-time executive cost.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Digital strategy development</li>
                  <li>• Marketing team management</li>
                  <li>• Wisconsin market expansion</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Local Benefits Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">
              Why Milwaukee B2B Companies Choose Forgewise
            </h2>
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-emerald-600 text-white rounded-lg flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Local Milwaukee Market Knowledge</h3>
                  <p className="text-gray-700">
                    We understand Milwaukee's industrial landscape, from the manufacturers in the 30th Street Corridor to distributors near Mitchell International Airport. Our strategies account for regional buying patterns and Wisconsin business culture.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-emerald-600 text-white rounded-lg flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Proven Results with Wisconsin Manufacturers</h3>
                  <p className="text-gray-700">
                    Our Milwaukee clients see strong revenue growth with our proven approach. We've helped companies from Germantown to Greenfield transform their B2B sales through strategic eCommerce implementation.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-emerald-600 text-white rounded-lg flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Integration with Milwaukee Infrastructure</h3>
                  <p className="text-gray-700">
                    We seamlessly integrate with Wisconsin-based fulfillment centers, regional carriers, and the logistics networks serving the Port of Milwaukee and intermodal facilities throughout Southeast Wisconsin.
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
              Common Questions from Milwaukee B2B Companies
            </h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">
                  What's the cost of eCommerce consulting in Milwaukee?
                </h3>
                <p className="text-gray-700">
                  Our Milwaukee B2B eCommerce consulting typically ranges from $5,000-$15,000 monthly based on project scope. We offer flexible arrangements including project-based work, monthly retainers, and fractional executive roles tailored to Wisconsin businesses.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">
                  Do you serve all of Southeast Wisconsin?
                </h3>
                <p className="text-gray-700">
                  Yes, we work with B2B companies throughout the Milwaukee metro area including Waukesha, West Allis, Wauwatosa, Brookfield, New Berlin, and Racine. We also serve businesses throughout Wisconsin from Madison to Green Bay.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">
                  Can you integrate with Wisconsin-based ERP systems?
                </h3>
                <p className="text-gray-700">
                  Absolutely. We regularly integrate eCommerce platforms with ERP systems commonly used by Milwaukee manufacturers including SAP, Microsoft Dynamics, and industry-specific solutions used in Wisconsin's manufacturing sector.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">
                  What makes Milwaukee B2B eCommerce different?
                </h3>
                <p className="text-gray-700">
                  Milwaukee's strong manufacturing base requires robust B2B features like custom pricing, complex product configurations, and dealer portals. Wisconsin companies often need integration with regional logistics providers and compliance with Midwest distribution networks.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-emerald-600 to-emerald-700 text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Grow Your Milwaukee B2B Business Online?
            </h2>
            <p className="text-xl mb-8">
              Join successful Wisconsin manufacturers and distributors who've transformed their digital commerce with our proven strategies.
            </p>
            <BookingLink
              type="discovery"
              className="inline-block bg-white text-emerald-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition text-lg font-semibold"
            >
              Schedule Your Free Milwaukee Consultation
            </BookingLink>
            <p className="mt-4 text-emerald-100">
              Proudly serving Milwaukee and all of Southeast Wisconsin
            </p>
          </div>
        </section>
      </main>

    </>
  )
}