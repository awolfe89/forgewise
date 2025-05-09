// routes/recipes.js
const express = require('express');
const router = express.Router();
const Recipe = require('../models/Recipe');
console.log('Recipe routes loaded');

// Get all recipes for current user
router.get('/', async (req, res) => {
  console.log('GET /api/recipes request received');
  try {
    const recipes = await Recipe.find({ userId: req.user.id })
      .sort({ createdAt: -1 });
    
    res.json(recipes);
  } catch (error) {
    console.error('Get recipes error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

router.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK', message: 'Recipe routes are working' });
});

// Get a specific recipe
router.get('/:id', async (req, res) => {
  try {
    const recipe = await Recipe.findOne({
      _id: req.params.id,
      userId: req.user.id
    });
    
    if (!recipe) {
      return res.status(404).json({ message: 'Recipe not found' });
    }
    
    res.json(recipe);
  } catch (error) {
    console.error('Get recipe error:', error);
    
    if (error.kind === 'ObjectId') {
      return res.status(404).json({ message: 'Recipe not found' });
    }
    
    res.status(500).json({ message: 'Server error' });
  }
});

// Create a new recipe
router.post('/', async (req, res) => {
  try {
    const newRecipe = new Recipe({
      ...req.body,
      userId: req.user.id
    });
    
    const recipe = await newRecipe.save();
    res.status(201).json(recipe);
  } catch (error) {
    console.error('Create recipe error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Update a recipe
router.put('/:id', async (req, res) => {
  try {
    const recipe = await Recipe.findOne({
      _id: req.params.id,
      userId: req.user.id
    });
    
    if (!recipe) {
      return res.status(404).json({ message: 'Recipe not found' });
    }
    
    // Update fields
    const updatedFields = req.body;
    
    // Remove fields that shouldn't be updated directly
    delete updatedFields._id;
    delete updatedFields.userId;
    delete updatedFields.createdAt;
    
    // Set update timestamp
    updatedFields.updatedAt = Date.now();
    
    const updatedRecipe = await Recipe.findByIdAndUpdate(
      req.params.id,
      { $set: updatedFields },
      { new: true }
    );
    
    res.json(updatedRecipe);
  } catch (error) {
    console.error('Update recipe error:', error);
    
    if (error.kind === 'ObjectId') {
      return res.status(404).json({ message: 'Recipe not found' });
    }
    
    res.status(500).json({ message: 'Server error' });
  }
});

// Delete a recipe
router.delete('/:id', async (req, res) => {
  try {
    const recipe = await Recipe.findOne({
      _id: req.params.id,
      userId: req.user.id
    });
    
    if (!recipe) {
      return res.status(404).json({ message: 'Recipe not found' });
    }
    
    await Recipe.deleteOne({ _id: req.params.id });
    res.json({ message: 'Recipe removed' });
  } catch (error) {
    console.error('Delete recipe error:', error);
    
    if (error.kind === 'ObjectId') {
      return res.status(404).json({ message: 'Recipe not found' });
    }
    
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;