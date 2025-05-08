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
        <div className="text-xl text-slate-300">Loading dashboard data...</div>
      </div>
    );
  }
  
  return (
    <div className="pb-12 bg-slate-800 min-h-screen text-slate-200 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto pt-6">
        <h1 className="text-2xl font-semibold mb-6 text-teal-300 border-b border-slate-700 pb-2">Cultivation Dashboard</h1>
        
        {/* Stats Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
          <div className="bg-slate-700 p-4 rounded-lg shadow-lg border border-slate-600">
            <div className="text-teal-300 text-2xl font-semibold">{stats.totalBatches}</div>
            <div className="text-slate-400 text-sm">Total Batches</div>
          </div>
          
          <div className="bg-slate-700 p-4 rounded-lg shadow-lg border border-slate-600">
            <div className="text-teal-400 text-2xl font-semibold">{stats.activeBatches}</div>
            <div className="text-slate-400 text-sm">Active Batches</div>
          </div>
          
          <div className="bg-slate-700 p-4 rounded-lg shadow-lg border border-slate-600">
            <div className="text-teal-200 text-2xl font-semibold">{stats.completedBatches}</div>
            <div className="text-slate-400 text-sm">Completed Batches</div>
          </div>
          
          <div className="bg-slate-700 p-4 rounded-lg shadow-lg border border-slate-600">
            <div className="text-red-400 text-2xl font-semibold">{stats.contaminatedBatches}</div>
            <div className="text-slate-400 text-sm">Contaminated</div>
          </div>
        </div>
        
        {/* Recent Batches */}
        <div className="bg-slate-700 rounded-lg shadow-lg p-4 sm:p-6 mb-6 border border-slate-600">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-teal-300">Recent Batches</h2>
            <Link 
              to="/batches" 
              className="text-teal-400 hover:text-teal-300 text-sm"
            >
              View All
            </Link>
          </div>
          
          {recentBatches.length === 0 ? (
            <div className="text-slate-400">No batches found. Create your first batch!</div>
          ) : (
            <div className="overflow-x-auto -mx-4 sm:mx-0">
              <div className="inline-block min-w-full px-4 sm:px-0">
                <table className="min-w-full divide-y divide-slate-600">
                  <thead>
                    <tr>
                      <th className="px-2 sm:px-4 py-2 text-left text-xs font-medium text-slate-400 uppercase tracking-wider">
                        Batch ID
                      </th>
                      <th className="px-2 sm:px-4 py-2 text-left text-xs font-medium text-slate-400 uppercase tracking-wider">
                        Species/Strain
                      </th>
                      <th className="px-2 sm:px-4 py-2 text-xs text-slate-400 uppercase tracking-wider hidden sm:table-cell">
                        Status
                      </th>
                      <th className="px-2 sm:px-4 py-2 w-16"></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-600">
                    {recentBatches.map((batch) => (
                      <tr key={batch._id} className="hover:bg-slate-600/30">
                        <td className="px-2 sm:px-4 py-3 whitespace-nowrap text-sm">
                          {batch.batchId}
                        </td>
                        <td className="px-2 sm:px-4 py-3 whitespace-nowrap text-sm truncate max-w-[150px]">
                          {batch.speciesStrain}
                        </td>
                        <td className="px-2 sm:px-4 py-3 whitespace-nowrap hidden sm:table-cell">
                          {batch.harvestDetails?.totalWeight ? (
                            <span className="px-2 py-1 text-xs rounded-full bg-teal-900/50 text-teal-300 border border-teal-800">
                              Completed
                            </span>
                          ) : (
                            <span className="px-2 py-1 text-xs rounded-full bg-blue-900/30 text-blue-300 border border-blue-800">
                              Active
                            </span>
                          )}
                        </td>
                        <td className="px-2 sm:px-4 py-3 whitespace-nowrap text-right text-sm">
                          <Link 
                            to={`/batches/${batch._id}`}
                            className="text-teal-400 hover:text-teal-300"
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
        <div className="bg-slate-700 rounded-lg shadow-lg p-4 sm:p-6 mb-6 border border-slate-600">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-teal-300">Recent Recipes</h2>
            <Link 
              to="/recipes" 
              className="text-teal-400 hover:text-teal-300 text-sm"
            >
              View All
            </Link>
          </div>
          
          {recentRecipes.length === 0 ? (
            <div className="text-slate-400">No recipes found. Create your first recipe!</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {recentRecipes.map((recipe) => (
                <div key={recipe._id} className="bg-slate-800 p-4 rounded hover:shadow-xl transition border border-slate-700">
                  <h3 className="font-semibold text-teal-300 truncate">{recipe.title}</h3>
                  <p className="text-sm text-slate-400 mb-2 line-clamp-2">{recipe.description}</p>
                  <Link 
                    to={`/recipes/${recipe._id}`}
                    className="text-teal-400 hover:text-teal-300 text-sm"
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
            <h2 className="text-xl font-semibold text-teal-300 border-b border-slate-700 pb-2">Quick Actions</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link 
              to="/batches/new"
              className="bg-slate-700 p-4 rounded-lg shadow-lg text-center hover:bg-slate-600 transition border border-slate-600"
            >
              <div className="text-teal-300 text-lg mb-2">Start New Batch</div>
              <div className="text-slate-400 text-sm">Record a new cultivation batch</div>
            </Link>
            
            <Link 
              to="/batches"
              className="bg-slate-700 p-4 rounded-lg shadow-lg text-center hover:bg-slate-600 transition border border-slate-600"
            >
              <div className="text-teal-300 text-lg mb-2">Manage Batches</div>
              <div className="text-slate-400 text-sm">View and edit all your batches</div>
            </Link>
            
            <Link 
              to="/recipes"
              className="bg-slate-700 p-4 rounded-lg shadow-lg text-center hover:bg-slate-600 transition border border-slate-600"
            >
              <div className="text-teal-300 text-lg mb-2">Browse Recipes</div>
              <div className="text-slate-400 text-sm">Explore mushroom recipes</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;