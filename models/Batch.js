// models/Batch.js
const mongoose = require('mongoose');

const FruitingPhaseSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true
  },
  action: {
    type: String,
    required: true
  },
  notes: {
    type: String
  }
});

const EnvironmentalLogSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true
  },
  time: {
    type: String
  },
  humidity: {
    type: Number
  },
  temperature: {
    type: Number
  },
  notes: {
    type: String
  }
});

const HarvestDetailsSchema = new mongoose.Schema({
  totalWeight: {
    type: String
  },
  marketableUnits: {
    type: String
  },
  qualityNotes: {
    type: String
  },
  contaminationDuringFruiting: {
    type: String
  }
});

const BatchSchema = new mongoose.Schema({
  batchId: {
    type: String,
    required: true,
    trim: true
  },
  startDate: {
    type: Date,
    required: true
  },
  speciesStrain: {
    type: String,
    required: true
  },
  spawnSource: {
    type: String
  },
  substrateType: {
    type: String
  },
  substratePrep: {
    type: String
  },
  containerType: {
    type: String
  },
  
  // Environmental conditions
  growingEnvironment: {
    type: String
  },
  temperatureRange: {
    type: String
  },
  humidityRange: {
    type: String
  },
  lightSchedule: {
    type: String
  },
  co2Management: {
    type: String
  },
  environmentalNotes: {
    type: String
  },
  
  // Environmental logs - NEW
  environmentalLogs: {
    type: [EnvironmentalLogSchema],
    default: undefined  // This makes it truly optional
  },
  
  // Inoculation details
  inoculationDate: {
    type: Date
  },
  inoculationRate: {
    type: String
  },
  spawnRunObservations: {
    type: String
  },
  contaminationDuringColonization: {
    type: String
  },
  
  // Fruiting phase tracking
  fruitingPhases: {
    type: [FruitingPhaseSchema],
    default: undefined  // This makes it truly optional
  },
  
  // Harvest details
  harvestDetails: {
    type: HarvestDetailsSchema,
    default: {}
  },
  
  // Final summary
  totalCycleTime: {
    type: String
  },
  yieldPerPound: {
    type: String
  },
  materialCost: {
    type: String
  },
  salesRevenue: {
    type: String
  },
  profitability: {
    type: String
  },
  
  // Lessons learned
  lessonsLearned: {
    type: String
  },
  
  // Metadata
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  },
  userId: {
    type: String,
    required: true
  }
});

// Update timestamp on save
BatchSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model('Batch', BatchSchema);