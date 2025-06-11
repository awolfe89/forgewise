// pages/Leadership.jsx (now About)
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { StaggerContainer, StaggerItem } from '../components/AnimatedComponents';
import { BookingLink } from '../components/ProtectedContact';

function ValueCard({ title, description, icon }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-indigo-50 p-6 rounded-lg border-2 border-indigo-200"
    >
      <div className="text-3xl mb-3">{icon}</div>
      <h3 className="font-bold text-indigo-700 mb-2">{title}</h3>
      <p className="text-gray-700 text-sm">{description}</p>
    </motion.div>
  );
}

function ApproachCard({ title, description, icon }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white p-6 rounded-lg shadow-md border border-gray-100"
    >
      <div className="text-3xl mb-3">{icon}</div>
      <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </motion.div>
  );
}

function ExpertiseCard({ title, items, color, expanded, onToggle }) {
  return (
    <div className="bg-gray-50 p-6 rounded-lg">
      <div className="flex justify-between items-center mb-3">
        <h3 className={`font-bold text-xl ${color}`}>{title}</h3>
        <button
          onClick={onToggle}
          className="md:hidden text-gray-500 hover:text-gray-700"
        >
          <span className="text-2xl">{expanded ? '−' : '+'}</span>
        </button>
      </div>
      <ul className={`space-y-2 text-gray-600 ${!expanded ? 'hidden md:block' : ''}`}>
        {items.map((item, index) => (
          <li key={index}>• {item}</li>
        ))}
      </ul>
    </div>
  );
}

export default function About() {
  const [showPhilosophy, setShowPhilosophy] = useState(false);
  const [expandedExpertise, setExpandedExpertise] = useState({});

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <StaggerContainer className="max-w-6xl mx-auto px-6">
          <StaggerItem>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
              We're Your Team for Getting Things Done
            </h1>
            <p className="text-xl text-gray-300 text-center max-w-3xl mx-5">
              No PowerPoints. No fluff. Just practical solutions that solve real problems 
              and deliver measurable results for your business.
            </p>
          </StaggerItem>
        </StaggerContainer>
      </section>

      {/* Our Philosophy */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Our Philosophy</h2>
          </div>

          <div className="bg-gray-50 p-8 rounded-xl space-y-4 text-gray-700">
            <p className="font-semibold text-lg">We believe in practical solutions over theoretical frameworks.</p>
            
            <p>
              Too many consultants deliver PowerPoints and roadmaps. We deliver working solutions 
              that solve real problems and generate measurable results.
            </p>

            {showPhilosophy && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="space-y-4"
              >
                <p>
                  Our approach is simple: understand your business, identify the highest-impact 
                  opportunities, and implement solutions that work with your existing team and technology.
                </p>

                <p>
                  We don't believe in one-size-fits-all. Every business is unique, and every solution 
                  should be tailored to your specific challenges, resources, and goals.
                </p>

                <p className="font-semibold">
                  Our promise: We focus on outcomes, not outputs. If it doesn't improve your business 
                  metrics, we don't consider it a success.
                </p>
              </motion.div>
            )}
            
            <button
              onClick={() => setShowPhilosophy(!showPhilosophy)}
              className="text-indigo-600 hover:text-indigo-800 font-medium text-sm"
            >
              {showPhilosophy ? 'Show less' : 'Read more'} →
            </button>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4">
            Our Core Values
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            These principles guide every engagement and solution we deliver.
          </p>

          <div className="space-y-6">
            {/* First Row */}
            <div className="grid md:grid-cols-3 gap-6">
              <ValueCard
                icon="🎯"
                title="Results-Driven"
                description="Every recommendation must tie directly to measurable business outcomes and ROI."
              />
              <ValueCard
                icon="⚡"
                title="Speed & Efficiency"
                description="We deliver solutions in weeks, not months. Time is money, and we respect both."
              />
              <ValueCard
                icon="🔧"
                title="Practical Implementation"
                description="We don't just advise—we help implement. Real solutions that work in the real world."
              />
            </div>
            
            {/* Second Row */}
            <div className="grid md:grid-cols-3 gap-6">
              <ValueCard
                icon="📊"
                title="Data-Informed"
                description="Decisions based on data, not opinions. We measure everything that matters."
              />
              <ValueCard
                icon="🤝"
                title="True Partnership"
                description="We work with your team, not above them. Knowledge transfer is part of every engagement."
              />
              <ValueCard
                icon="💡"
                title="Continuous Innovation"
                description="We stay ahead of technology trends to bring you cutting-edge, proven solutions."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Expertise */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Areas of Expertise
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ExpertiseCard
              title="E-commerce Optimization"
              color="text-indigo-700"
              items={[
                "Performance optimization",
                "Conversion rate improvement",
                "Platform migrations",
                "Multi-channel integration"
              ]}
              expanded={expandedExpertise['ecommerce']}
              onToggle={() => setExpandedExpertise(prev => ({ ...prev, ecommerce: !prev.ecommerce }))}
            />

            <ExpertiseCard
              title="Process Automation"
              color="text-teal-700"
              items={[
                "Workflow optimization",
                "System integration",
                "Custom automation tools",
                "Efficiency analysis"
              ]}
              expanded={expandedExpertise['automation']}
              onToggle={() => setExpandedExpertise(prev => ({ ...prev, automation: !prev.automation }))}
            />

            <ExpertiseCard
              title="Digital Marketing"
              color="text-orange-600"
              items={[
                "PPC optimization",
                "SEO strategy",
                "Marketing automation",
                "Analytics & attribution"
              ]}
              expanded={expandedExpertise['marketing']}
              onToggle={() => setExpandedExpertise(prev => ({ ...prev, marketing: !prev.marketing }))}
            />

            <ExpertiseCard
              title="Data & Analytics"
              color="text-indigo-700"
              items={[
                "Business intelligence",
                "Predictive analytics",
                "Dashboard development",
                "Data-driven decisions"
              ]}
              expanded={expandedExpertise['analytics']}
              onToggle={() => setExpandedExpertise(prev => ({ ...prev, analytics: !prev.analytics }))}
            />

            <ExpertiseCard
              title="Technology Strategy"
              color="text-teal-700"
              items={[
                "Digital transformation",
                "System architecture",
                "Vendor selection",
                "Roadmap development"
              ]}
              expanded={expandedExpertise['strategy']}
              onToggle={() => setExpandedExpertise(prev => ({ ...prev, strategy: !prev.strategy }))}
            />

            <ExpertiseCard
              title="Operations Excellence"
              color="text-orange-600"
              items={[
                "Supply chain optimization",
                "Inventory management",
                "Cost reduction",
                "Quality improvement"
              ]}
              expanded={expandedExpertise['operations']}
              onToggle={() => setExpandedExpertise(prev => ({ ...prev, operations: !prev.operations }))}
            />
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            How We Deliver Results
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <ApproachCard
              icon="🔍"
              title="Deep Analysis"
              description="We start by understanding your business inside and out. No surface-level assessments."
            />
            <ApproachCard
              icon="💰"
              title="ROI-First Approach"
              description="Every solution is evaluated based on its potential return. We prioritize high-impact wins."
            />
            <ApproachCard
              icon="🛠️"
              title="Hands-On Implementation"
              description="We don't just tell you what to do—we help you do it. Real support, real results."
            />
            <ApproachCard
              icon="📈"
              title="Measurable Outcomes"
              description="Clear KPIs from day one. If we can't measure it, we don't promise it."
            />
            <ApproachCard
              icon="⏱️"
              title="Rapid Deployment"
              description="Quick wins in weeks, major transformations in months. We move fast."
            />
            <ApproachCard
              icon="🤝"
              title="Knowledge Transfer"
              description="We ensure your team can maintain and build upon the solutions we implement."
            />
          </div>
        </div>
      </section>

      {/* Client Types */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Who We Work With
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-green-50 p-6 rounded-lg border-2 border-green-300">
              <h3 className="font-bold text-green-700 mb-3">✅ Ideal Clients:</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Growth-focused businesses ready to invest in transformation</li>
                <li>• Companies that value data-driven decision making</li>
                <li>• Teams open to change and new approaches</li>
                <li>• Organizations that measure success by results</li>
                <li>• Businesses ready to move fast and capture opportunities</li>
                <li>• Leaders who appreciate honest, direct communication</li>
              </ul>
            </div>

            <div className="bg-red-50 p-6 rounded-lg border-2 border-red-300">
              <h3 className="font-bold text-red-700 mb-3">❌ Not a Good Fit:</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Companies looking for theoretical frameworks</li>
                <li>• Organizations resistant to change</li>
                <li>• Businesses wanting reports without implementation</li>
                <li>• Teams that prefer meetings over action</li>
                <li>• Companies not ready to invest in growth</li>
                <li>• Organizations that don't value measurable outcomes</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-700 to-teal-700 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss your challenges and explore how we can drive meaningful results.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <BookingLink
              type="consultation"
              className="inline-flex items-center px-8 py-4 bg-white text-indigo-700 font-bold rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl"
            >
              Schedule Strategic Discussion
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </BookingLink>
            
            <Link 
              to="/results"
              className="inline-block px-8 py-4 bg-transparent text-white font-bold rounded-lg border-2 border-white hover:bg-white/10 transition-all"
            >
              See Our Track Record
            </Link>
          </div>
          
          <p className="mt-6 text-sm opacity-75">
            No obligations. Just strategic insights about your business potential.
          </p>
        </div>
      </section>
    </div>
  );
}