// components/Batches/BatchForm.js (with environmental logging feature)
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { fetchBatchById, createBatch, updateBatch } from '../../services/batchService';

const BatchForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditMode = Boolean(id);
  
  const [loading, setLoading] = useState(isEditMode);
  const [formData, setFormData] = useState({
    batchId: '',
    startDate: '',
    speciesStrain: '',
    spawnSource: '',
    substrateType: '',
    substratePrep: '',
    containerType: '',
    
    growingEnvironment: '',
    temperatureRange: '',
    humidityRange: '',
    lightSchedule: '',
    co2Management: '',
    environmentalNotes: '',
    
    inoculationDate: '',
    inoculationRate: '',
    spawnRunObservations: '',
    contaminationDuringColonization: '',
    
    // Environmental logs - new field
    environmentalLogs: [{ 
      date: '', 
      time: '', 
      humidity: '', 
      temperature: '',
      notes: ''
    }],
    
    fruitingPhases: [{ date: '', action: '', notes: '' }],
    
    harvestDetails: {
      totalWeight: '',
      marketableUnits: '',
      qualityNotes: '',
      contaminationDuringFruiting: ''
    },
    
    totalCycleTime: '',
    yieldPerPound: '',
    materialCost: '',
    salesRevenue: '',
    profitability: '',
    
    lessonsLearned: ''
  });
  
  const [error, setError] = useState('');
  const [activeSection, setActiveSection] = useState('basic');
  
  // Load batch data if in edit mode
  useEffect(() => {
    const loadBatch = async () => {
      if (isEditMode) {
        try {
          const batchData = await fetchBatchById(id);
          if (!batchData) {
            setError('Batch not found');
            setLoading(false);
            return;
          }
          
          // Ensure fruitingPhases is an array with at least one empty item
          let fruitingPhases = batchData.fruitingPhases || [];
          if (fruitingPhases.length === 0) {
            fruitingPhases = [{ date: '', action: '', notes: '' }];
          }
          
          // Ensure environmentalLogs is an array with at least one empty item
          let environmentalLogs = batchData.environmentalLogs || [];
          if (environmentalLogs.length === 0) {
            environmentalLogs = [{ 
              date: '', 
              time: '', 
              humidity: '', 
              temperature: '',
              notes: ''
            }];
          }
          
          // Ensure harvestDetails exists
          const harvestDetails = batchData.harvestDetails || {
            totalWeight: '',
            marketableUnits: '',
            qualityNotes: '',
            contaminationDuringFruiting: ''
          };
          
          setFormData({
            ...batchData,
            fruitingPhases,
            environmentalLogs,
            harvestDetails
          });
          
          setLoading(false);
        } catch (error) {
          console.error("Error loading batch data:", error);
          setError('Failed to load batch data for editing');
          setLoading(false);
        }
      }
    };
    
    loadBatch();
  }, [id, isEditMode]);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Handle nested fields
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setFormData(prev => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: value
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };
  
  const handleFruitingPhaseChange = (index, field, value) => {
    const updatedPhases = [...formData.fruitingPhases];
    updatedPhases[index] = {
      ...updatedPhases[index],
      [field]: value
    };
    
    setFormData(prev => ({
      ...prev,
      fruitingPhases: updatedPhases
    }));
  };
  
  const handleEnvironmentalLogChange = (index, field, value) => {
    const updatedLogs = [...formData.environmentalLogs];
    updatedLogs[index] = {
      ...updatedLogs[index],
      [field]: value
    };
    
    setFormData(prev => ({
      ...prev,
      environmentalLogs: updatedLogs
    }));
  };
  
  const addFruitingPhase = () => {
    setFormData(prev => ({
      ...prev,
      fruitingPhases: [
        ...prev.fruitingPhases,
        { date: '', action: '', notes: '' }
      ]
    }));
  };
  
  const addEnvironmentalLog = () => {
    setFormData(prev => ({
      ...prev,
      environmentalLogs: [
        ...prev.environmentalLogs,
        { date: '', time: '', humidity: '', temperature: '', notes: '' }
      ]
    }));
  };
  
  const removeFruitingPhase = (index) => {
    if (formData.fruitingPhases.length <= 1) return;
    
    const updatedPhases = [...formData.fruitingPhases];
    updatedPhases.splice(index, 1);
    
    setFormData(prev => ({
      ...prev,
      fruitingPhases: updatedPhases
    }));
  };
  
  const removeEnvironmentalLog = (index) => {
    if (formData.environmentalLogs.length <= 1) return;
    
    const updatedLogs = [...formData.environmentalLogs];
    updatedLogs.splice(index, 1);
    
    setFormData(prev => ({
      ...prev,
      environmentalLogs: updatedLogs
    }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Clone the form data
    const batchToSubmit = { ...formData };
    
    // Filter out empty environmental logs
    if (batchToSubmit.environmentalLogs) {
      batchToSubmit.environmentalLogs = batchToSubmit.environmentalLogs.filter(
        log => log.date && log.date.trim() !== ''
      );
      
      // If all are empty, remove the field
      if (batchToSubmit.environmentalLogs.length === 0) {
        delete batchToSubmit.environmentalLogs;
      }
    }
    
    // Filter out empty fruiting phases
    if (batchToSubmit.fruitingPhases) {
      batchToSubmit.fruitingPhases = batchToSubmit.fruitingPhases.filter(
        phase => phase.date && phase.date.trim() !== '' && phase.action && phase.action.trim() !== ''
      );
      
      // If all are empty, remove the field
      if (batchToSubmit.fruitingPhases.length === 0) {
        delete batchToSubmit.fruitingPhases;
      }
    }
    
    try {
      if (isEditMode) {
        await updateBatch(id, batchToSubmit);
      } else {
        await createBatch(batchToSubmit);
      }
      
      navigate('/batches');
    } catch (error) {
      console.error("Error saving batch:", error);
      setError('Failed to save batch data: ' + error.message);
    }
  };
  
  const renderBasicInfoSection = () => (
    <div className={`${activeSection === 'basic' ? 'block' : 'hidden'}`}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-teal-400 mb-1">
            Batch ID*
          </label>
          <input
            type="text"
            name="batchId"
            value={formData.batchId}
            onChange={handleChange}
            className="w-full p-2 bg-gray-700 border border-gray-600 rounded text-gray-200"
            placeholder="e.g., Oyster-01"
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-teal-400 mb-1">
            Start Date*
          </label>
          <input
            type="date"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            className="w-full p-2 bg-gray-700 border border-gray-600 rounded text-gray-200"
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-teal-400 mb-1">
            Species/Strain*
          </label>
          <input
            type="text"
            name="speciesStrain"
            value={formData.speciesStrain}
            onChange={handleChange}
            className="w-full p-2 bg-gray-700 border border-gray-600 rounded text-gray-200"
            placeholder="e.g., Pleurotus ostreatus — Blue Oyster"
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-teal-400 mb-1">
            Spawn Source
          </label>
          <input
            type="text"
            name="spawnSource"
            value={formData.spawnSource}
            onChange={handleChange}
            className="w-full p-2 bg-gray-700 border border-gray-600 rounded text-gray-200"
            placeholder="Supplier + Lot # if available"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-teal-400 mb-1">
            Substrate Type
          </label>
          <input
            type="text"
            name="substrateType"
            value={formData.substrateType}
            onChange={handleChange}
            className="w-full p-2 bg-gray-700 border border-gray-600 rounded text-gray-200"
            placeholder="e.g., straw, sawdust, supplemented hardwood"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-teal-400 mb-1">
            Substrate Prep Method
          </label>
          <input
            type="text"
            name="substratePrep"
            value={formData.substratePrep}
            onChange={handleChange}
            className="w-full p-2 bg-gray-700 border border-gray-600 rounded text-gray-200"
            placeholder="Pasteurized, sterilized, hydrated with supplements, etc."
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-teal-400 mb-1">
            Container Type
          </label>
          <input
            type="text"
            name="containerType"
            value={formData.containerType}
            onChange={handleChange}
            className="w-full p-2 bg-gray-700 border border-gray-600 rounded text-gray-200"
            placeholder="Bag, Bucket, Tray"
          />
        </div>
      </div>
    </div>
  );
  
  const renderEnvironmentalSection = () => (
    <div className={`${activeSection === 'environmental' ? 'block' : 'hidden'}`}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-teal-400 mb-1">
            Growing Environment
          </label>
          <input
            type="text"
            name="growingEnvironment"
            value={formData.growingEnvironment}
            onChange={handleChange}
            className="w-full p-2 bg-gray-700 border border-gray-600 rounded text-gray-200"
            placeholder="Indoor tent, grow room, outdoor shadehouse"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-teal-400 mb-1">
            Temperature Range
          </label>
          <input
            type="text"
            name="temperatureRange"
            value={formData.temperatureRange}
            onChange={handleChange}
            className="w-full p-2 bg-gray-700 border border-gray-600 rounded text-gray-200"
            placeholder="Day/Night °F/°C"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-teal-400 mb-1">
            Humidity Range
          </label>
          <input
            type="text"
            name="humidityRange"
            value={formData.humidityRange}
            onChange={handleChange}
            className="w-full p-2 bg-gray-700 border border-gray-600 rounded text-gray-200"
            placeholder="%"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-teal-400 mb-1">
            Light Schedule
          </label>
          <input
            type="text"
            name="lightSchedule"
            value={formData.lightSchedule}
            onChange={handleChange}
            className="w-full p-2 bg-gray-700 border border-gray-600 rounded text-gray-200"
            placeholder="Hours/day"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-teal-400 mb-1">
            CO₂ Management
          </label>
          <input
            type="text"
            name="co2Management"
            value={formData.co2Management}
            onChange={handleChange}
            className="w-full p-2 bg-gray-700 border border-gray-600 rounded text-gray-200"
            placeholder="Open room, passive airflow, active exhaust"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-teal-400 mb-1">
            Notes
          </label>
          <textarea
            name="environmentalNotes"
            value={formData.environmentalNotes}
            onChange={handleChange}
            className="w-full p-2 bg-gray-700 border border-gray-600 rounded text-gray-200"
            placeholder="e.g., sudden temp spikes, mold outbreak nearby"
            rows="3"
          ></textarea>
        </div>
      </div>
    </div>
  );
  
  const renderInoculationSection = () => (
    <div className={`${activeSection === 'inoculation' ? 'block' : 'hidden'}`}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-teal-400 mb-1">
            Date Inoculated
          </label>
          <input
            type="date"
            name="inoculationDate"
            value={formData.inoculationDate}
            onChange={handleChange}
            className="w-full p-2 bg-gray-700 border border-gray-600 rounded text-gray-200"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-teal-400 mb-1">
            Inoculation Rate
          </label>
          <input
            type="text"
            name="inoculationRate"
            value={formData.inoculationRate}
            onChange={handleChange}
            className="w-full p-2 bg-gray-700 border border-gray-600 rounded text-gray-200"
            placeholder="Spawn % — e.g., 10%, 15% by weight"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-teal-400 mb-1">
            Spawn Run Observations
          </label>
          <textarea
            name="spawnRunObservations"
            value={formData.spawnRunObservations}
            onChange={handleChange}
            className="w-full p-2 bg-gray-700 border border-gray-600 rounded text-gray-200"
            placeholder="Mycelium growth speed, appearance"
            rows="3"
          ></textarea>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-teal-400 mb-1">
            Contamination Observed During Colonization
          </label>
          <input
            type="text"
            name="contaminationDuringColonization"
            value={formData.contaminationDuringColonization}
            onChange={handleChange}
            className="w-full p-2 bg-gray-700 border border-gray-600 rounded text-gray-200"
            placeholder="Type if any — e.g., green mold, cobweb"
          />
        </div>
      </div>
    </div>
  );
  
  // New section for environmental logs
  const renderEnvironmentalLogsSection = () => (
    <div className={`${activeSection === 'logs' ? 'block' : 'hidden'}`}>
      <div className="mb-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium text-teal-400">Environmental Measurement Logs</h3>
          <button
            type="button"
            onClick={addEnvironmentalLog}
            className="bg-teal-900 text-teal-200 px-3 py-1 rounded hover:bg-teal-800"
          >
            + Add New Log
          </button>
        </div>
        
        {formData.environmentalLogs.map((log, index) => (
          <div key={index} className="mb-4 p-4 border border-gray-600 rounded bg-gray-800">
            <div className="flex justify-between items-center mb-2">
              <h4 className="font-medium text-teal-300">Log Entry #{index + 1}</h4>
              {formData.environmentalLogs.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeEnvironmentalLog(index)}
                  className="text-red-400 hover:text-red-300"
                >
                  Remove
                </button>
              )}
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-2">
              <div>
                <label className="block text-sm font-medium text-teal-400 mb-1">
                  Date
                </label>
                <input
                  type="date"
                  value={log.date}
                  onChange={(e) => handleEnvironmentalLogChange(index, 'date', e.target.value)}
                  className="w-full p-2 bg-gray-700 border border-gray-600 rounded text-gray-200"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-teal-400 mb-1">
                  Time
                </label>
                <input
                  type="time"
                  value={log.time}
                  onChange={(e) => handleEnvironmentalLogChange(index, 'time', e.target.value)}
                  className="w-full p-2 bg-gray-700 border border-gray-600 rounded text-gray-200"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-teal-400 mb-1">
                  Humidity (%)
                </label>
                <input
                  type="number"
                  min="0"
                  max="100"
                  value={log.humidity}
                  onChange={(e) => handleEnvironmentalLogChange(index, 'humidity', e.target.value)}
                  className="w-full p-2 bg-gray-700 border border-gray-600 rounded text-gray-200"
                  placeholder="e.g., 85"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-teal-400 mb-1">
                  Temperature (°F)
                </label>
                <input
                  type="number"
                  value={log.temperature}
                  onChange={(e) => handleEnvironmentalLogChange(index, 'temperature', e.target.value)}
                  className="w-full p-2 bg-gray-700 border border-gray-600 rounded text-gray-200"
                  placeholder="e.g., 72"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-teal-400 mb-1">
                Notes
              </label>
              <textarea
                value={log.notes}
                onChange={(e) => handleEnvironmentalLogChange(index, 'notes', e.target.value)}
                className="w-full p-2 bg-gray-700 border border-gray-600 rounded text-gray-200"
                placeholder="Any observations, changes made, etc."
                rows="2"
              ></textarea>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
  
  const renderFruitingSection = () => (
    <div className={`${activeSection === 'fruiting' ? 'block' : 'hidden'}`}>
      <div className="mb-4">
        <div className="flex justify-end">
          <button
            type="button"
            onClick={addFruitingPhase}
            className="text-teal-400 hover:text-teal-300"
          >
            + Add Fruiting Phase
          </button>
        </div>
        
        {formData.fruitingPhases.map((phase, index) => (
          <div key={index} className="mb-4 p-4 border border-gray-600 rounded bg-gray-800">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-md font-medium text-teal-300">Fruiting Phase {index + 1}</h3>
              {formData.fruitingPhases.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeFruitingPhase(index)}
                  className="text-red-400 hover:text-red-300"
                >
                  Remove
                </button>
              )}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-teal-400 mb-1">
                  Date
                </label>
                <input
                  type="date"
                  value={phase.date}
                  onChange={(e) => handleFruitingPhaseChange(index, 'date', e.target.value)}
                  className="w-full p-2 bg-gray-700 border border-gray-600 rounded text-gray-200"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-teal-400 mb-1">
                  Action
                </label>
                <select
                  value={phase.action}
                  onChange={(e) => handleFruitingPhaseChange(index, 'action', e.target.value)}
                  className="w-full p-2 bg-gray-700 border border-gray-600 rounded text-gray-200"
                >
                  <option value="">Select an action</option>
                  <option value="First signs of pinning">First signs of pinning</option>
                  <option value="First flush harvested">First flush harvested</option>
                  <option value="Second flush harvested">Second flush harvested</option>
                  <option value="Third flush harvested">Third flush harvested</option>
                  <option value="Final harvest">Final harvest</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-teal-400 mb-1">
                  Notes
                </label>
                <input
                  type="text"
                  value={phase.notes}
                  onChange={(e) => handleFruitingPhaseChange(index, 'notes', e.target.value)}
                  className="w-full p-2 bg-gray-700 border border-gray-600 rounded text-gray-200"
                  placeholder="Pinning, Misting, Contamination, Conditions"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
  
  const renderHarvestSection = () => (
    <div className={`${activeSection === 'harvest' ? 'block' : 'hidden'}`}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-teal-400 mb-1">
            Total Weight Harvested
          </label>
          <input
            type="text"
            name="harvestDetails.totalWeight"
            value={formData.harvestDetails.totalWeight}
            onChange={handleChange}
            className="w-full p-2 bg-gray-700 border border-gray-600 rounded text-gray-200"
            placeholder="e.g., 500g First Flush, 400g Second Flush"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-teal-400 mb-1">
            Number of Marketable Units
          </label>
          <input
            type="text"
            name="harvestDetails.marketableUnits"
            value={formData.harvestDetails.marketableUnits}
            onChange={handleChange}
            className="w-full p-2 bg-gray-700 border border-gray-600 rounded text-gray-200"
            placeholder="e.g., clamshells packed, pounds sold"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-teal-400 mb-1">
            Quality Notes
          </label>
          <textarea
            name="harvestDetails.qualityNotes"
            value={formData.harvestDetails.qualityNotes}
            onChange={handleChange}
            className="w-full p-2 bg-gray-700 border border-gray-600 rounded text-gray-200"
            placeholder="Cap size, color, texture, off-types"
            rows="3"
          ></textarea>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-teal-400 mb-1">
            Contamination During Fruiting
          </label>
          <input
            type="text"
            name="harvestDetails.contaminationDuringFruiting"
            value={formData.harvestDetails.contaminationDuringFruiting}
            onChange={handleChange}
            className="w-full p-2 bg-gray-700 border border-gray-600 rounded text-gray-200"
            placeholder="Describe if found"
          />
        </div>
      </div>
    </div>
  );
  
  // Combined Summary and Lessons section
  const renderSummaryLessonsSection = () => (
    <div className={`${activeSection === 'summary' ? 'block' : 'hidden'}`}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-teal-400 mb-1">
            Total Cycle Time
          </label>
          <input
            type="text"
            name="totalCycleTime"
            value={formData.totalCycleTime}
            onChange={handleChange}
            className="w-full p-2 bg-gray-700 border border-gray-600 rounded text-gray-200"
            placeholder="Days"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-teal-400 mb-1">
            Yield per lb of substrate
          </label>
          <input
            type="text"
            name="yieldPerPound"
            value={formData.yieldPerPound}
            onChange={handleChange}
            className="w-full p-2 bg-gray-700 border border-gray-600 rounded text-gray-200"
            placeholder="Efficiency metric"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-teal-400 mb-1">
            Cost of Materials
          </label>
          <input
            type="text"
            name="materialCost"
            value={formData.materialCost}
            onChange={handleChange}
            className="w-full p-2 bg-gray-700 border border-gray-600 rounded text-gray-200"
            placeholder="Spawn + Substrate + Utilities"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-teal-400 mb-1">
            Sales/Revenue
          </label>
          <input
            type="text"
            name="salesRevenue"
            value={formData.salesRevenue}
            onChange={handleChange}
            className="w-full p-2 bg-gray-700 border border-gray-600 rounded text-gray-200"
            placeholder="If applicable"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-teal-400 mb-1">
            Profitability Estimate
          </label>
          <input
            type="text"
            name="profitability"
            value={formData.profitability}
            onChange={handleChange}
            className="w-full p-2 bg-gray-700 border border-gray-600 rounded text-gray-200"
            placeholder="Optional — good for scaling later"
          />
        </div>
      </div>
      
      <div>
        <label className="block text-lg font-medium text-teal-400 mb-2">
          Lessons Learned / Adjustments for Next Time
        </label>
        <textarea
          name="lessonsLearned"
          value={formData.lessonsLearned}
          onChange={handleChange}
          className="w-full p-2 bg-gray-700 border border-gray-600 rounded text-gray-200"
          placeholder="What would you do differently next time?"
          rows="5"
        ></textarea>
      </div>
    </div>
  );
  
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-teal-400">
          {isEditMode ? `Edit Batch: ${formData.batchId}` : 'Create New Batch'}
        </h1>
        <Link 
          to="/batches"
          className="bg-gray-700 text-teal-400 px-4 py-2 rounded hover:bg-gray-600"
        >
          Cancel
        </Link>
      </div>
      
      {error && (
        <div className="bg-red-900 border border-red-700 text-red-200 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}
      
      <form onSubmit={handleSubmit}>
        <div className="bg-gray-800 rounded-lg shadow overflow-hidden mb-6 border border-gray-700">
          {/* Form Sections Navigation */}
          <div className="bg-gray-900 p-4 border-b border-gray-700 overflow-x-auto">
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                className={`px-3 py-2 rounded ${activeSection === 'basic' ? 'bg-teal-600 text-gray-200' : 'bg-gray-700 text-teal-400'}`}
                onClick={() => setActiveSection('basic')}
              >
                🗓️ Basic Info
              </button>
              <button
                type="button"
                className={`px-3 py-2 rounded ${activeSection === 'environmental' ? 'bg-teal-600 text-gray-200' : 'bg-gray-700 text-teal-400'}`}
                onClick={() => setActiveSection('environmental')}
              >
                🌡️ Environment
              </button>
              <button
                type="button"
                className={`px-3 py-2 rounded ${activeSection === 'logs' ? 'bg-teal-600 text-gray-200' : 'bg-gray-700 text-teal-400'}`}
                onClick={() => setActiveSection('logs')}
              >
                📊 Env Logs
              </button>
              <button
                type="button"
                className={`px-3 py-2 rounded ${activeSection === 'inoculation' ? 'bg-teal-600 text-gray-200' : 'bg-gray-700 text-teal-400'}`}
                onClick={() => setActiveSection('inoculation')}
              >
                🧫 Inoculation
              </button>
              <button
                type="button"
                className={`px-3 py-2 rounded ${activeSection === 'fruiting' ? 'bg-teal-600 text-gray-200' : 'bg-gray-700 text-teal-400'}`}
                onClick={() => setActiveSection('fruiting')}
              >
                📈 Fruiting
              </button>
              <button
                type="button"
                className={`px-3 py-2 rounded ${activeSection === 'harvest' ? 'bg-teal-600 text-gray-200' : 'bg-gray-700 text-teal-400'}`}
                onClick={() => setActiveSection('harvest')}
              >
                📦 Harvest
              </button>
              <button
                type="button"
                className={`px-3 py-2 rounded ${activeSection === 'summary' ? 'bg-teal-600 text-gray-200' : 'bg-gray-700 text-teal-400'}`}
                onClick={() => setActiveSection('summary')}
              >
                📋 Summary & Lessons
              </button>
            </div>
          </div>
          
          {/* Form Fields */}
          <div className="p-6">
            {renderBasicInfoSection()}
            {renderEnvironmentalSection()}
            {renderEnvironmentalLogsSection()} {/* New section for logs */}
            {renderInoculationSection()}
            {renderFruitingSection()}
            {renderHarvestSection()}
            {renderSummaryLessonsSection()} {/* Combined summary and lessons */}
          </div>
        </div>
        
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-teal-600 text-gray-200 px-6 py-2 rounded hover:bg-teal-700"
          >
            {isEditMode ? 'Update Batch' : 'Create Batch'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default BatchForm;