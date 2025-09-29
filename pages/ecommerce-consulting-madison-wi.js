import Head from 'next/head'
import Link from 'next/link'
import Navbar from '../src/components/Navbar'
import NextFooter from '../src/components/NextFooter'
import { BookingLink } from '../src/components/ProtectedContact'
import { motion } from 'framer-motion'

export default function MadisonEcommercePage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Forgewise - B2B eCommerce Consulting Madison",
    "description": "Expert B2B eCommerce consultant in Madison helping healthcare, biotech, and university-affiliated companies grow revenue 20-40% through Shopify, Magento, and digital transformation. Serving Madison, Dane County, and south-central Wisconsin.",
    "url": "https://forgewise.io/ecommerce-consulting-madison-wi/",
    "telephone": "",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Madison",
      "addressRegion": "WI",
      "addressCountry": "US"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Madison",
        "containedInPlace": {
          "@type": "State",
          "name": "Wisconsin"
        }
      },
      {
        "@type": "Place",
        "name": "Dane County"
      },
      {
        "@type": "Place",
        "name": "Middleton"
      },
      {
        "@type": "Place",
        "name": "Sun Prairie"
      },
      {
        "@type": "Place",
        "name": "University Research Park"
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
        <title>B2B eCommerce Consultant Madison, WI | Shopify & Magento Expert | Forgewise</title>
        <meta name="description" content="Madison's trusted B2B eCommerce consultant helping healthcare, biotech, and university companies grow revenue 20-40%. Expert Shopify and Magento consulting, fractional CMO services for Dane County." />
        <meta property="og:title" content="B2B eCommerce Consultant Madison | Forgewise" />
        <meta property="og:description" content="Madison B2B eCommerce consulting for healthcare and biotech companies. Proven revenue growth through Shopify, Magento, and strategic digital transformation." />
        <meta property="og:url" content="https://forgewise.io/ecommerce-consulting-madison-wi/" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://forgewise.io/ecommerce-consulting-madison-wi/" />
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
                B2B eCommerce Consultant in Madison
              </h1>
              <p className="text-xl md:text-2xl mb-4 text-emerald-300">
                Helping Madison healthcare and biotech companies grow revenue 20-40% through proven eCommerce strategies
              </p>
              <p className="text-lg mb-8 text-gray-300">
                From University Research Park to downtown Madison, we partner with innovative healthcare and biotech companies to transform their digital commerce operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <BookingLink
                  type="discovery"
                  className="inline-block bg-emerald-600 text-white px-8 py-4 rounded-lg hover:bg-emerald-700 transition text-lg font-semibold text-center"
                >
                  Schedule Free Madison Consultation
                </BookingLink>
                <Link href="/results/" className="inline-block bg-white text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-100 transition text-lg font-semibold text-center">
                  View Madison Case Studies
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Local Expertise Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">
              Madison B2B eCommerce Expertise
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-emerald-600">
                  Understanding Madison's Innovation Economy
                </h3>
                <p className="text-gray-700 mb-4">
                  Madison's thriving healthcare, biotech, and university-affiliated sectors require sophisticated eCommerce solutions. From research companies in University Research Park to healthcare technology firms in Middleton, we understand the unique B2B challenges facing Wisconsin's capital city.
                </p>
                <p className="text-gray-700">
                  Whether you're a biotech company serving pharmaceutical clients or a medical device manufacturer expanding nationwide, we deliver eCommerce consulting services tailored to Madison's research-driven business environment and regulatory requirements.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-emerald-600">
                  Local Industry Focus
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600">✓</span>
                    <span>Biotech companies in University Research Park</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600">✓</span>
                    <span>Healthcare technology firms in Middleton corridor</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600">✓</span>
                    <span>Medical device manufacturers in Sun Prairie</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600">✓</span>
                    <span>University-affiliated research companies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600">✓</span>
                    <span>Government contractors serving state agencies</span>
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
              eCommerce Consulting Services for Madison Businesses
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-emerald-600">
                  Shopify Expert Madison
                </h3>
                <p className="text-gray-700 mb-4">
                  As a certified Shopify consultant in Madison, we help healthcare and biotech companies leverage Shopify Plus for research equipment sales, laboratory supplies, and B2B scientific instruments.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Scientific equipment B2B portals</li>
                  <li>• Research institution pricing</li>
                  <li>• University procurement integration</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-emerald-600">
                  Magento Consultant Madison
                </h3>
                <p className="text-gray-700 mb-4">
                  Expert Magento consulting for complex healthcare and biotech B2B operations. We optimize Magento 2 for regulatory compliance, research documentation, and complex product catalogs.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• FDA and research compliance</li>
                  <li>• Complex scientific catalogs</li>
                  <li>• Grant-based pricing structures</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-emerald-600">
                  Fractional CMO Madison
                </h3>
                <p className="text-gray-700 mb-4">
                  Fractional CMO services for Madison's research-driven companies looking to scale beyond university partnerships and enter commercial healthcare markets.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Healthcare marketing compliance</li>
                  <li>• University partnership strategies</li>
                  <li>• Dane County market development</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Local Process Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">
              How We Help Madison B2B Companies Grow
            </h2>
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-emerald-600 text-white rounded-lg flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Initial Madison Consultation</h3>
                  <p className="text-gray-700">
                    We meet with you at your Madison facility or virtually to understand your operation, whether you're developing biotech solutions or serving healthcare institutions across Wisconsin.
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
                    We develop a customized eCommerce strategy accounting for research requirements, healthcare regulations, and growth goals for expanding beyond the university and state government markets.
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
                    Execute the strategy with focus on regulatory compliance, research documentation, and leveraging Madison's position as Wisconsin's innovation capital.
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
              Frequently Asked Questions - Madison eCommerce Consulting
            </h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">
                  How much does eCommerce consulting cost in Madison?
                </h3>
                <p className="text-gray-700">
                  Our Madison B2B eCommerce consulting services typically range from $5,000-$15,000 per month depending on scope. We understand the unique needs of healthcare and biotech companies and offer flexible engagement models.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">
                  Do you work with biotech companies in Madison?
                </h3>
                <p className="text-gray-700">
                  Yes, we specialize in working with biotech, healthcare, and research companies throughout Dane County. We understand regulatory compliance, research documentation requirements, and university partnership dynamics.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">
                  What's the best eCommerce platform for Madison research companies?
                </h3>
                <p className="text-gray-700">
                  For Madison research and biotech companies, we typically recommend Magento 2 Commerce for complex regulatory requirements or Shopify Plus for companies serving university and research markets with simpler needs.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">
                  Can you integrate with university procurement systems?
                </h3>
                <p className="text-gray-700">
                  Absolutely. We regularly integrate eCommerce platforms with university procurement systems, research grant management, and government contracting platforms commonly used by Madison's research-based companies.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-emerald-600 to-emerald-700 text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Transform Your Madison B2B Business?
            </h2>
            <p className="text-xl mb-8">
              Join other successful Madison healthcare and biotech companies who've grown revenue 20-40% with our eCommerce consulting.
            </p>
            <BookingLink
              type="discovery"
              className="inline-block bg-white text-emerald-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition text-lg font-semibold"
            >
              Schedule Your Free Madison Consultation
            </BookingLink>
            <p className="mt-4 text-emerald-100">
              Serving Madison, Middleton, Sun Prairie, and all of Dane County
            </p>
          </div>
        </section>
      </main>

      <NextFooter />
    </>
  )
}