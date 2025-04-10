// components/Footer.jsx
export default function Footer() {
    return (
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="font-bold text-xl mb-4">Allan<span className="text-blue-400">.Resume</span></h3>
              <p className="text-gray-400 mb-4">
                eCommerce Director. Bringing technical expertise to leadership.
              </p>
             
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/" className="hover:text-blue-400 transition">Home</a></li>
                <li><a href="/projects" className="hover:text-blue-400 transition">Projects</a></li>
                <li><a href="/leadership" className="hover:text-blue-400 transition">Leadership</a></li>
                <li><a href="/insights" className="hover:text-blue-400 transition">Insights</a></li>
                <li><a href="/contact" className="hover:text-blue-400 transition">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-4">Technologies</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-blue-400 transition">Magento</a></li>
                <li><a href="#" className="hover:text-blue-400 transition">Shopify</a></li>
                <li><a href="#" className="hover:text-blue-400 transition">SEO/SEM</a></li>
                <li><a href="#" className="hover:text-blue-400 transition">A.I. Integration</a></li>
                <li><a href="#" className="hover:text-blue-400 transition">PPC</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
             
                    <li className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                        <a href="/contact" className="hover:text-blue-400 transition">Contact Me</a>
                        </li>
                <li className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Chicago, IL</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
            <p>© {new Date().getFullYear()} Allan. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  }