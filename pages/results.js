import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { StaggerContainer, StaggerItem } from '../src/components/AnimatedComponents';
import { BookingLink } from '../src/components/ProtectedContact';
import NextSEO from '../src/components/NextSEO';
import { getPageSEO } from '../src/config/seo';

export default function Results() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Results' },
    { id: 'revenue', label: 'I Need More Sales' },
    { id: 'conversion', label: 'I Need Better Conversion' },
    { id: 'efficiency', label: 'I Need Lower Costs' },
    { id: 'marketing', label: 'I Need Better ROI' }
  ];

  const caseStudies = [
    {
      id: 'armoranimalhealth',
      title: '+$2M/yr Revenue in 90 Days',
      company: 'Armor Animal Health',
      logo: '/armor-logo.jpg',
      industry: 'E-commerce',
      category: 'revenue',
      context: '$5M e-commerce brand struggling with stalled growth and poor PPC performance',
      diagnosis: 'Cart abandonment at 78%, no email recovery, PPC burning $20K/mo with 0.8 ROAS',
      interventions: 'Smart cart recovery system, PPC restructure, checkout optimization, email automation',
      outcomes: {
        timeframe: '90 days',
        results: [
          { metric: 'Revenue', value: '+$2M/yr', description: 'Additional annual revenue' },
          { metric: 'Cart Recovery', value: '+42%', description: 'Recovery rate improvement' },
          { metric: 'PPC ROAS', value: '3.2x', description: 'From 0.8x to 3.2x' }
        ]
      },
      stack: ['Magento 2', 'Klaviyo', 'Google Ads', 'GTM Server-side']
    },
    {
      id: 'technimark',
      title: '-67% CAC in 30 Days',
      company: 'Technimark-Inc',
      logo: '/technimark.png',
      industry: 'B2B Manufacturing',
      category: 'marketing',
      context: 'B2B manufacturer spending $30K/mo on Google Ads with declining lead quality',
      diagnosis: 'No conversion tracking, broad match keywords eating budget, landing pages had 14% bounce rate',
      interventions: 'GA4 + server-side tracking, negative keyword audit, dedicated landing pages per campaign',
      outcomes: {
        timeframe: '30 days',
        results: [
          { metric: 'CAC', value: '-67%', description: 'Customer acquisition cost reduction' },
          { metric: 'Lead Quality', value: '+215%', description: 'More qualified leads' },
          { metric: 'Ad Spend', value: '-40%', description: 'Reduced spend, more results' }
        ]
      },
      stack: ['Google Ads', 'GA4', 'GTM Server-side', 'Unbounce']
    },
    {
      id: 'voltech',
      title: '+45% Conversion in 14 Days',
      company: 'Voltech Electric',
      logo: '/voltech.png',
      industry: 'Local Services',
      category: 'conversion',
      context: 'Local electrician getting traffic but only 0.8% conversion rate',
      diagnosis: 'No trust signals, buried contact info, 8-second load time, no mobile optimization',
      interventions: 'Speed optimization, trust badges, click-to-call buttons, local SEO schema',
      outcomes: {
        timeframe: '14 days',
        results: [
          { metric: 'Conversion', value: '+45%', description: 'From 0.8% to 1.16%' },
          { metric: 'Page Speed', value: '2.1s', description: 'From 8s to 2.1s' },
          { metric: 'Mobile Leads', value: '+180%', description: 'Mobile conversion improvement' }
        ]
      },
      stack: ['WordPress', 'Cloudflare', 'Local SEO Tools']
    },
    {
      id: 'vsiswine',
      title: '3.2% CR in 21 Days',
      company: 'VSI Swine',
      logo: '/vsi-swine.png',
      industry: 'AgTech B2B',
      category: 'efficiency',
      context: 'B2B AgTech company with 0.8% conversion rate on $50K/mo ad spend',
      diagnosis: 'Complex 5-step checkout, no social proof, technical jargon, hidden pricing',
      interventions: 'One-page checkout, trust signals, plain language copy, transparent pricing',
      outcomes: {
        timeframe: '21 days',
        results: [
          { metric: 'Conversion Rate', value: '3.2%', description: 'From 0.8% to 3.2%' },
          { metric: 'Cost Per Lead', value: '-75%', description: 'Dramatic reduction' },
          { metric: 'Sales Qualified Leads', value: '+340%', description: 'Better quality leads' }
        ]
      },
      stack: ['Next.js', 'Vercel', 'Segment', 'HubSpot']
    },
    {
      id: 'grubs',
      title: '+156% Repeat Orders in 60 Days',
      company: 'Grubs Boots',
      logo: '/grubs.png',
      industry: 'E-Commerce Fashion',
      category: 'revenue',
      context: '$8M fashion brand with 12% repeat purchase rate and declining LTV',
      diagnosis: 'No post-purchase flow, generic email blasts, no segmentation, no loyalty program',
      interventions: 'Klaviyo flows, RFM segmentation, VIP program, win-back campaigns',
      outcomes: {
        timeframe: '60 days',
        results: [
          { metric: 'Repeat Rate', value: '+156%', description: 'From 12% to 31%' },
          { metric: 'Email Revenue', value: '+340%', description: 'From 8% to 35% of revenue' },
          { metric: 'CLV', value: '+89%', description: 'Customer lifetime value increase' }
        ]
      },
      stack: ['Shopify Plus', 'Klaviyo', 'Yotpo', 'Gorgias']
    }
  ];

  const filteredCaseStudies = selectedCategory === 'all'
    ? caseStudies
    : caseStudies.filter(cs => cs.category === selectedCategory);

  const seoData = getPageSEO('/results');

  return (
    <>
      <NextSEO {...seoData} />
      
      <div className="min-h-screen pt-20">
        {/* Header */}
        <section className="relative py-20 bg-white overflow-hidden">
          {/* Animated gradient orbs */}
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-0 right-1/4 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-0 left-1/2 w-64 h-64 bg-amber-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
          <div className="relative max-w-7xl mx-auto px-6 text-center">
            <motion.h1
              initial={{ opacity: 1, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold mb-4 text-gray-900"
            >
              Real Results, Real Revenue
            </motion.h1>
            <motion.p
              initial={{ opacity: 1, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl max-w-3xl mx-auto text-gray-600">
              See how we've helped businesses like yours achieve measurable growth and overcome their biggest challenges.
            </motion.p>
            <motion.div
              initial={{ opacity: 1, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-8"
            >
              <Link
                href="/contact/"
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-700 text-white text-lg font-medium rounded-lg hover:bg-blue-800 transition-all transform hover:scale-105 shadow-xl"
              >
                See What We'd Do For Your Store →
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="py-12 bg-gray-900 text-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl md:text-4xl font-bold mb-1">$2.5M+</div>
                <div className="text-gray-400">Revenue Generated</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold mb-1">35+</div>
                <div className="text-gray-400">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold mb-1">45%</div>
                <div className="text-gray-400">Avg Conversion Lift</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold mb-1">3.8x</div>
                <div className="text-gray-400">Past Client Average</div>
              </div>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 bg-gray-50 sticky top-20 z-10 shadow-sm">
          <div className="max-w-7xl mx-auto px-6">
            <p className="text-center text-gray-600 mb-4 font-medium">What matters most to you?</p>
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-6 py-3 rounded-full font-medium transition-all ${
                    selectedCategory === cat.id
                      ? 'bg-emerald-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <StaggerContainer className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="space-y-16">
              {filteredCaseStudies.map((study, index) => (
                <StaggerItem key={study.id} index={index}>
                  <div id={study.id} className="scroll-mt-24">
                    {/* Headline Metric Title */}
                    <h3 className="text-3xl font-bold mb-4">{study.title}</h3>

                    <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg">
                      <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
                        {/* Left Column - Context, Diagnosis, Interventions */}
                        <div>
                          <div className="flex items-center mb-6">
                            <div className="w-16 h-16 bg-white rounded-lg shadow-md p-2 mr-4 relative">
                              <Image
                                src={study.logo}
                                alt={`${study.company} logo`}
                                width={64}
                                height={64}
                                className="object-contain"
                                sizes="64px"
                                priority={false}
                              />
                            </div>
                            <div>
                              <h4 className="text-xl font-bold">{study.company}</h4>
                              <p className="text-gray-600">{study.industry}</p>
                            </div>
                          </div>

                          <div className="space-y-5">
                            <div>
                              <h5 className="font-bold text-gray-800 mb-2">Context</h5>
                              <p className="text-gray-700">{study.context}</p>
                            </div>

                            <div>
                              <h5 className="font-bold text-red-600 mb-2">Diagnosis</h5>
                              <p className="text-gray-700">{study.diagnosis}</p>
                            </div>

                            <div>
                              <h5 className="font-bold text-blue-600 mb-2">Interventions</h5>
                              <p className="text-gray-700">{study.interventions}</p>
                            </div>
                          </div>
                        </div>

                        {/* Right Column - Outcomes & Stack */}
                        <div>
                          <div className="bg-emerald-50 rounded-lg p-4 mb-6">
                            <h5 className="font-bold text-emerald-800 mb-2">
                              Outcomes ({study.outcomes.timeframe})
                            </h5>
                          </div>

                          <div className="space-y-4 mb-8">
                            {study.outcomes.results.map((result, idx) => (
                              <div key={idx} className="bg-white rounded-lg p-4 shadow">
                                <div className="flex items-baseline justify-between mb-1">
                                  <span className="font-medium text-gray-700">{result.metric}</span>
                                  <span className="text-2xl font-bold text-emerald-600">{result.value}</span>
                                </div>
                                <p className="text-sm text-gray-600">{result.description}</p>
                              </div>
                            ))}
                          </div>

                          {/* Stack */}
                          <div>
                            <h5 className="font-bold text-gray-800 mb-3">Stack</h5>
                            <div className="flex flex-wrap gap-2">
                              {study.stack.map(tech => (
                                <span key={tech} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* CTA Link */}
                          <div className="mt-8 pt-6 border-t border-gray-200">
                            <Link
                              href="/contact/"
                              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                            >
                              Get similar results →
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </div>
          </div>
        </StaggerContainer>

        {/* ROI Calculator CTA */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">
              What Could Your Results Look Like?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Use our ROI calculator to see your potential revenue growth
            </p>
            <Link 
              href="/#calculator"
              className="inline-flex items-center justify-center px-8 py-4 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-all font-medium">
              Calculate Your ROI →
            </Link>
          </div>
        </section>

        {/* CTA - Contained Card Style */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6">
            <div className="bg-gradient-to-br from-blue-800 to-emerald-800 text-white rounded-2xl p-12 text-center shadow-xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Be Our Next Success Story?
              </h2>
              <p className="text-xl mb-8 text-blue-100">
                Let's discuss how we can help you achieve similar results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <BookingLink
                  type="discovery"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-800 rounded-lg hover:bg-gray-100 transition-all font-medium">
                  See Your Custom Growth Plan →
                </BookingLink>
                <Link
                  href="/solutions/"
                  className="inline-flex items-center justify-center px-8 py-4 bg-emerald-700/20 backdrop-blur text-white border border-white/20 rounded-lg hover:bg-emerald-700/30 transition-all font-medium">
                  See Our Solutions
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom Spacing */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <p className="text-gray-600 text-lg">
              45+ companies stopped bleeding money. Your turn.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {},
  }
}