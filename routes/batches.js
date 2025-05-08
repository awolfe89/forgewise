const express = require('express');
const router = express.Router();
const Batch = require('../models/Batch');

// Get all batches for current user
router.get('/', async (req, res) => {
  try {
    const batches = await Batch.find({ userId: req.user.id })
      .sort({ startDate: -1 });
    
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
router.post('/', async (req, res) => {
  try {
    const newBatch = new Batch({
      ...req.body,
      userId: req.user.id
    });
    
    const batch = await newBatch.save();
    res.status(201).json(batch);
  } catch (error) {
    console.error('Create batch error:', error);
    res.status(500).json({ message: 'Server error' });
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
    const batch = await Batch.findOne({
      _id: req.params.id,
      userId: req.user.id
    });
    
    if (!batch) {
      return res.status(404).json({ message: 'Batch not found' });
    }
    
    await batch.remove();
    res.json({ message: 'Batch removed' });
  } catch (error) {
    console.error('Delete batch error:', error);
    
    if (error.kind === 'ObjectId') {
      return res.status(404).json({ message: 'Batch not found' });
    }
    
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;