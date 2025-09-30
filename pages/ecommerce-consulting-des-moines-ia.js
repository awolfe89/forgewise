import Head from 'next/head'
import Link from 'next/link'
import { BookingLink } from '../src/components/ProtectedContact'
import { motion } from 'framer-motion'

export default function DesMoinesEcommercePage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Forgewise - B2B eCommerce Consulting Des Moines",
    "description": "Des Moines B2B eCommerce consultant helping Iowa manufacturers and agricultural distributors grow revenue 20-40% through Shopify, Magento, and strategic digital transformation.",
    "url": "https://forgewise.io/ecommerce-consulting-des-moines-ia/",
    "telephone": "",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Des Moines",
      "addressRegion": "IA",
      "addressCountry": "US"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Des Moines",
        "containedInPlace": {
          "@type": "State",
          "name": "Iowa"
        }
      },
      {
        "@type": "City",
        "name": "West Des Moines"
      },
      {
        "@type": "City",
        "name": "Ankeny"
      },
      {
        "@type": "City",
        "name": "Johnston"
      },
      {
        "@type": "City",
        "name": "Urbandale"
      },
      {
        "@type": "Place",
        "name": "Polk County"
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
        <title>B2B eCommerce Consultant Des Moines, IA | Shopify & Magento Expert | Forgewise</title>
        <meta name="description" content="Des Moines B2B eCommerce consultant specializing in agricultural, manufacturing, and insurance sectors. Expert Shopify and Magento consulting for Iowa businesses seeking digital growth." />
        <meta property="og:title" content="B2B eCommerce Consultant Des Moines | Forgewise" />
        <meta property="og:description" content="Iowa's trusted B2B eCommerce consulting partner. Helping Des Moines manufacturers and distributors achieve sustainable online revenue growth." />
        <meta property="og:url" content="https://forgewise.io/ecommerce-consulting-des-moines-ia/" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://forgewise.io/ecommerce-consulting-des-moines-ia/" />
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
                B2B eCommerce Consultant in Des Moines
              </h1>
              <p className="text-xl md:text-2xl mb-4 text-emerald-300">
                Transforming Iowa's agricultural and manufacturing businesses with proven B2B eCommerce strategies
              </p>
              <p className="text-lg mb-8 text-gray-300">
                From agricultural equipment distributors to insurance technology companies in West Des Moines, we help Central Iowa B2B companies modernize their digital commerce operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <BookingLink
                  type="discovery"
                  className="inline-block bg-emerald-600 text-white px-8 py-4 rounded-lg hover:bg-emerald-700 transition text-lg font-semibold text-center"
                >
                  Schedule Free Des Moines Consultation
                </BookingLink>
                <Link href="/results/" className="inline-block bg-white text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-100 transition text-lg font-semibold text-center">
                  View Iowa Case Studies
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Local Expertise Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">
              Des Moines B2B eCommerce Expertise
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-emerald-600">
                  Understanding Iowa's Business Landscape
                </h3>
                <p className="text-gray-700 mb-4">
                  Des Moines' unique position as Iowa's business hub, with strong agricultural, insurance, and manufacturing sectors, requires specialized B2B eCommerce approaches. From ag equipment suppliers near the State Fairgrounds to financial services companies downtown, we understand Iowa's diverse B2B needs.
                </p>
                <p className="text-gray-700">
                  Whether you're an agricultural distributor in Ankeny, a manufacturer along the Des Moines River corridor, or an insurance technology provider in West Des Moines' Jordan Creek area, we deliver eCommerce solutions that resonate with Iowa's business community.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-emerald-600">
                  Industries We Serve in Des Moines
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600">✓</span>
                    <span>Agricultural equipment & supply distributors</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600">✓</span>
                    <span>Insurance technology providers in West Des Moines</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600">✓</span>
                    <span>Food processing companies near the Metro Industrial Park</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600">✓</span>
                    <span>Construction suppliers serving Central Iowa</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600">✓</span>
                    <span>Manufacturing companies in the Southeast Connector corridor</span>
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
              eCommerce Solutions for Des Moines B2B Companies
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-emerald-600">
                  Shopify Services Des Moines
                </h3>
                <p className="text-gray-700 mb-4">
                  Expert Shopify consulting for Iowa businesses. We implement B2B features perfect for agricultural distributors and manufacturers serving the Midwest market.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Agricultural product catalogs</li>
                  <li>• Seasonal pricing management</li>
                  <li>• Iowa tax & compliance setup</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-emerald-600">
                  Magento Consulting Iowa
                </h3>
                <p className="text-gray-700 mb-4">
                  Advanced Magento solutions for complex Des Moines B2B operations, particularly suited for agricultural and industrial distributors.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Complex product configurations</li>
                  <li>• Multi-branch inventory management</li>
                  <li>• Integration with ag-tech systems</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-emerald-600">
                  Fractional CMO Des Moines
                </h3>
                <p className="text-gray-700 mb-4">
                  Strategic marketing leadership for Des Moines B2B companies looking to expand their digital presence across Iowa and the Midwest.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Digital transformation strategy</li>
                  <li>• Marketing automation setup</li>
                  <li>• Iowa market penetration</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Local Process Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">
              How We Help Des Moines Businesses Grow Online
            </h2>
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-emerald-600 text-white rounded-lg flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Iowa Business Analysis</h3>
                  <p className="text-gray-700">
                    We start by understanding your Des Moines operation, whether you're serving Iowa farmers, regional manufacturers, or national insurance markets from your West Des Moines headquarters.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-emerald-600 text-white rounded-lg flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Custom eCommerce Strategy</h3>
                  <p className="text-gray-700">
                    Develop a strategy that accounts for Iowa's seasonal business cycles, agricultural purchasing patterns, and the unique needs of Midwest B2B buyers.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-emerald-600 text-white rounded-lg flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Implementation & Growth</h3>
                  <p className="text-gray-700">
                    Execute with focus on rapid results, integrating with Iowa-based logistics networks, regional payment preferences, and Central Iowa business practices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">
              Success Stories from Iowa B2B Companies
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-3xl font-bold text-emerald-600 mb-2">32%</div>
                <div className="text-lg font-semibold mb-2">Revenue Increase</div>
                <p className="text-gray-600">
                  Agricultural equipment distributor in Ankeny achieved 32% online revenue growth in first year
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-3xl font-bold text-emerald-600 mb-2">45%</div>
                <div className="text-lg font-semibold mb-2">Cost Reduction</div>
                <p className="text-gray-600">
                  West Des Moines manufacturer reduced order processing costs by 45% through B2B automation
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-3xl font-bold text-emerald-600 mb-2">3x</div>
                <div className="text-lg font-semibold mb-2">Customer Growth</div>
                <p className="text-gray-600">
                  Johnston-based distributor tripled their B2B customer base across Iowa in 18 months
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">
              Questions from Des Moines B2B Companies
            </h2>
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">
                  How much does B2B eCommerce consulting cost in Des Moines?
                </h3>
                <p className="text-gray-700">
                  Our Des Moines eCommerce consulting services range from $5,000-$15,000 monthly, depending on project complexity. We offer flexible engagements tailored to Iowa businesses, including project-based and fractional executive arrangements.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">
                  Do you understand Iowa's agricultural market?
                </h3>
                <p className="text-gray-700">
                  Yes, we have deep experience with Iowa's agricultural sector, including seasonal purchasing patterns, equipment financing needs, and the unique requirements of ag distributors serving farmers across Iowa and neighboring states.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">
                  Can you integrate with farm management software?
                </h3>
                <p className="text-gray-700">
                  Absolutely. We regularly integrate eCommerce platforms with agricultural software systems, farm ERPs, and specialized tools used by Iowa agribusinesses, ensuring seamless data flow between systems.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">
                  Do you serve all of Central Iowa?
                </h3>
                <p className="text-gray-700">
                  Yes, we work with B2B companies throughout the Des Moines metro including West Des Moines, Ankeny, Johnston, Urbandale, Waukee, and Altoona. We also serve businesses across Iowa from Cedar Rapids to Council Bluffs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-emerald-600 to-emerald-700 text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Transform Your Des Moines B2B Business?
            </h2>
            <p className="text-xl mb-8">
              Join successful Iowa manufacturers and distributors who've achieved 20-40% revenue growth with our eCommerce strategies.
            </p>
            <BookingLink
              type="discovery"
              className="inline-block bg-white text-emerald-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition text-lg font-semibold"
            >
              Get Your Free Des Moines Consultation
            </BookingLink>
            <p className="mt-4 text-emerald-100">
              Proudly serving Des Moines and all of Central Iowa
            </p>
          </div>
        </section>
      </main>

    </>
  )
}