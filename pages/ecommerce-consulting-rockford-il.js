import Head from 'next/head'
import Link from 'next/link'
import Navbar from '../src/components/Navbar'
import NextFooter from '../src/components/NextFooter'
import { BookingLink } from '../src/components/ProtectedContact'
import { motion } from 'framer-motion'

export default function RockfordEcommercePage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Forgewise - B2B eCommerce Consulting Rockford",
    "description": "Rockford B2B eCommerce consultant helping manufacturers and aerospace suppliers achieve 20-40% revenue growth through Shopify, Magento, and digital transformation strategies.",
    "url": "https://forgewise.io/ecommerce-consulting-rockford-il/",
    "telephone": "",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Rockford",
      "addressRegion": "IL",
      "addressCountry": "US"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Rockford",
        "containedInPlace": {
          "@type": "State",
          "name": "Illinois"
        }
      },
      {
        "@type": "City",
        "name": "Loves Park"
      },
      {
        "@type": "City",
        "name": "Machesney Park"
      },
      {
        "@type": "City",
        "name": "Belvidere"
      },
      {
        "@type": "Place",
        "name": "Winnebago County"
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
        <title>B2B eCommerce Consultant Rockford, IL | Manufacturing & Aerospace Expert | Forgewise</title>
        <meta name="description" content="Rockford's trusted B2B eCommerce consultant specializing in manufacturing and aerospace suppliers. Expert Shopify and Magento consulting for Northern Illinois manufacturers." />
        <meta property="og:title" content="B2B eCommerce Consultant Rockford | Forgewise" />
        <meta property="og:description" content="Helping Rockford manufacturers and industrial suppliers grow online revenue 20-40% through proven B2B eCommerce strategies." />
        <meta property="og:url" content="https://forgewise.io/ecommerce-consulting-rockford-il/" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://forgewise.io/ecommerce-consulting-rockford-il/" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </Head>

      <Navbar />

      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                B2B eCommerce Consultant in Rockford
              </h1>
              <p className="text-xl md:text-2xl mb-4 text-emerald-300">
                Transforming Rockford's manufacturing and aerospace suppliers with proven digital commerce strategies
              </p>
              <p className="text-lg mb-8 text-gray-300">
                From aerospace fastener manufacturers to machine tool distributors along the Rock River corridor, we help Rockford's industrial businesses modernize their B2B sales channels.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <BookingLink
                  type="discovery"
                  className="inline-block bg-emerald-600 text-white px-8 py-4 rounded-lg hover:bg-emerald-700 transition text-lg font-semibold text-center"
                >
                  Schedule Free Rockford Consultation
                </BookingLink>
                <Link href="/results/" className="inline-block bg-white text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-100 transition text-lg font-semibold text-center">
                  View Manufacturing Case Studies
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Local Expertise Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">
              Rockford Manufacturing & Aerospace Expertise
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-emerald-600">
                  Understanding Rockford's Industrial Heritage
                </h3>
                <p className="text-gray-700 mb-4">
                  Rockford's legacy as the "Machine Tool Capital of the World" and current aerospace manufacturing hub requires specialized B2B eCommerce approaches. From fastener manufacturers near the Chicago Rockford International Airport to tooling companies in the Southwest Industrial Park, we understand Rockford's unique industrial ecosystem.
                </p>
                <p className="text-gray-700">
                  Whether you're an aerospace supplier in the Aerospace Park, a machine tool manufacturer near Sandy Hollow Road, or a metal fabricator along the Kishwaukee River, we deliver eCommerce solutions tailored to Northern Illinois manufacturers.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-emerald-600">
                  Industries We Serve in Rockford
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600">✓</span>
                    <span>Aerospace fastener & component manufacturers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600">✓</span>
                    <span>Machine tool builders & distributors</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600">✓</span>
                    <span>Metal fabricators & stamping companies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600">✓</span>
                    <span>Industrial automation suppliers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600">✓</span>
                    <span>Packaging machinery manufacturers</span>
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
              B2B eCommerce Services for Rockford Manufacturers
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-emerald-600">
                  Shopify for Manufacturers
                </h3>
                <p className="text-gray-700 mb-4">
                  Shopify Plus implementation for Rockford manufacturers, with custom B2B features for aerospace compliance and industrial distribution.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• AS9100 compliance features</li>
                  <li>• Custom quoting systems</li>
                  <li>• CAD file management</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-emerald-600">
                  Magento B2B Solutions
                </h3>
                <p className="text-gray-700 mb-4">
                  Complex Magento implementations for Rockford's industrial suppliers requiring advanced configuration and pricing tools.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Product configurators</li>
                  <li>• Volume pricing matrices</li>
                  <li>• Distributor portals</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-emerald-600">
                  Digital Marketing Strategy
                </h3>
                <p className="text-gray-700 mb-4">
                  SEO and PPC strategies tailored for Rockford manufacturers targeting national and international B2B markets.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Industrial SEO optimization</li>
                  <li>• LinkedIn B2B campaigns</li>
                  <li>• Trade publication presence</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">
              Rockford Manufacturing Success Stories
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-emerald-50 p-6 rounded-lg">
                <div className="text-3xl font-bold text-emerald-600 mb-2">38%</div>
                <div className="text-lg font-semibold mb-2">Revenue Growth</div>
                <p className="text-gray-600">
                  Aerospace fastener manufacturer increased online B2B sales by 38% in first year
                </p>
              </div>
              <div className="bg-emerald-50 p-6 rounded-lg">
                <div className="text-3xl font-bold text-emerald-600 mb-2">52%</div>
                <div className="text-lg font-semibold mb-2">Lead Generation</div>
                <p className="text-gray-600">
                  Machine tool distributor improved qualified lead generation by 52% through digital optimization
                </p>
              </div>
              <div className="bg-emerald-50 p-6 rounded-lg">
                <div className="text-3xl font-bold text-emerald-600 mb-2">4x</div>
                <div className="text-lg font-semibold mb-2">Order Efficiency</div>
                <p className="text-gray-600">
                  Metal fabricator quadrupled order processing efficiency with B2B portal implementation
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-emerald-600 to-emerald-700 text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Modernize Your Rockford Manufacturing Business?
            </h2>
            <p className="text-xl mb-8">
              Join successful Rockford manufacturers who've transformed their B2B sales with our proven eCommerce strategies.
            </p>
            <BookingLink
              type="discovery"
              className="inline-block bg-white text-emerald-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition text-lg font-semibold"
            >
              Get Your Free Rockford Consultation
            </BookingLink>
            <p className="mt-4 text-emerald-100">
              Serving Rockford, Loves Park, and all of Northern Illinois
            </p>
          </div>
        </section>
      </main>

      <NextFooter />
    </>
  )
}