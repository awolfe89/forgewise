// components/Recipes/RecipeDetail.js
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchRecipeById } from '../../services/recipeService';

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const loadRecipe = async () => {
      try {
        const data = await fetchRecipeById(id);
        if (!data) {
          setError('Recipe not found');
        } else {
          setRecipe(data);
        }
        setLoading(false);
      } catch (error) {
        console.error("Error loading recipe:", error);
        setError('Failed to load recipe details');
        setLoading(false);
      }
    };
    
    loadRecipe();
  }, [id]);
  
  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-xl text-gray-500">Loading recipe details...</div>
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
  
  // Function to format instructions with line breaks and numbering
  const formatInstructions = (instructions) => {
    // Split by newlines or numbered patterns like "1. " or "1) "
    const steps = instructions.split(/\n|(?:\d+[\.\)]\s*)/g).filter(Boolean);
    
    return (
      <ol className="list-decimal list-outside ml-5 space-y-3">
        {steps.map((step, index) => (
          <li key={index} className="pl-1">{step.trim()}</li>
        ))}
      </ol>
    );
  };
  
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">
          {recipe.title}
        </h1>
        <div className="space-x-2">
          <Link 
            to={`/recipes/edit/${recipe._id}`}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Edit Recipe
          </Link>
          <Link 
            to="/recipes"
            className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
          >
            Back to Recipes
          </Link>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow overflow-hidden mb-6">
        {/* Recipe Header */}
        <div className="bg-indigo-700 text-white px-6 py-4">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center">
            <div>
              <h2 className="text-xl font-semibold">{recipe.title}</h2>
              <p className="text-indigo-200 mt-1">{recipe.description}</p>
            </div>
            <div className="mt-2 md:mt-0">
              <span className="text-sm">
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
              <h3 className="text-lg font-semibold mb-3 border-b pb-2">Ingredients</h3>
              {!recipe.ingredients || recipe.ingredients.length === 0 ? (
                <p className="text-gray-500 italic">No ingredients listed</p>
              ) : (
                <ul className="space-y-3">
                  {recipe.ingredients.map((ingredient, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-indigo-500 font-medium mr-2">•</span>
                      <div>
                        <span className="font-medium">
                          {ingredient.quantity} {ingredient.unit} {ingredient.name}
                        </span>
                        {ingredient.notes && (
                          <p className="text-sm text-gray-600 mt-1">
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
              <h3 className="text-lg font-semibold mb-3 border-b pb-2">Instructions</h3>
              <div className="prose max-w-none">
                {formatInstructions(recipe.instructions)}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Recipe Metadata */}
      <div className="text-sm text-gray-500 mt-4">
        Last updated: {new Date(recipe.updatedAt).toLocaleString()}
      </div>
    </div>
  );
};

export default RecipeDetail;