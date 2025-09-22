
const contactConfig = {
  // Business name
  businessName: 'Forgewise',
  fullBusinessName: 'Forgewise.io',
  
  // Contact methods - to be configured
  phoneDisplay: '(555) 123-4567',
  phoneLink: '5551234567',
  
  // Consultation links
  calendly: {
    discovery: 'https://calendly.com/forgewise/discovery',
    consultation: 'https://calendly.com/forgewise/consultation',
    implementation: 'https://calendly.com/forgewise/implementation',
    audit15min: 'https://calendly.com/forgewise/15min-audit',
    consult30min: 'https://calendly.com/forgewise/30min-consult'
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