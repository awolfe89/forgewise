import Head from 'next/head'
import Link from 'next/link'
import Navbar from '../src/components/Navbar'
import NextFooter from '../src/components/NextFooter'
import { motion } from 'framer-motion'

export default function SitemapPage() {
  return (
    <>
      <Head>
        <title>Sitemap | Forgewise B2B eCommerce Consulting</title>
        <meta name="description" content="Complete sitemap for Forgewise. Find all pages including B2B eCommerce consulting services, city locations, insights, and resources." />
        <meta property="og:title" content="Sitemap | Forgewise" />
        <meta property="og:description" content="Navigate all Forgewise pages and resources for B2B eCommerce consulting." />
        <meta property="og:url" content="https://forgewise.io/sitemap/" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://forgewise.io/sitemap/" />
      </Head>

      <Navbar />

      <main className="min-h-screen bg-gray-50">
        {/* Header */}
        <section className="py-16 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Sitemap</h1>
              <p className="text-xl text-emerald-300">
                Complete directory of all Forgewise pages and resources
              </p>
            </motion.div>
          </div>
        </section>

        {/* Sitemap Content */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

              {/* Main Pages */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-bold text-gray-900 mb-4 border-b pb-2">Main Pages</h2>
                <ul className="space-y-2">
                  <li>
                    <Link href="/" className="text-blue-600 hover:text-blue-800 hover:underline">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/about/" className="text-blue-600 hover:text-blue-800 hover:underline">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact/" className="text-blue-600 hover:text-blue-800 hover:underline">
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link href="/results/" className="text-blue-600 hover:text-blue-800 hover:underline">
                      Case Studies & Results
                    </Link>
                  </li>
                  <li>
                    <Link href="/quick-fixes/" className="text-blue-600 hover:text-blue-800 hover:underline">
                      Quick Fixes
                    </Link>
                  </li>
                  <li>
                    <Link href="/insights/" className="text-blue-600 hover:text-blue-800 hover:underline">
                      All Insights
                    </Link>
                  </li>
                  <li>
                    <Link href="/locations/" className="text-blue-600 hover:text-blue-800 hover:underline">
                      Service Locations
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Insight Articles */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-bold text-gray-900 mb-4 border-b pb-2">Insight Articles</h2>
                <ul className="space-y-2">
                  <li>
                    <Link href="/insights/shopify-speed/" className="text-blue-600 hover:text-blue-800 hover:underline">
                      Shopify Speed Optimization
                    </Link>
                  </li>
                  <li>
                    <Link href="/insights/ppc-cost-optimization/" className="text-blue-600 hover:text-blue-800 hover:underline">
                      PPC Cost Optimization
                    </Link>
                  </li>
                  <li>
                    <Link href="/insights/seo-ux-case-study/" className="text-blue-600 hover:text-blue-800 hover:underline">
                      SEO & UX Case Study
                    </Link>
                  </li>
                  <li>
                    <Link href="/insights/hidden-inventory-costs/" className="text-blue-600 hover:text-blue-800 hover:underline">
                      Hidden Inventory Costs
                    </Link>
                  </li>
                  <li>
                    <Link href="/insights/ai-in-ecommerce/" className="text-blue-600 hover:text-blue-800 hover:underline">
                      AI in eCommerce
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Illinois Locations */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-bold text-gray-900 mb-4 border-b pb-2">Illinois Locations</h2>
                <ul className="space-y-2">
                  <li>
                    <Link href="/ecommerce-consulting-chicago-il/" className="text-blue-600 hover:text-blue-800 hover:underline">
                      Chicago, IL
                    </Link>
                  </li>
                  <li>
                    <Link href="/ecommerce-consulting-rockford-il/" className="text-blue-600 hover:text-blue-800 hover:underline">
                      Rockford, IL
                    </Link>
                  </li>
                  <li>
                    <Link href="/ecommerce-consulting-peoria-il/" className="text-blue-600 hover:text-blue-800 hover:underline">
                      Peoria, IL
                    </Link>
                  </li>
                  <li>
                    <Link href="/ecommerce-consulting-springfield-il/" className="text-blue-600 hover:text-blue-800 hover:underline">
                      Springfield, IL
                    </Link>
                  </li>
                  <li>
                    <Link href="/ecommerce-consulting-naperville-il/" className="text-blue-600 hover:text-blue-800 hover:underline">
                      Naperville, IL
                    </Link>
                  </li>
                  <li>
                    <Link href="/ecommerce-consulting-aurora-il/" className="text-blue-600 hover:text-blue-800 hover:underline">
                      Aurora, IL
                    </Link>
                  </li>
                  <li>
                    <Link href="/ecommerce-consulting-joliet-il/" className="text-blue-600 hover:text-blue-800 hover:underline">
                      Joliet, IL
                    </Link>
                  </li>
                  <li>
                    <Link href="/ecommerce-consulting-elgin-il/" className="text-blue-600 hover:text-blue-800 hover:underline">
                      Elgin, IL
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Wisconsin Locations */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-bold text-gray-900 mb-4 border-b pb-2">Wisconsin Locations</h2>
                <ul className="space-y-2">
                  <li>
                    <Link href="/ecommerce-consulting-milwaukee-wi/" className="text-blue-600 hover:text-blue-800 hover:underline">
                      Milwaukee, WI
                    </Link>
                  </li>
                  <li>
                    <Link href="/ecommerce-consulting-madison-wi/" className="text-blue-600 hover:text-blue-800 hover:underline">
                      Madison, WI
                    </Link>
                  </li>
                  <li>
                    <Link href="/ecommerce-consulting-green-bay-wi/" className="text-blue-600 hover:text-blue-800 hover:underline">
                      Green Bay, WI
                    </Link>
                  </li>
                  <li>
                    <Link href="/ecommerce-consulting-kenosha-wi/" className="text-blue-600 hover:text-blue-800 hover:underline">
                      Kenosha, WI
                    </Link>
                  </li>
                  <li>
                    <Link href="/ecommerce-consulting-racine-wi/" className="text-blue-600 hover:text-blue-800 hover:underline">
                      Racine, WI
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Iowa Locations */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-bold text-gray-900 mb-4 border-b pb-2">Iowa Locations</h2>
                <ul className="space-y-2">
                  <li>
                    <Link href="/ecommerce-consulting-des-moines-ia/" className="text-blue-600 hover:text-blue-800 hover:underline">
                      Des Moines, IA
                    </Link>
                  </li>
                  <li>
                    <Link href="/ecommerce-consulting-cedar-rapids-ia/" className="text-blue-600 hover:text-blue-800 hover:underline">
                      Cedar Rapids, IA
                    </Link>
                  </li>
                  <li>
                    <Link href="/ecommerce-consulting-davenport-ia/" className="text-blue-600 hover:text-blue-800 hover:underline">
                      Davenport, IA
                    </Link>
                  </li>
                  <li>
                    <Link href="/ecommerce-consulting-sioux-city-ia/" className="text-blue-600 hover:text-blue-800 hover:underline">
                      Sioux City, IA
                    </Link>
                  </li>
                  <li>
                    <Link href="/ecommerce-consulting-waterloo-ia/" className="text-blue-600 hover:text-blue-800 hover:underline">
                      Waterloo, IA
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Legal Pages */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-bold text-gray-900 mb-4 border-b pb-2">Legal & Policies</h2>
                <ul className="space-y-2">
                  <li>
                    <Link href="/privacy-policy/" className="text-blue-600 hover:text-blue-800 hover:underline">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms-of-service/" className="text-blue-600 hover:text-blue-800 hover:underline">
                      Terms of Service
                    </Link>
                  </li>
                  <li>
                    <Link href="/accessibility/" className="text-blue-600 hover:text-blue-800 hover:underline">
                      Accessibility Statement
                    </Link>
                  </li>
                </ul>
              </div>

            </div>

            {/* XML Sitemap Link */}
            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-2">For search engines:</p>
              <a
                href="/sitemap.xml"
                className="text-blue-600 hover:text-blue-800 hover:underline font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                View XML Sitemap
              </a>
            </div>
          </div>
        </section>
      </main>

      <NextFooter />
    </>
  )
}