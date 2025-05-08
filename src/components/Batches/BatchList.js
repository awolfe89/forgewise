import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchBatches, deleteBatch } from '../../services/batchService';

const BatchList = () => {
  const [batches, setBatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortField, setSortField] = useState('startDate');
  const [sortDirection, setSortDirection] = useState('desc');
  const [confirmDelete, setConfirmDelete] = useState(null);
  
  useEffect(() => {
    const loadBatches = async () => {
      try {
        const data = await fetchBatches();
        setBatches(data);
        setLoading(false);
      } catch (error) {
        console.error("Error loading batches:", error);
        setLoading(false);
      }
    };
    
    loadBatches();
  }, []);
  
  const handleDelete = async (id) => {
    // First click sets the batch ID for confirmation
    if (confirmDelete !== id) {
      setConfirmDelete(id);
      return;
    }
    
    // Second click confirms deletion
    try {
      await deleteBatch(id);
      setBatches(batches.filter(batch => batch._id !== id));
      setConfirmDelete(null);
    } catch (error) {
      console.error("Error deleting batch:", error);
    }
  };
  
  const handleSort = (field) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };
  
  const filteredBatches = batches.filter(batch => 
    batch.batchId.toLowerCase().includes(searchTerm.toLowerCase()) ||
    batch.speciesStrain.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const sortedBatches = [...filteredBatches].sort((a, b) => {
    let aVal = a[sortField];
    let bVal = b[sortField];
    
    // Handle nested fields like harvestDetails.totalWeight
    if (sortField.includes('.')) {
      const parts = sortField.split('.');
      aVal = a[parts[0]] ? a[parts[0]][parts[1]] : null;
      bVal = b[parts[0]] ? b[parts[0]][parts[1]] : null;
    }
    
    // Handle comparing dates
    if (sortField === 'startDate' || sortField === 'inoculationDate') {
      aVal = new Date(aVal);
      bVal = new Date(bVal);
    }
    
    if (aVal === bVal) return 0;
    if (aVal === null || aVal === undefined) return 1;
    if (bVal === null || bVal === undefined) return -1;
    
    const result = aVal < bVal ? -1 : 1;
    return sortDirection === 'asc' ? result : -result;
  });
  
  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-xl text-gray-500">Loading batches...</div>
      </div>
    );
  }
  
  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 gap-4">
        <h1 className="text-2xl font-semibold">Manage Cultivation Batches</h1>
        <Link 
          to="/batches/new"
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 text-center"
        >
          New Batch
        </Link>
      </div>
      
      {/* Search and Filters */}
      <div className="bg-white p-4 rounded-lg shadow mb-6">
        <div className="flex items-center">
          <div className="flex-grow">
            <input
              type="text"
              placeholder="Search batches by ID or species..."
              className="w-full px-3 py-2 border border-gray-300 rounded"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>
      
      {/* Batches Table/Cards */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        {batches.length === 0 ? (
          <div className="p-6 text-center text-gray-500">
            No batches found. Create your first batch!
          </div>
        ) : sortedBatches.length === 0 ? (
          <div className="p-6 text-center text-gray-500">
            No batches match your search criteria.
          </div>
        ) : (
          <div>
            {/* Desktop View: Table */}
            <div className="hidden md:block">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th 
                      className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                      onClick={() => handleSort('batchId')}
                    >
                      Batch ID
                      {sortField === 'batchId' && (
                        <span className="ml-1">
                          {sortDirection === 'asc' ? '↑' : '↓'}
                        </span>
                      )}
                    </th>
                    <th 
                      className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                      onClick={() => handleSort('speciesStrain')}
                    >
                      Species/Strain
                      {sortField === 'speciesStrain' && (
                        <span className="ml-1">
                          {sortDirection === 'asc' ? '↑' : '↓'}
                        </span>
                      )}
                    </th>
                    <th 
                      className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                      onClick={() => handleSort('startDate')}
                    >
                      Start Date
                      {sortField === 'startDate' && (
                        <span className="ml-1">
                          {sortDirection === 'asc' ? '↑' : '↓'}
                        </span>
                      )}
                    </th>
                    <th 
                      className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Status
                    </th>
                    <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {sortedBatches.map((batch) => (
                    <tr key={batch._id} className="hover:bg-gray-50">
                      <td className="px-4 py-4 whitespace-nowrap">
                        <Link 
                          to={`/batches/${batch._id}`}
                          className="text-indigo-600 hover:text-indigo-900"
                        >
                          {batch.batchId}
                        </Link>
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap">
                        {batch.speciesStrain}
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap">
                        {new Date(batch.startDate).toLocaleDateString()}
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap">
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
                      <td className="px-4 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <Link 
                          to={`/batches/${batch._id}`}
                          className="text-indigo-600 hover:text-indigo-900 mr-3"
                        >
                          View
                        </Link>
                        <Link 
                          to={`/batches/edit/${batch._id}`}
                          className="text-blue-600 hover:text-blue-900 mr-3"
                        >
                          Edit
                        </Link>
                        <button
                          onClick={() => handleDelete(batch._id)}
                          className={`${confirmDelete === batch._id ? 'text-red-800 font-bold' : 'text-red-600 hover:text-red-900'}`}
                        >
                          {confirmDelete === batch._id ? 'Confirm?' : 'Delete'}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            {/* Mobile View: Cards */}
            <div className="md:hidden divide-y divide-gray-200">
              {sortedBatches.map((batch) => (
                <div key={batch._id} className="px-4 py-3 hover:bg-gray-50">
                  <div className="flex justify-between">
                    <Link 
                      to={`/batches/${batch._id}`}
                      className="text-indigo-600 hover:text-indigo-900 font-medium"
                    >
                      {batch.batchId}
                    </Link>
                    <span className="text-gray-500 text-sm">
                      {new Date(batch.startDate).toLocaleDateString()}
                    </span>
                  </div>
                  <div className="text-sm mt-1 text-gray-700 truncate">
                    {batch.speciesStrain}
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <div>
                      {batch.harvestDetails?.totalWeight ? (
                        <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">
                          Completed
                        </span>
                      ) : (
                        <span className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800">
                          Active
                        </span>
                      )}
                    </div>
                    <div className="flex gap-2 text-sm">
                      <Link 
                        to={`/batches/edit/${batch._id}`}
                        className="text-blue-600 hover:text-blue-900"
                      >
                        Edit
                      </Link>
                      <button
                        onClick={() => handleDelete(batch._id)}
                        className={`${confirmDelete === batch._id ? 'text-red-800 font-bold' : 'text-red-600 hover:text-red-900'}`}
                      >
                        {confirmDelete === batch._id ? 'Confirm?' : 'Delete'}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BatchList;