// Create a file called test-token.js
const jwt = require('jsonwebtoken');

// The secret key used to sign tokens
const JWT_SECRET = process.env.JWT_SECRET || 'forgewise-secret-key-for-jwt-tokens';

// Create a token with the same payload format your app uses
const payload = { id: 'admin-id', username: 'admin', role: 'admin' };
const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '1d' });

console.log('Generated token:', token);
console.log('Token length:', token.length);

// Verify the token works
try {
  const decoded = jwt.verify(token, JWT_SECRET);
  console.log('Token verification successful!');
  console.log('Decoded payload:', decoded);
} catch (error) {
  console.error('Token verification failed:', error);
}

// Check a malformed token
const malformedToken = 'test-token-123';
try {
  const decoded = jwt.verify(malformedToken, JWT_SECRET);
  console.log('Malformed token verification successful (unexpected)!');
  console.log('Decoded payload:', decoded);
} catch (error) {
  console.error('Malformed token verification failed (expected):', error.message);
}