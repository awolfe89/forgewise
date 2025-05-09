// services/authService.js
import api from './api';

// Login user
export const login = async (username, password) => {
  try {
    console.log('Attempting login with:', username);
    
    const response = await api.post('/auth/login', { username, password });
    
    console.log('Login response received');
    
    // Get token and user from response
    const { token, user } = response.data;
    
    // Verify the token is in the correct format (for debugging)
    if (!token || typeof token !== 'string' || token.length < 50) {
      console.warn('Warning: Token might not be in correct JWT format:', 
                  token ? `${token.substring(0, 10)}... (${token.length} chars)` : 'No token');
    } else {
      console.log('Token received looks like a valid JWT format:', 
                 `${token.substring(0, 10)}... (${token.length} chars)`);
    }
    
    // Save token and user to localStorage
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
    
    return { success: true, data: user };
  } catch (error) {
    console.error('Login error:', error.response?.data || error.message);
    return {
      success: false,
      message: error.response?.data?.message || 'Login failed'
    };
  }
};