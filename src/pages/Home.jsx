// pages/Home.jsx
import { useState, lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { StaggerContainer, StaggerItem } from '../components/AnimatedComponents';
import { BookingLink } from '../components/ProtectedContact';
import SchemaMarkup from '../components/SchemaMarkup';

// Lazy load non-critical components
const FloatingCTA = lazy(() => import('../components/FloatingCTA'));

export default function Home() {
  const [checkedProblems, setCheckedProblems] = useState({});
  const [monthlyRevenue, setMonthlyRevenue] = useState('');
  const [conversionRate, setConversionRate] = useState('');
  const [calculatorResult, setCalculatorResult] = useState(null);
  const [showResults, setShowResults] = useState(false);

  const problems = [
    { id: 'traffic', label: 'Traffic isn\'t converting to sales', impact: 15 },
    { id: 'cart', label: 'Shopping cart abandonment over 70%', impact: 25 },
    { id: 'ppc', label: 'PPC campaigns burning cash with low ROI', impact: 20 },
    { id: 'seo', label: 'Invisible on Google (page 2 or worse)', impact: 30 },
    { id: 'mobile', label: 'Mobile experience is frustrating customers', impact: 18 },
    { id: 'analytics', label: 'No idea which marketing channels actually work', impact: 22 },
    { id: 'email', label: 'Email campaigns get ignored or marked as spam', impact: 12 },
    { id: 'tech', label: 'Website takes forever to load', impact: 28 }
  ];

  const handleProblemChange = (problemId) => {
    setCheckedProblems(prev => {
      const newState = { ...prev };
      newState[problemId] = !prev[problemId];
      return newState;
    });
  };

  const calculateLoss = () => {
    if (!monthlyRevenue || !conversionRate) {
      alert('Please enter both monthly revenue and conversion rate');
      return;
    }
    
    const revenue = parseFloat(monthlyRevenue.replace(/[,$]/g, ''));
    const currentRate = parseFloat(conversionRate);
    
    if (isNaN(revenue) || isNaN(currentRate) || revenue <= 0 || currentRate <= 0) {
      alert('Please enter valid positive numbers');
      return;
    }
    
    const checkedCount = Object.values(checkedProblems).filter(Boolean).length;
    
    if (checkedCount === 0) {
      alert('Please select at least one challenge to calculate opportunity cost');
      return;
    }
    
    // Industry average conversion rate is 2.5-3%
    const targetRate = 3;
    const improvementPotential = currentRate < targetRate 
      ? Math.min((targetRate - currentRate) * 0.8, 1.5)
      : 0.5; // Even well-performing sites can improve
    
    const baselineLoss = revenue * (improvementPotential / 100);
    
    // Each problem compounds the opportunity
    const compoundFactor = 1 + (checkedCount * 0.15);
    const totalLoss = Math.max(Math.round(baselineLoss * compoundFactor), revenue * 0.05); // Minimum 5% improvement potential
    
    setCalculatorResult({
      monthlyLoss: totalLoss,
      yearlyLoss: totalLoss * 12,
      checkedCount: checkedCount
    });
    setShowResults(true);
  };

  // Track checked problems for UI feedback
  const checkedCount = Object.values(checkedProblems).filter(Boolean).length;

  return (
    <div className="pt-20">
      <SchemaMarkup pageType="home" />
      <Suspense fallback={null}>
        <FloatingCTA />
      </Suspense>
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-700 via-indigo-800 to-teal-700 py-16 md:py-24">
        <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.6))] pointer-events-none"></div>
        
        <div className="max-w-6xl mx-auto px-4">
          {/* LCP-optimized H1 - no animation for immediate render */}
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 mx-4 text-center">
            Scale Your eCommerce Store <span className="text-teal-300">Fast</span>
          </h1>
          
          {/* Animate only the subtitle */}
          <StaggerContainer>
            <StaggerItem>
              <p className="text-xl md:text-2xl text-indigo-100 text-center mb-12 max-w-3xl mx-auto">
                We diagnose your bottlenecks and deliver quick-win fixes that boost sales.
              </p>
            </StaggerItem>
          </StaggerContainer>
        </div>

        {/* Problem Assessment Tool - Outside ALL animation containers */}
        <div className="max-w-4xl mx-auto px-4 pb-8">
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 transform transition-all duration-300 hover:shadow-2xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              🎯 Identify Your Challenges
            </h2>
            <p className="text-gray-600 mb-6">
              Select the challenges your business is facing to calculate the potential impact of strategic improvements.
            </p>
            
            {/* Problem checkboxes */}
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {problems.map((problem) => (
                <div 
                  key={problem.id} 
                  className="flex items-center p-4 border-2 border-gray-200 rounded-lg hover:border-indigo-300 hover:bg-indigo-50 transition-all cursor-pointer"
                  onClick={() => handleProblemChange(problem.id)}
                >
                  <input
                    type="checkbox"
                    id={`cb-${problem.id}`}
                    checked={checkedProblems[problem.id] || false}
                    onChange={() => handleProblemChange(problem.id)}
                    className="w-5 h-5 text-indigo-600 border-2 border-gray-300 rounded focus:ring-2 focus:ring-indigo-500 cursor-pointer"
                    onClick={(e) => e.stopPropagation()}
                  />
                  <label 
                    htmlFor={`cb-${problem.id}`} 
                    className="ml-3 cursor-pointer select-none text-gray-700 flex-1"
                  >
                    {problem.label}
                  </label>
                </div>
              ))}
            </div>

            {checkedCount >= 3 && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6"
              >
                <p className="text-amber-800 font-semibold">
                  ⚠️ You've identified {checkedCount} challenges. 
                  Each one impacts your bottom line. Let's quantify the opportunity cost.
                </p>
              </motion.div>
            )}

            {/* Revenue Calculator */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2 text-gray-900">
                💡 Calculate Your Opportunity Cost
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Based on the {checkedCount} challenge{checkedCount !== 1 ? 's' : ''} you've identified, 
                let's calculate the potential revenue improvement.
              </p>
              
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Monthly Revenue ($)
                  </label>
                  <input
                    type="text"
                    placeholder="50000"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    value={monthlyRevenue}
                    onChange={(e) => setMonthlyRevenue(e.target.value)}
                  />
                  <p className="text-xs text-gray-500 mt-1">Your current monthly online revenue</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Current Conversion Rate (%)
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    placeholder="1.5"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    value={conversionRate}
                    onChange={(e) => setConversionRate(e.target.value)}
                  />
                  <p className="text-xs text-gray-500 mt-1">Percentage of visitors who buy</p>
                </div>
              </div>

              <button
                onClick={calculateLoss}
                disabled={checkedCount === 0}
                className={`w-full md:w-auto px-6 py-3 font-bold rounded-lg transition-colors ${
                  checkedCount > 0 
                    ? 'bg-indigo-600 text-white hover:bg-indigo-700 cursor-pointer' 
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                {checkedCount === 0 
                  ? 'Select Challenges Above First' 
                  : 'Calculate Opportunity Cost'}
              </button>

              {showResults && calculatorResult && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mt-6 bg-white rounded-lg p-6 border-2 border-indigo-300"
                >
                  <p className="text-3xl font-bold text-indigo-600 mb-2">
                    Potential Monthly Gain: ${calculatorResult.monthlyLoss.toLocaleString()}
                  </p>
                  <p className="text-gray-700 mb-4">
                    That's <span className="font-bold">${calculatorResult.yearlyLoss.toLocaleString()}/year</span> in potential revenue improvement.
                  </p>
                  <p className="text-sm text-gray-600">
                    * Based on industry benchmarks and the {calculatorResult.checkedCount} challenges you've identified
                  </p>
                </motion.div>
              )}
            </div>
          </div>
        </div>

      </section>

      {/* Success Metrics Section - Moved up after calculator */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Proven Track Record
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-6 text-center transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="text-4xl font-bold text-indigo-600 mb-2">287%</div>
              <p className="text-gray-700 font-medium">Average ROI Improvement</p>
              <p className="text-sm text-gray-600 mt-2">Through strategic optimization</p>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6 text-center transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="text-4xl font-bold text-teal-600 mb-2">62%</div>
              <p className="text-gray-700 font-medium">Cost Reduction</p>
              <p className="text-sm text-gray-600 mt-2">In operational expenses</p>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6 text-center transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="text-4xl font-bold text-orange-500 mb-2">4-8 weeks</div>
              <p className="text-gray-700 font-medium">Typical Timeline</p>
              <p className="text-sm text-gray-600 mt-2">From assessment to implementation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Primary CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-orange-500 text-white text-lg font-bold rounded-lg hover:bg-orange-600 transition-all transform hover:scale-105 shadow-xl"
            >
              Start Your Transformation
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
            <p className="mt-3 text-gray-700">
              Free consultation. No obligations. Just strategic insights.
            </p>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">
            Our Strategic Approach
          </h2>
          <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            We follow a proven methodology that delivers consistent results.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-md transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4 text-2xl">
                🔍
              </div>
              <h3 className="text-xl font-bold mb-3">1. Strategic Assessment</h3>
              <p className="text-gray-600">
                We analyze your current operations, identify inefficiencies, and prioritize opportunities by ROI impact.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4 text-2xl">
                🛠️
              </div>
              <h3 className="text-xl font-bold mb-3">2. Solution Design</h3>
              <p className="text-gray-600">
                We develop tailored solutions that fit your team, technology stack, and business objectives.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4 text-2xl">
                📈
              </div>
              <h3 className="text-xl font-bold mb-3">3. Implementation & Results</h3>
              <p className="text-gray-600">
                We execute the strategy, measure outcomes, and ensure sustainable improvements that drive growth.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/solutions"
              className="inline-block px-8 py-3 bg-white text-indigo-600 font-bold rounded-lg border-2 border-indigo-600 hover:bg-indigo-50 transition-all"
            >
              Explore Our Solutions
            </Link>
          </div>
        </div>
      </section>

      {/* Why Forgewise Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-indigo-50 rounded-2xl p-8 md:p-12">
            <h2 className="text-2xl font-bold mb-6 text-center">
              Why Choose Forgewise?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <span className="text-indigo-600 mr-3 text-xl">✓</span>
                <div>
                  <h4 className="font-semibold mb-1">Industry Expertise</h4>
                  <p className="text-gray-600 text-sm">
                    Deep understanding of e-commerce, B2B, B2C and operational challenges
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="text-indigo-600 mr-3 text-xl">✓</span>
                <div>
                  <h4 className="font-semibold mb-1">Proven Methodology</h4>
                  <p className="text-gray-600 text-sm">
                    Systematic approach that delivers consistent, measurable results
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="text-indigo-600 mr-3 text-xl">✓</span>
                <div>
                  <h4 className="font-semibold mb-1">Practical Solutions</h4>
                  <p className="text-gray-600 text-sm">
                    Real-world implementations, not theoretical recommendations
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="text-indigo-600 mr-3 text-xl">✓</span>
                <div>
                  <h4 className="font-semibold mb-1">ROI Focused</h4>
                  <p className="text-gray-600 text-sm">
                  From 100 products to 20,000 and from $1 in sales or $50 Million
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-indigo-700 to-teal-700 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Every day you wait is opportunity lost. Let's discuss your challenges and forge a path forward.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <BookingLink
              type="consultation"
              className="inline-flex items-center px-8 py-4 bg-white text-indigo-700 font-bold rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl"
            >
              Schedule Consultation
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </BookingLink>
            
            <span className="text-white/80">or</span>
            
            <Link
              to="/quick-fixes"
              className="inline-block px-8 py-4 bg-transparent text-white font-bold rounded-lg border-2 border-white hover:bg-white/10 transition-all"
            >
              Explore Quick Wins
            </Link>
          </div>
          
          <p className="mt-6 text-sm opacity-75">
            No sales pitch. Just strategic discussion about your business goals.
          </p>
        </div>
      </section>
    </div>
  );
}