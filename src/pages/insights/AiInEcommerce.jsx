// pages/insights/AiInEcommerce.jsx
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function AiInEcommerce() {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-600 to-purple-700 text-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex flex-col items-start">
            <span className="bg-indigo-500 text-white text-sm font-medium px-3 py-1 rounded-full mb-4">
              Insights
            </span>
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              Practical Applications of AI in Modern eCommerce
            </h1>
            <p className="text-xl text-indigo-100 mb-6">
              Beyond the hype: How AI is delivering measurable results for online retailers today
            </p>
            <div className="flex items-center text-indigo-200 text-sm">
              <span>March 2025</span>
              <span className="mx-2">•</span>
              <span>5 min read</span>
              <span className="mx-2">•</span>
              <span>AI Tools</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="prose prose-lg max-w-none">
            <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 mb-8 rounded-r-lg">
              <h2 className="text-gray-800 text-xl font-semibold mt-0">Beyond the Buzzwords</h2>
              <p className="mb-0 text-gray-600">
                Artificial intelligence in eCommerce has moved well beyond marketing hype. 
                Today, retailers are implementing practical AI solutions that deliver 
                measurable ROI across the entire customer journey.
              </p>
            </div>

            <p>
              As an eCommerce director who has implemented numerous AI initiatives, I've seen firsthand 
              how the technology has evolved from experimental novelty to business necessity. This article 
              cuts through the noise to highlight the most effective applications of AI that are delivering 
              real results in eCommerce today.
            </p>

            <p>
              While generative AI tools like ChatGPT and DALL-E grab headlines, many of the most valuable 
              AI applications in eCommerce are less flashy but far more impactful to the bottom line. 
              Let's explore how online retailers are using AI to solve real business problems across 
              the customer journey.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-12 mb-6 flex items-center">
              <span className="flex items-center justify-center bg-indigo-100 text-indigo-700 rounded-full w-8 h-8 text-sm font-bold mr-3">1</span>
              Product Discovery & Personalization
            </h2>

            <h3 className="text-xl font-bold text-gray-800 mt-8 mb-4">Visual Search</h3>

            <p>
              Traditional text search is being revolutionized by visual search capabilities powered by 
              computer vision algorithms. This technology allows shoppers to upload an image and find 
              visually similar products, dramatically improving product discovery for fashion, home 
              decor, and other visually-driven categories.
            </p>

            <div className="bg-indigo-50 p-6 rounded-lg my-8">
              <h4 className="font-bold text-gray-800 mb-2">Implementation Example</h4>
              <p className="text-gray-700 mb-2">
                Take a hypothetical fashion retailer. They can implement a visual search that allows customers 
                to upload screenshots from social media or photos they take. The system would then analyze 
                the image to identify garment type, color, pattern, and style details, then return similar 
                items from the catalog.
              </p>
            
            </div>

            <h3 className="text-xl font-bold text-gray-800 mt-8 mb-4">Hyper-Personalized Recommendations</h3>

            <p>
              AI-driven recommendation engines have evolved far beyond "customers who bought this also bought" algorithms. 
              Modern systems analyze hundreds of data points—from browsing patterns and purchase history to contextual 
              factors like time of day, weather, and device type—to deliver truly personalized suggestions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-indigo-100">
                <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h4 className="font-bold text-gray-800 mb-2">Real-Time Personalization</h4>
                <p className="text-gray-600 text-sm">
                  Modern AI can adapt product recommendations in real-time based on the customer's current session behavior, 
                  rather than relying solely on historical data.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-indigo-100">
                <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h4 className="font-bold text-gray-800 mb-2">Cross-Category Insights</h4>
                <p className="text-gray-600 text-sm">
                  AI can identify non-obvious connections between product categories that would be impossible 
                  for merchandisers to spot manually.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-800 mt-12 mb-6 flex items-center">
              <span className="flex items-center justify-center bg-indigo-100 text-indigo-700 rounded-full w-8 h-8 text-sm font-bold mr-3">2</span>
              Intelligent Customer Service
            </h2>

            <p>
              Customer service is one area where AI has made tremendous strides, helping retailers provide 
              better support with fewer resources.
            </p>

            <h3 className="text-xl font-bold text-gray-800 mt-8 mb-4">Contextual Chatbots</h3>

            <p>
              Beyond simple rule-based bots, today's AI-powered assistants can understand natural language, 
              maintain context throughout a conversation, and handle complex product inquiries with remarkable accuracy.
            </p>

            <div className="border border-indigo-200 rounded-lg overflow-hidden my-8">
              <div className="bg-indigo-50 px-4 py-3 border-b border-indigo-200">
                <h4 className="font-bold text-gray-800 m-0">Case Study: AI Product Assistant</h4>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4">
                  For a technical B2B retailer with complex products, I implemented a product-aware chatbot that could:
                </p>
                <ul className="mb-4">
                  <li className="mb-2">Access the product catalog in real-time</li>
                  <li className="mb-2">Understand technical specifications</li>
                  <li className="mb-2">Compare different models based on customer requirements</li>
                  <li className="mb-2">Explain compatibility between different components</li>
                </ul>
                <p className="text-gray-700 font-medium mb-0">
                  The system resolved 78% of product questions without human intervention, reduced support tickets by 35%, 
                  and increased conversion by 18% for sessions where the chatbot was engaged.
                </p>
              </div>
            </div>

            <h3 className="text-xl font-bold text-gray-800 mt-8 mb-4">Proactive Support</h3>

            <p>
              Rather than waiting for customers to reach out with problems, AI systems can now predict when issues 
              might occur and initiate support proactively.
            </p>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 my-8 rounded-r-lg">
              <h4 className="text-gray-800 text-lg font-semibold mt-0 mb-2">Practical Example</h4>
              <p className="mb-0 text-gray-700">
                An AI system monitors order status and shipping data, identifies potential delays, and automatically 
                contacts affected customers before they need to reach out. This can reduce "where is my order" 
                tickets by a large percentage, especially during those holiday season delays, while significantly improving customer satisfaction scores.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-800 mt-12 mb-6 flex items-center">
              <span className="flex items-center justify-center bg-indigo-100 text-indigo-700 rounded-full w-8 h-8 text-sm font-bold mr-3">3</span>
              Dynamic Pricing & Inventory Management
            </h2>

            <p>
              Behind the scenes, AI is revolutionizing pricing strategies and inventory management—areas 
              where even small improvements can dramatically impact the bottom line.
            </p>

            <h3 className="text-xl font-bold text-gray-800 mt-8 mb-4">Dynamic Pricing Optimization</h3>

            <p>
              AI pricing systems go far beyond simple competitor matching. Advanced algorithms consider product 
              demand, inventory levels, customer segments, competitive positioning, and even external factors 
              like weather or local events to set optimal prices.
            </p>

            <div className="bg-slate-50 p-6 rounded-lg my-8 border border-slate-200">
              <h4 className="font-bold text-gray-800 mb-4">AI Pricing Strategies</h4>
              
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-slate-200">
                  <thead className="bg-slate-100">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Strategy</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Application</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Typical Results</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-slate-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Elasticity-Based</td>
                      <td className="px-6 py-4 text-sm text-gray-500">Adjusts prices based on demand sensitivity per product</td>
                      <td className="px-6 py-4 text-sm text-gray-500">3-5% margin improvement</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Lifecycle Pricing</td>
                      <td className="px-6 py-4 text-sm text-gray-500">Optimizes pricing through product lifecycle stages</td>
                      <td className="px-6 py-4 text-sm text-gray-500">7-12% inventory turnover improvement</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Personalized Offers</td>
                      <td className="px-6 py-4 text-sm text-gray-500">Tailors discounts to individual customer value</td>
                      <td className="px-6 py-4 text-sm text-gray-500">15-25% conversion rate increase</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <h3 className="text-xl font-bold text-gray-800 mt-8 mb-4">Predictive Inventory Management</h3>

            <p>
              AI-powered inventory systems can predict future demand with remarkable accuracy, optimizing stock 
              levels across warehouses and minimizing both overstock and stockout scenarios.
            </p>

            <div className="bg-indigo-50 p-6 rounded-lg my-8">
              <h4 className="font-bold text-gray-800 mb-2">Implementation Example</h4>
              <p className="text-gray-700 mb-2">
                For multi-category retailers, you could implement an AI demand forecasting system that analyzes:
              </p>
              <ul className="text-gray-700 mb-4">
                <li className="mb-1">Historical sales patterns</li>
                <li className="mb-1">Seasonal variations</li>
                <li className="mb-1">Marketing campaign impacts</li>
                <li className="mb-1">Competitor pricing movements</li>
                <li className="mb-1">Social media trend indicators</li>
                <li className="mb-1">Even weather forecasts for relevant categories</li>
              </ul>
              <p className="text-gray-700 mb-0 font-medium">
                Results would likely be a reduction in stockouts, a decrease in excess inventory costs, and overall margin improvement through more efficient inventory allocation.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-800 mt-12 mb-6 flex items-center">
              <span className="flex items-center justify-center bg-indigo-100 text-indigo-700 rounded-full w-8 h-8 text-sm font-bold mr-3">4</span>
              Fraud Prevention & Security
            </h2>

            <p>
              AI is proving invaluable in the ongoing battle against fraud, helping retailers reduce 
              losses while minimizing friction for legitimate customers.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="font-bold text-gray-800 mb-3">Anomaly Detection</h4>
                <p className="text-gray-600 mb-0">
                  Machine learning models can identify unusual patterns in purchasing behavior that may 
                  indicate fraud. Unlike rule-based systems, AI models continuously learn and adapt to 
                  new fraud techniques.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="font-bold text-gray-800 mb-3">Behavioral Biometrics</h4>
                <p className="text-gray-600 mb-0">
                  Advanced AI systems analyze how users interact with your site—from typing patterns to 
                  mouse movements—creating a behavioral "fingerprint" that helps authenticate legitimate users 
                  without adding friction. Implementing an AI-based fraud detection systems can reduce chargeback 
              rates, while decreasing false positives, resulting in both cost savings and 
              improved customer experience.
                </p>
              </div>
            </div>

            <p className="text-lg">
              AI in eCommerce has moved from experimental to essential. The retailers seeing the greatest success 
              are those who approach AI not as a technology initiative but as a business transformation tool, 
              applying it strategically to solve specific challenges across the customer journey. As these 
              technologies continue to evolve, the gap between leaders and laggards will only widen—making now 
              the time to develop your AI strategy.
            </p>
          </div>
        </div>
      </section>

      {/* Author Section */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-3xl mx-auto px-6">
          <div className="flex items-center">
            <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-700 text-xl font-bold mr-4">
              A
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Written by Allan</h3>
              <p className="text-gray-600">
                Senior-Level eCommerce Director & Founder of ForgeWise.io
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
              <div className="h-48 bg-gradient-to-br from-blue-500 to-blue-700 relative overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute inset-0 bg-pattern"></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-blue-400 bg-opacity-30 rounded-full flex items-center justify-center text-white">
                    <span className="text-4xl">📊</span>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 w-full p-4">
                  <h3 className="text-xl font-bold text-white mb-1 drop-shadow-md line-clamp-2">
                    Unlocking eCommerce Potential Through SEO and UX
                  </h3>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-semibold px-2 py-1 bg-blue-100 text-blue-700 rounded-full">
                    Case Study
                  </span>
                </div>
                <p className="text-gray-600 mb-4">How strategic improvements led to a 163% increase in users and 70% growth in sales.</p>
                <Link 
                  to="/insights/seo-ux-transformation" 
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
              <div className="h-48 bg-gradient-to-br from-blue-500 to-blue-700 relative overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute inset-0 bg-pattern"></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-blue-400 bg-opacity-30 rounded-full flex items-center justify-center text-white">
                    <span className="text-4xl">🔍</span>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 w-full p-4">
                  <h3 className="text-xl font-bold text-white mb-1 drop-shadow-md line-clamp-2">
                    Navigating the 10,000+ SKU Challenge
                  </h3>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-semibold px-2 py-1 bg-blue-100 text-blue-700 rounded-full">
                    Case Study
                  </span>
                </div>
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
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-indigo-700 text-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold mb-4">Looking to implement AI in your eCommerce business?</h2>
          <p className="text-lg mb-8 text-indigo-100">
            Let's discuss how strategic AI integration can help you improve customer experience and drive growth.
          </p>
          <Link to="/contact" className="inline-block px-8 py-3 bg-white text-indigo-700 font-medium rounded-lg hover:bg-indigo-50 transition shadow-lg">
            Start a Conversation
          </Link>
        </div>
      </section>
    </div>
  );
}