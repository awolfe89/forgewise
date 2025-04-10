// pages/Home.jsx
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-slate-100 py-24 overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-200 [mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.6))]"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              <span className="text-blue-700">Hi, I'm Allan.</span> <br className="hidden md:block" />
              eCommerce Director &<br className="hidden md:block" /> 
              <span className="relative">
                <span className="relative z-10">Curious Fellow</span>
                <span className="absolute bottom-2 left-0 w-full h-3 bg-blue-200 opacity-70 z-0"></span>
              </span>
            </h1>
            <p className="text-xl text-gray-700 max-w-2xl mb-8">
              I combine strategic leadership with hands-on technical expertise to drive eCommerce growth through innovative solutions and data-driven decisions.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/projects" className="px-8 py-3 bg-blue-700 text-white font-medium rounded-lg hover:bg-blue-800 transition shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                View My Projects
              </Link>
              <Link to="/leadership" className="px-8 py-3 bg-white text-blue-700 font-medium rounded-lg border-2 border-blue-700 hover:bg-blue-50 transition shadow hover:shadow-md">
                Leadership Experience
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-16 text-center">
            Where <span className="text-blue-700">Leadership</span> Meets <span className="text-blue-700">Technical Expertise</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-slate-50 rounded-xl p-6 shadow-md hover:shadow-lg transition border border-slate-100 transform hover:-translate-y-1">
              <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-3xl">🔍</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Data-Driven Strategy</h3>
              <p className="text-gray-600">
                Transforming customer insights and metrics into action plans that drive measurable growth.
              </p>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-6 shadow-md hover:shadow-lg transition border border-slate-100 transform hover:-translate-y-1">
              <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-3xl">⚙️</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Full-Stack Development</h3>
              <p className="text-gray-600">
                Building effective MVPs and prototypes that solve real business problems—no waiting required.
              </p>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-6 shadow-md hover:shadow-lg transition border border-slate-100 transform hover:-translate-y-1">
              <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-3xl">🧠</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">AI Integration</h3>
              <p className="text-gray-600">
                Implementing practical AI solutions that enhance customer experience and operational efficiency.
              </p>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-6 shadow-md hover:shadow-lg transition border border-slate-100 transform hover:-translate-y-1">
              <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-3xl">🧰</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Team Leadership</h3>
              <p className="text-gray-600">
                Guiding cross-functional teams with clear vision, empowerment, and a focus on outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
<section className="py-16 bg-slate-50">
  <div className="max-w-5xl mx-auto px-4">
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className="md:flex">
        <div className="md:shrink-0 bg-blue-700 md:w-1/3 p-8 text-white flex items-center justify-center">
          <h2 className="text-3xl font-bold">Beyond the Office</h2>
        </div>
        <div className="p-8 md:p-10">
          <p className="text-gray-600 mb-6">
            When I'm not optimizing eCommerce strategies or coding new solutions, you'll find me engaged in hands-on projects that keep me grounded and creative:
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-start">
              <span className="text-2xl mr-3">🚜</span>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Small-Time Farmer</h3>
                <p className="text-sm text-gray-600">Raising chickens, turkeys & pigs alongside my family, dogs, and cats—teaching responsibility and sustainable living.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <span className="text-2xl mr-3">🔧</span>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Diesel Mechanic</h3>
                <p className="text-sm text-gray-600">Breathing new life into high-mileage trucks through complete engine rebuilds and mechanical restoration.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <span className="text-2xl mr-3">🪚</span>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Woodworker</h3>
                <p className="text-sm text-gray-600">Crafting furniture and décor from 100-year-old barnwood reclaimed from my farm—preserving history through craftsmanship.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Dual Focus Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Dual Expertise</h2>
            <p className="text-xl text-gray-600">
              My unique value comes from mastering both strategic leadership and technical implementation—bridging the gap between vision and execution.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-xl p-8 shadow-md border border-blue-100">
              <div className="w-16 h-16 bg-blue-700 rounded-lg flex items-center justify-center mb-6 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">eCommerce Leadership</h3>
              <p className="text-gray-600 mb-6">
                Strategic direction, team management, and growth-focused initiatives that drive business success.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-700 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Platform strategy and optimization</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-700 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Digital marketing and conversion optimization</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-700 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Cross-functional team leadership</span>
                </li>
              </ul>
              <Link to="/leadership" className="text-blue-700 font-medium hover:text-blue-800 transition flex items-center">
                Explore Leadership Experience
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-md border border-blue-100">
              <div className="w-16 h-16 bg-blue-700 rounded-lg flex items-center justify-center mb-6 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Technical Innovation</h3>
              <p className="text-gray-600 mb-6">
                Hands-on development and implementation of solutions that automate processes and enhance customer experiences.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-700 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Full-stack development with modern frameworks</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-700 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">AI & automation integration</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-700 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Custom tool development for business needs</span>
                </li>
              </ul>
              <Link to="/projects" className="text-blue-700 font-medium hover:text-blue-800 transition flex items-center">
                Explore Technical Projects
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-700 text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Have eCommerce Needs? I Know A Guy</h2>
          <p className="text-xl mb-8">
            Whether you're looking for leadership, technical expertise, or someone who brings both to the table, I'd love to connect.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="inline-block px-8 py-3 bg-white text-blue-700 font-medium rounded-lg hover:bg-blue-50 transition shadow-lg">
              Start a Conversation
            </Link>
            <Link to="/leadership" className="inline-block px-8 py-3 bg-transparent text-white font-medium rounded-lg border-2 border-white hover:bg-blue-600 transition">
              Learn About My Approach
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}