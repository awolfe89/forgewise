// components/Recipes/RecipeDetail.js
import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { fetchRecipeById } from '../../services/recipeService';

const RecipeDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const loadRecipe = async () => {
      try {
        console.log(`Fetching recipe with ID: ${id}`);
        const data = await fetchRecipeById(id);
        
        if (!data) {
          console.log('Recipe not found in API response');
          setError('Recipe not found');
        } else {
          console.log('Recipe data received:', data);
          setRecipe(data);
        }
      } catch (error) {
        console.error("Error loading recipe:", error);
        
        if (error.response && error.response.status === 404) {
          setError('Recipe not found. It may have been deleted or the ID is incorrect.');
        } else {
          setError('Failed to load recipe details. Please try again later.');
        }
      } finally {
        setLoading(false);
      }
    };
    
    loadRecipe();
  }, [id]);
  
  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-xl text-teal-400">Loading recipe details...</div>
      </div>
    );
  }
  
  if (error) {
    return (
      <div className="bg-gray-800 rounded-lg shadow overflow-hidden mb-6 border border-gray-700">
        <div className="bg-red-900 text-red-200 px-6 py-4">
          <h2 className="text-xl font-semibold">Error</h2>
        </div>
        <div className="p-6">
          <p className="text-gray-300 mb-4">{error}</p>
          <div className="flex space-x-2">
            <button 
              onClick={() => navigate(-1)} 
              className="bg-gray-700 text-teal-400 px-4 py-2 rounded hover:bg-gray-600"
            >
              Go Back
            </button>
            <Link 
              to="/recipes" 
              className="bg-teal-600 text-teal-100 px-4 py-2 rounded hover:bg-teal-700"
            >
              View All Recipes
            </Link>
          </div>
        </div>
      </div>
    );
  }
  
  // Function to format instructions with line breaks and numbering
  const formatInstructions = (instructions) => {
    // Split by newlines or numbered patterns like "1. " or "1) "
    const steps = instructions.split(/\n|(?:\d+[.)]\s*)/g).filter(Boolean);
    
    return (
      <ol className="list-decimal list-outside ml-5 space-y-3">
        {steps.map((step, index) => (
          <li key={index} className="pl-1 text-gray-300">{step.trim()}</li>
        ))}
      </ol>
    );
  };
  
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-teal-400">
          {recipe.title}
        </h1>
        <div className="space-x-2">
          <Link 
            to={`/recipes/edit/${recipe._id}`}
            className="bg-teal-600 text-teal-100 px-4 py-2 rounded hover:bg-teal-700"
          >
            Edit Recipe
          </Link>
          <Link 
            to="/recipes"
            className="bg-gray-700 text-teal-400 px-4 py-2 rounded hover:bg-gray-600"
          >
            Back to Recipes
          </Link>
        </div>
      </div>
      
      <div className="bg-gray-800 rounded-lg shadow overflow-hidden mb-6 border border-gray-700">
        {/* Recipe Header */}
        <div className="bg-teal-900 text-teal-100 px-6 py-4">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center">
            <div>
              <h2 className="text-xl font-semibold">{recipe.title}</h2>
              <p className="text-teal-300 mt-1">{recipe.description}</p>
            </div>
            <div className="mt-2 md:mt-0">
              <span className="text-sm text-teal-300">
                {new Date(recipe.createdAt).toLocaleDateString()}
              </span>
            </div>
          </div>
        </div>
        
        {/* Recipe Details */}
        <div className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Ingredients Column */}
            <div className="lg:col-span-1">
              <h3 className="text-lg font-semibold mb-3 border-b border-gray-700 pb-2 text-teal-400">Ingredients</h3>
              {!recipe.ingredients || recipe.ingredients.length === 0 ? (
                <p className="text-gray-400 italic">No ingredients listed</p>
              ) : (
                <ul className="space-y-3">
                  {recipe.ingredients.map((ingredient, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-teal-500 font-medium mr-2">•</span>
                      <div>
                        <span className="font-medium text-gray-300">
                          {ingredient.quantity} {ingredient.unit} {ingredient.name}
                        </span>
                        {ingredient.notes && (
                          <p className="text-sm text-gray-400 mt-1">
                            {ingredient.notes}
                          </p>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            
            {/* Instructions Column */}
            <div className="lg:col-span-2">
              <h3 className="text-lg font-semibold mb-3 border-b border-gray-700 pb-2 text-teal-400">Instructions</h3>
              <div className="prose max-w-none text-gray-300">
                {formatInstructions(recipe.instructions)}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Recipe Metadata */}
      <div className="text-sm text-gray-400 mt-4">
        Last updated: {new Date(recipe.updatedAt).toLocaleString()}
      </div>
    </div>
  );
};

export default RecipeDetail;