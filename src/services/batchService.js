import api from './api';

// Get all batches
export const fetchBatches = async () => {
  try {
    // Try localStorage first (for demo purposes)
    if (localStorage.getItem('batches')) {
      return JSON.parse(localStorage.getItem('batches'));
    }
    
    // If no localStorage data, try the API
    const response = await api.get('/batches');
    return response.data;
  } catch (error) {
    console.error("API Error:", error);
    // Fallback to localStorage mock data for demo
    initializeData();
    return JSON.parse(localStorage.getItem('batches') || '[]');
  }
};

// Get a single batch
export const fetchBatchById = async (id) => {
  try {
    // Try localStorage first (for demo purposes)
    const batches = JSON.parse(localStorage.getItem('batches') || '[]');
    const localBatch = batches.find(batch => batch._id === id);
    
    if (localBatch) {
      return localBatch;
    }
    
    // If no localStorage data, try the API
    const response = await api.get(`/batches/${id}`);
    return response.data;
  } catch (error) {
    console.error("API Error:", error);
    // Fallback to localStorage for demo
    const batches = JSON.parse(localStorage.getItem('batches') || '[]');
    return batches.find(batch => batch._id === id);
  }
};

// Create a new batch
export const createBatch = async (batchData) => {
  try {
    // Try API first
    const response = await api.post('/batches', batchData);
    return response.data;
  } catch (error) {
    console.error("API Error:", error);
    // Fallback to localStorage for demo
    const batches = JSON.parse(localStorage.getItem('batches') || '[]');
    
    const newBatch = {
      ...batchData,
      _id: Math.random().toString(36).substr(2, 9),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      userId: 'admin'
    };
    
    batches.push(newBatch);
    localStorage.setItem('batches', JSON.stringify(batches));
    
    return newBatch;
  }
};

// Update a batch
export const updateBatch = async (id, batchData) => {
  try {
    // Try API first
    const response = await api.put(`/batches/${id}`, batchData);
    return response.data;
  } catch (error) {
    console.error("API Error:", error);
    // Fallback to localStorage for demo
    const batches = JSON.parse(localStorage.getItem('batches') || '[]');
    
    const batchIndex = batches.findIndex(batch => batch._id === id);
    
    if (batchIndex === -1) {
      throw new Error('Batch not found');
    }
    
    const updatedBatch = {
      ...batches[batchIndex],
      ...batchData,
      updatedAt: new Date().toISOString()
    };
    
    batches[batchIndex] = updatedBatch;
    localStorage.setItem('batches', JSON.stringify(batches));
    
    return updatedBatch;
  }
};

// Delete a batch
export const deleteBatch = async (id) => {
  try {
    // Try API first
    await api.delete(`/batches/${id}`);
    return { success: true };
  } catch (error) {
    console.error("API Error:", error);
    // Fallback to localStorage for demo
    const batches = JSON.parse(localStorage.getItem('batches') || '[]');
    
    const filteredBatches = batches.filter(batch => batch._id !== id);
    
    if (filteredBatches.length === batches.length) {
      throw new Error('Batch not found');
    }
    
    localStorage.setItem('batches', JSON.stringify(filteredBatches));
    
    return { success: true };
  }
};

// Initialize mock data for localStorage demo
const initialBatches = [
  {
    _id: "1",
    batchId: "Oyster-01",
    startDate: "2025-04-15",
    speciesStrain: "Pleurotus ostreatus — Blue Oyster",
    spawnSource: "MushCo Supplies (Lot #P123)",
    substrateType: "Supplemented hardwood sawdust",
    substratePrep: "Sterilized",
    containerType: "Bag",
    
    growingEnvironment: "Indoor tent",
    temperatureRange: "65-75°F",
    humidityRange: "85-95%",
    lightSchedule: "12 hours/day",
    co2Management: "Passive airflow",
    environmentalNotes: "Stable conditions throughout grow",
    
    inoculationDate: "2025-04-15",
    inoculationRate: "15% by weight",
    spawnRunObservations: "Fast colonization, dense white mycelium",
    contaminationDuringColonization: "None",
    
    fruitingPhases: [
      {
        date: "2025-04-28",
        action: "First signs of pinning",
        notes: "Small pins appearing evenly across substrate"
      },
      {
        date: "2025-05-02",
        action: "First flush harvested",
        notes: "Excellent yield, uniform size"
      }
    ],
    
    harvestDetails: {
      totalWeight: "550g First Flush, 550g Total",
      marketableUnits: "10 clamshells packed",
      qualityNotes: "Excellent cap size and color",
      contaminationDuringFruiting: "None"
    },
    
    totalCycleTime: "17 days",
    yieldPerPound: "0.75 lbs/lb substrate",
    materialCost: "$15",
    salesRevenue: "$100",
    profitability: "$85 profit",
    
    lessonsLearned: "Excellent first run. Consider higher humidity for second flush.",
    
    createdAt: "2025-04-15",
    updatedAt: "2025-05-03",
    userId: "admin"
  },
  {
    _id: "2",
    batchId: "Shiitake-01",
    startDate: "2025-04-10",
    speciesStrain: "Lentinula edodes — Donko",
    spawnSource: "MushCo Supplies (Lot #S456)",
    substrateType: "Hardwood sawdust blocks",
    substratePrep: "Sterilized",
    containerType: "Bag",
    
    growingEnvironment: "Grow room",
    temperatureRange: "60-70°F",
    humidityRange: "80-90%",
    lightSchedule: "8 hours/day",
    co2Management: "Active exhaust",
    environmentalNotes: "Cold snap on days 7-9",
    
    inoculationDate: "2025-04-10",
    inoculationRate: "10% by weight",
    spawnRunObservations: "Moderate colonization speed, yellowing mycelium normal for strain",
    contaminationDuringColonization: "None",
    
    fruitingPhases: [
      {
        date: "2025-04-30",
        action: "Browning of substrate",
        notes: "Block developing brown outer layer"
      }
    ],
    
    // No harvest details yet - still growing
    
    lessonsLearned: "Colonization slower than oysters but proceeding normally.",
    
    createdAt: "2025-04-10",
    updatedAt: "2025-04-30",
    userId: "admin"
  }
];

// Initialize data in localStorage
const initializeData = () => {
  if (!localStorage.getItem('batches')) {
    localStorage.setItem('batches', JSON.stringify(initialBatches));
  }
};