
const contactConfig = {
  // Business name
  businessName: 'Forgewise',
  fullBusinessName: 'Forgewise.io',
  
  // Contact methods
  phoneDisplay: '(312) 555-0190',
  phoneLink: '+13125550190',
  email: 'admin@forgewise.io',
  
  // Consultation links - using real Calendly URL
  calendly: {
    discovery: 'https://calendly.com/admin-forgewise/30min',
    consultation: 'https://calendly.com/admin-forgewise/30min',
    implementation: 'https://calendly.com/admin-forgewise/30min',
    audit15min: 'https://calendly.com/admin-forgewise/30min',
    consult30min: 'https://calendly.com/admin-forgewise/30min'
  },
  
  // Location
  location: {
    city: 'Chicago',
    state: 'IL',
    full: 'Chicago, IL',
    country: 'USA'
  },
  
  // Response times
  responseTimes: {
    standard: '1 business day',
    priority: 'Same day',
    consultation: 'Within 24 hours'
  },
  
  // Service tiers
  serviceTiers: {
    assessment: {
      name: 'Strategic Assessment',
      description: 'Comprehensive analysis of your current challenges',
      timeline: '1-2 weeks',
      deliverables: ['Current state analysis', 'Opportunity identification', 'Strategic roadmap']
    },
    quickWin: {
      name: 'Quick Win Implementation',
      description: 'Rapid deployment of high-impact solutions',
      timeline: '2-4 weeks',
      deliverables: ['Solution design', 'Implementation', 'Training & handoff']
    },
    transformation: {
      name: 'Full Transformation',
      description: 'End-to-end business transformation',
      timeline: '2-6 months',
      deliverables: ['Strategic planning', 'Phased implementation', 'Change management', 'Ongoing optimization']
    }
  }
};

export default contactConfig;