// services/recipeService.js
import api from './api';
import { v4 as uuidv4 } from 'uuid';

// Initialize mock data for localStorage demo
const initialRecipes = [
  {
    _id: "r1",
    title: "Oyster Mushroom Stir Fry",
    description: "A quick and flavorful stir fry using fresh oyster mushrooms",
    ingredients: [
      { quantity: "2", unit: "cups", name: "oyster mushrooms", notes: "torn into strips" },
      { quantity: "2", unit: "cloves", name: "garlic", notes: "minced" },
      { quantity: "1", unit: "tbsp", name: "fresh ginger", notes: "grated" },
      { quantity: "2", unit: "tbsp", name: "soy sauce", notes: "" },
      { quantity: "1", unit: "tsp", name: "sesame oil", notes: "" },
      { quantity: "2", unit: "", name: "green onions", notes: "sliced for garnish" }
    ],
    instructions: "1. Clean and tear mushrooms into strips\n2. Heat oil in a wok\n3. Add minced garlic and ginger\n4. Add mushrooms and stir fry for 3-4 minutes\n5. Add soy sauce and sesame oil\n6. Garnish with green onions and serve hot",
    createdAt: "2025-04-15",
    updatedAt: "2025-04-15",
    userId: "admin"
  },
  {
    _id: "r2",
    title: "Shiitake Risotto",
    description: "Creamy Italian risotto with flavorful shiitake mushrooms",
    ingredients: [
      { quantity: "1", unit: "cup", name: "arborio rice", notes: "" },
      { quantity: "4", unit: "cups", name: "vegetable stock", notes: "kept warm" },
      { quantity: "1", unit: "cup", name: "fresh shiitake mushrooms", notes: "sliced" },
      { quantity: "1/2", unit: "cup", name: "dried shiitake mushrooms", notes: "soaked in hot water" },
      { quantity: "1", unit: "", name: "onion", notes: "finely diced" },
      { quantity: "2", unit: "cloves", name: "garlic", notes: "minced" },
      { quantity: "1/2", unit: "cup", name: "white wine", notes: "optional" },
      { quantity: "1/4", unit: "cup", name: "parmesan cheese", notes: "grated" },
      { quantity: "2", unit: "tbsp", name: "butter", notes: "" },
      { quantity: "1", unit: "tbsp", name: "olive oil", notes: "" }
    ],
    instructions: "1. Soak dried shiitake mushrooms in hot water for 20 minutes\n2. Sauté fresh shiitake mushrooms in butter\n3. In a separate pot, toast arborio rice with onions\n4. Gradually add warm stock, stirring constantly\n5. Add rehydrated mushrooms and their liquid\n6. Finish with parmesan cheese and fresh herbs",
    createdAt: "2025-04-10",
    updatedAt: "2025-04-10",
    userId: "admin"
  }
];

// Initialize data in localStorage
const initializeRecipeData = () => {
  if (!localStorage.getItem('recipes')) {
    localStorage.setItem('recipes', JSON.stringify(initialRecipes));
  }
};

// Get all recipes
export const fetchRecipes = async () => {
  try {
    // Try API first
    const response = await api.get('/recipes');
    return response.data;
  } catch (error) {
    console.error("API Error:", error);
    // Fallback to localStorage for demo
    initializeRecipeData();
    return JSON.parse(localStorage.getItem('recipes') || '[]');
  }
};

// Get a single recipe by ID
export const fetchRecipeById = async (id) => {
  try {
    // Try API first
    const response = await api.get(`/recipes/${id}`);
    return response.data;
  } catch (error) {
    console.error("API Error:", error);
    // Fallback to localStorage for demo
    initializeRecipeData();
    const recipes = JSON.parse(localStorage.getItem('recipes') || '[]');
    return recipes.find(recipe => recipe._id === id);
  }
};

// Create a new recipe
export const createRecipe = async (recipeData) => {
  try {
    // Try API first
    const response = await api.post('/recipes', recipeData);
    return response.data;
  } catch (error) {
    console.error("API Error:", error);
    // Fallback to localStorage for demo
    initializeRecipeData();
    const recipes = JSON.parse(localStorage.getItem('recipes') || '[]');
    
    const newRecipe = {
      ...recipeData,
      _id: uuidv4(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      userId: 'admin'
    };
    
    recipes.push(newRecipe);
    localStorage.setItem('recipes', JSON.stringify(recipes));
    
    return newRecipe;
  }
};

// Update a recipe
export const updateRecipe = async (id, recipeData) => {
  try {
    // Try API first
    const response = await api.put(`/recipes/${id}`, recipeData);
    return response.data;
  } catch (error) {
    console.error("API Error:", error);
    // Fallback to localStorage for demo
    initializeRecipeData();
    const recipes = JSON.parse(localStorage.getItem('recipes') || '[]');
    
    const recipeIndex = recipes.findIndex(recipe => recipe._id === id);
    
    if (recipeIndex === -1) {
      throw new Error('Recipe not found');
    }
    
    const updatedRecipe = {
      ...recipes[recipeIndex],
      ...recipeData,
      updatedAt: new Date().toISOString()
    };
    
    recipes[recipeIndex] = updatedRecipe;
    localStorage.setItem('recipes', JSON.stringify(recipes));
    
    return updatedRecipe;
  }
};

// Delete a recipe
export const deleteRecipe = async (id) => {
  try {
    // Try API first
    await api.delete(`/recipes/${id}`);
    return { success: true };
  } catch (error) {
    console.error("API Error:", error);
    // Fallback to localStorage for demo
    initializeRecipeData();
    const recipes = JSON.parse(localStorage.getItem('recipes') || '[]');
    
    const filteredRecipes = recipes.filter(recipe => recipe._id !== id);
    
    if (filteredRecipes.length === recipes.length) {
      throw new Error('Recipe not found');
    }
    
    localStorage.setItem('recipes', JSON.stringify(filteredRecipes));
    
    return { success: true };
  }
};