// pages/insights/PpcCostOptimization.jsx
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function PpcCostOptimization() {
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
              Insights
            </span>
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              You're Paying Too Much For Google Ads
            </h1>
            <p className="text-xl text-blue-100 mb-6">
              How switching from basic to advanced Google Ads can dramatically reduce your cost per acquisition
            </p>
            <div className="flex items-center text-blue-200 text-sm">
              <span>March 2023</span>
              <span className="mx-2">•</span>
              <span>6 min read</span>
              <span className="mx-2">•</span>
              <span>PPC Strategy</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="prose prose-lg max-w-none">
            <div className="bg-blue-50 border-l-4 border-blue-700 p-6 mb-8 rounded-r-lg">
              <h2 className="text-gray-800 text-xl font-semibold mt-0">The Hidden Truth About Basic Google Ads</h2>
              <p className="mb-0 text-gray-600">
                Most small and medium-sized businesses I've analyzed are running their ads on an easier, 
                but far more expensive and less-relevant version of Google Ads—leaving thousands of dollars on the table.
              </p>
            </div>

            <p>
              The basic version of Google Ads is temptingly simple. Make your headlines and copy (perhaps using some 
              auto-generated suggestions), select your region, set a budget and keyword themes, and you're live! 
              It feels efficient, but this simplicity comes at a significant cost.
            </p>
            
            <p>
              Having managed PPC campaigns for various clients, I've seen firsthand why companies are willing to 
              pay $50,000+ annually for dedicated PPC managers. The difference in ROI between basic and advanced 
              campaign management is substantial—and it all comes down to control and visibility.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
              <div className="bg-white rounded-lg p-6 shadow-md border border-red-100">
                <h3 className="text-xl font-bold text-red-700 mb-4 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  Basic Google Ads
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Sets vague keyword themes</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Generic daily budget</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Blind to actual keywords until after paying</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>No granular budget control</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Higher cost per acquisition</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-md border border-green-100">
                <h3 className="text-xl font-bold text-green-700 mb-4 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Advanced Google Ads
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Precise keyword targeting</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Keyword-specific budgeting</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Full visibility of potential keywords</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Strategic bid management</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Significantly lower cost per conversion</span>
                  </li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-800 mt-12 mb-6">The Keyword Theme Trap</h2>

            <p>
              The simplified Google Ads interface allows you to set keyword themes—broad categories like "eCommerce website" 
              that seem intuitive. However, my experience has shown this approach to be both expensive and surprisingly ineffective.
            </p>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 my-8 rounded-r-lg">
              <h3 className="text-gray-800 text-lg font-semibold mt-0 mb-2">Real-World Example</h3>
              <p className="mb-0 text-gray-700">
                I once ran a test for a web design company using basic keyword themes. After just 24 hours and approximately $10 spent, 
                I discovered the ads were triggering for "Website Store"—a completely irrelevant term for a web design company! 
                What's worse, I only discovered this <em>after</em> paying for clicks on this useless keyword.
              </p>
            </div>

            <p>
              This illustrates the fundamental problems with basic Google Ads:
            </p>

            <ul className="mb-8">
              <li className="mb-2">You're spending money on surprise keywords</li>
              <li className="mb-2">You're often charged premium rates for broad terms</li>
              <li className="mb-2">You set a general budget with no keyword-specific control</li>
              <li className="mb-2">You can't see potential keywords before bidding on them</li>
              <li className="mb-2">You can't allocate budget based on keyword performance</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mt-12 mb-6">The Professional Approach</h2>

            <p>
              The advanced version of Google Ads offers dramatically more control and value, though it comes with a steeper 
              learning curve. This is precisely why companies invest in dedicated PPC specialists. The interface isn't 
              particularly intuitive, but the ROI difference makes this expertise invaluable.
            </p>

            <h3 className="text-xl font-bold text-gray-800 mt-8 mb-4">The Real Power: Keyword-Specific Budgeting</h3>

            <p>
              The key advantage of advanced Google Ads is moving from "I have X dollars to spend daily" to strategically 
              allocating budget based on keyword value. Through proper keyword research, I can identify exactly what potential 
              customers are searching for and make informed decisions about which terms to target.
            </p>

            <div className="bg-slate-50 p-6 rounded-lg my-8 border border-slate-200">
              <h3 className="font-bold text-gray-800 mb-4">Keyword Strategy Example</h3>
              
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-slate-200">
                  <thead className="bg-slate-100">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Keyword</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Monthly Searches</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Est. CPC</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Strategy</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-slate-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Digital Agency</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">10,000</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$10.00</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Limited budget due to high CPC</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Digital Agency Newark New Jersey</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2,000</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$1.75</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Priority funding - higher intent, lower cost</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <p className="mt-4 text-gray-600 text-sm mb-0">
                This example demonstrates the power of strategic bidding. By targeting more specific, localized terms, 
                you can reach more qualified leads at a significantly lower cost.
              </p>
            </div>

            <p>
              This approach enables you to stretch your advertising budget much further while simultaneously reaching 
              customers who are looking specifically in your area and are more likely to convert.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-12 mb-6">The Expertise Gap</h2>

            <p>
              As you've likely gathered, this isn't a simple set-it-and-forget-it approach. Effective PPC management requires:
            </p>

            <ul className="mb-8">
              <li className="mb-2">In-depth keyword research and analysis</li>
              <li className="mb-2">Strategic budget allocation</li>
              <li className="mb-2">Ongoing optimization and negative keyword management</li>
              <li className="mb-2">Regular performance analysis and reporting</li>
              <li className="mb-2">A/B testing of ad copy and landing pages</li>
            </ul>

            <p>
              This multi-faceted approach delivers superior results, but it requires expertise. Companies typically 
              face a dilemma: hire a full-time PPC specialist at $50,000+ annually (not including benefits and overhead), 
              outsource to an agency, or bring in a specialized consultant.
            </p>

            <div className="bg-blue-50 p-8 rounded-xl my-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 -mt-10 -mr-10 bg-blue-100 rounded-full opacity-50"></div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-gray-800 mb-4">My Approach to PPC Management</h3>
                <p className="text-gray-700 mb-4">
                  Throughout my career as an eCommerce director, I've developed specialized expertise in advanced PPC management. 
                  My approach focuses on:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-700 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Data-driven keyword selection and bidding strategies</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-700 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Granular campaign structure for maximum control</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-700 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Rigorous testing and continuous optimization</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-700 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Clear reporting that ties ad spend directly to revenue</span>
                  </li>
                </ul>
                <p className="text-gray-700 mt-4 mb-0">
                  Whether as part of an in-house team or working with select clients, I enjoy bringing this expertise to businesses 
                  ready to take their digital advertising to the next level.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-800 mt-12 mb-6">Key Takeaways</h2>

            <div className="bg-slate-50 p-6 rounded-lg my-8 border-t-4 border-blue-700">
              <ul className="mb-0">
                <li className="mb-3">
                  <span className="font-medium">Basic Google Ads is expensive:</span> The simplified interface trades control for convenience, often resulting in wasted ad spend.
                </li>
                <li className="mb-3">
                  <span className="font-medium">Keyword themes are problematic:</span> They give Google too much control over which search terms trigger your ads.
                </li>
                <li className="mb-3">
                  <span className="font-medium">Advanced campaigns deliver better ROI:</span> Strategic keyword selection and bidding dramatically improves performance.
                </li>
                <li className="mb-3">
                  <span className="font-medium">Expertise matters:</span> The complexity of advanced PPC management requires specialized knowledge.
                </li>
                <li className="mb-0">
                  <span className="font-medium">The investment pays for itself:</span> Whether through hiring, partnering, or upskilling, advanced PPC expertise typically delivers ROI that far exceeds its cost.
                </li>
              </ul>
            </div>

            <p className="text-lg">
              If you're currently using the basic Google Ads interface, you're likely overpaying for underwhelming results. 
              Advanced PPC management may require more expertise, but the dramatic improvement in performance makes it 
              well worth the investment.
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
                eCommerce Director with expertise in PPC strategy and digital marketing. Open to discussing management opportunities with forward-thinking companies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-blue-700 text-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold mb-4">Want to discuss your PPC strategy?</h2>
          <p className="text-lg mb-8 text-blue-100">
            Whether you're looking to optimize your existing campaigns or explore new opportunities for collaboration, I'd love to connect.
          </p>
          <Link to="/contact" className="inline-block px-8 py-3 bg-white text-blue-700 font-medium rounded-lg hover:bg-blue-50 transition shadow-lg">
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}