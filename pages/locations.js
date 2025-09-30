import Head from 'next/head'
import Link from 'next/link'
import Navbar from '../src/components/Navbar'
import NextFooter from '../src/components/NextFooter'
import { motion } from 'framer-motion'
import { BookingLink } from '../src/components/ProtectedContact'

export default function LocationsPage() {
  const locations = {
    Illinois: [
      {
        city: "Chicago",
        url: "/ecommerce-consulting-chicago-il/",
        description: "B2B eCommerce consulting for Chicago manufacturers and distributors",
        population: "2.7M",
        industries: "Manufacturing, Distribution, Food & Beverage"
      },
      {
        city: "Rockford",
        url: "/ecommerce-consulting-rockford-il/",
        description: "Aerospace and manufacturing eCommerce solutions",
        population: "150K",
        industries: "Aerospace, Machine Tools, Metal Fabrication"
      },
      {
        city: "Peoria",
        url: "/ecommerce-consulting-peoria-il/",
        description: "Heavy equipment and industrial B2B consulting",
        population: "115K",
        industries: "Heavy Equipment, Construction, Mining"
      },
      {
        city: "Springfield",
        url: "/ecommerce-consulting-springfield-il/",
        description: "Central Illinois B2B digital transformation",
        population: "115K",
        industries: "Healthcare, Agriculture, Government Contractors"
      },
      {
        city: "Naperville",
        url: "/ecommerce-consulting-naperville-il/",
        description: "West suburban Chicago B2B eCommerce expertise",
        population: "150K",
        industries: "Technology, Healthcare, Professional Services"
      }
    ],
    Wisconsin: [
      {
        city: "Milwaukee",
        url: "/ecommerce-consulting-milwaukee-wi/",
        description: "Manufacturing and industrial B2B solutions",
        population: "600K",
        industries: "Manufacturing, Food Processing, Industrial Automation"
      },
      {
        city: "Madison",
        url: "/ecommerce-consulting-madison-wi/",
        description: "Healthcare and biotech B2B eCommerce",
        population: "270K",
        industries: "Healthcare, Biotech, Agricultural Tech"
      },
      {
        city: "Green Bay",
        url: "/ecommerce-consulting-green-bay-wi/",
        description: "Paper, packaging, and logistics solutions",
        population: "105K",
        industries: "Paper & Packaging, Food Processing, Logistics"
      },
      {
        city: "Kenosha",
        url: "/ecommerce-consulting-kenosha-wi/",
        description: "Manufacturing and distribution consulting",
        population: "100K",
        industries: "Manufacturing, Distribution, Metal Products"
      },
      {
        city: "Racine",
        url: "/ecommerce-consulting-racine-wi/",
        description: "Industrial and consumer goods B2B",
        population: "77K",
        industries: "Industrial Equipment, Consumer Goods, Manufacturing"
      }
    ],
    Iowa: [
      {
        city: "Des Moines",
        url: "/ecommerce-consulting-des-moines-ia/",
        description: "Agricultural and insurance B2B solutions",
        population: "215K",
        industries: "Agriculture, Insurance, Financial Services"
      },
      {
        city: "Cedar Rapids",
        url: "/ecommerce-consulting-cedar-rapids-ia/",
        description: "Manufacturing and food processing expertise",
        population: "135K",
        industries: "Food Processing, Manufacturing, Agriculture"
      },
      {
        city: "Davenport",
        url: "/ecommerce-consulting-davenport-ia/",
        description: "Quad Cities industrial B2B consulting",
        population: "102K",
        industries: "Manufacturing, Logistics, Agricultural Equipment"
      },
      {
        city: "Sioux City",
        url: "/ecommerce-consulting-sioux-city-ia/",
        description: "Agricultural distribution and processing",
        population: "83K",
        industries: "Agriculture, Food Processing, Distribution"
      },
      {
        city: "Waterloo",
        url: "/ecommerce-consulting-waterloo-ia/",
        description: "Manufacturing and agricultural equipment",
        population: "68K",
        industries: "Agricultural Equipment, Manufacturing, Meat Processing"
      }
    ]
  }

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Forgewise - B2B eCommerce Consulting",
    "description": "B2B eCommerce consulting services across Illinois, Wisconsin, and Iowa. Expert Shopify and Magento consulting for manufacturers and distributors.",
    "url": "https://forgewise.io/locations/",
    "areaServed": [
      {
        "@type": "State",
        "name": "Illinois"
      },
      {
        "@type": "State",
        "name": "Wisconsin"
      },
      {
        "@type": "State",
        "name": "Iowa"
      }
    ],
    "priceRange": "$$",
    "image": "https://forgewise.io/forgewise_logo_1.png"
  }

  return (
    <>
      <Head>
        <title>B2B eCommerce Consulting Locations | Illinois, Wisconsin, Iowa | Forgewise</title>
        <meta name="description" content="B2B eCommerce consulting services across the Midwest. Serving manufacturers and distributors in Chicago, Milwaukee, Des Moines, and 12+ cities across IL, WI, and IA." />
        <meta property="og:title" content="B2B eCommerce Consulting Locations | Forgewise" />
        <meta property="og:description" content="Find local B2B eCommerce consulting in your city. Serving Illinois, Wisconsin, and Iowa manufacturers and distributors." />
        <meta property="og:url" content="https://forgewise.io/locations/" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://forgewise.io/locations/" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </Head>

      <Navbar />

      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                B2B eCommerce Consulting Across the Midwest
              </h1>
              <p className="text-xl md:text-2xl mb-4 text-emerald-300 max-w-3xl mx-auto">
                Local expertise, national results. Serving manufacturers and distributors in 15+ cities across Illinois, Wisconsin, and Iowa.
              </p>
              <p className="text-lg mb-8 text-gray-300 max-w-2xl mx-auto">
                Find specialized B2B eCommerce consulting in your city with deep understanding of your local market and industry.
              </p>
              <BookingLink
                type="discovery"
                className="inline-block bg-emerald-600 text-white px-8 py-4 rounded-lg hover:bg-emerald-700 transition text-lg font-semibold"
              >
                Schedule Free Consultation
              </BookingLink>
            </motion.div>
          </div>
        </section>

        {/* Illinois Locations */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <span className="text-4xl">🏢</span>
              Illinois B2B eCommerce Consulting
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Serving Chicago and major Illinois cities with specialized manufacturing and distribution expertise.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {locations.Illinois.map((location) => (
                <Link key={location.city} href={location.url}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition cursor-pointer h-full"
                  >
                    <h3 className="text-xl font-semibold text-emerald-600 hover:text-emerald-700 mb-2">
                      {location.city}, IL
                    </h3>
                    <p className="text-gray-700 mb-3">{location.description}</p>
                    <div className="space-y-1 text-sm">
                      <p className="text-gray-600">
                        <span className="font-semibold">Population:</span> {location.population}
                      </p>
                      <p className="text-gray-600">
                        <span className="font-semibold">Industries:</span> {location.industries}
                      </p>
                    </div>
                    <span className="inline-block mt-4 text-emerald-600 hover:text-emerald-700 font-medium text-sm">
                      Learn More →
                    </span>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Wisconsin Locations */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <span className="text-4xl">🧀</span>
              Wisconsin B2B eCommerce Consulting
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Supporting Wisconsin's manufacturing heritage with modern B2B digital solutions.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {locations.Wisconsin.map((location) => (
                <Link key={location.city} href={location.url}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-white rounded-lg p-6 hover:shadow-lg transition cursor-pointer h-full"
                  >
                    <h3 className="text-xl font-semibold text-emerald-600 hover:text-emerald-700 mb-2">
                      {location.city}, WI
                    </h3>
                    <p className="text-gray-700 mb-3">{location.description}</p>
                    <div className="space-y-1 text-sm">
                      <p className="text-gray-600">
                        <span className="font-semibold">Population:</span> {location.population}
                      </p>
                      <p className="text-gray-600">
                        <span className="font-semibold">Industries:</span> {location.industries}
                      </p>
                    </div>
                    <span className="inline-block mt-4 text-emerald-600 hover:text-emerald-700 font-medium text-sm">
                      Learn More →
                    </span>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Iowa Locations */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <span className="text-4xl">🌽</span>
              Iowa B2B eCommerce Consulting
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Empowering Iowa's agricultural and manufacturing sectors with digital commerce expertise.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {locations.Iowa.map((location) => (
                <Link key={location.city} href={location.url}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition cursor-pointer h-full"
                  >
                    <h3 className="text-xl font-semibold text-emerald-600 hover:text-emerald-700 mb-2">
                      {location.city}, IA
                    </h3>
                    <p className="text-gray-700 mb-3">{location.description}</p>
                    <div className="space-y-1 text-sm">
                      <p className="text-gray-600">
                        <span className="font-semibold">Population:</span> {location.population}
                      </p>
                      <p className="text-gray-600">
                        <span className="font-semibold">Industries:</span> {location.industries}
                      </p>
                    </div>
                    <span className="inline-block mt-4 text-emerald-600 hover:text-emerald-700 font-medium text-sm">
                      Learn More →
                    </span>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              B2B eCommerce Services Available in All Locations
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-4">🛒</div>
                <h3 className="font-semibold mb-2">Shopify Plus</h3>
                <p className="text-gray-600 text-sm">
                  B2B wholesale channels, custom pricing, dealer portals
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🔧</div>
                <h3 className="font-semibold mb-2">Magento B2B</h3>
                <p className="text-gray-600 text-sm">
                  Complex catalogs, ERP integration, advanced B2B features
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="font-semibold mb-2">Fractional CMO</h3>
                <p className="text-gray-600 text-sm">
                  Strategic leadership, marketing automation, growth planning
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="font-semibold mb-2">SEO & Marketing</h3>
                <p className="text-gray-600 text-sm">
                  Local SEO, PPC campaigns, content marketing, lead generation
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-emerald-600 to-emerald-700 text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Transform Your B2B Business?
            </h2>
            <p className="text-xl mb-8">
              Get local expertise with proven results. Schedule a free consultation for your city today.
            </p>
            <BookingLink
              type="discovery"
              className="inline-block bg-white text-emerald-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition text-lg font-semibold"
            >
              Schedule Free Consultation
            </BookingLink>
            <p className="mt-6 text-emerald-100">
              📍 Serving Illinois, Wisconsin, and Iowa since 2013
            </p>
          </div>
        </section>
      </main>

      <NextFooter />
    </>
  )
}