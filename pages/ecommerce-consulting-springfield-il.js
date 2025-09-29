import Head from 'next/head'
import Link from 'next/link'
import Navbar from '../src/components/Navbar'
import NextFooter from '../src/components/NextFooter'
import { BookingLink } from '../src/components/ProtectedContact'
import { motion } from 'framer-motion'

export default function SpringfieldEcommercePage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Forgewise - B2B eCommerce Consulting Springfield",
    "description": "Springfield B2B eCommerce consultant helping government contractors, healthcare suppliers, and agricultural businesses achieve 20-40% revenue growth through digital transformation.",
    "url": "https://forgewise.io/ecommerce-consulting-springfield-il/",
    "telephone": "",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Springfield",
      "addressRegion": "IL",
      "addressCountry": "US"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Springfield",
        "containedInPlace": {
          "@type": "State",
          "name": "Illinois"
        }
      },
      {
        "@type": "City",
        "name": "Chatham"
      },
      {
        "@type": "City",
        "name": "Rochester"
      },
      {
        "@type": "City",
        "name": "Sherman"
      },
      {
        "@type": "Place",
        "name": "Sangamon County"
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
        <title>B2B eCommerce Consultant Springfield, IL | Government & Healthcare Expert | Forgewise</title>
        <meta name="description" content="Springfield's B2B eCommerce consultant specializing in government contractors, healthcare suppliers, and agricultural businesses. Expert Shopify and Magento consulting for Central Illinois." />
        <meta property="og:title" content="B2B eCommerce Consultant Springfield | Forgewise" />
        <meta property="og:description" content="Helping Springfield government contractors and healthcare suppliers transform their B2B sales through proven digital commerce strategies." />
        <meta property="og:url" content="https://forgewise.io/ecommerce-consulting-springfield-il/" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://forgewise.io/ecommerce-consulting-springfield-il/" />
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
                B2B eCommerce Consultant in Springfield
              </h1>
              <p className="text-xl md:text-2xl mb-4 text-emerald-300">
                Empowering Springfield's government contractors and healthcare suppliers with digital commerce excellence
              </p>
              <p className="text-lg mb-8 text-gray-300">
                From state government contractors near the Capitol Complex to healthcare suppliers serving Memorial Medical Center and St. John's Hospital, we help Springfield B2B companies modernize their online sales channels.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <BookingLink
                  type="discovery"
                  className="inline-block bg-emerald-600 text-white px-8 py-4 rounded-lg hover:bg-emerald-700 transition text-lg font-semibold text-center"
                >
                  Schedule Free Springfield Consultation
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
              Springfield's Government & Healthcare B2B Specialist
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-emerald-600">
                  Understanding Springfield's Unique Market
                </h3>
                <p className="text-gray-700 mb-4">
                  As Illinois' capital city, Springfield hosts a unique mix of government contractors, healthcare systems, and agricultural businesses. From suppliers working with state agencies downtown to medical device companies near the SIU School of Medicine, we understand the specific compliance and procurement requirements of Springfield's B2B landscape.
                </p>
                <p className="text-gray-700">
                  Whether you're a government contractor near the Stratton Building, a healthcare supplier in the Medical District, or an agricultural business along Interstate 72, we deliver eCommerce solutions that meet stringent government and healthcare procurement standards.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-emerald-600">
                  Industries We Serve in Springfield
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600">✓</span>
                    <span>Government contractors & procurement vendors</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600">✓</span>
                    <span>Healthcare equipment & medical suppliers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600">✓</span>
                    <span>Agricultural equipment dealers near Sangamon County</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600">✓</span>
                    <span>Office furniture & supplies for state agencies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600">✓</span>
                    <span>Technology services & IT contractors</span>
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
              eCommerce Solutions for Springfield B2B Companies
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-emerald-600">
                  Government Procurement Portals
                </h3>
                <p className="text-gray-700 mb-4">
                  Specialized B2B platforms meeting state procurement requirements, GSA schedules, and government compliance standards.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• State contract compliance</li>
                  <li>• Procurement card processing</li>
                  <li>• RFQ/RFP integration</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-emerald-600">
                  Healthcare B2B Solutions
                </h3>
                <p className="text-gray-700 mb-4">
                  HIPAA-compliant eCommerce platforms for medical suppliers serving Springfield's healthcare networks.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Medical device catalogs</li>
                  <li>• Hospital procurement systems</li>
                  <li>• GPO contract management</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-emerald-600">
                  Digital Marketing for B2B
                </h3>
                <p className="text-gray-700 mb-4">
                  Targeted strategies for reaching government buyers, healthcare procurement, and Central Illinois businesses.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Government contract SEO</li>
                  <li>• Healthcare marketing</li>
                  <li>• Local B2B lead generation</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">
              How We Help Springfield Businesses Win Online
            </h2>
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-emerald-600 text-white rounded-lg flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Compliance & Requirements Analysis</h3>
                  <p className="text-gray-700">
                    We understand Springfield's unique requirements, from state procurement regulations to healthcare compliance standards, ensuring your eCommerce platform meets all necessary guidelines.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-emerald-600 text-white rounded-lg flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Strategic Platform Development</h3>
                  <p className="text-gray-700">
                    Build robust B2B platforms that handle government purchase orders, healthcare procurement workflows, and complex approval chains common in Springfield's institutional buyers.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-emerald-600 text-white rounded-lg flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Local Market Integration</h3>
                  <p className="text-gray-700">
                    Connect with Springfield's business ecosystem, from integration with state procurement systems to partnerships with local healthcare networks and agricultural cooperatives.
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
              Questions from Springfield B2B Companies
            </h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">
                  Can you help with Illinois state procurement requirements?
                </h3>
                <p className="text-gray-700">
                  Yes, we specialize in creating B2B platforms that meet Illinois procurement standards, including CMS compliance, state contract management, and integration with Illinois procurement systems.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">
                  Do you work with Springfield healthcare organizations?
                </h3>
                <p className="text-gray-700">
                  Absolutely. We have experience with Memorial Health System, Hospital Sisters Health System, and other Springfield healthcare networks, understanding their specific vendor requirements and procurement processes.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">
                  What's the typical investment for Springfield B2B eCommerce?
                </h3>
                <p className="text-gray-700">
                  Our Springfield B2B consulting typically ranges from $5,000-$15,000 monthly, with specialized government and healthcare projects sometimes requiring custom scoping based on compliance needs.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">
                  Do you serve all of Central Illinois?
                </h3>
                <p className="text-gray-700">
                  Yes, while based in Springfield, we serve all of Central Illinois including Decatur, Bloomington-Normal, Jacksonville, and surrounding communities in Sangamon, Morgan, and Christian counties.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-emerald-600 to-emerald-700 text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Win More Springfield B2B Contracts?
            </h2>
            <p className="text-xl mb-8">
              Join successful Springfield government contractors and healthcare suppliers who've transformed their digital presence.
            </p>
            <BookingLink
              type="discovery"
              className="inline-block bg-white text-emerald-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition text-lg font-semibold"
            >
              Get Your Free Springfield Consultation
            </BookingLink>
            <p className="mt-4 text-emerald-100">
              Serving Springfield and all of Central Illinois
            </p>
          </div>
        </section>
      </main>

      <NextFooter />
    </>
  )
}