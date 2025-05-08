// components/Dashboard/Dashboard.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchBatches } from '../../services/batchService';
import { fetchRecipes } from '../../services/recipeService';

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalBatches: 0,
    activeBatches: 0,
    completedBatches: 0,
    contaminatedBatches: 0,
    totalRecipes: 0
  });
  
  const [recentBatches, setRecentBatches] = useState([]);
  const [recentRecipes, setRecentRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const loadDashboardData = async () => {
      try {
        // Load batch data
        const batches = await fetchBatches();
        setRecentBatches(batches.slice(0, 5));
        
        // Load recipe data
        const recipes = await fetchRecipes();
        setRecentRecipes(recipes.slice(0, 3));
        
        // Calculate stats
        setStats({
          totalBatches: batches.length,
          activeBatches: batches.filter(b => !b.harvestDetails?.totalWeight).length,
          completedBatches: batches.filter(b => b.harvestDetails?.totalWeight).length,
          contaminatedBatches: batches.filter(b => 
            b.contaminationDuringColonization || 
            b.harvestDetails?.contaminationDuringFruiting
          ).length,
          totalRecipes: recipes.length
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
    <div className="pb-12">
      <h1 className="text-2xl font-semibold mb-6">Cultivation Dashboard</h1>
      
      {/* Stats Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="text-indigo-500 text-2xl font-semibold">{stats.totalBatches}</div>
          <div className="text-gray-600 text-sm">Total Batches</div>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="text-green-500 text-2xl font-semibold">{stats.activeBatches}</div>
          <div className="text-gray-600 text-sm">Active Batches</div>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="text-blue-500 text-2xl font-semibold">{stats.completedBatches}</div>
          <div className="text-gray-600 text-sm">Completed Batches</div>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="text-red-500 text-2xl font-semibold">{stats.contaminatedBatches}</div>
          <div className="text-gray-600 text-sm">Contaminated</div>
        </div>
      </div>
      
      {/* Recent Batches */}
      <div className="bg-white rounded-lg shadow p-4 sm:p-6 mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Recent Batches</h2>
          <Link 
            to="/batches" 
            className="text-indigo-600 hover:text-indigo-800 text-sm"
          >
            View All
          </Link>
        </div>
        
        {recentBatches.length === 0 ? (
          <div className="text-gray-500">No batches found. Create your first batch!</div>
        ) : (
          <div className="overflow-x-auto -mx-4 sm:mx-0">
            <div className="inline-block min-w-full px-4 sm:px-0">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th className="px-2 sm:px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Batch ID
                    </th>
                    <th className="px-2 sm:px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Species/Strain
                    </th>
                    <th className="px-2 sm:px-4 py-2 text-xs text-gray-500 uppercase tracking-wider hidden sm:table-cell">
                      Status
                    </th>
                    <th className="px-2 sm:px-4 py-2 w-16"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {recentBatches.map((batch) => (
                    <tr key={batch._id} className="hover:bg-gray-50">
                      <td className="px-2 sm:px-4 py-3 whitespace-nowrap text-sm">
                        {batch.batchId}
                      </td>
                      <td className="px-2 sm:px-4 py-3 whitespace-nowrap text-sm truncate max-w-[150px]">
                        {batch.speciesStrain}
                      </td>
                      <td className="px-2 sm:px-4 py-3 whitespace-nowrap hidden sm:table-cell">
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
                      <td className="px-2 sm:px-4 py-3 whitespace-nowrap text-right text-sm">
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
          </div>
        )}
      </div>
      
      {/* Recent Recipes */}
      <div className="bg-white rounded-lg shadow p-4 sm:p-6 mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Recent Recipes</h2>
          <Link 
            to="/recipes" 
            className="text-indigo-600 hover:text-indigo-800 text-sm"
          >
            View All
          </Link>
        </div>
        
        {recentRecipes.length === 0 ? (
          <div className="text-gray-500">No recipes found. Create your first recipe!</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {recentRecipes.map((recipe) => (
              <div key={recipe._id} className="bg-gray-50 p-4 rounded hover:shadow-md transition">
                <h3 className="font-semibold text-indigo-700 truncate">{recipe.title}</h3>
                <p className="text-sm text-gray-600 mb-2 line-clamp-2">{recipe.description}</p>
                <Link 
                  to={`/recipes/${recipe._id}`}
                  className="text-indigo-600 hover:text-indigo-900 text-sm"
                >
                  View Recipe
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
      
      {/* Quick Actions */}
      <div className="mt-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Quick Actions</h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
            to="/recipes"
            className="bg-white p-4 rounded-lg shadow text-center hover:bg-indigo-50 transition"
          >
            <div className="text-indigo-500 text-lg mb-2">Browse Recipes</div>
            <div className="text-gray-600 text-sm">Explore mushroom recipes</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;