const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken'); // Make sure to require jsonwebtoken
const app = express();

// JWT Secret - use the same one as your real server
const JWT_SECRET = process.env.JWT_SECRET || 'forgewise-secret-key-for-jwt-tokens';

// Middleware
app.use(cors());
app.use(express.json());

// Login endpoint with proper JWT token
app.post('/api/auth/login', (req, res) => {
  console.log('Login endpoint hit with body:', req.body);
  
  const { username, password } = req.body;
  
  if (username === 'admin' && password === 'mushrooms123') {
    console.log('Login successful, generating JWT token');
    
    // Create a proper JWT token with the same structure as your real server
    const payload = { 
      id: 'admin-id', 
      username: 'admin', 
      role: 'admin' 
    };
    
    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '1d' });
    
    return res.json({
      token,
      user: payload
    });
  }
  
  console.log('Login failed - invalid credentials');
  res.status(400).json({ message: 'Invalid credentials' });
});

// Authentication middleware for protected routes
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  
  if (!token) {
    return res.status(401).json({ message: 'Unauthorized - No token provided' });
  }
  
  try {
    const user = jwt.verify(token, JWT_SECRET);
    req.user = user;
    next();
  } catch (error) {
    console.error('Token verification error:', error);
    return res.status(403).json({ message: 'Forbidden' });
  }
};

// ... Keep the rest of your test server code ...

// Batches endpoint - now with proper token verification
app.get('/api/batches', authenticateToken, (req, res) => {
  console.log('Batches endpoint hit');
  console.log('User from token:', req.user);
  
  // Return mock batch data
  res.json([
    {
      _id: "1",
      batchId: "Oyster-01",
      startDate: "2025-04-15",
      speciesStrain: "Pleurotus ostreatus — Blue Oyster",
      // ... rest of your mock data ...
    },
    // ... more batches ...
  ]);
});

// ... Rest of your endpoints with authenticateToken middleware ...

// Start server
const PORT = 5001;
app.listen(PORT, () => console.log(`Test server running on port ${PORT}`));