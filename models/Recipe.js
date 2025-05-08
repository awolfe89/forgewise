// models/Recipe.js
const mongoose = require('mongoose');

const IngredientSchema = new mongoose.Schema({
  quantity: {
    type: String,
    required: true
  },
  unit: {
    type: String
  },
  name: {
    type: String,
    required: true
  },
  notes: {
    type: String
  }
});

const RecipeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  ingredients: [IngredientSchema],
  instructions: {
    type: String,
    required: true
  },
  // Metadata
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  },
  userId: {
    type: String,
    required: true
  }
});

// Update timestamp on save
RecipeSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model('Recipe', RecipeSchema);