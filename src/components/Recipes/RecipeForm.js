// components/Recipes/RecipeForm.js
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { fetchRecipeById, createRecipe, updateRecipe } from '../../services/recipeService';

const RecipeForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditMode = Boolean(id);
  
  const [loading, setLoading] = useState(isEditMode);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    ingredients: [{ quantity: '', unit: '', name: '', notes: '' }],
    instructions: ''
  });
  
  const [activeTab, setActiveTab] = useState('basic');
  const [error, setError] = useState('');
  
  // Load recipe data if in edit mode
  useEffect(() => {
    const loadRecipe = async () => {
      if (isEditMode) {
        try {
          const recipeData = await fetchRecipeById(id);
          if (!recipeData) {
            setError('Recipe not found');
            setLoading(false);
            return;
          }
          
          // Ensure ingredients array exists with at least one empty item
          let ingredients = recipeData.ingredients || [];
          if (ingredients.length === 0) {
            ingredients = [{ quantity: '', unit: '', name: '', notes: '' }];
          }
          
          setFormData({
            title: recipeData.title || '',
            description: recipeData.description || '',
            ingredients: ingredients,
            instructions: recipeData.instructions || ''
          });
          
          setLoading(false);
        } catch (error) {
          console.error("Error loading recipe data:", error);
          setError('Failed to load recipe data for editing');
          setLoading(false);
        }
      }
    };
    
    loadRecipe();
  }, [id, isEditMode]);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleIngredientChange = (index, field, value) => {
    const updatedIngredients = [...formData.ingredients];
    updatedIngredients[index] = {
      ...updatedIngredients[index],
      [field]: value
    };
    
    setFormData(prev => ({
      ...prev,
      ingredients: updatedIngredients
    }));
  };
  
  const addIngredient = () => {
    setFormData(prev => ({
      ...prev,
      ingredients: [
        ...prev.ingredients,
        { quantity: '', unit: '', name: '', notes: '' }
      ]
    }));
  };
  
  const removeIngredient = (index) => {
    if (formData.ingredients.length <= 1) return;
    
    const updatedIngredients = [...formData.ingredients];
    updatedIngredients.splice(index, 1);
    
    setFormData(prev => ({
      ...prev,
      ingredients: updatedIngredients
    }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.title || !formData.description || !formData.instructions) {
      setError('Please fill out all required fields');
      return;
    }
    
    // Validate that ingredients have at least name and quantity
    const validIngredients = formData.ingredients.filter(
      ing => ing.name.trim() !== '' && ing.quantity.trim() !== ''
    );
    
    if (validIngredients.length === 0) {
      setError('Please add at least one ingredient with quantity and name');
      return;
    }
    
    // Only submit valid ingredients
    const submitData = {
      ...formData,
      ingredients: validIngredients
    };
    
    try {
      if (isEditMode) {
        await updateRecipe(id, submitData);
      } else {
        await createRecipe(submitData);
      }
      
      navigate('/recipes');
    } catch (error) {
      console.error("Error saving recipe:", error);
      setError('Failed to save recipe data');
    }
  };
  
  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-xl text-gray-500">Loading recipe data...</div>
      </div>
    );
  }
  
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">
          {isEditMode ? `Edit Recipe: ${formData.title}` : 'Create New Recipe'}
        </h1>
        <Link 
          to="/recipes"
          className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
        >
          Cancel
        </Link>
      </div>
      
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}
      
      <form onSubmit={handleSubmit}>
        <div className="bg-white rounded-lg shadow overflow-hidden mb-6">
          {/* Tab Navigation */}
          <div className="bg-gray-50 p-4 border-b">
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                className={`px-3 py-2 rounded ${activeTab === 'basic' ? 'bg-indigo-600 text-white' : 'bg-gray-200'}`}
                onClick={() => setActiveTab('basic')}
              >
                Basic Info
              </button>
              <button
                type="button"
                className={`px-3 py-2 rounded ${activeTab === 'ingredients' ? 'bg-indigo-600 text-white' : 'bg-gray-200'}`}
                onClick={() => setActiveTab('ingredients')}
              >
                Ingredients
              </button>
              <button
                type="button"
                className={`px-3 py-2 rounded ${activeTab === 'instructions' ? 'bg-indigo-600 text-white' : 'bg-gray-200'}`}
                onClick={() => setActiveTab('instructions')}
              >
                Instructions
              </button>
            </div>
          </div>
          
          <div className="p-6">
            {/* Basic Info Tab */}
            <div className={activeTab === 'basic' ? 'block' : 'hidden'}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Recipe Title*
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="e.g., Garlic Butter Oyster Mushrooms"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Short Description*
                </label>
                <input
                  type="text"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="Brief description of the recipe"
                  required
                />
              </div>
            </div>
            
            {/* Ingredients Tab */}
            <div className={activeTab === 'ingredients' ? 'block' : 'hidden'}>
              <div className="mb-4">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-medium">Recipe Ingredients</h3>
                  <button
                    type="button"
                    onClick={addIngredient}
                    className="bg-indigo-50 text-indigo-600 px-3 py-1 rounded hover:bg-indigo-100"
                  >
                    + Add Ingredient
                  </button>
                </div>
                
                {formData.ingredients.map((ingredient, index) => (
                  <div key={index} className="mb-4 p-4 border border-gray-200 rounded bg-gray-50">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-medium">Ingredient #{index + 1}</h4>
                      {formData.ingredients.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeIngredient(index)}
                          className="text-red-500 hover:text-red-700"
                        >
                          Remove
                        </button>
                      )}
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Quantity*
                        </label>
                        <input
                          type="text"
                          value={ingredient.quantity}
                          onChange={(e) => handleIngredientChange(index, 'quantity', e.target.value)}
                          className="w-full p-2 border border-gray-300 rounded"
                          placeholder="e.g., 2, 1/2"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Unit
                        </label>
                        <input
                          type="text"
                          value={ingredient.unit}
                          onChange={(e) => handleIngredientChange(index, 'unit', e.target.value)}
                          className="w-full p-2 border border-gray-300 rounded"
                          placeholder="e.g., cups, tbsp, lbs"
                        />
                      </div>
                      
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Ingredient Name*
                        </label>
                        <input
                          type="text"
                          value={ingredient.name}
                          onChange={(e) => handleIngredientChange(index, 'name', e.target.value)}
                          className="w-full p-2 border border-gray-300 rounded"
                          placeholder="e.g., fresh oyster mushrooms"
                        />
                      </div>
                      
                      <div className="md:col-span-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Notes (optional)
                        </label>
                        <input
                          type="text"
                          value={ingredient.notes}
                          onChange={(e) => handleIngredientChange(index, 'notes', e.target.value)}
                          className="w-full p-2 border border-gray-300 rounded"
                          placeholder="e.g., sliced, cleaned, or substitute with..."
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Instructions Tab */}
            <div className={activeTab === 'instructions' ? 'block' : 'hidden'}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Instructions/Steps*
                </label>
                <textarea
                  name="instructions"
                  value={formData.instructions}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="Enter step-by-step instructions (one step per line). For example:
1. Clean and tear mushrooms into strips
2. Heat oil in a pan over medium heat
3. Add garlic and sauté until fragrant"
                  rows="12"
                  required
                ></textarea>
                <p className="mt-1 text-sm text-gray-500">
                  Enter each step on a new line, preferably numbered. Be specific with techniques.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 px-6 py-3 flex justify-end">
            <button
              type="submit"
              className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700"
            >
              {isEditMode ? 'Update Recipe' : 'Create Recipe'}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RecipeForm;