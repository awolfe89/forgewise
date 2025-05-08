import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchBatches } from '../../services/batchService';

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalBatches: 0,
    activeBatches: 0,
    completedBatches: 0,
    contaminatedBatches: 0
  });
  
  const [recentBatches, setRecentBatches] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const loadDashboardData = async () => {
      try {
        // In a real app, we would call the API for this data
        // For demo purposes, we'll simulate it
        
        // Simulated data for dashboard
        const batches = await fetchBatches();
        
        setRecentBatches(batches.slice(0, 5));
        
        // Calculate stats
        setStats({
          totalBatches: batches.length,
          activeBatches: batches.filter(b => !b.harvestDetails?.totalWeight).length,
          completedBatches: batches.filter(b => b.harvestDetails?.totalWeight).length,
          contaminatedBatches: batches.filter(b => 
            b.contaminationDuringColonization || 
            b.harvestDetails?.contaminationDuringFruiting
          ).length
        });
        
        setLoading(false);
      } catch (error) {
        console.error("Error loading dashboard data:", error);
        setLoading(false);
      }
    };
    
    loadDashboardData();
  }, []);
  
  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-xl text-gray-500">Loading dashboard data...</div>
      </div>
    );
  }
  
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-6">Cultivation Dashboard</h1>
      
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="text-indigo-500 text-xl font-semibold">{stats.totalBatches}</div>
          <div className="text-gray-600">Total Batches</div>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="text-green-500 text-xl font-semibold">{stats.activeBatches}</div>
          <div className="text-gray-600">Active Batches</div>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="text-blue-500 text-xl font-semibold">{stats.completedBatches}</div>
          <div className="text-gray-600">Completed Batches</div>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="text-red-500 text-xl font-semibold">{stats.contaminatedBatches}</div>
          <div className="text-gray-600">Contaminated Batches</div>
        </div>
      </div>
      
      {/* Recent Batches */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Recent Batches</h2>
          <Link 
            to="/batches" 
            className="text-indigo-600 hover:text-indigo-800"
          >
            View All
          </Link>
        </div>
        
        {recentBatches.length === 0 ? (
          <div className="text-gray-500">No batches found. Create your first batch!</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Batch ID
                  </th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Species/Strain
                  </th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Start Date
                  </th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-4 py-2"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {recentBatches.map((batch) => (
                  <tr key={batch._id} className="hover:bg-gray-50">
                    <td className="px-4 py-3 whitespace-nowrap">{batch.batchId}</td>
                    <td className="px-4 py-3 whitespace-nowrap">{batch.speciesStrain}</td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      {new Date(batch.startDate).toLocaleDateString()}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      {batch.harvestDetails?.totalWeight ? (
                        <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">
                          Completed
                        </span>
                      ) : (
                        <span className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800">
                          Active
                        </span>
                      )}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-right">
                      <Link 
                        to={`/batches/${batch._id}`}
                        className="text-indigo-600 hover:text-indigo-900"
                      >
                        View
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
      
      {/* Quick Actions */}
      <div className="mt-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Quick Actions</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link 
            to="/batches/new"
            className="bg-white p-4 rounded-lg shadow text-center hover:bg-indigo-50 transition"
          >
            <div className="text-indigo-500 text-lg mb-2">Start New Batch</div>
            <div className="text-gray-600 text-sm">Record a new cultivation batch</div>
          </Link>
          
          <Link 
            to="/batches"
            className="bg-white p-4 rounded-lg shadow text-center hover:bg-indigo-50 transition"
          >
            <div className="text-indigo-500 text-lg mb-2">Manage Batches</div>
            <div className="text-gray-600 text-sm">View and edit all your batches</div>
          </Link>
          
          <Link 
            to="#"
            className="bg-white p-4 rounded-lg shadow text-center hover:bg-indigo-50 transition"
          >
            <div className="text-indigo-500 text-lg mb-2">View Reports</div>
            <div className="text-gray-600 text-sm">Analyze your cultivation data</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;