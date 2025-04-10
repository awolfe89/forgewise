// pages/Leadership.jsx
import { useState, useEffect } from 'react';

function ExperienceCard({ title, description, items }) {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className={`bg-white rounded-xl shadow-md border border-slate-100 overflow-hidden transition-all duration-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-4 text-gray-800">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2">
          {items.map((item, index) => (
            <span key={index} className="text-sm font-medium px-3 py-1 rounded-full bg-slate-100 text-slate-700">
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function StatCard({ value, label, icon }) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-md border border-slate-100 text-center">
      <div className="text-blue-700 text-4xl font-bold mb-2">{value}</div>
      <div className="flex items-center justify-center mb-2">
        <span className="text-3xl mr-2">{icon}</span>
        <h3 className="text-lg font-semibold text-gray-800">{label}</h3>
      </div>
    </div>
  );
}

function ConsultingProcess({ number, title, description }) {
  return (
    <div className="relative">
      <div className="absolute top-0 left-0 w-12 h-12 rounded-full bg-blue-700 flex items-center justify-center text-white font-bold text-xl">
        {number}
      </div>
      <div className="pl-16">
        <h4 className="text-xl font-bold mb-2 text-gray-800">{title}</h4>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}

export default function Leadership() {
  return (
    <div className="pt-20">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-blue-700 to-blue-800 text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">eCommerce Leadership & Marketing</h1>
          <p className="text-xl max-w-3xl mx-auto mb-4 text-blue-100">
            Strategic vision combined with hands-on expertise to drive growth, 
            optimize performance, and deliver exceptional digital experiences.
          </p>
        </div>
      </section>

      {/* Leadership Philosophy */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center">Leadership Philosophy</h2>
            <p className="text-xl text-gray-600 mb-6">
              As a Director of eCommerce, I believe that the most effective leadership combines 
              strategic vision with a deep understanding of the technical foundations. This approach 
              allows me to bridge the gap between business goals and technical implementation, 
              ensuring alignment across all departments.
            </p>
            <p className="text-xl text-gray-600">
              My leadership style emphasizes data-driven decision making, transparent communication, 
              and empowering team members to take ownership of their areas of expertise. By fostering 
              a culture of continuous learning and innovation, I help organizations adapt quickly to 
              the ever-changing digital landscape.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <StatCard icon="📈" label="Assembling/Managing A Team" />
            <StatCard  icon="💻" label="Conversion Rate Improvement" />
            <StatCard  icon="📱" label="Mobile Optimization" />
            <StatCard  icon="🖱️" label="Pay Per Click" />
          </div>
        </div>
      </section>

      {/* Platform Expertise */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Platform Expertise</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <ExperienceCard 
              title="eCommerce Platforms"
              description="Comprehensive experience implementing, managing, and optimizing major eCommerce platforms to drive sales and enhance customer experience."
              items={[
                "Magento 1", 
                "Magento 2 (Community & Enterprise)", 
                "Shopify",
                "BigCommerce"
              ]}
            />
            
            <ExperienceCard 
              title="Marketing & SEO Tools"
              description="Proficient in utilizing industry-leading tools to develop and execute comprehensive digital marketing strategies that drive qualified traffic and conversions."
              items={[
                "SEMRush", 
                "Google Analytics", 
                "Google Search Console", 
                "Google Ads",
                "MailChimp",
                "Constant Contact"
              ]}
            />
            
            <ExperienceCard 
              title="Pay-Per-Click Advertising"
              description="Strategic management of PPC campaigns across multiple platforms, optimizing for ROAS while managing substantial advertising budgets."
              items={[
                "Budget Management ($50K-$200K/year)",
                "A/B Testing",
                "Landing Page Optimization",
                "Conversion Tracking",
                "Remarketing Campaigns"
              ]}
            />
            
            <ExperienceCard 
              title="Professional Tools"
              description="Proficient with industry-standard creative and productivity software to develop compelling content and maintain efficient operations."
              items={[
                "Adobe Creative Suite",
                "Microsoft Office Suite",
                "Project Management Tools",
                "Data Analysis & Visualization"
              ]}
            />
          </div>
        </div>
      </section>

      {/* Consulting Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Consulting</h2>
            <p className="text-xl text-gray-600">
              In addition to my role as Director of eCommerce, over the years I've been able to provide specialized consulting services 
              to help businesses optimize their digital presence and drive growth.
            </p>
          </div>

          <div className="bg-blue-50 rounded-xl p-8 mb-12">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-blue-800">My Approach</h3>
                <p className="text-gray-700 mb-6">
                  As a consultant, I bring the same data-driven, results-oriented approach that has defined my 
                  career as an eCommerce Director. I work closely with clients to understand their unique 
                  challenges and opportunities, developing tailored strategies that align with their business goals.
                </p>
                <p className="text-gray-700">
                  My consulting process is collaborative and transparent, ensuring that clients not only see 
                  results but also gain the knowledge and tools needed for long-term success.
                </p>
              </div>
              
              <div className="space-y-8">
                <ConsultingProcess 
                  number="1"
                  title="Comprehensive Audit"
                  description="In-depth analysis of your current eCommerce operations, identifying strengths, weaknesses, and opportunities for growth."
                />
                
                <ConsultingProcess 
                  number="2"
                  title="Strategic Planning"
                  description="Development of actionable strategies tailored to your specific business goals and market position."
                />
                
                <ConsultingProcess 
                  number="3"
                  title="Implementation Support"
                  description="Hands-on guidance and support throughout the implementation process, ensuring strategies are executed effectively."
                />
                
                <ConsultingProcess 
                  number="4"
                  title="Measurement & Optimization"
                  description="Ongoing analysis and refinement of strategies based on performance data and emerging market trends."
                />
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-md border-t-4 border-blue-700">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">eCommerce Strategy</h3>
              <p className="text-gray-600">
                Comprehensive strategy development to optimize your online store, improve conversion rates, and increase customer lifetime value.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md border-t-4 border-blue-700">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Digital Marketing</h3>
              <p className="text-gray-600">
                Targeted digital marketing strategies that drive qualified traffic, build brand awareness, and generate measurable ROI.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md border-t-4 border-blue-700">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Platform Migration</h3>
              <p className="text-gray-600">
                Expert guidance for seamless platform transitions, ensuring data integrity, SEO preservation, and minimal business disruption.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Teaser */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Proven Results</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            My leadership and strategic approach have driven significant results for eCommerce businesses across various industries.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-800 p-6 rounded-lg">
              <div className="text-4xl font-bold text-blue-400 mb-2">127%</div>
              <p className="text-gray-300">Increase in organic traffic for a specialty retailer through comprehensive SEO strategy</p>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg">
              <div className="text-4xl font-bold text-blue-400 mb-2">43%</div>
              <p className="text-gray-300">Improvement in conversion rate following UX optimization and checkout redesign</p>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg">
              <div className="text-4xl font-bold text-blue-400 mb-2">$1.2M</div>
              <p className="text-gray-300">Revenue increase for B2B/B2C Website after SEO & platform overhaul</p>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">Leadership Beyond Business</h2>
            <p className="text-xl text-gray-600">
              My approach to leadership is shaped by my diverse experiences—both professional and personal.
            </p>
          </div>
          
          <div className="bg-slate-50 rounded-xl p-8 shadow-sm">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100 hover:shadow-md transition">
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚜</span>
                </div>
                <h4 className="font-semibold text-center text-lg mb-3">Small-Time Farmer</h4>
                <p className="text-gray-600 text-center">
                  Running a small farm with chickens, turkeys, and pigs has taught me valuable lessons about resource management, patience, and sustainable practices. My family, including three dogs and two cats, learns responsibility and the value of hard work through our daily farm activities.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100 hover:shadow-md transition">
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔧</span>
                </div>
                <h4 className="font-semibold text-center text-lg mb-3">Mechanic</h4>
                <p className="text-gray-600 text-center">
                  Rebuilding old diesel trucks—from engine overhauls to complete restorations—has honed my problem-solving abilities and attention to detail. This hobby reinforces my belief that understanding the fundamentals of how things work is essential to leading technical teams effectively.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100 hover:shadow-md transition">
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🪚</span>
                </div>
                <h4 className="font-semibold text-center text-lg mb-3">Woodworker</h4>
                <p className="text-gray-600 text-center">
                  Crafting furniture from 100-year-old barnwood reclaimed from my property combines my appreciation for history with a passion for creating lasting value. These projects remind me that the best leadership involves transforming existing resources into something new and meaningful.
                </p>
              </div>
            </div>
            
            <div className="mt-8 text-center text-gray-700 italic">
              <p>I believe these pursuits contribute directly to my professional approach—balancing vision with execution, respecting both tradition and innovation, and always building with purpose and quality in mind.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Take Your eCommerce to the Next Level?</h2>
          <p className="text-xl mb-8">
            Whether you're looking for leadership expertise, strategic guidance, or specialized consulting, 
            I'm here to help you achieve your digital commerce goals.
          </p>
          <a href="/contact" className="inline-block px-8 py-3 bg-white text-blue-700 font-medium rounded-lg hover:bg-blue-50 transition shadow-lg">
            Start a Conversation
          </a>
        </div>
      </section>
    </div>
  );
}