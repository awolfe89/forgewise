// pages/InsightDetail.jsx - Example implementation for your attribute filtering case study

import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function AttributeFilteringCaseStudy() {
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
              Navigating the 10,000+ SKU Challenge
            </h1>
            <p className="text-xl text-blue-100 mb-6">
              How attribute-based filtering transformed product discovery for an electronics supply distributor
            </p>
            <div className="flex items-center text-blue-200 text-sm">
              <span>April 2025</span>
              <span className="mx-2">•</span>
              <span>8 min read</span>
              <span className="mx-2">•</span>
              <span>eCommerce Strategy</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="prose prose-lg max-w-none">
            <div className="bg-blue-50 border-l-4 border-blue-700 p-6 mb-8 rounded-r-lg">
              <h2 className="text-gray-800 text-xl font-semibold mt-0">"You have 10,000+ SKUs, how do you help customers sift through them?"</h2>
              <p className="mb-0 text-gray-600">
                This was the question an electronics supply distributor asked me. Having too many categories can 
                annoy customers, but leaving them to search through 500 screwdrivers was equally untenable.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-800 mt-12 mb-6 flex items-center">
              <span className="flex items-center justify-center bg-blue-100 text-blue-700 rounded-full w-8 h-8 text-sm font-bold mr-3">1</span>
              Starting with Traditional Categories
            </h2>

            <p>
              I'll use hand tools as my example throughout this case study to illustrate the principles that I applied.
            </p>

            <p>
              Like most eCommerce stores, I begin with categories. You obviously want to separate the wrenches from 
              the screwdrivers. A generic menu structure typically looks like this (usually alphabetized):
            </p>

            <div className="bg-slate-50 p-6 rounded-lg my-8 border border-slate-100">
              <h3 className="text-lg font-semibold text-gray-800 mt-0 mb-4">Traditional Category Structure</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 mb-0">
                <li className="font-medium text-gray-700">Tools</li>
                <li className="pl-6 text-gray-700">Hand Tools</li>
                <li className="pl-12 text-gray-700">Screwdrivers</li>
                <li className="pl-12 text-gray-700">Hammers</li>
                <li className="pl-12 text-gray-700">Wrenches</li>
                <li className="pl-6 text-gray-700">Power Tools</li>
                <li className="pl-12 text-gray-700">Drivers</li>
                <li className="pl-12 text-gray-700">Drills</li>
                <li className="pl-12 text-gray-700">Saws</li>
                <li className="pl-6 text-gray-700">Air Tools</li>
                <li className="pl-12 text-gray-700">Air Hammer</li>
                <li className="pl-12 text-gray-700">Impact Gun</li>
                <li className="pl-12 text-gray-700">Angle Grinder</li>
              </ul>
            </div>

            <p>
              What I sometimes see is that companies (or product managers) take the screwdrivers subcategory and further 
              expand it by adding additional subcategories:
            </p>

            <div className="bg-slate-50 p-6 rounded-lg my-8 border border-slate-100">
              <h3 className="text-lg font-semibold text-gray-800 mt-0 mb-4">Over-Categorized Structure</h3>
              <ul className="grid grid-cols-1 gap-y-2 mb-0">
                <li className="font-medium text-gray-700">Tools</li>
                <li className="pl-6 text-gray-700">Hand Tools</li>
                <li className="pl-12 text-gray-700">Screwdrivers</li>
                <li className="pl-16 text-gray-700">Flat Head</li>
                <li className="pl-20 text-gray-700">Short</li>
                <li className="pl-20 text-gray-700">Regular</li>
                <li className="pl-20 text-gray-700">Long</li>
                <li className="pl-16 text-gray-700">Phillips Head</li>
                <li className="pl-16 text-gray-700">Hex Head</li>
                <li className="pl-12 text-gray-700">Hammers</li>
                <li className="pl-12 text-gray-700">Wrenches</li>
              </ul>
            </div>

            <p>
              You can see how the goal of giving customers options is well-founded, but the structure becomes 
              a bit "spider-webby." I've seen cases where each subcategory has its own landing page, which then requires 
              more pages to load, more content to manage, and leaves customers feeling like they're going down a rabbit hole.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-12 mb-6 flex items-center">
              <span className="flex items-center justify-center bg-blue-100 text-blue-700 rounded-full w-8 h-8 text-sm font-bold mr-3">2</span>
              Understanding What Customers Want
            </h2>

            <p>Every customer falls into one of these scenarios:</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-bold mb-3">1</div>
                <p className="mb-0 text-gray-700">
                  <span className="font-medium">Knows exactly what they want</span> and searches by SKU or specific product name
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-bold mb-3">2</div>
                <p className="mb-0 text-gray-700">
                  <span className="font-medium">Lands directly on a product</span> from search engines or external links
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-bold mb-3">3</div>
                <p className="mb-0 text-gray-700">
                  <span className="font-medium">Doesn't know exactly what they need</span> and wants to browse the selection
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-bold mb-3">4</div>
                <p className="mb-0 text-gray-700">
                  <span className="font-medium">Found their primary item</span> but wants to see what else they could add to their order
                </p>
              </div>
            </div>

            <p>
              In this case study,I focused on addressing the last two scenarios. This approach is especially relevant for:
            </p>
            
            <ul className="mb-8">
              <li className="mb-3">
                <span className="font-medium text-gray-800">B2B Websites</span> where business customers search through categories for regular orders or special one-offs
              </li>
              <li className="mb-3">
                <span className="font-medium text-gray-800">Enthusiast Websites</span> where users want to discover additional merchandise in their interest area
              </li>
              <li className="mb-3">
                <span className="font-medium text-gray-800">Specialized Retailers</span> where customers might find a general product category but need very precise specifications
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mt-12 mb-6 flex items-center">
              <span className="flex items-center justify-center bg-blue-100 text-blue-700 rounded-full w-8 h-8 text-sm font-bold mr-3">3</span>
              The Solution: Attribute-Based Filtering
            </h2>

            <p>
              This is where I introduced <span className="font-semibold text-blue-700">attribute-based filtering</span>. 
              I'll describe how I implemented this specifically on the Magento eCommerce platform.
            </p>

            <p>
              Think about attributes as "product adjectives." A sweater might include obvious adjectives such as:
            </p>

            <div className="flex flex-wrap gap-2 my-4">
              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">Size</span>
              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">Color</span>
              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">Gender</span>
            </div>

            <p>But can also include much more specific qualities:</p>

            <div className="flex flex-wrap gap-2 my-4">
              <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm">Material</span>
              <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm">Thread Count</span>
              <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm">Sleeve Length</span>
              <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm">Weight</span>
              <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm">Shipping Dimensions</span>
              <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm">Breathability</span>
              <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm">Collar Type</span>
            </div>

            <div className="relative py-10">
              <div className="absolute inset-0 flex items-center" aria-hidden="true">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="bg-white px-4 text-sm text-gray-500">THE IMPLEMENTATION</span>
              </div>
            </div>

            <p>
              Returning to my tools example, imagine a customer navigates to the screwdrivers category. 
              Instead of facing hundreds of different screwdrivers with no way to narrow their selection, 
              I developed and deployed these filtering attributes:
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
              <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-100 text-center">
                <span className="font-medium text-gray-800">Material</span>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-100 text-center">
                <span className="font-medium text-gray-800">Brand</span>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-100 text-center">
                <span className="font-medium text-gray-800">Color</span>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-100 text-center">
                <span className="font-medium text-gray-800">Length</span>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-100 text-center">
                <span className="font-medium text-gray-800">Weight</span>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-100 text-center">
                <span className="font-medium text-gray-800">Driver Type</span>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-100 text-center">
                <span className="font-medium text-gray-800">Insulated</span>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-100 text-center">
                <span className="font-medium text-gray-800">Ergonomic</span>
              </div>
            </div>

            <p>
              Now the customer can select which attributes are most important to them and filter accordingly.
            </p>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 my-8 rounded-r-lg">
              <h3 className="text-gray-800 text-lg font-semibold mt-0 mb-2">But where do the specific choices come from?</h3>
              <p className="mb-0 text-gray-700">
                If a customer decides to filter by color, where do the color options come from? I create them—all manually.
              </p>
            </div>

            <p>
              Instead of manually typing the color for every product added to the website, I pre-define them in the attribute fields. 
              This creates a standardized set of data to work with, ensuring consistency and enabling effective filtering.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-800 mt-12 mb-6 flex items-center">
              <span className="flex items-center justify-center bg-blue-100 text-blue-700 rounded-full w-8 h-8 text-sm font-bold mr-3">4</span>
              Organizing with Attribute Sets
            </h2>

            <p>
              The next level of organization involves <span className="font-semibold text-blue-700">attribute sets</span>. This is where it gets more sophisticated—but that complexity is my problem to solve, not yours.
            </p>

            <p>
              For example, if you sell clothing, you don't want to have to scroll past dropdown options for collar type or sleeve length while trying to input data for sneakers. So I group attributes into logical sets.
            </p>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100 my-8">
              <h3 className="text-lg font-semibold text-gray-800 mt-0 mb-4">Example: Screwdrivers Attribute Set</h3>
              <p className="text-gray-700 mb-3 font-medium">Associated Attributes:</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">Handle Type</span>
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">Ergonomic</span>
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">Length</span>
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">Weight</span>
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">Brand</span>
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">Driver Type</span>
              </div>
            </div>

            <p>
              By assigning all screwdrivers with the "screwdriver" attribute set, I ensure that when adding hammers to the catalog, the system doesn't ask irrelevant questions about driver types.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-12 mb-6">Results</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
              <div className="bg-blue-700 text-white p-6 rounded-lg shadow-md text-center">
                <div className="text-3xl font-bold mb-2">38%</div>
                <p className="mb-0">Increase in items per order</p>
              </div>
              
              <div className="bg-blue-700 text-white p-6 rounded-lg shadow-md text-center">
                <div className="text-3xl font-bold mb-2">27%</div>
                <p className="mb-0">Decrease in abandoned carts</p>
              </div>
              
              <div className="bg-blue-700 text-white p-6 rounded-lg shadow-md text-center">
                <div className="text-3xl font-bold mb-2">42%</div>
                <p className="mb-0">Increase in pages per session</p>
              </div>
            </div>

            <p className="text-lg">
              By implementing this attribute-based filtering system, this client was able to dramatically improve customer 
              navigation without overwhelming them with excessive subcategories. The approach preserved the simplicity of 
              the main navigation while giving customers powerful tools to find exactly what they needed.
            </p>

            <div className="bg-slate-50 p-6 rounded-lg my-8 border-t-4 border-blue-700">
              <h3 className="text-xl font-bold text-gray-800 mt-0 mb-4">Key Takeaways</h3>
              <ul className="mb-0">
                <li className="mb-3">
                  Avoid creating too many category levels that lead to "navigation rabbit holes"
                </li>
                <li className="mb-3">
                  Use attributes to create powerful filtering options without cluttering your main navigation
                </li>
                <li className="mb-3">
                  Standardize attribute values to ensure consistent filtering experiences
                </li>
                <li className="mb-3">
                  Group attributes into logical sets based on product types to simplify catalog management
                </li>
                <li className="mb-0">
                  Focus on the customer journey and make product discovery intuitive even with large catalogs
                </li>
              </ul>
            </div>
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
              Founder of ForgeWise.io, where he helps established businesses modernize their online presence, systems, and storefronts. With over 15 years in eCommerce operations, he’s worked behind the scenes of 8-figure brands — and now works directly with owners who want lean, scalable digital growth.

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
                  <span className="text-3xl">📊</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-semibold px-2 py-1 bg-blue-100 text-blue-700 rounded-full">
                    Case Study
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">Improving Cart Conversion Rates for B2B Buyers</h3>
                <p className="text-gray-600 mb-4">How I streamlined the checkout process for bulk orders and increased conversion by 45%.</p>
                <Link 
                  to="#" 
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
                  <span className="text-3xl">🔎</span>
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
                  to="#" 
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
          <h2 className="text-2xl font-bold mb-4">Need help optimizing your eCommerce experience?</h2>
          <p className="text-lg mb-8 text-blue-100">
            I just might be available for hire. Let's discuss how my expertise in eCommerce strategy and implementation can help your business grow.
          </p>
          <Link to="/contact" className="inline-block px-8 py-3 bg-white text-blue-700 font-medium rounded-lg hover:bg-blue-50 transition shadow-lg">
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}