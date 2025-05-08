// components/Batches/BatchDetail.js
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchBatchById } from '../../services/batchService';

const BatchDetail = () => {
  const { id } = useParams();
  const [batch, setBatch] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeSection, setActiveSection] = useState(null);
  
  useEffect(() => {
    const loadBatch = async () => {
      try {
        const data = await fetchBatchById(id);
        if (!data) {
          setError('Batch not found');
        } else {
          setBatch(data);
          // Set the first section as active by default
          setActiveSection('basic');
        }
        setLoading(false);
      } catch (error) {
        console.error("Error loading batch:", error);
        setError('Failed to load batch details');
        setLoading(false);
      }
    };
    
    loadBatch();
  }, [id]);
  
  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-xl text-slate-300">Loading batch details...</div>
      </div>
    );
  }
  
  if (error) {
    return (
      <div className="bg-red-900/30 border border-red-800 text-red-300 px-4 py-3 rounded mb-4">
        {error}
      </div>
    );
  }

  // Section component for consistent styling
  const Section = ({ title, emoji, id, children }) => {
    const isActive = activeSection === id;
    
    return (
      <div className="bg-slate-700 rounded-lg shadow-lg mb-4 overflow-hidden border border-slate-600">
        <button 
          className="w-full border-b border-slate-600 px-4 py-3 flex items-center justify-between focus:outline-none hover:bg-slate-600/50 transition-colors"
          onClick={() => setActiveSection(isActive ? null : id)}
        >
          <h2 className="text-lg font-semibold text-teal-300 flex items-center">
            <span className="mr-2">{emoji}</span> {title}
          </h2>
          <span className="text-teal-400 text-lg">
            {isActive ? '−' : '+'}
          </span>
        </button>
        
        {isActive && (
          <div className="p-4 text-slate-200">
            {children}
          </div>
        )}
      </div>
    );
  };
  
  // Field component for consistent rendering of label/value pairs
  const Field = ({ label, value }) => (
    <div className="mb-4">
      <h3 className="text-sm font-medium text-slate-400">{label}</h3>
      <p className="mt-1 text-slate-200">{value || "—"}</p>
    </div>
  );

  // Table component for fruiting phases and environmental logs
  const DataTable = ({ headers, data, renderRow }) => (
    <div className="overflow-x-auto -mx-4 sm:mx-0">
      <div className="inline-block min-w-full align-middle px-4 sm:px-0">
        <table className="min-w-full divide-y divide-slate-600">
          <thead>
            <tr>
              {headers.map((header, index) => (
                <th 
                  key={index}
                  className="px-3 py-2 text-left text-xs font-medium text-slate-400 uppercase tracking-wider"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-600">
            {data.map((item, index) => renderRow(item, index))}
          </tbody>
        </table>
      </div>
    </div>
  );
  
  return (
    <div className="pb-12 max-w-5xl mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
        <h1 className="text-2xl font-semibold text-teal-300">
          Batch Details: {batch.batchId}
        </h1>
        <div className="flex flex-wrap gap-2">
          <Link 
            to={`/batches/edit/${batch._id}`}
            className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-md transition-colors text-sm sm:text-base text-center"
          >
            Edit Batch
          </Link>
          <Link 
            to="/batches"
            className="bg-slate-700 hover:bg-slate-600 text-teal-300 px-4 py-2 rounded-md transition-colors text-sm sm:text-base text-center"
          >
            Back to List
          </Link>
        </div>
      </div>
      
      {/* Basic Batch Information */}
      <Section title="Basic Batch Information" emoji="🗓️" id="basic">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field label="Batch ID" value={batch.batchId} />
          <Field label="Start Date" value={batch.startDate ? new Date(batch.startDate).toLocaleDateString() : ""} />
          <Field label="Species/Strain" value={batch.speciesStrain} />
          <Field label="Spawn Source" value={batch.spawnSource} />
          <Field label="Substrate Type" value={batch.substrateType} />
          <Field label="Substrate Prep Method" value={batch.substratePrep} />
          <Field label="Container Type" value={batch.containerType} />
        </div>
      </Section>
      
      {/* Environmental Conditions */}
      <Section title="Environmental Conditions" emoji="🌡️" id="environmental">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field label="Growing Environment" value={batch.growingEnvironment} />
          <Field label="Temperature Range" value={batch.temperatureRange} />
          <Field label="Humidity Range" value={batch.humidityRange} />
          <Field label="Light Schedule" value={batch.lightSchedule} />
          <Field label="CO₂ Management" value={batch.co2Management} />
          <Field label="Notes" value={batch.environmentalNotes || "No notes recorded"} />
        </div>
      </Section>
      
      {/* Environmental Logs */}
      {batch.environmentalLogs && batch.environmentalLogs.length > 0 && (
        <Section title="Environmental Logs" emoji="📊" id="logs">
          {!batch.environmentalLogs || batch.environmentalLogs.length === 0 ? (
            <p className="text-slate-400">No environmental logs recorded yet.</p>
          ) : (
            <DataTable 
              headers={["Date", "Time", "Humidity", "Temp", "Notes"]}
              data={batch.environmentalLogs}
              renderRow={(log, index) => (
                <tr key={index} className={index % 2 === 0 ? "bg-slate-800" : "bg-slate-700"}>
                  <td className="px-3 py-2 whitespace-nowrap text-sm">
                    {log.date ? new Date(log.date).toLocaleDateString() : ""}
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm">
                    {log.time || ""}
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm">
                    {log.humidity !== null && log.humidity !== undefined ? `${log.humidity}%` : ""}
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm">
                    {log.temperature !== null && log.temperature !== undefined ? `${log.temperature}°F` : ""}
                  </td>
                  <td className="px-3 py-2 text-sm">
                    {log.notes || ""}
                  </td>
                </tr>
              )}
            />
          )}
        </Section>
      )}
      
      {/* Inoculation Details */}
      <Section title="Inoculation Details" emoji="🧫" id="inoculation">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field 
            label="Date Inoculated" 
            value={batch.inoculationDate ? new Date(batch.inoculationDate).toLocaleDateString() : ""} 
          />
          <Field label="Inoculation Rate" value={batch.inoculationRate} />
          <Field label="Spawn Run Observations" value={batch.spawnRunObservations} />
          <Field 
            label="Contamination During Colonization" 
            value={batch.contaminationDuringColonization || "None"} 
          />
        </div>
      </Section>
      
      {/* Fruiting Phase Tracking */}
      <Section title="Fruiting Phase Tracking" emoji="📈" id="fruiting">
        {!batch.fruitingPhases || batch.fruitingPhases.length === 0 ? (
          <p className="text-slate-400">No fruiting phases recorded yet.</p>
        ) : (
          <DataTable 
            headers={["Date", "Action", "Notes"]}
            data={batch.fruitingPhases}
            renderRow={(phase, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-slate-800" : "bg-slate-700"}>
                <td className="px-3 py-2 whitespace-nowrap text-sm">
                  {phase.date ? new Date(phase.date).toLocaleDateString() : ""}
                </td>
                <td className="px-3 py-2 whitespace-nowrap text-sm">
                  {phase.action}
                </td>
                <td className="px-3 py-2 text-sm">
                  {phase.notes}
                </td>
              </tr>
            )}
          />
        )}
      </Section>
      
      {/* Harvest Details */}
      <Section title="Harvest Details" emoji="📦" id="harvest">
        {!batch.harvestDetails || !batch.harvestDetails.totalWeight ? (
          <p className="text-slate-400">No harvest data recorded yet.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field label="Total Weight Harvested" value={batch.harvestDetails.totalWeight} />
            <Field label="Number of Marketable Units" value={batch.harvestDetails.marketableUnits} />
            <Field label="Quality Notes" value={batch.harvestDetails.qualityNotes} />
            <Field 
              label="Contamination During Fruiting" 
              value={batch.harvestDetails.contaminationDuringFruiting || "None"} 
            />
          </div>
        )}
      </Section>
      
      {/* Final Summary */}
      <Section title="Final Summary" emoji="📊" id="summary">
        {!batch.totalCycleTime ? (
          <p className="text-slate-400">No final summary data recorded yet.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field label="Total Cycle Time" value={batch.totalCycleTime} />
            <Field label="Yield per lb of substrate" value={batch.yieldPerPound} />
            <Field label="Cost of Materials" value={batch.materialCost} />
            <Field label="Sales/Revenue" value={batch.salesRevenue} />
            <Field label="Profitability Estimate" value={batch.profitability} />
          </div>
        )}
      </Section>
      
      {/* Lessons Learned */}
      <Section title="Lessons Learned / Adjustments for Next Time" emoji="📋" id="lessons">
        {!batch.lessonsLearned ? (
          <p className="text-slate-400">No lessons or adjustments recorded yet.</p>
        ) : (
          <p className="text-sm">{batch.lessonsLearned}</p>
        )}
      </Section>
    </div>
  );
};

export default BatchDetail;