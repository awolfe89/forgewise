
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Auth/Login';
import Dashboard from './components/Dashboard/Dashboard';
import BatchList from './components/Batches/BatchList';
import BatchDetail from './components/Batches/BatchDetail';
import BatchForm from './components/Batches/BatchForm';
import RecipeList from './components/Recipes/RecipeList';
import RecipeDetail from './components/Recipes/RecipeDetail';
import RecipeForm from './components/Recipes/RecipeForm';
import Navbar from './components/UI/Navbar';
import { AuthProvider, useAuth } from './context/AuthContext';

// Protected route component
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  
  return children;
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-100">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={
              <ProtectedRoute>
                <Navbar />
                <div className="container mx-auto px-4 py-8">
                  <Dashboard />
                </div>
              </ProtectedRoute>
            } />
            
            {/* Batch Routes */}
            <Route path="/batches" element={
              <ProtectedRoute>
                <Navbar />
                <div className="container mx-auto px-4 py-8">
                  <BatchList />
                </div>
              </ProtectedRoute>
            } />
            <Route path="/batches/:id" element={
              <ProtectedRoute>
                <Navbar />
                <div className="container mx-auto px-4 py-8">
                  <BatchDetail />
                </div>
              </ProtectedRoute>
            } />
            <Route path="/batches/new" element={
              <ProtectedRoute>
                <Navbar />
                <div className="container mx-auto px-4 py-8">
                  <BatchForm />
                </div>
              </ProtectedRoute>
            } />
            <Route path="/batches/edit/:id" element={
              <ProtectedRoute>
                <Navbar />
                <div className="container mx-auto px-4 py-8">
                  <BatchForm />
                </div>
              </ProtectedRoute>
            } />
            
            {/* Recipe Routes */}
            <Route path="/recipes" element={
              <ProtectedRoute>
                <Navbar />
                <div className="container mx-auto px-4 py-8">
                  <RecipeList />
                </div>
              </ProtectedRoute>
            } />
            <Route path="/recipes/:id" element={
              <ProtectedRoute>
                <Navbar />
                <div className="container mx-auto px-4 py-8">
                  <RecipeDetail />
                </div>
              </ProtectedRoute>
            } />
            <Route path="/recipes/new" element={
              <ProtectedRoute>
                <Navbar />
                <div className="container mx-auto px-4 py-8">
                  <RecipeForm />
                </div>
              </ProtectedRoute>
            } />
            <Route path="/recipes/edit/:id" element={
              <ProtectedRoute>
                <Navbar />
                <div className="container mx-auto px-4 py-8">
                  <RecipeForm />
                </div>
              </ProtectedRoute>
            } />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
