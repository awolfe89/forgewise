// pages/insights/SeoUxCaseStudy.jsx
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function SeoUxCaseStudy() {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-700 to-blue-800 text-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex flex-col items-start">
            <span className="bg-blue-600 text-white text-sm font-medium px-3 py-1 rounded-full mb-4">
              Case Study
            </span>
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              Unlocking eCommerce Potential Through SEO and UX
            </h1>
            <p className="text-xl text-blue-100 mb-6">
              How strategic improvements led to a 163% increase in users and 70% growth in sales
            </p>
            <div className="flex items-center text-blue-200 text-sm">
              <span>March 2023</span>
              <span className="mx-2">•</span>
              <span>7 min read</span>
              <span className="mx-2">•</span>
              <span>SEO Fix</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="prose prose-lg max-w-none">
            <div className="bg-blue-50 border-l-4 border-blue-700 p-6 mb-8 rounded-r-lg">
              <h2 className="text-gray-800 text-xl font-semibold mt-0">The Challenge</h2>
              <p className="mb-0 text-gray-600">
                How do you transform an underperforming eCommerce website with 7,000+ products into a 
                conversion powerhouse while maintaining a consistent flow of potential buyers?
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-800 mb-6">The Initial Situation</h2>

            <p>
              When I first engaged with this medium-sized product distributor, their Magento Enterprise platform
              was generating decent sales, but they recognized they were falling behind competitors. With 7,000-8,000 products
              and only basic SEO implementation, they were missing significant opportunities.
            </p>

            <p>
              While they had checked some fundamental boxes, their approach lacked the comprehensive strategy needed
              to drive substantial growth. They faced the common challenge that many businesses with large product catalogs encounter:
              how to effectively manage, optimize, and market thousands of SKUs without overwhelming internal resources.
            </p>

            <div className="bg-slate-50 rounded-xl p-8 my-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 -mt-10 -mr-10 bg-blue-100 rounded-full opacity-50"></div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-gray-800 mb-4">My Philosophy</h3>
                <p className="text-gray-700 italic mb-0">
                  "I always begin with a sturdy foundation before building the SEO house. Managing the entire website 
                  from top to bottom allows me to create a cohesive strategy that addresses both technical SEO and user experience simultaneously."
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-800 mt-12 mb-6 flex items-center">
              <span className="flex items-center justify-center bg-blue-100 text-blue-700 rounded-full w-8 h-8 text-sm font-bold mr-3">1</span>
              My Fix-Everything Approach
            </h2>

            <p>
              Instead of addressing issues in isolation, I implemented a holistic approach that tackled multiple aspects
              of the site simultaneously. The team divided responsibilities to ensure comprehensive coverage:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-800 mb-2">Technical SEO</h3>
                <p className="text-gray-600 text-sm">
                  Addressing structural issues and fixing fundamental SEO gaps to create a solid foundation.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-800 mb-2">Content Strategy</h3>
                <p className="text-gray-600 text-sm">
                  Coordinating data entry and establishing style guidelines for consistent, optimized product content.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-800 mb-2">UI/UX Enhancement</h3>
                <p className="text-gray-600 text-sm">
                  Identifying and resolving user experience problems to improve navigation and conversion paths.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-800 mt-12 mb-6 flex items-center">
              <span className="flex items-center justify-center bg-blue-100 text-blue-700 rounded-full w-8 h-8 text-sm font-bold mr-3">2</span>
              Building the Foundation
            </h2>

            <p>
             My methodology follows(ed) a systematic approach designed to create a solid foundation for sustainable growth:
            </p>

            <div className="space-y-4 my-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-blue-700">
                <h3 className="font-bold text-gray-800 mb-2">Optimizing UI/UX</h3>
                <p className="text-gray-600 mb-0">
                  I collaborated with staff to redesign the navigation menu, creating an intuitive structure that aligned with user expectations and buying patterns.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-blue-700">
                <h3 className="font-bold text-gray-800 mb-2">Implementing SEO Style Guide</h3>
                <p className="text-gray-600 mb-0">
                  I developed and applied a comprehensive SEO style guide across all product pages, ensuring consistency and optimization.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-blue-700">
                <h3 className="font-bold text-gray-800 mb-2">Scaling Content Creation</h3>
                <p className="text-gray-600 mb-0">
                  I deployed a team of data entry specialists to create high-quality, unique content that adhered to the SEO guidelines.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-blue-700">
                <h3 className="font-bold text-gray-800 mb-2">Innovative Value Addition</h3>
                <p className="text-gray-600 mb-0">
                  I employed creative techniques to generate additional value beyond standard optimizations.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-800 mt-12 mb-6 flex items-center">
              <span className="flex items-center justify-center bg-blue-100 text-blue-700 rounded-full w-8 h-8 text-sm font-bold mr-3">3</span>
              Transforming the User Experience
            </h2>

            <p>
              One of the most critical issues I identified was the site's navigation menu. Working closely with the client's team,
              I redesigned the category structure and menu system from the ground up. This process included:
            </p>

            <ul className="mb-8">
              <li className="mb-2">Creating logical category hierarchies</li>
              <li className="mb-2">Developing content-rich landing pages for key categories</li>
              <li className="mb-2">Implementing clear categorization systems</li>
              <li className="mb-2">Ensuring intuitive navigation paths to high-value products</li>
            </ul>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 my-8 rounded-r-lg">
              <h3 className="text-gray-800 text-lg font-semibold mt-0 mb-2">The Impact of Improved Navigation</h3>
              <p className="mb-0 text-gray-700">
                When users can easily find what they're looking for, I observed several immediate benefits:
              </p>
              <ul className="mt-4 mb-0">
                <li className="mb-1">Extended time on site</li>
                <li className="mb-1">Increased page views per session</li>
                <li className="mb-1">Reduced bounce rates</li>
                <li className="mb-1">Higher conversion rates</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-800 mt-12 mb-6 flex items-center">
              <span className="flex items-center justify-center bg-blue-100 text-blue-700 rounded-full w-8 h-8 text-sm font-bold mr-3">4</span>
              Surprising Results
            </h2>

            <p>
              With large eCommerce platforms, I typically prepare clients for gradual improvement. I often use the
              analogy that enhancing SEO for a large website is like turning a cruise ship—you set your destination,
              maintain your course, and gradually make the turn.
            </p>

            <p>
              However, this project yielded surprising results much faster than anticipated. I discovered that an
              existing customer base had been struggling with the previous site design. The improvements essentially
              "turned on the faucet," allowing users to navigate more efficiently and complete purchases with greater ease.
            </p>

            <div className="bg-slate-50 p-8 rounded-xl my-10">
              <h3 className="text-xl font-bold text-center text-gray-800 mb-8">Performance Metrics (Jan-Mar 2023 vs. Previous Year)</h3>
              
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                  <div className="text-blue-700 text-2xl font-bold mb-1">163.16%</div>
                  <p className="text-sm text-gray-600 mb-0">Increase in Users</p>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                  <div className="text-blue-700 text-2xl font-bold mb-1">69.53%</div>
                  <p className="text-sm text-gray-600 mb-0">Increase in Monthly Sales</p>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                  <div className="text-blue-700 text-2xl font-bold mb-1">56.91%</div>
                  <p className="text-sm text-gray-600 mb-0">More Transactions</p>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                  <div className="text-blue-700 text-2xl font-bold mb-1">4.94%</div>
                  <p className="text-sm text-gray-600 mb-0">Decrease in Bounce Rate</p>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                  <div className="text-blue-700 text-2xl font-bold mb-1">95.81%</div>
                  <p className="text-sm text-gray-600 mb-0">More Monthly Pageviews</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-800 mt-12 mb-6">Key Takeaways</h2>

            <div className="bg-slate-50 p-6 rounded-lg my-8 border-t-4 border-blue-700">
              <ul className="mb-0">
                <li className="mb-3">
                  <span className="font-medium">Holistic approach is crucial:</span> Addressing technical SEO, content quality, and user experience simultaneously creates compounding benefits.
                </li>
                <li className="mb-3">
                  <span className="font-medium">Navigation is fundamental:</span> Even with great products and content, poor navigation can severely limit an eCommerce site's performance.
                </li>
                <li className="mb-3">
                  <span className="font-medium">Large catalogs require systematic processes:</span> Developing standardized methods for handling thousands of products ensures consistency and efficiency.
                </li>
                <li className="mb-3">
                  <span className="font-medium">Existing customers respond quickly:</span> Improvements to usability can rapidly unlock latent demand from frustrated existing customers.
                </li>
                <li className="mb-0">
                  <span className="font-medium">Foundation first, growth second:</span> Establishing a solid technical and structural foundation enables sustainable growth over time.
                </li>
              </ul>
            </div>

            <p className="text-lg">
              This case study demonstrates that even with large product catalogs, strategic improvements to SEO and user experience 
              can yield dramatic results. By addressing fundamental issues and creating systems for consistent optimization, 
              I transformed an underperforming eCommerce site into a growth engine.
            </p>
          </div>
        </div>
      </section>

      {/* Author Section */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-3xl mx-auto px-6">
          <div className="flex items-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 text-xl font-bold mr-4">
              A
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Written by Allan</h3>
              <p className="text-gray-600">
              Founder of Forgewise.io, where he helps established businesses modernize their online presence, systems, and storefronts. With over 15 years in eCommerce operations, he’s worked behind the scenes of 8-figure brands — and now works directly with owners who want lean, scalable digital growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles Section */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Related Insights</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg border border-slate-100">
              <div className="h-48 bg-slate-200 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-slate-400">
                  <span className="text-3xl">🔍</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-semibold px-2 py-1 bg-blue-100 text-blue-700 rounded-full">
                    Case Study
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">Navigating the 10,000+ SKU Challenge</h3>
                <p className="text-gray-600 mb-4">How attribute-based filtering transformed product discovery for an electronics distributor.</p>
                <Link 
                  to="/insights/attribute-filtering" 
                  className="text-blue-700 font-medium flex items-center hover:text-blue-800 transition"
                >
                  Read More
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg border border-slate-100">
              <div className="h-48 bg-slate-200 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-slate-400">
                  <span className="text-3xl">📊</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-semibold px-2 py-1 bg-blue-100 text-blue-700 rounded-full">
                    Insights
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">The Future of Search in eCommerce</h3>
                <p className="text-gray-600 mb-4">How AI-powered semantic search is changing the way customers find products online.</p>
                <Link 
                  to="/insights/ai-in-ecommerce" 
                  className="text-blue-700 font-medium flex items-center hover:text-blue-800 transition"
                >
                  Read More
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-blue-700 text-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold mb-4">Looking to improve your eCommerce performance?</h2>
          <p className="text-lg mb-8 text-blue-100">
            I just might be available for hire. Let's discuss how strategic SEO and UX improvements can transform your online store and drive substantial growth.
          </p>
          <Link to="/contact" className="inline-block px-8 py-3 bg-white text-blue-700 font-medium rounded-lg hover:bg-blue-50 transition shadow-lg">
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}