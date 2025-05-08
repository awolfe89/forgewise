// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');

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
const User = require('./models/User');
const Batch = require('./models/Batch');
const Recipe = require('./models/Recipe');

// Import routes
const authRoutes = require('./routes/auth');
const batchRoutes = require('./routes/batches');
const recipeRoutes = require('./routes/recipes');

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

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/batches', authenticateToken, batchRoutes);
app.use('/api/recipes', authenticateToken, recipeRoutes);

// Auth route for hardcoded credentials (for demo purposes)
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

// Health check route
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'OK', message: 'Server is running' });
});

// Serve static files in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('build'));
  
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
  });
}

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));