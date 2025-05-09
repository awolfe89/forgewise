const express = require('express');
const router = express.Router();
const Batch = require('../models/Batch');

// Get all batches for current user
router.get('/', async (req, res) => {
  try {
    console.log('GET /batches request from user:', req.user.id);
    
    // Find batches for the current user
    const batches = await Batch.find({ userId: req.user.id })
      .sort({ startDate: -1 });
    
    console.log('Found batches in database:', batches.length);
    console.log('Batch IDs:', batches.map(b => b._id));
    
    res.json(batches);
  } catch (error) {
    console.error('Get batches error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get a specific batch
router.get('/:id', async (req, res) => {
  try {
    const batch = await Batch.findOne({
      _id: req.params.id,
      userId: req.user.id
    });
    
    if (!batch) {
      return res.status(404).json({ message: 'Batch not found' });
    }
    
    res.json(batch);
  } catch (error) {
    console.error('Get batch error:', error);
    
    if (error.kind === 'ObjectId') {
      return res.status(404).json({ message: 'Batch not found' });
    }
    
    res.status(500).json({ message: 'Server error' });
  }
});

// Create a new batch
// routes/batches.js - in the POST endpoint for creating a batch
router.post('/', async (req, res) => {
  try {
    // Clone the request body to avoid modifying the original
    const batchData = { ...req.body };
    console.log('Creating batch with user ID:', req.user.id);
    
    // Add userId from the token
    batchData.userId = req.user.id;
    
    // Handle environmentalLogs - if empty or contains invalid data
    if (!batchData.environmentalLogs || batchData.environmentalLogs.length === 0) {
      delete batchData.environmentalLogs; // Remove the field entirely
    } else {
      // Filter out any invalid entries (those without dates)
      batchData.environmentalLogs = batchData.environmentalLogs.filter(
        log => log.date && log.date.trim() !== ''
      );
      
      // If none are valid, remove the field
      if (batchData.environmentalLogs.length === 0) {
        delete batchData.environmentalLogs;
      }
    }
    
    // Handle fruitingPhases - if empty or contains invalid data
    if (!batchData.fruitingPhases || batchData.fruitingPhases.length === 0) {
      delete batchData.fruitingPhases; // Remove the field entirely
    } else {
      // Filter out any invalid entries (those without dates or actions)
      batchData.fruitingPhases = batchData.fruitingPhases.filter(
        phase => phase.date && phase.date.trim() !== '' && phase.action && phase.action.trim() !== ''
      );
      
      // If none are valid, remove the field
      if (batchData.fruitingPhases.length === 0) {
        delete batchData.fruitingPhases;
      }
    }
    
    console.log('Creating batch with sanitized data:', JSON.stringify(batchData));
    
    const newBatch = new Batch(batchData);
    const batch = await newBatch.save();
    
    res.status(201).json(batch);
  } catch (error) {
    console.error('Create batch error:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Update a batch
router.put('/:id', async (req, res) => {
  try {
    const batch = await Batch.findOne({
      _id: req.params.id,
      userId: req.user.id
    });
    
    if (!batch) {
      return res.status(404).json({ message: 'Batch not found' });
    }
    
    // Update fields
    const updatedFields = req.body;
    
    // Remove fields that shouldn't be updated directly
    delete updatedFields._id;
    delete updatedFields.userId;
    delete updatedFields.createdAt;
    
    // Set update timestamp
    updatedFields.updatedAt = Date.now();
    
    const updatedBatch = await Batch.findByIdAndUpdate(
      req.params.id,
      { $set: updatedFields },
      { new: true }
    );
    
    res.json(updatedBatch);
  } catch (error) {
    console.error('Update batch error:', error);
    
    if (error.kind === 'ObjectId') {
      return res.status(404).json({ message: 'Batch not found' });
    }
    
    res.status(500).json({ message: 'Server error' });
  }
});

// Delete a batch
router.delete('/:id', async (req, res) => {
  try {
    const batchId = req.params.id;
    console.log('Delete request for batch ID:', batchId);
    
    // Validate that the ID is in the correct format for MongoDB ObjectId
    if (!mongoose.Types.ObjectId.isValid(batchId)) {
      console.log('Invalid ObjectId format:', batchId);
      
      // For localStorage batches (which might not have valid ObjectIds)
      if (batchId.length < 24) {
        return res.status(404).json({ message: 'Batch not found - Invalid ID format' });
      }
    }
    
    // Try to find the batch first
    const batch = await Batch.findOne({
      _id: batchId,
      userId: req.user.id
    });
    
    if (!batch) {
      return res.status(404).json({ message: 'Batch not found' });
    }
    
    // Use deleteOne instead of remove (which is deprecated)
    await Batch.deleteOne({ _id: batchId });
    
    res.json({ message: 'Batch removed' });
  } catch (error) {
    console.error('Delete batch error:', error);
    
    if (error.kind === 'ObjectId') {
      return res.status(404).json({ message: 'Batch not found - Invalid ID' });
    }
    
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

module.exports = router;