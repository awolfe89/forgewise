// services/recipeService.js
import api from './api';


// Get all recipes
export const fetchRecipes = async () => {
  try {
    const response = await api.get('/recipes');
    return response.data;
  } catch (error) {
    console.error('API Error in fetchRecipes:', error);
    // Return empty array rather than throwing
    return [];
  }
};

// Get a single recipe
export const fetchRecipeById = async (id) => {
  try {
    const response = await api.get(`/recipes/${id}`);
    return response.data;
  } catch (error) {
    console.error(`API Error in fetchRecipeById for ID ${id}:`, error);
    throw error;
  }
};

// Create a new recipe
export const createRecipe = async (recipeData) => {
  try {
    const response = await api.post('/recipes', recipeData);
    return response.data;
  } catch (error) {
    console.error('API Error in createRecipe:', error);
    throw error;
  }
};

// Update a recipe
export const updateRecipe = async (id, recipeData) => {
  try {
    const response = await api.put(`/recipes/${id}`, recipeData);
    return response.data;
  } catch (error) {
    console.error(`API Error in updateRecipe for ID ${id}:`, error);
    throw error;
  }
};

// Delete a recipe
export const deleteRecipe = async (id) => {
  try {
    const response = await api.delete(`/recipes/${id}`);
    return response.data;
  } catch (error) {
    console.error(`API Error in deleteRecipe for ID ${id}:`, error);
    throw error;
  }
};