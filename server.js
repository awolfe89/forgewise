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

// Configure CORS properly
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());

// Set a consistent JWT secret
const JWT_SECRET = process.env.JWT_SECRET || 'forgewise-secret-key-for-jwt-tokens';
console.log('Node.js version:', process.version);
console.log('Using JWT secret (first 3 chars):', JWT_SECRET.substring(0, 3) + '***');

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

// Authentication middleware with detailed debugging
const authenticateToken = (req, res, next) => {
  console.log('Authenticating request to:', req.originalUrl);
  const authHeader = req.headers['authorization'];
  console.log('Auth header present:', !!authHeader);
  
  if (!authHeader) {
    console.log('No auth header');
    return res.status(401).json({ message: 'Unauthorized' });
  }
  
  // Check for Bearer prefix
  if (!authHeader.startsWith('Bearer ')) {
    console.log('Auth header missing Bearer prefix');
    return res.status(401).json({ message: 'Unauthorized - Malformed authorization header' });
  }
  
  const token = authHeader.split(' ')[1];
  console.log('Token extracted:', token ? token.substring(0, 10) + '...' : 'none');
  
  if (!token) {
    console.log('No token extracted');
    return res.status(401).json({ message: 'Unauthorized' });
  }
  
  try {
    const user = jwt.verify(token, JWT_SECRET);
    console.log('Token verified successfully for user:', user.username);
    req.user = user;
    next();
  } catch (err) {
    console.error('Token verification error:', err);
    return res.status(403).json({ message: 'Forbidden' });
  }
};

// Health check route
app.get('/api/health', (req, res) => {
  res.status(200).json({ 
    status: 'OK', 
    message: 'Server is running',
    nodeVersion: process.version,
    jwtVersion: require('jsonwebtoken/package.json').version
  });
});

// Direct login route (place BEFORE routes registration)
app.post('/api/auth/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    console.log('Login attempt:', { username, passwordLength: password?.length });
    
    // For demo purposes, hardcoded credentials
    if (username === 'admin' && password === 'mushrooms123') {
      console.log('Credentials match, generating JWT token');
      
      // Generate JWT token
      const payload = { id: 'admin-id', username: 'admin', role: 'admin' };
      const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '1d' });
      
      console.log('Token generated successfully:', token.substring(0, 10) + '...');
      
      return res.json({
        token,
        user: payload
      });
    }
    
    console.log('Invalid credentials');
    res.status(400).json({ message: 'Invalid credentials' });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/batches', authenticateToken, batchRoutes);
app.use('/api/recipes', authenticateToken, recipeRoutes);

// Serve static files in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('build'));
  
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
  });
}

// Start server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));