import NextSEO from '../src/components/NextSEO';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { BookingLink, ProtectedPhone } from '../src/components/ProtectedContact';
import contactConfig from '../src/config/contact';

export default function ChicagoB2BConsultant() {
  const seoData = {
    title: 'B2B eCommerce Consultant Chicago IL | Local Expert | Forgewise',
    description: 'Chicago-based B2B eCommerce consultant serving Illinois businesses. 11+ years transforming traditional companies with Magento, Shopify, and ERP integration.',
    canonical: 'https://forgewise.io/chicago-b2b-ecommerce-consultant'
  };

  const localSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://forgewise.io/chicago-b2b-ecommerce-consultant",
    "name": "Forgewise - B2B eCommerce Consultant Chicago",
    "alternateName": "Chicago B2B Digital Transformation Expert",
    "description": "B2B eCommerce consulting services for Chicago and Illinois businesses. Specializing in Magento, Shopify Plus, and ERP integration.",
    "url": "https://forgewise.io/chicago-b2b-ecommerce-consultant",
    "telephone": "+1-872-248-9710",
    "email": "admin@forgewise.io",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Chicago",
      "addressRegion": "IL",
      "postalCode": "60601",
      "addressCountry": "US",
      "streetAddress": "Chicago, IL Metro Area"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 41.8781,
      "longitude": -87.6298
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Chicago"
      },
      {
        "@type": "City",
        "name": "Aurora"
      },
      {
        "@type": "City",
        "name": "Rockford"
      },
      {
        "@type": "City",
        "name": "Joliet"
      },
      {
        "@type": "City",
        "name": "Naperville"
      },
      {
        "@type": "City",
        "name": "Springfield"
      },
      {
        "@type": "City",
        "name": "Peoria"
      },
      {
        "@type": "City",
        "name": "Elgin"
      },
      {
        "@type": "State",
        "name": "Illinois"
      }
    ],
    "priceRange": "$$-$$$",
    "openingHours": "Mo-Fr 09:00-17:00 CST",
    "founder": {
      "@type": "Person",
      "name": "Allan Wolfe",
      "jobTitle": "B2B eCommerce Consultant"
    }
  };

  return (
    <>
      <NextSEO {...seoData} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }}
      />

      <div className="min-h-screen pt-20">
        {/* Hero Section with Local Focus */}
        <section className="relative py-20 bg-gradient-to-br from-blue-800 to-emerald-700 text-white">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                B2B eCommerce Consultant in Chicago, Illinois
              </h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Local expertise, national results. Helping Chicago-area B2B and traditional businesses
                transform into digital leaders since 2013.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="text-4xl font-bold text-emerald-300">50+</div>
                <div className="text-blue-100">Chicago Area Clients</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-emerald-300">11+ Years</div>
                <div className="text-blue-100">Serving Illinois</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-emerald-300">$25M+</div>
                <div className="text-blue-100">Revenue Generated</div>
              </div>
            </div>
          </div>
        </section>

        {/* Local Service Areas */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-4">Serving Chicago & All of Illinois</h2>
            <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              On-site consultations available throughout Chicagoland. Remote support for all Illinois businesses.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-4 text-blue-900">Chicago Metro</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Downtown Chicago / The Loop</li>
                  <li>• North Side & Lincoln Park</li>
                  <li>• West Loop & Fulton Market</li>
                  <li>• South Side & Hyde Park</li>
                  <li>• O'Hare & Rosemont Business District</li>
                </ul>
              </div>

              <div className="bg-emerald-50 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-4 text-emerald-900">Chicago Suburbs</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Naperville & Aurora</li>
                  <li>• Schaumburg & Hoffman Estates</li>
                  <li>• Oak Brook & Downers Grove</li>
                  <li>• Skokie & Evanston</li>
                  <li>• Joliet & Bolingbrook</li>
                </ul>
              </div>

              <div className="bg-amber-50 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-4 text-amber-900">Greater Illinois</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Rockford & Northern Illinois</li>
                  <li>• Springfield & Central Illinois</li>
                  <li>• Peoria & Bloomington</li>
                  <li>• Quad Cities Area</li>
                  <li>• Southern Illinois & Metro East</li>
                </ul>
              </div>
            </div>

            <div className="mt-12 p-6 bg-gray-50 rounded-lg">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div>
                  <h3 className="font-bold text-lg mb-2">📍 Local Presence, Global Expertise</h3>
                  <p className="text-gray-600">
                    Based in Chicago, serving all of Illinois with on-site visits and remote consultations.
                  </p>
                </div>
                <div className="mt-4 md:mt-0">
                  <div className="font-bold">Call Now: <ProtectedPhone type="link" /></div>
                  <div className="text-gray-600">Mon-Fri 9AM-5PM CST</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Chicago-Specific Services */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-4">B2B eCommerce Services for Chicago Businesses</h2>
            <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              Specialized solutions for Illinois industries and traditional Chicago businesses going digital.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-3xl mb-4">🏭</div>
                <h3 className="font-bold text-lg mb-3">Manufacturing & Distribution</h3>
                <p className="text-gray-600 mb-4">
                  Perfect for Chicago's industrial corridor. B2B portals with dealer logins,
                  territory management, and quote systems.
                </p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>✓ ERP integration (Sage, NetSuite)</li>
                  <li>✓ Custom pricing by customer</li>
                  <li>✓ Bulk order management</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-3xl mb-4">🏢</div>
                <h3 className="font-bold text-lg mb-3">Professional Services</h3>
                <p className="text-gray-600 mb-4">
                  For Loop law firms, consulting agencies, and B2B service providers
                  needing sophisticated online presence.
                </p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>✓ Client portals with secure access</li>
                  <li>✓ Subscription & retainer billing</li>
                  <li>✓ Document management systems</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-3xl mb-4">🚚</div>
                <h3 className="font-bold text-lg mb-3">Wholesale & Supply</h3>
                <p className="text-gray-600 mb-4">
                  Transform your traditional Chicago wholesale business with modern
                  B2B eCommerce capabilities.
                </p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>✓ Real-time inventory from warehouse</li>
                  <li>✓ NET payment terms</li>
                  <li>✓ Sales rep order entry</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-3xl mb-4">🏥</div>
                <h3 className="font-bold text-lg mb-3">Healthcare & Medical</h3>
                <p className="text-gray-600 mb-4">
                  Supporting Chicago's medical district with compliant B2B
                  eCommerce solutions.
                </p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>✓ HIPAA compliant systems</li>
                  <li>✓ Medical supply ordering</li>
                  <li>✓ Approval workflows</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-3xl mb-4">🍕</div>
                <h3 className="font-bold text-lg mb-3">Food & Restaurant Supply</h3>
                <p className="text-gray-600 mb-4">
                  Help Chicago's vibrant restaurant scene with B2B ordering
                  platforms and supplier portals.
                </p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>✓ Restaurant ordering portals</li>
                  <li>✓ Recurring order automation</li>
                  <li>✓ Multi-location management</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-3xl mb-4">🏗️</div>
                <h3 className="font-bold text-lg mb-3">Construction & Building</h3>
                <p className="text-gray-600 mb-4">
                  Digital solutions for Chicago's construction industry and
                  building material suppliers.
                </p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>✓ Project-based ordering</li>
                  <li>✓ Contractor portals</li>
                  <li>✓ Quote & bid systems</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Chicago Success Stories */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Chicago Area Success Stories</h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg">
                <div className="text-blue-600 font-bold mb-2">West Loop Distributor</div>
                <div className="text-3xl font-bold mb-2">+156%</div>
                <p className="text-gray-600">
                  Revenue growth in 18 months after implementing B2B portal with Sage integration.
                </p>
              </div>

              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-6 rounded-lg">
                <div className="text-emerald-600 font-bold mb-2">Schaumburg Manufacturer</div>
                <div className="text-3xl font-bold mb-2">67%</div>
                <p className="text-gray-600">
                  Of orders now online, reducing order processing costs by $200K annually.
                </p>
              </div>

              <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-lg">
                <div className="text-amber-600 font-bold mb-2">Loop Professional Services</div>
                <div className="text-3xl font-bold mb-2">$1.2M</div>
                <p className="text-gray-600">
                  New revenue from automated client portal and subscription management.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Local */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose a Chicago-Based Consultant?</h2>

            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <div>
                <h3 className="font-bold text-xl mb-6 text-blue-900">Local Advantages</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    <div>
                      <strong>Face-to-Face Meetings:</strong> On-site consultations in Chicago and suburbs.
                      Nothing beats in-person strategy sessions.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    <div>
                      <strong>Understand Your Market:</strong> We know Chicago business culture,
                      from Loop corporations to suburban industrials.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    <div>
                      <strong>Local Network:</strong> Connections with Chicago developers,
                      agencies, and service providers.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    <div>
                      <strong>Same Time Zone:</strong> CST availability means real-time support
                      during your business hours.
                    </div>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-xl mb-6 text-blue-900">Our Chicago Expertise</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-3 mt-1">•</span>
                    <div>
                      <strong>11+ years</strong> serving Chicago and Illinois businesses
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-3 mt-1">•</span>
                    <div>
                      <strong>50+ Chicago area projects</strong> completed successfully
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-3 mt-1">•</span>
                    <div>
                      <strong>Industry knowledge</strong> of Chicago's key sectors
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-3 mt-1">•</span>
                    <div>
                      <strong>Trusted by</strong> Chicago businesses from startups to Fortune 500
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section with NAP */}
        <section className="py-20 bg-gradient-to-r from-blue-800 to-emerald-700 text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Chicago Business?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Let's discuss your B2B eCommerce needs. Free consultation for Chicago-area businesses.
            </p>

            <div className="bg-white/10 backdrop-blur p-8 rounded-xl mb-8 max-w-2xl mx-auto">
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div>
                  <h3 className="font-bold mb-3 text-emerald-300">Contact Information</h3>
                  <div className="space-y-2">
                    <div>📍 Chicago, IL Metro Area</div>
                    <div>📞 <ProtectedPhone type="link" /></div>
                    <div>✉️ admin@forgewise.io</div>
                  </div>
                </div>
                <div>
                  <h3 className="font-bold mb-3 text-emerald-300">Business Hours</h3>
                  <div className="space-y-2">
                    <div>Monday - Friday: 9 AM - 5 PM CST</div>
                    <div>On-site visits by appointment</div>
                    <div>Emergency support available</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <BookingLink
                type="discovery"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium bg-white text-blue-800 rounded-lg hover:bg-gray-100 transition-all"
              >
                Schedule Free Chicago Consultation
              </BookingLink>
              <a
                href={`tel:${contactConfig.phoneLink}`}
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-800 transition-all"
              >
                Call Now: {contactConfig.phoneDisplay}
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}