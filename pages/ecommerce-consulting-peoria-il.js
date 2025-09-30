import Head from 'next/head'
import Link from 'next/link'
import { BookingLink } from '../src/components/ProtectedContact'
import { motion } from 'framer-motion'

export default function PeoriaEcommercePage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Forgewise - B2B eCommerce Consulting Peoria",
    "description": "Peoria B2B eCommerce consultant helping heavy equipment manufacturers and industrial suppliers grow revenue 20-40% through strategic digital transformation.",
    "url": "https://forgewise.io/ecommerce-consulting-peoria-il/",
    "telephone": "",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Peoria",
      "addressRegion": "IL",
      "addressCountry": "US"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Peoria"
      },
      {
        "@type": "City",
        "name": "East Peoria"
      },
      {
        "@type": "City",
        "name": "Pekin"
      },
      {
        "@type": "City",
        "name": "Morton"
      },
      {
        "@type": "Place",
        "name": "Central Illinois"
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
        <title>B2B eCommerce Consultant Peoria, IL | Heavy Equipment & Manufacturing Expert | Forgewise</title>
        <meta name="description" content="Peoria's B2B eCommerce consultant specializing in heavy equipment and manufacturing. Expert Shopify and Magento consulting for Central Illinois industrial businesses." />
        <meta property="og:title" content="B2B eCommerce Consultant Peoria | Forgewise" />
        <meta property="og:description" content="Helping Peoria manufacturers and equipment dealers transform their B2B sales through proven eCommerce strategies." />
        <meta property="og:url" content="https://forgewise.io/ecommerce-consulting-peoria-il/" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://forgewise.io/ecommerce-consulting-peoria-il/" />
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
                B2B eCommerce Consultant in Peoria
              </h1>
              <p className="text-xl md:text-2xl mb-4 text-emerald-300">
                Empowering Central Illinois manufacturers with digital commerce solutions that drive 20-40% revenue growth
              </p>
              <p className="text-lg mb-8 text-gray-300">
                From heavy equipment dealers along the Illinois River to industrial suppliers in the Growth Cell, we help Peoria's B2B companies compete in the digital marketplace.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <BookingLink
                  type="discovery"
                  className="inline-block bg-emerald-600 text-white px-8 py-4 rounded-lg hover:bg-emerald-700 transition text-lg font-semibold text-center"
                >
                  Schedule Free Peoria Consultation
                </BookingLink>
                <Link href="/results/" className="inline-block bg-white text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-100 transition text-lg font-semibold text-center">
                  View Central Illinois Case Studies
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Local Expertise Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">
              Peoria's Heavy Equipment & Industrial B2B Expert
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-emerald-600">
                  Understanding Peoria's Industrial Economy
                </h3>
                <p className="text-gray-700 mb-4">
                  As the historic headquarters of major equipment manufacturers and home to countless industrial suppliers, Peoria requires specialized B2B eCommerce strategies. We understand the unique needs of companies serving the construction, mining, and agricultural equipment sectors throughout Central Illinois.
                </p>
                <p className="text-gray-700">
                  From equipment dealers near downtown to parts distributors in East Peoria's industrial corridor, we deliver eCommerce solutions that align with Peoria's industrial heritage and future growth.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-emerald-600">
                  Industries We Serve in Peoria
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600">✓</span>
                    <span>Heavy equipment dealers & parts distributors</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600">✓</span>
                    <span>Industrial machinery manufacturers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600">✓</span>
                    <span>Construction equipment suppliers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600">✓</span>
                    <span>Mining & aggregate equipment companies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600">✓</span>
                    <span>Agricultural implement dealers</span>
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
              eCommerce Solutions for Peoria B2B Companies
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-emerald-600">
                  Equipment Parts eCommerce
                </h3>
                <p className="text-gray-700 mb-4">
                  Specialized solutions for heavy equipment parts dealers with complex SKUs, compatibility matrices, and dealer networks.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Parts lookup systems</li>
                  <li>• Equipment compatibility</li>
                  <li>• Dealer portal management</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-emerald-600">
                  B2B Platform Selection
                </h3>
                <p className="text-gray-700 mb-4">
                  Expert guidance on choosing between Shopify Plus, Magento, or custom solutions for Peoria's industrial businesses.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Platform evaluation</li>
                  <li>• Migration planning</li>
                  <li>• Integration roadmap</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-emerald-600">
                  Digital Transformation
                </h3>
                <p className="text-gray-700 mb-4">
                  Complete digital strategy for traditional Peoria manufacturers moving their B2B sales online.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Digital readiness assessment</li>
                  <li>• Change management</li>
                  <li>• Team training & support</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-emerald-600 to-emerald-700 text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Transform Your Peoria B2B Business?
            </h2>
            <p className="text-xl mb-8">
              Join Central Illinois manufacturers and distributors achieving measurable online growth.
            </p>
            <BookingLink
              type="discovery"
              className="inline-block bg-white text-emerald-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition text-lg font-semibold"
            >
              Get Your Free Peoria Consultation
            </BookingLink>
            <p className="mt-4 text-emerald-100">
              Serving Peoria, East Peoria, Pekin, and Central Illinois
            </p>
          </div>
        </section>
      </main>

    </>
  )
}