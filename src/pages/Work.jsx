// pages/Work.jsx (now Results)
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FadeIn, StaggerContainer, StaggerItem } from '../components/AnimatedComponents';
import LazyImage from '../components/LazyImage';
import { BookingLink } from '../components/ProtectedContact';
import { useKeyboardClick } from '../utils/useKeyboardClick';
import SchemaMarkup from '../components/SchemaMarkup';
import Grubs from '../assets/grubs.png';
import TriLogo from '../assets/triLogo.png';
import WnLogo from '../assets/wnlogo.png';
import Technimark from '../assets/technimark.png';
import ESD from '../assets/esdguys.png';
import Yo from '../assets/yo.png';

function CaseStudyCard({ 
  title, 
  businessType, 
  businessSize, 
  keyTakeaway,
  problem, 
  solution, 
  results, 
  metrics, 
  testimonial, 
  image, 
  link,
  isInitiallyExpanded = false
}) {
  const [expanded, setExpanded] = useState(isInitiallyExpanded);
  const keyboardProps = useKeyboardClick(() => setExpanded(!expanded));

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden mb-8 cursor-pointer"
      {...keyboardProps}
      aria-expanded={expanded}
    >
      <div className="flex flex-col md:flex-row">
        {image && (
          <div className="md:w-1/3 bg-gray-50 p-6 flex items-center justify-center">
            <LazyImage
              src={image}
              alt={`${title} Logo`}
              className="max-h-32 object-contain"
              placeholder="blur"
            />
          </div>
        )}
        
        <div className={`${image ? 'md:w-2/3' : 'w-full'} p-6`}>
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
              <div className="flex flex-wrap gap-2 text-sm">
                <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full">
                  {businessType}
                </span>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full">
                  {businessSize}
                </span>
              </div>
            </div>
            <span className="text-gray-400">{expanded ? '▲' : '▼'}</span>
          </div>

          {/* Before/After Preview */}
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="bg-red-50 p-4 rounded-lg">
              <h4 className="font-semibold text-red-700 mb-2">🚨 The Challenge</h4>
              <p className="text-sm text-gray-700">{problem.summary}</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-700 mb-2">✅ The Transformation</h4>
              <p className="text-sm text-gray-700">{results.summary}</p>
            </div>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {Object.entries(metrics).map(([key, value]) => (
              <div key={key}>
                <div className="text-xl font-bold text-indigo-700">{value.number}</div>
                <div className="text-xs text-gray-600">{value.label}</div>
              </div>
            ))}
          </div>

          {link && (
            <a 
              href={link} 
              className="inline-block mt-4 text-indigo-600 hover:text-indigo-800 font-medium text-sm"
              onClick={(e) => e.stopPropagation()}
              target="_blank" 
              rel="noopener noreferrer"
            >
              See Live Results →
            </a>
          )}

          {expanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="mt-6 pt-6 border-t border-gray-100"
            >
              <div className="space-y-6">
                {keyTakeaway && (
                  <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                    <h4 className="font-bold text-yellow-800 mb-1">💡 Key Takeaway</h4>
                    <p className="text-gray-700 font-medium">{keyTakeaway}</p>
                  </div>
                )}
                
                <div>
                  <h4 className="font-bold text-red-600 mb-2">THE FULL CHALLENGE</h4>
                  <ul className="space-y-2 text-gray-700">
                    {problem.details.map((detail, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-red-500 mr-2">•</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-indigo-600 mb-2">OUR SOLUTION</h4>
                  <ul className="space-y-2 text-gray-700">
                    {solution.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-indigo-500 mr-2">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-green-600 mb-2">THE RESULTS</h4>
                  <ul className="space-y-2 text-gray-700">
                    {results.details.map((detail, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-green-500 mr-2">★</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>

                {testimonial && (
                  <div className="bg-indigo-50 p-4 rounded-lg">
                    <p className="italic text-gray-700">"{testimonial.quote}"</p>
                    <p className="text-sm text-gray-600 mt-2">— {testimonial.author}</p>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Results() {
  const caseStudies = [
    {
      title: "Wet Noses Grooming",
      businessType: "Mobile Pet Services",
      businessSize: "Local Small Business",
      keyTakeaway: "SEO-first rebuild drove $18K/mo within 6 weeks by capturing 'mobile dog grooming' searches.",
      problem: {
        summary: "Zero online presence, losing customers to competitors",
        details: [
          "Owner was turning away 15-20 customers per week due to no online booking",
          "Competitors dominated Google searches - they were invisible",
          "Relied on word-of-mouth only, limiting growth to 2-3 new clients/month",
          "No way to communicate with customers about appointments or changes"
        ]
      },
      solution: [
        "Built professional website with online booking system",
        "Implemented local SEO strategy targeting 'mobile dog grooming [city]'",
        "Created automated email/SMS appointment reminders",
        "Set up Google Business profile with review automation"
      ],
      results: {
        summary: "Now turning away business due to overwhelming demand",
        details: [
          "Booked solid for 3 months within 6 weeks of launch",
          "Had to hire 2 additional groomers to meet demand",
          "Revenue increased from $3K/month to $18K/month",
          "Now #1 on Google for 'mobile dog grooming' in their area"
        ]
      },
      metrics: {
        revenue: { number: "500%", label: "Revenue Growth" },
        bookings: { number: "40/week", label: "New Bookings" },
        ranking: { number: "#1", label: "Google Ranking" },
        roi: { number: "1,240%", label: "ROI in Year 1" }
      },
      testimonial: {
        quote: "Forgewise literally transformed my business. I went from struggling to having to turn customers away.",
        author: "Jessica, Owner"
      },
      image: WnLogo,
      link: "https://wetnosesgrooming.com/"
    },
    {
      title: "Tri-County Garage Door",
      businessType: "Home Services",
      businessSize: "Family Business (3 employees)",
      keyTakeaway: "Modern rebrand + mobile-first design increased emergency calls from 2/week to 3-4/day.",
      problem: {
        summary: "Website from 2003, losing revenue to competitors",
        details: [
          "Previous 'tech guy' disappeared, left them with broken site",
          "Customers couldn't find contact info - site had wrong phone number for 2 years",
          "Lost emergency calls worth $500-1000 each to competitors daily",
          "Couldn't compete for commercial contracts with outdated image"
        ]
      },
      solution: [
        "Complete rebrand with modern logo and color scheme",
        "Mobile-first website with click-to-call buttons",
        "Emergency service landing pages with fast-loading design",
        "Local SEO optimization for 'garage door repair near me'"
      ],
      results: {
        summary: "4X traffic increase, now dominating local market",
        details: [
          "Emergency calls increased from 2/week to 3-4/day",
          "Average ticket size increased 35% with professional image",
          "Now getting commercial contracts they couldn't bid on before",
          "Son took over digital marketing after we trained him"
        ]
      },
      metrics: {
        traffic: { number: "400%", label: "Traffic Increase" },
        calls: { number: "15-20/week", label: "New Calls" },
        revenue: { number: "+45K/mo", label: "Revenue Gain" },
        conversion: { number: "8.2%", label: "Conversion Rate" }
      },
      testimonial: {
        quote: "We were ready to close. Now my son is taking over a thriving business. Worth every investment.",
        author: "Jim, Owner"
      },
      image: TriLogo,
      link: "https://tri-countydoor.com/"
    },
    {
      title: "GrubsBootsUSA",
      businessType: "Outdoor Retail",
      businessSize: "Small Retailer",
      keyTakeaway: "From 4 visitors/day to 160+ by fixing categories, descriptions, and implementing cart recovery.",
      problem: {
        summary: "4 visitors per day, zero sales for 3 months straight",
        details: [
          "Website looked like it was abandoned - last update showed 2019",
          "Products were miscategorized (rain boots in hunting section)",
          "No product descriptions, just SKU numbers",
          "Owner's wife was ready to shut down the online store"
        ]
      },
      solution: [
        "Redesigned site with lifestyle imagery and clear categories",
        "Wrote compelling product descriptions focused on benefits",
        "Implemented abandoned cart recovery emails",
        "Created seasonal campaign strategy with automated promotions"
      ],
      results: {
        summary: "4,000% traffic increase, 551% sales growth YoY",
        details: [
          "From 4 visitors/day to 160+ daily visitors",
          "First sale within 48 hours of relaunch",
          "Average order value increased from $45 to $127",
          "Ranked #1 for 'waterproof farm boots' nationally"
        ]
      },
      metrics: {
        traffic: { number: "4,000%", label: "Traffic Growth" },
        sales: { number: "551%", label: "Sales Increase" },
        aov: { number: "$127", label: "Avg Order Value" },
        organic: { number: "73%", label: "Organic Traffic" }
      },
      image: Grubs,
      link: "https://grubsbootsusa.com"
    },
    {
      title: "Technimark Inc",
      businessType: "B2B Industrial",
      businessSize: "Mid-size Distributor",
      keyTakeaway: "Smart product organization + B2B features drove $600K additional annual revenue.",
      problem: {
        summary: "Losing revenue to Amazon & competitors",
        details: [
          "8,000 products with no organization - customers couldn't find anything",
          "Sales reps spending 3 hours/day on phone explaining products",
          "Cart abandonment at 84% due to confusing checkout",
          "Losing long-term customers to competitors with better websites"
        ]
      },
      solution: [
        "Created 100+ category taxonomy with smart filters",
        "Built product comparison tool for complex technical products",
        "Integrated ERP system for real-time inventory",
        "Implemented B2B features: quick order, bulk upload, account pricing"
      ],
      results: {
        summary: "200% order increase, $600K additional annual revenue",
        details: [
          "Support calls dropped 65% with better product info",
          "B2B customers now self-serve, freeing up sales team",
          "Reduced cart abandonment from 84% to 62%",
          "Won back 3 major accounts worth $180K/year"
        ]
      },
      metrics: {
        orders: { number: "+200%", label: "Order Volume" },
        revenue: { number: "+35%", label: "Online Revenue" },
        conversion: { number: "+28%", label: "Conversion Rate" },
        support: { number: "-65%", label: "Support Calls" }
      },
      testimonial: {
        quote: "Forgewise understood our complex business and delivered results that exceeded our board's expectations.",
        author: "Mike, CEO"
      },
      image: Technimark,
      link: "https://technimark-inc.com/"
    },
    {
      title: "HVACNet (Younits)",
      businessType: "HVAC Equipment",
      businessSize: "Regional Distributor",
      keyTakeaway: "Zero-downtime Magento migration + speed optimization increased mobile revenue by 216%.",
      problem: {
        summary: "Magento 1 site dying, facing major revenue loss",
        details: [
          "Magento 1 end-of-life approaching, no security updates",
          "Site crashed during peak season, lost significant revenue in one day",
          "Competitors stealing customers with modern sites",
          "Product configurator broken - customers ordering wrong parts"
        ]
      },
      solution: [
        "Managed complex Magento 1 to 2 migration without downtime",
        "Rebuilt product configurator with foolproof selection process",
        "Created equipment bundles to increase average order value",
        "Implemented progressive checkout to reduce abandonment"
      ],
      results: {
        summary: "30% traffic increase, 25% higher checkout completion",
        details: [
          "Zero downtime during migration - no lost sales",
          "Returns dropped 40% with better product selection tools",
          "Mobile sales increased from 12% to 38% of revenue",
          "Page load time improved from 8 seconds to 2.3 seconds"
        ]
      },
      metrics: {
        traffic: { number: "+30%", label: "Organic Traffic" },
        checkout: { number: "+25%", label: "Completion Rate" },
        mobile: { number: "38%", label: "Mobile Revenue" },
        speed: { number: "71%", label: "Faster Load Time" }
      },
      image: Yo,
      link: "https://younits.com/"
    },
    {
      title: "ESDGuys",
      businessType: "Electronics Supplies",
      businessSize: "Small Manufacturer",
      keyTakeaway: "Separate B2C test site generated $120K/year from previously untapped market segment.",
      problem: {
        summary: "Main site too complex, missing micro-market opportunities",
        details: [
          "Parent company site too enterprise-focused for small buyers",
          "Losing revenue in small orders to nimble competitors",
          "Couldn't test new products without affecting main brand",
          "No way to run flash sales or special promotions"
        ]
      },
      solution: [
        "Built separate Shopify site for B2C market testing",
        "Created streamlined checkout for impulse purchases",
        "Implemented flash sale functionality with countdown timers",
        "Set up drop-shipping for test products"
      ],
      results: {
        summary: "New revenue stream worth $120K/year",
        details: [
          "Captured market segment previously ignored",
          "Flash sales generating strong revenue in 48 hours",
          "Test products validated before main site launch",
          "Email list grew to 2,500 engaged buyers"
        ]
      },
      metrics: {
        revenue: { number: "$120K", label: "New Annual Revenue" },
        conversion: { number: "3.8%", label: "Conversion Rate" },
        growth: { number: "38%", label: "Monthly Growth" },
        testing: { number: "12", label: "Products Validated" }
      },
      image: ESD,
      link: "https://esdguys.com/"
    }
  ];

  // Prepare data for schema markup
  const schemaData = {
    casestudies: caseStudies.filter(study => study.testimonial).map(study => ({
      author: study.testimonial.author,
      testimonial: study.testimonial.quote
    }))
  };

  return (
    <div className="pt-20">
      <SchemaMarkup pageType="results" data={schemaData} />
      {/* Header Section */}
      <section className="bg-gradient-to-br from-green-700 to-teal-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            Real Businesses. Real Transformations.
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-green-100 text-center">
            From challenges to success stories. See how we've helped businesses 
            like yours turn things around—with specific numbers to prove it.
          </p>
        </div>
      </section>

      {/* Summary Stats */}
      <section className="bg-white py-8 shadow-md">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-3xl font-bold text-green-700">12</div>
              <div className="text-sm text-gray-600">Businesses Transformed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-indigo-700">$3.2M</div>
              <div className="text-sm text-gray-600">Revenue Generated</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-700">287%</div>
              <div className="text-sm text-gray-600">Avg Revenue Growth</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-700">312%</div>
              <div className="text-sm text-gray-600">Avg Traffic Increase</div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-center text-gray-600 mb-12">
            Click any case study to see the full transformation story
          </p>
          
          {caseStudies.map((study, index) => (
            <FadeIn key={index}>
              <CaseStudyCard {...study} isInitiallyExpanded={index === 0} />
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why These Businesses Succeeded
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ y: -5 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="font-bold mb-2">Focused on Revenue</h3>
              <p className="text-sm text-gray-600">
                Every decision driven by ROI, not vanity metrics or fancy features
              </p>
            </motion.div>
            
            <motion.div
              whileHover={{ y: -5 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="font-bold mb-2">Fast Implementation</h3>
              <p className="text-sm text-gray-600">
                Most transformations complete in 2-8 weeks, not months
              </p>
            </motion.div>
            
            <motion.div
              whileHover={{ y: -5 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="font-bold mb-2">Measurable Results</h3>
              <p className="text-sm text-gray-600">
                Real numbers, real revenue, real impact on the bottom line
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-700 to-teal-700 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Be the Next Success Story?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Your competition isn't waiting. Neither should you.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <BookingLink
              type="discovery"
              className="inline-flex items-center px-8 py-4 bg-white text-green-700 font-bold rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl"
            >
              Start Your Transformation
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </BookingLink>
            
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-transparent text-white font-bold rounded-lg border-2 border-white hover:bg-white/10 transition-all text-center"
            >
              Discuss Your Industry
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}