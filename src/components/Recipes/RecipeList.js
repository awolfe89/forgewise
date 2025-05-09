
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchRecipes, deleteRecipe } from '../../services/recipeService';

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortField] = useState('createdAt');
  const [sortDirection] = useState('desc');
  const [confirmDelete, setConfirmDelete] = useState(null);
  
  useEffect(() => {
    const loadRecipes = async () => {
      try {
        const data = await fetchRecipes();
        setRecipes(data);
        setLoading(false);
      } catch (error) {
        console.error("Error loading recipes:", error);
        setLoading(false);
      }
    };
    
    loadRecipes();
  }, []);
  
  const handleDelete = async (id) => {
    // First click sets the recipe ID for confirmation
    if (confirmDelete !== id) {
      setConfirmDelete(id);
      return;
    }
    
    // Second click confirms deletion
    try {
      await deleteRecipe(id);
      setRecipes(recipes.filter(recipe => recipe._id !== id));
      setConfirmDelete(null);
    } catch (error) {
      console.error("Error deleting recipe:", error);
    }
  };
 
  // This was commented out in the original code
  // const handleSort = (field) => {
  //   if (sortField === field) {
  //     setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
  //   } else {
  //     setSortField(field);
  //     setSortDirection('asc');
  //   }
  // };
  
  const filteredRecipes = recipes.filter(recipe => 
    recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    recipe.description.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const sortedRecipes = [...filteredRecipes].sort((a, b) => {
    let aVal = a[sortField];
    let bVal = b[sortField];
    
    if (aVal === bVal) return 0;
    if (aVal === null || aVal === undefined) return 1;
    if (bVal === null || bVal === undefined) return -1;
    
    const result = aVal < bVal ? -1 : 1;
    return sortDirection === 'asc' ? result : -result;
  });
  
  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-xl text-teal-400">Loading recipes...</div>
      </div>
    );
  }
  
  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 gap-4">
        <h1 className="text-2xl font-semibold text-teal-400">Mushroom Recipes</h1>
        <Link 
          to="/recipes/new"
          className="bg-teal-600 text-teal-100 px-4 py-2 rounded hover:bg-teal-700 text-center"
        >
          Add New Recipe
        </Link>
      </div>
      
      {/* Search */}
      <div className="bg-gray-800 p-4 rounded-lg shadow mb-6 border border-gray-700">
        <div className="flex items-center">
          <div className="flex-grow">
            <input
              type="text"
              placeholder="Search recipes by title or description..."
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded text-gray-200 placeholder-gray-400"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>
      
      {/* Recipe Cards */}
      {recipes.length === 0 ? (
        <div className="bg-gray-800 p-6 rounded-lg shadow text-center border border-gray-700">
          <p className="text-gray-400">No recipes found. Add your first recipe!</p>
        </div>
      ) : sortedRecipes.length === 0 ? (
        <div className="bg-gray-800 p-6 rounded-lg shadow text-center border border-gray-700">
          <p className="text-gray-400">No recipes match your search criteria.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {sortedRecipes.map((recipe) => (
            <div key={recipe._id} className="bg-gray-800 rounded-lg shadow overflow-hidden hover:shadow-lg transition-shadow border border-gray-700">
              <div className="p-4 sm:p-6">
                <h2 className="text-lg sm:text-xl font-semibold mb-2 text-teal-400">
                  {recipe.title}
                </h2>
                <p className="text-gray-300 mb-4 text-sm sm:text-base line-clamp-2">
                  {recipe.description}
                </p>
                <div className="flex justify-between mt-4">
                  <Link 
                    to={`/recipes/${recipe._id}`}
                    className="text-teal-400 hover:text-teal-300"
                  >
                    View Recipe
                  </Link>
                  <div className="flex gap-2">
                    <Link 
                      to={`/recipes/edit/${recipe._id}`}
                      className="text-teal-400 hover:text-teal-300"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(recipe._id)}
                      className={`${confirmDelete === recipe._id ? 'text-red-400 font-bold' : 'text-red-500 hover:text-red-400'}`}
                    >
                      {confirmDelete === recipe._id ? 'Confirm?' : 'Delete'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RecipeList;