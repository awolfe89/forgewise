// components/Batches/BatchDetail.js
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchBatchById } from '../../services/batchService';

const BatchDetail = () => {
  const { id } = useParams();
  const [batch, setBatch] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const loadBatch = async () => {
      try {
        const data = await fetchBatchById(id);
        if (!data) {
          setError('Batch not found');
        } else {
          setBatch(data);
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
        <div className="text-xl text-gray-500">Loading batch details...</div>
      </div>
    );
  }
  
  if (error) {
    return (
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
        {error}
      </div>
    );
  }
  
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">
          Batch Details: {batch.batchId}
        </h1>
        <div className="space-x-2">
          <Link 
            to={`/batches/edit/${batch._id}`}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Edit Batch
          </Link>
          <Link 
            to="/batches"
            className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
          >
            Back to List
          </Link>
        </div>
      </div>
      
      {/* Basic Batch Information */}
      <div className="bg-white rounded-lg shadow mb-6 overflow-hidden">
        <div className="border-b px-6 py-4">
          <h2 className="text-lg font-semibold text-gray-800">🗓️ Basic Batch Information</h2>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-sm font-medium text-gray-500">Batch ID</h3>
              <p className="mt-1 text-sm">{batch.batchId}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">Start Date</h3>
              <p className="mt-1 text-sm">{new Date(batch.startDate).toLocaleDateString()}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">Species/Strain</h3>
              <p className="mt-1 text-sm">{batch.speciesStrain}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">Spawn Source</h3>
              <p className="mt-1 text-sm">{batch.spawnSource}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">Substrate Type</h3>
              <p className="mt-1 text-sm">{batch.substrateType}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">Substrate Prep Method</h3>
              <p className="mt-1 text-sm">{batch.substratePrep}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">Container Type</h3>
              <p className="mt-1 text-sm">{batch.containerType}</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Environmental Conditions */}
      <div className="bg-white rounded-lg shadow mb-6 overflow-hidden">
        <div className="border-b px-6 py-4">
          <h2 className="text-lg font-semibold text-gray-800">🌡️ Environmental Conditions</h2>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-sm font-medium text-gray-500">Growing Environment</h3>
              <p className="mt-1 text-sm">{batch.growingEnvironment}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">Temperature Range</h3>
              <p className="mt-1 text-sm">{batch.temperatureRange}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">Humidity Range</h3>
              <p className="mt-1 text-sm">{batch.humidityRange}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">Light Schedule</h3>
              <p className="mt-1 text-sm">{batch.lightSchedule}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">CO₂ Management</h3>
              <p className="mt-1 text-sm">{batch.co2Management}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">Notes</h3>
              <p className="mt-1 text-sm">{batch.environmentalNotes || "No notes recorded"}</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Environmental Logs - New Section */}
      <div className="bg-white rounded-lg shadow mb-6 overflow-hidden">
        <div className="border-b px-6 py-4">
          <h2 className="text-lg font-semibold text-gray-800">📊 Environmental Logs</h2>
        </div>
        <div className="p-6">
          {!batch.environmentalLogs || batch.environmentalLogs.length === 0 ? (
            <p className="text-gray-500">No environmental logs recorded yet.</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Time
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Humidity (%)
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Temperature (°F)
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Notes
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {batch.environmentalLogs.map((log, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="px-4 py-3 whitespace-nowrap">
                        {log.date ? new Date(log.date).toLocaleDateString() : ""}
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        {log.time || ""}
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        {log.humidity !== null && log.humidity !== undefined ? log.humidity : ""}
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        {log.temperature !== null && log.temperature !== undefined ? log.temperature : ""}
                      </td>
                      <td className="px-4 py-3">
                        {log.notes || ""}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
      
      {/* Inoculation Details */}
      <div className="bg-white rounded-lg shadow mb-6 overflow-hidden">
        <div className="border-b px-6 py-4">
          <h2 className="text-lg font-semibold text-gray-800">🧫 Inoculation Details</h2>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-sm font-medium text-gray-500">Date Inoculated</h3>
              <p className="mt-1 text-sm">{batch.inoculationDate ? new Date(batch.inoculationDate).toLocaleDateString() : ""}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">Inoculation Rate</h3>
              <p className="mt-1 text-sm">{batch.inoculationRate}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">Spawn Run Observations</h3>
              <p className="mt-1 text-sm">{batch.spawnRunObservations}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">Contamination During Colonization</h3>
              <p className="mt-1 text-sm">{batch.contaminationDuringColonization || "None"}</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Fruiting Phase Tracking */}
      <div className="bg-white rounded-lg shadow mb-6 overflow-hidden">
        <div className="border-b px-6 py-4">
          <h2 className="text-lg font-semibold text-gray-800">📈 Fruiting Phase Tracking</h2>
        </div>
        <div className="p-6">
          {!batch.fruitingPhases || batch.fruitingPhases.length === 0 ? (
            <p className="text-gray-500">No fruiting phases recorded yet.</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Action
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Notes
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {batch.fruitingPhases.map((phase, index) => (
                    <tr key={index}>
                      <td className="px-4 py-3 whitespace-nowrap">
                        {phase.date ? new Date(phase.date).toLocaleDateString() : ""}
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        {phase.action}
                      </td>
                      <td className="px-4 py-3">
                        {phase.notes}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
      
      {/* Harvest Details */}
      <div className="bg-white rounded-lg shadow mb-6 overflow-hidden">
        <div className="border-b px-6 py-4">
          <h2 className="text-lg font-semibold text-gray-800">📦 Harvest Details</h2>
        </div>
        <div className="p-6">
          {!batch.harvestDetails || !batch.harvestDetails.totalWeight ? (
            <p className="text-gray-500">No harvest data recorded yet.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-sm font-medium text-gray-500">Total Weight Harvested</h3>
                <p className="mt-1 text-sm">{batch.harvestDetails.totalWeight}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">Number of Marketable Units</h3>
                <p className="mt-1 text-sm">{batch.harvestDetails.marketableUnits}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">Quality Notes</h3>
                <p className="mt-1 text-sm">{batch.harvestDetails.qualityNotes}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">Contamination During Fruiting</h3>
                <p className="mt-1 text-sm">{batch.harvestDetails.contaminationDuringFruiting || "None"}</p>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Final Summary */}
      <div className="bg-white rounded-lg shadow mb-6 overflow-hidden">
        <div className="border-b px-6 py-4">
          <h2 className="text-lg font-semibold text-gray-800">📊 Final Summary</h2>
        </div>
        <div className="p-6">
          {!batch.totalCycleTime ? (
            <p className="text-gray-500">No final summary data recorded yet.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-sm font-medium text-gray-500">Total Cycle Time</h3>
                <p className="mt-1 text-sm">{batch.totalCycleTime}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">Yield per lb of substrate</h3>
                <p className="mt-1 text-sm">{batch.yieldPerPound}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">Cost of Materials</h3>
                <p className="mt-1 text-sm">{batch.materialCost}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">Sales/Revenue</h3>
                <p className="mt-1 text-sm">{batch.salesRevenue}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">Profitability Estimate</h3>
                <p className="mt-1 text-sm">{batch.profitability}</p>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Lessons Learned */}
      <div className="bg-white rounded-lg shadow mb-6 overflow-hidden">
        <div className="border-b px-6 py-4">
          <h2 className="text-lg font-semibold text-gray-800">📋 Lessons Learned / Adjustments for Next Time</h2>
        </div>
        <div className="p-6">
          {!batch.lessonsLearned ? (
            <p className="text-gray-500">No lessons or adjustments recorded yet.</p>
          ) : (
            <p className="text-sm">{batch.lessonsLearned}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BatchDetail;