// netlify/functions/api.js
const serverless = require('serverless-http');
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

// Initialize Express
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/mushroom-tracker')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Import models
const User = require('../../models/User');
const Batch = require('../../models/Batch');
const Recipe = require('../../models/Recipe');  // Add Recipe model

// Authentication middleware
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  
  if (token == null) return res.status(401).json({ message: 'Unauthorized' });
  
  jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key', (err, user) => {
    if (err) return res.status(403).json({ message: 'Forbidden' });
    req.user = user;
    next();
  });
};

// Auth routes
app.post('/api/auth/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    
    // For demo purposes, hardcoded credentials
    if (username === 'admin' && password === 'mushrooms123') {
      // Generate JWT token
      const token = jwt.sign(
        { id: 'admin-id', username: 'admin', role: 'admin' },
        process.env.JWT_SECRET || 'your-secret-key',
        { expiresIn: '1d' }
      );
      
      return res.json({
        token,
        user: {
          id: 'admin-id',
          username: 'admin',
          role: 'admin'
        }
      });
    }
    
    res.status(400).json({ message: 'Invalid credentials' });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Recipe routes - Add these new routes
app.get('/api/recipes', authenticateToken, async (req, res) => {
  try {
    const recipes = await Recipe.find({ userId: req.user.id })
      .sort({ createdAt: -1 });
    
    res.json(recipes);
  } catch (error) {
    console.error('Get recipes error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

app.get('/api/recipes/:id', authenticateToken, async (req, res) => {
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

app.post('/api/recipes', authenticateToken, async (req, res) => {
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

app.put('/api/recipes/:id', authenticateToken, async (req, res) => {
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

app.delete('/api/recipes/:id', authenticateToken, async (req, res) => {
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

// Batch routes (keep your existing batch routes here)
// ...

// Health check route
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'OK', message: 'Server is running' });
});

// Export handler for serverless function
module.exports.handler = serverless(app);